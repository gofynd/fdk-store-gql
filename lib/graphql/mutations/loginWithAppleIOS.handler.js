import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function loginWithAppleIOSHandler(loginWithAppleIOS, dispatch, params, oldStore, options) {
    if (loginWithAppleIOS) {
        conditionalStoreDispatch(dispatch, setUserData, loginWithAppleIOS, options);
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'apple' }), loginWithAppleIOS === null || loginWithAppleIOS === void 0 ? void 0 : loginWithAppleIOS.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithAppleIOS.handler.js.map