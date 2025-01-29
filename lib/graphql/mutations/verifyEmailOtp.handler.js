import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function verifyEmailOTPHandler(verifyEmailOTP, dispatch, params, oldStore) {
    var _a;
    if (verifyEmailOTP) {
        dispatch(setUserData(verifyEmailOTP));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = verifyEmailOTP === null || verifyEmailOTP === void 0 ? void 0 : verifyEmailOTP.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=verifyEmailOtp.handler.js.map