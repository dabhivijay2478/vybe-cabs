"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const redis_service_1 = require("./redis.service");
let RedisModule = class RedisModule {
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'REDIS_CLIENT',
                useFactory: () => {
                    const redis = new ioredis_1.Redis(process.env.REDIS_URL || 'redis://localhost:6379');
                    redis.defineCommand('acceptRide', {
                        numberOfKeys: 3,
                        lua: `
            -- KEYS[1] = ride:{id}:status
            -- KEYS[2] = ride:{id}:assigned_driver
            -- KEYS[3] = ride:{id}:notified:{batch}
            -- ARGV[1] = driverId

            local status = redis.call('GET', KEYS[1])
            if status ~= 'SEARCHING' then
              return cjson.encode({ok = false, reason = 'RIDE_NOT_SEARCHING', status = status})
            end

            local wasNotified = redis.call('SISMEMBER', KEYS[3], ARGV[1])
            if wasNotified == 0 then
              return cjson.encode({ok = false, reason = 'DRIVER_NOT_IN_CURRENT_BATCH'})
            end

            local set = redis.call('SET', KEYS[2], ARGV[1], 'NX')
            if set then
              redis.call('SET', KEYS[1], 'ASSIGNED')
              return cjson.encode({ok = true, reason = 'ASSIGNED', driverId = ARGV[1]})
            end

            -- someone already won the race
            local existing = redis.call('GET', KEYS[2])
            if existing == ARGV[1] then
              -- same driver retried (network retry, double-tap) — idempotent success
              return cjson.encode({ok = true, reason = 'ALREADY_ASSIGNED_TO_YOU', driverId = existing})
            end

            return cjson.encode({ok = false, reason = 'ALREADY_ASSIGNED_TO_OTHER', driverId = existing})
          `,
                    });
                    return redis;
                },
            },
            redis_service_1.RedisService,
        ],
        exports: ['REDIS_CLIENT', redis_service_1.RedisService],
    })
], RedisModule);
//# sourceMappingURL=redis.module.js.map