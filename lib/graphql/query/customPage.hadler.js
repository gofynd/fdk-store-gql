import { setcustomPage } from "../../store/slices/content";
export function customPageHandler(customPage, dispatch) {
    if (customPage) {
        dispatch(setcustomPage(customPage));
    }
}
//# sourceMappingURL=customPage.hadler.js.map