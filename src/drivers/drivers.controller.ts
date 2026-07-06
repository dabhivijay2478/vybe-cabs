import { Controller, Post, Get, Patch, Param, Body } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto, UpdateDriverLocationDto, UpdateDriverStatusDto } from './dto/driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.createDriver(createDriverDto);
  }

  @Get()
  getAllDrivers() {
    return this.driversService.getAllDrivers();
  }

  @Get(':id')
  getDriver(@Param('id') driverId: string) {
    return this.driversService.getDriver(driverId);
  }

  @Post(':id/location')
  updateDriverLocation(
    @Param('id') driverId: string,
    @Body() updateLocationDto: UpdateDriverLocationDto,
  ) {
    return this.driversService.updateDriverLocation(
      driverId,
      updateLocationDto.lat,
      updateLocationDto.lng,
    );
  }

  @Post(':id/status')
  updateDriverStatus(
    @Param('id') driverId: string,
    @Body() updateStatusDto: UpdateDriverStatusDto,
  ) {
    return this.driversService.updateDriverStatus(driverId, updateStatusDto);
  }
}
