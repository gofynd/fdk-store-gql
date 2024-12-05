import { setAddressItem } from "../../store/slices/address";
export function addressHandler(address, dispatch) {
    if (address.id) {
        dispatch(setAddressItem(address));
    }
}
//# sourceMappingURL=address.handler.js.map