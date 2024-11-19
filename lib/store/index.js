var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
import { PaymentGatway } from "./utils/gateways";
import { createStore } from "./store";
import { queryResponseHandler } from "../graphql/query";
import { mutationResponseHandler } from "../graphql/mutations";
import { parse } from "graphql";
import { PaymentModule } from "./modules/payment";
import { COOKIE_KEYS } from "./enums/keys";
import { getCookie, setCookie } from "../helpers/utils";
const sellerDetailsKey = Symbol('sellerDetails');
class ApplicationStore {
    constructor(initialData, authorizationHeader, domain) {
        this.PaymentGateways = PaymentGatway;
        this.store = createStore(initialData);
        this.domain = domain;
        this.authorizationHeader = authorizationHeader;
        this.getters = {
            // Product Listing Getters
            PRODUCTS: (store) => store.products.product_lists,
            PRODUCT_LISTING_META: (store) => store.products.product_listing_meta,
            CATEGORY_LISTING_META: (store) => store.products.category_listing_meta,
            COLLECTION_LISTING_META: (store) => store.products.collection_listing_meta,
            BRAND_LISTING_META: (store) => store.products.brand_listing_meta,
            PRODUCT_SEARCH_RESULTS: (store) => store.products.product_search_results,
            SEARCH_RESULTS: (store) => store.products.search_results,
            // Product Description Getters
            PRODUCT: (store) => store.product,
            PRODUCT_DETAILS: (store) => store.product.product_details,
            PRODUCT_VARIANTS: (store) => store.product.product_variants,
            PRODUCT_META: (store) => store.product.product_meta,
            BULK_PRICE: (store) => store.product.bulk_price,
            SIMILAR_COMPARE_PRODUCTS: (store) => store.product.similar_compare_products,
            FREQUENTLY_COMPARED_PRODUCTS: (store) => store.product.frequently_compared_products,
            PRODUCT_PRICE_BY_SLUG: (store) => store.product.product_price_by_slug,
            PRODUCT_SELLER_BY_SLUG: (store) => store.product.product_seller_by_slug,
            FOLLOW_BY_ID: (store) => store.product.follow_by_id,
            FOLLOWER_COUNT_BY_ID: (store) => store.product.follower_count_by_id,
            FOLLOWED_LIST: (store) => store.product.followed_listing,
            FOLLOW_IDS: (store) => store.product.fetch_follow_ids,
            UNFOLLOW_BY_IDS: (store) => store.product.unfollow_by_id,
            FOLLOWED_PRODUCTS: (store) => store.product.followed_products,
            // Cart Getters
            CART: (store) => store.cart,
            CART_ITEMS: (store) => store.cart.cart_items,
            BUY_NOW_CART_ITEMS: (store) => store.cart.buy_now_cart_items,
            CHECKOUT_MODE: (store) => store.cart.checkout_mode,
            CART_ITEMS_COUNT: (store) => store.cart.cart_items_count,
            SHIPMENTS: (store) => store.cart.shipments,
            LADDER_OFFERS: (store) => store.cart.ladder_offers,
            PROMOTION_OFFERS: (store) => store.cart.promotion_offers,
            COUPONS: (store) => store.cart.coupons,
            CART_SHARE_LINK: (store) => store.cart.cart_share_link,
            // Address Getters
            ADDRESS: (store) => store.address.address,
            ADDRESS_ITEM: (store) => store.address.address_item,
            // categories Getters
            CATEGORIES: (store) => store.categories.categories,
            // Collection Getters
            COLLECTION: (store) => store.collection,
            COLLECTIONS: (store) => store.collection.collections,
            COLLECTION_LIST: (store) => store.collection.collection,
            COLLECTION_ITEM: (store) => store.collection.item,
            // Theme Getters
            THEME: (store) => store.theme.theme,
            PAGE: (store) => store.theme.page,
            ALL_PAGES: (store) => store.theme.allPages,
            // Logistic Getters
            LOGISTIC: (store) => store.logistic,
            COUNTRIES: (store) => store.logistic.countries,
            PRODUCT_TAT: (store) => store.logistic.product_tat,
            PINCODE_DETAILS: (store) => store.logistic.pincode_details,
            // Brands Getters
            BRANDS: (store) => store.brands.brands,
            BRAND: (store) => store.brands.brand,
            // Configuration Getters
            CONFIGURATION: (store) => store.configuration,
            APPLICATION: (store) => store.configuration.application,
            CONTACT_INFO: (store) => store.configuration.contact_info,
            APP_FEATURES: (store) => store.configuration.app_features,
            INTEGRATION_TOKENS: (store) => store.configuration.integration_tokens,
            DEPLOYMENT_STORES: (store) => store.configuration.deployment_stores,
            STAFF: (store) => store.configuration.staff,
            STORE_DETAILS: (store) => store.configuration.store_details,
            CURRENCIES: (store) => store.configuration.currencies,
            // Content Getters
            CONTENT: (store) => store.content,
            NAVIGATION: (store) => store.content.navigation,
            SEO: (store) => store.content.seo,
            BLOG: (store) => store.content.blog,
            BLOGS: (store) => store.content.blogs,
            CUSTOM_PAGE: (store) => store.content.custom_page,
            FAQ: (store) => store.content.faq_data,
            FAQS: (store) => store.content.faqs,
            FAQ_CATEGORY: (store) => store.content.faqCategory,
            FAQ_CATEGORIES: (store) => store.content.faqCategories,
            TAGS: (store) => store.content.tags,
            LEGAL_DATA: (store) => store.content.legal_data,
            SCREEN_SAVER: (store) => store.content.screen_saver,
            SUPPORT_INFORMATION: (store) => store.content.support_information,
            ANNOUNCEMENT: (store) => store.content.announcement,
            LANDING_PAGE: (store) => store.content.landing_page,
            DATA_LOADERS: (store) => store.content.data_loaders,
            // Auth Getters
            LOGGED_IN: (store) => store.auth.logged_in,
            USER_FETCHED: (store) => store.auth.user_fetched,
            USER_DATA: (store) => store.auth.user_data,
            PLATFORM_DATA: (store) => store.auth.platform_data,
            // Payment Getters
            PAYMENT_OPTIONS: (store) => store.payment.payment_options,
            AGGREGATORS_CONFIG: (store) => store.payment.aggregators_config,
            // SELLER DETAILS
            SELLER_DETAILS: (store) => store.custom[sellerDetailsKey],
            // Custom Getters
            CUSTOM_VALUE: (store) => store.custom,
        };
        this.dispatch = this.store.dispatch;
        this.custom = new CustomModule(this.dispatch);
        this.theme = new ThemeModule(this.dispatch);
        this.payment = new PaymentModule(this.dispatch);
        this.observeStore = this.observeStore.bind(this);
    }
    executeFetch(query, variables) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.domain}/service/application/graphql/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.authorizationHeader,
                    'credentials': 'include',
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
            });
            const headers = response.headers;
            const sellerDetails = headers.get('x-seller-details');
            if (!response.ok) {
                throw new Error(`GraphQL request failed with status ${response.status}`);
            }
            const result = yield response.json();
            return { result, sellerDetails };
        });
    }
    setI18nDetails(currencyCode, countryCode, isdCode, countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cookieValue = JSON.stringify({
                    currency: { code: currencyCode },
                    country: { iso_code: countryCode, isd_code: isdCode }
                });
                const currentLocationData = getCookie(COOKIE_KEYS.LOCATION_DATA);
                if (currentLocationData) {
                    currentLocationData.country_iso_code = countryCode || currentLocationData.country_iso_code;
                    currentLocationData.country = countryName || currentLocationData.country;
                    setCookie(COOKIE_KEYS.LOCATION_DATA, currentLocationData, 1);
                }
                setCookie(COOKIE_KEYS.I18N_DETAILS, cookieValue, 1);
            }
            catch (error) {
                console.error('Error while setting location data in cookie');
            }
        });
    }
    observeStore(getterKey, onChange) {
        let previousState;
        const handleChange = () => {
            var _a, _b, _c;
            let currentState = ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.store) === null || _a === void 0 ? void 0 : _a.getState) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : {})[getterKey];
            if (currentState !== previousState) {
                previousState = currentState;
                onChange(currentState);
            }
        };
        let unsubscribe = this.store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    }
    executeGQL(query, params, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { result: responseData, sellerDetails } = yield this.executeFetch(query, params);
                this.custom.setValue(sellerDetailsKey, sellerDetails);
                if (!(options === null || options === void 0 ? void 0 : options.skipStoreUpdate)) {
                    if (((_b = (_a = parse(query).definitions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.operation) === 'mutation') {
                        mutationResponseHandler(responseData.data, this.dispatch, params);
                    }
                    else {
                        queryResponseHandler(responseData.data, this.dispatch, params);
                    }
                }
                return responseData;
            }
            catch (error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: 'Error',
                            message: error.message || error,
                        },
                    ],
                };
            }
        });
    }
}
export default ApplicationStore;
//# sourceMappingURL=index.js.map