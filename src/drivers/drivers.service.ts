import { Injectable } from '@nestjs/common';
import prisma from '../common/prisma';
import { RedisService } from '../redis/redis.service';
import { CreateDriverDto, UpdateDriverStatusDto } from './dto/driver.dto';

@Injectable()
export class DriversService {
  constructor(private readonly redisService: RedisService) {}

  async createDriver(createDriverDto: CreateDriverDto) {
    return prisma.driver.create({
      data: {
        name: createDriverDto.name,
        phone: createDriverDto.phone,
        vehicleType: createDriverDto.vehicleType,
        status: 'OFFLINE',
      },
    });
  }

  async getDriver(driverId: string) {
    return prisma.driver.findUnique({
      where: { id: driverId },
    });
  }

  async updateDriverLocation(driverId: string, lat: number, lng: number) {
    // Update in Redis for fast geo queries
    await this.redisService.setLocation(driverId, lat, lng);

    // Update in Postgres as well for persistence
    return prisma.driver.update({
      where: { id: driverId },
      data: {
        lastLat: lat,
        lastLng: lng,
      },
    });
  }

  async updateDriverStatus(driverId: string, statusDto: UpdateDriverStatusDto) {
    const status = statusDto.status;

    if (status === 'AVAILABLE') {
      await this.redisService.addAvailableDriver(driverId);
    } else {
      await this.redisService.removeAvailableDriver(driverId);
    }

    return prisma.driver.update({
      where: { id: driverId },
      data: { status },
    });
  }

  async getAllDrivers() {
    return prisma.driver.findMany();
  }
}
