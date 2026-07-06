"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectRideDto = exports.AcceptRideDto = exports.CreateRideDto = void 0;
class CreateRideDto {
    riderId;
    pickup;
    dropoff;
}
exports.CreateRideDto = CreateRideDto;
class AcceptRideDto {
    driverId;
}
exports.AcceptRideDto = AcceptRideDto;
class RejectRideDto {
    driverId;
    reason;
}
exports.RejectRideDto = RejectRideDto;
//# sourceMappingURL=ride.dto.js.map