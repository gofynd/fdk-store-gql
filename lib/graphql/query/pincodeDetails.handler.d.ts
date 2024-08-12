import type { ThunkActionDispatch } from "redux-thunk";
import { PincodeDataResponse } from "../../types/graphql";
export declare function pincodeDetailsHandler(pincodeDetails: PincodeDataResponse, dispatch: ThunkActionDispatch<any>, params: object): void;
