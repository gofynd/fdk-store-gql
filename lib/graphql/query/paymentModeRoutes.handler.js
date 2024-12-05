import { setPaymentModeRoutes } from "../../store/slices/payment";
const themeMap = {};
export function paymentModeRoutesHandler(paymentModeRoutes, dispatch) {
    if (paymentModeRoutes.payment_options) {
        dispatch(setPaymentModeRoutes(paymentModeRoutes.payment_options));
    }
}
//# sourceMappingURL=paymentModeRoutes.handler.js.map