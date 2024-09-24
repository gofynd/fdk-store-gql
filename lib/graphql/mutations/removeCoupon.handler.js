import { setremoveCoupon } from "../../store/slices/cart";
export function removeCouponHandler(removeCoupon, dispatch) {
    if (removeCoupon) {
        dispatch(setremoveCoupon(removeCoupon));
    }
}
//# sourceMappingURL=removeCoupon.handler.js.map