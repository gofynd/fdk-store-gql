import type { ThunkActionDispatch } from "redux-thunk";
import { CouponUpdateResponse } from "../../types/graphql";
export declare function applyCouponHandler(applyCoupon: CouponUpdateResponse, dispatch: ThunkActionDispatch<any>, options?: any): void;
