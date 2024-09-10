import { CommonAsyncLoadingTypes } from ".";
export type ProductDetails = Partial<any & CommonAsyncLoadingTypes>;
export type ProductVariants = Partial<any & CommonAsyncLoadingTypes>;
export type ProductMeta = Partial<any & CommonAsyncLoadingTypes>;
export type BulkPrice = Partial<any & CommonAsyncLoadingTypes>;
export type SimilarCompareProducts = Partial<any & CommonAsyncLoadingTypes>;
export type FrequentlyComparedProducts = Partial<any & CommonAsyncLoadingTypes>;
export type ProductPriceBySlug = Partial<any & CommonAsyncLoadingTypes>;
export type ProductSellerBySlug = Partial<any & CommonAsyncLoadingTypes>;
export type FollowByIdParamSlug = Partial<any & CommonAsyncLoadingTypes>;
export type FollowerCountByIdSlug = Partial<any & CommonAsyncLoadingTypes>;
export type FollowedList = Partial<any & CommonAsyncLoadingTypes>;
export type FollowIdsResponseSlug = Partial<any & CommonAsyncLoadingTypes>;
export type ProductSlice = {
    product_details: ProductDetails;
    product_variants: ProductVariants;
    product_meta: ProductMeta;
    bulk_price: BulkPrice;
    similar_compare_products: SimilarCompareProducts;
    frequently_compared_products: FrequentlyComparedProducts;
    product_price_by_slug: ProductPriceBySlug;
    product_seller_by_slug: ProductSellerBySlug;
    follow_by_id: FollowByIdParamSlug;
    follower_count_by_id: FollowerCountByIdSlug;
    followed_listing: FollowedList;
    fetch_follow_ids: FollowIdsResponseSlug;
    unfollow_by_id: FollowByIdParamSlug;
    followed_products: any;
};
