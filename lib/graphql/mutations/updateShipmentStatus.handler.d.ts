import type { ThunkActionDispatch } from "redux-thunk";
import { StatusesBodyResponse, UpdateShipmentStatusRequestInput } from "../../types/graphql";
export declare function updateShipmentStatusHandler(shipment: StatusesBodyResponse, dispatch: ThunkActionDispatch<any>, params: Record<string, unknown> & {
    updateShipmentStatusRequestInput: UpdateShipmentStatusRequestInput;
}, oldStore: unknown, options?: any): void;
