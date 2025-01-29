import type { ThunkActionDispatch } from "redux-thunk";
import { LoginSuccess } from "../../types/graphql";
export declare function loginWithEmailAndPasswordHandler(loginWithEmailAndPassword: LoginSuccess, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown): void;
