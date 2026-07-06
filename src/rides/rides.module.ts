import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { RedisModule } from '../redis/redis.module';
import { DriversModule } from '../drivers/drivers.module';

@Module({
  imports: [
    RedisModule,
    DriversModule,
    BullModule.registerQueue({
      name: 'timeoutQueue',
    }),
  ],
  providers: [RidesService],
  controllers: [RidesController],
  exports: [RidesService],
})
export class RidesModule {}
