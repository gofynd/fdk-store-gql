import { addressHandler } from "./address.handler";
import { addressesHandler } from "./addresses.handler";
import { applicationConfigurationHandler } from "./applicationConfiguration.handler";
import { themeHandler } from "./theme.handler";
import { userHandler } from "./user.handler";
import { brandsHandler } from "./brands.handler";
import { brandHandler } from "./brand.handler";
import { cartHandler } from "./cartHandler";
import { categoriesHandler } from "./categories.handler";
import { cartShipmentDetailsHandler } from "./cartShipmentDetails.handler";
import { paymentModeRoutesHandler } from "./paymentModeRoutes.handler";
import { productHandler } from "./product.handler";
import { applicationContenthandler } from "./applicationContent.handler";
import { productsHandler } from "./products.handler";
import { pageHandler } from "./page.handler";
import { platformConfigHandler } from "./platformConfig.handler";
import { productLadderPromotionHandler } from "./productLadderPromotion.handler";
import { promotionOffersHandler } from "./promotionOffers.handler";
import { couponsHandler } from "./coupons.handler";
import { collectionHandler } from "./collection.handler";
import { collectionItemsHandler } from "./collectionItems.handler";
import { storeHandler } from "./store.handler";
import { bloghandler } from "./blog.handler";
import { customPageHandler } from "./customPage.hadler";
import { faqsByCategoryHandler } from "./faqsByCategory.handler";
import { categoryHandler } from "./category.handler";
import { allCountrieshandler } from "./allCountries.handler";
import { pincodeDetailsHandler } from "./pincodeDetails.handler";
import { aggregatorsConfighandler } from "./aggregatorsConfig.handler";
import { bulkDiscountOffersHandler } from "./bulkDiscountOffers.handler";
import { productPriceHandler } from "./productPrice.handler";
import { productsPriceWithFulfillmentOptionHandler } from "./productsPriceWithFulfillmentOption.handler";
import { productSellersHandler } from "./productSellers.handler";
import { followedListingHandler } from "./followedListing.handler";
import { followerCountHandler } from "./followerCount.handler";
import { collectionsHandler } from "./collections.handler";
import { localityHandler } from "./localityHandler";
import { orderHandler } from "./order.handler";
import { searchHandler } from "./searchProduct.handler";
import { deliveryPromiseHandler } from "./deliveryPromise.handler";
const handlerMap = {
    theme: themeHandler,
    address: addressHandler,
    addresses: addressesHandler,
    user: userHandler,
    applicationConfiguration: applicationConfigurationHandler,
    brands: brandsHandler,
    brand: brandHandler,
    cart: cartHandler,
    categories: categoriesHandler,
    category: categoryHandler,
    cartShipmentDetails: cartShipmentDetailsHandler,
    paymentModeRoutes: paymentModeRoutesHandler,
    product: productHandler,
    products: productsHandler,
    productLadderPromotion: productLadderPromotionHandler,
    promotionOffers: promotionOffersHandler,
    faqsByCategory: faqsByCategoryHandler,
    collections: collectionsHandler,
    applicationContent: applicationContenthandler,
    page: pageHandler,
    platformConfig: platformConfigHandler,
    coupons: couponsHandler,
    collection: collectionHandler,
    collectionItems: collectionItemsHandler,
    store: storeHandler,
    blog: bloghandler,
    customPage: customPageHandler,
    allCountries: allCountrieshandler,
    pincodeDetails: pincodeDetailsHandler,
    locality: localityHandler,
    aggregatorsConfig: aggregatorsConfighandler,
    bulkDiscountOffers: bulkDiscountOffersHandler,
    productPrice: productPriceHandler,
    productsPriceWithFulfillmentOption: productsPriceWithFulfillmentOptionHandler,
    productSellers: productSellersHandler,
    followedListing: followedListingHandler,
    followerCount: followerCountHandler,
    order: orderHandler,
    searchProduct: searchHandler,
    deliveryPromise: deliveryPromiseHandler,
};
export function queryResponseHandler(response, dispatch, params, store, options) {
    if (!(response === null || response === void 0 ? void 0 : response.data)) {
        return;
    }
    Object.keys(handlerMap).forEach((key) => {
        if (response.data.hasOwnProperty(key)) {
            let error = null;
            if (!response.data[key] && Array.isArray(response === null || response === void 0 ? void 0 : response.errors)) {
                error = response === null || response === void 0 ? void 0 : response.errors.reduce((acc, err) => {
                    if (Array.isArray(err.path) && (err === null || err === void 0 ? void 0 : err.path.includes(key))) {
                        return err;
                    }
                    return acc;
                }, null);
            }
            handlerMap[key](response.data[key], dispatch, params, store, options, error);
        }
    });
}
//# sourceMappingURL=index.js.map