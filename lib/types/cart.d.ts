import { CommonAsyncLoadingTypes } from ".";
type Mode = 'self' | 'others';
export type CheckoutMode = {
    mode: Mode;
};
export type CartItems = Partial<any & CommonAsyncLoadingTypes>;
export type BuyNowCartItems = Partial<any & CommonAsyncLoadingTypes>;
export type Shipments = Partial<any & CommonAsyncLoadingTypes>;
export type LadderOffers = Partial<any & CommonAsyncLoadingTypes>;
export type PromotionOffers = Partial<any & CommonAsyncLoadingTypes>;
export type Coupons = Partial<any & CommonAsyncLoadingTypes>;
export type CartShareLink = Partial<any & CommonAsyncLoadingTypes>;
export type CheckoutModeSlice = Partial<CheckoutMode & CommonAsyncLoadingTypes>;
export type CartItemsCount = Partial<any & CommonAsyncLoadingTypes>;
export type CartSlice = {
    cart_items: CartItems;
    buy_now_cart_items: BuyNowCartItems;
    checkout_mode: CheckoutModeSlice;
    cart_items_count: CartItemsCount;
    shipments: Shipments;
    ladder_offers: LadderOffers;
    promotion_offers: PromotionOffers;
    coupons: Coupons;
    cart_share_link: CartShareLink;
};
export type AddToCartParams = {
    items: any[];
} & Omit<any, 'body'>;
export type UpdateCartItemsParams = {
    id?: string;
    items: any[];
};
export type UpdateCheckoutModeParams = {
    checkout_mode: Mode;
} & Omit<any, 'body'>;
export type ApplyRewardPointsParams = {
    points: boolean;
} & Omit<any, 'body'>;
export {};
