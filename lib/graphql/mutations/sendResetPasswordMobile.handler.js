import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendResetPasswordMobileHandler(sendResetPasswordMobile, dispatch, params, oldStore, options) {
    if (sendResetPasswordMobile) {
        emitFPIEvent(FPI_EVENTS.USER_PASSWORD_RESET_REQUEST, params, sendResetPasswordMobile, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=sendResetPasswordMobile.handler.js.map