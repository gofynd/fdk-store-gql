export declare function parseFilters(obj: any): string;
export declare function createJWTToken(jsonObj: any, secret: any): string;
export declare function isRunningOnClient(): Boolean;
export declare function getCookie(key: string): any | null;
export declare function setCookie(key: string, value: any, exp: number, domain?: string, path?: string): void;
export declare function removeCookie(name: string): void;
export declare function cartItemsCount(cart: any): any;
export declare function generateUniqueSearchKey(): string;
export declare function addSearchFyndQueryInAction(searchText: any, action: any, index: any, searchId?: string): any;
