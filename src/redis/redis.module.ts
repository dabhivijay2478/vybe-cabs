import { Module } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisService } from './redis.service';

@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
        
        // Define custom command for atomic accept
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
    RedisService,
  ],
  exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule {}
