import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Driver: "Driver";
    readonly Ride: "Ride";
    readonly RideOffer: "RideOffer";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const DriverScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone: "phone";
    readonly vehicleType: "vehicleType";
    readonly status: "status";
    readonly lastLat: "lastLat";
    readonly lastLng: "lastLng";
    readonly updatedAt: "updatedAt";
    readonly createdAt: "createdAt";
};
export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum];
export declare const RideScalarFieldEnum: {
    readonly id: "id";
    readonly riderId: "riderId";
    readonly pickupLat: "pickupLat";
    readonly pickupLng: "pickupLng";
    readonly dropoffLat: "dropoffLat";
    readonly dropoffLng: "dropoffLng";
    readonly status: "status";
    readonly currentBatch: "currentBatch";
    readonly assignedDriverId: "assignedDriverId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly assignedAt: "assignedAt";
};
export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum];
export declare const RideOfferScalarFieldEnum: {
    readonly id: "id";
    readonly rideId: "rideId";
    readonly driverId: "driverId";
    readonly batchNumber: "batchNumber";
    readonly notifiedAt: "notifiedAt";
    readonly respondedAt: "respondedAt";
    readonly response: "response";
};
export type RideOfferScalarFieldEnum = (typeof RideOfferScalarFieldEnum)[keyof typeof RideOfferScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
