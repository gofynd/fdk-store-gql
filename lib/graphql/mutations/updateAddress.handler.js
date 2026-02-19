import { setupdateAddress } from "../../store/slices/address";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function updateAddressHandler(updateAddress, dispatch, params, oldStore, options) {
    if (updateAddress) {
        conditionalStoreDispatch(dispatch, setupdateAddress, updateAddress, options);
        emitFPIEvent(FPI_EVENTS.ADDRESS_UPDATE, params, updateAddress, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=updateAddress.handler.js.map