import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function updateProfileHandler(updateProfile, dispatch, params, oldStore) {
    if (updateProfile) {
        dispatch(setUserData(updateProfile));
        emitFPIEvent(FPI_EVENTS.PROFILE_UPDATE, params, updateProfile, oldStore);
    }
}
//# sourceMappingURL=updateProfile.handler.js.map