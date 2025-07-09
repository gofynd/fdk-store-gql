import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function selectAddressHandler(res, dispatch, params, oldStore) {
    emitFPIEvent(FPI_EVENTS.ADD_ADDRESS_INFORMATION, params, res, oldStore, dispatch);
}
//# sourceMappingURL=selectAddress.handler.js.map