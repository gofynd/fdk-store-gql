import { setAddresses } from "../../store/slices/address";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function addressesHandler(addresses, dispatch, options) {
    if (addresses) {
        conditionalStoreDispatch(dispatch, setAddresses, addresses, options);
    }
}
//# sourceMappingURL=addresses.handler.js.map