export class CreateRideDto {
  riderId: string;
  pickup: {
    lat: number;
    lng: number;
  };
  dropoff: {
    lat: number;
    lng: number;
  };
}

export class AcceptRideDto {
  driverId: string;
}

export class RejectRideDto {
  driverId: string;
  reason?: string;
}
