import { setUserData } from "../../store/slices/auth";
export function loginWithEmailAndPasswordHandler(loginWithEmailAndPassword, dispatch) {
    if (loginWithEmailAndPassword) {
        dispatch(setUserData(loginWithEmailAndPassword));
    }
}
//# sourceMappingURL=loginWithEmailAndPassword.handler.js.map