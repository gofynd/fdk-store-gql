import { setproductLadderPromotion } from "../../store/slices/cart";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function productLadderPromotionHandler(productLadderPromotion, dispatch, options) {
    if (productLadderPromotion) {
        conditionalStoreDispatch(dispatch, setproductLadderPromotion, productLadderPromotion, options);
    }
}
//# sourceMappingURL=productLadderPromotion.handler.js.map