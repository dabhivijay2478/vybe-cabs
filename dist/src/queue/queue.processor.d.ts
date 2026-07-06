import { Job } from 'bullmq';
import { RidesService } from '../rides/rides.service';
export declare class QueueProcessor {
    private readonly ridesService;
    constructor(ridesService: RidesService);
    handleTimeoutJob(job: Job): Promise<void>;
}
