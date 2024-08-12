import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare function handleConfirmPayment(gqClient: ApolloClient<NormalizedCacheObject>, params: any): Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>>>;
export declare function handleCODOrder(paymentOptions: any): Promise<void>;
export declare function transactOrder(paymentOptions: any, state: any): Promise<void>;
export declare function updateOrderInfo(currentPaymentGateway: any, orderInfo: any, paymentOptions: any): any;
