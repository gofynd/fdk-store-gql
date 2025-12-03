import { setrewardPoints, } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function applyRewardPointsHandler(applyRewardPoints, dispatch, options) {
    if (applyRewardPoints) {
        conditionalStoreDispatch(dispatch, setrewardPoints, applyRewardPoints, options);
    }
}
//# sourceMappingURL=applyRewardPoints.handler.js.map