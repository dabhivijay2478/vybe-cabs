import { Injectable, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';

interface AcceptRideResult {
  ok: boolean;
  reason: string;
  driverId?: string;
  status?: string;
}

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async setLocation(driverId: string, lat: number, lng: number) {
    return this.redis.geoadd('drivers:locations', lng, lat, driverId);
  }

  async getAvailableDriversNearby(lat: number, lng: number, radiusKm: number = 5) {
    const nearbyDrivers = await this.redis.geosearch(
      'drivers:locations',
      'FROMLONLAT',
      lng,
      lat,
      'BYRADIUS',
      radiusKm,
      'km',
      'ASC',
      'COUNT',
      '20',
    );

    // Intersect with available drivers
    const availableDrivers = await this.redis.smembers('drivers:available');
    const result = (nearbyDrivers || []).filter((driver: any) => availableDrivers.includes(driver));
    return result;
  }

  async addAvailableDriver(driverId: string) {
    return this.redis.sadd('drivers:available', driverId);
  }

  async removeAvailableDriver(driverId: string) {
    return this.redis.srem('drivers:available', driverId);
  }

  async getRideStatus(rideId: string) {
    return this.redis.get(`ride:${rideId}:status`);
  }

  async setRideStatus(rideId: string, status: string) {
    return this.redis.set(`ride:${rideId}:status`, status);
  }

  async addNotifiedDriver(rideId: string, batchNumber: number, driverId: string) {
    return this.redis.sadd(`ride:${rideId}:notified:${batchNumber}`, driverId);
  }

  async getNotifiedDrivers(rideId: string, batchNumber: number) {
    return this.redis.smembers(`ride:${rideId}:notified:${batchNumber}`);
  }

  async acceptRide(rideId: string, batchNumber: number, driverId: string): Promise<AcceptRideResult> {
    const result = await (this.redis as any).acceptRide(
      `ride:${rideId}:status`,
      `ride:${rideId}:assigned_driver`,
      `ride:${rideId}:notified:${batchNumber}`,
      driverId,
    );
    return JSON.parse(result);
  }

  async getAssignedDriver(rideId: string) {
    return this.redis.get(`ride:${rideId}:assigned_driver`);
  }

  async deleteRideKeys(rideId: string, maxBatch: number) {
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
}
