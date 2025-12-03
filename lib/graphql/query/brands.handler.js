import { setBrands } from "../../store/slices/brands";
import { conditionalStoreDispatch } from "../../store/utils/util";
const themeMap = {};
export function brandsHandler(brands, dispatch, options) {
    if (brands === null || brands === void 0 ? void 0 : brands.items) {
        conditionalStoreDispatch(dispatch, setBrands, brands, options);
    }
}
//# sourceMappingURL=brands.handler.js.map