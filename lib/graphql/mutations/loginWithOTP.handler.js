import { setUserData } from "../../store/slices/auth";
export function loginWithOTPHandler(loginWithOTP, dispatch) {
    if (loginWithOTP) {
        dispatch(setUserData(Object.assign(Object.assign({}, loginWithOTP), { isUserLogin: null })));
    }
}
//# sourceMappingURL=loginWithOTP.handler.js.map