import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueProcessor } from './queue.processor';
import { RidesModule } from '../rides/rides.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'timeoutQueue',
    }),
    RidesModule,
  ],
  providers: [QueueProcessor],
  exports: [BullModule],
})
export class QueueModule {}
