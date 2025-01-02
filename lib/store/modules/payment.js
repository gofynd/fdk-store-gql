import { getSupportedUpiIntentApps, checkoutPayment } from "../slices/payment";
export class PaymentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    checkoutPayment(payload) {
        return this.dispatch(checkoutPayment(payload));
    }
    getSupportedUpiIntentApps(payload) {
        return this.dispatch(getSupportedUpiIntentApps(payload));
    }
}
//# sourceMappingURL=payment.js.map