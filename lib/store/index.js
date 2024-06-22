var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { STORE_KEYS } from "./enums/keys";
import { collectionReducer, fetchCollection, fetchCollectionItem, } from "./slices/collection";
import { checkoutPayment, confirmPayment, confirmPaymentAddress, customerCreditSummary, customerOnboard, fetchAggregatorsConfig, fetchPaymentOptions, getActiveCardAggregator, getEpaylaterBannerDetails, paymentReducer, redirectToAggregator, verifyCustomerForPayment, } from "./slices/payment";
import { fetchAppliedTheme, fetchPage, fetchThemeById, themeReducer, } from "./slices/theme";
import { createShortLink, getUrlQRCode, shareReducer } from "./slices/share";
import { fetchBrandListingMeta, fetchCategoryListingMeta, fetchCollectionListingMeta, fetchProductListingMeta, fetchProductSuggestions, fetchProducts, fetchSuggestions, plpReducer, } from "./slices/products";
import { fetchBulkPrice, fetchFollowIds, fetchFollowedListing, fetchFollowerCountById, fetchFrequentlyComparedProducts, fetchProductDetails, fetchProductPriceBySlug, fetchProductSellerBySlug, fetchProductVariants, fetchSimilarCompareProduct, followById, getProductBundlesBySlug, pdpReducer, unfollowById, } from "./slices/product";
import { addToCart, addToCartBuyNow, applyCoupon, cartReducer, checkoutCart, fetchBuyNowCartItems, fetchCartItems, fetchCartShareLink, fetchCoupons, fetchLadderOffers, fetchPromotionOffers, fetchShipments, getCartItemsCount, removeCartItem, removeCoupon, selectAddress, selectPaymentMode, updateCartItems, updateCartMeta, updateCheckoutMode, updateRewardPoints, } from "./slices/cart";
import { brandsReducer, fetchBrand, fetchBrands } from "./slices/brands";
import { addAddress, addressReducer, deleteAddress, fetchAddress, fetchAddressById, updateAddress, } from "./slices/address";
import { contentReducer, fetchAnnouncement, fetchAppSeo, fetchBlog, fetchBlogs, fetchCustomPage, fetchDataLoaders, fetchFaqByCategory, fetchLandingPage, fetchLegalData, fetchNavigation, fetchSupportInformation, fetchTags, getFaqCategories, getFaqCategoryBySlug, getFaqs, } from "./slices/content";
import { fetchAllCountries, fetchPincodeDetails, getTatProduct, logisticsReducer, } from "./slices/logistic";
import { configurationReducer, fetchAppCurrencies, fetchAppFeatures, fetchAppIntegrationTokens, fetchApplication, fetchContactInfo, fetchDeploymentStores, fetchStaff, fetchStoreById, } from "./slices/configuration";
import { addEmail, addMobileNumber, authReducer, deleteEmail, deleteMobileNumber, deleteUser, facebookLogin, fetchPlatformData, fetchUserData, forgotPassword, getListOfActiveSessions, googleLogin, hasPassword, loginWithAppleIOS, resetPasswordWithEmail, resetPasswordWithMobile, sendEmailVerificationLink, sendOtp, sendOtpEmail, sendOtpMobile, signInUserWithOtp, signInUserWithPassword, signOutUser, signUpUser, updateProfile, verifyEmailOtp, verifyMobileOtp, } from "./slices/auth";
import { categoriesReducer, fetchCategories } from "./slices/categories";
import { getCustomerDetailsByShipmentId, getInvoiceByShipmentId, getOrderById, getOrders, getPosOrderById, getShipmentBagReasons, getShipmentById, getShipmentReasons, orderReducer, sendOtpToShipmentCustomer, trackShipment, updateShipmentStatus, verifyOtpShipmentCustomer, } from "./slices/order";
import { customReducer } from "./slices/custom";
import { gql } from "@apollo/client";
import { CustomModule } from "./modules/custom";
import { ThemeModule } from "./modules/theme";
import { PaymentGatway } from "./utils/gateways";
class ApplicationStore {
    constructor(initialData, gqClient) {
        this.gqClient = gqClient;
        this.PaymentGateways = PaymentGatway;
        const rootReducer = combineReducers({
            [STORE_KEYS.PRODUCTS]: plpReducer,
            [STORE_KEYS.PRODUCT_DETAILS]: pdpReducer,
            [STORE_KEYS.CART]: cartReducer,
            [STORE_KEYS.BRANDS]: brandsReducer,
            [STORE_KEYS.ADDRESS]: addressReducer,
            [STORE_KEYS.CONTENT]: contentReducer,
            [STORE_KEYS.THEME]: themeReducer,
            [STORE_KEYS.CONFIGURATION]: configurationReducer,
            [STORE_KEYS.LOGISTIC]: logisticsReducer,
            [STORE_KEYS.CATEGORIES]: categoriesReducer,
            [STORE_KEYS.COLLECTION]: collectionReducer,
            [STORE_KEYS.AUTH]: authReducer,
            [STORE_KEYS.PAYMENT]: paymentReducer,
            [STORE_KEYS.SHARE]: shareReducer,
            [STORE_KEYS.ORDER]: orderReducer,
            [STORE_KEYS.CUSTOM]: customReducer,
        });
        this.store = configureStore({
            reducer: rootReducer,
            middleware: (defaultMiddleware) => {
                return defaultMiddleware({
                    thunk: {
                        extraArgument: {},
                    },
                });
            },
            preloadedState: initialData ? initialData : {},
        });
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
            COLLECTION_LIST: (store) => store.collection.collection,
            COLLECTION_ITEM: (store) => store.collection.item,
            // Theme Getters
            THEME: (store) => store.theme.theme,
            PAGE: (store) => { var _a; return (_a = store.theme.page) === null || _a === void 0 ? void 0 : _a.themePageDetail; },
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
            // Custom Getters
            CUSTOM_VALUE: (store) => store.custom,
        };
        this.dispatch = this.store.dispatch;
        this.custom = new CustomModule(this.dispatch);
        this.theme = new ThemeModule(this.dispatch);
        this.observeStore = this.observeStore.bind(this);
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
    executeGraphQL(query, slug, params) {
        return __awaiter(this, void 0, void 0, function* () {
            var finalQuery;
            try {
                if (query.includes("mutation")) {
                    finalQuery = yield this.gqClient.mutate({
                        mutation: gql `
            ${query}
          `,
                        variables: { slug },
                    });
                }
                else {
                    finalQuery = yield this.gqClient.query({
                        query: gql `
            ${query}
          `,
                        variables: { slug },
                    });
                }
                const responseData = finalQuery.data;
                if (!(params === null || params === void 0 ? void 0 : params.skipStoreUpdate)) {
                    console.log(`GQL Response : `, responseData);
                    const keys = this.extractJsonKeys(responseData, 1);
                    const queryResponse = finalQuery.data;
                    keys === null || keys === void 0 ? void 0 : keys.forEach((element) => {
                        if (element != null) {
                            console.log(`Searching for ${element} store`);
                            switch (element) {
                                //Address
                                case "addresses":
                                    this.dispatch(fetchAddress(queryResponse.addresses));
                                    return;
                                case "address":
                                    this.dispatch(fetchAddressById(queryResponse.address));
                                    return;
                                case "removeAddress":
                                    this.dispatch(deleteAddress(queryResponse.removeAddress));
                                    return;
                                case "updateAddress":
                                    this.dispatch(updateAddress(queryResponse.updateAddress));
                                    return;
                                case "addAddress":
                                    this.dispatch(addAddress(queryResponse.addAddress));
                                    return;
                                //Auth
                                case "platformConfig":
                                    this.dispatch(fetchPlatformData(queryResponse.platformConfig));
                                    return;
                                case "loginWithAppleIOS":
                                    this.dispatch(loginWithAppleIOS(queryResponse.loginWithAppleIOS));
                                    return;
                                case "hasPassword":
                                    this.dispatch(hasPassword(queryResponse.user.hasPassword));
                                    return;
                                case "activeSessions":
                                    this.dispatch(getListOfActiveSessions(queryResponse.user.activeSessions));
                                    return;
                                case "deleteMobileNumber":
                                    this.dispatch(deleteMobileNumber(queryResponse.deleteMobileNumber));
                                    return;
                                case "deleteEmail":
                                    this.dispatch(deleteEmail(queryResponse.deleteEmail));
                                    return;
                                case "addMobileNumber":
                                    this.dispatch(addMobileNumber(queryResponse.addMobileNumber));
                                    return;
                                case "addEmail":
                                    this.dispatch(addEmail(queryResponse.addEmail));
                                    return;
                                case "loggedInUser":
                                    this.dispatch(fetchUserData(queryResponse.user.loggedInUser));
                                    return;
                                case "deleteUser":
                                    this.dispatch(deleteUser(queryResponse.deleteUser));
                                    return;
                                case "signOutUser":
                                    this.dispatch(signOutUser());
                                    return;
                                case "registerWithForm":
                                    this.dispatch(signUpUser(queryResponse.registerWithForm));
                                    return;
                                case "loginWithEmailAndPassword":
                                    this.dispatch(signInUserWithPassword(queryResponse.loginWithEmailAndPassword));
                                    return;
                                case "loginWithOTP":
                                    this.dispatch(signInUserWithOtp(queryResponse.loginWithOTP));
                                    return;
                                case "sendOTPOnMobile":
                                    this.dispatch(sendOtp(queryResponse.sendOTPOnMobile));
                                    return;
                                case "forgotPassword":
                                    this.dispatch(forgotPassword(queryResponse.forgotPassword));
                                    return;
                                case "loginWithFacebook":
                                    this.dispatch(facebookLogin(queryResponse.loginWithFacebook));
                                    return;
                                case "loginWithGoogle":
                                    this.dispatch(googleLogin(queryResponse.loginWithGoogle));
                                    return;
                                case "sendResetPasswordEmail":
                                    this.dispatch(resetPasswordWithEmail(queryResponse.sendResetPasswordEmail));
                                    return;
                                case "sendResetPasswordMobile":
                                    this.dispatch(resetPasswordWithMobile(queryResponse.sendResetPasswordMobile));
                                    return;
                                case "sendOTPOnMobile":
                                    this.dispatch(sendOtpMobile(queryResponse.sendOTPOnMobile));
                                    return;
                                case "sendOTPOnEmail":
                                    this.dispatch(sendOtpEmail(queryResponse.sendOTPOnEmail));
                                    return;
                                case "verifyMobileOTP":
                                    this.dispatch(verifyMobileOtp(queryResponse.verifyMobileOTP));
                                    return;
                                case "verifyEmailOTP":
                                    this.dispatch(verifyEmailOtp(queryResponse.verifyEmailOTP));
                                    return;
                                case "updateProfile":
                                    this.dispatch(updateProfile(queryResponse.updateProfile));
                                    return;
                                case "sendVerificationLinkToEmail":
                                    this.dispatch(sendEmailVerificationLink(queryResponse.sendVerificationLinkToEmail));
                                    return;
                                //Brands
                                case "brand":
                                    this.dispatch(fetchBrand(queryResponse.brand));
                                    return;
                                case "brands":
                                    this.dispatch(fetchBrands(queryResponse.brands));
                                    return;
                                //Cart
                                case "fetchBuyNowCartItems": //TODO
                                    this.dispatch(fetchBuyNowCartItems(queryResponse.cart));
                                    return;
                                case "cartShipmentDetails":
                                    this.dispatch(fetchShipments(queryResponse.cartShipmentDetails));
                                    return;
                                case "productLadderPromotion":
                                    this.dispatch(fetchLadderOffers(queryResponse.productLadderPromotion));
                                    return;
                                case "productLadderPromotion":
                                    this.dispatch(fetchPromotionOffers(queryResponse.productLadderPromotion));
                                    return;
                                case "coupon":
                                    this.dispatch(fetchCoupons(queryResponse.coupons));
                                    return;
                                case "getCartShareLink":
                                    this.dispatch(fetchCartShareLink(queryResponse.getCartShareLink));
                                    return;
                                case "selectPaymentMode":
                                    this.dispatch(selectPaymentMode(queryResponse.selectPaymentMode));
                                    return;
                                case "checkoutCart":
                                    this.dispatch(checkoutCart(queryResponse.checkoutCart));
                                    return;
                                case "addItemsToCart":
                                    this.dispatch(addToCartBuyNow(queryResponse.addItemsToCart));
                                    return;
                                case "addToCart": //TODO
                                    this.dispatch(addToCart(queryResponse.addItemsToCart));
                                    return;
                                case "getCart":
                                    this.dispatch(getCartItemsCount(queryResponse.getCart));
                                    return;
                                case "updateCart":
                                    this.dispatch(updateCartItems(queryResponse.updateCart.cart));
                                    return;
                                case "cart":
                                    if (queryResponse.updateCart) {
                                        this.dispatch(updateCartItems(queryResponse.updateCart.cart));
                                    }
                                    else if (queryResponse.cart) {
                                        this.dispatch(fetchCartItems(queryResponse.cart));
                                    }
                                    return;
                                case "removeCartItem": //TOOD
                                    this.dispatch(removeCartItem(queryResponse.updateCart));
                                    return;
                                case "updateCartMeta":
                                    this.dispatch(updateCheckoutMode(queryResponse.updateCartMeta));
                                    return;
                                case "applyCoupon":
                                    this.dispatch(applyCoupon(queryResponse.applyCoupon));
                                    return;
                                case "removeCoupon":
                                    this.dispatch(removeCoupon(queryResponse.removeCoupon));
                                    return;
                                case "applyRewardPoints":
                                    this.dispatch(updateRewardPoints(queryResponse.applyRewardPoints));
                                    return;
                                case "selectAddress":
                                    this.dispatch(selectAddress(queryResponse.selectAddress));
                                    return;
                                case "updateCartMeta":
                                    this.dispatch(updateCartMeta(queryResponse.updateCartMeta));
                                    return;
                                //Categories
                                case "categories":
                                    this.dispatch(fetchCategories(queryResponse.categories));
                                    return;
                                //Collection
                                case "collection":
                                    this.dispatch(fetchCollection(queryResponse.collection));
                                    return;
                                case "collectionItems":
                                    this.dispatch(fetchCollectionItem(queryResponse.collectionItems));
                                    return;
                                //Configuration
                                case "appDetails":
                                    this.dispatch(fetchApplication(queryResponse.applicationConfiguration.appDetails));
                                    return;
                                case "contactInfo":
                                    this.dispatch(fetchContactInfo(queryResponse.applicationConfiguration.contactInfo));
                                    return;
                                case "features":
                                    this.dispatch(fetchAppFeatures(queryResponse.applicationConfiguration.features));
                                    return;
                                case "integrationTokens":
                                    this.dispatch(fetchAppIntegrationTokens(queryResponse.applicationConfiguration.integrationTokens));
                                    return;
                                case "deployment_store_selection":
                                    this.dispatch(fetchDeploymentStores(queryResponse.applicationConfiguration.features.common.deployment_store_selection));
                                    return;
                                case "applicationStaff":
                                    this.dispatch(fetchStaff(queryResponse.applicationStaff));
                                    return;
                                case "store":
                                    this.dispatch(fetchStoreById(queryResponse.store));
                                    return;
                                case "currency":
                                    this.dispatch(fetchAppCurrencies(queryResponse.applicationConfiguration.features.common.currency));
                                    return;
                                //Content
                                case "navigations":
                                    this.dispatch(fetchNavigation(queryResponse.applicationContent.navigations));
                                    return;
                                case "seoConfiguration":
                                    this.dispatch(fetchAppSeo(queryResponse.applicationContent.seoConfiguration));
                                    return;
                                case "blog":
                                    this.dispatch(fetchBlog(queryResponse.blog));
                                    return;
                                case "blogs":
                                    this.dispatch(fetchBlogs(queryResponse.applicationContent.blogs));
                                    return;
                                case "customPage":
                                    this.dispatch(fetchCustomPage(queryResponse.customPage));
                                    return;
                                case "faqs":
                                    this.dispatch(fetchFaqByCategory(queryResponse.faqsByCategory.faqs));
                                    return;
                                case "faqCategory":
                                    this.dispatch(getFaqCategoryBySlug(queryResponse.faqCategory));
                                    return;
                                case "faqCategory":
                                    this.dispatch(getFaqCategories(queryResponse.faqCategory));
                                    return;
                                case "faq":
                                    this.dispatch(getFaqs(queryResponse.faq));
                                    return;
                                case "tags":
                                    this.dispatch(fetchTags(queryResponse.applicationContent.tags));
                                    return;
                                case "legalInformation":
                                    this.dispatch(fetchLegalData(queryResponse.legalInformation));
                                    return;
                                case "supportInformation":
                                    this.dispatch(fetchSupportInformation(queryResponse.applicationContent.supportInformation));
                                    return;
                                case "announcements":
                                    this.dispatch(fetchAnnouncement(queryResponse.applicationContent.announcements));
                                    return;
                                case "landingPage":
                                    this.dispatch(fetchLandingPage(queryResponse.applicationContent.landingPage));
                                    return;
                                case "dataLoaders":
                                    this.dispatch(fetchDataLoaders(queryResponse.applicationContent.dataLoaders));
                                    return;
                                //Logistic
                                case "allCountries":
                                    this.dispatch(fetchAllCountries(queryResponse.allCountries));
                                    return;
                                case "getTatProduct":
                                    this.dispatch(getTatProduct(queryResponse.getTatProduct));
                                    return;
                                case "pincodeDetails":
                                    this.dispatch(fetchPincodeDetails(queryResponse.pincodeDetails));
                                    return;
                                //Order
                                case "orders":
                                    this.dispatch(getOrders(queryResponse.orders));
                                    return;
                                case "order":
                                    this.dispatch(getOrderById(queryResponse.order));
                                    return;
                                case "customer_detail":
                                    this.dispatch(getCustomerDetailsByShipmentId(queryResponse.shipment.customer_detail));
                                    return;
                                case "invoice_detail":
                                    this.dispatch(getInvoiceByShipmentId(queryResponse.shipment.invoice_detail));
                                    return;
                                case "posOrder":
                                    this.dispatch(getPosOrderById(queryResponse.posOrder));
                                    return;
                                case "shipment_bag_reasons":
                                    this.dispatch(getShipmentBagReasons(queryResponse.shipment.shipment_bag_reasons));
                                    return;
                                case "shipment":
                                    this.dispatch(getShipmentById(queryResponse.shipment));
                                    return;
                                case "shipment_reasons":
                                    this.dispatch(getShipmentReasons(queryResponse.shipment.shipment_reasons));
                                    return;
                                case "sendOtpToShipmentCustomer":
                                    this.dispatch(sendOtpToShipmentCustomer(queryResponse.sendOtpToShipmentCustomer));
                                    return;
                                case "track_shipment":
                                    this.dispatch(trackShipment(queryResponse.shipment.track_shipment));
                                    return;
                                case "updateShipmentStatus":
                                    this.dispatch(updateShipmentStatus(queryResponse.updateShipmentStatus));
                                    return;
                                case "verifyOtpShipmentCustomer":
                                    this.dispatch(verifyOtpShipmentCustomer(queryResponse.verifyOtpShipmentCustomer));
                                    return;
                                //Payments
                                case "payment_options":
                                    this.dispatch(fetchPaymentOptions(queryResponse.paymentModeRoutes.payment_options));
                                    return;
                                case "aggregatorsConfig":
                                    this.dispatch(fetchAggregatorsConfig(queryResponse.aggregatorsConfig));
                                    return;
                                case "verifyCustomerForPayment":
                                    this.dispatch(verifyCustomerForPayment(queryResponse.verifyCustomerForPayment));
                                    return;
                                case "customerCreditSummary":
                                    this.dispatch(customerCreditSummary(queryResponse.payment.customerCreditSummary));
                                    return;
                                case "redirectToAggregator":
                                    this.dispatch(redirectToAggregator(queryResponse.redirectToAggregator));
                                    return;
                                case "customerOnboard":
                                    this.dispatch(customerOnboard(queryResponse.customerOnboard));
                                    return;
                                case "epayLaterBannerDetails":
                                    this.dispatch(getEpaylaterBannerDetails(queryResponse.payment.epayLaterBannerDetails));
                                    return;
                                case "activeCardAggregator":
                                    this.dispatch(getActiveCardAggregator(queryResponse.payment.activeCardAggregator));
                                    return;
                                case "checkoutPayment":
                                    this.dispatch(checkoutPayment(queryResponse));
                                    return;
                                case "confirmPaymentAddress":
                                    this.dispatch(confirmPaymentAddress(queryResponse));
                                    return;
                                case "confirmPayment":
                                    this.dispatch(confirmPayment(queryResponse));
                                    return;
                                case "product":
                                    this.dispatch(fetchProductDetails(queryResponse.product));
                                    return;
                                case "variants":
                                    this.dispatch(fetchProductVariants(queryResponse.product.variants));
                                    return;
                                case "followById":
                                    this.dispatch(followById(queryResponse.followById));
                                    return;
                                case "followerCount":
                                    this.dispatch(fetchFollowerCountById(queryResponse.followerCount));
                                    return;
                                case "fetchFollowedListing":
                                    this.dispatch(fetchFollowedListing(queryResponse));
                                    return;
                                case "followById":
                                    this.dispatch(fetchFollowIds(queryResponse.followById));
                                    return;
                                case "unfollowById":
                                    this.dispatch(unfollowById(queryResponse.unfollowById));
                                    return;
                                case "bulkDiscountOffers":
                                    this.dispatch(fetchBulkPrice(queryResponse.bulkDiscountOffers));
                                    return;
                                case "compareSimilarProduct":
                                    this.dispatch(fetchSimilarCompareProduct(queryResponse.compareSimilarProduct));
                                    return;
                                case "compareWithFrequentlyCompared":
                                    this.dispatch(fetchFrequentlyComparedProducts(queryResponse.compareWithFrequentlyCompared));
                                    return;
                                case "productPrice":
                                    this.dispatch(fetchProductPriceBySlug(queryResponse.productPrice));
                                    return;
                                case "productBundles":
                                    this.dispatch(getProductBundlesBySlug(queryResponse.productBundles));
                                    return;
                                case "productSellers":
                                    this.dispatch(fetchProductSellerBySlug(queryResponse.productSellers));
                                    return;
                                //Products
                                case "products":
                                    this.dispatch(fetchProducts(queryResponse.products));
                                    return;
                                case "fetchSuggestions": //TODO
                                    this.dispatch(fetchSuggestions(queryResponse.products));
                                    return;
                                case "fetchProductSuggestions": //TODO
                                    this.dispatch(fetchProductSuggestions(queryResponse.products));
                                    return;
                                case "fetchProductListingMeta": //TODO
                                    this.dispatch(fetchProductListingMeta(queryResponse.products));
                                    return;
                                case "collection":
                                    this.dispatch(fetchCategoryListingMeta(queryResponse.collection));
                                    return;
                                case "fetchBrandListingMeta": //TOOD
                                    this.dispatch(fetchBrandListingMeta(queryResponse.collection));
                                    return;
                                case "fetchCollectionListingMeta": //TODO
                                    this.dispatch(fetchCollectionListingMeta(queryResponse.collection));
                                    return;
                                //share
                                case "shortLink":
                                    this.dispatch(createShortLink(queryResponse.shortLink));
                                    return;
                                case "getUrlQRCode":
                                    this.dispatch(getUrlQRCode(queryResponse.getUrlQRCode));
                                    return;
                                //Theme
                                case "appliedTheme":
                                    this.dispatch(fetchAppliedTheme(queryResponse.theme.appliedTheme));
                                    return;
                                case "theme":
                                    this.dispatch(fetchThemeById(queryResponse.theme));
                                    return;
                                case "page":
                                    this.dispatch(fetchPage(queryResponse.page));
                                    return;
                                case "getItemCount":
                                    this.dispatch(getCartItemsCount(queryResponse.getItemCount));
                                    return;
                                default:
                                    console.log(`Case not handled for ${element}`);
                                    return;
                            }
                        }
                    });
                }
                return responseData;
            }
            catch (error) {
                console.log(query);
                console.log(error);
                return `Error occured ${error}`;
            }
        });
    }
    extractJsonKeys(parsedData, depth) {
        try {
            const extract = (obj, currentDepth) => {
                if (currentDepth === depth) {
                    return Object.keys(obj);
                }
                const keys = [];
                for (const key in obj) {
                    if (obj.hasOwnProperty(key) &&
                        typeof obj[key] === "object" &&
                        obj[key] !== null) {
                        keys.push(key);
                        keys.push(...extract(obj[key], currentDepth + 1).map((subKey) => `${subKey}`));
                    }
                }
                return keys;
            };
            return extract(parsedData, 0);
        }
        catch (error) {
            console.error("Error parsing JSON:", error);
            return null;
        }
    }
}
export default ApplicationStore;
//# sourceMappingURL=index.js.map