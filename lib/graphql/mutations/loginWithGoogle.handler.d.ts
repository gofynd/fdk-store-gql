import type { ThunkActionDispatch } from "redux-thunk";
import { AuthSuccess } from "../../types/graphql";
export declare function loginWithGoogleHandler(loginWithGoogle: AuthSuccess, dispatch: ThunkActionDispatch<any>): void;
