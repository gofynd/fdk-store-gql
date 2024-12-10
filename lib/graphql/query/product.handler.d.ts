import type { ThunkActionDispatch } from "redux-thunk";
import { Product } from "../../types/graphql";
export declare function productHandler(product: Product, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown): void;
