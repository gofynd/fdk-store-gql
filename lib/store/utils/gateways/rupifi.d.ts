import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export default class RupifiPayment {
    private gqClient;
    selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    };
    paymentFlow: any;
    constructor(gqClient: ApolloClient<NormalizedCacheObject>, selectedPayment: {
        id: string;
        aggregator_name: any;
        amount: any;
        paymentFlowMeta: any;
    });
    verifyUser(params: any, phone: any): Promise<void>;
    transaction(obj: any): Promise<unknown>;
}
