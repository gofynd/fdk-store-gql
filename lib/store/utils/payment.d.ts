import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare function handleConfirmPayment(gqClient: ApolloClient<NormalizedCacheObject>, params: any): Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>>>;
export declare function handleCODOrder(gqClient: ApolloClient<NormalizedCacheObject>, state: any, paymentOptions: any, create_order?: (gqClient: ApolloClient<NormalizedCacheObject>, paymentOptions: any) => Promise<any>): Promise<void>;
export declare function transactOrder(gqClient: ApolloClient<NormalizedCacheObject>, state: any, paymentOptions: {
    aggregator: string;
    payment: any;
}, create_order?: (gqClient: ApolloClient<NormalizedCacheObject>, paymentOptions: any) => Promise<any>): Promise<void>;
export declare function createOrder(gqClient: ApolloClient<NormalizedCacheObject>, paymentOptions: any): Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>>>;
export declare function updateOrderInfo(currentPaymentGatway: any, orderInfo: any, paymentOptions: any): any;
