import { setcoupons } from "../../store/slices/cart";
export function couponsHandler(coupons, dispatch) {
    if (coupons) {
        dispatch(setcoupons(coupons));
    }
}
//# sourceMappingURL=coupons.handler.js.map