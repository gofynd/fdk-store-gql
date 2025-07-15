import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function verifyMobileOTPHandler(verifyMobileOTP, dispatch, params, oldStore, options) {
    if (verifyMobileOTP) {
        dispatch(setUserData(verifyMobileOTP));
        emitFPIEvent(FPI_EVENTS.LOG_IN, Object.assign(Object.assign({}, params), { method: 'phone' }), verifyMobileOTP === null || verifyMobileOTP === void 0 ? void 0 : verifyMobileOTP.user, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=verifyMobileOTP.handler.js.map