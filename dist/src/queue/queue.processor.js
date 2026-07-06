"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const bullmq_1 = require("bullmq");
const rides_service_1 = require("../rides/rides.service");
let QueueProcessor = class QueueProcessor {
    ridesService;
    constructor(ridesService) {
        this.ridesService = ridesService;
    }
    async handleTimeoutJob(job) {
        const { rideId, batchNumber, lat, lng } = job.data;
        await this.ridesService.handleTimeoutJob(rideId, batchNumber, lat, lng);
    }
};
exports.QueueProcessor = QueueProcessor;
__decorate([
    (0, bull_1.Process)('check-timeout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_1.Job]),
    __metadata("design:returntype", Promise)
], QueueProcessor.prototype, "handleTimeoutJob", null);
exports.QueueProcessor = QueueProcessor = __decorate([
    (0, bull_1.Processor)('timeoutQueue'),
    __metadata("design:paramtypes", [rides_service_1.RidesService])
], QueueProcessor);
//# sourceMappingURL=queue.processor.js.map