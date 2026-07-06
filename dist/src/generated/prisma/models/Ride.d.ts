import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RideModel = runtime.Types.Result.DefaultSelection<Prisma.$RidePayload>;
export type AggregateRide = {
    _count: RideCountAggregateOutputType | null;
    _avg: RideAvgAggregateOutputType | null;
    _sum: RideSumAggregateOutputType | null;
    _min: RideMinAggregateOutputType | null;
    _max: RideMaxAggregateOutputType | null;
};
export type RideAvgAggregateOutputType = {
    pickupLat: number | null;
    pickupLng: number | null;
    dropoffLat: number | null;
    dropoffLng: number | null;
    currentBatch: number | null;
};
export type RideSumAggregateOutputType = {
    pickupLat: number | null;
    pickupLng: number | null;
    dropoffLat: number | null;
    dropoffLng: number | null;
    currentBatch: number | null;
};
export type RideMinAggregateOutputType = {
    id: string | null;
    riderId: string | null;
    pickupLat: number | null;
    pickupLng: number | null;
    dropoffLat: number | null;
    dropoffLng: number | null;
    status: $Enums.RideStatus | null;
    currentBatch: number | null;
    assignedDriverId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    assignedAt: Date | null;
};
export type RideMaxAggregateOutputType = {
    id: string | null;
    riderId: string | null;
    pickupLat: number | null;
    pickupLng: number | null;
    dropoffLat: number | null;
    dropoffLng: number | null;
    status: $Enums.RideStatus | null;
    currentBatch: number | null;
    assignedDriverId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    assignedAt: Date | null;
};
export type RideCountAggregateOutputType = {
    id: number;
    riderId: number;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status: number;
    currentBatch: number;
    assignedDriverId: number;
    createdAt: number;
    updatedAt: number;
    assignedAt: number;
    _all: number;
};
export type RideAvgAggregateInputType = {
    pickupLat?: true;
    pickupLng?: true;
    dropoffLat?: true;
    dropoffLng?: true;
    currentBatch?: true;
};
export type RideSumAggregateInputType = {
    pickupLat?: true;
    pickupLng?: true;
    dropoffLat?: true;
    dropoffLng?: true;
    currentBatch?: true;
};
export type RideMinAggregateInputType = {
    id?: true;
    riderId?: true;
    pickupLat?: true;
    pickupLng?: true;
    dropoffLat?: true;
    dropoffLng?: true;
    status?: true;
    currentBatch?: true;
    assignedDriverId?: true;
    createdAt?: true;
    updatedAt?: true;
    assignedAt?: true;
};
export type RideMaxAggregateInputType = {
    id?: true;
    riderId?: true;
    pickupLat?: true;
    pickupLng?: true;
    dropoffLat?: true;
    dropoffLng?: true;
    status?: true;
    currentBatch?: true;
    assignedDriverId?: true;
    createdAt?: true;
    updatedAt?: true;
    assignedAt?: true;
};
export type RideCountAggregateInputType = {
    id?: true;
    riderId?: true;
    pickupLat?: true;
    pickupLng?: true;
    dropoffLat?: true;
    dropoffLng?: true;
    status?: true;
    currentBatch?: true;
    assignedDriverId?: true;
    createdAt?: true;
    updatedAt?: true;
    assignedAt?: true;
    _all?: true;
};
export type RideAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput | Prisma.RideOrderByWithRelationInput[];
    cursor?: Prisma.RideWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RideCountAggregateInputType;
    _avg?: RideAvgAggregateInputType;
    _sum?: RideSumAggregateInputType;
    _min?: RideMinAggregateInputType;
    _max?: RideMaxAggregateInputType;
};
export type GetRideAggregateType<T extends RideAggregateArgs> = {
    [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRide[P]> : Prisma.GetScalarType<T[P], AggregateRide[P]>;
};
export type RideGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithAggregationInput | Prisma.RideOrderByWithAggregationInput[];
    by: Prisma.RideScalarFieldEnum[] | Prisma.RideScalarFieldEnum;
    having?: Prisma.RideScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RideCountAggregateInputType | true;
    _avg?: RideAvgAggregateInputType;
    _sum?: RideSumAggregateInputType;
    _min?: RideMinAggregateInputType;
    _max?: RideMaxAggregateInputType;
};
export type RideGroupByOutputType = {
    id: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status: $Enums.RideStatus;
    currentBatch: number;
    assignedDriverId: string | null;
    createdAt: Date;
    updatedAt: Date;
    assignedAt: Date | null;
    _count: RideCountAggregateOutputType | null;
    _avg: RideAvgAggregateOutputType | null;
    _sum: RideSumAggregateOutputType | null;
    _min: RideMinAggregateOutputType | null;
    _max: RideMaxAggregateOutputType | null;
};
export type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RideGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RideGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RideGroupByOutputType[P]>;
}>>;
export type RideWhereInput = {
    AND?: Prisma.RideWhereInput | Prisma.RideWhereInput[];
    OR?: Prisma.RideWhereInput[];
    NOT?: Prisma.RideWhereInput | Prisma.RideWhereInput[];
    id?: Prisma.StringFilter<"Ride"> | string;
    riderId?: Prisma.StringFilter<"Ride"> | string;
    pickupLat?: Prisma.FloatFilter<"Ride"> | number;
    pickupLng?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLat?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLng?: Prisma.FloatFilter<"Ride"> | number;
    status?: Prisma.EnumRideStatusFilter<"Ride"> | $Enums.RideStatus;
    currentBatch?: Prisma.IntFilter<"Ride"> | number;
    assignedDriverId?: Prisma.StringNullableFilter<"Ride"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    assignedAt?: Prisma.DateTimeNullableFilter<"Ride"> | Date | string | null;
    assignedDriver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    offers?: Prisma.RideOfferListRelationFilter;
};
export type RideOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedDriver?: Prisma.DriverOrderByWithRelationInput;
    offers?: Prisma.RideOfferOrderByRelationAggregateInput;
};
export type RideWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RideWhereInput | Prisma.RideWhereInput[];
    OR?: Prisma.RideWhereInput[];
    NOT?: Prisma.RideWhereInput | Prisma.RideWhereInput[];
    riderId?: Prisma.StringFilter<"Ride"> | string;
    pickupLat?: Prisma.FloatFilter<"Ride"> | number;
    pickupLng?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLat?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLng?: Prisma.FloatFilter<"Ride"> | number;
    status?: Prisma.EnumRideStatusFilter<"Ride"> | $Enums.RideStatus;
    currentBatch?: Prisma.IntFilter<"Ride"> | number;
    assignedDriverId?: Prisma.StringNullableFilter<"Ride"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    assignedAt?: Prisma.DateTimeNullableFilter<"Ride"> | Date | string | null;
    assignedDriver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    offers?: Prisma.RideOfferListRelationFilter;
}, "id">;
export type RideOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RideCountOrderByAggregateInput;
    _avg?: Prisma.RideAvgOrderByAggregateInput;
    _max?: Prisma.RideMaxOrderByAggregateInput;
    _min?: Prisma.RideMinOrderByAggregateInput;
    _sum?: Prisma.RideSumOrderByAggregateInput;
};
export type RideScalarWhereWithAggregatesInput = {
    AND?: Prisma.RideScalarWhereWithAggregatesInput | Prisma.RideScalarWhereWithAggregatesInput[];
    OR?: Prisma.RideScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RideScalarWhereWithAggregatesInput | Prisma.RideScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ride"> | string;
    riderId?: Prisma.StringWithAggregatesFilter<"Ride"> | string;
    pickupLat?: Prisma.FloatWithAggregatesFilter<"Ride"> | number;
    pickupLng?: Prisma.FloatWithAggregatesFilter<"Ride"> | number;
    dropoffLat?: Prisma.FloatWithAggregatesFilter<"Ride"> | number;
    dropoffLng?: Prisma.FloatWithAggregatesFilter<"Ride"> | number;
    status?: Prisma.EnumRideStatusWithAggregatesFilter<"Ride"> | $Enums.RideStatus;
    currentBatch?: Prisma.IntWithAggregatesFilter<"Ride"> | number;
    assignedDriverId?: Prisma.StringNullableWithAggregatesFilter<"Ride"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ride"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ride"> | Date | string;
    assignedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Ride"> | Date | string | null;
};
export type RideCreateInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
    assignedDriver?: Prisma.DriverCreateNestedOneWithoutRidesInput;
    offers?: Prisma.RideOfferCreateNestedManyWithoutRideInput;
};
export type RideUncheckedCreateInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    assignedDriverId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
    offers?: Prisma.RideOfferUncheckedCreateNestedManyWithoutRideInput;
};
export type RideUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedDriver?: Prisma.DriverUpdateOneWithoutRidesNestedInput;
    offers?: Prisma.RideOfferUpdateManyWithoutRideNestedInput;
};
export type RideUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offers?: Prisma.RideOfferUncheckedUpdateManyWithoutRideNestedInput;
};
export type RideCreateManyInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    assignedDriverId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
};
export type RideUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RideUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RideListRelationFilter = {
    every?: Prisma.RideWhereInput;
    some?: Prisma.RideWhereInput;
    none?: Prisma.RideWhereInput;
};
export type RideOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RideCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type RideAvgOrderByAggregateInput = {
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
};
export type RideMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type RideMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    riderId?: Prisma.SortOrder;
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
    assignedDriverId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type RideSumOrderByAggregateInput = {
    pickupLat?: Prisma.SortOrder;
    pickupLng?: Prisma.SortOrder;
    dropoffLat?: Prisma.SortOrder;
    dropoffLng?: Prisma.SortOrder;
    currentBatch?: Prisma.SortOrder;
};
export type RideScalarRelationFilter = {
    is?: Prisma.RideWhereInput;
    isNot?: Prisma.RideWhereInput;
};
export type RideCreateNestedManyWithoutAssignedDriverInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput> | Prisma.RideCreateWithoutAssignedDriverInput[] | Prisma.RideUncheckedCreateWithoutAssignedDriverInput[];
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutAssignedDriverInput | Prisma.RideCreateOrConnectWithoutAssignedDriverInput[];
    createMany?: Prisma.RideCreateManyAssignedDriverInputEnvelope;
    connect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
};
export type RideUncheckedCreateNestedManyWithoutAssignedDriverInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput> | Prisma.RideCreateWithoutAssignedDriverInput[] | Prisma.RideUncheckedCreateWithoutAssignedDriverInput[];
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutAssignedDriverInput | Prisma.RideCreateOrConnectWithoutAssignedDriverInput[];
    createMany?: Prisma.RideCreateManyAssignedDriverInputEnvelope;
    connect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
};
export type RideUpdateManyWithoutAssignedDriverNestedInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput> | Prisma.RideCreateWithoutAssignedDriverInput[] | Prisma.RideUncheckedCreateWithoutAssignedDriverInput[];
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutAssignedDriverInput | Prisma.RideCreateOrConnectWithoutAssignedDriverInput[];
    upsert?: Prisma.RideUpsertWithWhereUniqueWithoutAssignedDriverInput | Prisma.RideUpsertWithWhereUniqueWithoutAssignedDriverInput[];
    createMany?: Prisma.RideCreateManyAssignedDriverInputEnvelope;
    set?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    disconnect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    delete?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    connect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    update?: Prisma.RideUpdateWithWhereUniqueWithoutAssignedDriverInput | Prisma.RideUpdateWithWhereUniqueWithoutAssignedDriverInput[];
    updateMany?: Prisma.RideUpdateManyWithWhereWithoutAssignedDriverInput | Prisma.RideUpdateManyWithWhereWithoutAssignedDriverInput[];
    deleteMany?: Prisma.RideScalarWhereInput | Prisma.RideScalarWhereInput[];
};
export type RideUncheckedUpdateManyWithoutAssignedDriverNestedInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput> | Prisma.RideCreateWithoutAssignedDriverInput[] | Prisma.RideUncheckedCreateWithoutAssignedDriverInput[];
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutAssignedDriverInput | Prisma.RideCreateOrConnectWithoutAssignedDriverInput[];
    upsert?: Prisma.RideUpsertWithWhereUniqueWithoutAssignedDriverInput | Prisma.RideUpsertWithWhereUniqueWithoutAssignedDriverInput[];
    createMany?: Prisma.RideCreateManyAssignedDriverInputEnvelope;
    set?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    disconnect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    delete?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    connect?: Prisma.RideWhereUniqueInput | Prisma.RideWhereUniqueInput[];
    update?: Prisma.RideUpdateWithWhereUniqueWithoutAssignedDriverInput | Prisma.RideUpdateWithWhereUniqueWithoutAssignedDriverInput[];
    updateMany?: Prisma.RideUpdateManyWithWhereWithoutAssignedDriverInput | Prisma.RideUpdateManyWithWhereWithoutAssignedDriverInput[];
    deleteMany?: Prisma.RideScalarWhereInput | Prisma.RideScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumRideStatusFieldUpdateOperationsInput = {
    set?: $Enums.RideStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type RideCreateNestedOneWithoutOffersInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutOffersInput, Prisma.RideUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutOffersInput;
    connect?: Prisma.RideWhereUniqueInput;
};
export type RideUpdateOneRequiredWithoutOffersNestedInput = {
    create?: Prisma.XOR<Prisma.RideCreateWithoutOffersInput, Prisma.RideUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.RideCreateOrConnectWithoutOffersInput;
    upsert?: Prisma.RideUpsertWithoutOffersInput;
    connect?: Prisma.RideWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RideUpdateToOneWithWhereWithoutOffersInput, Prisma.RideUpdateWithoutOffersInput>, Prisma.RideUncheckedUpdateWithoutOffersInput>;
};
export type RideCreateWithoutAssignedDriverInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
    offers?: Prisma.RideOfferCreateNestedManyWithoutRideInput;
};
export type RideUncheckedCreateWithoutAssignedDriverInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
    offers?: Prisma.RideOfferUncheckedCreateNestedManyWithoutRideInput;
};
export type RideCreateOrConnectWithoutAssignedDriverInput = {
    where: Prisma.RideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput>;
};
export type RideCreateManyAssignedDriverInputEnvelope = {
    data: Prisma.RideCreateManyAssignedDriverInput | Prisma.RideCreateManyAssignedDriverInput[];
    skipDuplicates?: boolean;
};
export type RideUpsertWithWhereUniqueWithoutAssignedDriverInput = {
    where: Prisma.RideWhereUniqueInput;
    update: Prisma.XOR<Prisma.RideUpdateWithoutAssignedDriverInput, Prisma.RideUncheckedUpdateWithoutAssignedDriverInput>;
    create: Prisma.XOR<Prisma.RideCreateWithoutAssignedDriverInput, Prisma.RideUncheckedCreateWithoutAssignedDriverInput>;
};
export type RideUpdateWithWhereUniqueWithoutAssignedDriverInput = {
    where: Prisma.RideWhereUniqueInput;
    data: Prisma.XOR<Prisma.RideUpdateWithoutAssignedDriverInput, Prisma.RideUncheckedUpdateWithoutAssignedDriverInput>;
};
export type RideUpdateManyWithWhereWithoutAssignedDriverInput = {
    where: Prisma.RideScalarWhereInput;
    data: Prisma.XOR<Prisma.RideUpdateManyMutationInput, Prisma.RideUncheckedUpdateManyWithoutAssignedDriverInput>;
};
export type RideScalarWhereInput = {
    AND?: Prisma.RideScalarWhereInput | Prisma.RideScalarWhereInput[];
    OR?: Prisma.RideScalarWhereInput[];
    NOT?: Prisma.RideScalarWhereInput | Prisma.RideScalarWhereInput[];
    id?: Prisma.StringFilter<"Ride"> | string;
    riderId?: Prisma.StringFilter<"Ride"> | string;
    pickupLat?: Prisma.FloatFilter<"Ride"> | number;
    pickupLng?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLat?: Prisma.FloatFilter<"Ride"> | number;
    dropoffLng?: Prisma.FloatFilter<"Ride"> | number;
    status?: Prisma.EnumRideStatusFilter<"Ride"> | $Enums.RideStatus;
    currentBatch?: Prisma.IntFilter<"Ride"> | number;
    assignedDriverId?: Prisma.StringNullableFilter<"Ride"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ride"> | Date | string;
    assignedAt?: Prisma.DateTimeNullableFilter<"Ride"> | Date | string | null;
};
export type RideCreateWithoutOffersInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
    assignedDriver?: Prisma.DriverCreateNestedOneWithoutRidesInput;
};
export type RideUncheckedCreateWithoutOffersInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    assignedDriverId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
};
export type RideCreateOrConnectWithoutOffersInput = {
    where: Prisma.RideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideCreateWithoutOffersInput, Prisma.RideUncheckedCreateWithoutOffersInput>;
};
export type RideUpsertWithoutOffersInput = {
    update: Prisma.XOR<Prisma.RideUpdateWithoutOffersInput, Prisma.RideUncheckedUpdateWithoutOffersInput>;
    create: Prisma.XOR<Prisma.RideCreateWithoutOffersInput, Prisma.RideUncheckedCreateWithoutOffersInput>;
    where?: Prisma.RideWhereInput;
};
export type RideUpdateToOneWithWhereWithoutOffersInput = {
    where?: Prisma.RideWhereInput;
    data: Prisma.XOR<Prisma.RideUpdateWithoutOffersInput, Prisma.RideUncheckedUpdateWithoutOffersInput>;
};
export type RideUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedDriver?: Prisma.DriverUpdateOneWithoutRidesNestedInput;
};
export type RideUncheckedUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    assignedDriverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RideCreateManyAssignedDriverInput = {
    id?: string;
    riderId: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    status?: $Enums.RideStatus;
    currentBatch?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignedAt?: Date | string | null;
};
export type RideUpdateWithoutAssignedDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offers?: Prisma.RideOfferUpdateManyWithoutRideNestedInput;
};
export type RideUncheckedUpdateWithoutAssignedDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offers?: Prisma.RideOfferUncheckedUpdateManyWithoutRideNestedInput;
};
export type RideUncheckedUpdateManyWithoutAssignedDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    riderId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    pickupLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    dropoffLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus;
    currentBatch?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RideCountOutputType = {
    offers: number;
};
export type RideCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offers?: boolean | RideCountOutputTypeCountOffersArgs;
};
export type RideCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideCountOutputTypeSelect<ExtArgs> | null;
};
export type RideCountOutputTypeCountOffersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideOfferWhereInput;
};
export type RideSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    pickupLat?: boolean;
    pickupLng?: boolean;
    dropoffLat?: boolean;
    dropoffLng?: boolean;
    status?: boolean;
    currentBatch?: boolean;
    assignedDriverId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignedAt?: boolean;
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
    offers?: boolean | Prisma.Ride$offersArgs<ExtArgs>;
    _count?: boolean | Prisma.RideCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ride"]>;
export type RideSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    pickupLat?: boolean;
    pickupLng?: boolean;
    dropoffLat?: boolean;
    dropoffLng?: boolean;
    status?: boolean;
    currentBatch?: boolean;
    assignedDriverId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignedAt?: boolean;
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
}, ExtArgs["result"]["ride"]>;
export type RideSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    riderId?: boolean;
    pickupLat?: boolean;
    pickupLng?: boolean;
    dropoffLat?: boolean;
    dropoffLng?: boolean;
    status?: boolean;
    currentBatch?: boolean;
    assignedDriverId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignedAt?: boolean;
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
}, ExtArgs["result"]["ride"]>;
export type RideSelectScalar = {
    id?: boolean;
    riderId?: boolean;
    pickupLat?: boolean;
    pickupLng?: boolean;
    dropoffLat?: boolean;
    dropoffLng?: boolean;
    status?: boolean;
    currentBatch?: boolean;
    assignedDriverId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignedAt?: boolean;
};
export type RideOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "riderId" | "pickupLat" | "pickupLng" | "dropoffLat" | "dropoffLng" | "status" | "currentBatch" | "assignedDriverId" | "createdAt" | "updatedAt" | "assignedAt", ExtArgs["result"]["ride"]>;
export type RideInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
    offers?: boolean | Prisma.Ride$offersArgs<ExtArgs>;
    _count?: boolean | Prisma.RideCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RideIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
};
export type RideIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignedDriver?: boolean | Prisma.Ride$assignedDriverArgs<ExtArgs>;
};
export type $RidePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ride";
    objects: {
        assignedDriver: Prisma.$DriverPayload<ExtArgs> | null;
        offers: Prisma.$RideOfferPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        riderId: string;
        pickupLat: number;
        pickupLng: number;
        dropoffLat: number;
        dropoffLng: number;
        status: $Enums.RideStatus;
        currentBatch: number;
        assignedDriverId: string | null;
        createdAt: Date;
        updatedAt: Date;
        assignedAt: Date | null;
    }, ExtArgs["result"]["ride"]>;
    composites: {};
};
export type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RidePayload, S>;
export type RideCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RideCountAggregateInputType | true;
};
export interface RideDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ride'];
        meta: {
            name: 'Ride';
        };
    };
    findUnique<T extends RideFindUniqueArgs>(args: Prisma.SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RideFindFirstArgs>(args?: Prisma.SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RideFindManyArgs>(args?: Prisma.SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RideCreateArgs>(args: Prisma.SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RideCreateManyArgs>(args?: Prisma.SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RideCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RideDeleteArgs>(args: Prisma.SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RideUpdateArgs>(args: Prisma.SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RideDeleteManyArgs>(args?: Prisma.SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RideUpdateManyArgs>(args: Prisma.SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RideUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RideUpsertArgs>(args: Prisma.SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RideCountArgs>(args?: Prisma.Subset<T, RideCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RideCountAggregateOutputType> : number>;
    aggregate<T extends RideAggregateArgs>(args: Prisma.Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>;
    groupBy<T extends RideGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RideGroupByArgs['orderBy'];
    } : {
        orderBy?: RideGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RideFieldRefs;
}
export interface Prisma__RideClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignedDriver<T extends Prisma.Ride$assignedDriverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ride$assignedDriverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    offers<T extends Prisma.Ride$offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ride$offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RideFieldRefs {
    readonly id: Prisma.FieldRef<"Ride", 'String'>;
    readonly riderId: Prisma.FieldRef<"Ride", 'String'>;
    readonly pickupLat: Prisma.FieldRef<"Ride", 'Float'>;
    readonly pickupLng: Prisma.FieldRef<"Ride", 'Float'>;
    readonly dropoffLat: Prisma.FieldRef<"Ride", 'Float'>;
    readonly dropoffLng: Prisma.FieldRef<"Ride", 'Float'>;
    readonly status: Prisma.FieldRef<"Ride", 'RideStatus'>;
    readonly currentBatch: Prisma.FieldRef<"Ride", 'Int'>;
    readonly assignedDriverId: Prisma.FieldRef<"Ride", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Ride", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ride", 'DateTime'>;
    readonly assignedAt: Prisma.FieldRef<"Ride", 'DateTime'>;
}
export type RideFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where: Prisma.RideWhereUniqueInput;
};
export type RideFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where: Prisma.RideWhereUniqueInput;
};
export type RideFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput | Prisma.RideOrderByWithRelationInput[];
    cursor?: Prisma.RideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RideScalarFieldEnum | Prisma.RideScalarFieldEnum[];
};
export type RideFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput | Prisma.RideOrderByWithRelationInput[];
    cursor?: Prisma.RideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RideScalarFieldEnum | Prisma.RideScalarFieldEnum[];
};
export type RideFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput | Prisma.RideOrderByWithRelationInput[];
    cursor?: Prisma.RideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RideScalarFieldEnum | Prisma.RideScalarFieldEnum[];
};
export type RideCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideCreateInput, Prisma.RideUncheckedCreateInput>;
};
export type RideCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RideCreateManyInput | Prisma.RideCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RideCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    data: Prisma.RideCreateManyInput | Prisma.RideCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RideIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RideUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideUpdateInput, Prisma.RideUncheckedUpdateInput>;
    where: Prisma.RideWhereUniqueInput;
};
export type RideUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RideUpdateManyMutationInput, Prisma.RideUncheckedUpdateManyInput>;
    where?: Prisma.RideWhereInput;
    limit?: number;
};
export type RideUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideUpdateManyMutationInput, Prisma.RideUncheckedUpdateManyInput>;
    where?: Prisma.RideWhereInput;
    limit?: number;
    include?: Prisma.RideIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RideUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where: Prisma.RideWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideCreateInput, Prisma.RideUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RideUpdateInput, Prisma.RideUncheckedUpdateInput>;
};
export type RideDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
    where: Prisma.RideWhereUniqueInput;
};
export type RideDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideWhereInput;
    limit?: number;
};
export type Ride$assignedDriverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
};
export type Ride$offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    where?: Prisma.RideOfferWhereInput;
    orderBy?: Prisma.RideOfferOrderByWithRelationInput | Prisma.RideOfferOrderByWithRelationInput[];
    cursor?: Prisma.RideOfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RideOfferScalarFieldEnum | Prisma.RideOfferScalarFieldEnum[];
};
export type RideDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideSelect<ExtArgs> | null;
    omit?: Prisma.RideOmit<ExtArgs> | null;
    include?: Prisma.RideInclude<ExtArgs> | null;
};
