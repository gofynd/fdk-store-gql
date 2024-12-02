interface PaymentFlow {
    api_link: string;
}
interface SelectedPayment {
    paymentFlowMeta: PaymentFlow;
}
export default class StandardExtension {
    selectedPayment: SelectedPayment;
    paymentFlow: PaymentFlow;
    constructor(selectedPayment: SelectedPayment);
    transaction(obj: any): Promise<void>;
}
export {};
