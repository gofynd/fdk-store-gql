import { UserAction } from "../../types/graphql";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendOTPOnEmailHandler(sendOTPOnEmail, dispatch, params, oldStore, options) {
    var _a;
    if (sendOTPOnEmail) {
        if (((_a = params === null || params === void 0 ? void 0 : params.sendEmailOtpRequestSchemaInput) === null || _a === void 0 ? void 0 : _a.action) === UserAction.Resend) {
            emitFPIEvent(FPI_EVENTS.USER_RESEND_OTP, params, sendOTPOnEmail, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=sendOTPOnEmail.handler.js.map