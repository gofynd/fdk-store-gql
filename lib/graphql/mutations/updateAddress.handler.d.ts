import type { ThunkActionDispatch } from "redux-thunk";
import { UpdateAddressResponse } from "../../types/graphql";
export declare function updateAddressHandler(updateAddress: UpdateAddressResponse, dispatch: ThunkActionDispatch<any>, options?: any): void;
