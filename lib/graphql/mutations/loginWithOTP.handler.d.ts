import type { ThunkActionDispatch } from "redux-thunk";
import { SendOtpResponse } from "../../types/graphql";
export declare function loginWithOTPHandler(loginWithOTP: SendOtpResponse & {
    isUserLogin: boolean | null;
}, dispatch: ThunkActionDispatch<any>): void;
