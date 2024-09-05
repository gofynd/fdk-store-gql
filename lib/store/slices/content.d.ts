import { SerializedError } from "@reduxjs/toolkit";
import { ContentSlice } from "../../types/content";
import { Announcements, Blog, Blogs, DataLoaders, FaqCategories, FaQs, LandingPage, LeagalInformation, Maybe, Navigations, SeoSchema } from "../../types/graphql";
export declare const fetchNavigation: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAppSeo: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBlog: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBlogs: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCustomPage: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchFaqByCategory: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqCategoryBySlug: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqCategories: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getFaqs: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchTags: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchLegalData: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchScreenSaver: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSupportInformation: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchAnnouncement: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchLandingPage: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchDataLoaders: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    rejectValue: SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const contentReducer: import("redux").Reducer<ContentSlice, import("redux").AnyAction>;
export declare const setnavigations: import("@reduxjs/toolkit").ActionCreatorWithPayload<Navigations, "content/setnavigations">, setseoConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPayload<Maybe<SeoSchema>, "content/setseoConfiguration">, setblogs: import("@reduxjs/toolkit").ActionCreatorWithPayload<Blogs, "content/setblogs">, settags: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "content/settags">, setsupportInformation: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "content/setsupportInformation">, setlandingPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<LandingPage, "content/setlandingPage">, setannouncements: import("@reduxjs/toolkit").ActionCreatorWithPayload<Announcements, "content/setannouncements">, setcustomPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "content/setcustomPage">, setblog: import("@reduxjs/toolkit").ActionCreatorWithPayload<Blog, "content/setblog">, setdataLoaders: import("@reduxjs/toolkit").ActionCreatorWithPayload<DataLoaders, "content/setdataLoaders">, setfaqCategories: import("@reduxjs/toolkit").ActionCreatorWithPayload<FaqCategories, "content/setfaqCategories">, setfaqs: import("@reduxjs/toolkit").ActionCreatorWithPayload<FaQs, "content/setfaqs">, setfaqsByCategory: import("@reduxjs/toolkit").ActionCreatorWithPayload<FaQs, "content/setfaqsByCategory">, setlegalInformation: import("@reduxjs/toolkit").ActionCreatorWithPayload<LeagalInformation, "content/setlegalInformation">;
