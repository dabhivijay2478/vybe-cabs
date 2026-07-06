import { Controller, Post, Get, Param, Body, ConflictException } from '@nestjs/common';
import { RidesService } from './rides.service';
import { CreateRideDto, AcceptRideDto, RejectRideDto } from './dto/ride.dto';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post()
  async createRide(@Body() createRideDto: CreateRideDto) {
    return this.ridesService.createRide(createRideDto);
  }

  @Get(':id')
  async getRide(@Param('id') rideId: string) {
    return this.ridesService.getRide(rideId);
  }

  @Post(':id/accept')
  async acceptRide(@Param('id') rideId: string, @Body() acceptRideDto: AcceptRideDto) {
    const result = await this.ridesService.acceptRide(rideId, acceptRideDto);

    if (!result.ok) {
      throw new ConflictException({
        ok: false,
        reason: result.reason,
        driverId: result.driverId,
      });
    }

    return result;
  }

  @Post(':id/reject')
  async rejectRide(@Param('id') rideId: string, @Body() rejectRideDto: RejectRideDto) {
    return this.ridesService.rejectRide(rideId, rejectRideDto);
  }
}
