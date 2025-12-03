import { setcustomPage } from "../../store/slices/content";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function customPageHandler(customPage, dispatch, options) {
    if (customPage) {
        conditionalStoreDispatch(dispatch, setcustomPage, customPage, options);
    }
}
//# sourceMappingURL=customPage.hadler.js.map