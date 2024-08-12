import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { STORE_KEYS } from "./enums/keys";
import { plpReducer } from "./slices/products";
import { addressReducer } from "./slices/address";
import { authReducer } from "./slices/auth";
import { brandsReducer } from "./slices/brands";
import { cartReducer } from "./slices/cart";
import { categoriesReducer } from "./slices/categories";
import { collectionReducer } from "./slices/collection";
import { configurationReducer } from "./slices/configuration";
import { contentReducer } from "./slices/content";
import { customReducer } from "./slices/custom";
import { logisticsReducer } from "./slices/logistic";
import { orderReducer } from "./slices/order";
import { paymentReducer } from "./slices/payment";
import { pdpReducer } from "./slices/product";
import { shareReducer } from "./slices/share";
import { themeReducer } from "./slices/theme";
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
export function createStore(initialData) {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialData || {},
    });
    return store;
}
//# sourceMappingURL=store.js.map