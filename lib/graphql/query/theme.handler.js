import { setPreviewTheme, setthemePageDetail, setthemePages, } from "../../store/slices/theme";
export function themeHandler(theme, dispatch) {
    if (theme === null || theme === void 0 ? void 0 : theme.preview_theme) {
        dispatch(setPreviewTheme(theme.preview_theme));
    }
    if (theme.theme_page_detail) {
        dispatch(setthemePageDetail(theme.theme_page_detail));
    }
    if (theme.theme_pages) {
        dispatch(setthemePages(theme.theme_pages));
    }
}
//# sourceMappingURL=theme.handler.js.map