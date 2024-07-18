var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
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
export const fetchNavigation = createAsyncThunk("navigation", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAppSeo = createAsyncThunk("seo", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBlog = createAsyncThunk("blog", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchBlogs = createAsyncThunk("blogs", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchCustomPage = createAsyncThunk("page", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchFaqByCategory = createAsyncThunk("faqByCateogry", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getFaqCategoryBySlug = createAsyncThunk("getFaqCategoryBySlug", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getFaqCategories = createAsyncThunk("getFaqCategories", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const getFaqs = createAsyncThunk("getFaqs", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchTags = createAsyncThunk("tags", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchLegalData = createAsyncThunk("legal", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchScreenSaver = createAsyncThunk("screensaver", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchSupportInformation = createAsyncThunk("supportInformation", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchAnnouncement = createAsyncThunk("announcement", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchLandingPage = createAsyncThunk("landingPage", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
export const fetchDataLoaders = createAsyncThunk("dataLoaders", (params, { extra }) => __awaiter(void 0, void 0, void 0, function* () {
    return params;
}));
const contentSlice = createSlice({
    name: STORE_KEYS.CONTENT,
    initialState,
    reducers: {
        setnavigations(state, action) {
            state.navigation = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setseoConfiguration(state, action) {
            state.seo = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        },
        setblogs(state, action) {
            state.blogs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
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
    extraReducers: (builder) => {
        builder
            //navigation
            .addCase(fetchNavigation.pending, (state) => {
            state.navigation = {
                loading: true,
            };
        })
            .addCase(fetchNavigation.fulfilled, (state, action) => {
            state.navigation = Object.assign(Object.assign({}, action.payload), { loading: false, error: null });
        })
            .addCase(fetchNavigation.rejected, (state, action) => {
            state.navigation = Object.assign({}, { error: action.error, loading: false });
        })
            //seo
            .addCase(fetchAppSeo.pending, (state) => {
            state.seo = {
                loading: true,
            };
        })
            .addCase(fetchAppSeo.fulfilled, (state, action) => {
            state.seo = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAppSeo.rejected, (state, action) => {
            state.seo = Object.assign({}, { error: action.error, loading: false });
        })
            //blog item
            .addCase(fetchBlog.pending, (state) => {
            state.blog = {
                loading: true,
            };
        })
            .addCase(fetchBlog.fulfilled, (state, action) => {
            state.blog = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBlog.rejected, (state, action) => {
            state.blog = Object.assign({}, { error: action.error, loading: false });
        })
            //blog list
            .addCase(fetchBlogs.pending, (state) => {
            state.blogs = {
                loading: true,
            };
        })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.blogs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchBlogs.rejected, (state, action) => {
            state.blogs = Object.assign({}, { error: action.error, loading: false });
        })
            //custom page data
            .addCase(fetchCustomPage.pending, (state) => {
            state.custom_page = {
                loading: true,
            };
        })
            .addCase(fetchCustomPage.fulfilled, (state, action) => {
            state.custom_page = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchCustomPage.rejected, (state, action) => {
            state.custom_page = Object.assign({}, { error: action.error, loading: false });
        })
            //faq by category
            .addCase(fetchFaqByCategory.pending, (state) => {
            state.faq_data = {
                loading: true,
            };
        })
            .addCase(fetchFaqByCategory.fulfilled, (state, action) => {
            state.faq_data = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchFaqByCategory.rejected, (state, action) => {
            state.faq_data = Object.assign({}, { error: action.error, loading: false });
        })
            //getFaqs
            .addCase(getFaqs.pending, (state) => {
            state.faqs = {
                loading: true,
            };
        })
            .addCase(getFaqs.fulfilled, (state, action) => {
            state.faqs = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getFaqs.rejected, (state, action) => {
            state.faqs = Object.assign({}, { error: action.error, loading: false });
        })
            //getFaqCategoryBySlug
            .addCase(getFaqCategoryBySlug.pending, (state) => {
            state.faqCategory = {
                loading: true,
            };
        })
            .addCase(getFaqCategoryBySlug.fulfilled, (state, action) => {
            state.faqCategory = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getFaqCategoryBySlug.rejected, (state, action) => {
            state.faqCategory = Object.assign({}, { error: action.error, loading: false });
        })
            //getFaqCategories
            .addCase(getFaqCategories.pending, (state) => {
            state.faqCategories = {
                loading: true,
            };
        })
            .addCase(getFaqCategories.fulfilled, (state, action) => {
            state.faqCategories = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(getFaqCategories.rejected, (state, action) => {
            state.faqCategories = Object.assign({}, { error: action.error, loading: false });
        })
            //fpi tags
            .addCase(fetchTags.pending, (state) => {
            state.tags = {
                loading: true,
            };
        })
            .addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchTags.rejected, (state, action) => {
            state.tags = Object.assign({}, { error: action.error, loading: false });
        })
            //legal data
            .addCase(fetchLegalData.pending, (state) => {
            state.legal_data = {
                loading: true,
            };
        })
            .addCase(fetchLegalData.fulfilled, (state, action) => {
            state.legal_data = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchLegalData.rejected, (state, action) => {
            state.legal_data = Object.assign({}, { error: action.error, loading: false });
        })
            //screensaver
            .addCase(fetchScreenSaver.pending, (state) => {
            state.screen_saver = {
                loading: true,
            };
        })
            .addCase(fetchScreenSaver.fulfilled, (state, action) => {
            state.screen_saver = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchScreenSaver.rejected, (state, action) => {
            state.screen_saver = Object.assign({}, { error: action.error, loading: false });
        })
            //support information
            .addCase(fetchSupportInformation.pending, (state) => {
            state.support_information = {
                loading: true,
            };
        })
            .addCase(fetchSupportInformation.fulfilled, (state, action) => {
            state.support_information = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchSupportInformation.rejected, (state, action) => {
            state.support_information = Object.assign({}, { error: action.error, loading: false });
        })
            //announcement
            .addCase(fetchAnnouncement.pending, (state) => {
            state.announcement = {
                loading: true,
            };
        })
            .addCase(fetchAnnouncement.fulfilled, (state, action) => {
            state.announcement = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchAnnouncement.rejected, (state, action) => {
            state.announcement = Object.assign({}, { error: action.error, loading: false });
        })
            //landing page
            .addCase(fetchLandingPage.pending, (state) => {
            state.landing_page = {
                loading: true,
            };
        })
            .addCase(fetchLandingPage.fulfilled, (state, action) => {
            state.landing_page = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchLandingPage.rejected, (state, action) => {
            state.landing_page = Object.assign({}, { error: action.error, loading: false });
        })
            //data loaders
            .addCase(fetchDataLoaders.pending, (state) => {
            state.data_loaders = {
                loading: true
            };
        })
            .addCase(fetchDataLoaders.fulfilled, (state, action) => {
            state.data_loaders = Object.assign(Object.assign({}, action.payload), { error: null, loading: false });
        })
            .addCase(fetchDataLoaders.rejected, (state, action) => {
            state.data_loaders = Object.assign({}, { error: action.error, loading: false });
        });
    },
});
export const contentReducer = contentSlice.reducer;
export const { setnavigations, setseoConfiguration, setblogs, settags, setsupportInformation, setlandingPage, setannouncements, setcustomPage, setblog, setdataLoaders, setfaqsByCategory, setlegalInformation } = contentSlice.actions;
//# sourceMappingURL=content.js.map