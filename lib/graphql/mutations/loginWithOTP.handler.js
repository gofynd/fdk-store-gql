import { setUserData } from "../../store/slices/auth";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function loginWithOTPHandler(loginWithOTP, dispatch, options) {
    if (loginWithOTP) {
        conditionalStoreDispatch(dispatch, setUserData, loginWithOTP, options);
    }
}
//# sourceMappingURL=loginWithOTP.handler.js.map