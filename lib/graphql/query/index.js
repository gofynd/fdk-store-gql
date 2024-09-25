import { addressHandler } from "./address.handler";
import { addressesHandler } from "./addresses.handler";
import { applicationConfigurationHandler } from "./applicationConfiguration.handler";
// import { productsHandler } from "./products.handler";
import { themeHandler } from "./theme.handler";
import { userHandler } from "./user.handler";
import { brandsHandler } from "./brands.handler";
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
import { applicationStaffHandler } from "./applicationStaff.handler";
import { storeHandler } from "./store.handler";
import { bloghandler } from "./blog.handler";
import { customPageHandler } from "./customPage.hadler";
import { faqsByCategoryHandler } from "./faqsByCategory.handler";
import { allCountrieshandler } from "./allCountries.handler";
import { pincodeDetailsHandler } from "./pincodeDetails.handler";
import { aggregatorsConfighandler } from "./aggregatorsConfig.handler";
import { bulkDiscountOffersHandler } from "./bulkDiscountOffers.handler";
import { compareSimilarProductHandler } from "./compareSimilarProduct.handler";
import { compareWithFrequentlyComparedHandler } from "./compareWithFrequentlyCompared.handler";
import { productPriceHandler } from "./productPrice.handler";
import { productSellersHandler } from "./productSellers.handler";
import { followedListingHandler } from "./followedListing.handler";
import { followerCountHandler } from "./followerCount.handler";
import { followedProductsHandler } from "./followedProducts.handler";
import { collectionsHandler } from "./collections.handler";
import { localityHandler } from "./localityHandler";
const handlerMap = {
    theme: themeHandler,
    address: addressHandler,
    addresses: addressesHandler,
    user: userHandler,
    applicationConfiguration: applicationConfigurationHandler,
    brands: brandsHandler,
    cart: cartHandler,
    categories: categoriesHandler,
    cartShipmentDetails: cartShipmentDetailsHandler,
    paymentModeRoutes: paymentModeRoutesHandler,
    product: productHandler,
    products: productsHandler,
    productLadderPromotion: productLadderPromotionHandler,
    promotionOffers: promotionOffersHandler,
    faqsByCategory: faqsByCategoryHandler,
    collections: collectionsHandler,
    // updateCart: updateCartHandler,
    applicationContent: applicationContenthandler,
    page: pageHandler,
    platformConfig: platformConfigHandler,
    coupons: couponsHandler,
    collection: collectionHandler,
    collectionItems: collectionItemsHandler,
    applicationStaff: applicationStaffHandler,
    store: storeHandler,
    blog: bloghandler,
    customPage: customPageHandler,
    allCountries: allCountrieshandler,
    pincodeDetails: pincodeDetailsHandler,
    locality: localityHandler,
    aggregatorsConfig: aggregatorsConfighandler,
    bulkDiscountOffers: bulkDiscountOffersHandler,
    compareSimilarProduct: compareSimilarProductHandler,
    compareWithFrequentlyCompared: compareWithFrequentlyComparedHandler,
    productPrice: productPriceHandler,
    productSellers: productSellersHandler,
    followedListing: followedListingHandler,
    followerCount: followerCountHandler,
    followedProducts: followedProductsHandler
};
export function queryResponseHandler(responseData, dispatch, params) {
    console.log({ responseData });
    if (!responseData) {
        return;
    }
    Object.keys(handlerMap).forEach(key => {
        if (responseData.hasOwnProperty(key)) {
            handlerMap[key](responseData[key], dispatch, params);
        }
    });
}
//# sourceMappingURL=index.js.map