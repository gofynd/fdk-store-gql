/**
 * Helper function to check if a value is a valid non-empty object
 */
export declare function isValidObject(value: any): boolean;
/**
 * Helper function to parse cookie value (string or object) into an object
 */
export declare function parseCookieValue(cookieValue: any): Record<string, any>;
export declare function parseFilters(obj: any): string;
export declare function isRunningOnClient(): Boolean;
export declare function getCookie(key: string): any | null;
export declare function setCookie(key: string, value: any, exp: number, domain?: string, path?: string): void;
export declare function removeCookie(name: string): void;
export declare function cartItemsCount(cart: any): any;
export declare function generateUniqueSearchKey(): string;
export declare function addSearchFyndQueryInAction(searchText: any, action: any, index: any, searchId?: string): any;
export declare function addMarketingParamsInAction(action: any, marketingParams: any): any;
