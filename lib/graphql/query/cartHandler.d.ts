import type { ThunkActionDispatch } from "redux-thunk";
import { Cart } from "../../types/graphql";
export declare function cartHandler(cart: Cart, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown): void;
