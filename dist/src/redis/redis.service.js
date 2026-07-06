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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
let RedisService = class RedisService {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    async setLocation(driverId, lat, lng) {
        return this.redis.geoadd('drivers:locations', lng, lat, driverId);
    }
    async getAvailableDriversNearby(lat, lng, radiusKm = 5) {
        const nearbyDrivers = await this.redis.geosearch('drivers:locations', 'FROMLONLAT', lng, lat, 'BYRADIUS', radiusKm, 'km', 'ASC', 'COUNT', '20');
        const availableDrivers = await this.redis.smembers('drivers:available');
        const result = (nearbyDrivers || []).filter((driver) => availableDrivers.includes(driver));
        return result;
    }
    async addAvailableDriver(driverId) {
        return this.redis.sadd('drivers:available', driverId);
    }
    async removeAvailableDriver(driverId) {
        return this.redis.srem('drivers:available', driverId);
    }
    async getRideStatus(rideId) {
        return this.redis.get(`ride:${rideId}:status`);
    }
    async setRideStatus(rideId, status) {
        return this.redis.set(`ride:${rideId}:status`, status);
    }
    async addNotifiedDriver(rideId, batchNumber, driverId) {
        return this.redis.sadd(`ride:${rideId}:notified:${batchNumber}`, driverId);
    }
    async getNotifiedDrivers(rideId, batchNumber) {
        return this.redis.smembers(`ride:${rideId}:notified:${batchNumber}`);
    }
    async acceptRide(rideId, batchNumber, driverId) {
        const result = await this.redis.acceptRide(`ride:${rideId}:status`, `ride:${rideId}:assigned_driver`, `ride:${rideId}:notified:${batchNumber}`, driverId);
        return JSON.parse(result);
    }
    async getAssignedDriver(rideId) {
        return this.redis.get(`ride:${rideId}:assigned_driver`);
    }
    async deleteRideKeys(rideId, maxBatch) {
        const keys = [`ride:${rideId}:status`, `ride:${rideId}:assigned_driver`];
        for (let i = 0; i <= maxBatch; i++) {
            keys.push(`ride:${rideId}:notified:${i}`);
        }
        if (keys.length > 0) {
            return this.redis.del(...keys);
        }
    }
    getClient() {
        return this.redis;
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.Redis])
], RedisService);
//# sourceMappingURL=redis.service.js.map