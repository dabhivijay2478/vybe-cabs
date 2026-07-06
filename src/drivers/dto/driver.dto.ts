export class CreateDriverDto {
  name: string;
  phone: string;
  vehicleType: string;
}

export class UpdateDriverLocationDto {
  lat: number;
  lng: number;
}

export class UpdateDriverStatusDto {
  status: 'AVAILABLE' | 'BUSY' | 'OFFLINE';
}
