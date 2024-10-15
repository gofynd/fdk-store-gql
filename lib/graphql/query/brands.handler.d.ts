import type { ThunkActionDispatch } from "redux-thunk";
import { BrandConnection } from "../../types/graphql";
export declare function brandsHandler(brands: BrandConnection, dispatch: ThunkActionDispatch<any>): void;
