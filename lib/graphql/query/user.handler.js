import { setUserData } from "../../store/slices/auth";
export function userHandler(user, dispatch) {
    if (user.loggedInUser) {
        dispatch(setUserData(user.loggedInUser));
    }
}
//# sourceMappingURL=user.handler.js.map