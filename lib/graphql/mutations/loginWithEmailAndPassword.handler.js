import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function loginWithEmailAndPasswordHandler(loginWithEmailAndPassword, dispatch, params, oldStore, options) {
    if (loginWithEmailAndPassword) {
        conditionalStoreDispatch(dispatch, setUserData, loginWithEmailAndPassword, options);
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'email' }), loginWithEmailAndPassword === null || loginWithEmailAndPassword === void 0 ? void 0 : loginWithEmailAndPassword.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=loginWithEmailAndPassword.handler.js.map