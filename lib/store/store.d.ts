declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    products: import("../types/products").ProductsSlice;
    product: import("../types/product").ProductSlice;
    cart: import("../types/cart").CartSlice;
    brands: import("../types/brands").BrandsSlice;
    address: import("../types/address").AddressSlice;
    content: import("../types/content").ContentSlice;
    theme: import("../types/theme").ThemeSlice;
    configuration: import("../types/configuration").ConfigurationSlice;
    logistic: import("../types/logistic").LogisticSlice;
    categories: import("../types/categories").CategoriesSlice;
    collection: import("../types/collection").CollectionsSlice;
    auth: import("../types/auth").AuthSlice;
    payment: {
        payment_options: any;
        aggregators_config: any;
    };
    share: {};
    order: {};
    custom: import("../types/custom").CustomSlice;
}>, import("redux").AnyAction>;
export declare function createStore(initialData: unknown): import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    products: import("../types/products").ProductsSlice;
    product: import("../types/product").ProductSlice;
    cart: import("../types/cart").CartSlice;
    brands: import("../types/brands").BrandsSlice;
    address: import("../types/address").AddressSlice;
    content: import("../types/content").ContentSlice;
    theme: import("../types/theme").ThemeSlice;
    configuration: import("../types/configuration").ConfigurationSlice;
    logistic: import("../types/logistic").LogisticSlice;
    categories: import("../types/categories").CategoriesSlice;
    collection: import("../types/collection").CollectionsSlice;
    auth: import("../types/auth").AuthSlice;
    payment: {
        payment_options: any;
        aggregators_config: any;
    };
    share: {};
    order: {};
    custom: import("../types/custom").CustomSlice;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    products: import("../types/products").ProductsSlice;
    product: import("../types/product").ProductSlice;
    cart: import("../types/cart").CartSlice;
    brands: import("../types/brands").BrandsSlice;
    address: import("../types/address").AddressSlice;
    content: import("../types/content").ContentSlice;
    theme: import("../types/theme").ThemeSlice;
    configuration: import("../types/configuration").ConfigurationSlice;
    logistic: import("../types/logistic").LogisticSlice;
    categories: import("../types/categories").CategoriesSlice;
    collection: import("../types/collection").CollectionsSlice;
    auth: import("../types/auth").AuthSlice;
    payment: {
        payment_options: any;
        aggregators_config: any;
    };
    share: {};
    order: {};
    custom: import("../types/custom").CustomSlice;
}>, import("redux").AnyAction, undefined>]>;
export type RootState = ReturnType<typeof rootReducer>;
export {};
