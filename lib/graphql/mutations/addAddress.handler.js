import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function addAddressHandler(addAddress, dispatch, params, oldStore, options) {
    if (addAddress) {
        emitFPIEvent(FPI_EVENTS.ADDRESS_ADD, params, addAddress, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=addAddress.handler.js.map