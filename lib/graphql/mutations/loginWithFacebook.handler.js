import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithFacebookHandler(loginWithFacebook, dispatch, params, oldStore, options) {
    if (loginWithFacebook) {
        dispatch(setUserData(loginWithFacebook));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, Object.assign(Object.assign({}, params), { method: 'facebook' }), loginWithFacebook === null || loginWithFacebook === void 0 ? void 0 : loginWithFacebook.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithFacebook.handler.js.map