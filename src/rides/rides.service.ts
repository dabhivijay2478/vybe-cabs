import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import prisma from '../common/prisma';
import { Queue } from 'bullmq';
import { RedisService } from '../redis/redis.service';
import { DriversService } from '../drivers/drivers.service';
import { CreateRideDto, AcceptRideDto, RejectRideDto } from './dto/ride.dto';

@Injectable()
export class RidesService {
  constructor(
    private readonly redisService: RedisService,
    private readonly driversService: DriversService,
    @InjectQueue('timeoutQueue') private readonly timeoutQueue: Queue,
  ) {}

  async createRide(createRideDto: CreateRideDto) {
    // Create ride in Postgres
    const ride = await prisma.ride.create({
      data: {
        riderId: createRideDto.riderId,
        pickupLat: createRideDto.pickup.lat,
        pickupLng: createRideDto.pickup.lng,
        dropoffLat: createRideDto.dropoff.lat,
        dropoffLng: createRideDto.dropoff.lng,
        status: 'SEARCHING',
      },
    });

    // Initialize Redis state
    await this.redisService.setRideStatus(ride.id, 'SEARCHING');

    // Start first batch search
    await this.notifyNextBatch(ride.id, 0, createRideDto.pickup.lat, createRideDto.pickup.lng);

    return ride;
  }

  async getRide(rideId: string) {
    return prisma.ride.findUnique({
      where: { id: rideId },
      include: {
        assignedDriver: true,
        offers: true,
      },
    });
  }

  async notifyNextBatch(rideId: string, batchNumber: number, lat: number, lng: number) {
    // Get available nearby drivers
    const nearbyDrivers = await this.redisService.getAvailableDriversNearby(lat, lng);

    // Get already notified drivers across all batches
    const allNotified = new Set();
    for (let i = 0; i <= batchNumber; i++) {
      const notified = await this.redisService.getNotifiedDrivers(rideId, i);
      notified.forEach((d) => allNotified.add(d));
    }

    // Filter out already notified drivers
    const newDrivers = nearbyDrivers.filter((d) => !allNotified.has(d));

    if (newDrivers.length === 0) {
      // No drivers available, mark as timeout
      await this.redisService.setRideStatus(rideId, 'TIMEOUT');
      await prisma.ride.update({
        where: { id: rideId },
        data: { status: 'TIMEOUT' },
      });
      return;
    }

    // Add drivers to notified set for this batch
    for (const driver of newDrivers) {
      await this.redisService.addNotifiedDriver(rideId, batchNumber, driver as string);
      // Record in database
      await prisma.rideOffer.create({
        data: {
          rideId,
          driverId: driver as string,
          batchNumber,
        },
      });
    }

    // Update ride with current batch
    await prisma.ride.update({
      where: { id: rideId },
      data: { currentBatch: batchNumber },
    });

    // Schedule timeout job for this batch
    await this.timeoutQueue.add(
      'check-timeout',
      {
        rideId,
        batchNumber,
        lat,
        lng,
      },
      {
        delay: 10000, // 10 seconds
      },
    );

    // Emit WebSocket notifications (handled by gateway)
    return {
      rideId,
      notifiedDrivers: newDrivers,
      batchNumber,
    };
  }

  async acceptRide(rideId: string, acceptRideDto: AcceptRideDto) {
    const ride = await this.getRide(rideId);

    if (!ride) {
      throw new BadRequestException('Ride not found');
    }

    if (ride.status !== 'SEARCHING') {
      throw new BadRequestException(`Ride is not in SEARCHING state, current state: ${ride.status}`);
    }

    // Call Lua script for atomic acceptance
    const result = await this.redisService.acceptRide(
      rideId,
      ride.currentBatch,
      acceptRideDto.driverId,
    );

    if (!result.ok) {
      // Update offer status to REJECTED
      await prisma.rideOffer.updateMany({
        where: {
          rideId,
          driverId: acceptRideDto.driverId,
          batchNumber: ride.currentBatch,
        },
        data: {
          response: 'REJECTED',
          respondedAt: new Date(),
        },
      });

      return {
        ok: false,
        reason: result.reason,
        driverId: result.driverId,
        rideId,
      };
    }

    // Atomically update in Postgres
    const updatedRide = await prisma.ride.update({
      where: { id: rideId, status: 'SEARCHING' },
      data: {
        status: 'ASSIGNED',
        assignedDriverId: acceptRideDto.driverId,
        assignedAt: new Date(),
      },
    });

    // Record the acceptance
    await prisma.rideOffer.updateMany({
      where: {
        rideId,
        driverId: acceptRideDto.driverId,
        batchNumber: ride.currentBatch,
      },
      data: {
        response: 'ACCEPTED',
        respondedAt: new Date(),
      },
    });

    // Mark other drivers in this batch as rejected
    await prisma.rideOffer.updateMany({
      where: {
        rideId,
        driverId: { not: acceptRideDto.driverId },
        batchNumber: ride.currentBatch,
        response: 'PENDING',
      },
      data: {
        response: 'REJECTED',
        respondedAt: new Date(),
      },
    });

    // Mark driver as busy
    await this.driversService.updateDriverStatus(acceptRideDto.driverId, {
      status: 'BUSY',
    });

    return {
      ok: true,
      reason: 'ASSIGNED',
      rideId,
      driverId: acceptRideDto.driverId,
      ride: updatedRide,
    };
  }

  async rejectRide(rideId: string, rejectRideDto: RejectRideDto) {
    const ride = await this.getRide(rideId);

    if (!ride) {
      throw new BadRequestException('Ride not found');
    }

    // Update offer to rejected
    await prisma.rideOffer.updateMany({
      where: {
        rideId,
        driverId: rejectRideDto.driverId,
        batchNumber: ride.currentBatch,
      },
      data: {
        response: 'REJECTED',
        respondedAt: new Date(),
      },
    });

    return { ok: true, rideId, driverId: rejectRideDto.driverId };
  }

  async handleTimeoutJob(rideId: string, batchNumber: number, lat: number, lng: number) {
    const ride = await this.getRide(rideId);

    if (!ride) {
      return;
    }

    // Check if ride is still in SEARCHING state
    const status = await this.redisService.getRideStatus(rideId);

    if (status !== 'SEARCHING') {
      // Ride was already assigned, no action needed
      return;
    }

    // Check if this is still the current batch
    if (ride.currentBatch !== batchNumber) {
      // Already moved to next batch
      return;
    }

    // No one accepted, try next batch
    const nextBatchNumber = batchNumber + 1;
    await this.notifyNextBatch(rideId, nextBatchNumber, lat, lng);
  }
}
