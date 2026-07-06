import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RideOfferModel = runtime.Types.Result.DefaultSelection<Prisma.$RideOfferPayload>;
export type AggregateRideOffer = {
    _count: RideOfferCountAggregateOutputType | null;
    _avg: RideOfferAvgAggregateOutputType | null;
    _sum: RideOfferSumAggregateOutputType | null;
    _min: RideOfferMinAggregateOutputType | null;
    _max: RideOfferMaxAggregateOutputType | null;
};
export type RideOfferAvgAggregateOutputType = {
    batchNumber: number | null;
};
export type RideOfferSumAggregateOutputType = {
    batchNumber: number | null;
};
export type RideOfferMinAggregateOutputType = {
    id: string | null;
    rideId: string | null;
    driverId: string | null;
    batchNumber: number | null;
    notifiedAt: Date | null;
    respondedAt: Date | null;
    response: $Enums.OfferResponse | null;
};
export type RideOfferMaxAggregateOutputType = {
    id: string | null;
    rideId: string | null;
    driverId: string | null;
    batchNumber: number | null;
    notifiedAt: Date | null;
    respondedAt: Date | null;
    response: $Enums.OfferResponse | null;
};
export type RideOfferCountAggregateOutputType = {
    id: number;
    rideId: number;
    driverId: number;
    batchNumber: number;
    notifiedAt: number;
    respondedAt: number;
    response: number;
    _all: number;
};
export type RideOfferAvgAggregateInputType = {
    batchNumber?: true;
};
export type RideOfferSumAggregateInputType = {
    batchNumber?: true;
};
export type RideOfferMinAggregateInputType = {
    id?: true;
    rideId?: true;
    driverId?: true;
    batchNumber?: true;
    notifiedAt?: true;
    respondedAt?: true;
    response?: true;
};
export type RideOfferMaxAggregateInputType = {
    id?: true;
    rideId?: true;
    driverId?: true;
    batchNumber?: true;
    notifiedAt?: true;
    respondedAt?: true;
    response?: true;
};
export type RideOfferCountAggregateInputType = {
    id?: true;
    rideId?: true;
    driverId?: true;
    batchNumber?: true;
    notifiedAt?: true;
    respondedAt?: true;
    response?: true;
    _all?: true;
};
export type RideOfferAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideOfferWhereInput;
    orderBy?: Prisma.RideOfferOrderByWithRelationInput | Prisma.RideOfferOrderByWithRelationInput[];
    cursor?: Prisma.RideOfferWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RideOfferCountAggregateInputType;
    _avg?: RideOfferAvgAggregateInputType;
    _sum?: RideOfferSumAggregateInputType;
    _min?: RideOfferMinAggregateInputType;
    _max?: RideOfferMaxAggregateInputType;
};
export type GetRideOfferAggregateType<T extends RideOfferAggregateArgs> = {
    [P in keyof T & keyof AggregateRideOffer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRideOffer[P]> : Prisma.GetScalarType<T[P], AggregateRideOffer[P]>;
};
export type RideOfferGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideOfferWhereInput;
    orderBy?: Prisma.RideOfferOrderByWithAggregationInput | Prisma.RideOfferOrderByWithAggregationInput[];
    by: Prisma.RideOfferScalarFieldEnum[] | Prisma.RideOfferScalarFieldEnum;
    having?: Prisma.RideOfferScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RideOfferCountAggregateInputType | true;
    _avg?: RideOfferAvgAggregateInputType;
    _sum?: RideOfferSumAggregateInputType;
    _min?: RideOfferMinAggregateInputType;
    _max?: RideOfferMaxAggregateInputType;
};
export type RideOfferGroupByOutputType = {
    id: string;
    rideId: string;
    driverId: string;
    batchNumber: number;
    notifiedAt: Date;
    respondedAt: Date | null;
    response: $Enums.OfferResponse;
    _count: RideOfferCountAggregateOutputType | null;
    _avg: RideOfferAvgAggregateOutputType | null;
    _sum: RideOfferSumAggregateOutputType | null;
    _min: RideOfferMinAggregateOutputType | null;
    _max: RideOfferMaxAggregateOutputType | null;
};
export type GetRideOfferGroupByPayload<T extends RideOfferGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RideOfferGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RideOfferGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RideOfferGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RideOfferGroupByOutputType[P]>;
}>>;
export type RideOfferWhereInput = {
    AND?: Prisma.RideOfferWhereInput | Prisma.RideOfferWhereInput[];
    OR?: Prisma.RideOfferWhereInput[];
    NOT?: Prisma.RideOfferWhereInput | Prisma.RideOfferWhereInput[];
    id?: Prisma.StringFilter<"RideOffer"> | string;
    rideId?: Prisma.StringFilter<"RideOffer"> | string;
    driverId?: Prisma.StringFilter<"RideOffer"> | string;
    batchNumber?: Prisma.IntFilter<"RideOffer"> | number;
    notifiedAt?: Prisma.DateTimeFilter<"RideOffer"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"RideOffer"> | Date | string | null;
    response?: Prisma.EnumOfferResponseFilter<"RideOffer"> | $Enums.OfferResponse;
    ride?: Prisma.XOR<Prisma.RideScalarRelationFilter, Prisma.RideWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
};
export type RideOfferOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rideId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    response?: Prisma.SortOrder;
    ride?: Prisma.RideOrderByWithRelationInput;
    driver?: Prisma.DriverOrderByWithRelationInput;
};
export type RideOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    rideId_driverId_batchNumber?: Prisma.RideOfferRideIdDriverIdBatchNumberCompoundUniqueInput;
    AND?: Prisma.RideOfferWhereInput | Prisma.RideOfferWhereInput[];
    OR?: Prisma.RideOfferWhereInput[];
    NOT?: Prisma.RideOfferWhereInput | Prisma.RideOfferWhereInput[];
    rideId?: Prisma.StringFilter<"RideOffer"> | string;
    driverId?: Prisma.StringFilter<"RideOffer"> | string;
    batchNumber?: Prisma.IntFilter<"RideOffer"> | number;
    notifiedAt?: Prisma.DateTimeFilter<"RideOffer"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"RideOffer"> | Date | string | null;
    response?: Prisma.EnumOfferResponseFilter<"RideOffer"> | $Enums.OfferResponse;
    ride?: Prisma.XOR<Prisma.RideScalarRelationFilter, Prisma.RideWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverScalarRelationFilter, Prisma.DriverWhereInput>;
}, "id" | "rideId_driverId_batchNumber">;
export type RideOfferOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rideId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    response?: Prisma.SortOrder;
    _count?: Prisma.RideOfferCountOrderByAggregateInput;
    _avg?: Prisma.RideOfferAvgOrderByAggregateInput;
    _max?: Prisma.RideOfferMaxOrderByAggregateInput;
    _min?: Prisma.RideOfferMinOrderByAggregateInput;
    _sum?: Prisma.RideOfferSumOrderByAggregateInput;
};
export type RideOfferScalarWhereWithAggregatesInput = {
    AND?: Prisma.RideOfferScalarWhereWithAggregatesInput | Prisma.RideOfferScalarWhereWithAggregatesInput[];
    OR?: Prisma.RideOfferScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RideOfferScalarWhereWithAggregatesInput | Prisma.RideOfferScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RideOffer"> | string;
    rideId?: Prisma.StringWithAggregatesFilter<"RideOffer"> | string;
    driverId?: Prisma.StringWithAggregatesFilter<"RideOffer"> | string;
    batchNumber?: Prisma.IntWithAggregatesFilter<"RideOffer"> | number;
    notifiedAt?: Prisma.DateTimeWithAggregatesFilter<"RideOffer"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RideOffer"> | Date | string | null;
    response?: Prisma.EnumOfferResponseWithAggregatesFilter<"RideOffer"> | $Enums.OfferResponse;
};
export type RideOfferCreateInput = {
    id?: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
    ride: Prisma.RideCreateNestedOneWithoutOffersInput;
    driver: Prisma.DriverCreateNestedOneWithoutOffersInput;
};
export type RideOfferUncheckedCreateInput = {
    id?: string;
    rideId: string;
    driverId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
    ride?: Prisma.RideUpdateOneRequiredWithoutOffersNestedInput;
    driver?: Prisma.DriverUpdateOneRequiredWithoutOffersNestedInput;
};
export type RideOfferUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rideId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferCreateManyInput = {
    id?: string;
    rideId: string;
    driverId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rideId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferListRelationFilter = {
    every?: Prisma.RideOfferWhereInput;
    some?: Prisma.RideOfferWhereInput;
    none?: Prisma.RideOfferWhereInput;
};
export type RideOfferOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RideOfferRideIdDriverIdBatchNumberCompoundUniqueInput = {
    rideId: string;
    driverId: string;
    batchNumber: number;
};
export type RideOfferCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rideId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
};
export type RideOfferAvgOrderByAggregateInput = {
    batchNumber?: Prisma.SortOrder;
};
export type RideOfferMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rideId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
};
export type RideOfferMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rideId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    batchNumber?: Prisma.SortOrder;
    notifiedAt?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
};
export type RideOfferSumOrderByAggregateInput = {
    batchNumber?: Prisma.SortOrder;
};
export type RideOfferCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput> | Prisma.RideOfferCreateWithoutDriverInput[] | Prisma.RideOfferUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutDriverInput | Prisma.RideOfferCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.RideOfferCreateManyDriverInputEnvelope;
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
};
export type RideOfferUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput> | Prisma.RideOfferCreateWithoutDriverInput[] | Prisma.RideOfferUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutDriverInput | Prisma.RideOfferCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.RideOfferCreateManyDriverInputEnvelope;
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
};
export type RideOfferUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput> | Prisma.RideOfferCreateWithoutDriverInput[] | Prisma.RideOfferUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutDriverInput | Prisma.RideOfferCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.RideOfferUpsertWithWhereUniqueWithoutDriverInput | Prisma.RideOfferUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.RideOfferCreateManyDriverInputEnvelope;
    set?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    disconnect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    delete?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    update?: Prisma.RideOfferUpdateWithWhereUniqueWithoutDriverInput | Prisma.RideOfferUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.RideOfferUpdateManyWithWhereWithoutDriverInput | Prisma.RideOfferUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
};
export type RideOfferUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput> | Prisma.RideOfferCreateWithoutDriverInput[] | Prisma.RideOfferUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutDriverInput | Prisma.RideOfferCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.RideOfferUpsertWithWhereUniqueWithoutDriverInput | Prisma.RideOfferUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.RideOfferCreateManyDriverInputEnvelope;
    set?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    disconnect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    delete?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    update?: Prisma.RideOfferUpdateWithWhereUniqueWithoutDriverInput | Prisma.RideOfferUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.RideOfferUpdateManyWithWhereWithoutDriverInput | Prisma.RideOfferUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
};
export type RideOfferCreateNestedManyWithoutRideInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput> | Prisma.RideOfferCreateWithoutRideInput[] | Prisma.RideOfferUncheckedCreateWithoutRideInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutRideInput | Prisma.RideOfferCreateOrConnectWithoutRideInput[];
    createMany?: Prisma.RideOfferCreateManyRideInputEnvelope;
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
};
export type RideOfferUncheckedCreateNestedManyWithoutRideInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput> | Prisma.RideOfferCreateWithoutRideInput[] | Prisma.RideOfferUncheckedCreateWithoutRideInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutRideInput | Prisma.RideOfferCreateOrConnectWithoutRideInput[];
    createMany?: Prisma.RideOfferCreateManyRideInputEnvelope;
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
};
export type RideOfferUpdateManyWithoutRideNestedInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput> | Prisma.RideOfferCreateWithoutRideInput[] | Prisma.RideOfferUncheckedCreateWithoutRideInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutRideInput | Prisma.RideOfferCreateOrConnectWithoutRideInput[];
    upsert?: Prisma.RideOfferUpsertWithWhereUniqueWithoutRideInput | Prisma.RideOfferUpsertWithWhereUniqueWithoutRideInput[];
    createMany?: Prisma.RideOfferCreateManyRideInputEnvelope;
    set?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    disconnect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    delete?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    update?: Prisma.RideOfferUpdateWithWhereUniqueWithoutRideInput | Prisma.RideOfferUpdateWithWhereUniqueWithoutRideInput[];
    updateMany?: Prisma.RideOfferUpdateManyWithWhereWithoutRideInput | Prisma.RideOfferUpdateManyWithWhereWithoutRideInput[];
    deleteMany?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
};
export type RideOfferUncheckedUpdateManyWithoutRideNestedInput = {
    create?: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput> | Prisma.RideOfferCreateWithoutRideInput[] | Prisma.RideOfferUncheckedCreateWithoutRideInput[];
    connectOrCreate?: Prisma.RideOfferCreateOrConnectWithoutRideInput | Prisma.RideOfferCreateOrConnectWithoutRideInput[];
    upsert?: Prisma.RideOfferUpsertWithWhereUniqueWithoutRideInput | Prisma.RideOfferUpsertWithWhereUniqueWithoutRideInput[];
    createMany?: Prisma.RideOfferCreateManyRideInputEnvelope;
    set?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    disconnect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    delete?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    connect?: Prisma.RideOfferWhereUniqueInput | Prisma.RideOfferWhereUniqueInput[];
    update?: Prisma.RideOfferUpdateWithWhereUniqueWithoutRideInput | Prisma.RideOfferUpdateWithWhereUniqueWithoutRideInput[];
    updateMany?: Prisma.RideOfferUpdateManyWithWhereWithoutRideInput | Prisma.RideOfferUpdateManyWithWhereWithoutRideInput[];
    deleteMany?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
};
export type EnumOfferResponseFieldUpdateOperationsInput = {
    set?: $Enums.OfferResponse;
};
export type RideOfferCreateWithoutDriverInput = {
    id?: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
    ride: Prisma.RideCreateNestedOneWithoutOffersInput;
};
export type RideOfferUncheckedCreateWithoutDriverInput = {
    id?: string;
    rideId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferCreateOrConnectWithoutDriverInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput>;
};
export type RideOfferCreateManyDriverInputEnvelope = {
    data: Prisma.RideOfferCreateManyDriverInput | Prisma.RideOfferCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type RideOfferUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    update: Prisma.XOR<Prisma.RideOfferUpdateWithoutDriverInput, Prisma.RideOfferUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.RideOfferCreateWithoutDriverInput, Prisma.RideOfferUncheckedCreateWithoutDriverInput>;
};
export type RideOfferUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    data: Prisma.XOR<Prisma.RideOfferUpdateWithoutDriverInput, Prisma.RideOfferUncheckedUpdateWithoutDriverInput>;
};
export type RideOfferUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.RideOfferScalarWhereInput;
    data: Prisma.XOR<Prisma.RideOfferUpdateManyMutationInput, Prisma.RideOfferUncheckedUpdateManyWithoutDriverInput>;
};
export type RideOfferScalarWhereInput = {
    AND?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
    OR?: Prisma.RideOfferScalarWhereInput[];
    NOT?: Prisma.RideOfferScalarWhereInput | Prisma.RideOfferScalarWhereInput[];
    id?: Prisma.StringFilter<"RideOffer"> | string;
    rideId?: Prisma.StringFilter<"RideOffer"> | string;
    driverId?: Prisma.StringFilter<"RideOffer"> | string;
    batchNumber?: Prisma.IntFilter<"RideOffer"> | number;
    notifiedAt?: Prisma.DateTimeFilter<"RideOffer"> | Date | string;
    respondedAt?: Prisma.DateTimeNullableFilter<"RideOffer"> | Date | string | null;
    response?: Prisma.EnumOfferResponseFilter<"RideOffer"> | $Enums.OfferResponse;
};
export type RideOfferCreateWithoutRideInput = {
    id?: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
    driver: Prisma.DriverCreateNestedOneWithoutOffersInput;
};
export type RideOfferUncheckedCreateWithoutRideInput = {
    id?: string;
    driverId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferCreateOrConnectWithoutRideInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput>;
};
export type RideOfferCreateManyRideInputEnvelope = {
    data: Prisma.RideOfferCreateManyRideInput | Prisma.RideOfferCreateManyRideInput[];
    skipDuplicates?: boolean;
};
export type RideOfferUpsertWithWhereUniqueWithoutRideInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    update: Prisma.XOR<Prisma.RideOfferUpdateWithoutRideInput, Prisma.RideOfferUncheckedUpdateWithoutRideInput>;
    create: Prisma.XOR<Prisma.RideOfferCreateWithoutRideInput, Prisma.RideOfferUncheckedCreateWithoutRideInput>;
};
export type RideOfferUpdateWithWhereUniqueWithoutRideInput = {
    where: Prisma.RideOfferWhereUniqueInput;
    data: Prisma.XOR<Prisma.RideOfferUpdateWithoutRideInput, Prisma.RideOfferUncheckedUpdateWithoutRideInput>;
};
export type RideOfferUpdateManyWithWhereWithoutRideInput = {
    where: Prisma.RideOfferScalarWhereInput;
    data: Prisma.XOR<Prisma.RideOfferUpdateManyMutationInput, Prisma.RideOfferUncheckedUpdateManyWithoutRideInput>;
};
export type RideOfferCreateManyDriverInput = {
    id?: string;
    rideId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
    ride?: Prisma.RideUpdateOneRequiredWithoutOffersNestedInput;
};
export type RideOfferUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rideId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rideId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferCreateManyRideInput = {
    id?: string;
    driverId: string;
    batchNumber: number;
    notifiedAt?: Date | string;
    respondedAt?: Date | string | null;
    response?: $Enums.OfferResponse;
};
export type RideOfferUpdateWithoutRideInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
    driver?: Prisma.DriverUpdateOneRequiredWithoutOffersNestedInput;
};
export type RideOfferUncheckedUpdateWithoutRideInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferUncheckedUpdateManyWithoutRideInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    batchNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    notifiedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    response?: Prisma.EnumOfferResponseFieldUpdateOperationsInput | $Enums.OfferResponse;
};
export type RideOfferSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rideId?: boolean;
    driverId?: boolean;
    batchNumber?: boolean;
    notifiedAt?: boolean;
    respondedAt?: boolean;
    response?: boolean;
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rideOffer"]>;
export type RideOfferSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rideId?: boolean;
    driverId?: boolean;
    batchNumber?: boolean;
    notifiedAt?: boolean;
    respondedAt?: boolean;
    response?: boolean;
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rideOffer"]>;
export type RideOfferSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rideId?: boolean;
    driverId?: boolean;
    batchNumber?: boolean;
    notifiedAt?: boolean;
    respondedAt?: boolean;
    response?: boolean;
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rideOffer"]>;
export type RideOfferSelectScalar = {
    id?: boolean;
    rideId?: boolean;
    driverId?: boolean;
    batchNumber?: boolean;
    notifiedAt?: boolean;
    respondedAt?: boolean;
    response?: boolean;
};
export type RideOfferOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rideId" | "driverId" | "batchNumber" | "notifiedAt" | "respondedAt" | "response", ExtArgs["result"]["rideOffer"]>;
export type RideOfferInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type RideOfferIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type RideOfferIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ride?: boolean | Prisma.RideDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.DriverDefaultArgs<ExtArgs>;
};
export type $RideOfferPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RideOffer";
    objects: {
        ride: Prisma.$RidePayload<ExtArgs>;
        driver: Prisma.$DriverPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rideId: string;
        driverId: string;
        batchNumber: number;
        notifiedAt: Date;
        respondedAt: Date | null;
        response: $Enums.OfferResponse;
    }, ExtArgs["result"]["rideOffer"]>;
    composites: {};
};
export type RideOfferGetPayload<S extends boolean | null | undefined | RideOfferDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RideOfferPayload, S>;
export type RideOfferCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RideOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RideOfferCountAggregateInputType | true;
};
export interface RideOfferDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RideOffer'];
        meta: {
            name: 'RideOffer';
        };
    };
    findUnique<T extends RideOfferFindUniqueArgs>(args: Prisma.SelectSubset<T, RideOfferFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RideOfferFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RideOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RideOfferFindFirstArgs>(args?: Prisma.SelectSubset<T, RideOfferFindFirstArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RideOfferFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RideOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RideOfferFindManyArgs>(args?: Prisma.SelectSubset<T, RideOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RideOfferCreateArgs>(args: Prisma.SelectSubset<T, RideOfferCreateArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RideOfferCreateManyArgs>(args?: Prisma.SelectSubset<T, RideOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RideOfferCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RideOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RideOfferDeleteArgs>(args: Prisma.SelectSubset<T, RideOfferDeleteArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RideOfferUpdateArgs>(args: Prisma.SelectSubset<T, RideOfferUpdateArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RideOfferDeleteManyArgs>(args?: Prisma.SelectSubset<T, RideOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RideOfferUpdateManyArgs>(args: Prisma.SelectSubset<T, RideOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RideOfferUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RideOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RideOfferUpsertArgs>(args: Prisma.SelectSubset<T, RideOfferUpsertArgs<ExtArgs>>): Prisma.Prisma__RideOfferClient<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RideOfferCountArgs>(args?: Prisma.Subset<T, RideOfferCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RideOfferCountAggregateOutputType> : number>;
    aggregate<T extends RideOfferAggregateArgs>(args: Prisma.Subset<T, RideOfferAggregateArgs>): Prisma.PrismaPromise<GetRideOfferAggregateType<T>>;
    groupBy<T extends RideOfferGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RideOfferGroupByArgs['orderBy'];
    } : {
        orderBy?: RideOfferGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RideOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RideOfferFieldRefs;
}
export interface Prisma__RideOfferClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ride<T extends Prisma.RideDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RideDefaultArgs<ExtArgs>>): Prisma.Prisma__RideClient<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.DriverDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DriverDefaultArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RideOfferFieldRefs {
    readonly id: Prisma.FieldRef<"RideOffer", 'String'>;
    readonly rideId: Prisma.FieldRef<"RideOffer", 'String'>;
    readonly driverId: Prisma.FieldRef<"RideOffer", 'String'>;
    readonly batchNumber: Prisma.FieldRef<"RideOffer", 'Int'>;
    readonly notifiedAt: Prisma.FieldRef<"RideOffer", 'DateTime'>;
    readonly respondedAt: Prisma.FieldRef<"RideOffer", 'DateTime'>;
    readonly response: Prisma.FieldRef<"RideOffer", 'OfferResponse'>;
}
export type RideOfferFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    where: Prisma.RideOfferWhereUniqueInput;
};
export type RideOfferFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    where: Prisma.RideOfferWhereUniqueInput;
};
export type RideOfferFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RideOfferFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RideOfferFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RideOfferCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideOfferCreateInput, Prisma.RideOfferUncheckedCreateInput>;
};
export type RideOfferCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RideOfferCreateManyInput | Prisma.RideOfferCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RideOfferCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    data: Prisma.RideOfferCreateManyInput | Prisma.RideOfferCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RideOfferIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RideOfferUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideOfferUpdateInput, Prisma.RideOfferUncheckedUpdateInput>;
    where: Prisma.RideOfferWhereUniqueInput;
};
export type RideOfferUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RideOfferUpdateManyMutationInput, Prisma.RideOfferUncheckedUpdateManyInput>;
    where?: Prisma.RideOfferWhereInput;
    limit?: number;
};
export type RideOfferUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RideOfferUpdateManyMutationInput, Prisma.RideOfferUncheckedUpdateManyInput>;
    where?: Prisma.RideOfferWhereInput;
    limit?: number;
    include?: Prisma.RideOfferIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RideOfferUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    where: Prisma.RideOfferWhereUniqueInput;
    create: Prisma.XOR<Prisma.RideOfferCreateInput, Prisma.RideOfferUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RideOfferUpdateInput, Prisma.RideOfferUncheckedUpdateInput>;
};
export type RideOfferDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
    where: Prisma.RideOfferWhereUniqueInput;
};
export type RideOfferDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideOfferWhereInput;
    limit?: number;
};
export type RideOfferDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RideOfferSelect<ExtArgs> | null;
    omit?: Prisma.RideOfferOmit<ExtArgs> | null;
    include?: Prisma.RideOfferInclude<ExtArgs> | null;
};
