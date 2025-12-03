import { setAddressItem } from "../../store/slices/address";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function addressHandler(address, dispatch, options) {
    if (address.id) {
        conditionalStoreDispatch(dispatch, setAddressItem, address, options);
    }
}
//# sourceMappingURL=address.handler.js.map