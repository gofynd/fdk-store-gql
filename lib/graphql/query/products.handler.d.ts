import { ProductConnection } from "../../types/graphql";
import { ThunkActionDispatch } from "redux-thunk";
export declare function productsHandler(products: ProductConnection, dispatch: ThunkActionDispatch<any>, params: any, oldStore: unknown, options?: any): void;
