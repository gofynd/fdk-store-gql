import type { ThunkActionDispatch } from "redux-thunk";
import { CartDetailResponse } from "../../types/graphql";
export declare function applyCouponHandler(applyCoupon: CartDetailResponse, dispatch: ThunkActionDispatch<any>, options?: any): void;
