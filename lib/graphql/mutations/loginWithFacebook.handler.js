import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function loginWithFacebookHandler(loginWithFacebook, dispatch, params, oldStore, options) {
    if (loginWithFacebook) {
        conditionalStoreDispatch(dispatch, setUserData, loginWithFacebook, options);
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, Object.assign(Object.assign({}, params), { method: 'facebook' }), loginWithFacebook === null || loginWithFacebook === void 0 ? void 0 : loginWithFacebook.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithFacebook.handler.js.map