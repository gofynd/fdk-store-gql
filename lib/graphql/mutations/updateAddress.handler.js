import { setupdateAddress } from "../../store/slices/address";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function updateAddressHandler(updateAddress, dispatch, options) {
    if (updateAddress) {
        conditionalStoreDispatch(dispatch, setupdateAddress, updateAddress, options);
    }
}
//# sourceMappingURL=updateAddress.handler.js.map