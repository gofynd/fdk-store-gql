import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function verifyEmailOTPHandler(verifyEmailOTP, dispatch, params, oldStore, options) {
    if (verifyEmailOTP) {
        dispatch(setUserData(verifyEmailOTP));
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'email' }), verifyEmailOTP === null || verifyEmailOTP === void 0 ? void 0 : verifyEmailOTP.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=verifyEmailOtp.handler.js.map