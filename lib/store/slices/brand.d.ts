import { BrandSlice } from "../../types/brand";
import { Brand } from "../../types/graphql";
export declare const brandReducer: import("redux").Reducer<BrandSlice, import("redux").AnyAction>;
export declare const setBrand: import("@reduxjs/toolkit").ActionCreatorWithPayload<Brand, "brand/setBrand">;
