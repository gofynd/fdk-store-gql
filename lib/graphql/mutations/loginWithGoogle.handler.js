import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithGoogleHandler(loginWithGoogle, dispatch, params, oldStore, options) {
    if (loginWithGoogle) {
        dispatch(setUserData(loginWithGoogle));
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'google' }), loginWithGoogle === null || loginWithGoogle === void 0 ? void 0 : loginWithGoogle.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithGoogle.handler.js.map