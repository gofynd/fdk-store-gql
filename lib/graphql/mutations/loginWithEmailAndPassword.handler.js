import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function loginWithEmailAndPasswordHandler(loginWithEmailAndPassword, dispatch, params, oldStore) {
    if (loginWithEmailAndPassword) {
        dispatch(setUserData(loginWithEmailAndPassword));
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'email' }), loginWithEmailAndPassword === null || loginWithEmailAndPassword === void 0 ? void 0 : loginWithEmailAndPassword.user, oldStore, dispatch);
    }
}
//# sourceMappingURL=loginWithEmailAndPassword.handler.js.map