import { CommonAsyncLoadingTypes } from ".";
export type AddressItemType = Partial<any & CommonAsyncLoadingTypes>;
export type AddressSlice = {
    address: any;
    address_item: AddressItemType;
};
export type UpdateAddress = Partial<any & any>;
