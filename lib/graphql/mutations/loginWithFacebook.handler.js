import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithFacebookHandler(loginWithFacebook, dispatch, params, oldStore) {
    if (loginWithFacebook) {
        dispatch(setUserData(loginWithFacebook));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, loginWithFacebook === null || loginWithFacebook === void 0 ? void 0 : loginWithFacebook.user, oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithFacebook.handler.js.map