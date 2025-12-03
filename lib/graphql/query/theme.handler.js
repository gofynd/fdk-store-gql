import { setPreviewTheme, setthemePageDetail, setthemePages, } from "../../store/slices/theme";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function themeHandler(theme, dispatch, options) {
    if (theme === null || theme === void 0 ? void 0 : theme.preview_theme) {
        conditionalStoreDispatch(dispatch, setPreviewTheme, theme.preview_theme, options);
    }
    if (theme.theme_page_detail) {
        conditionalStoreDispatch(dispatch, setthemePageDetail, theme.theme_page_detail, options);
    }
    if (theme.theme_pages) {
        conditionalStoreDispatch(dispatch, setthemePages, theme.theme_pages, options);
    }
}
//# sourceMappingURL=theme.handler.js.map