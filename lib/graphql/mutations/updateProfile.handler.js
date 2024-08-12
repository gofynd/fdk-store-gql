import { setUserData } from "../../store/slices/auth";
export function updateProfileHandler(updateProfile, dispatch) {
    if (updateProfile) {
        dispatch(setUserData(updateProfile));
    }
}
//# sourceMappingURL=updateProfile.handler.js.map