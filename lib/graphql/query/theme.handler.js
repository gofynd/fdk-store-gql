import { setAppliedTheme, setPreviewTheme, setthemePageDetail, setthemePages } from "../../store/slices/theme";
export function themeHandler(theme, dispatch) {
    if (theme === null || theme === void 0 ? void 0 : theme.appliedTheme) {
        dispatch(setAppliedTheme(theme.appliedTheme));
    }
    if (theme === null || theme === void 0 ? void 0 : theme.previewTheme) {
        dispatch(setPreviewTheme(theme.previewTheme));
    }
    if (theme.themePageDetail) {
        dispatch(setthemePageDetail(theme.themePageDetail));
    }
    if (theme.themePages) {
        dispatch(setthemePages(theme.themePages));
    }
}
//# sourceMappingURL=theme.handler.js.map