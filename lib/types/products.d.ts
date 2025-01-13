import { CommonAsyncLoadingTypes } from ".";
export type FetchProductsOptions = {
    f: any;
    q: any;
    pageId: any;
    pageSize: number;
    sortOn: string;
    pageNo: any;
    filters: any;
};
export type FetchProductsResponse = {
    data: any;
    options: FetchProductsOptions;
};
export type ProductLists = Partial<any & CommonAsyncLoadingTypes>;
export type ProductDetail = Partial<any & CommonAsyncLoadingTypes>;
export type CategoryDetail = Partial<any & CommonAsyncLoadingTypes>;
export type BrandDetail = Partial<any & CommonAsyncLoadingTypes>;
export type CollectionDetail = Partial<any & CommonAsyncLoadingTypes>;
export type SearchResults = Partial<any & CommonAsyncLoadingTypes>;
export type ProductsSlice = {
    product_lists: ProductLists;
    product_listing_meta: ProductDetail;
    search_results: SearchResults;
    product_search_results: ProductLists;
};
