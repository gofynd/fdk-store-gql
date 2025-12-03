import { setBrand } from "../../store/slices/brand";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function brandHandler(brand, dispatch, options) {
    if (brand) {
        conditionalStoreDispatch(dispatch, setBrand, brand, options);
    }
}
//# sourceMappingURL=brand.handler.js.map