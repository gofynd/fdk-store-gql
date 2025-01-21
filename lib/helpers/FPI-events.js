import { setValue } from "../store/slices/custom";
import { isRunningOnClient } from "./utils";
export const FPI_EVENTS = {
    LOG_IN: {
        eventName: "user.login",
        payloadCreator: (result, param, store) => {
            let user = result;
            return {
                user_id: (user === null || user === void 0 ? void 0 : user.user_id) || (user === null || user === void 0 ? void 0 : user._id),
                gender: user === null || user === void 0 ? void 0 : user.gender,
                email: user === null || user === void 0 ? void 0 : user.emails,
                phone_number: user === null || user === void 0 ? void 0 : user.phone_numbers,
            };
        },
    },
    LOG_OUT: {
        eventName: "user.logout",
        payloadCreator: (result, param, store) => {
            let user = store.auth.user_data;
            return {
                user_id: user === null || user === void 0 ? void 0 : user.user_id,
                phone: user === null || user === void 0 ? void 0 : user.phone_numbers,
                email: user === null || user === void 0 ? void 0 : user.emails,
            };
        },
    },
    PROFILE_UPDATE: {
        eventName: "user.update",
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c;
            return {
                gender: (_a = result === null || result === void 0 ? void 0 : result.user) === null || _a === void 0 ? void 0 : _a.gender,
                email: result === null || result === void 0 ? void 0 : result.email,
                phone_number: (result === null || result === void 0 ? void 0 : result.mobile) || ((_b = result === null || result === void 0 ? void 0 : result.user) === null || _b === void 0 ? void 0 : _b.phone_numbers),
                user_id: (_c = result === null || result === void 0 ? void 0 : result.user) === null || _c === void 0 ? void 0 : _c._id,
            };
        },
    },
    PRODUCT_LIST_VIEW: {
        eventName: "product_list.view",
        payloadCreator: (result, param, store) => {
            return { items: result === null || result === void 0 ? void 0 : result.items };
        },
    },
    COLLECTION_LIST_VIEW: {
        eventName: "collection_list.view",
        payloadCreator: (result, param, store, oldStore) => {
            return {
                name: result === null || result === void 0 ? void 0 : result.name,
                slug: result === null || result === void 0 ? void 0 : result.slug,
            };
        },
    },
    PRODUCT_LIST_CLICK: {
        eventName: "product_list.click",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_FILTER: {
        eventName: "product_list.filter",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_SORT: {
        eventName: "product_list.sort",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_DETAIL_PAGE_VIEW: {
        eventName: "product.view",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            return {
                product: {
                    uid: result === null || result === void 0 ? void 0 : result.uid,
                    name: result === null || result === void 0 ? void 0 : result.name,
                    item_code: result === null || result === void 0 ? void 0 : result.item_code,
                    brand: {
                        uid: (_a = result === null || result === void 0 ? void 0 : result.brand) === null || _a === void 0 ? void 0 : _a.uid,
                        name: (_b = result === null || result === void 0 ? void 0 : result.brand) === null || _b === void 0 ? void 0 : _b.name,
                    },
                    category: {
                        uid: (_d = (_c = result === null || result === void 0 ? void 0 : result.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.uid,
                        name: (_f = (_e = result === null || result === void 0 ? void 0 : result.categories) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.name,
                    },
                    price: (_j = (_h = (_g = store.product) === null || _g === void 0 ? void 0 : _g.product_meta) === null || _h === void 0 ? void 0 : _h.sizes) === null || _j === void 0 ? void 0 : _j.price.effective,
                    sizes: (((_l = (_k = store.product.product_meta) === null || _k === void 0 ? void 0 : _k.sizes) === null || _l === void 0 ? void 0 : _l.sizes) ||
                        ((_o = (_m = store.product.product_meta) === null || _m === void 0 ? void 0 : _m.sizes) === null || _o === void 0 ? void 0 : _o.size_details) ||
                        []).map((s) => ({
                        value: s === null || s === void 0 ? void 0 : s.value,
                        is_available: s === null || s === void 0 ? void 0 : s.is_available,
                        quantity: s === null || s === void 0 ? void 0 : s.quantity,
                    })),
                    l1_category: (_q = (_p = result === null || result === void 0 ? void 0 : result.category_map) === null || _p === void 0 ? void 0 : _p.l1) === null || _q === void 0 ? void 0 : _q.name,
                    l3_category: (_s = (_r = result === null || result === void 0 ? void 0 : result.category_map) === null || _r === void 0 ? void 0 : _r.l3) === null || _s === void 0 ? void 0 : _s.name,
                },
            };
        },
    },
    NOTIFY_PRODUCT: {
        eventName: "notify.product",
        payloadCreator: (store) => {
            return store;
        },
    },
    ADD_TO_COMPARE: {
        eventName: "compare.add",
        payloadCreator: (store) => {
            return store;
        },
    },
    REMOVE_FROM_COMPARE: {
        eventName: "compare.remove",
        payloadCreator: (store) => {
            return store;
        },
    },
    ADD_TO_WISHLIST: {
        eventName: "wishlist.add",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            const allItems = [
                ...((_d = (_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : []),
                ...((_g = (_f = (_e = store.product) === null || _e === void 0 ? void 0 : _e.followed_listing) === null || _f === void 0 ? void 0 : _f.items) !== null && _g !== void 0 ? _g : []),
                ...((_k = (_j = (_h = store.collection) === null || _h === void 0 ? void 0 : _h.item) === null || _j === void 0 ? void 0 : _j.items) !== null && _k !== void 0 ? _k : []),
                ...((_m = (_l = store.cart) === null || _l === void 0 ? void 0 : _l.cart_items.items) !== null && _m !== void 0 ? _m : []),
                ...(((_o = store.product) === null || _o === void 0 ? void 0 : _o.product_details)
                    ? [store.product.product_details]
                    : []),
            ];
            const collectionId = param.collectionId || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => { var _a; return (item === null || item === void 0 ? void 0 : item.uid) == collectionId || ((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.uid) == collectionId; });
            if (item === null || item === void 0 ? void 0 : item.product) {
                return {
                    item: Object.assign(Object.assign(Object.assign({}, item), item.product), { price: {
                            effective: {
                                max: (_q = (_p = item === null || item === void 0 ? void 0 : item.price) === null || _p === void 0 ? void 0 : _p.converted) === null || _q === void 0 ? void 0 : _q.effective,
                            },
                        } }),
                };
            }
            return { item };
        },
    },
    REMOVE_FROM_WISHLIST: {
        eventName: "wishlist.remove",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            const allItems = [
                ...((_d = (_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.items) !== null && _d !== void 0 ? _d : []),
                ...((_g = (_f = (_e = store.product) === null || _e === void 0 ? void 0 : _e.followed_listing) === null || _f === void 0 ? void 0 : _f.items) !== null && _g !== void 0 ? _g : []),
                ...((_k = (_j = (_h = store.collection) === null || _h === void 0 ? void 0 : _h.item) === null || _j === void 0 ? void 0 : _j.items) !== null && _k !== void 0 ? _k : []),
                ...((_m = (_l = store.cart) === null || _l === void 0 ? void 0 : _l.cart_items.items) !== null && _m !== void 0 ? _m : []),
                ...(((_o = store.product) === null || _o === void 0 ? void 0 : _o.product_details)
                    ? [store.product.product_details]
                    : []),
            ];
            const collectionId = param.collectionId || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => { var _a; return (item === null || item === void 0 ? void 0 : item.uid) == collectionId || ((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.uid) == collectionId; });
            if (item === null || item === void 0 ? void 0 : item.product) {
                return {
                    item: Object.assign(Object.assign(Object.assign({}, item), item.product), { price: {
                            effective: {
                                max: (_q = (_p = item === null || item === void 0 ? void 0 : item.price) === null || _p === void 0 ? void 0 : _p.converted) === null || _q === void 0 ? void 0 : _q.effective,
                            },
                        } }),
                };
            }
            return { item };
        },
    },
    VIEW_CART: {
        eventName: "cart.view",
        payloadCreator: (result, param, store, oldStore) => {
            const items = result === null || result === void 0 ? void 0 : result.items;
            let allProducts = items === null || items === void 0 ? void 0 : items.map((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                const { article, availability, product, price, discount } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) || ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: item === null || item === void 0 ? void 0 : item.quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: (_h = article === null || article === void 0 ? void 0 : article.store) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    seller: {
                        uid: (_j = article === null || article === void 0 ? void 0 : article.seller) === null || _j === void 0 ? void 0 : _j.uid,
                    },
                    size: article === null || article === void 0 ? void 0 : article.size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: discount,
                };
            });
            return {
                cart_id: result === null || result === void 0 ? void 0 : result.id,
                products: allProducts,
                breakup_values_raw: result === null || result === void 0 ? void 0 : result.breakup_values,
            };
        },
    },
    ADD_TO_CART: {
        eventName: "cart.newProduct",
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d;
            const allProducts = (_a = result === null || result === void 0 ? void 0 : result.cart) === null || _a === void 0 ? void 0 : _a.items;
            let productdata = (_c = param === null || param === void 0 ? void 0 : (_b = param.addCartRequestInput.items).map) === null || _c === void 0 ? void 0 : _c.call(_b, (pro) => {
                var _a, _b, _c, _d, _e, _f, _g;
                const item = (allProducts === null || allProducts === void 0 ? void 0 : allProducts.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == pro.item_id; })) || {};
                const { article, availability, product, price, discount, quantity } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) || ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: pro === null || pro === void 0 ? void 0 : pro.store_id,
                    },
                    seller: {
                        uid: pro === null || pro === void 0 ? void 0 : pro.seller_id,
                    },
                    size: pro === null || pro === void 0 ? void 0 : pro.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: discount,
                };
            });
            return {
                cart_id: (_d = result === null || result === void 0 ? void 0 : result.cart) === null || _d === void 0 ? void 0 : _d.id,
                products: productdata,
            };
        },
    },
    REMOVE_FROM_CART: {
        eventName: "cart.remove",
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e;
            const allItems = (_b = (_a = store === null || store === void 0 ? void 0 : store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items;
            let data = (_d = (_c = param === null || param === void 0 ? void 0 : param.updateCartRequestInput) === null || _c === void 0 ? void 0 : _c.items.map((items) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (!allItems)
                    return;
                const item = allItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) === (items === null || items === void 0 ? void 0 : items.item_id); });
                if (!item)
                    return;
                const { article, availability, product, price, price_per_unit, quantity: oldQuantity, } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) || ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    price_per_unit: price_per_unit,
                    quantity: {
                        current: items === null || items === void 0 ? void 0 : items.quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    seller: {
                        uid: (_h = article === null || article === void 0 ? void 0 : article.seller) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    size: items === null || items === void 0 ? void 0 : items.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                };
            })) === null || _d === void 0 ? void 0 : _d.filter(Boolean);
            return {
                cart_id: (_e = result === null || result === void 0 ? void 0 : result.cart) === null || _e === void 0 ? void 0 : _e.id,
                products: data,
            };
        },
    },
    UPDATE_CART: {
        eventName: "cart.update",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f;
            const isRemoveOperation = param.updateCartRequestInput.operation === "update_item";
            const storeItems = (_b = (_a = store === null || store === void 0 ? void 0 : store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items;
            const resultItems = isRemoveOperation ? storeItems : (_c = result === null || result === void 0 ? void 0 : result.cart) === null || _c === void 0 ? void 0 : _c.items;
            const data = (_d = param === null || param === void 0 ? void 0 : param.updateCartRequestInput.items.map((items) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (!resultItems)
                    return;
                const item = resultItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == (items === null || items === void 0 ? void 0 : items.item_id); });
                if (!item)
                    return;
                const { article, availability, product, price, price_per_unit, quantity: newQuantity, } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: ((_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name) || ((_g = product === null || product === void 0 ? void 0 : product.attributes) === null || _g === void 0 ? void 0 : _g.brand_name),
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    price_per_unit: price_per_unit,
                    quantity: {
                        current: items === null || items === void 0 ? void 0 : items.quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    seller: {
                        uid: (_h = article === null || article === void 0 ? void 0 : article.seller) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    size: items === null || items === void 0 ? void 0 : items.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                };
            })) === null || _d === void 0 ? void 0 : _d.filter(Boolean);
            return {
                cart_id: (_e = result === null || result === void 0 ? void 0 : result.cart) === null || _e === void 0 ? void 0 : _e.id,
                products: data,
                operation: (data === null || data === void 0 ? void 0 : data.length)
                    ? data[0].quantity.current >
                        ((_f = storeItems === null || storeItems === void 0 ? void 0 : storeItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) === data[0].uid; })) === null || _f === void 0 ? void 0 : _f.quantity)
                        ? "increment_quantity"
                        : "decrement_quantity"
                    : undefined,
            };
        },
    },
    ORDER_CHECKOUT: {
        eventName: "order.checkout",
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const allProducts = (_b = (_a = store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items;
            let data = allProducts === null || allProducts === void 0 ? void 0 : allProducts.map((item) => {
                var _a, _b, _c, _d, _e, _f;
                const { article, availability, product, price, quantity } = item;
                return {
                    article: {
                        uid: article === null || article === void 0 ? void 0 : article.uid,
                    },
                    category: {
                        uid: (_b = (_a = product === null || product === void 0 ? void 0 : product.categories) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.uid,
                        name: (_d = (_c = product === null || product === void 0 ? void 0 : product.categories) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                    },
                    brand: {
                        uid: (_e = product === null || product === void 0 ? void 0 : product.brand) === null || _e === void 0 ? void 0 : _e.uid,
                        name: (_f = product === null || product === void 0 ? void 0 : product.brand) === null || _f === void 0 ? void 0 : _f.name,
                    },
                    name: product === null || product === void 0 ? void 0 : product.name,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: quantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    size: article === null || article === void 0 ? void 0 : article.size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: product.discount,
                };
            });
            return {
                cart_id: (_d = (_c = store.cart) === null || _c === void 0 ? void 0 : _c.cart_items) === null || _d === void 0 ? void 0 : _d.cart_id,
                products: data,
                breakup_values: (_f = (_e = store.cart) === null || _e === void 0 ? void 0 : _e.cart_items) === null || _f === void 0 ? void 0 : _f.breakup_values,
            };
        },
    },
    ADD_PAYMENT_INFORMATION: {
        eventName: "order.payment_information",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d;
            return {
                value: (_a = result === null || result === void 0 ? void 0 : result.breakup_values) === null || _a === void 0 ? void 0 : _a.display.filter((value) => value.display === "Total")[0].value,
                coupon: {
                    coupon_code: (_c = (_b = result === null || result === void 0 ? void 0 : result.breakup_values) === null || _b === void 0 ? void 0 : _b.coupon) === null || _c === void 0 ? void 0 : _c.code,
                },
                payment: {
                    payment_type: (_d = param === null || param === void 0 ? void 0 : param.updateCartPaymentRequestInput) === null || _d === void 0 ? void 0 : _d.payment_mode,
                },
                delivery_charges: result === null || result === void 0 ? void 0 : result.delivery_charge_info,
                cart: { cart_id: result === null || result === void 0 ? void 0 : result.id },
            };
        },
    },
    // 	{
    // 		value: res?.breakup_values?.raw?.total,
    // 		coupon: {
    // 				coupon_code: res?.breakup_values?.coupon?.code,
    // 		},
    // 		pincode: address_pincode,
    // 		cart: { cart_id: res?.id },
    // 		address_id: address_id,
    // }
    ADD_ADDRESS_INFORMATION: {
        eventName: "order.address_information",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let selectAddress = store.address.address.address.find((item) => item.id == param.selectCartAddressRequestInput.billing_address_id);
            return {
                value: (_d = (_c = (_b = (_a = store === null || store === void 0 ? void 0 : store.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.breakup_values) === null || _c === void 0 ? void 0 : _c.raw) === null || _d === void 0 ? void 0 : _d.total,
                coupon: {
                    coupon_code: (_h = (_g = (_f = (_e = store === null || store === void 0 ? void 0 : store.cart) === null || _e === void 0 ? void 0 : _e.cart_items) === null || _f === void 0 ? void 0 : _f.breakup_values) === null || _g === void 0 ? void 0 : _g.coupon) === null || _h === void 0 ? void 0 : _h.code,
                },
                address_id: param.selectCartAddressRequestInput.billing_address_id,
                cart: {
                    cart_id: param.selectCartAddressRequestInput.billing_address_id,
                },
                pincode: selectAddress.area_code,
            };
        },
    },
    ORDER_PROCESSED: {
        eventName: "order.processed",
        payloadCreator: (result, param, store, oldStore) => {
            let orderData = result;
            const breakup = {};
            if (orderData.breakup_values) {
                for (let i = 0; i < orderData.breakup_values.length; i++) {
                    breakup[orderData.breakup_values[i].name] =
                        orderData.breakup_values[i].value;
                }
            }
            orderData.breakup_values_raw = breakup;
            const extractItems = (data) => {
                const allItems = [];
                data.forEach((order) => {
                    order.bags.forEach((bag) => {
                        const itemWithDetails = Object.assign(Object.assign({}, bag.item), { quantity: bag === null || bag === void 0 ? void 0 : bag.quantity, price: bag === null || bag === void 0 ? void 0 : bag.prices });
                        allItems.push(itemWithDetails);
                    });
                });
                return allItems;
            };
            const items = extractItems(orderData.shipments);
            orderData.items = items;
            return orderData;
        },
    },
    ORDER_TRACKING_VIEW: {
        eventName: "order_tracking.view",
        payloadCreator: (store) => {
            return store;
        },
    },
    ORDER_INITIALCHECKOUT: {
        eventName: "order.initialCheckout",
        payloadCreator: (store) => {
            return store;
        },
    },
    REFUND_SUCCESS: {
        eventName: "refund.success",
        payloadCreator: (store) => {
            return store;
        },
    },
    SEARCH_PRODUCTS: {
        eventName: "search.products",
        payloadCreator: (store) => {
            return store;
        },
    },
    PINCODE_SERVICEABILITY: {
        eventName: "pincode.serviceablility",
        payloadCreator: (store) => {
            return store;
        },
    },
    NAVIGATION: {
        eventName: "root.navigation",
        payloadCreator: (store) => {
            return store;
        },
    },
};
function handleDynamicEventName(event, eventPayload, params) {
    var _a, _b, _c;
    if (event.eventName !== FPI_EVENTS.UPDATE_CART.eventName) {
        return event.eventName;
    }
    const operation = ((_b = (_a = params === null || params === void 0 ? void 0 : params[0]) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.operation) || ((_c = params === null || params === void 0 ? void 0 : params.updateCartRequestInput) === null || _c === void 0 ? void 0 : _c.operation);
    if (!operation) {
        return event.eventName;
    }
    const isRemoved = operation === "remove_item";
    if (!isRemoved) {
        return event.eventName;
    }
    return FPI_EVENTS.REMOVE_FROM_CART.eventName;
}
export function emitFPIEvent(event, params, result, oldStore, dispatch, eventEmitter) {
    var _a, _b, _c, _d;
    if (!(event === null || event === void 0 ? void 0 : event.eventName) || !(event === null || event === void 0 ? void 0 : event.payloadCreator)) {
        return true;
    }
    if (isRunningOnClient()) {
        let { eventName, payloadCreator } = event;
        const storeSnapshot = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
        const eventPayload = typeof payloadCreator === "function"
            ? payloadCreator(result, params, storeSnapshot, oldStore)
            : payloadCreator;
        eventName = handleDynamicEventName(event, eventPayload, params);
        try {
            if (typeof eventEmitter === "function") {
                eventEmitter(eventName, eventPayload);
            }
            defaultFPIEmit(eventName, eventPayload);
        }
        catch (error) {
            console.error("Error Occured in Event : ", error);
        }
        finally {
            return true;
        }
    }
    else {
        dispatch(setValue({
            key: `fpiEvent${event.eventName}`,
            value: {
                key: event.eventName,
                params,
                result,
            },
        }));
    }
}
export function defaultFPIEmit(eventName, payload) {
    var _a, _b;
    if (isRunningOnClient()) {
        try {
            (_b = (_a = window.FPI.event) === null || _a === void 0 ? void 0 : _a.emit) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, payload);
        }
        catch (error) {
            console.error("Error Occured in Event : ", error);
        }
    }
}
export function collectUnemittedEvents(customData) {
    const events = [];
    for (let key in customData) {
        if (customData.hasOwnProperty(key) && key.startsWith("fpiEvent")) {
            events.push(customData[key]);
        }
    }
    return events;
}
export function emitAllEvents(events, FPI_EVENTS, storeInitialData) {
    events.forEach((event) => {
        const { key, params, result } = event;
        let matchingEvent;
        for (let lkey in FPI_EVENTS) {
            if (FPI_EVENTS.hasOwnProperty(lkey) &&
                FPI_EVENTS[lkey].eventName === key) {
                matchingEvent = FPI_EVENTS[lkey];
                break;
            }
        }
        if (matchingEvent) {
            const { eventName, payloadCreator } = matchingEvent;
            const payload = payloadCreator(result, params, storeInitialData, storeInitialData);
            defaultFPIEmit(eventName, payload);
        }
    });
}
//# sourceMappingURL=FPI-events.js.map