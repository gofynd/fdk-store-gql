import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithEmailAndPasswordHandler(loginWithEmailAndPassword, dispatch, params, oldStore) {
    var _a;
    if (loginWithEmailAndPassword) {
        dispatch(setUserData(loginWithEmailAndPassword));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = loginWithEmailAndPassword === null || loginWithEmailAndPassword === void 0 ? void 0 : loginWithEmailAndPassword.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithEmailAndPassword.handler.js.map