import { setproductLadderPromotion } from "../../store/slices/cart";
export function productLadderPromotionHandler(productLadderPromotion, dispatch) {
    if (productLadderPromotion) {
        dispatch(setproductLadderPromotion(productLadderPromotion));
    }
}
//# sourceMappingURL=productLadderPromotion.handler.js.map