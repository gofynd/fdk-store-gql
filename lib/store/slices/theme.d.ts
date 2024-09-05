import { CustomAction } from "../../types";
import { AddSectionEvent, DragSectionEvent, RemoveSection, ThemeSlice, UpdateSection } from "../../types/theme";
import { STORE_KEYS } from "../enums/keys";
import { Maybe, PageDetail, ThemeDetail } from "../../types/graphql";
export declare const fetchAppliedTheme: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchThemeById: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchPage: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const themeSlice: import("@reduxjs/toolkit").Slice<ThemeSlice, {
    dragSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<DragSectionEvent>): void;
    addSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<AddSectionEvent>): void;
    removeSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<RemoveSection>): void;
    updateSection(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<UpdateSection>): void;
    setTheme(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        type: string;
        payload: any;
    }): void;
    setGlobalConfig(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: {
        payload: any;
        type: string;
    }): void;
    setAppliedTheme(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<ThemeDetail>): void;
    setPreviewTheme(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<ThemeDetail>): void;
    setthemePageDetail(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<PageDetail>): void;
    setthemePages(state: import("immer/dist/internal").WritableDraft<ThemeSlice>, action: CustomAction<Array<Maybe<PageDetail>>>): void;
}, STORE_KEYS.THEME>;
export declare const themeReducer: import("redux").Reducer<ThemeSlice, import("redux").AnyAction>;
export declare const dragSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<DragSectionEvent, "theme/dragSection">, addSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<AddSectionEvent, "theme/addSection">, removeSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<RemoveSection, "theme/removeSection">, updateSection: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateSection, "theme/updateSection">, setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/setTheme">, setGlobalConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "theme/setGlobalConfig">, setAppliedTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<ThemeDetail, "theme/setAppliedTheme">, setPreviewTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<ThemeDetail, "theme/setPreviewTheme">, setthemePageDetail: import("@reduxjs/toolkit").ActionCreatorWithPayload<PageDetail, "theme/setthemePageDetail">, setthemePages: import("@reduxjs/toolkit").ActionCreatorWithPayload<Maybe<PageDetail>[], "theme/setthemePages">;
export default themeSlice;
