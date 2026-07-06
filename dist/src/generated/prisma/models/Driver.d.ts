import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DriverModel = runtime.Types.Result.DefaultSelection<Prisma.$DriverPayload>;
export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null;
    _avg: DriverAvgAggregateOutputType | null;
    _sum: DriverSumAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type DriverAvgAggregateOutputType = {
    lastLat: number | null;
    lastLng: number | null;
};
export type DriverSumAggregateOutputType = {
    lastLat: number | null;
    lastLng: number | null;
};
export type DriverMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    vehicleType: string | null;
    status: $Enums.DriverStatus | null;
    lastLat: number | null;
    lastLng: number | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type DriverMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    phone: string | null;
    vehicleType: string | null;
    status: $Enums.DriverStatus | null;
    lastLat: number | null;
    lastLng: number | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type DriverCountAggregateOutputType = {
    id: number;
    name: number;
    phone: number;
    vehicleType: number;
    status: number;
    lastLat: number;
    lastLng: number;
    updatedAt: number;
    createdAt: number;
    _all: number;
};
export type DriverAvgAggregateInputType = {
    lastLat?: true;
    lastLng?: true;
};
export type DriverSumAggregateInputType = {
    lastLat?: true;
    lastLng?: true;
};
export type DriverMinAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    vehicleType?: true;
    status?: true;
    lastLat?: true;
    lastLng?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type DriverMaxAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    vehicleType?: true;
    status?: true;
    lastLat?: true;
    lastLng?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type DriverCountAggregateInputType = {
    id?: true;
    name?: true;
    phone?: true;
    vehicleType?: true;
    status?: true;
    lastLat?: true;
    lastLng?: true;
    updatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type DriverAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DriverCountAggregateInputType;
    _avg?: DriverAvgAggregateInputType;
    _sum?: DriverSumAggregateInputType;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
    [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDriver[P]> : Prisma.GetScalarType<T[P], AggregateDriver[P]>;
};
export type DriverGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithAggregationInput | Prisma.DriverOrderByWithAggregationInput[];
    by: Prisma.DriverScalarFieldEnum[] | Prisma.DriverScalarFieldEnum;
    having?: Prisma.DriverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DriverCountAggregateInputType | true;
    _avg?: DriverAvgAggregateInputType;
    _sum?: DriverSumAggregateInputType;
    _min?: DriverMinAggregateInputType;
    _max?: DriverMaxAggregateInputType;
};
export type DriverGroupByOutputType = {
    id: string;
    name: string;
    phone: string;
    vehicleType: string;
    status: $Enums.DriverStatus;
    lastLat: number | null;
    lastLng: number | null;
    updatedAt: Date;
    createdAt: Date;
    _count: DriverCountAggregateOutputType | null;
    _avg: DriverAvgAggregateOutputType | null;
    _sum: DriverSumAggregateOutputType | null;
    _min: DriverMinAggregateOutputType | null;
    _max: DriverMaxAggregateOutputType | null;
};
export type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DriverGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DriverGroupByOutputType[P]>;
}>>;
export type DriverWhereInput = {
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    id?: Prisma.StringFilter<"Driver"> | string;
    name?: Prisma.StringFilter<"Driver"> | string;
    phone?: Prisma.StringFilter<"Driver"> | string;
    vehicleType?: Prisma.StringFilter<"Driver"> | string;
    status?: Prisma.EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus;
    lastLat?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    lastLng?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    updatedAt?: Prisma.DateTimeFilter<"Driver"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Driver"> | Date | string;
    offers?: Prisma.RideOfferListRelationFilter;
    rides?: Prisma.RideListRelationFilter;
};
export type DriverOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    offers?: Prisma.RideOfferOrderByRelationAggregateInput;
    rides?: Prisma.RideOrderByRelationAggregateInput;
};
export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    OR?: Prisma.DriverWhereInput[];
    NOT?: Prisma.DriverWhereInput | Prisma.DriverWhereInput[];
    name?: Prisma.StringFilter<"Driver"> | string;
    phone?: Prisma.StringFilter<"Driver"> | string;
    vehicleType?: Prisma.StringFilter<"Driver"> | string;
    status?: Prisma.EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus;
    lastLat?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    lastLng?: Prisma.FloatNullableFilter<"Driver"> | number | null;
    updatedAt?: Prisma.DateTimeFilter<"Driver"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Driver"> | Date | string;
    offers?: Prisma.RideOfferListRelationFilter;
    rides?: Prisma.RideListRelationFilter;
}, "id">;
export type DriverOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DriverCountOrderByAggregateInput;
    _avg?: Prisma.DriverAvgOrderByAggregateInput;
    _max?: Prisma.DriverMaxOrderByAggregateInput;
    _min?: Prisma.DriverMinOrderByAggregateInput;
    _sum?: Prisma.DriverSumOrderByAggregateInput;
};
export type DriverScalarWhereWithAggregatesInput = {
    AND?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    OR?: Prisma.DriverScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DriverScalarWhereWithAggregatesInput | Prisma.DriverScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    vehicleType?: Prisma.StringWithAggregatesFilter<"Driver"> | string;
    status?: Prisma.EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus;
    lastLat?: Prisma.FloatNullableWithAggregatesFilter<"Driver"> | number | null;
    lastLng?: Prisma.FloatNullableWithAggregatesFilter<"Driver"> | number | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Driver"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Driver"> | Date | string;
};
export type DriverCreateInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    offers?: Prisma.RideOfferCreateNestedManyWithoutDriverInput;
    rides?: Prisma.RideCreateNestedManyWithoutAssignedDriverInput;
};
export type DriverUncheckedCreateInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    offers?: Prisma.RideOfferUncheckedCreateNestedManyWithoutDriverInput;
    rides?: Prisma.RideUncheckedCreateNestedManyWithoutAssignedDriverInput;
};
export type DriverUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offers?: Prisma.RideOfferUpdateManyWithoutDriverNestedInput;
    rides?: Prisma.RideUpdateManyWithoutAssignedDriverNestedInput;
};
export type DriverUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offers?: Prisma.RideOfferUncheckedUpdateManyWithoutDriverNestedInput;
    rides?: Prisma.RideUncheckedUpdateManyWithoutAssignedDriverNestedInput;
};
export type DriverCreateManyInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type DriverUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DriverUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DriverCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLat?: Prisma.SortOrder;
    lastLng?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverAvgOrderByAggregateInput = {
    lastLat?: Prisma.SortOrder;
    lastLng?: Prisma.SortOrder;
};
export type DriverMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLat?: Prisma.SortOrder;
    lastLng?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    vehicleType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastLat?: Prisma.SortOrder;
    lastLng?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DriverSumOrderByAggregateInput = {
    lastLat?: Prisma.SortOrder;
    lastLng?: Prisma.SortOrder;
};
export type DriverNullableScalarRelationFilter = {
    is?: Prisma.DriverWhereInput | null;
    isNot?: Prisma.DriverWhereInput | null;
};
export type DriverScalarRelationFilter = {
    is?: Prisma.DriverWhereInput;
    isNot?: Prisma.DriverWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type DriverCreateNestedOneWithoutRidesInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutRidesInput, Prisma.DriverUncheckedCreateWithoutRidesInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutRidesInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneWithoutRidesNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutRidesInput, Prisma.DriverUncheckedCreateWithoutRidesInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutRidesInput;
    upsert?: Prisma.DriverUpsertWithoutRidesInput;
    disconnect?: Prisma.DriverWhereInput | boolean;
    delete?: Prisma.DriverWhereInput | boolean;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutRidesInput, Prisma.DriverUpdateWithoutRidesInput>, Prisma.DriverUncheckedUpdateWithoutRidesInput>;
};
export type DriverCreateNestedOneWithoutOffersInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutOffersInput, Prisma.DriverUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutOffersInput;
    connect?: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateOneRequiredWithoutOffersNestedInput = {
    create?: Prisma.XOR<Prisma.DriverCreateWithoutOffersInput, Prisma.DriverUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.DriverCreateOrConnectWithoutOffersInput;
    upsert?: Prisma.DriverUpsertWithoutOffersInput;
    connect?: Prisma.DriverWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DriverUpdateToOneWithWhereWithoutOffersInput, Prisma.DriverUpdateWithoutOffersInput>, Prisma.DriverUncheckedUpdateWithoutOffersInput>;
};
export type DriverCreateWithoutRidesInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    offers?: Prisma.RideOfferCreateNestedManyWithoutDriverInput;
};
export type DriverUncheckedCreateWithoutRidesInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    offers?: Prisma.RideOfferUncheckedCreateNestedManyWithoutDriverInput;
};
export type DriverCreateOrConnectWithoutRidesInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutRidesInput, Prisma.DriverUncheckedCreateWithoutRidesInput>;
};
export type DriverUpsertWithoutRidesInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutRidesInput, Prisma.DriverUncheckedUpdateWithoutRidesInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutRidesInput, Prisma.DriverUncheckedCreateWithoutRidesInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutRidesInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutRidesInput, Prisma.DriverUncheckedUpdateWithoutRidesInput>;
};
export type DriverUpdateWithoutRidesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offers?: Prisma.RideOfferUpdateManyWithoutDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutRidesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offers?: Prisma.RideOfferUncheckedUpdateManyWithoutDriverNestedInput;
};
export type DriverCreateWithoutOffersInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    rides?: Prisma.RideCreateNestedManyWithoutAssignedDriverInput;
};
export type DriverUncheckedCreateWithoutOffersInput = {
    id?: string;
    name: string;
    phone: string;
    vehicleType: string;
    status?: $Enums.DriverStatus;
    lastLat?: number | null;
    lastLng?: number | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    rides?: Prisma.RideUncheckedCreateNestedManyWithoutAssignedDriverInput;
};
export type DriverCreateOrConnectWithoutOffersInput = {
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateWithoutOffersInput, Prisma.DriverUncheckedCreateWithoutOffersInput>;
};
export type DriverUpsertWithoutOffersInput = {
    update: Prisma.XOR<Prisma.DriverUpdateWithoutOffersInput, Prisma.DriverUncheckedUpdateWithoutOffersInput>;
    create: Prisma.XOR<Prisma.DriverCreateWithoutOffersInput, Prisma.DriverUncheckedCreateWithoutOffersInput>;
    where?: Prisma.DriverWhereInput;
};
export type DriverUpdateToOneWithWhereWithoutOffersInput = {
    where?: Prisma.DriverWhereInput;
    data: Prisma.XOR<Prisma.DriverUpdateWithoutOffersInput, Prisma.DriverUncheckedUpdateWithoutOffersInput>;
};
export type DriverUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rides?: Prisma.RideUpdateManyWithoutAssignedDriverNestedInput;
};
export type DriverUncheckedUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus;
    lastLat?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    lastLng?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rides?: Prisma.RideUncheckedUpdateManyWithoutAssignedDriverNestedInput;
};
export type DriverCountOutputType = {
    offers: number;
    rides: number;
};
export type DriverCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offers?: boolean | DriverCountOutputTypeCountOffersArgs;
    rides?: boolean | DriverCountOutputTypeCountRidesArgs;
};
export type DriverCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverCountOutputTypeSelect<ExtArgs> | null;
};
export type DriverCountOutputTypeCountOffersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideOfferWhereInput;
};
export type DriverCountOutputTypeCountRidesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RideWhereInput;
};
export type DriverSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    vehicleType?: boolean;
    status?: boolean;
    lastLat?: boolean;
    lastLng?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    offers?: boolean | Prisma.Driver$offersArgs<ExtArgs>;
    rides?: boolean | Prisma.Driver$ridesArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    vehicleType?: boolean;
    status?: boolean;
    lastLat?: boolean;
    lastLng?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    vehicleType?: boolean;
    status?: boolean;
    lastLat?: boolean;
    lastLng?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["driver"]>;
export type DriverSelectScalar = {
    id?: boolean;
    name?: boolean;
    phone?: boolean;
    vehicleType?: boolean;
    status?: boolean;
    lastLat?: boolean;
    lastLng?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
};
export type DriverOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "phone" | "vehicleType" | "status" | "lastLat" | "lastLng" | "updatedAt" | "createdAt", ExtArgs["result"]["driver"]>;
export type DriverInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offers?: boolean | Prisma.Driver$offersArgs<ExtArgs>;
    rides?: boolean | Prisma.Driver$ridesArgs<ExtArgs>;
    _count?: boolean | Prisma.DriverCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DriverIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DriverIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DriverPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Driver";
    objects: {
        offers: Prisma.$RideOfferPayload<ExtArgs>[];
        rides: Prisma.$RidePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        phone: string;
        vehicleType: string;
        status: $Enums.DriverStatus;
        lastLat: number | null;
        lastLng: number | null;
        updatedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["driver"]>;
    composites: {};
};
export type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DriverPayload, S>;
export type DriverCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DriverCountAggregateInputType | true;
};
export interface DriverDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Driver'];
        meta: {
            name: 'Driver';
        };
    };
    findUnique<T extends DriverFindUniqueArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DriverFindFirstArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DriverFindManyArgs>(args?: Prisma.SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DriverCreateArgs>(args: Prisma.SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DriverCreateManyArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DriverDeleteArgs>(args: Prisma.SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DriverUpdateArgs>(args: Prisma.SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DriverDeleteManyArgs>(args?: Prisma.SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DriverUpdateManyArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DriverUpsertArgs>(args: Prisma.SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DriverCountArgs>(args?: Prisma.Subset<T, DriverCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DriverCountAggregateOutputType> : number>;
    aggregate<T extends DriverAggregateArgs>(args: Prisma.Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>;
    groupBy<T extends DriverGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DriverGroupByArgs['orderBy'];
    } : {
        orderBy?: DriverGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DriverFieldRefs;
}
export interface Prisma__DriverClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    offers<T extends Prisma.Driver$offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RideOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rides<T extends Prisma.Driver$ridesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Driver$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DriverFieldRefs {
    readonly id: Prisma.FieldRef<"Driver", 'String'>;
    readonly name: Prisma.FieldRef<"Driver", 'String'>;
    readonly phone: Prisma.FieldRef<"Driver", 'String'>;
    readonly vehicleType: Prisma.FieldRef<"Driver", 'String'>;
    readonly status: Prisma.FieldRef<"Driver", 'DriverStatus'>;
    readonly lastLat: Prisma.FieldRef<"Driver", 'Float'>;
    readonly lastLng: Prisma.FieldRef<"Driver", 'Float'>;
    readonly updatedAt: Prisma.FieldRef<"Driver", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Driver", 'DateTime'>;
}
export type DriverFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
    orderBy?: Prisma.DriverOrderByWithRelationInput | Prisma.DriverOrderByWithRelationInput[];
    cursor?: Prisma.DriverWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DriverScalarFieldEnum | Prisma.DriverScalarFieldEnum[];
};
export type DriverCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
};
export type DriverCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DriverCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.DriverCreateManyInput | Prisma.DriverCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DriverUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type DriverUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DriverUpdateManyMutationInput, Prisma.DriverUncheckedUpdateManyInput>;
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type DriverUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
    create: Prisma.XOR<Prisma.DriverCreateInput, Prisma.DriverUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DriverUpdateInput, Prisma.DriverUncheckedUpdateInput>;
};
export type DriverDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where: Prisma.DriverWhereUniqueInput;
};
export type DriverDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DriverWhereInput;
    limit?: number;
};
export type Driver$offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Driver$ridesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DriverDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DriverSelect<ExtArgs> | null;
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    include?: Prisma.DriverInclude<ExtArgs> | null;
};
