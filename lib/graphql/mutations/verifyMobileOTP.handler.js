import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function verifyMobileOTPHandler(verifyMobileOTP, dispatch, params, oldStore) {
    var _a;
    if (verifyMobileOTP) {
        dispatch(setUserData(verifyMobileOTP));
        emitFPIEvent(FPI_EVENTS.LOG_IN, params, !!((_a = verifyMobileOTP === null || verifyMobileOTP === void 0 ? void 0 : verifyMobileOTP.user) === null || _a === void 0 ? void 0 : _a.id), //Checking for if user data present  
        oldStore, dispatch);
    }
}
//# sourceMappingURL=verifyMobileOTP.handler.js.map