import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function forgotPasswordHandler(forgotPassword, dispatch, params, oldStore, options) {
    if (forgotPassword) {
        emitFPIEvent(FPI_EVENTS.USER_PASSWORD_RESET_SUCCESS, params, forgotPassword, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=forgotPassword.handler.js.map