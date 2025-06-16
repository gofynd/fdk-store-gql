import type { ThunkActionDispatch } from "redux-thunk";
import { CartShipmentsResponse } from "../../types/graphql";
export declare function selectAddressHandler(res: CartShipmentsResponse, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown): void;
