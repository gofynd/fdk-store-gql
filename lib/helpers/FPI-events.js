import { setValue } from "../store/slices/custom";
import { isRunningOnClient } from "./utils";
export const FPI_EVENTS = {
    LOG_IN: {
        eventName: "user.login",
        payloadCreator: (result, param, store) => {
            let user = result;
            const verifiedPhone = getPrimaryVerifiedValue(user === null || user === void 0 ? void 0 : user.phone_numbers);
            const verifiedEmail = getPrimaryVerifiedValue(user === null || user === void 0 ? void 0 : user.emails);
            const { method } = param;
            return {
                user_id: (user === null || user === void 0 ? void 0 : user.user_id) || (user === null || user === void 0 ? void 0 : user._id),
                gender: user === null || user === void 0 ? void 0 : user.gender,
                email: verifiedEmail,
                phone_number: verifiedPhone,
                method,
                login_value: method === "phone" ? verifiedPhone : verifiedEmail,
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
    USER_REGISTER: {
        eventName: "user.register",
        payloadCreator: (result, param) => {
            var _a, _b;
            const formInput = param === null || param === void 0 ? void 0 : param.formRegisterRequestSchemaInput;
            return {
                email: (result === null || result === void 0 ? void 0 : result.email) || (formInput === null || formInput === void 0 ? void 0 : formInput.email),
                phone: {
                    country_code: (result === null || result === void 0 ? void 0 : result.country_code) || ((_a = formInput === null || formInput === void 0 ? void 0 : formInput.phone) === null || _a === void 0 ? void 0 : _a.country_code),
                    number: (result === null || result === void 0 ? void 0 : result.mobile) || ((_b = formInput === null || formInput === void 0 ? void 0 : formInput.phone) === null || _b === void 0 ? void 0 : _b.mobile),
                },
                has_password: (formInput === null || formInput === void 0 ? void 0 : formInput.password) ? true : false,
                first_name: formInput === null || formInput === void 0 ? void 0 : formInput.first_name,
                last_name: formInput === null || formInput === void 0 ? void 0 : formInput.last_name,
                gender: formInput === null || formInput === void 0 ? void 0 : formInput.gender,
            };
        },
    },
    USER_PASSWORD_RESET_REQUEST: {
        eventName: "user_password_reset.request",
        payloadCreator: (result, param) => {
            const emailInput = param === null || param === void 0 ? void 0 : param.sendResetPasswordEmailRequestSchemaInput;
            const mobileInput = param === null || param === void 0 ? void 0 : param.sendResetPasswordMobileRequestSchemaInput;
            // Determine method based on which input is present
            const method = emailInput ? 'email' : 'mobile';
            return Object.assign(Object.assign({ reset_method: method }, (emailInput ? {
                email: emailInput === null || emailInput === void 0 ? void 0 : emailInput.email,
            } : {})), (mobileInput ? {
                phone: {
                    country_code: mobileInput === null || mobileInput === void 0 ? void 0 : mobileInput.country_code,
                    number: mobileInput === null || mobileInput === void 0 ? void 0 : mobileInput.mobile,
                },
            } : {}));
        },
    },
    USER_PASSWORD_RESET_SUCCESS: {
        eventName: "user_password_reset.success",
        payloadCreator: (result) => {
            var _a;
            return {
                user_id: (_a = result === null || result === void 0 ? void 0 : result.user) === null || _a === void 0 ? void 0 : _a.id,
            };
        },
    },
    USER_RESEND_OTP: {
        eventName: "user.resend_otp",
        payloadCreator: (result, param) => {
            const emailInput = param === null || param === void 0 ? void 0 : param.sendEmailOtpRequestSchemaInput;
            const mobileInput = param === null || param === void 0 ? void 0 : param.sendMobileOtpRequestSchemaInput;
            return Object.assign(Object.assign({}, (emailInput ? {
                email: emailInput === null || emailInput === void 0 ? void 0 : emailInput.email
            } : {})), (mobileInput ? {
                phone: {
                    country_code: (result === null || result === void 0 ? void 0 : result.country_code) || (mobileInput === null || mobileInput === void 0 ? void 0 : mobileInput.country_code),
                    number: (result === null || result === void 0 ? void 0 : result.mobile) || (mobileInput === null || mobileInput === void 0 ? void 0 : mobileInput.mobile),
                },
            } : {}));
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
                user_id: (_c = result === null || result === void 0 ? void 0 : result.user) === null || _c === void 0 ? void 0 : _c.user_id,
            };
        },
    },
    ADDRESS_ADD: {
        eventName: "address.add",
        payloadCreator: (result, param) => {
            var _a, _b;
            const address2Input = param === null || param === void 0 ? void 0 : param.address2Input;
            return {
                address_id: result === null || result === void 0 ? void 0 : result.id,
                address_type: address2Input === null || address2Input === void 0 ? void 0 : address2Input.address_type,
                tags: address2Input === null || address2Input === void 0 ? void 0 : address2Input.tags,
                is_active: address2Input === null || address2Input === void 0 ? void 0 : address2Input.is_active,
                is_default_address: address2Input === null || address2Input === void 0 ? void 0 : address2Input.is_default_address,
                name: address2Input === null || address2Input === void 0 ? void 0 : address2Input.name,
                phone: {
                    country_phone_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_phone_code,
                    number: address2Input === null || address2Input === void 0 ? void 0 : address2Input.phone,
                },
                email: address2Input === null || address2Input === void 0 ? void 0 : address2Input.email,
                address: address2Input === null || address2Input === void 0 ? void 0 : address2Input.address,
                landmark: address2Input === null || address2Input === void 0 ? void 0 : address2Input.landmark,
                sector: address2Input === null || address2Input === void 0 ? void 0 : address2Input.sector,
                area: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area,
                area_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area_code,
                area_code_slug: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area_code_slug,
                city: address2Input === null || address2Input === void 0 ? void 0 : address2Input.city,
                state: address2Input === null || address2Input === void 0 ? void 0 : address2Input.state,
                state_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.state_code,
                country: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country,
                country_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_code,
                country_iso_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_iso_code,
                geo_location: {
                    latitude: (_a = address2Input === null || address2Input === void 0 ? void 0 : address2Input.geo_location) === null || _a === void 0 ? void 0 : _a.latitude,
                    longitude: (_b = address2Input === null || address2Input === void 0 ? void 0 : address2Input.geo_location) === null || _b === void 0 ? void 0 : _b.longitude,
                },
                google_map_point: address2Input === null || address2Input === void 0 ? void 0 : address2Input.google_map_point,
                custom_json: address2Input === null || address2Input === void 0 ? void 0 : address2Input._custom_json,
                meta: address2Input === null || address2Input === void 0 ? void 0 : address2Input.meta,
            };
        },
    },
    ADDRESS_UPDATE: {
        eventName: "address.update",
        payloadCreator: (result, param) => {
            var _a, _b;
            const address2Input = param === null || param === void 0 ? void 0 : param.address2Input;
            return {
                address_id: result === null || result === void 0 ? void 0 : result.id,
                address_type: address2Input === null || address2Input === void 0 ? void 0 : address2Input.address_type,
                tags: address2Input === null || address2Input === void 0 ? void 0 : address2Input.tags,
                is_active: address2Input === null || address2Input === void 0 ? void 0 : address2Input.is_active,
                is_default_address: address2Input === null || address2Input === void 0 ? void 0 : address2Input.is_default_address,
                name: address2Input === null || address2Input === void 0 ? void 0 : address2Input.name,
                phone: {
                    country_phone_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_phone_code,
                    number: address2Input === null || address2Input === void 0 ? void 0 : address2Input.phone,
                },
                email: address2Input === null || address2Input === void 0 ? void 0 : address2Input.email,
                address: address2Input === null || address2Input === void 0 ? void 0 : address2Input.address,
                landmark: address2Input === null || address2Input === void 0 ? void 0 : address2Input.landmark,
                sector: address2Input === null || address2Input === void 0 ? void 0 : address2Input.sector,
                area: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area,
                area_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area_code,
                area_code_slug: address2Input === null || address2Input === void 0 ? void 0 : address2Input.area_code_slug,
                city: address2Input === null || address2Input === void 0 ? void 0 : address2Input.city,
                state: address2Input === null || address2Input === void 0 ? void 0 : address2Input.state,
                state_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.state_code,
                country: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country,
                country_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_code,
                country_iso_code: address2Input === null || address2Input === void 0 ? void 0 : address2Input.country_iso_code,
                geo_location: {
                    latitude: (_a = address2Input === null || address2Input === void 0 ? void 0 : address2Input.geo_location) === null || _a === void 0 ? void 0 : _a.latitude,
                    longitude: (_b = address2Input === null || address2Input === void 0 ? void 0 : address2Input.geo_location) === null || _b === void 0 ? void 0 : _b.longitude,
                },
                google_map_point: address2Input === null || address2Input === void 0 ? void 0 : address2Input.google_map_point,
                custom_json: address2Input === null || address2Input === void 0 ? void 0 : address2Input._custom_json,
                meta: address2Input === null || address2Input === void 0 ? void 0 : address2Input.meta,
            };
        },
    },
    ADDRESS_REMOVE: {
        eventName: "address.remove",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d;
            const addressId = (result === null || result === void 0 ? void 0 : result.id) || (param === null || param === void 0 ? void 0 : param.id);
            // Find address from store using ID
            const addressList = ((_b = (_a = store === null || store === void 0 ? void 0 : store.address) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.address) || [];
            const addressDetails = addressList.find((addr) => (addr === null || addr === void 0 ? void 0 : addr.id) === addressId);
            return {
                address_id: addressId,
                address_type: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.address_type,
                tags: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.tags,
                is_active: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.is_active,
                is_default_address: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.is_default_address,
                name: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.name,
                phone: {
                    country_phone_code: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.country_phone_code,
                    number: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.phone,
                },
                email: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.email,
                address: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.address,
                landmark: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.landmark,
                sector: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.sector,
                area: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.area,
                area_code: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.area_code,
                area_code_slug: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.area_code_slug,
                city: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.city,
                state: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.state,
                state_code: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.state_code,
                country: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.country,
                country_code: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.country_code,
                country_iso_code: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.country_iso_code,
                geo_location: {
                    latitude: (_c = addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.geo_location) === null || _c === void 0 ? void 0 : _c.latitude,
                    longitude: (_d = addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.geo_location) === null || _d === void 0 ? void 0 : _d.longitude,
                },
                google_map_point: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.google_map_point,
                custom_json: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails._custom_json,
                meta: addressDetails === null || addressDetails === void 0 ? void 0 : addressDetails.meta,
            };
        },
    },
    PRODUCT_LIST_VIEW: {
        eventName: "product_list.view",
        payloadCreator: (result, param, store) => {
            return {
                items: result === null || result === void 0 ? void 0 : result.items,
                page: result === null || result === void 0 ? void 0 : result.page,
                query: param === null || param === void 0 ? void 0 : param.search,
                search_id: param === null || param === void 0 ? void 0 : param.search_id
            };
        },
    },
    COLLECTIONS_VIEW: {
        eventName: "collections.view",
        payloadCreator: (result) => {
            var _a, _b, _c;
            const collections = ((_a = result === null || result === void 0 ? void 0 : result.items) === null || _a === void 0 ? void 0 : _a.map((collection, index) => ({
                id: collection === null || collection === void 0 ? void 0 : collection.uid,
                name: collection === null || collection === void 0 ? void 0 : collection.name,
                slug: collection === null || collection === void 0 ? void 0 : collection.slug,
                priority: collection === null || collection === void 0 ? void 0 : collection.priority,
                position: index + 1,
            }))) || [];
            return {
                collections,
                filter_tags: (_b = result === null || result === void 0 ? void 0 : result.filters) === null || _b === void 0 ? void 0 : _b.tags,
                filter_types: (_c = result === null || result === void 0 ? void 0 : result.filters) === null || _c === void 0 ? void 0 : _c.type,
            };
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
    BRANDS_VIEW: {
        eventName: "brands.view",
        payloadCreator: (result) => {
            var _a;
            const brands = ((_a = result === null || result === void 0 ? void 0 : result.items) === null || _a === void 0 ? void 0 : _a.map((brand, index) => ({
                id: brand === null || brand === void 0 ? void 0 : brand.uid,
                name: brand === null || brand === void 0 ? void 0 : brand.name,
                slug: brand === null || brand === void 0 ? void 0 : brand.slug,
                position: index + 1,
            }))) || [];
            return {
                brands
            };
        },
    },
    PRODUCT_LIST_CLICK: {
        //not getting used
        eventName: "product_list.click",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_FILTER: {
        //not getting used
        eventName: "product_list.filter",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_SORT: {
        //not getting used
        eventName: "product_list.sort",
        payloadCreator: (store) => {
            return store;
        },
    },
    PRODUCT_DETAIL_PAGE_VIEW: {
        eventName: "product.view",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
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
                    price: (_k = (_j = (_h = (_g = store.product) === null || _g === void 0 ? void 0 : _g.product_meta) === null || _h === void 0 ? void 0 : _h.sizes) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.effective,
                    sizes: (((_m = (_l = store.product.product_meta) === null || _l === void 0 ? void 0 : _l.sizes) === null || _m === void 0 ? void 0 : _m.sizes) ||
                        ((_p = (_o = store.product.product_meta) === null || _o === void 0 ? void 0 : _o.sizes) === null || _p === void 0 ? void 0 : _p.size_details) ||
                        []).map((s) => ({
                        value: s === null || s === void 0 ? void 0 : s.value,
                        is_available: s === null || s === void 0 ? void 0 : s.is_available,
                        quantity: s === null || s === void 0 ? void 0 : s.quantity,
                    })),
                    l1_category: (_r = (_q = result === null || result === void 0 ? void 0 : result.category_map) === null || _q === void 0 ? void 0 : _q.l1) === null || _r === void 0 ? void 0 : _r.name,
                    l3_category: (_t = (_s = result === null || result === void 0 ? void 0 : result.category_map) === null || _s === void 0 ? void 0 : _s.l3) === null || _t === void 0 ? void 0 : _t.name,
                },
            };
        },
    },
    NOTIFY_PRODUCT: {
        //not getting used
        eventName: "notify.product",
        payloadCreator: (store) => {
            return store;
        },
    },
    COMPARE_VIEW: {
        eventName: "compare.view",
        payloadCreator: (result) => {
            var _a;
            return {
                products_compared: (_a = result === null || result === void 0 ? void 0 : result.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                    return ({
                        product_id: item === null || item === void 0 ? void 0 : item.uid,
                        position: index + 1,
                        product_slug: item === null || item === void 0 ? void 0 : item.slug,
                        product_name: item === null || item === void 0 ? void 0 : item.name,
                        brand: (_a = item === null || item === void 0 ? void 0 : item.brand) === null || _a === void 0 ? void 0 : _a.name,
                        marked_price: {
                            currency: (_c = (_b = item === null || item === void 0 ? void 0 : item.price) === null || _b === void 0 ? void 0 : _b.marked) === null || _c === void 0 ? void 0 : _c.currency_code,
                            min: (_e = (_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.marked) === null || _e === void 0 ? void 0 : _e.min,
                            max: (_g = (_f = item === null || item === void 0 ? void 0 : item.price) === null || _f === void 0 ? void 0 : _f.marked) === null || _g === void 0 ? void 0 : _g.max,
                        },
                        effective_price: {
                            currency: (_j = (_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.effective) === null || _j === void 0 ? void 0 : _j.currency_code,
                            min: (_l = (_k = item === null || item === void 0 ? void 0 : item.price) === null || _k === void 0 ? void 0 : _k.effective) === null || _l === void 0 ? void 0 : _l.min,
                            max: (_o = (_m = item === null || item === void 0 ? void 0 : item.price) === null || _m === void 0 ? void 0 : _m.effective) === null || _o === void 0 ? void 0 : _o.max,
                        },
                    });
                }),
            };
        },
    },
    ADD_TO_COMPARE: {
        //not getting used
        eventName: "compare.add",
        payloadCreator: (store) => {
            return store;
        },
    },
    REMOVE_FROM_COMPARE: {
        //not getting used
        eventName: "compare.remove",
        payloadCreator: (store) => {
            return store;
        },
    },
    ADD_TO_WISHLIST: {
        eventName: "wishlist.add",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            const itemId = parseInt(result === null || result === void 0 ? void 0 : result.id);
            const allItems = [
                ...((_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.items) !== null && _c !== void 0 ? _c : []),
                ...((_f = (_e = (_d = store.product) === null || _d === void 0 ? void 0 : _d.followed_listing) === null || _e === void 0 ? void 0 : _e.items) !== null && _f !== void 0 ? _f : []),
                ...((_j = (_h = (_g = store.collection) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.items) !== null && _j !== void 0 ? _j : []),
                ...((_l = (_k = store.cart) === null || _k === void 0 ? void 0 : _k.cart_items.items) !== null && _l !== void 0 ? _l : []),
                ...(((_m = store.product) === null || _m === void 0 ? void 0 : _m.product_details)
                    ? [store.product.product_details]
                    : []),
            ];
            const collectionId = param.collectionId || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => { var _a; return (item === null || item === void 0 ? void 0 : item.uid) == collectionId || ((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.uid) == collectionId; });
            if (item === null || item === void 0 ? void 0 : item.product) {
                return {
                    item: Object.assign(Object.assign(Object.assign({}, item), item.product), { uid: itemId, price: {
                            effective: {
                                currency_code: (_p = (_o = item === null || item === void 0 ? void 0 : item.price) === null || _o === void 0 ? void 0 : _o.converted) === null || _p === void 0 ? void 0 : _p.currency_code,
                                max: (_r = (_q = item === null || item === void 0 ? void 0 : item.price) === null || _q === void 0 ? void 0 : _q.converted) === null || _r === void 0 ? void 0 : _r.effective,
                            },
                        } }),
                };
            }
            return {
                item: Object.assign(Object.assign({}, item), { uid: itemId }),
            };
        },
    },
    REMOVE_FROM_WISHLIST: {
        eventName: "wishlist.remove",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            const allItems = [
                ...((_c = (_b = (_a = store.products) === null || _a === void 0 ? void 0 : _a.product_lists) === null || _b === void 0 ? void 0 : _b.items) !== null && _c !== void 0 ? _c : []),
                ...((_f = (_e = (_d = store.product) === null || _d === void 0 ? void 0 : _d.followed_listing) === null || _e === void 0 ? void 0 : _e.items) !== null && _f !== void 0 ? _f : []),
                ...((_j = (_h = (_g = store.collection) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.items) !== null && _j !== void 0 ? _j : []),
                ...((_l = (_k = store.cart) === null || _k === void 0 ? void 0 : _k.cart_items.items) !== null && _l !== void 0 ? _l : []),
                ...(((_m = store.product) === null || _m === void 0 ? void 0 : _m.product_details)
                    ? [store.product.product_details]
                    : []),
            ];
            const collectionId = param.collectionId || "";
            const item = allItems === null || allItems === void 0 ? void 0 : allItems.find((item) => { var _a; return (item === null || item === void 0 ? void 0 : item.uid) == collectionId || ((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.uid) == collectionId; });
            if (item === null || item === void 0 ? void 0 : item.product) {
                return {
                    item: Object.assign(Object.assign(Object.assign({}, item), item.product), { price: {
                            effective: {
                                max: (_p = (_o = item === null || item === void 0 ? void 0 : item.price) === null || _o === void 0 ? void 0 : _o.converted) === null || _p === void 0 ? void 0 : _p.effective,
                            },
                        } }),
                };
            }
            return { item };
        },
    },
    VIEW_WISHLIST: {
        eventName: "wishlist.view",
        payloadCreator: (result, param) => {
            var _a;
            return {
                collection_type: param === null || param === void 0 ? void 0 : param.collectionType,
                items: (_a = result === null || result === void 0 ? void 0 : result.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                    return ({
                        product_id: item === null || item === void 0 ? void 0 : item.uid,
                        position: index + 1,
                        product_name: item === null || item === void 0 ? void 0 : item.name,
                        product_slug: item === null || item === void 0 ? void 0 : item.slug,
                        brand: (_a = item === null || item === void 0 ? void 0 : item.brand) === null || _a === void 0 ? void 0 : _a.name,
                        marked_price: {
                            currency: (_c = (_b = item === null || item === void 0 ? void 0 : item.price) === null || _b === void 0 ? void 0 : _b.marked) === null || _c === void 0 ? void 0 : _c.currency_code,
                            min: (_e = (_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.marked) === null || _e === void 0 ? void 0 : _e.min,
                            max: (_g = (_f = item === null || item === void 0 ? void 0 : item.price) === null || _f === void 0 ? void 0 : _f.marked) === null || _g === void 0 ? void 0 : _g.max,
                        },
                        effective_price: {
                            currency: (_j = (_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.effective) === null || _j === void 0 ? void 0 : _j.currency_code,
                            min: (_l = (_k = item === null || item === void 0 ? void 0 : item.price) === null || _k === void 0 ? void 0 : _k.effective) === null || _l === void 0 ? void 0 : _l.min,
                            max: (_o = (_m = item === null || item === void 0 ? void 0 : item.price) === null || _m === void 0 ? void 0 : _m.effective) === null || _o === void 0 ? void 0 : _o.max,
                        },
                    });
                }),
            };
        },
    },
    VIEW_CART: {
        eventName: "cart.view",
        payloadCreator: (result, param, store, oldStore) => {
            const items = result === null || result === void 0 ? void 0 : result.items;
            let allProducts = items === null || items === void 0 ? void 0 : items.map((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                const { article, availability, product, price, discount, delivery_promise } = item;
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
                    delivery_promise,
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
                const fulfillmentOptionSlug = (pro === null || pro === void 0 ? void 0 : pro.fulfillment_option_slug) || "";
                const item = (allProducts === null || allProducts === void 0 ? void 0 : allProducts.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == pro.item_id; })) || {};
                const { article, availability, product, price, discount, quantity, delivery_promise } = item;
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
                    slug: product === null || product === void 0 ? void 0 : product.slug,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    quantity: {
                        current: quantity,
                    },
                    uid: pro === null || pro === void 0 ? void 0 : pro.item_id,
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
                    fulfillment_option_slug: fulfillmentOptionSlug,
                    delivery_promise,
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
            const allItems = (_b = (_a = oldStore === null || oldStore === void 0 ? void 0 : oldStore.cart) === null || _a === void 0 ? void 0 : _a.cart_items) === null || _b === void 0 ? void 0 : _b.items;
            let data = (_d = (_c = param === null || param === void 0 ? void 0 : param.updateCartRequestInput) === null || _c === void 0 ? void 0 : _c.items.map((items) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                if (!allItems)
                    return;
                const fulfillmentOptionSlug = (items === null || items === void 0 ? void 0 : items.fulfillment_option_slug) || "";
                const item = allItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) === (items === null || items === void 0 ? void 0 : items.item_id); });
                if (!item)
                    return;
                const { article, availability, product, price, price_per_unit, quantity: oldQuantity, discount, delivery_promise, } = item;
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
                    slug: product === null || product === void 0 ? void 0 : product.slug,
                    item_code: product === null || product === void 0 ? void 0 : product.item_code,
                    price: price === null || price === void 0 ? void 0 : price.converted,
                    price_per_unit: price_per_unit,
                    quantity: {
                        current: oldQuantity,
                    },
                    uid: product === null || product === void 0 ? void 0 : product.uid,
                    store: {
                        uid: (_h = article === null || article === void 0 ? void 0 : article.store) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    seller: {
                        uid: (_j = article === null || article === void 0 ? void 0 : article.seller) === null || _j === void 0 ? void 0 : _j.uid,
                    },
                    size: items === null || items === void 0 ? void 0 : items.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    discount: discount,
                    fulfillment_option_slug: fulfillmentOptionSlug,
                    delivery_promise,
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
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e;
            const resultItems = (_a = result === null || result === void 0 ? void 0 : result.cart) === null || _a === void 0 ? void 0 : _a.items;
            const oldItems = (_c = (_b = oldStore === null || oldStore === void 0 ? void 0 : oldStore.cart) === null || _b === void 0 ? void 0 : _b.cart_items) === null || _c === void 0 ? void 0 : _c.items;
            let operation;
            const data = (_d = param === null || param === void 0 ? void 0 : param.updateCartRequestInput.items.map((items) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                if (!resultItems)
                    return;
                const fulfillmentOptionSlug = (items === null || items === void 0 ? void 0 : items.fulfillment_option_slug) || "";
                const item = resultItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == (items === null || items === void 0 ? void 0 : items.item_id); });
                const oldItem = oldItems.find((i) => { var _a; return ((_a = i === null || i === void 0 ? void 0 : i.product) === null || _a === void 0 ? void 0 : _a.uid) == (items === null || items === void 0 ? void 0 : items.item_id); });
                if (!item)
                    return;
                const { article, availability, product, price, price_per_unit, delivery_promise, } = item;
                const { quantity: oldQuantity } = oldItem;
                operation =
                    oldQuantity < (items === null || items === void 0 ? void 0 : items.quantity)
                        ? 'increment_quantity'
                        : 'decrement_quantity';
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
                        uid: (_h = article === null || article === void 0 ? void 0 : article.store) === null || _h === void 0 ? void 0 : _h.uid,
                    },
                    seller: {
                        uid: (_j = article === null || article === void 0 ? void 0 : article.seller) === null || _j === void 0 ? void 0 : _j.uid,
                    },
                    size: items === null || items === void 0 ? void 0 : items.item_size,
                    out_of_stock: availability === null || availability === void 0 ? void 0 : availability.out_of_stock,
                    valid: availability === null || availability === void 0 ? void 0 : availability.is_valid,
                    fulfillment_option_slug: fulfillmentOptionSlug,
                    delivery_promise,
                };
            })) === null || _d === void 0 ? void 0 : _d.filter(Boolean);
            return {
                cart_id: (_e = result === null || result === void 0 ? void 0 : result.cart) === null || _e === void 0 ? void 0 : _e.id,
                products: data,
                operation: operation
            };
        },
    },
    CART_SHARE: {
        eventName: "cart.share",
        payloadCreator: (result, param) => {
            var _a;
            return {
                cart_id: (_a = param === null || param === void 0 ? void 0 : param.getShareCartLinkRequestInput) === null || _a === void 0 ? void 0 : _a.id,
                share_url: result === null || result === void 0 ? void 0 : result.share_url,
                token: result === null || result === void 0 ? void 0 : result.token,
            };
        },
    },
    COUPONS_VIEW: {
        eventName: "coupons.view",
        payloadCreator: (result, param, store) => {
            var _a, _b, _c;
            const cartDetails = (_a = store === null || store === void 0 ? void 0 : store.cart) === null || _a === void 0 ? void 0 : _a.cart_items;
            return {
                cart_id: (param === null || param === void 0 ? void 0 : param.id) || (cartDetails === null || cartDetails === void 0 ? void 0 : cartDetails.id),
                checkout_mode: (cartDetails === null || cartDetails === void 0 ? void 0 : cartDetails.checkout_mode) || 'self',
                buy_now: param === null || param === void 0 ? void 0 : param.buyNow,
                restrict_checkout: cartDetails === null || cartDetails === void 0 ? void 0 : cartDetails.restrict_checkout,
                currency: (_b = cartDetails === null || cartDetails === void 0 ? void 0 : cartDetails.currency) === null || _b === void 0 ? void 0 : _b.code,
                coupons: ((_c = result === null || result === void 0 ? void 0 : result.available_coupon_list) === null || _c === void 0 ? void 0 : _c.map((coupon) => ({
                    coupon_code: coupon === null || coupon === void 0 ? void 0 : coupon.coupon_code,
                    coupon_type: coupon === null || coupon === void 0 ? void 0 : coupon.coupon_type,
                    coupon_amount: coupon === null || coupon === void 0 ? void 0 : coupon.coupon_amount,
                    coupon_title: coupon === null || coupon === void 0 ? void 0 : coupon.title,
                    coupon_description: coupon === null || coupon === void 0 ? void 0 : coupon.description,
                    is_applied: coupon === null || coupon === void 0 ? void 0 : coupon.is_applied,
                    is_applicable: coupon === null || coupon === void 0 ? void 0 : coupon.is_applicable,
                }))) || [],
            };
        },
    },
    COUPON_APPLY: {
        eventName: "coupon.apply",
        payloadCreator: (result) => {
            return result;
        }
    },
    COUPON_REMOVE: {
        eventName: "coupon.remove",
        payloadCreator: (result) => {
            return result;
        }
    },
    PROMOTIONS_VIEW: {
        eventName: "promotions.view",
        payloadCreator: (result, param) => {
            var _a;
            return {
                cart_id: param === null || param === void 0 ? void 0 : param.cartId,
                promotions: (_a = result === null || result === void 0 ? void 0 : result.available_promotions) === null || _a === void 0 ? void 0 : _a.map((promotion) => {
                    var _a;
                    return ({
                        id: promotion === null || promotion === void 0 ? void 0 : promotion.id,
                        promotion_name: promotion === null || promotion === void 0 ? void 0 : promotion.promotion_name,
                        promotion_type: promotion === null || promotion === void 0 ? void 0 : promotion.promotion_type,
                        description: promotion === null || promotion === void 0 ? void 0 : promotion.description,
                        offer_text: promotion === null || promotion === void 0 ? void 0 : promotion.offer_text,
                        discount_rules: promotion === null || promotion === void 0 ? void 0 : promotion.discount_rules,
                        free_gift_items: (_a = promotion === null || promotion === void 0 ? void 0 : promotion.free_gift_items) === null || _a === void 0 ? void 0 : _a.map((item) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                            return ({
                                item_id: item === null || item === void 0 ? void 0 : item.item_id,
                                item_name: item === null || item === void 0 ? void 0 : item.item_name,
                                item_slug: item === null || item === void 0 ? void 0 : item.item_slug,
                                marked_price: {
                                    min: (_b = (_a = item === null || item === void 0 ? void 0 : item.item_price_details) === null || _a === void 0 ? void 0 : _a.marked) === null || _b === void 0 ? void 0 : _b.min,
                                    max: (_d = (_c = item === null || item === void 0 ? void 0 : item.item_price_details) === null || _c === void 0 ? void 0 : _c.marked) === null || _d === void 0 ? void 0 : _d.max,
                                },
                                effective_price: {
                                    min: (_f = (_e = item === null || item === void 0 ? void 0 : item.item_price_details) === null || _e === void 0 ? void 0 : _e.effective) === null || _f === void 0 ? void 0 : _f.min,
                                    max: (_h = (_g = item === null || item === void 0 ? void 0 : item.item_price_details) === null || _g === void 0 ? void 0 : _g.effective) === null || _h === void 0 ? void 0 : _h.max,
                                },
                                currency: (_j = item === null || item === void 0 ? void 0 : item.item_price_details) === null || _j === void 0 ? void 0 : _j.currency,
                                size: item === null || item === void 0 ? void 0 : item.size,
                            });
                        }),
                    });
                }),
            };
        },
    },
    FAQ_CATEGORIES_VIEW: {
        eventName: "faq_categories.view",
        payloadCreator: (result) => {
            var _a;
            return {
                faq_categories: (_a = result === null || result === void 0 ? void 0 : result.categories) === null || _a === void 0 ? void 0 : _a.map((category) => ({
                    id: category === null || category === void 0 ? void 0 : category.id,
                    slug: category === null || category === void 0 ? void 0 : category.slug,
                    title: category === null || category === void 0 ? void 0 : category.title,
                    description: category === null || category === void 0 ? void 0 : category.description,
                    children: category === null || category === void 0 ? void 0 : category.children,
                    position: category === null || category === void 0 ? void 0 : category.index,
                })),
            };
        },
    },
    FAQS_VIEW: {
        eventName: "faqs.view",
        payloadCreator: (result, param) => {
            var _a;
            return {
                faq_category_slug: param === null || param === void 0 ? void 0 : param.slug,
                faqs: (_a = result === null || result === void 0 ? void 0 : result.faqs) === null || _a === void 0 ? void 0 : _a.map((faq, index) => ({
                    id: faq === null || faq === void 0 ? void 0 : faq.id,
                    slug: faq === null || faq === void 0 ? void 0 : faq.slug,
                    question: faq === null || faq === void 0 ? void 0 : faq.question,
                    answer: faq === null || faq === void 0 ? void 0 : faq.answer,
                    position: index + 1,
                })),
            };
        },
    },
    ORDER_CHECKEDOUT: {
        eventName: "order.checkedout",
        payloadCreator: (result, param, store, oldStore) => {
            var _a, _b, _c, _d, _e, _f;
            const order_id = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.checkoutCart) === null || _b === void 0 ? void 0 : _b.order_id;
            const checkout_data = (_e = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.checkoutCart) === null || _d === void 0 ? void 0 : _d.cart) !== null && _e !== void 0 ? _e : {};
            const eventData = {};
            const { items, id, breakup_values, checkout_mode } = checkout_data;
            eventData.order_id = order_id ? order_id : "";
            eventData.breakup_values_raw = breakup_values === null || breakup_values === void 0 ? void 0 : breakup_values.raw;
            eventData.cart_id = id;
            eventData.breakup_values = breakup_values;
            eventData.checkout_mode = checkout_mode;
            eventData.products =
                (_f = items === null || items === void 0 ? void 0 : items.map((item) => {
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
                })) !== null && _f !== void 0 ? _f : [];
            return eventData;
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
    ORDER_VIEW: {
        eventName: "order.view",
        payloadCreator: (result, param) => {
            var _a;
            return {
                order_id: param === null || param === void 0 ? void 0 : param.orderId,
                shipments: ((_a = result === null || result === void 0 ? void 0 : result.shipments) === null || _a === void 0 ? void 0 : _a.map((shipment) => {
                    var _a, _b;
                    return ({
                        shipment_id: shipment === null || shipment === void 0 ? void 0 : shipment.shipment_id,
                        current_status: (_a = shipment === null || shipment === void 0 ? void 0 : shipment.shipment_status) === null || _a === void 0 ? void 0 : _a.title,
                        delivery_mode: shipment === null || shipment === void 0 ? void 0 : shipment.order_type,
                        expected_delivery_date: shipment === null || shipment === void 0 ? void 0 : shipment.delivery_date,
                        payment_methods: (_b = shipment === null || shipment === void 0 ? void 0 : shipment.payment_info) === null || _b === void 0 ? void 0 : _b.map((payment) => ({
                            payment_mode: payment === null || payment === void 0 ? void 0 : payment.payment_mode,
                            payment_status: payment === null || payment === void 0 ? void 0 : payment.status,
                            amount: payment === null || payment === void 0 ? void 0 : payment.amount,
                        })),
                    });
                })) || [],
            };
        },
    },
    ORDER_TRACKING_VIEW: {
        //not getting used
        eventName: "order_tracking.view",
        payloadCreator: (store) => {
            return store;
        },
    },
    ORDER_INITIALCHECKOUT: {
        //not getting used
        eventName: "order.initialCheckout",
        payloadCreator: (store) => {
            return store;
        },
    },
    REFUND_SUCCESS: {
        eventName: "refund.success",
        payloadCreator: (result, param) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const { updateShipmentStatusRequestInput: refund_data = {} } = param;
            const orderMeta = (_a = refund_data.statuses) === null || _a === void 0 ? void 0 : _a[0];
            if (!orderMeta || !(orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.shipments)) {
                return;
            }
            const shipmentId = Object.keys(orderMeta.shipments)[0];
            if (!shipmentId) {
                return;
            }
            const eventData = {
                status: orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.status,
                bags: (_c = (_b = orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.shipments) === null || _b === void 0 ? void 0 : _b[shipmentId]) === null || _c === void 0 ? void 0 : _c.bags,
                reason: ((_e = (_d = orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.shipments) === null || _d === void 0 ? void 0 : _d[shipmentId]) === null || _e === void 0 ? void 0 : _e.reason)
                    ? {
                        uid: "" + ((_h = (_g = (_f = orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.shipments) === null || _f === void 0 ? void 0 : _f[shipmentId]) === null || _g === void 0 ? void 0 : _g.reason) === null || _h === void 0 ? void 0 : _h[0]),
                        message: ((_k = (_j = orderMeta === null || orderMeta === void 0 ? void 0 : orderMeta.shipments) === null || _j === void 0 ? void 0 : _j[shipmentId]) === null || _k === void 0 ? void 0 : _k.reason_text) || "",
                    }
                    : {},
                shipment_id: shipmentId,
            };
            return eventData;
        },
    },
    SEARCH_PRODUCTS: {
        eventName: "search.products",
        payloadCreator: (result, param, store) => {
            return {
                items: result === null || result === void 0 ? void 0 : result.items,
                search_text: param === null || param === void 0 ? void 0 : param.query,
                search_id: param === null || param === void 0 ? void 0 : param.search_id,
                source: "autocomplete",
            };
        },
    },
    PINCODE_SERVICEABILITY: {
        //not getting used
        eventName: "pincode.serviceablility",
        payloadCreator: (store) => {
            return store;
        },
    },
    LOCATION_DETAILS: {
        eventName: "root.location_details",
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
    PRODUCT_PRICE: {
        eventName: "product.price",
        payloadCreator: (result, param) => {
            return Object.assign(Object.assign({}, result), { size: param === null || param === void 0 ? void 0 : param.size, slug: param === null || param === void 0 ? void 0 : param.slug });
        },
    },
    DELIVERY_PROMISE: {
        eventName: "logistic.deliveryPromise",
        payloadCreator: (store) => {
            return store;
        },
    },
    CONTACT_US_SUBMIT: {
        eventName: "contact_us.submit",
        payloadCreator: (result, param) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const ticket = (_a = result === null || result === void 0 ? void 0 : result.ticket) !== null && _a !== void 0 ? _a : result;
            return {
                form_slug: param === null || param === void 0 ? void 0 : param.slug,
                support_ticket: {
                    ticket_id: ticket === null || ticket === void 0 ? void 0 : ticket._id,
                    category: {
                        key: (_b = ticket === null || ticket === void 0 ? void 0 : ticket.category) === null || _b === void 0 ? void 0 : _b.key,
                        display: (_c = ticket === null || ticket === void 0 ? void 0 : ticket.category) === null || _c === void 0 ? void 0 : _c.display,
                    },
                    content: {
                        title: (_d = ticket === null || ticket === void 0 ? void 0 : ticket.content) === null || _d === void 0 ? void 0 : _d.title,
                        description: (_e = ticket === null || ticket === void 0 ? void 0 : ticket.content) === null || _e === void 0 ? void 0 : _e.description,
                    },
                    context: {
                        company_id: (_f = ticket === null || ticket === void 0 ? void 0 : ticket.context) === null || _f === void 0 ? void 0 : _f.company_id,
                        application_id: (_g = ticket === null || ticket === void 0 ? void 0 : ticket.context) === null || _g === void 0 ? void 0 : _g.application_id,
                    }
                },
            };
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
export function emitFPIEvent(event, params, result, oldStore, dispatch, options, eventEmitter) {
    var _a, _b, _c, _d;
    if (!(event === null || event === void 0 ? void 0 : event.eventName) || !(event === null || event === void 0 ? void 0 : event.payloadCreator) || (options === null || options === void 0 ? void 0 : options.skipFpiEvent)) {
        return true;
    }
    if (isRunningOnClient()) {
        let { eventName, payloadCreator } = event;
        const storeSnapshot = (_d = (_c = (_b = (_a = window.fpi) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.getState) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : {};
        let eventPayload = typeof payloadCreator === "function"
            ? payloadCreator(result, params, storeSnapshot, oldStore)
            : payloadCreator;
        eventName = handleDynamicEventName(event, eventPayload, params);
        if (!eventPayload) {
            eventPayload = {};
        }
        eventPayload = getEventPayloadWithUtmParams(eventPayload, storeSnapshot);
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
export function getPrimaryVerifiedValue(items = []) {
    if (!Array.isArray(items) || items.length === 0)
        return null;
    return (items.find((x) => (x === null || x === void 0 ? void 0 : x.primary) === true && (x === null || x === void 0 ? void 0 : x.verified) === true) ||
        items[0]);
}
export function getEventPayloadWithUtmParams(payload, store) {
    let utm_params, f_params = {};
    let eventPayload = Object.assign({}, payload);
    try {
        const currentURL = window.location.href;
        const parsed = new URL(currentURL);
        const searchParams = parsed.searchParams;
        utm_params = {
            utm_campaign: searchParams.get("utm_campaign") || "",
            utm_content: searchParams.get("utm_content") || "",
            utm_medium: searchParams.get("utm_medium") || "",
            utm_source: searchParams.get("utm_source") || "",
            utm_term: searchParams.get("utm_term") || "",
            utm_id: searchParams.get("utm_id") || "",
            utm_source_platform: searchParams.get("utm_source_platform") || "",
            utm_creative_format: searchParams.get("utm_creative_format") || "",
            utm_marketing_tactic: searchParams.get("utm_marketing_tactic") || "",
        };
        f_params = {
            f_campaign: searchParams.get("f_campaign") || "",
            f_content: decodeURIComponent(searchParams.get("f_content") || ""),
            f_medium: searchParams.get("f_medium") || "",
            f_source: searchParams.get("f_source") || "",
            f_term: searchParams.get("f_term") || "",
            f_id: searchParams.get("f_id") || "",
            f_source_platform: searchParams.get("f_source_platform") || "",
            f_creative_format: searchParams.get("f_creative_format") || "",
            f_marketing_tactic: searchParams.get("f_marketing_tactic") || "",
        };
    }
    catch (error) {
        console.warn("Could not parse utm params! See below error!");
        console.error(error);
    }
    // Append UTM params with event payload
    eventPayload.utm_params = utm_params;
    eventPayload.f_params = f_params;
    eventPayload.user = store.auth.user_data;
    return eventPayload;
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
            const eventPayload = getEventPayloadWithUtmParams(payload, storeInitialData);
            defaultFPIEmit(eventName, eventPayload);
        }
    });
}
//# sourceMappingURL=FPI-events.js.map