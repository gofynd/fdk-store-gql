import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithAppleIOSHandler(loginWithAppleIOS, dispatch, params, oldStore, options) {
    if (loginWithAppleIOS) {
        dispatch(setUserData(loginWithAppleIOS));
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'apple' }), loginWithAppleIOS === null || loginWithAppleIOS === void 0 ? void 0 : loginWithAppleIOS.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithAppleIOS.handler.js.map