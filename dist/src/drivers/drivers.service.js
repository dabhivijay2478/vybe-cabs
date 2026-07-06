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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = __importDefault(require("../common/prisma"));
const redis_service_1 = require("../redis/redis.service");
let DriversService = class DriversService {
    redisService;
    constructor(redisService) {
        this.redisService = redisService;
    }
    async createDriver(createDriverDto) {
        return prisma_1.default.driver.create({
            data: {
                name: createDriverDto.name,
                phone: createDriverDto.phone,
                vehicleType: createDriverDto.vehicleType,
                status: 'OFFLINE',
            },
        });
    }
    async getDriver(driverId) {
        return prisma_1.default.driver.findUnique({
            where: { id: driverId },
        });
    }
    async updateDriverLocation(driverId, lat, lng) {
        await this.redisService.setLocation(driverId, lat, lng);
        return prisma_1.default.driver.update({
            where: { id: driverId },
            data: {
                lastLat: lat,
                lastLng: lng,
            },
        });
    }
    async updateDriverStatus(driverId, statusDto) {
        const status = statusDto.status;
        if (status === 'AVAILABLE') {
            await this.redisService.addAvailableDriver(driverId);
        }
        else {
            await this.redisService.removeAvailableDriver(driverId);
        }
        return prisma_1.default.driver.update({
            where: { id: driverId },
            data: { status },
        });
    }
    async getAllDrivers() {
        return prisma_1.default.driver.findMany();
    }
};
exports.DriversService = DriversService;
exports.DriversService = DriversService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], DriversService);
//# sourceMappingURL=drivers.service.js.map