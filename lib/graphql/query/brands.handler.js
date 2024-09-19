import { setBrands } from "../../store/slices/brands";
const themeMap = {};
export function brandsHandler(brands, dispatch) {
    if (brands === null || brands === void 0 ? void 0 : brands.items) {
        dispatch(setBrands(brands));
    }
}
//# sourceMappingURL=brands.handler.js.map