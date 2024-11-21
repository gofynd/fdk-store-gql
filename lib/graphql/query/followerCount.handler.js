import { setfollowerCount } from "../../store/slices/product";
export function followerCountHandler(followerCount, dispatch) {
    if (followerCount) {
        dispatch(setfollowerCount(followerCount));
    }
}
//# sourceMappingURL=followerCount.handler.js.map