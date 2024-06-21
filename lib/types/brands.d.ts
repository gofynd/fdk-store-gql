import { CommonAsyncLoadingTypes } from ".";
export type BrandsType = Partial<any & CommonAsyncLoadingTypes>;
export type BrandsSlice = {
    brands: BrandsType;
    brand: any;
};
