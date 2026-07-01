import { getSupportedUpiIntentApps, checkoutPayment, validateCardDetails, createSplitOrder, paySplit, } from "../slices/payment";
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
    validateCardDetails(payload) {
        return this.dispatch(validateCardDetails(payload));
    }
    createSplitOrder(payload) {
        return this.dispatch(createSplitOrder(payload));
    }
    paySplit(payload) {
        return this.dispatch(paySplit(payload));
    }
}
//# sourceMappingURL=payment.js.map