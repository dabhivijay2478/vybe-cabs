import { RedisService } from '../redis/redis.service';
import { CreateDriverDto, UpdateDriverStatusDto } from './dto/driver.dto';
export declare class DriversService {
    private readonly redisService;
    constructor(redisService: RedisService);
    createDriver(createDriverDto: CreateDriverDto): Promise<{
        name: string;
        id: string;
        phone: string;
        vehicleType: string;
        status: import("@prisma/client").$Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    }>;
    getDriver(driverId: string): Promise<{
        name: string;
        id: string;
        phone: string;
        vehicleType: string;
        status: import("@prisma/client").$Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    } | null>;
    updateDriverLocation(driverId: string, lat: number, lng: number): Promise<{
        name: string;
        id: string;
        phone: string;
        vehicleType: string;
        status: import("@prisma/client").$Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    }>;
    updateDriverStatus(driverId: string, statusDto: UpdateDriverStatusDto): Promise<{
        name: string;
        id: string;
        phone: string;
        vehicleType: string;
        status: import("@prisma/client").$Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    }>;
    getAllDrivers(): Promise<{
        name: string;
        id: string;
        phone: string;
        vehicleType: string;
        status: import("@prisma/client").$Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    }[]>;
}
