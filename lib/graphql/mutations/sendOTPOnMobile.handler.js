import { UserAction, } from "../../types/graphql";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function sendOTPOnMobileHandler(sendOTPOnMobile, dispatch, params, oldStore, options) {
    if (sendOTPOnMobile) {
        if ((params === null || params === void 0 ? void 0 : params.action) === UserAction.Resend) {
            emitFPIEvent(FPI_EVENTS.USER_RESEND_OTP, params, sendOTPOnMobile, oldStore, dispatch, options);
        }
    }
}
//# sourceMappingURL=sendOTPOnMobile.handler.js.map