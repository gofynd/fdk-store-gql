import { CommonAsyncLoadingTypes } from ".";
export type Theme = Partial<any & CommonAsyncLoadingTypes>;
export type Page = Partial<any & CommonAsyncLoadingTypes>;
export type ThemeSlice = {
    theme: Theme;
    sectionKeys: any;
    page: Page;
};
export type DragSectionEvent = {
    index: number;
    newIndex: number;
};
export type AddSectionEvent = {
    name: string;
    counter: number;
};
export type RemoveSection = {
    removedIndex: number;
};
export type UpdateSection = {
    section: object;
    index: number;
};
