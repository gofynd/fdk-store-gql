import { ProductsSlice } from "../../types/products";
import { ProductConnection } from "../../types/graphql";
export declare const plpReducer: import("redux").Reducer<ProductsSlice, import("redux").AnyAction>;
export declare const resetProductListingMeta: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"products/resetProductListingMeta">, setProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductConnection, "products/setProducts">;
