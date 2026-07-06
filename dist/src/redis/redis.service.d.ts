import { Redis } from 'ioredis';
interface AcceptRideResult {
    ok: boolean;
    reason: string;
    driverId?: string;
    status?: string;
}
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    setLocation(driverId: string, lat: number, lng: number): Promise<number>;
    getAvailableDriversNearby(lat: number, lng: number, radiusKm?: number): Promise<unknown[]>;
    addAvailableDriver(driverId: string): Promise<number>;
    removeAvailableDriver(driverId: string): Promise<number>;
    getRideStatus(rideId: string): Promise<string | null>;
    setRideStatus(rideId: string, status: string): Promise<"OK">;
    addNotifiedDriver(rideId: string, batchNumber: number, driverId: string): Promise<number>;
    getNotifiedDrivers(rideId: string, batchNumber: number): Promise<string[]>;
    acceptRide(rideId: string, batchNumber: number, driverId: string): Promise<AcceptRideResult>;
    getAssignedDriver(rideId: string): Promise<string | null>;
    deleteRideKeys(rideId: string, maxBatch: number): Promise<number | undefined>;
    getClient(): Redis;
}
export {};
