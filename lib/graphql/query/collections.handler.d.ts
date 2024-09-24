import type { ThunkActionDispatch } from "redux-thunk";
import { CollectionConnection } from "../../types/graphql";
export declare function collectionsHandler(collections: CollectionConnection, dispatch: ThunkActionDispatch<any>): void;
