import { setUserData } from "../../store/slices/auth";
export function loginWithOTPHandler(loginWithOTP, dispatch) {
    if (loginWithOTP) {
        dispatch(setUserData(loginWithOTP));
    }
}
//# sourceMappingURL=loginWithOTP.handler.js.map