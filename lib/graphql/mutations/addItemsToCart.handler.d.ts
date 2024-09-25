import type { ThunkActionDispatch } from "redux-thunk";
import { AddCartDetailResponse } from "../../types/graphql";
export declare function addItemsToCartHandler(addItemsToCart: AddCartDetailResponse, dispatch: ThunkActionDispatch<any>): void;
