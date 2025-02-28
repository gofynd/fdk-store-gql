import { setUserData } from "../../store/slices/auth";
export function loginWithAppleIOSHandler(loginWithAppleIOS, dispatch) {
    if (loginWithAppleIOS) {
        dispatch(setUserData(loginWithAppleIOS));
    }
}
//# sourceMappingURL=loginWithAppleIOS.handler.js.map