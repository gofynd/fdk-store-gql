import { UserAction } from "../../types/graphql";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendOTPOnEmailHandler(sendOTPOnEmail, dispatch, params, oldStore, options) {
    if (sendOTPOnEmail) {
        if ((params === null || params === void 0 ? void 0 : params.action) === UserAction.Resend) {
            emitFPIEvent(FPI_EVENTS.USER_RESEND_OTP, params, sendOTPOnEmail, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=sendOTPOnEmail.handler.js.map