import { setUserData } from "../../store/slices/auth";
export function userHandler(user, dispatch) {
    if (user.logged_in_user) {
        dispatch(setUserData(user.logged_in_user));
    }
}
//# sourceMappingURL=user.handler.js.map