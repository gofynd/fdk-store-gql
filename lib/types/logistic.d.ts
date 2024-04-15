import { CommonAsyncLoadingTypes } from ".";
export type Countries = Partial<any & CommonAsyncLoadingTypes>;
export type ProductTAT = Partial<any & CommonAsyncLoadingTypes>;
export type PincodeDetails = Partial<any & CommonAsyncLoadingTypes>;
export type LogisticSlice = {
    countries: Countries;
    product_tat: ProductTAT;
    pincode_details: PincodeDetails;
};
