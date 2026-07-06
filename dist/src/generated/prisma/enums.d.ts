export declare const DriverStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly BUSY: "BUSY";
    readonly OFFLINE: "OFFLINE";
};
export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus];
export declare const RideStatus: {
    readonly REQUESTED: "REQUESTED";
    readonly SEARCHING: "SEARCHING";
    readonly ASSIGNED: "ASSIGNED";
    readonly TIMEOUT: "TIMEOUT";
    readonly CANCELLED: "CANCELLED";
};
export type RideStatus = (typeof RideStatus)[keyof typeof RideStatus];
export declare const OfferResponse: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
};
export type OfferResponse = (typeof OfferResponse)[keyof typeof OfferResponse];
