import type { ThunkActionDispatch } from "redux-thunk";
import { SaveAddressResponse } from "../../types/graphql";
export declare function addAddressHandler(addAddress: SaveAddressResponse, dispatch: ThunkActionDispatch<any>, params: any, oldStore: unknown, options?: any): void;
