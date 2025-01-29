import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithFacebookHandler(loginWithFacebook, dispatch, params, oldStore) {
    var _a;
    if (loginWithFacebook) {
        dispatch(setUserData(loginWithFacebook));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = loginWithFacebook === null || loginWithFacebook === void 0 ? void 0 : loginWithFacebook.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithFacebook.handler.js.map