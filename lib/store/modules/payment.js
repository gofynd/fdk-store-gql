import { checkoutPayment } from "../slices/payment";
export class PaymentModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    checkoutPayment(payload) {
        return this.dispatch(checkoutPayment(payload));
    }
}
//# sourceMappingURL=payment.js.map