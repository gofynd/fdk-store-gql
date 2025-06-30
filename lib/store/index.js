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
import { GraphQLModifierUtils } from './modules/graphqlModifications';
import { PaymentGatway } from "./utils/gateways";
import { createStore } from "./store";
import { queryResponseHandler } from "../graphql/query";
import { mutationResponseHandler } from "../graphql/mutations";
import { parse, print } from "graphql";
import { PaymentModule } from "./modules/payment";
import { COOKIE_KEYS } from "./enums/keys";
import { getCookie, isRunningOnClient, setCookie } from "../helpers/utils";
import { isDeeplyDifferent } from "./utils/util";
import { START_UPLOAD_QUERY, COMPLETE_UPLOAD_QUERY, } from "./queries/fileUploadQuery";
import { emitFPIEvent, FPI_EVENTS } from "../helpers/FPI-events";
const isClient = isRunningOnClient();
class ApplicationStore {
    constructor(initialData, authorizationHeader, domain) {
        this.PaymentGateways = PaymentGatway;
        this.serverCookies = {};
        this.start_upload_query = START_UPLOAD_QUERY;
        this.complete_upload_query = COMPLETE_UPLOAD_QUERY;
        this.gqlModifier = GraphQLModifierUtils();
        this.mutations = {
            apply: this.gqlModifier.apply,
            remove: this.gqlModifier.remove,
        };
        this.store = createStore(initialData);
        this.domain = domain;
        this.authorizationHeader = authorizationHeader;
        this.getters = {
            // Product Listing Getters
            PRODUCTS: (store) => store.products.product_lists,
            PRODUCT_LISTING_META: (store) => store.products.product_listing_meta,
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
            PRODUCT_PRICE_WITH_FULLFILLMENT_OPTION: (store) => store.product.product_price_with_fullfillment,
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
            COLLECTION_LISTING_META: (store) => store.collection.collection,
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
            BRAND: (store) => store.brand.brand,
            BRAND_LISTING_META: (store) => store.brand.brand,
            //Category Getters
            CATEGORY: (store) => store.category.category,
            CATEGORY_LISTING_META: (store) => store.category.category,
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
            SELLER_DETAILS: (store) => store.custom["sellerDetailsKey"],
            i18N_DETAILS: (store) => store.custom["i18nDetailsKey"],
            LOCATION_DETAILS: (store) => store.custom["locationDetailsKey"],
            // Custom Getters
            CUSTOM_VALUE: (store) => store.custom,
        };
        this.dispatch = this.store.dispatch;
        this.custom = new CustomModule(this.dispatch);
        this.theme = new ThemeModule(this.dispatch);
        this.payment = new PaymentModule(this.dispatch);
        this.observeStore = this.observeStore.bind(this);
        let i18nDetails = {};
        let locationDetails = {};
        if (isRunningOnClient()) {
            i18nDetails = getCookie(COOKIE_KEYS.I18N_DETAILS);
            locationDetails = getCookie(COOKIE_KEYS.LOCATION_DATA);
        }
        else {
            i18nDetails = this.serverCookies[COOKIE_KEYS.I18N_DETAILS];
            locationDetails = this.serverCookies[COOKIE_KEYS.LOCATION_DATA];
        }
        this.custom.setValue("i18nDetailsKey", i18nDetails);
        this.custom.setValue("locationDetailsKey", locationDetails);
    }
    executeFetch(query, variables) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.domain}/service/application/graphql/`, {
                method: "POST",
                headers: Object.assign({ "Content-Type": "application/json", Authorization: this.authorizationHeader }, (isClient
                    ? {
                        credentials: "include",
                    }
                    : {
                        cookie: this.getServerCookies(),
                    })),
                body: JSON.stringify({
                    query,
                    variables,
                }),
            });
            const headers = response.headers;
            const sellerDetails = headers.get("x-seller-details");
            let result;
            try {
                result = yield response.json();
            }
            catch (err) {
                throw new Error("Invalid response from Server");
            }
            return { result, sellerDetails };
        });
    }
    getServerCookies() {
        try {
            return Object.entries(this.serverCookies)
                .map(([key, value]) => this.encodeCookie(key, value))
                .join("; ");
        }
        catch (error) {
            return "";
        }
    }
    encodeCookie(key, value) {
        const encodedValue = typeof value === "object" ? JSON.stringify(value) : value;
        return `${encodeURIComponent(key)}=${encodeURIComponent(encodedValue)}; Secure; SameSite=None;`;
    }
    setServerCookies(cookies = {}) {
        this.serverCookies = cookies;
    }
    setLocationDetails(cookieValue) {
        let locationDataCookie = getCookie(COOKIE_KEYS.LOCATION_DATA);
        if (typeof locationDataCookie === "string") {
            try {
                locationDataCookie = JSON.parse(locationDataCookie);
            }
            catch (e) {
                locationDataCookie = {};
            }
        }
        const locationData = Object.assign(Object.assign({}, (locationDataCookie || {})), cookieValue);
        setCookie(COOKIE_KEYS.LOCATION_DATA, locationData, 1);
        setTimeout(() => {
            emitFPIEvent(FPI_EVENTS.LOCATION_DETAILS, {}, locationData, {});
            window.fpi.custom.setValue("locationDetailsKey", locationData);
        }, 0);
    }
    setI18nDetails(cookieValue) {
        try {
            let currentLocationData = getCookie(COOKIE_KEYS.LOCATION_DATA);
            if (typeof currentLocationData !== "object" ||
                currentLocationData === null) {
                currentLocationData = {};
            }
            if (typeof cookieValue === "string") {
                try {
                    cookieValue = JSON.parse(cookieValue);
                }
                catch (e) {
                    console.error("Error parsing cookieValue:", e);
                    cookieValue = {};
                }
            }
            if (cookieValue.countryCode == currentLocationData.country_iso_code) {
                currentLocationData.country_iso_code =
                    cookieValue.countryCode || currentLocationData.country_iso_code;
                currentLocationData.country =
                    cookieValue.countryName || currentLocationData.country;
            }
            else {
                currentLocationData = {
                    country_iso_code: cookieValue.countryCode || currentLocationData.country_iso_code,
                    country: cookieValue.countryName || currentLocationData.country,
                };
            }
            setCookie(COOKIE_KEYS.LOCATION_DATA, currentLocationData, 1);
            setCookie(COOKIE_KEYS.I18N_DETAILS, cookieValue, 1);
            this.custom.setValue("i18nDetailsKey", cookieValue);
            this.custom.setValue("locationDetailsKey", currentLocationData);
        }
        catch (error) {
            console.error("Error while setting location data in cookie");
        }
    }
    observeStore(getter, onChange) {
        var _a;
        if (typeof getter !== "function") {
            throw new Error("The getter must be a function that returns the current state.");
        }
        if (typeof onChange !== "function") {
            throw new Error("The onChange must be a function to handle state changes.");
        }
        try {
            let previousState = null;
            // Try to get the initial state with the getter and handle if getter fails.
            let currentState;
            try {
                currentState = getter((_a = this.store.getState()) !== null && _a !== void 0 ? _a : {});
            }
            catch (error) {
                console.error("Failed to retrieve initial state with provided getter:", error);
                throw new Error("Error retrieving initial state: " + error.message);
            }
            if (currentState) {
                previousState = JSON.parse(JSON.stringify(currentState)); // Establish initial previousState to compare future changes.
                try {
                    onChange(currentState); // Notify about the initial state.
                }
                catch (error) {
                    throw new Error("Error invoking onChange with initial state: " + error.message);
                }
            }
            const handleChange = () => {
                var _a;
                let newState;
                try {
                    newState = getter((_a = this.store.getState()) !== null && _a !== void 0 ? _a : {});
                }
                catch (error) {
                    console.error("Failed to retrieve new state with provided getter during change:", error);
                    return;
                }
                if (isDeeplyDifferent(newState, previousState)) {
                    try {
                        onChange(newState);
                    }
                    catch (error) {
                        console.error("Failed to invoke onChange with new state:", error);
                        // Handling the error more softly, not interrupting the next updates
                    }
                    previousState = JSON.parse(JSON.stringify(newState)); // Deep copy newState to avoid mutations affecting comparison.
                }
            };
            this.store.subscribe(handleChange);
        }
        catch (err) {
            console.error("Error observing store changes:", err);
        }
    }
    executeGQL(query, params, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const originalAst = parse(query);
                let mergedAst = originalAst;
                let shortCircuitedResponse = null;
                const operationNames = this.gqlModifier.getOperationNamesFromAst(originalAst);
                for (const name of operationNames) {
                    const modifiers = this.gqlModifier.uiFunctions[name];
                    if (modifiers === null || modifiers === void 0 ? void 0 : modifiers.length) {
                        for (const modify of modifiers) {
                            if (typeof modify === 'function') {
                                const result = yield modify(params);
                                if (result === null || result === void 0 ? void 0 : result.response) {
                                    // short-circuit response: stop processing and use provided response
                                    shortCircuitedResponse = {
                                        result: result.response,
                                        sellerDetails: result.sellerDetails || null,
                                    };
                                    break;
                                }
                                if (result === null || result === void 0 ? void 0 : result.requestParam) {
                                    params = Object.assign(Object.assign({}, params), result.requestParam);
                                }
                                if (result === null || result === void 0 ? void 0 : result.query) {
                                    const resultAst = parse(result.query);
                                    mergedAst = this.gqlModifier.mergeQueries(mergedAst, resultAst);
                                }
                            }
                        }
                        // if response is short-circuited, stop all processing
                        if (shortCircuitedResponse)
                            break;
                    }
                }
                let responseData, sellerDetails;
                if (shortCircuitedResponse) {
                    ({ result: responseData, sellerDetails } = shortCircuitedResponse);
                }
                else {
                    const mergedQuery = print(mergedAst);
                    ({ result: responseData, sellerDetails } = yield this.executeFetch(mergedQuery, params));
                }
                this.custom.setValue("sellerDetailsKey", sellerDetails);
                if (!(options === null || options === void 0 ? void 0 : options.skipStoreUpdate)) {
                    const operation = (_b = (_a = originalAst.definitions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.operation;
                    if (operation === "mutation") {
                        mutationResponseHandler(responseData, this.dispatch, params, this.store.getState(), options);
                    }
                    else {
                        queryResponseHandler(responseData, this.dispatch, params, this.store.getState(), options);
                    }
                }
                return responseData;
            }
            catch (error) {
                return {
                    data: null,
                    errors: [
                        {
                            code: "Error",
                            message: error.message || error,
                        },
                    ],
                };
            }
        });
    }
    uploadFile(file, NAMESPACE = "misc", START_UPLOAD_QUERY = this.start_upload_query, COMPLETE_UPLOAD_QUERY = this.complete_upload_query) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let startPayload = {
                    namespace: NAMESPACE || "misc",
                    startUploadReqInput: {
                        file_name: file === null || file === void 0 ? void 0 : file.name,
                        content_type: file === null || file === void 0 ? void 0 : file.type,
                        size: file === null || file === void 0 ? void 0 : file.size,
                    },
                };
                const startResponse = yield this.executeGQL(START_UPLOAD_QUERY, startPayload);
                const { upload, namespace, file_name, file_path, content_type, method, operation, size, tags, } = (_a = startResponse === null || startResponse === void 0 ? void 0 : startResponse.data) === null || _a === void 0 ? void 0 : _a.startUpload;
                const uploadResponse = yield fetch(upload === null || upload === void 0 ? void 0 : upload.url, {
                    method: "PUT",
                    headers: { "Content-Type": file === null || file === void 0 ? void 0 : file.type },
                    body: file,
                });
                if (!uploadResponse.ok)
                    throw new Error("File upload failed");
                const completePayload = {
                    namespace,
                    completeUploadReqInput: {
                        file_name,
                        file_path,
                        content_type,
                        method,
                        namespace,
                        operation,
                        size,
                        tags,
                        upload,
                    },
                };
                return yield this.executeGQL(COMPLETE_UPLOAD_QUERY, completePayload);
            }
            catch (error) {
                console.error("File upload failed:", error);
                throw error;
            }
        });
    }
}
export default ApplicationStore;
//# sourceMappingURL=index.js.map