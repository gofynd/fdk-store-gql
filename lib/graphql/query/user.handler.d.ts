import type { ThunkActionDispatch } from "redux-thunk";
import { User } from "../../types/graphql";
export declare function userHandler(user: User, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown): void;
