import { setupdateAddress } from "../../store/slices/address";
export function updateAddressHandler(updateAddress, dispatch) {
    if (updateAddress) {
        dispatch(setupdateAddress(updateAddress));
    }
}
//# sourceMappingURL=updateAddress.handler.js.map