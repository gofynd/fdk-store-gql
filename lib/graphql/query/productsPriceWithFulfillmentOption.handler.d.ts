import { ProductSizePrice } from "../../types/graphql";
import { ThunkActionDispatch } from "redux-thunk";
interface ProductPriceResponse {
    items: ProductSizePrice[];
}
export declare function productsPriceWithFulfillmentOptionHandler(productPrice: ProductPriceResponse, dispatch: ThunkActionDispatch<any>, params: any, oldStore: unknown, options: any): void;
export {};
