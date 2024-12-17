import { BrandsSlice } from "../../types/brands";
import { BrandConnection } from "../../types/graphql";
export declare const brandsReducer: import("redux").Reducer<BrandsSlice, import("redux").AnyAction>;
export declare const setBrands: import("@reduxjs/toolkit").ActionCreatorWithPayload<BrandConnection, "brands/setBrands">;
