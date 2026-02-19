import { setBrands } from "../../store/slices/brands";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function brandsHandler(brands, dispatch, params, oldStore, options) {
    if (brands === null || brands === void 0 ? void 0 : brands.items) {
        conditionalStoreDispatch(dispatch, setBrands, brands, options);
        emitFPIEvent(FPI_EVENTS.BRANDS_VIEW, params, brands, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=brands.handler.js.map