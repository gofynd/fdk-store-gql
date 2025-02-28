import { dragSection, addSection, removeSection, updateSection, setTheme, setGlobalConfig, } from "../slices/theme";
export class ThemeModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    dragSection(params) {
        return this.dispatch(dragSection(params));
    }
    addSection(params = {}) {
        return this.dispatch(addSection(params));
    }
    removeSection(params = {}) {
        return this.dispatch(removeSection(params));
    }
    updateSection(params = {}) {
        return this.dispatch(updateSection(params));
    }
    setTheme(params) {
        return this.dispatch(setTheme(params));
    }
    setGlobalConfig(params) {
        return this.dispatch(setGlobalConfig(params));
    }
    appliedThemeGraphQLhandler(appliedTheme) {
        return this.dispatch();
    }
    handleThemeResponse(response) {
    }
}
//# sourceMappingURL=theme.js.map