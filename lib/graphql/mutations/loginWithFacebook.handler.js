import { setUserData } from "../../store/slices/auth";
export function loginWithFacebookHandler(loginWithFacebook, dispatch) {
    if (loginWithFacebook) {
        dispatch(setUserData(loginWithFacebook));
    }
}
//# sourceMappingURL=loginWithFacebook.handler.js.map