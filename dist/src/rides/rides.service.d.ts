import { Queue } from 'bullmq';
import { RedisService } from '../redis/redis.service';
import { DriversService } from '../drivers/drivers.service';
import { CreateRideDto, AcceptRideDto, RejectRideDto } from './dto/ride.dto';
export declare class RidesService {
    private readonly redisService;
    private readonly driversService;
    private readonly timeoutQueue;
    constructor(redisService: RedisService, driversService: DriversService, timeoutQueue: Queue);
    createRide(createRideDto: CreateRideDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RideStatus;
        updatedAt: Date;
        createdAt: Date;
        riderId: string;
        pickupLat: number;
        pickupLng: number;
        dropoffLat: number;
        dropoffLng: number;
        currentBatch: number;
        assignedDriverId: string | null;
        assignedAt: Date | null;
    }>;
    getRide(rideId: string): Promise<({
        offers: {
            id: string;
            rideId: string;
            driverId: string;
            batchNumber: number;
            notifiedAt: Date;
            respondedAt: Date | null;
            response: import("@prisma/client").$Enums.OfferResponse;
        }[];
        assignedDriver: {
            name: string;
            id: string;
            phone: string;
            vehicleType: string;
            status: import("@prisma/client").$Enums.DriverStatus;
            lastLat: number | null;
            lastLng: number | null;
            updatedAt: Date;
            createdAt: Date;
        } | null;
    } & {
        id: string;
        status: import("@prisma/client").$Enums.RideStatus;
        updatedAt: Date;
        createdAt: Date;
        riderId: string;
        pickupLat: number;
        pickupLng: number;
        dropoffLat: number;
        dropoffLng: number;
        currentBatch: number;
        assignedDriverId: string | null;
        assignedAt: Date | null;
    }) | null>;
    notifyNextBatch(rideId: string, batchNumber: number, lat: number, lng: number): Promise<{
        rideId: string;
        notifiedDrivers: unknown[];
        batchNumber: number;
    } | undefined>;
    acceptRide(rideId: string, acceptRideDto: AcceptRideDto): Promise<{
        ok: boolean;
        reason: string;
        driverId: string | undefined;
        rideId: string;
        ride?: undefined;
    } | {
        ok: boolean;
        reason: string;
        rideId: string;
        driverId: string;
        ride: {
            id: string;
            status: import("@prisma/client").$Enums.RideStatus;
            updatedAt: Date;
            createdAt: Date;
            riderId: string;
            pickupLat: number;
            pickupLng: number;
            dropoffLat: number;
            dropoffLng: number;
            currentBatch: number;
            assignedDriverId: string | null;
            assignedAt: Date | null;
        };
    }>;
    rejectRide(rideId: string, rejectRideDto: RejectRideDto): Promise<{
        ok: boolean;
        rideId: string;
        driverId: string;
    }>;
    handleTimeoutJob(rideId: string, batchNumber: number, lat: number, lng: number): Promise<void>;
}
