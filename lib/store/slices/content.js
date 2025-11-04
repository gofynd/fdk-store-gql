import { createSlice } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../enums/keys";
const initialState = {
    navigation: {},
    seo: {},
    blog: {},
    blogs: {},
    custom_page: {},
    faq_data: {},
    faqs: {},
    faqCategory: {},
    faqCategories: {},
    tags: {},
    legal_data: {},
    screen_saver: {},
    support_information: {},
    announcement: {},
    landing_page: {},
    data_loaders: {},
};
const contentSlice = createSlice({
    name: STORE_KEYS.CONTENT,
    initialState,
    reducers: {
        setnavigations(state, action) {
            state.navigation = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setseoConfiguration(state, action) {
            state.seo = {
                seo: action.payload,
                error: null,
                loading: false,
            };
        },
        setblogs(state, action) {
            state.blogs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setfaqCategories(state, action) {
            state.faqCategories = action.payload;
        },
        setfaqs(state, action) {
            state.faqs = action.payload;
        },
        setblog(state, action) {
            state.blogs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        settags(state, action) {
            state.tags = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setsupportInformation(state, action) {
            state.support_information = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setannouncements(state, action) {
            state.support_information = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setlandingPage(state, action) {
            state.landing_page = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setdataLoaders(state, action) {
            state.data_loaders = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setfaqsByCategory(state, action) {
            state.faqs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setlegalInformation(state, action) {
            state.legal_data = action.payload;
        },
        setcustomPage(state, action) {
            state.custom_page = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
    },
});
export const contentReducer = contentSlice.reducer;
export const { setnavigations, setseoConfiguration, setblogs, settags, setsupportInformation, setlandingPage, setannouncements, setcustomPage, setblog, setdataLoaders, setfaqCategories, setfaqs, setfaqsByCategory, setlegalInformation, } = contentSlice.actions;
//# sourceMappingURL=content.js.map