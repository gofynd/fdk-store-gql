import { UserAction, } from "../../types/graphql";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendOTPOnMobileHandler(sendOTPOnMobile, dispatch, params, oldStore, options) {
    var _a;
    if (sendOTPOnMobile) {
        if (((_a = params === null || params === void 0 ? void 0 : params.sendMobileOtpRequestSchemaInput) === null || _a === void 0 ? void 0 : _a.action) === UserAction.Resend) {
            emitFPIEvent(FPI_EVENTS.USER_RESEND_OTP, params, sendOTPOnMobile, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=sendOTPOnMobile.handler.js.map