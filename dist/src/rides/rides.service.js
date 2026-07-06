"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const prisma_1 = __importDefault(require("../common/prisma"));
const bullmq_1 = require("bullmq");
const redis_service_1 = require("../redis/redis.service");
const drivers_service_1 = require("../drivers/drivers.service");
let RidesService = class RidesService {
    redisService;
    driversService;
    timeoutQueue;
    constructor(redisService, driversService, timeoutQueue) {
        this.redisService = redisService;
        this.driversService = driversService;
        this.timeoutQueue = timeoutQueue;
    }
    async createRide(createRideDto) {
        const ride = await prisma_1.default.ride.create({
            data: {
                riderId: createRideDto.riderId,
                pickupLat: createRideDto.pickup.lat,
                pickupLng: createRideDto.pickup.lng,
                dropoffLat: createRideDto.dropoff.lat,
                dropoffLng: createRideDto.dropoff.lng,
                status: 'SEARCHING',
            },
        });
        await this.redisService.setRideStatus(ride.id, 'SEARCHING');
        await this.notifyNextBatch(ride.id, 0, createRideDto.pickup.lat, createRideDto.pickup.lng);
        return ride;
    }
    async getRide(rideId) {
        return prisma_1.default.ride.findUnique({
            where: { id: rideId },
            include: {
                assignedDriver: true,
                offers: true,
            },
        });
    }
    async notifyNextBatch(rideId, batchNumber, lat, lng) {
        const nearbyDrivers = await this.redisService.getAvailableDriversNearby(lat, lng);
        const allNotified = new Set();
        for (let i = 0; i <= batchNumber; i++) {
            const notified = await this.redisService.getNotifiedDrivers(rideId, i);
            notified.forEach((d) => allNotified.add(d));
        }
        const newDrivers = nearbyDrivers.filter((d) => !allNotified.has(d));
        if (newDrivers.length === 0) {
            await this.redisService.setRideStatus(rideId, 'TIMEOUT');
            await prisma_1.default.ride.update({
                where: { id: rideId },
                data: { status: 'TIMEOUT' },
            });
            return;
        }
        for (const driver of newDrivers) {
            await this.redisService.addNotifiedDriver(rideId, batchNumber, driver);
            await prisma_1.default.rideOffer.create({
                data: {
                    rideId,
                    driverId: driver,
                    batchNumber,
                },
            });
        }
        await prisma_1.default.ride.update({
            where: { id: rideId },
            data: { currentBatch: batchNumber },
        });
        await this.timeoutQueue.add('check-timeout', {
            rideId,
            batchNumber,
            lat,
            lng,
        }, {
            delay: 10000,
        });
        return {
            rideId,
            notifiedDrivers: newDrivers,
            batchNumber,
        };
    }
    async acceptRide(rideId, acceptRideDto) {
        const ride = await this.getRide(rideId);
        if (!ride) {
            throw new common_1.BadRequestException('Ride not found');
        }
        if (ride.status !== 'SEARCHING') {
            throw new common_1.BadRequestException(`Ride is not in SEARCHING state, current state: ${ride.status}`);
        }
        const result = await this.redisService.acceptRide(rideId, ride.currentBatch, acceptRideDto.driverId);
        if (!result.ok) {
            await prisma_1.default.rideOffer.updateMany({
                where: {
                    rideId,
                    driverId: acceptRideDto.driverId,
                    batchNumber: ride.currentBatch,
                },
                data: {
                    response: 'REJECTED',
                    respondedAt: new Date(),
                },
            });
            return {
                ok: false,
                reason: result.reason,
                driverId: result.driverId,
                rideId,
            };
        }
        const updatedRide = await prisma_1.default.ride.update({
            where: { id: rideId, status: 'SEARCHING' },
            data: {
                status: 'ASSIGNED',
                assignedDriverId: acceptRideDto.driverId,
                assignedAt: new Date(),
            },
        });
        await prisma_1.default.rideOffer.updateMany({
            where: {
                rideId,
                driverId: acceptRideDto.driverId,
                batchNumber: ride.currentBatch,
            },
            data: {
                response: 'ACCEPTED',
                respondedAt: new Date(),
            },
        });
        await prisma_1.default.rideOffer.updateMany({
            where: {
                rideId,
                driverId: { not: acceptRideDto.driverId },
                batchNumber: ride.currentBatch,
                response: 'PENDING',
            },
            data: {
                response: 'REJECTED',
                respondedAt: new Date(),
            },
        });
        await this.driversService.updateDriverStatus(acceptRideDto.driverId, {
            status: 'BUSY',
        });
        return {
            ok: true,
            reason: 'ASSIGNED',
            rideId,
            driverId: acceptRideDto.driverId,
            ride: updatedRide,
        };
    }
    async rejectRide(rideId, rejectRideDto) {
        const ride = await this.getRide(rideId);
        if (!ride) {
            throw new common_1.BadRequestException('Ride not found');
        }
        await prisma_1.default.rideOffer.updateMany({
            where: {
                rideId,
                driverId: rejectRideDto.driverId,
                batchNumber: ride.currentBatch,
            },
            data: {
                response: 'REJECTED',
                respondedAt: new Date(),
            },
        });
        return { ok: true, rideId, driverId: rejectRideDto.driverId };
    }
    async handleTimeoutJob(rideId, batchNumber, lat, lng) {
        const ride = await this.getRide(rideId);
        if (!ride) {
            return;
        }
        const status = await this.redisService.getRideStatus(rideId);
        if (status !== 'SEARCHING') {
            return;
        }
        if (ride.currentBatch !== batchNumber) {
            return;
        }
        const nextBatchNumber = batchNumber + 1;
        await this.notifyNextBatch(rideId, nextBatchNumber, lat, lng);
    }
};
exports.RidesService = RidesService;
exports.RidesService = RidesService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bull_1.InjectQueue)('timeoutQueue')),
    __metadata("design:paramtypes", [redis_service_1.RedisService,
        drivers_service_1.DriversService,
        bullmq_1.Queue])
], RidesService);
//# sourceMappingURL=rides.service.js.map