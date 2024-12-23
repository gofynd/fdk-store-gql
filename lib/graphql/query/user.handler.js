import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function userHandler(user, dispatch, params, oldStore) {
    if (user === null || user === void 0 ? void 0 : user.logged_in_user) {
        dispatch(setUserData(user.logged_in_user));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, user.logged_in_user, oldStore, dispatch);
    }
    if (user.logout) {
        emitFPIEvent(FPI_EVENTS.LOG_OUT, params, user.logout, oldStore, dispatch);
    }
}
//# sourceMappingURL=user.handler.js.map