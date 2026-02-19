import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function removeAddressHandler(removeAddress, dispatch, params, oldStore, options) {
    if (removeAddress) {
        emitFPIEvent(FPI_EVENTS.ADDRESS_REMOVE, params, removeAddress, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=removeAddress.handler.js.map