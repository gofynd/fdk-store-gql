import type { ThunkActionDispatch } from "redux-thunk";
import { DeleteAddressResponse } from "../../types/graphql";
export declare function removeAddressHandler(removeAddress: DeleteAddressResponse, dispatch: ThunkActionDispatch<any>, params: any, oldStore: unknown, options?: any): void;
