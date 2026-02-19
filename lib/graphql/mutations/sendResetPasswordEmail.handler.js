import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendResetPasswordEmailHandler(sendResetPasswordEmail, dispatch, params, oldStore, options) {
    if (sendResetPasswordEmail) {
        emitFPIEvent(FPI_EVENTS.USER_PASSWORD_RESET_REQUEST, params, sendResetPasswordEmail, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=sendResetPasswordEmail.handler.js.map