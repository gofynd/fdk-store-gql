import { setAddresses } from "../../store/slices/address";
export function addressesHandler(addresses, dispatch) {
    if (addresses) {
        dispatch(setAddresses(addresses));
    }
}
//# sourceMappingURL=addresses.handler.js.map