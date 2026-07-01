import type { ThunkActionDispatch } from "redux-thunk";
import { CouponUpdateResponse } from "../../types/graphql";
export declare function removeCouponHandler(removeCoupon: CouponUpdateResponse, dispatch: ThunkActionDispatch<any>, options?: any): void;
