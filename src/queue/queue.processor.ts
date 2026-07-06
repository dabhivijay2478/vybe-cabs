import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bullmq';
import { RidesService } from '../rides/rides.service';

@Processor('timeoutQueue')
export class QueueProcessor {
  constructor(private readonly ridesService: RidesService) {}

  @Process('check-timeout')
  async handleTimeoutJob(job: Job) {
    const { rideId, batchNumber, lat, lng } = job.data;
    await this.ridesService.handleTimeoutJob(rideId, batchNumber, lat, lng);
  }
}
