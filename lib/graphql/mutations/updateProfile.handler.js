import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function updateProfileHandler(updateProfile, dispatch, params, oldStore, options) {
    if (updateProfile) {
        dispatch(setUserData(updateProfile));
        emitFPIEvent(FPI_EVENTS.PROFILE_UPDATE, params, updateProfile, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=updateProfile.handler.js.map