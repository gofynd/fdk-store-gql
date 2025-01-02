import { CommonAsyncLoadingTypes } from ".";
export type PlatformDataType = Partial<any & CommonAsyncLoadingTypes>;
export type UserDataType = Partial<any & CommonAsyncLoadingTypes>;
export type AuthSlice = {
    logged_in: null | boolean;
    platform_data: PlatformDataType;
    user_data: UserDataType;
    user_fetched: null | boolean;
};
export type SignUpUserParam = {
    id: string;
    body: any;
};
export type loginWithAppleIOSParam = {
    platform?: string;
    body: any;
};
export type verifyOTPParam = {
    id: string;
    body: any;
};
export type OAuthLoginParam = {
    id: string;
    body: any;
};
export type LogInOTPParam = {
    id: string;
    mobile: string;
    country_code: string;
};
export type SignInUserWithPassword = {
    password: string;
    username: string;
};
export type ResetPasswordWithEmail = {
    id: string;
    email: string;
    captcha_code: string;
};
export type ResetPasswordWithMobile = {
    id: string;
    mobile: string;
    country_code: string;
    captcha_code: string;
};
export type SendOTPOnMobile = {
    id: string;
    body: any;
};
export type SendOTPOnEmail = {
    id: string;
    body: any;
};
export type VerifyMobileOTP = {
    id: string;
    body: any;
};
export type VerifyEmailOTP = {
    id: string;
    body: any;
};
export type UpdateProfileType = {
    id: string;
    body: any;
};
export type SendEmailVerificationLink = {
    id: string;
    email: string;
};
