export declare class CreateDriverDto {
    name: string;
    phone: string;
    vehicleType: string;
}
export declare class UpdateDriverLocationDto {
    lat: number;
    lng: number;
}
export declare class UpdateDriverStatusDto {
    status: 'AVAILABLE' | 'BUSY' | 'OFFLINE';
}
