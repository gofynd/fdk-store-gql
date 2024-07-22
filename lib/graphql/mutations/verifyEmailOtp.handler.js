import { setUserData } from "../../store/slices/auth";
export function verifyEmailOTPHandler(verifyEmailOTP, dispatch) {
    if (verifyEmailOTP) {
        dispatch(setUserData(verifyEmailOTP));
    }
}
//# sourceMappingURL=verifyEmailOtp.handler.js.map