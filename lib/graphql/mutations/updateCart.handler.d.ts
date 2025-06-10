import type { ThunkActionDispatch } from "redux-thunk";
import { UpdateCartDetailResponse } from "../../types/graphql";
export declare function updateCartHandler(updateCart: UpdateCartDetailResponse, dispatch: ThunkActionDispatch<any>, params: any, oldStore: unknown, options?: any): void;
