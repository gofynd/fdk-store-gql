import type { ThunkActionDispatch } from "redux-thunk";
import { SendOtpResponse } from "../../types/graphql";
export declare function loginWithOTPHandler(loginWithOTP: SendOtpResponse, dispatch: ThunkActionDispatch<any>, options?: any): void;
