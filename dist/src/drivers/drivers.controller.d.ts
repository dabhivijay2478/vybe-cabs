import { DriversService } from './drivers.service';
import { CreateDriverDto, UpdateDriverLocationDto, UpdateDriverStatusDto } from './dto/driver.dto';
export declare class DriversController {
    private readonly driversService;
    constructor(driversService: DriversService);
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
    updateDriverLocation(driverId: string, updateLocationDto: UpdateDriverLocationDto): Promise<{
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
    updateDriverStatus(driverId: string, updateStatusDto: UpdateDriverStatusDto): Promise<{
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
}
