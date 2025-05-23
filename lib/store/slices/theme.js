import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    theme: {},
    appliedTheme: {},
    page: {},
    themePages: {},
    sectionKeys: {},
    allPages: {},
};
const themeSlice = createSlice({
    name: STORE_KEYS.THEME,
    initialState,
    reducers: {
        dragSection(state, action) {
            const { index, newIndex } = action.payload;
            if ((index || index === 0) &&
                (newIndex || newIndex === 0) &&
                state.page &&
                state.page.sections) {
                const [movedSection] = state.page.sections.splice(index, 1);
                state.page.sections.splice(newIndex, 0, movedSection);
            }
        },
        addSection(state, action) {
            var _a;
            let data = action.payload;
            state.sectionKeys[data.name]
                ? state.sectionKeys[data.name]++
                : (state.sectionKeys[data.name] = 1);
            data.counter = state.sectionKeys[data.name];
            state.page.sections = [...((_a = state === null || state === void 0 ? void 0 : state.page.sections) !== null && _a !== void 0 ? _a : []), data];
        },
        removeSection(state, action) {
            var _a, _b;
            let data = action.payload;
            let currentSections = [...((_b = (_a = state.page) === null || _a === void 0 ? void 0 : _a.sections) !== null && _b !== void 0 ? _b : [])];
            const index = currentSections.findIndex((section) => (section.id ? section.id : section._id) === data.section._id);
            if (index !== -1) {
                currentSections.splice(index, 1);
                state.page.sections = [...currentSections];
            }
        },
        updateSection(state, action) {
            let data = action.payload;
            if (state.page.sections) {
                const sectionIndex = state.page.sections.findIndex((section) => (section.id ? section.id : section._id) === data.section._id);
                if (sectionIndex !== -1) {
                    state.page.sections[sectionIndex] = Object.assign(Object.assign({}, state.page.sections[sectionIndex]), data.section);
                }
            }
        },
        setTheme(state, action) {
            state.theme = {};
            state.theme = action.payload;
            state.theme.error = null;
            state.theme.loading = false;
        },
        setGlobalConfig(state, action) {
            state.theme.config = action.payload;
        },
        // Reducers Here
        setAppliedTheme(state, action) {
            state.appliedTheme = action.payload;
        },
        setPreviewTheme(state, action) {
            state.theme = action.payload;
        },
        setthemePageDetail(state, action) {
            var _a, _b;
            state.page = action.payload;
            if ((_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.sections) === null || _b === void 0 ? void 0 : _b.length) {
                state.page.sections = state.page.sections.map((section) => {
                    const updatedSection = Object.assign(Object.assign({}, section), { __source: section.source });
                    return updatedSection;
                });
            }
            state.allPages[`${action.payload.value}`] = action.payload;
        },
        setthemePages(state, action) {
            state.themePages = action.payload;
        },
    },
});
export const themeReducer = themeSlice.reducer;
export const { dragSection, addSection, removeSection, updateSection, setTheme, setGlobalConfig, setAppliedTheme, setPreviewTheme, setthemePageDetail, setthemePages, } = themeSlice.actions;
export default themeSlice;
//# sourceMappingURL=theme.js.map