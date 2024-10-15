export default class RupifiPayment {
    selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    });
    verifyUser(params: any, phone: any): Promise<void>;
    transaction(obj: any): Promise<unknown>;
}
