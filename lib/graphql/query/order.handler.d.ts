import type { ThunkActionDispatch } from "redux-thunk";
import { Order } from "../../types/graphql";
export declare function orderHandler(res: Order, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown, options?: any): void;
