import { setrewardPoints, } from "../../store/slices/cart";
export function applyRewardPointsHandler(applyRewardPoints, dispatch) {
    if (applyRewardPoints) {
        dispatch(setrewardPoints(applyRewardPoints));
    }
}
//# sourceMappingURL=applyRewardPoints.handler.js.map