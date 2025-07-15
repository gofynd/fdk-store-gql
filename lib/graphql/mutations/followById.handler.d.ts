import type { ThunkActionDispatch } from "redux-thunk";
import { FollowPostResponse } from "../../types/graphql";
export declare function followByIdHandler(res: FollowPostResponse, dispatch: ThunkActionDispatch<any>, params: unknown, oldStore: unknown, options?: any): void;
