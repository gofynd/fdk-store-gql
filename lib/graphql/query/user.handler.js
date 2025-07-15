import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function userHandler(user, dispatch, params, oldStore, options) {
    if (user === null || user === void 0 ? void 0 : user.logged_in_user) {
        dispatch(setUserData(Object.assign({ isUserLogin: true }, user.logged_in_user)));
    }
    if (user.logout) {
        emitFPIEvent(FPI_EVENTS.LOG_OUT, params, user.logout, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=user.handler.js.map