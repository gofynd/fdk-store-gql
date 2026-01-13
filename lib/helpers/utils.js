/**
 * Helper function to check if a value is a valid non-empty object
 */
export function isValidObject(value) {
    return value && typeof value === "object" && Object.keys(value).length > 0;
}
/**
 * Helper function to parse cookie value (string or object) into an object
 */
export function parseCookieValue(cookieValue) {
    // Ignore falsy values and arrays, return empty object
    if (!cookieValue || Array.isArray(cookieValue)) {
        return {};
    }
    if (typeof cookieValue === "string") {
        try {
            const parsed = JSON.parse(cookieValue);
            // Ignore arrays, return empty object
            if (Array.isArray(parsed)) {
                return {};
            }
            return parsed;
        }
        catch (e) {
            return {};
        }
    }
    if (isValidObject(cookieValue)) {
        return cookieValue;
    }
    return {};
}
export function parseFilters(obj) {
    return Object.entries(obj).reduce((str, [key, value]) => {
        if (key.startsWith("__")) {
            return str;
        }
        if (str.length != 0) {
            str += ":::";
        }
        if (Array.isArray(value)) {
            str += `${key}:${value.join("||")}`;
        }
        else if (value) {
            str += `${key}:${value.toString()}`;
        }
        return str;
    }, "");
}
export function isRunningOnClient() {
    if (typeof window !== "undefined") {
        return globalThis === window;
    }
    return false;
}
export function getCookie(key) {
    if (isRunningOnClient()) {
        const name = key + "=";
        const decoded = decodeURIComponent(document.cookie);
        const cArr = decoded.split("; ");
        let res;
        cArr.forEach((val) => {
            if (val.indexOf(name) === 0)
                res = val.substring(name.length);
        });
        if (!res) {
            return "";
        }
        try {
            return JSON.parse(res);
        }
        catch (e) {
            return res || null;
        }
    }
    else {
        return null;
    }
}
export function setCookie(key, value, exp, domain, path) {
    if (isRunningOnClient()) {
        value = typeof value === "object" ? JSON.stringify(value) : value;
        let date = new Date();
        date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${key}=${encodeURIComponent(value)}; ${exp !== null && expires}; domain=${domain ? domain : ""}; path=${path ? path : "/"}; Secure; SameSite=None;`;
    }
}
export function removeCookie(name) {
    if (isRunningOnClient()) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}
export function cartItemsCount(cart) {
    var _a, _b;
    const count = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.items) === null || _a === void 0 ? void 0 : _a.reduce((total, item) => {
        if (item.quantity) {
            return total + item.quantity;
        }
        return total;
    }, 0)) !== null && _b !== void 0 ? _b : 0;
    return count;
}
export function generateUniqueSearchKey() {
    // generate a unique identifier for search key without uuid
    const timestamp = new Date().getTime().toString(36); // Convert timestamp to base36 (alphanumeric)
    const randomValue = Math.random().toString(36).substring(2, 10); // Random alphanumeric string
    const uniqueKey = `${timestamp}-${randomValue}`;
    return uniqueKey;
}
export function addSearchFyndQueryInAction(searchText, action, index, searchId = '') {
    var _a, _b;
    try {
        let newAction = Object.assign({}, action);
        let query = (_b = (_a = newAction.page) === null || _a === void 0 ? void 0 : _a.query) !== null && _b !== void 0 ? _b : {};
        query.f_content = encodeURIComponent(searchId
            ? btoa(`${searchText}:::${index + 1}:::${searchId}`)
            : btoa(`${searchText}:::${index + 1}`));
        query.f_medium = 'search';
        newAction.page = Object.assign(Object.assign({}, newAction.page), { query });
        return newAction;
    }
    catch (err) {
        console.error('Error adding Fynd query parameters:', err);
        return action;
    }
}
export function addMarketingParamsInAction(action, marketingParams) {
    var _a, _b;
    try {
        let newAction = Object.assign({}, action);
        let query = (_b = (_a = newAction.page) === null || _a === void 0 ? void 0 : _a.query) !== null && _b !== void 0 ? _b : {};
        // Dynamically add all marketing parameters
        if (marketingParams && typeof marketingParams === 'object') {
            Object.keys(marketingParams).forEach(key => {
                if (marketingParams[key] !== undefined && marketingParams[key] !== null) {
                    query[key] = marketingParams[key];
                }
            });
        }
        newAction.page = Object.assign(Object.assign({}, newAction.page), { query });
        return newAction;
    }
    catch (err) {
        console.error('Error adding marketing parameters: ', err);
        return action;
    }
}
//# sourceMappingURL=utils.js.map