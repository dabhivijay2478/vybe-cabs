export declare class CreateRideDto {
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
export declare class AcceptRideDto {
    driverId: string;
}
export declare class RejectRideDto {
    driverId: string;
    reason?: string;
}
