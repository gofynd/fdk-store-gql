import { setBrand } from "../../store/slices/brand";
const themeMap = {};
export function brandHandler(brand, dispatch) {
    if (brand) {
        dispatch(setBrand(brand));
    }
}
//# sourceMappingURL=brand.handler.js.map