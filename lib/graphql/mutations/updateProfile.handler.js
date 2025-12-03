import { setUserData } from "../../store/slices/auth";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function updateProfileHandler(updateProfile, dispatch, params, oldStore, options) {
    if (updateProfile) {
        conditionalStoreDispatch(dispatch, setUserData, updateProfile, options);
        emitFPIEvent(FPI_EVENTS.PROFILE_UPDATE, params, updateProfile, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=updateProfile.handler.js.map