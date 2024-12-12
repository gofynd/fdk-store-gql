import { setUserData } from "../../store/slices/auth";
export function loginWithOTPHandler(loginWithOTP, dispatch) {
    if (loginWithOTP) {
        dispatch(setUserData(Object.assign(Object.assign({}, loginWithOTP), { isUserLogin: false })));
    }
}
//# sourceMappingURL=loginWithOTP.handler.js.map