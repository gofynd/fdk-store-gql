import type { ThunkActionDispatch } from "redux-thunk";
import { PromiseTimestamp } from "../../types/graphql";
export declare function deliveryPromiseHandler(deliveryPromise: PromiseTimestamp, dispatch: ThunkActionDispatch<any>, params: object, oldStore: unknown, options: any, error: object): void;
