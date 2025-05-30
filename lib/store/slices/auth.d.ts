import { AuthSlice } from "../../types/auth";
import { AuthSuccess, LoginSuccess, PlatformConfig, ProfileEditSuccess, SendOtpResponse, UserDetail, VerifyOtpSuccess } from "../../types/graphql";
export declare const authReducer: import("redux").Reducer<AuthSlice, import("redux").AnyAction>;
export declare const setUserData: import("@reduxjs/toolkit").ActionCreatorWithPayload<AuthSuccess | LoginSuccess | SendOtpResponse | ProfileEditSuccess | VerifyOtpSuccess | (UserDetail & {
    isUserLogin: Boolean;
}), "auth/setUserData">, setplatformConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<PlatformConfig, "auth/setplatformConfig">;
