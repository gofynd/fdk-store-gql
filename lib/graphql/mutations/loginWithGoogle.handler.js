import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithGoogleHandler(loginWithGoogle, dispatch, params, oldStore) {
    var _a;
    if (loginWithGoogle) {
        dispatch(setUserData(loginWithGoogle));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = loginWithGoogle === null || loginWithGoogle === void 0 ? void 0 : loginWithGoogle.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithGoogle.handler.js.map