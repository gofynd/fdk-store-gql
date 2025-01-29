import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithAppleIOSHandler(loginWithAppleIOS, dispatch, params, oldStore) {
    var _a;
    if (loginWithAppleIOS) {
        dispatch(setUserData(loginWithAppleIOS));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = loginWithAppleIOS === null || loginWithAppleIOS === void 0 ? void 0 : loginWithAppleIOS.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithAppleIOS.handler.js.map