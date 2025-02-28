import { setUserData } from "../../store/slices/auth";
export function verifyMobileOTPHandler(verifyMobileOTP, dispatch) {
    if (verifyMobileOTP) {
        dispatch(setUserData(verifyMobileOTP));
    }
}
//# sourceMappingURL=verifyMobileOTP.handler.js.map