import { setUserData } from "../../store/slices/auth";
export function loginWithGoogleHandler(loginWithGoogle, dispatch) {
    if (loginWithGoogle) {
        dispatch(setUserData(loginWithGoogle));
    }
}
//# sourceMappingURL=loginWithGoogle.handler.js.map