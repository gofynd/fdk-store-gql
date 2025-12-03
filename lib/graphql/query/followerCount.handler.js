import { setfollowerCount } from "../../store/slices/product";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function followerCountHandler(followerCount, dispatch, options) {
    if (followerCount) {
        conditionalStoreDispatch(dispatch, setfollowerCount, followerCount, options);
    }
}
//# sourceMappingURL=followerCount.handler.js.map