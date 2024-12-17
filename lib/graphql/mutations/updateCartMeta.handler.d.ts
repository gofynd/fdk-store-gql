import type { ThunkActionDispatch } from "redux-thunk";
import { CartMetaResponse } from "../../types/graphql";
export declare function updateCartMetaHandler(updateCartMeta: CartMetaResponse, dispatch: ThunkActionDispatch<any>): void;
