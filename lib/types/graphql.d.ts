export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    JSON: {
        input: any;
        output: any;
    };
};
export declare enum Action {
    Merge = "MERGE",
    Replace = "REPLACE"
}
export type ActionPage = {
    __typename?: 'ActionPage';
    params?: Maybe<Scalars['JSON']['output']>;
    query?: Maybe<Scalars['JSON']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ActionQuery = {
    __typename?: 'ActionQuery';
    product_slug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ActiveRefundTransferModes = {
    __typename?: 'ActiveRefundTransferModes';
    data: Array<Maybe<TransferMode>>;
};
export type AddBeneficiaryDetailsOtpRequestInput = {
    details: BankDetailsForOtpInput;
    order_id: Scalars['String']['input'];
};
export type AddBeneficiaryDetailsRequestInput = {
    delights: Scalars['Boolean']['input'];
    details: DetailsInput;
    order_id: Scalars['String']['input'];
    otp?: InputMaybe<Scalars['String']['input']>;
    request_id?: InputMaybe<Scalars['String']['input']>;
    shipment_id: Scalars['String']['input'];
    transfer_mode: Scalars['String']['input'];
};
export type AddBeneficiaryViaOtpVerificationRequestInput = {
    hash_key: Scalars['String']['input'];
    otp: Scalars['String']['input'];
    request_id: Scalars['String']['input'];
};
export type AddBeneficiaryViaOtpVerificationResponse = {
    __typename?: 'AddBeneficiaryViaOtpVerificationResponse';
    message: Scalars['String']['output'];
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type AddCartDetailResponse = {
    __typename?: 'AddCartDetailResponse';
    cart?: Maybe<Cart>;
    message?: Maybe<Scalars['String']['output']>;
    partial?: Maybe<Scalars['Boolean']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type AddCartRequestInput = {
    items?: InputMaybe<Array<InputMaybe<CartItem>>>;
    new_cart?: InputMaybe<Scalars['Boolean']['input']>;
};
export type AddTicketPayloadInput = {
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    category: Scalars['String']['input'];
    content: TicketContentInput;
    created_by?: InputMaybe<Scalars['JSON']['input']>;
    priority?: InputMaybe<PriorityEnum>;
    status?: InputMaybe<Scalars['String']['input']>;
    subscribers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type Address = {
    __typename?: 'Address';
    address?: Maybe<Scalars['String']['output']>;
    address_type?: Maybe<Scalars['String']['output']>;
    area?: Maybe<Scalars['String']['output']>;
    area_code?: Maybe<Scalars['String']['output']>;
    area_code_slug?: Maybe<Scalars['String']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    country_code?: Maybe<Scalars['String']['output']>;
    country_iso_code?: Maybe<Scalars['String']['output']>;
    country_phone_code?: Maybe<Scalars['String']['output']>;
    created_by_user_id?: Maybe<Scalars['String']['output']>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    geo_location?: Maybe<GeoLocation>;
    google_map_point?: Maybe<Scalars['JSON']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    landmark?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    sector?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    user_id?: Maybe<Scalars['String']['output']>;
};
export type Address2Input = {
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    address?: InputMaybe<Scalars['String']['input']>;
    address_type?: InputMaybe<Scalars['String']['input']>;
    area?: InputMaybe<Scalars['String']['input']>;
    area_code?: InputMaybe<Scalars['String']['input']>;
    area_code_slug?: InputMaybe<Scalars['String']['input']>;
    checkout_mode?: InputMaybe<Scalars['String']['input']>;
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    country_iso_code?: InputMaybe<Scalars['String']['input']>;
    country_phone_code?: InputMaybe<Scalars['String']['input']>;
    created_by_user_id?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    geo_location?: InputMaybe<GeoLocationInput>;
    google_map_point?: InputMaybe<Scalars['JSON']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    is_active?: InputMaybe<Scalars['Boolean']['input']>;
    is_default_address?: InputMaybe<Scalars['Boolean']['input']>;
    landmark?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    user_id?: InputMaybe<Scalars['String']['input']>;
};
export type AddressInput = {
    addressline1: Scalars['String']['input'];
    addressline2?: InputMaybe<Scalars['String']['input']>;
    city: Scalars['String']['input'];
    land_mark?: InputMaybe<Scalars['String']['input']>;
    ownership_type?: InputMaybe<Scalars['String']['input']>;
    pincode: Scalars['String']['input'];
    state: Scalars['String']['input'];
};
export type AddressResponse = {
    __typename?: 'AddressResponse';
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    cart_id?: Maybe<Scalars['Int']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    common_config?: Maybe<CartCommonConfig>;
    coupon?: Maybe<Coupon>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<ShipmentPromise>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    notification?: Maybe<Scalars['JSON']['output']>;
    pan_config?: Maybe<Scalars['JSON']['output']>;
    pan_no?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    staff_user_id?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type Address_As_Per_IdInput = {
    addressline1: Scalars['String']['input'];
    addressline2?: InputMaybe<Scalars['String']['input']>;
    city: Scalars['String']['input'];
    land_mark?: InputMaybe<Scalars['String']['input']>;
    ownership_type?: InputMaybe<Scalars['String']['input']>;
    pincode: Scalars['String']['input'];
    state: Scalars['String']['input'];
};
export type Addresses = {
    __typename?: 'Addresses';
    address?: Maybe<Array<Maybe<Address>>>;
    pii_masking?: Maybe<Scalars['Boolean']['output']>;
};
export type AggregatorsConfigDetail = {
    __typename?: 'AggregatorsConfigDetail';
    ccavenue?: Maybe<CcAvenueAggregatorConfig>;
    env: Scalars['String']['output'];
    juspay?: Maybe<JusPayAggregatorConfig>;
    mswipe?: Maybe<MSwipeAggregatorConfig>;
    payumoney?: Maybe<PayuMoneyAggregatorConfig>;
    potlee?: Maybe<PotleeAggregatorConfig>;
    razorpay?: Maybe<RazorPayAggregatorConfig>;
    rupifi?: Maybe<RupifyAggregatorConfig>;
    simpl?: Maybe<SimplAggregatorConfig>;
    stripe?: Maybe<StripeAggregatorConfig>;
    success: Scalars['Boolean']['output'];
};
export type AmountAvailable = {
    __typename?: 'AmountAvailable';
    currency?: Maybe<Scalars['String']['output']>;
    formatted_value?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type Announcements = {
    __typename?: 'Announcements';
    announcements?: Maybe<Scalars['JSON']['output']>;
    refresh_pages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    refresh_rate?: Maybe<Scalars['Int']['output']>;
};
export type AppBasicDetails = {
    __typename?: 'AppBasicDetails';
    app_type?: Maybe<AppType>;
    auth?: Maybe<ApplicationAuth>;
    banner?: Maybe<SecureUrl>;
    cache_ttl?: Maybe<Scalars['Int']['output']>;
    channel_type?: Maybe<Scalars['String']['output']>;
    company_id?: Maybe<Scalars['Int']['output']>;
    cors?: Maybe<ApplicationCors>;
    created_at?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    domain?: Maybe<Domain>;
    domains?: Maybe<Array<Maybe<Domain>>>;
    favicon?: Maybe<SecureUrl>;
    id?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    is_internal?: Maybe<Scalars['Boolean']['output']>;
    logo?: Maybe<SecureUrl>;
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    mobile_logo?: Maybe<SecureUrl>;
    name: Scalars['String']['output'];
    /** The unique identifier (24-digit Mongo Object ID) of owner who owns the application */
    owner?: Maybe<Scalars['String']['output']>;
    redirections?: Maybe<Array<Maybe<ApplicationRedirections>>>;
    /** Random generated fix length string for sales channel. It is required and auto-generated. */
    token?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of sales channel updation */
    updated_at?: Maybe<Scalars['String']['output']>;
    website?: Maybe<ApplicationWebsite>;
};
export type AppCredentials = {
    __typename?: 'AppCredentials';
    api_key?: Maybe<Scalars['String']['output']>;
    application_id?: Maybe<Scalars['String']['output']>;
};
export type AppCurrencyInfo = {
    __typename?: 'AppCurrencyInfo';
    application?: Maybe<Scalars['String']['output']>;
    default_currency?: Maybe<DefaultCurrency>;
    supported_currency?: Maybe<Array<Maybe<Currency>>>;
};
export type AppFeature = {
    __typename?: 'AppFeature';
    app?: Maybe<Scalars['String']['output']>;
    cart?: Maybe<CartFeature>;
    common?: Maybe<CommonFeature>;
    created_at?: Maybe<Scalars['String']['output']>;
    home_page?: Maybe<HomePageFeature>;
    id?: Maybe<Scalars['String']['output']>;
    landing_page?: Maybe<LandingPageFeature>;
    order?: Maybe<OrderFeature>;
    pcr?: Maybe<PcrFeature>;
    product_detail?: Maybe<ProductDetailFeature>;
    qr?: Maybe<QrFeature>;
    registration_page?: Maybe<RegistrationPageFeature>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type AppIntegrationTokens = {
    __typename?: 'AppIntegrationTokens';
    application?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    tokens?: Maybe<TokenDetails>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type AppLanguages = {
    __typename?: 'AppLanguages';
    code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type AppOwnerInfo = {
    __typename?: 'AppOwnerInfo';
    banner?: Maybe<SecureUrl>;
    company_info?: Maybe<CompanyInfo>;
    cors?: Maybe<ApplicationCors>;
    created_at?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    domain?: Maybe<Domain>;
    domains?: Maybe<Array<Maybe<Domain>>>;
    id?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    logo?: Maybe<SecureUrl>;
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    mode?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    owner_info?: Maybe<OwnerInfo>;
    secret?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    website?: Maybe<ApplicationWebsite>;
};
export type AppStaff = {
    __typename?: 'AppStaff';
    application?: Maybe<Scalars['String']['output']>;
    employee_code?: Maybe<Scalars['String']['output']>;
    first_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    last_name?: Maybe<Scalars['String']['output']>;
    order_incent?: Maybe<Scalars['Boolean']['output']>;
    profile_pic_url?: Maybe<Scalars['String']['output']>;
    stores?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    title?: Maybe<Scalars['String']['output']>;
    user?: Maybe<Scalars['String']['output']>;
};
export type AppStaffConnection = {
    __typename?: 'AppStaffConnection';
    items?: Maybe<Array<Maybe<AppStaff>>>;
    page?: Maybe<PageInfo>;
};
export declare enum AppType {
    Development = "development",
    Live = "live"
}
export type ApplicationAuth = {
    __typename?: 'ApplicationAuth';
    /** Shows sales channel auth is enabled or not enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type ApplicationConfiguration = {
    __typename?: 'ApplicationConfiguration';
    appCurrencies?: Maybe<AppCurrencyInfo>;
    appDetails?: Maybe<AppBasicDetails>;
    basicDetails?: Maybe<AppBasicDetails>;
    contactInfo?: Maybe<ContactInfo>;
    features?: Maybe<AppFeature>;
    integrationTokens?: Maybe<AppIntegrationTokens>;
    languages?: Maybe<Array<Maybe<AppLanguages>>>;
    ownerInfo?: Maybe<AppOwnerInfo>;
};
export type ApplicationContent = {
    __typename?: 'ApplicationContent';
    announcements?: Maybe<Announcements>;
    blogs?: Maybe<Blogs>;
    customFields?: Maybe<CustomFields>;
    dataLoaders?: Maybe<DataLoaders>;
    faqCategories?: Maybe<FaqCategories>;
    faqs?: Maybe<FaQs>;
    landingPage?: Maybe<LandingPage>;
    legalInformation?: Maybe<LeagalInformation>;
    navigations?: Maybe<Navigations>;
    pages?: Maybe<Pages>;
    seoConfiguration?: Maybe<SeoSchema>;
    slideshows?: Maybe<Slideshows>;
    supportInformation?: Maybe<Support>;
    tags?: Maybe<Scalars['JSON']['output']>;
};
export type ApplicationContentBlogsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type ApplicationContentCustomFieldsArgs = {
    resource: Scalars['String']['input'];
    resourceId: Scalars['String']['input'];
};
export type ApplicationContentNavigationsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type ApplicationContentPagesArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type ApplicationContentSlideshowsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type ApplicationCors = {
    __typename?: 'ApplicationCors';
    domains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ApplicationDetails = {
    __typename?: 'ApplicationDetails';
    application?: Maybe<AppBasicDetails>;
};
export type ApplicationLegalFaq = {
    __typename?: 'ApplicationLegalFAQ';
    answer?: Maybe<Scalars['String']['output']>;
    question?: Maybe<Scalars['String']['output']>;
};
export type ApplicationMeta = {
    __typename?: 'ApplicationMeta';
    name?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ApplicationRedirections = {
    __typename?: 'ApplicationRedirections';
    /** Old domain url of the sales channel */
    redirect_from?: Maybe<Scalars['String']['output']>;
    /** New domain URL of the sales channel. Users will be automatically redirected from old domain to new domain. */
    redirect_to?: Maybe<Scalars['String']['output']>;
    /** It shows domain redirection type. Permanent redirection is for long time period redirection, and temporary redirection for a short time period. */
    type?: Maybe<Type>;
};
export type ApplicationWebsite = {
    __typename?: 'ApplicationWebsite';
    basepath?: Maybe<Scalars['String']['output']>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type AppliedFreeArticles = {
    __typename?: 'AppliedFreeArticles';
    article_id?: Maybe<Scalars['String']['output']>;
    free_gift_item_details?: Maybe<FreeGiftItemDetails>;
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
};
export type AppliedPromos = {
    __typename?: 'AppliedPromos';
    amount?: Maybe<Scalars['Float']['output']>;
    applied_free_articles?: Maybe<Array<Maybe<OrderAppliedFreeArticles>>>;
    article_quantity?: Maybe<Scalars['Float']['output']>;
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    promo_id?: Maybe<Scalars['String']['output']>;
    promotion_name?: Maybe<Scalars['String']['output']>;
    promotion_type?: Maybe<Scalars['String']['output']>;
};
export type AppliedPromotion = {
    __typename?: 'AppliedPromotion';
    amount?: Maybe<Scalars['Float']['output']>;
    applied_free_articles?: Maybe<Array<Maybe<AppliedFreeArticles>>>;
    article_quantity?: Maybe<Scalars['Int']['output']>;
    buy_rules?: Maybe<Array<Maybe<BuyRules>>>;
    currency?: Maybe<CartCurrency>;
    discount_rules?: Maybe<Array<Maybe<DiscountRulesApp>>>;
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    offer_text?: Maybe<Scalars['String']['output']>;
    ownership?: Maybe<Ownership>;
    promo_id?: Maybe<Scalars['String']['output']>;
    promotion_group?: Maybe<Scalars['String']['output']>;
    promotion_name?: Maybe<Scalars['String']['output']>;
    promotion_type?: Maybe<Scalars['String']['output']>;
};
export type ApplyCouponRequestInput = {
    coupon_code: Scalars['String']['input'];
};
export type ArticleAssignment = {
    __typename?: 'ArticleAssignment';
    level?: Maybe<Scalars['String']['output']>;
    strategy?: Maybe<Scalars['String']['output']>;
};
export type ArticleGiftDetailInput = {
    article_id?: InputMaybe<GiftDetailInput>;
};
export type ArticlePriceInfo = {
    __typename?: 'ArticlePriceInfo';
    base?: Maybe<BasePrice>;
    converted?: Maybe<BasePrice>;
};
export type Asset = {
    __typename?: 'Asset';
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    secure_url?: Maybe<Scalars['String']['output']>;
};
export type Assets = {
    __typename?: 'Assets';
    common_js?: Maybe<CommonJs>;
    css?: Maybe<Css>;
    umd_js?: Maybe<UmdJs>;
};
export type AttachCardRequestInput = {
    card_id: Scalars['String']['input'];
    name_on_card?: InputMaybe<Scalars['String']['input']>;
    nickname?: InputMaybe<Scalars['String']['input']>;
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
};
export type AttachCardsResponse = {
    __typename?: 'AttachCardsResponse';
    data: Scalars['JSON']['output'];
    message?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
};
export type Attribute = {
    __typename?: 'Attribute';
    details?: Maybe<Array<Maybe<AttributeDetail>>>;
    title?: Maybe<Scalars['String']['output']>;
};
export type AttributeDetail = {
    __typename?: 'AttributeDetail';
    description?: Maybe<Scalars['String']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
};
export type Attribution = {
    __typename?: 'Attribution';
    campaign_cookie_expiry?: Maybe<Scalars['String']['output']>;
};
export type AttributionInput = {
    campaign_cookie_expiry?: InputMaybe<Scalars['String']['input']>;
};
export type AuthSuccess = {
    __typename?: 'AuthSuccess';
    register_token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UserDetail>;
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
export type Author = {
    __typename?: 'Author';
    designation?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type AvailableSection = {
    __typename?: 'AvailableSection';
    blocks?: Maybe<Array<Maybe<Block>>>;
    label?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    props?: Maybe<Array<Maybe<BlockProps>>>;
};
export type Badge = {
    __typename?: 'Badge';
    color?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['String']['output']>;
};
export type BagReasonMeta = {
    __typename?: 'BagReasonMeta';
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
export type BagReasons = {
    __typename?: 'BagReasons';
    display_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    meta?: Maybe<BagReasonMeta>;
    qc_type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    question_set?: Maybe<Array<Maybe<QuestionSet>>>;
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
};
export type BagsForReorder = {
    __typename?: 'BagsForReorder';
    article_assignment?: Maybe<BagsForReorderArticleAssignment>;
    item_id?: Maybe<Scalars['Int']['output']>;
    item_size?: Maybe<Scalars['String']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    seller_id?: Maybe<Scalars['Int']['output']>;
    store_id?: Maybe<Scalars['Int']['output']>;
};
export type BagsForReorderArticleAssignment = {
    __typename?: 'BagsForReorderArticleAssignment';
    level?: Maybe<Scalars['String']['output']>;
    strategy?: Maybe<Scalars['String']['output']>;
};
export type BankDetailsForOtpInput = {
    account_holder: Scalars['String']['input'];
    account_no: Scalars['String']['input'];
    bank_name: Scalars['String']['input'];
    branch_name: Scalars['String']['input'];
    ifsc_code: Scalars['String']['input'];
};
export type BaseInfo = {
    __typename?: 'BaseInfo';
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type BasePrice = {
    __typename?: 'BasePrice';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Float']['output']>;
    marked?: Maybe<Scalars['Float']['output']>;
};
export type BeneficiaryDetails = {
    __typename?: 'BeneficiaryDetails';
    account_holder: Scalars['String']['output'];
    account_no: Scalars['String']['output'];
    address: Scalars['String']['output'];
    bank_name: Scalars['String']['output'];
    beneficiary_id: Scalars['String']['output'];
    branch_name?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    created_on: Scalars['String']['output'];
    delights_user_name?: Maybe<Scalars['String']['output']>;
    display_name: Scalars['String']['output'];
    email: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    ifsc_code: Scalars['String']['output'];
    is_active: Scalars['Boolean']['output'];
    mobile?: Maybe<Scalars['String']['output']>;
    modified_on: Scalars['String']['output'];
    subtitle: Scalars['String']['output'];
    title: Scalars['String']['output'];
    transfer_mode: Scalars['String']['output'];
};
export type Block = {
    __typename?: 'Block';
    name?: Maybe<Scalars['String']['output']>;
    props?: Maybe<Array<Maybe<BlockProps>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type BlockProps = {
    __typename?: 'BlockProps';
    id?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Blog = {
    __typename?: 'Blog';
    application?: Maybe<Scalars['String']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    author?: Maybe<Author>;
    content?: Maybe<Array<Maybe<ResourceContent>>>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    date_meta?: Maybe<DateMeta>;
    feature_image?: Maybe<Asset>;
    id?: Maybe<Scalars['String']['output']>;
    publish_date?: Maybe<Scalars['String']['output']>;
    published?: Maybe<Scalars['Boolean']['output']>;
    reading_time?: Maybe<Scalars['String']['output']>;
    schedule?: Maybe<CronSchedule>;
    seo?: Maybe<Seo>;
    slug?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    title?: Maybe<Scalars['String']['output']>;
};
export type Blogs = {
    __typename?: 'Blogs';
    items?: Maybe<Array<Maybe<Blog>>>;
    page?: Maybe<PageInfo>;
};
export type Brand = {
    __typename?: 'Brand';
    action?: Maybe<PageAction>;
    banners?: Maybe<ImageUrls>;
    custom_config?: Maybe<Scalars['JSON']['output']>;
    departments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    description?: Maybe<Scalars['String']['output']>;
    discount?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Media>;
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type BrandConnection = {
    __typename?: 'BrandConnection';
    items?: Maybe<Array<Maybe<Brand>>>;
    page: PageInfo;
};
export type BusinessHighlights = {
    __typename?: 'BusinessHighlights';
    icon?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    sub_title?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type Business_InfoInput = {
    address?: InputMaybe<AddressInput>;
    business_ownership_type?: InputMaybe<Scalars['String']['input']>;
    business_type?: InputMaybe<Scalars['String']['input']>;
    entity_type?: InputMaybe<Scalars['String']['input']>;
    fda?: InputMaybe<Scalars['String']['input']>;
    fssai?: InputMaybe<Scalars['String']['input']>;
    gstin?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    pan?: InputMaybe<Scalars['String']['input']>;
    shop_and_establishment?: InputMaybe<Scalars['JSON']['input']>;
    vintage?: InputMaybe<Scalars['String']['input']>;
};
export type BuyRules = {
    __typename?: 'BuyRules';
    cart_conditions?: Maybe<Scalars['JSON']['output']>;
    item_criteria?: Maybe<Scalars['JSON']['output']>;
};
export type CcAvenueAggregatorConfig = {
    __typename?: 'CCAvenueAggregatorConfig';
    api?: Maybe<Scalars['String']['output']>;
    config_type: Scalars['String']['output'];
    key: Scalars['String']['output'];
    merchant_id?: Maybe<Scalars['String']['output']>;
    merchant_key?: Maybe<Scalars['String']['output']>;
    pin?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret: Scalars['String']['output'];
    user_id?: Maybe<Scalars['String']['output']>;
    verify_api?: Maybe<Scalars['String']['output']>;
};
export type Css = {
    __typename?: 'CSS';
    link?: Maybe<Scalars['String']['output']>;
    links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type CampaignShortLink = {
    __typename?: 'CampaignShortLink';
    medium?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
};
export type CampaignShortLinkInput = {
    medium?: InputMaybe<Scalars['String']['input']>;
    source?: InputMaybe<Scalars['String']['input']>;
};
export type CancelOrResendPaymentLinkRequestInput = {
    payment_link_id: Scalars['String']['input'];
};
export type CancelPaymentLinkResponse = {
    __typename?: 'CancelPaymentLinkResponse';
    message: Scalars['String']['output'];
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type Card = {
    __typename?: 'Card';
    aggregator_name: Scalars['String']['output'];
    card_brand?: Maybe<Scalars['String']['output']>;
    card_brand_image?: Maybe<Scalars['String']['output']>;
    card_fingerprint?: Maybe<Scalars['String']['output']>;
    card_id?: Maybe<Scalars['String']['output']>;
    card_isin?: Maybe<Scalars['String']['output']>;
    card_issuer?: Maybe<Scalars['String']['output']>;
    card_name?: Maybe<Scalars['String']['output']>;
    card_number?: Maybe<Scalars['String']['output']>;
    card_reference?: Maybe<Scalars['String']['output']>;
    card_token?: Maybe<Scalars['String']['output']>;
    card_type?: Maybe<Scalars['String']['output']>;
    compliant_with_tokenisation_guidelines?: Maybe<Scalars['Boolean']['output']>;
    exp_month?: Maybe<Scalars['Int']['output']>;
    exp_year?: Maybe<Scalars['Int']['output']>;
    expired?: Maybe<Scalars['Boolean']['output']>;
    nickname?: Maybe<Scalars['String']['output']>;
};
export type CardConnection = {
    __typename?: 'CardConnection';
    data?: Maybe<Array<Maybe<Card>>>;
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type CardData = {
    __typename?: 'CardData';
    data: CardDetail;
    success: Scalars['Boolean']['output'];
};
export type CardDetail = {
    __typename?: 'CardDetail';
    bank: Scalars['String']['output'];
    bank_code: Scalars['String']['output'];
    card_brand: Scalars['String']['output'];
    card_exp_month?: Maybe<Scalars['String']['output']>;
    card_exp_year?: Maybe<Scalars['String']['output']>;
    card_object: Scalars['String']['output'];
    card_sub_type: Scalars['String']['output'];
    card_token?: Maybe<Scalars['String']['output']>;
    country: Scalars['String']['output'];
    extended_card_type: Scalars['String']['output'];
    id: Scalars['String']['output'];
    is_domestic_card: Scalars['Boolean']['output'];
    name_on_card?: Maybe<Scalars['String']['output']>;
    status: Scalars['Boolean']['output'];
    type: Scalars['String']['output'];
    user?: Maybe<Scalars['String']['output']>;
};
export type Cart = {
    __typename?: 'Cart';
    addresses?: Maybe<Addresses>;
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    cart_id?: Maybe<Scalars['Int']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    common_config?: Maybe<CartCommonConfig>;
    coupon?: Maybe<CartDetailCoupon>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    notification?: Maybe<Scalars['JSON']['output']>;
    pan_config?: Maybe<Scalars['JSON']['output']>;
    pan_no?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    staff_user_id?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
export type CartAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
export type CartBreakup = {
    __typename?: 'CartBreakup';
    coupon?: Maybe<CouponBreakup>;
    display?: Maybe<Array<Maybe<DisplayBreakup>>>;
    loyalty_points?: Maybe<LoyaltyPoints>;
    raw?: Maybe<RawBreakup>;
};
export type CartCheckoutCustomMetaInput = {
    key: Scalars['String']['input'];
    value: Scalars['String']['input'];
};
export type CartCheckoutDetailRequestInput = {
    address_id?: InputMaybe<Scalars['String']['input']>;
    aggregator?: InputMaybe<Scalars['String']['input']>;
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    billing_address_id?: InputMaybe<Scalars['String']['input']>;
    callback_url?: InputMaybe<Scalars['String']['input']>;
    custom_meta?: InputMaybe<Array<InputMaybe<CartCheckoutCustomMetaInput>>>;
    customer_details?: InputMaybe<Customer_DetailsInput>;
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
    order_type?: InputMaybe<Scalars['String']['input']>;
    ordering_store?: InputMaybe<Scalars['Int']['input']>;
    payment_auto_confirm?: InputMaybe<Scalars['Boolean']['input']>;
    payment_extra_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    payment_mode: Scalars['String']['input'];
    payment_params?: InputMaybe<Scalars['JSON']['input']>;
    staff?: InputMaybe<StaffCheckoutInput>;
};
export type CartCheckoutDetailV2RequestInput = {
    address_id?: InputMaybe<Scalars['String']['input']>;
    aggregator?: InputMaybe<Scalars['String']['input']>;
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    billing_address_id?: InputMaybe<Scalars['String']['input']>;
    callback_url?: InputMaybe<Scalars['String']['input']>;
    cart_id?: InputMaybe<Scalars['String']['input']>;
    custom_meta?: InputMaybe<Scalars['JSON']['input']>;
    customer_details?: InputMaybe<Customer_DetailsInput>;
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
    order_type?: InputMaybe<Scalars['String']['input']>;
    ordering_store?: InputMaybe<Scalars['Int']['input']>;
    payment_auto_confirm?: InputMaybe<Scalars['Boolean']['input']>;
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    payment_methods: Array<InputMaybe<PaymentMethodInput>>;
    payment_mode: Scalars['String']['input'];
    payment_params?: InputMaybe<Scalars['JSON']['input']>;
    staff?: InputMaybe<StaffCheckoutInput>;
};
export type CartCheckoutResponse = {
    __typename?: 'CartCheckoutResponse';
    app_intercept_url?: Maybe<Scalars['String']['output']>;
    callback_url?: Maybe<Scalars['String']['output']>;
    cart?: Maybe<CheckCart>;
    data?: Maybe<Scalars['JSON']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type CartCommonConfig = {
    __typename?: 'CartCommonConfig';
    deliveryChargesConfig?: Maybe<DeliveryChargesConfig>;
    delivery_charges_config?: Maybe<DeliveryChargesConfig>;
};
export type CartCouponMedias = {
    __typename?: 'CartCouponMedias';
    alt?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type CartCurrency = {
    __typename?: 'CartCurrency';
    code?: Maybe<Scalars['String']['output']>;
    symbol?: Maybe<Scalars['String']['output']>;
};
export type CartDetailCoupon = {
    __typename?: 'CartDetailCoupon';
    cashbackAmount?: Maybe<Scalars['Float']['output']>;
    cashbackMessagePrimary?: Maybe<Scalars['String']['output']>;
    cashbackMessageSecondary?: Maybe<Scalars['String']['output']>;
    couponCode?: Maybe<Scalars['String']['output']>;
    couponDescription?: Maybe<Scalars['String']['output']>;
    couponId?: Maybe<Scalars['String']['output']>;
    couponSubtitle?: Maybe<Scalars['String']['output']>;
    couponTitle?: Maybe<Scalars['String']['output']>;
    couponType?: Maybe<Scalars['String']['output']>;
    couponValue?: Maybe<Scalars['Float']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    isApplied?: Maybe<Scalars['Boolean']['output']>;
    isValid?: Maybe<Scalars['Boolean']['output']>;
    maximumDiscountValue?: Maybe<Scalars['Float']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    minimumCartValue?: Maybe<Scalars['Float']['output']>;
};
export type CartDetailResponse = {
    __typename?: 'CartDetailResponse';
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<ShipmentPromise>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    pan_config?: Maybe<Scalars['JSON']['output']>;
    pan_no?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
};
export type CartFeature = {
    __typename?: 'CartFeature';
    google_map?: Maybe<Scalars['Boolean']['output']>;
    gst_input?: Maybe<Scalars['Boolean']['output']>;
    placing_for_customer?: Maybe<Scalars['Boolean']['output']>;
    revenue_engine_coupon?: Maybe<Scalars['Boolean']['output']>;
    staff_selection?: Maybe<Scalars['Boolean']['output']>;
};
export type CartItem = {
    article_assignment?: InputMaybe<Scalars['JSON']['input']>;
    article_id?: InputMaybe<Scalars['String']['input']>;
    custom_config?: InputMaybe<Scalars['JSON']['input']>;
    display?: InputMaybe<Scalars['String']['input']>;
    item_id?: InputMaybe<Scalars['Int']['input']>;
    item_size?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
    parent_item_identifiers?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    pos?: InputMaybe<Scalars['Boolean']['input']>;
    product_group_tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
    seller_id?: InputMaybe<Scalars['Int']['input']>;
    store_id?: InputMaybe<Scalars['Int']['input']>;
};
export type CartItemCountResponse = {
    __typename?: 'CartItemCountResponse';
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
export type CartMetaRequestInput = {
    checkout_mode?: InputMaybe<Scalars['String']['input']>;
    comment?: InputMaybe<Scalars['String']['input']>;
    delivery_slots?: InputMaybe<Scalars['JSON']['input']>;
    gift_details?: InputMaybe<ArticleGiftDetailInput>;
    gstin?: InputMaybe<Scalars['String']['input']>;
    pick_up_customer_details?: InputMaybe<Scalars['JSON']['input']>;
};
export type CartMetaResponse = {
    __typename?: 'CartMetaResponse';
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    message?: Maybe<Scalars['String']['output']>;
};
export type CartPriceInfo = {
    __typename?: 'CartPriceInfo';
    base?: Maybe<PriceInfo>;
    converted?: Maybe<PriceInfo>;
};
export type CartProduct = {
    __typename?: 'CartProduct';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    action?: Maybe<ProductAction>;
    attributes?: Maybe<Scalars['JSON']['output']>;
    brand?: Maybe<BaseInfo>;
    categories?: Maybe<Array<Maybe<CategoryInfo>>>;
    images?: Maybe<Array<Maybe<ProductImage>>>;
    item_code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    teaser_tag?: Maybe<Tags>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type CartProductIdentifer = {
    __typename?: 'CartProductIdentifer';
    identifier?: Maybe<Scalars['String']['output']>;
};
export type CartProductIdentiferInput = {
    identifier?: InputMaybe<Scalars['String']['input']>;
};
export type CartProductInfo = {
    __typename?: 'CartProductInfo';
    article?: Maybe<ProductArticle>;
    availability?: Maybe<ProductAvailability>;
    bulk_offer?: Maybe<Scalars['JSON']['output']>;
    charges?: Maybe<Array<Maybe<ChargesInfo>>>;
    coupon?: Maybe<CouponDetails>;
    coupon_message?: Maybe<Scalars['String']['output']>;
    custom_order?: Maybe<Scalars['JSON']['output']>;
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    discount?: Maybe<Scalars['String']['output']>;
    identifiers: CartProductIdentifer;
    is_set?: Maybe<Scalars['Boolean']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    moq?: Maybe<Scalars['JSON']['output']>;
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    price?: Maybe<CartPriceInfo>;
    price_per_unit?: Maybe<ProductPriceInfo>;
    product?: Maybe<CartProduct>;
    product_ean_id?: Maybe<Scalars['String']['output']>;
    promo_meta?: Maybe<PromoMeta>;
    promotions_applied?: Maybe<Array<Maybe<AppliedPromotion>>>;
    quantity?: Maybe<Scalars['Int']['output']>;
};
export type CartShipmentsResponse = {
    __typename?: 'CartShipmentsResponse';
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    cart_id?: Maybe<Scalars['Int']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<ShipmentPromise>;
    error?: Maybe<Scalars['Boolean']['output']>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    shipments?: Maybe<Array<Maybe<ShipmentResponse>>>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type Categories = {
    __typename?: 'Categories';
    data?: Maybe<Array<Maybe<DepartmentCategoryDetail>>>;
    departments?: Maybe<Array<Maybe<DepartmentIdentifier>>>;
};
export type Category = {
    __typename?: 'Category';
    banners?: Maybe<ImageUrls>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    logo?: Maybe<Media>;
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type CategoryBySlug = {
    __typename?: 'CategoryBySlug';
    application?: Maybe<Scalars['String']['output']>;
    children?: Maybe<Array<Maybe<Faq>>>;
    description?: Maybe<Scalars['String']['output']>;
    icon_url?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    index?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type CategoryDetail = {
    __typename?: 'CategoryDetail';
    application?: Maybe<Scalars['String']['output']>;
    children?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    icon_url?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    index?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type CategoryInfo = {
    __typename?: 'CategoryInfo';
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type CategoryItem = {
    __typename?: 'CategoryItem';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    action: PageAction;
    banners: ImageUrls;
    childs?: Maybe<Array<Maybe<CategoryItemL2>>>;
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    uid: Scalars['Int']['output'];
};
export type CategoryItemL2 = {
    __typename?: 'CategoryItemL2';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    action: PageAction;
    banners: ImageUrls;
    childs?: Maybe<Array<Maybe<CategoryItemL3>>>;
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    uid: Scalars['Int']['output'];
};
export type CategoryItemL3 = {
    __typename?: 'CategoryItemL3';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    action: PageAction;
    banners: ImageUrls;
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    uid: Scalars['Int']['output'];
};
export type CategoryItemL4 = {
    __typename?: 'CategoryItemL4';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    action: PageAction;
    banners: ImageUrls;
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    name: Scalars['String']['output'];
    slug: Scalars['String']['output'];
    uid: Scalars['Int']['output'];
};
export type Channels = {
    __typename?: 'Channels';
    email?: Maybe<EmailCommunication>;
    sms?: Maybe<SmsCommunication>;
    whatsapp?: Maybe<WhatsappCommunication>;
};
export type ChargeCustomerRequestInput = {
    aggregator: Scalars['String']['input'];
    amount: Scalars['Int']['input'];
    order_id: Scalars['String']['input'];
    transaction_token?: InputMaybe<Scalars['String']['input']>;
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ChargeCustomerResponse = {
    __typename?: 'ChargeCustomerResponse';
    aggregator: Scalars['String']['output'];
    cart_id?: Maybe<Scalars['String']['output']>;
    delivery_address_id?: Maybe<Scalars['String']['output']>;
    message: Scalars['String']['output'];
    order_id: Scalars['String']['output'];
    status: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type ChargesAmount = {
    __typename?: 'ChargesAmount';
    currency?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type ChargesInfo = {
    __typename?: 'ChargesInfo';
    allow_refund?: Maybe<Scalars['Boolean']['output']>;
    amount?: Maybe<ChargesAmount>;
    code?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type ChargesThreshold = {
    __typename?: 'ChargesThreshold';
    charges?: Maybe<Scalars['Float']['output']>;
    threshold?: Maybe<Scalars['Float']['output']>;
};
export type CheckCart = {
    __typename?: 'CheckCart';
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    cart_id?: Maybe<Scalars['Int']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    cod_available?: Maybe<Scalars['Boolean']['output']>;
    cod_charges?: Maybe<Scalars['Int']['output']>;
    cod_message?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_charge_order_value?: Maybe<Scalars['Int']['output']>;
    delivery_charges?: Maybe<Scalars['Int']['output']>;
    delivery_promise?: Maybe<ShipmentPromise>;
    error_message?: Maybe<Scalars['String']['output']>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    store_code?: Maybe<Scalars['String']['output']>;
    store_emps?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    success?: Maybe<Scalars['Boolean']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
    user_type?: Maybe<Scalars['String']['output']>;
};
export type CodeRequestBodySchemaInput = {
    code?: InputMaybe<Scalars['String']['input']>;
};
export type Collection = {
    __typename?: 'Collection';
    action?: Maybe<CollectionAction>;
    allow_facets?: Maybe<Scalars['Boolean']['output']>;
    allow_sort?: Maybe<Scalars['Boolean']['output']>;
    badge?: Maybe<Badge>;
    banners?: Maybe<ImageUrls>;
    description?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    logo?: Maybe<CollectionLogo>;
    name?: Maybe<Scalars['String']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    products?: Maybe<ProductConnection>;
    published?: Maybe<Scalars['Boolean']['output']>;
    query?: Maybe<Array<Maybe<CollectionQuery>>>;
    schedule?: Maybe<Schedule>;
    seo?: Maybe<Seo>;
    slug?: Maybe<Scalars['String']['output']>;
    sortOn?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
    visible_facets_keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type CollectionProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sortOn?: InputMaybe<Scalars['String']['input']>;
};
export type CollectionAction = {
    __typename?: 'CollectionAction';
    page?: Maybe<Page>;
    type?: Maybe<Scalars['String']['output']>;
};
export type CollectionConnection = {
    __typename?: 'CollectionConnection';
    filters?: Maybe<Scalars['JSON']['output']>;
    items: Array<Collection>;
    page: PageInfo;
};
export type CollectionItems = {
    __typename?: 'CollectionItems';
    filters?: Maybe<Array<Maybe<ProductFilters>>>;
    items?: Maybe<Array<Maybe<Product>>>;
    page?: Maybe<PageInfo>;
    sort_on?: Maybe<Array<Maybe<ProductSortOn>>>;
};
export type CollectionLogo = {
    __typename?: 'CollectionLogo';
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type CollectionQuery = {
    __typename?: 'CollectionQuery';
    attribute?: Maybe<Scalars['String']['output']>;
    op?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type Colors = {
    __typename?: 'Colors';
    accent_color?: Maybe<Scalars['String']['output']>;
    bg_color?: Maybe<Scalars['String']['output']>;
    button_secondary_color?: Maybe<Scalars['String']['output']>;
    link_color?: Maybe<Scalars['String']['output']>;
    primary_color?: Maybe<Scalars['String']['output']>;
    secondary_color?: Maybe<Scalars['String']['output']>;
};
export type ColumnHeader = {
    __typename?: 'ColumnHeader';
    convertable?: Maybe<Scalars['Boolean']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ColumnHeaders = {
    __typename?: 'ColumnHeaders';
    col_1?: Maybe<ColumnHeader>;
    col_2?: Maybe<ColumnHeader>;
    col_3?: Maybe<ColumnHeader>;
    col_4?: Maybe<ColumnHeader>;
    col_5?: Maybe<ColumnHeader>;
    col_6?: Maybe<ColumnHeader>;
};
export type CommonFeature = {
    __typename?: 'CommonFeature';
    communication_optin_dialog?: Maybe<CommunicationOptinDialogFeature>;
    compare_products?: Maybe<CompareProductsFeature>;
    currency?: Maybe<CurrencyFeature>;
    deployment_store_selection?: Maybe<DeploymentStoreSelectionFeature>;
    feedback?: Maybe<FeedbackFeature>;
    listing_price?: Maybe<ListingPriceFeature>;
    revenue_engine?: Maybe<RevenueEngineFeature>;
    reward_points?: Maybe<RewardPointsConfig>;
};
export type CommonJs = {
    __typename?: 'CommonJs';
    link?: Maybe<Scalars['String']['output']>;
};
export declare enum CommunicationAction {
    Optin = "OPTIN",
    Optout = "OPTOUT"
}
export declare enum CommunicationChannel {
    Email = "EMAIL",
    Sms = "SMS",
    Whatsapp = "WHATSAPP"
}
export type CommunicationConsent = {
    __typename?: 'CommunicationConsent';
    app_id?: Maybe<Scalars['String']['output']>;
    channels?: Maybe<Channels>;
    user_id?: Maybe<Scalars['String']['output']>;
};
export type CommunicationConsentReqInput = {
    action?: InputMaybe<CommunicationAction>;
    channel?: InputMaybe<CommunicationChannel>;
    response?: InputMaybe<Response>;
};
export type CommunicationConsentRes = {
    __typename?: 'CommunicationConsentRes';
    app_id?: Maybe<Scalars['String']['output']>;
    channels?: Maybe<Channels>;
    user_id?: Maybe<Scalars['String']['output']>;
};
export type CommunicationOptinDialogFeature = {
    __typename?: 'CommunicationOptinDialogFeature';
    visibility?: Maybe<Scalars['Boolean']['output']>;
};
export type CompanyAddress = {
    __typename?: 'CompanyAddress';
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    address_type?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    lat_long?: Maybe<LatLong>;
    pincode?: Maybe<Scalars['Int']['output']>;
    state?: Maybe<Scalars['String']['output']>;
};
export type CompanyDetail = {
    __typename?: 'CompanyDetail';
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type CompanyInfo = {
    __typename?: 'CompanyInfo';
    addresses?: Maybe<Array<Maybe<CompanyAddress>>>;
    created_on?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    notification_emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type CompanyStore = {
    __typename?: 'CompanyStore';
    business_type?: Maybe<Scalars['String']['output']>;
    company_type?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type CompareProductWithFrequentlyCompared = {
    __typename?: 'CompareProductWithFrequentlyCompared';
    similars?: Maybe<ProductCompareDetails>;
};
export type CompareProductsFeature = {
    __typename?: 'CompareProductsFeature';
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type Config = {
    __typename?: 'Config';
    current?: Maybe<Scalars['String']['output']>;
    global_schema?: Maybe<Props>;
    list?: Maybe<Array<Maybe<ListItem>>>;
    preset?: Maybe<Preset>;
};
export type ConfigurationSchema = {
    __typename?: 'ConfigurationSchema';
    duration?: Maybe<Scalars['Int']['output']>;
    sleep_time?: Maybe<Scalars['Int']['output']>;
    slide_direction?: Maybe<Scalars['String']['output']>;
    start_on_launch?: Maybe<Scalars['Boolean']['output']>;
};
export type ContactInfo = {
    __typename?: 'ContactInfo';
    address?: Maybe<InformationAddress>;
    application?: Maybe<Scalars['String']['output']>;
    business_highlights?: Maybe<Array<Maybe<BusinessHighlights>>>;
    copyright_text?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    links?: Maybe<Array<Maybe<Links>>>;
    social_links?: Maybe<SocialLinks>;
    support?: Maybe<InformationSupport>;
    updated_at?: Maybe<Scalars['String']['output']>;
    version?: Maybe<Scalars['Int']['output']>;
};
export type ContactSchema = {
    __typename?: 'ContactSchema';
    email?: Maybe<EmailSchema>;
    phone?: Maybe<PhoneSchema>;
};
export type ContentAction = {
    __typename?: 'ContentAction';
    page?: Maybe<ActionPage>;
    popup?: Maybe<ActionPage>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Country = {
    __typename?: 'Country';
    display_name?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    logistics?: Maybe<CountryLogistics>;
    meta?: Maybe<CountryMetaResponse>;
    name?: Maybe<Scalars['String']['output']>;
    parent_id?: Maybe<Scalars['String']['output']>;
    sub_type?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type CountryConnection = {
    __typename?: 'CountryConnection';
    items?: Maybe<Array<Maybe<CountryDetail>>>;
    page?: Maybe<PageInfo>;
};
export type CountryCurrency = {
    __typename?: 'CountryCurrency';
    code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    symbol?: Maybe<Scalars['String']['output']>;
};
export type CountryDetail = {
    __typename?: 'CountryDetail';
    currency?: Maybe<Scalars['String']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    fields?: Maybe<CountryFields>;
    hierarchy?: Maybe<CountryHierarchy>;
    iso2?: Maybe<Scalars['String']['output']>;
    iso3?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone_code?: Maybe<Scalars['String']['output']>;
    sub_type?: Maybe<Scalars['String']['output']>;
    timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type CountryFields = {
    __typename?: 'CountryFields';
    address: Array<Maybe<CountryFieldsAddress>>;
    address_template: CountryFieldsAddressTemplate;
    serviceability_fields: Array<Maybe<Scalars['String']['output']>>;
};
export type CountryFieldsAddress = {
    __typename?: 'CountryFieldsAddress';
    display_name: Scalars['String']['output'];
    edit?: Maybe<Scalars['Boolean']['output']>;
    error_text?: Maybe<Scalars['String']['output']>;
    input: Scalars['String']['output'];
    required: Scalars['Boolean']['output'];
    slug: Scalars['String']['output'];
    validation?: Maybe<FieldValidation>;
    values?: Maybe<CountryFieldsAddressValues>;
};
export type CountryFieldsAddressTemplate = {
    __typename?: 'CountryFieldsAddressTemplate';
    checkout_form: Scalars['String']['output'];
    default_display: Scalars['String']['output'];
    store_os_form: Scalars['String']['output'];
};
export type CountryFieldsAddressValues = {
    __typename?: 'CountryFieldsAddressValues';
    get_all?: Maybe<GetOneOrAll>;
    get_one?: Maybe<GetOneOrAll>;
};
export type CountryHierarchy = {
    __typename?: 'CountryHierarchy';
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
};
export type CountryList = {
    __typename?: 'CountryList';
    results?: Maybe<Array<Maybe<Country>>>;
};
export type CountryLogistics = {
    __typename?: 'CountryLogistics';
    dp?: Maybe<Scalars['JSON']['output']>;
};
export type CountryMetaData = {
    __typename?: 'CountryMetaData';
    ISD_code?: Maybe<Scalars['String']['output']>;
    country_code?: Maybe<Scalars['String']['output']>;
};
export type CountryMetaResponse = {
    __typename?: 'CountryMetaResponse';
    country_code?: Maybe<Scalars['String']['output']>;
    isd_code?: Maybe<Scalars['String']['output']>;
};
export type Coupon = {
    __typename?: 'Coupon';
    coupon_amount?: Maybe<Scalars['Float']['output']>;
    coupon_applicable_message?: Maybe<Scalars['String']['output']>;
    coupon_code?: Maybe<Scalars['String']['output']>;
    coupon_type?: Maybe<Scalars['String']['output']>;
    coupon_value?: Maybe<Scalars['Float']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    end_date?: Maybe<Scalars['String']['output']>;
    expires_on?: Maybe<Scalars['String']['output']>;
    is_applicable?: Maybe<Scalars['Boolean']['output']>;
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    is_bank_offer?: Maybe<Scalars['Boolean']['output']>;
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    medias?: Maybe<Array<Maybe<CartCouponMedias>>>;
    message?: Maybe<Scalars['String']['output']>;
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    offer_text?: Maybe<Scalars['String']['output']>;
    start_date?: Maybe<Scalars['String']['output']>;
    sub_title?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    title?: Maybe<Scalars['String']['output']>;
};
export type CouponBreakup = {
    __typename?: 'CouponBreakup';
    code?: Maybe<Scalars['String']['output']>;
    coupon_type?: Maybe<Scalars['String']['output']>;
    coupon_value?: Maybe<Scalars['Float']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    sub_title?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type CouponDetails = {
    __typename?: 'CouponDetails';
    code?: Maybe<Scalars['String']['output']>;
    discount_single_quantity?: Maybe<Scalars['Float']['output']>;
    discount_total_quantity?: Maybe<Scalars['Float']['output']>;
};
export type CouponValidate = {
    __typename?: 'CouponValidate';
    coupon_validity?: Maybe<CouponValidity>;
    message?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
};
export type CouponValidity = {
    __typename?: 'CouponValidity';
    code?: Maybe<Scalars['String']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    display_message_en?: Maybe<Scalars['String']['output']>;
    next_validation_required?: Maybe<Scalars['Boolean']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    valid?: Maybe<Scalars['Boolean']['output']>;
};
/** Need to handle coupon_code inside the resolver while resolver development */
export type Coupons = {
    __typename?: 'Coupons';
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    page?: Maybe<PageCoupon>;
};
export type CreateOrderUserData = {
    __typename?: 'CreateOrderUserData';
    aggregator?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    callback_url?: Maybe<Scalars['String']['output']>;
    contact?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<Scalars['String']['output']>;
    customer_id?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    merchant_order_id?: Maybe<Scalars['String']['output']>;
    method?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
};
export type CreateOrderUserRequestInput = {
    currency: Scalars['String']['input'];
    failure_callback_url: Scalars['String']['input'];
    meta?: InputMaybe<Scalars['JSON']['input']>;
    payment_link_id: Scalars['String']['input'];
    payment_methods: Payment_MethodsInput;
    success_callback_url: Scalars['String']['input'];
};
export type CreateOrderUserResponse = {
    __typename?: 'CreateOrderUserResponse';
    callback_url?: Maybe<Scalars['String']['output']>;
    data?: Maybe<CreateOrderUserData>;
    message: Scalars['String']['output'];
    order_id?: Maybe<Scalars['String']['output']>;
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type CreatePaymentLinkRequestInput = {
    amount: Scalars['Float']['input'];
    description?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    external_order_id: Scalars['String']['input'];
    meta: MetaInput;
    mobile_number: Scalars['String']['input'];
};
export type CreatePaymentLinkResponse = {
    __typename?: 'CreatePaymentLinkResponse';
    message: Scalars['String']['output'];
    payment_link_id?: Maybe<Scalars['String']['output']>;
    payment_link_url?: Maybe<Scalars['String']['output']>;
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type CreatedBy = {
    __typename?: 'CreatedBy';
    id?: Maybe<Scalars['String']['output']>;
};
export type CreatedOn = {
    __typename?: 'CreatedOn';
    user_agent: Scalars['String']['output'];
};
export type Credit = {
    __typename?: 'Credit';
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type CreditDetail = {
    __typename?: 'CreditDetail';
    activation_url?: Maybe<Scalars['String']['output']>;
    amount_available?: Maybe<AmountAvailable>;
    balance?: Maybe<UserBalance>;
    buyer_status?: Maybe<Scalars['String']['output']>;
    credit_line_id?: Maybe<Scalars['String']['output']>;
    data: CreditSummary;
    due_amount?: Maybe<DueAmount>;
    due_date?: Maybe<Scalars['String']['output']>;
    is_eligible_for_txn?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<UserCreditLimit>;
    merchant_customer_ref_id?: Maybe<Scalars['String']['output']>;
    repayment_url?: Maybe<Scalars['String']['output']>;
    soa_url?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    status_message?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
    total_due_amount?: Maybe<TotalDueAmount>;
};
export type CreditSummary = {
    __typename?: 'CreditSummary';
    is_registered: Scalars['Boolean']['output'];
    signup_url: Scalars['String']['output'];
    status: Scalars['Boolean']['output'];
};
export type CronSchedule = {
    __typename?: 'CronSchedule';
    cron?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Float']['output']>;
    end?: Maybe<Scalars['String']['output']>;
    next_schedule?: Maybe<Array<Maybe<NextSchedule>>>;
    start?: Maybe<Scalars['String']['output']>;
};
export type Currency = {
    __typename?: 'Currency';
    code?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    decimal_digits?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    symbol?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type CurrencyFeature = {
    __typename?: 'CurrencyFeature';
    default_currency?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type CurrencyInfo = {
    __typename?: 'CurrencyInfo';
    code?: Maybe<Scalars['String']['output']>;
    symbol?: Maybe<Scalars['String']['output']>;
};
export type CurrentStatus = {
    __typename?: 'CurrentStatus';
    journey_type?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type CustomField = {
    __typename?: 'CustomField';
    company_id?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<Scalars['String']['output']>;
    creator?: Maybe<Scalars['String']['output']>;
    definition_id?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    metaobject_definition_id?: Maybe<Scalars['String']['output']>;
    namespace?: Maybe<Scalars['String']['output']>;
    resource?: Maybe<Scalars['String']['output']>;
    resource_id?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['JSON']['output']>;
};
export type CustomFields = {
    __typename?: 'CustomFields';
    items?: Maybe<Array<Maybe<CustomField>>>;
};
export type CustomForm = {
    __typename?: 'CustomForm';
    application_id: Scalars['String']['output'];
    created_on?: Maybe<CreatedOn>;
    description?: Maybe<Scalars['String']['output']>;
    header_image?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    inputs: Array<Maybe<Scalars['JSON']['output']>>;
    login_required: Scalars['Boolean']['output'];
    poll_for_assignment?: Maybe<PollForAssignment>;
    priority: Priority;
    should_notify: Scalars['Boolean']['output'];
    slug: Scalars['String']['output'];
    submit_button?: Maybe<SubmitButton>;
    success_message?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};
export type CustomFormSubmissionPayloadInput = {
    attachments?: InputMaybe<Array<InputMaybe<TicketAssetInput>>>;
    response: Array<InputMaybe<Scalars['JSON']['input']>>;
};
export type CustomMetaFields = {
    __typename?: 'CustomMetaFields';
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};
export type CustomMetaTag = {
    __typename?: 'CustomMetaTag';
    content?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type CustomObject = {
    __typename?: 'CustomObject';
    application_id?: Maybe<Scalars['String']['output']>;
    company_id?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    creator?: Maybe<Scalars['String']['output']>;
    definition?: Maybe<CustomObjectDefintion>;
    display_name?: Maybe<Scalars['String']['output']>;
    fields?: Maybe<Array<Maybe<CustomField>>>;
    id?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type CustomObjectDefintion = {
    __typename?: 'CustomObjectDefintion';
    display_name_key?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type CustomerDetailsResponse = {
    __typename?: 'CustomerDetailsResponse';
    country?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    shipment_id?: Maybe<Scalars['String']['output']>;
};
export type CustomerOnboardingRequestInput = {
    aggregator: Scalars['String']['input'];
    business_info?: InputMaybe<Business_InfoInput>;
    device?: InputMaybe<DeviceInput>;
    marketplace_info?: InputMaybe<Marketplace_InfoInput>;
    mcc?: InputMaybe<Scalars['String']['input']>;
    personal_info: Personal_InfoInput;
    source: Scalars['String']['input'];
};
export type CustomerOnboardingResponse = {
    __typename?: 'CustomerOnboardingResponse';
    data: Data15;
    success: Scalars['Boolean']['output'];
};
export type Customer_DetailsInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    mobile: Scalars['String']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
};
export type Data8 = {
    __typename?: 'Data8';
    customer_name: Scalars['String']['output'];
    is_valid: Scalars['Boolean']['output'];
    status: Scalars['String']['output'];
    upi_vpa: Scalars['String']['output'];
};
export type Data15 = {
    __typename?: 'Data15';
    redirect_url: Scalars['String']['output'];
    session: Scalars['JSON']['output'];
    status: Scalars['Boolean']['output'];
};
export type DataLoaderDetail = {
    __typename?: 'DataLoaderDetail';
    content?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    operation_id?: Maybe<Scalars['String']['output']>;
    service?: Maybe<Scalars['String']['output']>;
    source?: Maybe<DataLoaderSource>;
    type?: Maybe<DataLoaderType>;
    url?: Maybe<Scalars['String']['output']>;
};
export type DataLoaderSource = {
    __typename?: 'DataLoaderSource';
    id?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export declare enum DataLoaderType {
    Function = "function",
    Url = "url"
}
export type DataLoaders = {
    __typename?: 'DataLoaders';
    items?: Maybe<Array<Maybe<DataLoaderDetail>>>;
};
export type DataUpdatesInput = {
    entities?: InputMaybe<Array<InputMaybe<EntitiesDataUpdatesInput>>>;
    products?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesInput>>>;
};
export type DateMeta = {
    __typename?: 'DateMeta';
    created_on?: Maybe<Scalars['String']['output']>;
    modified_on?: Maybe<Scalars['String']['output']>;
};
export type Debit = {
    __typename?: 'Debit';
    auto_apply?: Maybe<Scalars['Boolean']['output']>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
    strategy_channel?: Maybe<Scalars['String']['output']>;
};
export type Debug = {
    __typename?: 'Debug';
    platform?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
};
export type DefaultCurrency = {
    __typename?: 'DefaultCurrency';
    code?: Maybe<Scalars['String']['output']>;
    ref?: Maybe<Scalars['String']['output']>;
};
export type DeleteAccountReasons = {
    __typename?: 'DeleteAccountReasons';
    reason_id?: Maybe<Scalars['String']['output']>;
    reason_text?: Maybe<Scalars['String']['output']>;
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
export type DeleteAddressResponse = {
    __typename?: 'DeleteAddressResponse';
    id?: Maybe<Scalars['String']['output']>;
    is_deleted?: Maybe<Scalars['Boolean']['output']>;
};
export type DeleteApplicationUserRequestSchemaInput = {
    otp?: InputMaybe<Scalars['String']['input']>;
    reason?: InputMaybe<Scalars['String']['input']>;
    reason_id?: InputMaybe<Scalars['String']['input']>;
    request_id?: InputMaybe<Scalars['String']['input']>;
    user_id?: InputMaybe<Scalars['String']['input']>;
};
export type DeleteCardsResponse = {
    __typename?: 'DeleteCardsResponse';
    message?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
};
export type DeleteCartDetailResponse = {
    __typename?: 'DeleteCartDetailResponse';
    message?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type DeleteUserSuccess = {
    __typename?: 'DeleteUserSuccess';
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type DeletehCardRequestInput = {
    card_id: Scalars['String']['input'];
};
export type DeliveryAddress = {
    __typename?: 'DeliveryAddress';
    address?: Maybe<Scalars['String']['output']>;
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    address_category?: Maybe<Scalars['String']['output']>;
    address_type?: Maybe<Scalars['String']['output']>;
    area?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    contact_person?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    country_iso_code?: Maybe<Scalars['String']['output']>;
    country_phone_code?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    landmark?: Maybe<Scalars['String']['output']>;
    latitude?: Maybe<Scalars['Float']['output']>;
    longitude?: Maybe<Scalars['Float']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    pincode?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    version?: Maybe<Scalars['String']['output']>;
};
export type DeliveryChargesConfig = {
    __typename?: 'DeliveryChargesConfig';
    charges?: Maybe<Array<Maybe<ChargesThreshold>>>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type DeliveryPromiseFormatted = {
    __typename?: 'DeliveryPromiseFormatted';
    max?: Maybe<Scalars['String']['output']>;
    min?: Maybe<Scalars['String']['output']>;
};
export type DeliveryPromiseResponse = {
    __typename?: 'DeliveryPromiseResponse';
    formatted?: Maybe<DeliveryPromiseFormatted>;
    timestamp?: Maybe<DeliveryPromiseTimestamp>;
};
export type DeliveryPromiseTimestamp = {
    __typename?: 'DeliveryPromiseTimestamp';
    max?: Maybe<Scalars['Float']['output']>;
    min?: Maybe<Scalars['Float']['output']>;
};
export type Department = {
    __typename?: 'Department';
    logo?: Maybe<Media>;
    name?: Maybe<Scalars['String']['output']>;
    priority_order?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type DepartmentCategoryDetail = {
    __typename?: 'DepartmentCategoryDetail';
    department: Scalars['String']['output'];
    items?: Maybe<Array<Maybe<CategoryItem>>>;
};
export type DepartmentIdentifier = {
    __typename?: 'DepartmentIdentifier';
    slug?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type DeploymentStoreSelectionFeature = {
    __typename?: 'DeploymentStoreSelectionFeature';
    enabled?: Maybe<Scalars['Boolean']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Detail = {
    __typename?: 'Detail';
    description?: Maybe<Scalars['String']['output']>;
    image_url?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type DetailAttribute = {
    __typename?: 'DetailAttribute';
    key?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type DetailsInput = {
    account_holder: Scalars['String']['input'];
    account_no: Scalars['String']['input'];
    address?: InputMaybe<Scalars['String']['input']>;
    bank_name: Scalars['String']['input'];
    branch_name: Scalars['String']['input'];
    comment?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    ifsc_code: Scalars['String']['input'];
    mobile: Scalars['String']['input'];
    vpa?: InputMaybe<Scalars['String']['input']>;
    wallet?: InputMaybe<Scalars['String']['input']>;
};
export type DeviceInput = {
    device_make?: InputMaybe<Scalars['String']['input']>;
    device_model?: InputMaybe<Scalars['String']['input']>;
    device_type?: InputMaybe<Scalars['String']['input']>;
    identification_number?: InputMaybe<Scalars['String']['input']>;
    identifier_type?: InputMaybe<Scalars['String']['input']>;
    os?: InputMaybe<Scalars['String']['input']>;
    os_version?: InputMaybe<Scalars['String']['input']>;
};
export type Dimension = {
    __typename?: 'Dimension';
    /** The height of the product */
    height: Scalars['Float']['output'];
    /** Whether the dimension is the default one or not */
    is_default: Scalars['Boolean']['output'];
    /** The length of the product */
    length: Scalars['Float']['output'];
    /** The unit of dimension */
    unit: Scalars['String']['output'];
    /** The width of the product */
    width: Scalars['Float']['output'];
};
export type DiscountMeta = {
    __typename?: 'DiscountMeta';
    end?: Maybe<Scalars['String']['output']>;
    start?: Maybe<Scalars['String']['output']>;
    start_timer_in_minutes?: Maybe<Scalars['Float']['output']>;
    timer: Scalars['Boolean']['output'];
};
export type DiscountOfferDetails = {
    __typename?: 'DiscountOfferDetails';
    offers?: Maybe<Array<Maybe<OfferItem>>>;
    seller?: Maybe<CategoryInfo>;
};
export type DiscountRulesApp = {
    __typename?: 'DiscountRulesApp';
    item_criteria?: Maybe<Scalars['JSON']['output']>;
    matched_buy_rules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    offer?: Maybe<Scalars['JSON']['output']>;
    raw_offer?: Maybe<Scalars['JSON']['output']>;
};
export type DisplayBreakup = {
    __typename?: 'DisplayBreakup';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type Domain = {
    __typename?: 'Domain';
    id?: Maybe<Scalars['String']['output']>;
    is_predefined?: Maybe<Scalars['Boolean']['output']>;
    is_primary?: Maybe<Scalars['Boolean']['output']>;
    is_shortlink?: Maybe<Scalars['Boolean']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    verified?: Maybe<Scalars['Boolean']['output']>;
};
export type DueAmount = {
    __typename?: 'DueAmount';
    currency?: Maybe<Scalars['String']['output']>;
    formatted_value?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type EditEmailRequestSchemaInput = {
    email?: InputMaybe<Scalars['String']['input']>;
};
export type EditMobileRequestSchemaInput = {
    country_code?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
};
export type EditProfileMobileSchemaInput = {
    country_code?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
};
export type EditProfileRequestSchemaInput = {
    android_hash?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    dob?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    gender?: InputMaybe<Scalars['String']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<EditProfileMobileSchemaInput>;
    profile_pic_url?: InputMaybe<Scalars['String']['input']>;
    register_token?: InputMaybe<Scalars['String']['input']>;
    sender?: InputMaybe<Scalars['String']['input']>;
};
export type Email = {
    __typename?: 'Email';
    active?: Maybe<Scalars['Boolean']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    primary?: Maybe<Scalars['Boolean']['output']>;
    verified?: Maybe<Scalars['Boolean']['output']>;
};
export type EmailCommunication = {
    __typename?: 'EmailCommunication';
    display_name?: Maybe<Scalars['String']['output']>;
    response?: Maybe<Scalars['String']['output']>;
};
export type EmailOtpSuccess = {
    __typename?: 'EmailOtpSuccess';
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type EmailProperties = {
    __typename?: 'EmailProperties';
    key?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type EmailSchema = {
    __typename?: 'EmailSchema';
    active?: Maybe<Scalars['Boolean']['output']>;
    email?: Maybe<Array<Maybe<EmailProperties>>>;
};
export type EntitiesDataUpdatesInput = {
    data?: InputMaybe<Scalars['JSON']['input']>;
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
export type EntitiesReasonsInput = {
    data?: InputMaybe<EntityReasonDataInput>;
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
export type EntityReasonDataInput = {
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    reason_text?: InputMaybe<Scalars['String']['input']>;
};
export type EpayLaterKycDetail = {
    __typename?: 'EpayLaterKYCDetail';
    display: Scalars['Boolean']['output'];
    message?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};
export type EpaylaterBanner = {
    __typename?: 'EpaylaterBanner';
    data: EpayLaterKycDetail;
    success: Scalars['Boolean']['output'];
};
export type Faq = {
    __typename?: 'FAQ';
    answer?: Maybe<Scalars['String']['output']>;
    application?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    question?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type FaqCategories = {
    __typename?: 'FAQCategories';
    categories?: Maybe<Array<Maybe<CategoryDetail>>>;
};
export type FaQs = {
    __typename?: 'FAQs';
    faqs?: Maybe<Array<Maybe<Faq>>>;
};
export type FeedbackFeature = {
    __typename?: 'FeedbackFeature';
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type FeedbackForm = {
    __typename?: 'FeedbackForm';
    inputs?: Maybe<Scalars['JSON']['output']>;
    timestamps?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type FieldValidation = {
    __typename?: 'FieldValidation';
    regex?: Maybe<FieldValidationRegex>;
    type?: Maybe<Scalars['String']['output']>;
};
export type FieldValidationRegex = {
    __typename?: 'FieldValidationRegex';
    length?: Maybe<LengthValidation>;
    value?: Maybe<Scalars['String']['output']>;
};
export type FinancialBreakup = {
    __typename?: 'FinancialBreakup';
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    amount_paid?: Maybe<Scalars['Float']['output']>;
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    cashback?: Maybe<Scalars['Float']['output']>;
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    cod_charges?: Maybe<Scalars['Float']['output']>;
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    coupon_value?: Maybe<Scalars['Float']['output']>;
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    gst_fee?: Maybe<Scalars['Float']['output']>;
    gst_tag?: Maybe<Scalars['String']['output']>;
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    hsn_code?: Maybe<Scalars['String']['output']>;
    identifiers?: Maybe<Identifiers>;
    item_name?: Maybe<Scalars['String']['output']>;
    price_effective?: Maybe<Scalars['Float']['output']>;
    price_marked?: Maybe<Scalars['Float']['output']>;
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    refund_amount?: Maybe<Scalars['Float']['output']>;
    refund_credit?: Maybe<Scalars['Float']['output']>;
    size?: Maybe<Scalars['String']['output']>;
    total_units?: Maybe<Scalars['Int']['output']>;
    transfer_price?: Maybe<Scalars['Float']['output']>;
    value_of_good?: Maybe<Scalars['Float']['output']>;
};
export type Firebase = {
    __typename?: 'Firebase';
    credentials?: Maybe<FirebaseCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type FirebaseCredentials = {
    __typename?: 'FirebaseCredentials';
    android?: Maybe<AppCredentials>;
    api_key?: Maybe<Scalars['String']['output']>;
    application_id?: Maybe<Scalars['String']['output']>;
    gcm_sender_id?: Maybe<Scalars['String']['output']>;
    ios?: Maybe<AppCredentials>;
    project_id?: Maybe<Scalars['String']['output']>;
};
export type FlashCard = {
    __typename?: 'FlashCard';
    background_color?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['String']['output']>;
    text_color?: Maybe<Scalars['String']['output']>;
};
export type FollowListing = {
    __typename?: 'FollowListing';
    items: Array<Maybe<Product>>;
    page: PageInfo;
};
export type FollowPostResponse = {
    __typename?: 'FollowPostResponse';
    id: Scalars['String']['output'];
    message: Scalars['String']['output'];
};
export type FollowedCollections = {
    __typename?: 'FollowedCollections';
    collections?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};
export type FollowedProducts = {
    __typename?: 'FollowedProducts';
    products?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};
export type FollowerCount = {
    __typename?: 'FollowerCount';
    count?: Maybe<Scalars['Int']['output']>;
};
export type Font = {
    __typename?: 'Font';
    family?: Maybe<Scalars['String']['output']>;
    variants?: Maybe<FontVariants>;
};
export type FontVariants = {
    __typename?: 'FontVariants';
    bold?: Maybe<VaariantDetail>;
    light?: Maybe<VaariantDetail>;
    medium?: Maybe<VaariantDetail>;
    regular?: Maybe<VaariantDetail>;
    semi_bold?: Maybe<VaariantDetail>;
};
export type ForgotPasswordRequestSchemaInput = {
    code?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
};
export type FormRegisterRequestSchemaInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    gender?: InputMaybe<Scalars['String']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<FormRegisterRequestSchemaPhoneInput>;
    register_token?: InputMaybe<Scalars['String']['input']>;
};
export type FormRegisterRequestSchemaPhoneInput = {
    country_code?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<Scalars['String']['input']>;
};
export type FreeGiftItemDetails = {
    __typename?: 'FreeGiftItemDetails';
    item_brand_name?: Maybe<Scalars['String']['output']>;
    item_id?: Maybe<Scalars['Int']['output']>;
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    item_name?: Maybe<Scalars['String']['output']>;
    item_price_details?: Maybe<Scalars['JSON']['output']>;
    item_slug?: Maybe<Scalars['String']['output']>;
};
export type FreeGiftItems = {
    __typename?: 'FreeGiftItems';
    item_brand_name?: Maybe<Scalars['String']['output']>;
    item_id?: Maybe<Scalars['Int']['output']>;
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    item_name?: Maybe<Scalars['String']['output']>;
    item_price_details?: Maybe<Scalars['JSON']['output']>;
    item_slug?: Maybe<Scalars['String']['output']>;
};
export type Freshchat = {
    __typename?: 'Freshchat';
    credentials?: Maybe<FreshchatCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type FreshchatCredentials = {
    __typename?: 'FreshchatCredentials';
    app_id?: Maybe<Scalars['String']['output']>;
    app_key?: Maybe<Scalars['String']['output']>;
    web_token?: Maybe<Scalars['String']['output']>;
};
export type FulfillingCompany = {
    __typename?: 'FulfillingCompany';
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type FulfillingStore = {
    __typename?: 'FulfillingStore';
    code?: Maybe<Scalars['String']['output']>;
    company_id?: Maybe<Scalars['Int']['output']>;
    company_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type FyndRewards = {
    __typename?: 'FyndRewards';
    credentials?: Maybe<FyndRewardsCredentials>;
};
export type FyndRewardsCredentials = {
    __typename?: 'FyndRewardsCredentials';
    public_key?: Maybe<Scalars['String']['output']>;
};
export type GeoLocation = {
    __typename?: 'GeoLocation';
    latitude?: Maybe<Scalars['Float']['output']>;
    longitude?: Maybe<Scalars['Float']['output']>;
};
export type GeoLocationInput = {
    latitude?: InputMaybe<Scalars['Float']['input']>;
    longitude?: InputMaybe<Scalars['Float']['input']>;
};
export type GetCartItemsRequestInput = {
    areaCode?: InputMaybe<Scalars['String']['input']>;
    assignCardId?: InputMaybe<Scalars['Int']['input']>;
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    c?: InputMaybe<Scalars['Boolean']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type GetCouponResponse = {
    __typename?: 'GetCouponResponse';
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    page?: Maybe<PageCoupon>;
};
export type GetOneOrAll = {
    __typename?: 'GetOneOrAll';
    operation_id?: Maybe<Scalars['String']['output']>;
    params?: Maybe<GetOneOrAllParams>;
};
export type GetOneOrAllParams = {
    __typename?: 'GetOneOrAllParams';
    path?: Maybe<GetOneOrAllPath>;
    query?: Maybe<GetOneOrAllQuery>;
};
export type GetOneOrAllPath = {
    __typename?: 'GetOneOrAllPath';
    locality_type?: Maybe<Scalars['String']['output']>;
    locality_value?: Maybe<Scalars['String']['output']>;
};
export type GetOneOrAllQuery = {
    __typename?: 'GetOneOrAllQuery';
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    sector?: Maybe<Scalars['String']['output']>;
    state?: Maybe<Scalars['String']['output']>;
};
export type GetShareCartLinkRequestInput = {
    id?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
};
export type GetShareCartLinkResponse = {
    __typename?: 'GetShareCartLinkResponse';
    share_url?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
};
export type GetZoneFromPincodeViewRequestInput = {
    country: Scalars['String']['input'];
    pincode: Scalars['String']['input'];
};
export type GetZoneFromPincodeViewResponse = {
    __typename?: 'GetZoneFromPincodeViewResponse';
    serviceability_type: Scalars['String']['output'];
    zones: Array<Maybe<Scalars['String']['output']>>;
};
export type GiftDetailInput = {
    gift_message?: InputMaybe<Scalars['String']['input']>;
    is_gift_applied?: InputMaybe<Scalars['Boolean']['input']>;
};
export type GoogleMap = {
    __typename?: 'GoogleMap';
    credentials?: Maybe<GoogleMapCredentials>;
};
export type GoogleMapCredentials = {
    __typename?: 'GoogleMapCredentials';
    api_key?: Maybe<Scalars['String']['output']>;
};
export type Gtm = {
    __typename?: 'Gtm';
    credentials?: Maybe<GtmCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type GtmCredentials = {
    __typename?: 'GtmCredentials';
    api_key?: Maybe<Scalars['String']['output']>;
};
export type HasPassword = {
    __typename?: 'HasPassword';
    result?: Maybe<Scalars['Boolean']['output']>;
};
export declare enum HistoryTypeEnum {
    Comment = "COMMENT",
    Log = "LOG",
    Rating = "RATING",
    Thread = "THREAD"
}
export type HomePageFeature = {
    __typename?: 'HomePageFeature';
    order_processing?: Maybe<Scalars['Boolean']['output']>;
};
export type IfscCodeDetail = {
    __typename?: 'IFSCCodeDetail';
    bank_name: Scalars['String']['output'];
    branch_name: Scalars['String']['output'];
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type Identifiers = {
    __typename?: 'Identifiers';
    ean?: Maybe<Scalars['String']['output']>;
    sku_code?: Maybe<Scalars['String']['output']>;
};
export type ImageUrls = {
    __typename?: 'ImageUrls';
    landscape?: Maybe<Media>;
    portrait?: Maybe<Media>;
};
export type InformationAddress = {
    __typename?: 'InformationAddress';
    address_line?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    loc?: Maybe<InformationLoc>;
    phone?: Maybe<Array<Maybe<InformationPhone>>>;
    pincode?: Maybe<Scalars['Int']['output']>;
};
export type InformationLoc = {
    __typename?: 'InformationLoc';
    coordinates?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type InformationPhone = {
    __typename?: 'InformationPhone';
    code?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
};
export type InformationSupport = {
    __typename?: 'InformationSupport';
    email?: Maybe<Array<Maybe<EmailSchema>>>;
    phone?: Maybe<Array<Maybe<PhoneSupport>>>;
    timing?: Maybe<Scalars['String']['output']>;
};
export type IntentApp = {
    __typename?: 'IntentApp';
    code?: Maybe<Scalars['String']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    logos?: Maybe<Logo>;
    package_name?: Maybe<Scalars['String']['output']>;
};
export type IntentAppErrorList = {
    __typename?: 'IntentAppErrorList';
    code?: Maybe<Scalars['String']['output']>;
    package_name?: Maybe<Scalars['String']['output']>;
};
export type Invoice = {
    __typename?: 'Invoice';
    invoice_url?: Maybe<Scalars['String']['output']>;
    label_url?: Maybe<Scalars['String']['output']>;
    updated_date?: Maybe<Scalars['String']['output']>;
};
export type ItemBrand = {
    __typename?: 'ItemBrand';
    logo?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type JusPayAggregatorConfig = {
    __typename?: 'JusPayAggregatorConfig';
    api?: Maybe<Scalars['String']['output']>;
    api_domain?: Maybe<Scalars['String']['output']>;
    api_key?: Maybe<Scalars['String']['output']>;
    config_type?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    merchant_id?: Maybe<Scalars['String']['output']>;
    merchant_key?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
    signature_key?: Maybe<Scalars['String']['output']>;
    webhook_password?: Maybe<Scalars['String']['output']>;
    webhook_username?: Maybe<Scalars['String']['output']>;
};
export type LadderOfferItem = {
    __typename?: 'LadderOfferItem';
    margin?: Maybe<Scalars['Int']['output']>;
    max_quantity?: Maybe<Scalars['Int']['output']>;
    min_quantity?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<LadderPrice>;
    type?: Maybe<Scalars['String']['output']>;
};
export type LadderPrice = {
    __typename?: 'LadderPrice';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Int']['output']>;
    marked?: Maybe<Scalars['Int']['output']>;
    offer_price?: Maybe<Scalars['Float']['output']>;
};
export type LadderPriceOffer = {
    __typename?: 'LadderPriceOffer';
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    calculate_on?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    id?: Maybe<Scalars['String']['output']>;
    offer_prices?: Maybe<Array<Maybe<LadderOfferItem>>>;
    offer_text?: Maybe<Scalars['String']['output']>;
    promotion_group?: Maybe<Scalars['String']['output']>;
    valid_till?: Maybe<Scalars['String']['output']>;
};
export type LadderPriceOffers = {
    __typename?: 'LadderPriceOffers';
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    currency?: Maybe<CurrencyInfo>;
};
export type LandingPageFeature = {
    __typename?: 'LandingPageFeature';
    continue_as_guest?: Maybe<Scalars['Boolean']['output']>;
    launch_page?: Maybe<LaunchPage>;
    login_btn_text?: Maybe<Scalars['String']['output']>;
    show_domain_textbox?: Maybe<Scalars['Boolean']['output']>;
    show_register_btn?: Maybe<Scalars['Boolean']['output']>;
};
export type Language = {
    __typename?: 'Language';
    display?: Maybe<Scalars['String']['output']>;
};
export type LatLong = {
    __typename?: 'LatLong';
    coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type LaunchPage = {
    __typename?: 'LaunchPage';
    page_type?: Maybe<Scalars['String']['output']>;
    params?: Maybe<Scalars['JSON']['output']>;
    query?: Maybe<Scalars['JSON']['output']>;
};
export type Lead = {
    __typename?: 'Lead';
    customForm?: Maybe<CustomForm>;
    getTokenForVideoRoom?: Maybe<TokenForVideoRoom>;
    participantsInsideVideoRoom?: Maybe<ParticipantsInsideVideoRoomResponse>;
    ticket?: Maybe<Ticket>;
};
export type LeadCustomFormArgs = {
    slug: Scalars['String']['input'];
};
export type LeadGetTokenForVideoRoomArgs = {
    uniqueName: Scalars['String']['input'];
};
export type LeadParticipantsInsideVideoRoomArgs = {
    uniqueName: Scalars['String']['input'];
};
export type LeadTicketArgs = {
    id: Scalars['String']['input'];
};
export type LeagalInformation = {
    __typename?: 'LeagalInformation';
    application?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    faq?: Maybe<Array<Maybe<ApplicationLegalFaq>>>;
    id?: Maybe<Scalars['String']['output']>;
    policy?: Maybe<Scalars['String']['output']>;
    returns?: Maybe<Scalars['String']['output']>;
    shipping?: Maybe<Scalars['String']['output']>;
    tnc?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type LengthValidation = {
    __typename?: 'LengthValidation';
    max?: Maybe<Scalars['Int']['output']>;
    min?: Maybe<Scalars['Int']['output']>;
};
export type LinkSchema = {
    __typename?: 'LinkSchema';
    icon?: Maybe<Scalars['String']['output']>;
    link?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type LinkStatus = {
    __typename?: 'LinkStatus';
    message: Scalars['String']['output'];
    status: Scalars['String']['output'];
};
export type Links = {
    __typename?: 'Links';
    link?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type ListItem = {
    __typename?: 'ListItem';
    global_config?: Maybe<Scalars['JSON']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    page?: Maybe<Array<Maybe<PageConfig>>>;
};
export type ListingPriceFeature = {
    __typename?: 'ListingPriceFeature';
    sort?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type LocaleLanguage = {
    __typename?: 'LocaleLanguage';
    ar?: Maybe<Language>;
    en_us?: Maybe<Language>;
    hi?: Maybe<Language>;
};
export type Locality = {
    __typename?: 'Locality';
    display_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    parent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type LocalityConnection = {
    __typename?: 'LocalityConnection';
    items?: Maybe<Array<Maybe<Locality>>>;
    page?: Maybe<PageInfo>;
};
export declare enum LocalityEnum {
    Pincode = "pincode",
    Sector = "sector"
}
export declare enum LocalityType {
    City = "city",
    Pincode = "pincode",
    Sector = "sector",
    State = "state"
}
export type LocationCountry = {
    __typename?: 'LocationCountry';
    capital?: Maybe<Scalars['String']['output']>;
    country_code?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<Scalars['String']['output']>;
    default_currency?: Maybe<LocationDefaultCurrency>;
    default_language?: Maybe<LocationDefaultLanguage>;
    id?: Maybe<Scalars['String']['output']>;
    iso2?: Maybe<Scalars['String']['output']>;
    iso3?: Maybe<Scalars['String']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    parent?: Maybe<Scalars['String']['output']>;
    phone_code?: Maybe<Scalars['String']['output']>;
    state_code?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type LocationDefaultCurrency = {
    __typename?: 'LocationDefaultCurrency';
    code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    symbol?: Maybe<Scalars['String']['output']>;
};
export type LocationDefaultLanguage = {
    __typename?: 'LocationDefaultLanguage';
    code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export declare enum LocationTypeEnum {
    City = "city",
    Country = "country",
    State = "state"
}
export type Locations = {
    __typename?: 'Locations';
    items?: Maybe<Array<Maybe<LocationCountry>>>;
};
export type Login = {
    __typename?: 'Login';
    otp?: Maybe<Scalars['Boolean']['output']>;
    password?: Maybe<Scalars['Boolean']['output']>;
};
export type LoginSuccess = {
    __typename?: 'LoginSuccess';
    register_token?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UserDetail>;
};
export type Logo = {
    __typename?: 'Logo';
    large: Scalars['String']['output'];
    small: Scalars['String']['output'];
};
export type Logout = {
    __typename?: 'Logout';
    logout?: Maybe<Scalars['Boolean']['output']>;
};
export type LookAndFeel = {
    __typename?: 'LookAndFeel';
    background_color?: Maybe<Scalars['String']['output']>;
    card_position?: Maybe<Scalars['String']['output']>;
};
export type LoyaltyPoints = {
    __typename?: 'LoyaltyPoints';
    applicable?: Maybe<Scalars['Float']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    total?: Maybe<Scalars['Float']['output']>;
};
export type Moq = {
    __typename?: 'MOQ';
    /** The minimum quantity increment in which the item can be purchased. */
    increment_unit?: Maybe<Scalars['Int']['output']>;
    /** The maximum quantity allowed for purchase. */
    maximum?: Maybe<Scalars['Int']['output']>;
    /** The minimum quantity required for purchase. */
    minimum?: Maybe<Scalars['Int']['output']>;
};
export type MSwipeAggregatorConfig = {
    __typename?: 'MSwipeAggregatorConfig';
    config_type?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    merchant_id?: Maybe<Scalars['String']['output']>;
    pin?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
    user_id?: Maybe<Scalars['String']['output']>;
    verify_api?: Maybe<Scalars['String']['output']>;
};
export type Marketplace_InfoInput = {
    date_of_joining?: InputMaybe<Scalars['String']['input']>;
    membership_id: Scalars['String']['input'];
    name: Scalars['String']['input'];
};
export type Media = {
    __typename?: 'Media';
    alt?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Meta>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type Meta = {
    __typename?: 'Meta';
    source?: Maybe<Scalars['String']['output']>;
};
export type Meta2Input = {
    merchant_code: Scalars['String']['input'];
    payment_gateway: Scalars['String']['input'];
    payment_identifier: Scalars['String']['input'];
};
export type MetaDetail = {
    __typename?: 'MetaDetail';
    fynd_default?: Maybe<Scalars['Boolean']['output']>;
};
export type MetaInput = {
    amount: Scalars['String']['input'];
    assign_card_id?: InputMaybe<Scalars['String']['input']>;
    cart_id: Scalars['String']['input'];
    checkout_mode: Scalars['String']['input'];
    pincode: Scalars['String']['input'];
};
export type Moengage = {
    __typename?: 'Moengage';
    credentials?: Maybe<MoengageCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type MoengageCredentials = {
    __typename?: 'MoengageCredentials';
    app_id?: Maybe<Scalars['String']['output']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    addAddress?: Maybe<SaveAddressResponse>;
    addBeneficiaryDetails?: Maybe<RefundAccountResponse>;
    addEmail?: Maybe<VerifyEmailOtpSuccess>;
    addItemsToCart?: Maybe<AddCartDetailResponse>;
    addMobileNumber?: Maybe<VerifyMobileOtpSuccess>;
    addRefundBankAccountUsingOTP?: Maybe<RefundAccountResponse>;
    applyCoupon?: Maybe<CartDetailResponse>;
    applyRewardPoints?: Maybe<CartDetailResponse>;
    attachCardToCustomer?: Maybe<AttachCardsResponse>;
    cancelPaymentLink?: Maybe<CancelPaymentLinkResponse>;
    checkAndUpdatePaymentStatus?: Maybe<PaymentStatusUpdateResponse>;
    checkAndUpdatePaymentStatusPaymentLink?: Maybe<PaymentStatusUpdateResponse>;
    checkoutCart?: Maybe<CartCheckoutResponse>;
    checkoutCartV2?: Maybe<CartCheckoutResponse>;
    createHistory?: Maybe<TicketHistory>;
    createOrderHandlerPaymentLink?: Maybe<CreateOrderUserResponse>;
    createPaymentLink?: Maybe<CreatePaymentLinkResponse>;
    createShortLink?: Maybe<ShortLinkDetail>;
    createTicket?: Maybe<Ticket>;
    customerOnboard?: Maybe<CustomerOnboardingResponse>;
    deleteCart?: Maybe<DeleteCartDetailResponse>;
    deleteEmail?: Maybe<LoginSuccess>;
    deleteMobileNumber?: Maybe<LoginSuccess>;
    deleteUser?: Maybe<DeleteUserSuccess>;
    deleteUserCard?: Maybe<DeleteCardsResponse>;
    enableOrDisableRefundTransferMode?: Maybe<UpdateRefundTransferModeResponse>;
    followById?: Maybe<FollowPostResponse>;
    forgotPassword?: Maybe<LoginSuccess>;
    getApplicationQRCode?: Maybe<QrCodeResp>;
    getCart?: Maybe<CartDetailResponse>;
    getCartLastModified?: Maybe<Scalars['String']['output']>;
    getCartShareLink?: Maybe<GetShareCartLinkResponse>;
    getCollectionQRCodeBySlug?: Maybe<QrCodeResp>;
    getCoupons?: Maybe<GetCouponResponse>;
    getItemCount?: Maybe<CartItemCountResponse>;
    getOptimalLocations?: Maybe<ReAssignStoreResponse>;
    getOrderingStoreCookie?: Maybe<SuccessMessageResponse>;
    getPincodeZones?: Maybe<GetZoneFromPincodeViewResponse>;
    getProductQRCodeBySlug?: Maybe<QrCodeResp>;
    getTatProduct?: Maybe<TatViewResponse>;
    getUrlQRCode?: Maybe<QrCodeResp>;
    initialisePayment?: Maybe<PaymentInitializationResponse>;
    initialisePaymentPaymentLink?: Maybe<PaymentInitializationResponse>;
    loginWithAppleIOS?: Maybe<AuthSuccess>;
    loginWithEmailAndPassword?: Maybe<LoginSuccess>;
    loginWithFacebook?: Maybe<AuthSuccess>;
    loginWithGoogle?: Maybe<AuthSuccess>;
    loginWithGoogleAndroid?: Maybe<AuthSuccess>;
    loginWithGoogleIOS?: Maybe<AuthSuccess>;
    loginWithOTP?: Maybe<SendOtpResponse>;
    loginWithToken?: Maybe<LoginSuccess>;
    registerWithForm?: Maybe<RegisterFormSuccess>;
    removeAddress?: Maybe<DeleteAddressResponse>;
    removeCoupon?: Maybe<CartDetailResponse>;
    removeOrderingStoreCookie?: Maybe<SuccessMessageResponse>;
    renderHTML?: Maybe<Scalars['String']['output']>;
    resendOrCancelPayment?: Maybe<ResendOrCancelPaymentResponse>;
    resendPaymentLink?: Maybe<ResendPaymentLinkResponse>;
    resetForgotPassword?: Maybe<ResetForgotPasswordSuccess>;
    selectAddress?: Maybe<CartDetailResponse>;
    selectPaymentMode?: Maybe<CartDetailResponse>;
    sendForgotOTPOnEmail?: Maybe<EmailOtpSuccess>;
    sendForgotOTPOnMobile?: Maybe<OtpSuccess>;
    sendOTPOnEmail?: Maybe<EmailOtpSuccess>;
    sendOTPOnMobile?: Maybe<OtpSuccess>;
    sendOtpToShipmentCustomer?: Maybe<SendOtpToCustomerResponse>;
    sendResetPasswordEmail?: Maybe<ResetPasswordSuccess>;
    sendResetPasswordMobile?: Maybe<ResetPasswordSuccess>;
    sendResetToken?: Maybe<ResetPasswordSuccess>;
    sendVerificationLinkToEmail?: Maybe<SendEmailVerifyLinkSuccess>;
    sendVerificationLinkToMobile?: Maybe<SendMobileVerifyLinkSuccess>;
    setEmailAsPrimary?: Maybe<LoginSuccess>;
    setMobileNumberAsPrimary?: Maybe<LoginSuccess>;
    submitCustomForm?: Maybe<SubmitCustomFormResponse>;
    unfollowById?: Maybe<FollowPostResponse>;
    updateAddress?: Maybe<UpdateAddressResponse>;
    updateCart?: Maybe<UpdateCartDetailResponse>;
    updateCartMeta?: Maybe<CartMetaResponse>;
    updateCartWithSharedItems?: Maybe<SharedCartResponse>;
    updateDefaultBeneficiary?: Maybe<SetDefaultBeneficiaryResponse>;
    updatePassword?: Maybe<VerifyEmailSuccess>;
    updateProfile?: Maybe<ProfileEditSuccess>;
    updateShipmentStatus?: Maybe<ShipmentApplicationStatusResponse>;
    upsertAppPushtoken?: Maybe<PushtokenRes>;
    upsertCommunicationConsent?: Maybe<CommunicationConsentRes>;
    validateVPA?: Maybe<ValidateVpaResponse>;
    verifyAndChargePayment?: Maybe<ChargeCustomerResponse>;
    verifyCustomerForPayment?: Maybe<ValidateCustomerResponse>;
    verifyEmail?: Maybe<VerifyEmailSuccess>;
    verifyEmailForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    verifyEmailOTP?: Maybe<VerifyOtpSuccess>;
    verifyMobile?: Maybe<VerifyEmailSuccess>;
    verifyMobileForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    verifyMobileOTP?: Maybe<VerifyOtpSuccess>;
    verifyOtpAndAddBeneficiaryForBank?: Maybe<AddBeneficiaryViaOtpVerificationResponse>;
    verifyOtpAndAddBeneficiaryForWallet?: Maybe<WalletOtpResponse>;
    verifyOtpShipmentCustomer?: Maybe<VerifyOtpResponse>;
};
export type MutationAddAddressArgs = {
    address2Input?: InputMaybe<Address2Input>;
};
export type MutationAddBeneficiaryDetailsArgs = {
    addBeneficiaryDetailsRequestInput?: InputMaybe<AddBeneficiaryDetailsRequestInput>;
};
export type MutationAddEmailArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationAddItemsToCartArgs = {
    addCartRequestInput?: InputMaybe<AddCartRequestInput>;
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includeBreakup?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationAddMobileNumberArgs = {
    editMobileRequestSchemaInput?: InputMaybe<EditMobileRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationAddRefundBankAccountUsingOtpArgs = {
    addBeneficiaryDetailsOTPRequestInput?: InputMaybe<AddBeneficiaryDetailsOtpRequestInput>;
};
export type MutationApplyCouponArgs = {
    applyCouponRequestInput?: InputMaybe<ApplyCouponRequestInput>;
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    p?: InputMaybe<Scalars['Boolean']['input']>;
};
export type MutationApplyRewardPointsArgs = {
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    rewardPointRequestInput?: InputMaybe<RewardPointRequestInput>;
};
export type MutationAttachCardToCustomerArgs = {
    attachCardRequestInput?: InputMaybe<AttachCardRequestInput>;
};
export type MutationCancelPaymentLinkArgs = {
    cancelOrResendPaymentLinkRequestInput?: InputMaybe<CancelOrResendPaymentLinkRequestInput>;
};
export type MutationCheckAndUpdatePaymentStatusArgs = {
    paymentStatusUpdateRequestInput?: InputMaybe<PaymentStatusUpdateRequestInput>;
};
export type MutationCheckAndUpdatePaymentStatusPaymentLinkArgs = {
    paymentStatusUpdateRequestInput?: InputMaybe<PaymentStatusUpdateRequestInput>;
};
export type MutationCheckoutCartArgs = {
    cartCheckoutDetailRequestInput?: InputMaybe<CartCheckoutDetailRequestInput>;
};
export type MutationCheckoutCartV2Args = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    cartCheckoutDetailV2RequestInput?: InputMaybe<CartCheckoutDetailV2RequestInput>;
};
export type MutationCreateHistoryArgs = {
    id: Scalars['String']['input'];
    ticketHistoryPayloadInput?: InputMaybe<TicketHistoryPayloadInput>;
};
export type MutationCreateOrderHandlerPaymentLinkArgs = {
    createOrderUserRequestInput?: InputMaybe<CreateOrderUserRequestInput>;
};
export type MutationCreatePaymentLinkArgs = {
    createPaymentLinkRequestInput?: InputMaybe<CreatePaymentLinkRequestInput>;
};
export type MutationCreateShortLinkArgs = {
    shortLinkReqInput?: InputMaybe<ShortLinkReqInput>;
};
export type MutationCreateTicketArgs = {
    addTicketPayloadInput?: InputMaybe<AddTicketPayloadInput>;
};
export type MutationCustomerOnboardArgs = {
    customerOnboardingRequestInput?: InputMaybe<CustomerOnboardingRequestInput>;
};
export type MutationDeleteCartArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationDeleteEmailArgs = {
    active: Scalars['Boolean']['input'];
    email: Scalars['String']['input'];
    platform?: InputMaybe<Scalars['String']['input']>;
    primary: Scalars['Boolean']['input'];
    verified: Scalars['Boolean']['input'];
};
export type MutationDeleteMobileNumberArgs = {
    active: Scalars['Boolean']['input'];
    country_code: Scalars['String']['input'];
    phone: Scalars['String']['input'];
    platform?: InputMaybe<Scalars['String']['input']>;
    primary: Scalars['Boolean']['input'];
    verified: Scalars['Boolean']['input'];
};
export type MutationDeleteUserArgs = {
    deleteApplicationUserRequestSchemaInput?: InputMaybe<DeleteApplicationUserRequestSchemaInput>;
};
export type MutationDeleteUserCardArgs = {
    deletehCardRequestInput?: InputMaybe<DeletehCardRequestInput>;
};
export type MutationEnableOrDisableRefundTransferModeArgs = {
    updateRefundTransferModeRequestInput?: InputMaybe<UpdateRefundTransferModeRequestInput>;
};
export type MutationFollowByIdArgs = {
    entityId: Scalars['String']['input'];
    entityType: Scalars['String']['input'];
};
export type MutationForgotPasswordArgs = {
    forgotPasswordRequestSchemaInput?: InputMaybe<ForgotPasswordRequestSchemaInput>;
};
export type MutationGetCartArgs = {
    area_code?: InputMaybe<Scalars['String']['input']>;
    assign_card_id?: InputMaybe<Scalars['Int']['input']>;
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationGetCartLastModifiedArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationGetCartShareLinkArgs = {
    getShareCartLinkRequestInput?: InputMaybe<GetShareCartLinkRequestInput>;
};
export type MutationGetCollectionQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
};
export type MutationGetCouponsArgs = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationGetItemCountArgs = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationGetOptimalLocationsArgs = {
    reAssignStoreRequestInput?: InputMaybe<ReAssignStoreRequestInput>;
};
export type MutationGetOrderingStoreCookieArgs = {
    orderingStoreSelectRequestInput?: InputMaybe<OrderingStoreSelectRequestInput>;
};
export type MutationGetPincodeZonesArgs = {
    getZoneFromPincodeViewRequestInput?: InputMaybe<GetZoneFromPincodeViewRequestInput>;
};
export type MutationGetProductQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
};
export type MutationGetTatProductArgs = {
    tATViewRequestInput?: InputMaybe<TatViewRequestInput>;
};
export type MutationGetUrlQrCodeArgs = {
    url: Scalars['String']['input'];
};
export type MutationInitialisePaymentArgs = {
    paymentInitializationRequestInput?: InputMaybe<PaymentInitializationRequestInput>;
};
export type MutationInitialisePaymentPaymentLinkArgs = {
    paymentInitializationRequestInput?: InputMaybe<PaymentInitializationRequestInput>;
};
export type MutationLoginWithAppleIosArgs = {
    oAuthRequestAppleSchemaInput?: InputMaybe<OAuthRequestAppleSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationLoginWithEmailAndPasswordArgs = {
    passwordLoginRequestSchemaInput?: InputMaybe<PasswordLoginRequestSchemaInput>;
};
export type MutationLoginWithFacebookArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationLoginWithGoogleArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationLoginWithGoogleAndroidArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationLoginWithGoogleIosArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationLoginWithOtpArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendOtpRequestSchemaInput?: InputMaybe<SendOtpRequestSchemaInput>;
};
export type MutationLoginWithTokenArgs = {
    tokenRequestBodySchemaInput?: InputMaybe<TokenRequestBodySchemaInput>;
};
export type MutationRegisterWithFormArgs = {
    formRegisterRequestSchemaInput?: InputMaybe<FormRegisterRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationRemoveAddressArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationRemoveCouponArgs = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationRenderHtmlArgs = {
    renderHTMLRequestInput?: InputMaybe<RenderHtmlRequestInput>;
};
export type MutationResendOrCancelPaymentArgs = {
    resendOrCancelPaymentRequestInput?: InputMaybe<ResendOrCancelPaymentRequestInput>;
};
export type MutationResendPaymentLinkArgs = {
    cancelOrResendPaymentLinkRequestInput?: InputMaybe<CancelOrResendPaymentLinkRequestInput>;
};
export type MutationResetForgotPasswordArgs = {
    forgotPasswordRequestSchemaInput?: InputMaybe<ForgotPasswordRequestSchemaInput>;
};
export type MutationSelectAddressArgs = {
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    selectCartAddressRequestInput?: InputMaybe<SelectCartAddressRequestInput>;
};
export type MutationSelectPaymentModeArgs = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    updateCartPaymentRequestInput?: InputMaybe<UpdateCartPaymentRequestInput>;
};
export type MutationSendForgotOtpOnEmailArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendEmailForgotOtpRequestSchemaInput?: InputMaybe<SendEmailForgotOtpRequestSchemaInput>;
};
export type MutationSendForgotOtpOnMobileArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendMobileForgotOtpRequestSchemaInput?: InputMaybe<SendMobileForgotOtpRequestSchemaInput>;
};
export type MutationSendOtpOnEmailArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendEmailOtpRequestSchemaInput?: InputMaybe<SendEmailOtpRequestSchemaInput>;
};
export type MutationSendOtpOnMobileArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendMobileOtpRequestSchemaInput?: InputMaybe<SendMobileOtpRequestSchemaInput>;
};
export type MutationSendOtpToShipmentCustomerArgs = {
    order_id?: InputMaybe<Scalars['String']['input']>;
    shipment_id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationSendResetPasswordEmailArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendResetPasswordEmailRequestSchemaInput?: InputMaybe<SendResetPasswordEmailRequestSchemaInput>;
};
export type MutationSendResetPasswordMobileArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendResetPasswordMobileRequestSchemaInput?: InputMaybe<SendResetPasswordMobileRequestSchemaInput>;
};
export type MutationSendResetTokenArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
export type MutationSendVerificationLinkToEmailArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationSendVerificationLinkToMobileArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    sendVerificationLinkMobileRequestSchemaInput?: InputMaybe<SendVerificationLinkMobileRequestSchemaInput>;
};
export type MutationSetEmailAsPrimaryArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
};
export type MutationSetMobileNumberAsPrimaryArgs = {
    sendVerificationLinkMobileRequestSchemaInput?: InputMaybe<SendVerificationLinkMobileRequestSchemaInput>;
};
export type MutationSubmitCustomFormArgs = {
    customFormSubmissionPayloadInput?: InputMaybe<CustomFormSubmissionPayloadInput>;
    slug: Scalars['String']['input'];
};
export type MutationUnfollowByIdArgs = {
    entityId: Scalars['String']['input'];
    entityType: Scalars['String']['input'];
};
export type MutationUpdateAddressArgs = {
    address2Input?: InputMaybe<Address2Input>;
};
export type MutationUpdateCartArgs = {
    area_code?: InputMaybe<Scalars['String']['input']>;
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    updateCartRequestInput?: InputMaybe<UpdateCartRequestInput>;
};
export type MutationUpdateCartMetaArgs = {
    buy_now?: InputMaybe<Scalars['Boolean']['input']>;
    cartMetaRequestInput?: InputMaybe<CartMetaRequestInput>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationUpdateCartWithSharedItemsArgs = {
    action: Action;
    token: Scalars['String']['input'];
};
export type MutationUpdateDefaultBeneficiaryArgs = {
    setDefaultBeneficiaryRequestInput?: InputMaybe<SetDefaultBeneficiaryRequestInput>;
};
export type MutationUpdatePasswordArgs = {
    updatePasswordRequestSchemaInput?: InputMaybe<UpdatePasswordRequestSchemaInput>;
};
export type MutationUpdateProfileArgs = {
    editProfileRequestSchemaInput?: InputMaybe<EditProfileRequestSchemaInput>;
    platform?: InputMaybe<Scalars['String']['input']>;
};
export type MutationUpdateShipmentStatusArgs = {
    shipment_id: Scalars['String']['input'];
    updateShipmentStatusRequestInput: UpdateShipmentStatusRequestInput;
};
export type MutationUpsertAppPushtokenArgs = {
    pushtokenReqInput: PushtokenReqInput;
};
export type MutationUpsertCommunicationConsentArgs = {
    communicationConsentReqInput: CommunicationConsentReqInput;
};
export type MutationValidateVpaArgs = {
    validateVPARequestInput?: InputMaybe<ValidateVpaRequestInput>;
};
export type MutationVerifyAndChargePaymentArgs = {
    chargeCustomerRequestInput?: InputMaybe<ChargeCustomerRequestInput>;
};
export type MutationVerifyCustomerForPaymentArgs = {
    validateCustomerRequestInput?: InputMaybe<ValidateCustomerRequestInput>;
};
export type MutationVerifyEmailArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
export type MutationVerifyEmailForgotOtpArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    verifyEmailForgotOtpRequestSchemaInput?: InputMaybe<VerifyEmailForgotOtpRequestSchemaInput>;
};
export type MutationVerifyEmailOtpArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    verifyEmailOtpRequestSchemaInput?: InputMaybe<VerifyEmailOtpRequestSchemaInput>;
};
export type MutationVerifyMobileArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
export type MutationVerifyMobileForgotOtpArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    verifyMobileForgotOtpRequestSchemaInput?: InputMaybe<VerifyMobileForgotOtpRequestSchemaInput>;
};
export type MutationVerifyMobileOtpArgs = {
    platform?: InputMaybe<Scalars['String']['input']>;
    verifyOtpRequestSchemaInput?: InputMaybe<VerifyOtpRequestSchemaInput>;
};
export type MutationVerifyOtpAndAddBeneficiaryForBankArgs = {
    addBeneficiaryViaOtpVerificationRequestInput?: InputMaybe<AddBeneficiaryViaOtpVerificationRequestInput>;
};
export type MutationVerifyOtpAndAddBeneficiaryForWalletArgs = {
    walletOtpRequestInput?: InputMaybe<WalletOtpRequestInput>;
};
export type MutationVerifyOtpShipmentCustomerArgs = {
    order_id?: InputMaybe<Scalars['String']['input']>;
    shipment_id?: InputMaybe<Scalars['String']['input']>;
    verifyOtpInput?: InputMaybe<VerifyOtpInput>;
};
export type NameInformation = {
    __typename?: 'NameInformation';
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type Navigation = {
    __typename?: 'Navigation';
    application?: Maybe<Scalars['String']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    created_by?: Maybe<CreatedBy>;
    date_meta?: Maybe<DateMeta>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    orientation?: Maybe<Orientation>;
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    slug?: Maybe<Scalars['String']['output']>;
    version?: Maybe<Scalars['Float']['output']>;
};
export type NavigationReference = {
    __typename?: 'NavigationReference';
    acl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    action?: Maybe<ContentAction>;
    active?: Maybe<Scalars['Boolean']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    locale_language?: Maybe<LocaleLanguage>;
    sort_order?: Maybe<Scalars['Int']['output']>;
    sub_navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Navigations = {
    __typename?: 'Navigations';
    items?: Maybe<Array<Maybe<Navigation>>>;
    page?: Maybe<PageInfo>;
};
export type NestedTrackingDetails = {
    __typename?: 'NestedTrackingDetails';
    is_current?: Maybe<Scalars['Boolean']['output']>;
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    time?: Maybe<Scalars['String']['output']>;
};
export type NetQuantity = {
    __typename?: 'NetQuantity';
    /** The unit of measurement used for the net quantity of the product. */
    unit?: Maybe<Unit>;
    /** The value of the net quantity of the product. */
    value?: Maybe<Scalars['Float']['output']>;
};
export type NextSchedule = {
    __typename?: 'NextSchedule';
    end?: Maybe<Scalars['String']['output']>;
    start?: Maybe<Scalars['String']['output']>;
};
export type OAuthRequestAppleSchemaInput = {
    oauth?: InputMaybe<OAuthRequestAppleSchemaOauthInput>;
    profile?: InputMaybe<OAuthRequestAppleSchemaProfileInput>;
    user_identifier?: InputMaybe<Scalars['String']['input']>;
};
export type OAuthRequestAppleSchemaOauthInput = {
    identity_token?: InputMaybe<Scalars['String']['input']>;
};
export type OAuthRequestAppleSchemaProfileInput = {
    first_name?: InputMaybe<Scalars['String']['input']>;
    full_name?: InputMaybe<Scalars['String']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
};
export type OAuthRequestSchemaInput = {
    is_signed_in?: InputMaybe<Scalars['Boolean']['input']>;
    oauth2?: InputMaybe<OAuthRequestSchemaOauth2Input>;
    profile?: InputMaybe<OAuthRequestSchemaProfileInput>;
};
export type OAuthRequestSchemaOauth2Input = {
    access_token?: InputMaybe<Scalars['String']['input']>;
    expiry?: InputMaybe<Scalars['Int']['input']>;
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
export type OAuthRequestSchemaProfileInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    full_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
};
export type OfferItem = {
    __typename?: 'OfferItem';
    auto_applied?: Maybe<Scalars['Boolean']['output']>;
    best?: Maybe<Scalars['Boolean']['output']>;
    margin?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<OfferPrice>;
    quantity?: Maybe<Scalars['Int']['output']>;
    total?: Maybe<Scalars['Float']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type OfferPrice = {
    __typename?: 'OfferPrice';
    bulk_effective?: Maybe<Scalars['Float']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Int']['output']>;
    marked?: Maybe<Scalars['Int']['output']>;
};
export declare enum Operation {
    RemoveItem = "remove_item",
    UpdateItem = "update_item"
}
export type Order = {
    __typename?: 'Order';
    bags_for_reorder?: Maybe<Array<Maybe<BagsForReorder>>>;
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValues>>>;
    is_validated?: Maybe<Scalars['Boolean']['output']>;
    order_created_time?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    shipments?: Maybe<Array<Maybe<OrderShipment>>>;
    total_shipments_in_order?: Maybe<Scalars['Int']['output']>;
    user_info?: Maybe<UserInfo>;
};
export type OrderAppliedFreeArticles = {
    __typename?: 'OrderAppliedFreeArticles';
    article_id?: Maybe<Scalars['String']['output']>;
    free_gift_item_details?: Maybe<Scalars['JSON']['output']>;
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    quantity?: Maybe<Scalars['Float']['output']>;
};
export type OrderBags = {
    __typename?: 'OrderBags';
    applied_promos?: Maybe<Array<Maybe<AppliedPromos>>>;
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    can_return?: Maybe<Scalars['Boolean']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    current_status?: Maybe<CurrentStatus>;
    delivery_date?: Maybe<Scalars['String']['output']>;
    financial_breakup?: Maybe<Array<Maybe<FinancialBreakup>>>;
    id?: Maybe<Scalars['Int']['output']>;
    item?: Maybe<OrderItem>;
    line_number?: Maybe<Scalars['Int']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    parent_promo_bags?: Maybe<Scalars['JSON']['output']>;
    prices?: Maybe<Prices>;
    quantity?: Maybe<Scalars['Int']['output']>;
    returnable_date?: Maybe<Scalars['String']['output']>;
    seller_identifier?: Maybe<Scalars['String']['output']>;
};
export type OrderBeneficiaryDetail = {
    __typename?: 'OrderBeneficiaryDetail';
    beneficiaries?: Maybe<Array<Maybe<BeneficiaryDetails>>>;
    show_beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
};
export type OrderBreakupValues = {
    __typename?: 'OrderBreakupValues';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type OrderConnection = {
    __typename?: 'OrderConnection';
    filters?: Maybe<OrderFilters>;
    items?: Maybe<Array<Maybe<Order>>>;
    page?: Maybe<OrderPageInfo>;
};
export type OrderFeature = {
    __typename?: 'OrderFeature';
    buy_again?: Maybe<Scalars['Boolean']['output']>;
};
export type OrderFilters = {
    __typename?: 'OrderFilters';
    statuses?: Maybe<Array<Maybe<OrderStatus>>>;
};
export type OrderItem = {
    __typename?: 'OrderItem';
    brand?: Maybe<ItemBrand>;
    code?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    image?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    l1_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    l2_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    l3_category_name?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    seller_identifier?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['String']['output']>;
    slug_key?: Maybe<Scalars['String']['output']>;
};
export type OrderPageInfo = {
    __typename?: 'OrderPageInfo';
    current?: Maybe<Scalars['Int']['output']>;
    has_next?: Maybe<Scalars['Boolean']['output']>;
    item_total?: Maybe<Scalars['Int']['output']>;
    size?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type OrderShipment = {
    __typename?: 'OrderShipment';
    awb_no?: Maybe<Scalars['String']['output']>;
    bags?: Maybe<Array<Maybe<OrderBags>>>;
    beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValues>>>;
    can_break?: Maybe<Scalars['JSON']['output']>;
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    can_return?: Maybe<Scalars['Boolean']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    custom_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    delivery_address?: Maybe<DeliveryAddress>;
    delivery_date?: Maybe<Scalars['String']['output']>;
    dp_name?: Maybe<Scalars['String']['output']>;
    fulfilling_company?: Maybe<FulfillingCompany>;
    fulfilling_store?: Maybe<FulfillingStore>;
    invoice?: Maybe<Invoice>;
    need_help_url?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    order_type?: Maybe<Scalars['String']['output']>;
    payment?: Maybe<ShipmentPayment>;
    prices?: Maybe<Prices>;
    promise?: Maybe<Promise>;
    refund_details?: Maybe<Scalars['JSON']['output']>;
    return_meta?: Maybe<Scalars['JSON']['output']>;
    returnable_date?: Maybe<Scalars['String']['output']>;
    shipment_created_at?: Maybe<Scalars['String']['output']>;
    shipment_id?: Maybe<Scalars['String']['output']>;
    shipment_status?: Maybe<ShipmentStatus>;
    show_download_invoice?: Maybe<Scalars['Boolean']['output']>;
    show_track_link?: Maybe<Scalars['Boolean']['output']>;
    size_info?: Maybe<Scalars['JSON']['output']>;
    total_bags?: Maybe<Scalars['Int']['output']>;
    total_details?: Maybe<ShipmentTotalDetails>;
    track_url?: Maybe<Scalars['String']['output']>;
    tracking_details?: Maybe<Array<Maybe<TrackingDetails>>>;
    traking_no?: Maybe<Scalars['String']['output']>;
    user_info?: Maybe<ShipmentUserInfo>;
};
export type OrderStatus = {
    __typename?: 'OrderStatus';
    display?: Maybe<Scalars['String']['output']>;
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    value?: Maybe<Scalars['Int']['output']>;
};
export type OrderingStore = {
    __typename?: 'OrderingStore';
    address?: Maybe<CompanyAddress>;
    code?: Maybe<Scalars['String']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    pincode?: Maybe<Scalars['Int']['output']>;
    store_code?: Maybe<Scalars['String']['output']>;
    store_type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type OrderingStoreSelectInput = {
    uid: Scalars['Int']['input'];
};
export type OrderingStoreSelectRequestInput = {
    ordering_store: OrderingStoreSelectInput;
};
export type OrderingStores = {
    __typename?: 'OrderingStores';
    all_stores?: Maybe<Scalars['Boolean']['output']>;
    app?: Maybe<Scalars['String']['output']>;
    deployed_stores?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    items?: Maybe<Array<Maybe<OrderingStore>>>;
    page?: Maybe<PageInfo>;
    type?: Maybe<StoreType>;
};
export type Orientation = {
    __typename?: 'Orientation';
    landscape?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    portrait?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type OtpSuccess = {
    __typename?: 'OtpSuccess';
    country_code?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    register_token?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    resend_timer?: Maybe<Scalars['Int']['output']>;
    resend_token?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type OutstandingOrderDetail = {
    __typename?: 'OutstandingOrderDetail';
    data?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    message?: Maybe<Scalars['String']['output']>;
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type OwnerInfo = {
    __typename?: 'OwnerInfo';
    emails?: Maybe<Array<Maybe<UserEmail>>>;
    first_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    last_name?: Maybe<Scalars['String']['output']>;
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    profile_pic?: Maybe<Scalars['String']['output']>;
};
export type Ownership = {
    __typename?: 'Ownership';
    payable_by?: Maybe<Scalars['String']['output']>;
    payable_category?: Maybe<Scalars['String']['output']>;
};
export type Page = {
    __typename?: 'Page';
    application?: Maybe<Scalars['String']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    component_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    content?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    content_path?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<CreatedBy>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    date_meta?: Maybe<DateMeta>;
    description?: Maybe<Scalars['String']['output']>;
    feature_image?: Maybe<Asset>;
    id?: Maybe<Scalars['String']['output']>;
    orientation?: Maybe<Scalars['String']['output']>;
    page_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    params?: Maybe<Params>;
    platform?: Maybe<Scalars['String']['output']>;
    published?: Maybe<Scalars['Boolean']['output']>;
    schedule?: Maybe<CronSchedule>;
    seo?: Maybe<Seo>;
    slug?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    title?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    visibility?: Maybe<Scalars['JSON']['output']>;
};
export type PageAction = {
    __typename?: 'PageAction';
    page?: Maybe<ActionPage>;
    type?: Maybe<Scalars['String']['output']>;
};
export type PageConfig = {
    __typename?: 'PageConfig';
    page?: Maybe<Scalars['String']['output']>;
    settings?: Maybe<Scalars['JSON']['output']>;
};
export type PageCoupon = {
    __typename?: 'PageCoupon';
    current?: Maybe<Scalars['Int']['output']>;
    has_next?: Maybe<Scalars['Boolean']['output']>;
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    total?: Maybe<Scalars['Int']['output']>;
    total_item_count?: Maybe<Scalars['Int']['output']>;
};
export type PageDetail = {
    __typename?: 'PageDetail';
    id?: Maybe<Scalars['String']['output']>;
    path?: Maybe<Scalars['String']['output']>;
    props?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    sections?: Maybe<Array<Maybe<PageSections>>>;
    sections_meta?: Maybe<Array<Maybe<PageSectionMetaAttributes>>>;
    seo?: Maybe<PageSeo>;
    text?: Maybe<Scalars['String']['output']>;
    theme?: Maybe<Scalars['String']['output']>;
    type?: Maybe<PageTypes>;
    value?: Maybe<Scalars['String']['output']>;
};
export type PageInfo = {
    __typename?: 'PageInfo';
    current?: Maybe<Scalars['Int']['output']>;
    has_next?: Maybe<Scalars['Boolean']['output']>;
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    item_total?: Maybe<Scalars['Int']['output']>;
    next_id?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type PagePredicate = {
    __typename?: 'PagePredicate';
    route?: Maybe<PageRoutePredicate>;
    screen?: Maybe<PageScreenPredicate>;
    user?: Maybe<PageUserPredicate>;
};
export type PageRoutePredicate = {
    __typename?: 'PageRoutePredicate';
    exact_url?: Maybe<Scalars['String']['output']>;
    query?: Maybe<Scalars['JSON']['output']>;
    selected?: Maybe<SelectedType>;
};
export type PageSeo = {
    __typename?: 'PageSEO';
    description?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type PageScreenPredicate = {
    __typename?: 'PageScreenPredicate';
    desktop?: Maybe<Scalars['Boolean']['output']>;
    mobile?: Maybe<Scalars['Boolean']['output']>;
    tablet?: Maybe<Scalars['Boolean']['output']>;
};
export type PageSectionMetaAttributes = {
    __typename?: 'PageSectionMetaAttributes';
    attributes?: Maybe<Scalars['JSON']['output']>;
};
export type PageSections = {
    __typename?: 'PageSections';
    blocks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    label?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    predicate?: Maybe<PagePredicate>;
    preset?: Maybe<Scalars['JSON']['output']>;
    props?: Maybe<Scalars['JSON']['output']>;
};
export declare enum PageTypes {
    Custom = "custom",
    Sections = "sections",
    System = "system"
}
export type PageUserPredicate = {
    __typename?: 'PageUserPredicate';
    anonymous?: Maybe<Scalars['Boolean']['output']>;
    authenticated?: Maybe<Scalars['Boolean']['output']>;
};
export declare enum PageVisibilityOfItem {
    Pdp = "pdp"
}
export type Pages = {
    __typename?: 'Pages';
    items?: Maybe<Array<Maybe<Page>>>;
    page?: Maybe<PageInfo>;
};
export type Params = {
    __typename?: 'Params';
    slug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type Participant = {
    __typename?: 'Participant';
    identity?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UserDetail>;
};
export type ParticipantsInsideVideoRoomResponse = {
    __typename?: 'ParticipantsInsideVideoRoomResponse';
    participants: Array<Maybe<Participant>>;
};
export type PasswordLoginRequestSchemaInput = {
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export type Payment = {
    __typename?: 'Payment';
    activeCardAggregator?: Maybe<ActiveRefundTransferModes>;
    activeUserCards?: Maybe<CardConnection>;
    cardDetails?: Maybe<CardData>;
    checkCredit?: Maybe<CreditDetail>;
    customerCreditSummary?: Maybe<UserCredit>;
    epayLaterBannerDetails?: Maybe<EpaylaterBanner>;
    outstandingOrderDetails?: Maybe<OutstandingOrderDetail>;
    paidOrderDetails?: Maybe<OutstandingOrderDetail>;
    paymentModeRoutesPaymentLink?: Maybe<PaymentModeRouteDetail>;
    rupifiBannerDetails?: Maybe<RupifiBanner>;
    verifyIFSCCode?: Maybe<IfscCodeDetail>;
};
export type PaymentActiveCardAggregatorArgs = {
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
};
export type PaymentActiveUserCardsArgs = {
    forceRefresh?: InputMaybe<Scalars['Boolean']['input']>;
};
export type PaymentCardDetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
    cardInfo: Scalars['String']['input'];
};
export type PaymentCheckCreditArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentCustomerCreditSummaryArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentOutstandingOrderDetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentPaidOrderDetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentPaymentModeRoutesPaymentLinkArgs = {
    paymentLinkId: Scalars['String']['input'];
};
export type PaymentRupifiBannerDetailsArgs = {
    pageValue: Scalars['String']['input'];
};
export type PaymentVerifyIfscCodeArgs = {
    ifscCode?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentCouponValidate = {
    __typename?: 'PaymentCouponValidate';
    coupon_validity?: Maybe<CouponValidity>;
    message?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
};
export type PaymentFlows = {
    __typename?: 'PaymentFlows';
    ajiodhan?: Maybe<PaymentFlowDetail>;
    bqr_razorpay?: Maybe<PaymentFlowDetail>;
    ccavenue?: Maybe<PaymentFlowDetail>;
    epaylater?: Maybe<PaymentFlowDetail>;
    fynd?: Maybe<PaymentFlowDetail>;
    jiopay?: Maybe<PaymentFlowDetail>;
    juspay?: Maybe<PaymentFlowDetail>;
    mswipe?: Maybe<PaymentFlowDetail>;
    payubiz?: Maybe<PaymentFlowDetail>;
    razorpay?: Maybe<PaymentFlowDetail>;
    rupifi?: Maybe<PaymentFlowDetail>;
    simpl?: Maybe<PaymentFlowDetail>;
    stripe?: Maybe<PaymentFlowDetail>;
    upi_razorpay?: Maybe<PaymentFlowDetail>;
};
export type PaymentInitializationRequestInput = {
    aggregator: Scalars['String']['input'];
    amount: Scalars['Int']['input'];
    contact: Scalars['String']['input'];
    currency: Scalars['String']['input'];
    customer_id: Scalars['String']['input'];
    device_id?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    merchant_order_id: Scalars['String']['input'];
    method: Scalars['String']['input'];
    order_id: Scalars['String']['input'];
    razorpay_payment_id?: InputMaybe<Scalars['String']['input']>;
    timeout?: InputMaybe<Scalars['Int']['input']>;
    vpa?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentInitializationResponse = {
    __typename?: 'PaymentInitializationResponse';
    aggregator: Scalars['String']['output'];
    aggregator_order_id?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Int']['output']>;
    bqr_image?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<Scalars['String']['output']>;
    customer_id?: Maybe<Scalars['String']['output']>;
    device_id?: Maybe<Scalars['String']['output']>;
    merchant_order_id: Scalars['String']['output'];
    method: Scalars['String']['output'];
    polling_url: Scalars['String']['output'];
    razorpay_payment_id?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    success: Scalars['Boolean']['output'];
    timeout?: Maybe<Scalars['Int']['output']>;
    upi_poll_url?: Maybe<Scalars['String']['output']>;
    virtual_id?: Maybe<Scalars['String']['output']>;
    vpa?: Maybe<Scalars['String']['output']>;
};
export type PaymentLink = {
    __typename?: 'PaymentLink';
    amount?: Maybe<Scalars['Float']['output']>;
    external_order_id?: Maybe<Scalars['String']['output']>;
    merchant_name?: Maybe<Scalars['String']['output']>;
    message: Scalars['String']['output'];
    payment_link_current_status?: Maybe<Scalars['String']['output']>;
    payment_link_url?: Maybe<Scalars['String']['output']>;
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type PaymentLinkDetail = {
    __typename?: 'PaymentLinkDetail';
    paymentLink?: Maybe<PaymentLink>;
    pollingPaymentLink?: Maybe<PollingPaymentLinkDetail>;
};
export type PaymentMetaInput = {
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    payment_gateway?: InputMaybe<Scalars['String']['input']>;
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentMethodInput = {
    amount?: InputMaybe<Scalars['Float']['input']>;
    mode: Scalars['String']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    payment?: InputMaybe<Scalars['String']['input']>;
    payment_extra_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    payment_meta: PaymentMetaInput;
};
export type PaymentModeList = {
    __typename?: 'PaymentModeList';
    aggregator_name: Scalars['String']['output'];
    card_brand?: Maybe<Scalars['String']['output']>;
    card_brand_image?: Maybe<Scalars['String']['output']>;
    card_fingerprint?: Maybe<Scalars['String']['output']>;
    card_id?: Maybe<Scalars['String']['output']>;
    card_isin?: Maybe<Scalars['String']['output']>;
    card_issuer?: Maybe<Scalars['String']['output']>;
    card_name?: Maybe<Scalars['String']['output']>;
    card_number?: Maybe<Scalars['String']['output']>;
    card_reference?: Maybe<Scalars['String']['output']>;
    card_token?: Maybe<Scalars['String']['output']>;
    card_type?: Maybe<Scalars['String']['output']>;
    cod_limit?: Maybe<Scalars['Float']['output']>;
    cod_limit_per_order?: Maybe<Scalars['Float']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    compliant_with_tokenisation_guidelines?: Maybe<Scalars['Boolean']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    display_priority?: Maybe<Scalars['Int']['output']>;
    exp_month?: Maybe<Scalars['Int']['output']>;
    exp_year?: Maybe<Scalars['Int']['output']>;
    expired?: Maybe<Scalars['Boolean']['output']>;
    fynd_vpa?: Maybe<Scalars['String']['output']>;
    intent_app?: Maybe<Array<Maybe<IntentApp>>>;
    intent_app_error_dict_list?: Maybe<Array<Maybe<IntentAppErrorList>>>;
    intent_app_error_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    intent_flow?: Maybe<Scalars['Boolean']['output']>;
    logo_url?: Maybe<Logo>;
    merchant_code?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    nickname?: Maybe<Scalars['String']['output']>;
    remaining_limit?: Maybe<Scalars['Float']['output']>;
    retry_count?: Maybe<Scalars['Int']['output']>;
    timeout?: Maybe<Scalars['Int']['output']>;
};
export type PaymentModeRouteDetail = {
    __typename?: 'PaymentModeRouteDetail';
    payment_options: PaymentOptionDetails;
    success: Scalars['Boolean']['output'];
};
export type PaymentOptionDetails = {
    __typename?: 'PaymentOptionDetails';
    payment_flows: PaymentFlows;
    payment_option: Array<Maybe<RootPaymentMode>>;
};
export type PaymentSelectionLock = {
    __typename?: 'PaymentSelectionLock';
    default_options?: Maybe<Scalars['String']['output']>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
    payment_identifier?: Maybe<Scalars['String']['output']>;
};
export type PaymentStatusUpdateRequestInput = {
    aggregator: Scalars['String']['input'];
    amount: Scalars['Int']['input'];
    contact: Scalars['String']['input'];
    currency: Scalars['String']['input'];
    customer_id: Scalars['String']['input'];
    device_id?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    merchant_order_id: Scalars['String']['input'];
    merchant_transaction_id: Scalars['String']['input'];
    method: Scalars['String']['input'];
    order_id: Scalars['String']['input'];
    status: Scalars['String']['input'];
    vpa?: InputMaybe<Scalars['String']['input']>;
};
export type PaymentStatusUpdateResponse = {
    __typename?: 'PaymentStatusUpdateResponse';
    aggregator_name: Scalars['String']['output'];
    redirect_url?: Maybe<Scalars['String']['output']>;
    retry: Scalars['Boolean']['output'];
    status: Scalars['String']['output'];
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type Payment_MethodsInput = {
    meta: Meta2Input;
    mode: Scalars['String']['input'];
    name: Scalars['String']['input'];
};
export type PayuMoneyAggregatorConfig = {
    __typename?: 'PayuMoneyAggregatorConfig';
    api_domain?: Maybe<Scalars['String']['output']>;
    checkout_formpost_url?: Maybe<Scalars['String']['output']>;
    config_type?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    merchant_id?: Maybe<Scalars['String']['output']>;
    merchant_salt?: Maybe<Scalars['String']['output']>;
    refund_api_domain?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
};
export type PcrFeature = {
    __typename?: 'PcrFeature';
    staff_selection?: Maybe<Scalars['Boolean']['output']>;
};
export type Personal_InfoInput = {
    address_as_per_id: Address_As_Per_IdInput;
    dob: Scalars['String']['input'];
    driving_license?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    email_verified: Scalars['Boolean']['input'];
    fathers_name?: InputMaybe<Scalars['String']['input']>;
    first_name: Scalars['String']['input'];
    gender?: InputMaybe<Scalars['String']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    middle_name?: InputMaybe<Scalars['String']['input']>;
    mobile_verified: Scalars['Boolean']['input'];
    mothers_name?: InputMaybe<Scalars['String']['input']>;
    pan?: InputMaybe<Scalars['String']['input']>;
    passport?: InputMaybe<Scalars['String']['input']>;
    phone: Scalars['String']['input'];
    voter_id?: InputMaybe<Scalars['String']['input']>;
};
export type PhoneNumber = {
    __typename?: 'PhoneNumber';
    active?: Maybe<Scalars['Boolean']['output']>;
    country_code?: Maybe<Scalars['Int']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    primary?: Maybe<Scalars['Boolean']['output']>;
    verified?: Maybe<Scalars['Boolean']['output']>;
};
export type PhoneProperties = {
    __typename?: 'PhoneProperties';
    code?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
};
export type PhoneSchema = {
    __typename?: 'PhoneSchema';
    active?: Maybe<Scalars['Boolean']['output']>;
    phone?: Maybe<Array<Maybe<PhoneProperties>>>;
};
export type PhoneSupport = {
    __typename?: 'PhoneSupport';
    code?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    number?: Maybe<Scalars['String']['output']>;
};
export type PincodeData = {
    __typename?: 'PincodeData';
    display_name?: Maybe<Scalars['String']['output']>;
    error: PincodeError;
    lat_long?: Maybe<PincodeLatLongData>;
    meta?: Maybe<PincodeMetaData>;
    meta_code?: Maybe<CountryMetaData>;
    name?: Maybe<Scalars['String']['output']>;
    sub_type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type PincodeDataResponse = {
    __typename?: 'PincodeDataResponse';
    data?: Maybe<Array<Maybe<PincodeData>>>;
    error: PincodeError;
    success: Scalars['Boolean']['output'];
};
export type PincodeDetails = {
    __typename?: 'PincodeDetails';
    display_name?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    sub_type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type PincodeError = {
    __typename?: 'PincodeError';
    message?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type PincodeLatLongData = {
    __typename?: 'PincodeLatLongData';
    coordinates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
};
export type PincodeMetaData = {
    __typename?: 'PincodeMetaData';
    internal_zone_id?: Maybe<Scalars['Int']['output']>;
    zone?: Maybe<Scalars['String']['output']>;
};
export type PlatformConfig = {
    __typename?: 'PlatformConfig';
    active?: Maybe<Scalars['Boolean']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    delete_account_consent?: Maybe<Scalars['JSON']['output']>;
    delete_account_day?: Maybe<Scalars['Int']['output']>;
    delete_account_reasons?: Maybe<Array<Maybe<DeleteAccountReasons>>>;
    desktop_image?: Maybe<Scalars['String']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    flash_card?: Maybe<FlashCard>;
    forgot_password?: Maybe<Scalars['Boolean']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    login?: Maybe<Login>;
    look_and_feel?: Maybe<LookAndFeel>;
    meta?: Maybe<MetaDetail>;
    mobile_image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    register?: Maybe<Scalars['Boolean']['output']>;
    register_required_fields?: Maybe<RegisterRequiredFields>;
    required_fields?: Maybe<RequiredFields>;
    session_config?: Maybe<Scalars['JSON']['output']>;
    skip_captcha?: Maybe<Scalars['Boolean']['output']>;
    skip_login?: Maybe<Scalars['Boolean']['output']>;
    social?: Maybe<Social>;
    social_tokens?: Maybe<SocialTokens>;
    subtext?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type PollForAssignment = {
    __typename?: 'PollForAssignment';
    duration: Scalars['Float']['output'];
    failure_message: Scalars['String']['output'];
    message: Scalars['String']['output'];
    success_message: Scalars['String']['output'];
};
export type PollingPaymentLinkDetail = {
    __typename?: 'PollingPaymentLinkDetail';
    aggregator_name?: Maybe<Scalars['String']['output']>;
    amount?: Maybe<Scalars['Float']['output']>;
    http_status?: Maybe<Scalars['Int']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    order_id?: Maybe<Scalars['String']['output']>;
    payment_link_id?: Maybe<Scalars['String']['output']>;
    redirect_url?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    status_code?: Maybe<Scalars['Int']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type PotleeAggregatorConfig = {
    __typename?: 'PotleeAggregatorConfig';
    companyId?: Maybe<Scalars['String']['output']>;
    config_type?: Maybe<Scalars['String']['output']>;
    domain?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
};
export type Preset = {
    __typename?: 'Preset';
    pages?: Maybe<Array<Maybe<PageDetail>>>;
};
export type Price = {
    __typename?: 'Price';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    max?: Maybe<Scalars['Float']['output']>;
    min?: Maybe<Scalars['Float']['output']>;
};
export type PriceInfo = {
    __typename?: 'PriceInfo';
    add_on?: Maybe<Scalars['Float']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Float']['output']>;
    marked?: Maybe<Scalars['Float']['output']>;
    selling?: Maybe<Scalars['Float']['output']>;
};
export type Prices = {
    __typename?: 'Prices';
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    amount_paid?: Maybe<Scalars['Float']['output']>;
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    cashback?: Maybe<Scalars['Float']['output']>;
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    cod_charges?: Maybe<Scalars['Float']['output']>;
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    coupon_value?: Maybe<Scalars['Float']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    price_effective?: Maybe<Scalars['Float']['output']>;
    price_marked?: Maybe<Scalars['Float']['output']>;
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    refund_amount?: Maybe<Scalars['Float']['output']>;
    refund_credit?: Maybe<Scalars['Float']['output']>;
    transfer_price?: Maybe<Scalars['Float']['output']>;
    value_of_good?: Maybe<Scalars['Float']['output']>;
};
export type Priority = {
    __typename?: 'Priority';
    color: Scalars['String']['output'];
    display: Scalars['String']['output'];
    key: PriorityEnum;
};
export declare enum PriorityEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    Urgent = "urgent"
}
export type Product = {
    __typename?: 'Product';
    action?: Maybe<PageAction>;
    attributes?: Maybe<Scalars['JSON']['output']>;
    brand?: Maybe<Brand>;
    categories?: Maybe<Array<Maybe<ProductBrand>>>;
    category_map?: Maybe<ProductCategoryMap>;
    color?: Maybe<Scalars['String']['output']>;
    custom_config?: Maybe<Scalars['JSON']['output']>;
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    custom_order?: Maybe<ProductDetailCustomOrder>;
    description?: Maybe<Scalars['String']['output']>;
    discount?: Maybe<Scalars['String']['output']>;
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    image_nature?: Maybe<Scalars['String']['output']>;
    is_dependent?: Maybe<Scalars['Boolean']['output']>;
    item_code?: Maybe<Scalars['String']['output']>;
    item_type?: Maybe<Scalars['String']['output']>;
    media?: Maybe<Array<Maybe<Media>>>;
    moq?: Maybe<Moq>;
    name?: Maybe<Scalars['String']['output']>;
    net_quantity?: Maybe<NetQuantity>;
    price?: Maybe<ProductListingPrice>;
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    product_online_date?: Maybe<Scalars['String']['output']>;
    rating?: Maybe<Scalars['Float']['output']>;
    rating_count?: Maybe<Scalars['Int']['output']>;
    sellable?: Maybe<Scalars['Boolean']['output']>;
    seo?: Maybe<ProductSeo>;
    short_description?: Maybe<Scalars['String']['output']>;
    similars?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    sizes?: Maybe<ProductSizes>;
    slug: Scalars['String']['output'];
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    teaser_tag?: Maybe<Scalars['String']['output']>;
    tryouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
};
export type ProductSizesArgs = {
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
export type ProductAction = {
    __typename?: 'ProductAction';
    query?: Maybe<ActionQuery>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ProductArticle = {
    __typename?: 'ProductArticle';
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    cart_item_meta?: Maybe<Scalars['JSON']['output']>;
    extra_meta?: Maybe<Scalars['JSON']['output']>;
    gift_card?: Maybe<Scalars['JSON']['output']>;
    identifier?: Maybe<Scalars['JSON']['output']>;
    is_gift_visible?: Maybe<Scalars['Boolean']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    mto_quantity?: Maybe<Scalars['Int']['output']>;
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    price?: Maybe<ArticlePriceInfo>;
    product_group_tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    quantity?: Maybe<Scalars['Int']['output']>;
    seller?: Maybe<NameInformation>;
    seller_identifier?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['String']['output']>;
    store?: Maybe<StoreInfo>;
    type?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type ProductAvailability = {
    __typename?: 'ProductAvailability';
    available_sizes?: Maybe<Array<Maybe<ProductSizeDetailsCart>>>;
    deliverable?: Maybe<Scalars['Boolean']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    other_store_quantity?: Maybe<Scalars['Int']['output']>;
    out_of_stock?: Maybe<Scalars['Boolean']['output']>;
    sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ProductAvailabilitySize = {
    __typename?: 'ProductAvailabilitySize';
    display?: Maybe<Scalars['String']['output']>;
    is_available?: Maybe<Scalars['Boolean']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ProductBrand = {
    __typename?: 'ProductBrand';
    action?: Maybe<PageAction>;
    description?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Media>;
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type ProductBundle = {
    __typename?: 'ProductBundle';
    items?: Maybe<Array<Maybe<ProductGroupingDetails>>>;
};
export type ProductCategoryMap = {
    __typename?: 'ProductCategoryMap';
    l1?: Maybe<ProductBrand>;
    l2?: Maybe<ProductBrand>;
    l3?: Maybe<ProductBrand>;
};
export type ProductCompareDetails = {
    __typename?: 'ProductCompareDetails';
    attributes_metadata?: Maybe<Array<Maybe<Attribute>>>;
    items?: Maybe<Array<Maybe<Product>>>;
    subtitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type ProductConnection = {
    __typename?: 'ProductConnection';
    filters?: Maybe<Scalars['JSON']['output']>;
    items: Array<Product>;
    message?: Maybe<Scalars['String']['output']>;
    page: PageInfo;
    sortOn?: Maybe<Scalars['JSON']['output']>;
};
export type ProductDetailCustomOrder = {
    __typename?: 'ProductDetailCustomOrder';
    is_custom_order?: Maybe<Scalars['Boolean']['output']>;
    manufacturing_time?: Maybe<Scalars['Int']['output']>;
    manufacturing_time_unit?: Maybe<Scalars['String']['output']>;
};
export type ProductDetailFeature = {
    __typename?: 'ProductDetailFeature';
    request_product?: Maybe<Scalars['Boolean']['output']>;
    seller_selection?: Maybe<Scalars['Boolean']['output']>;
    similar?: Maybe<Array<Maybe<SimilarListItem>>>;
    update_product_meta?: Maybe<Scalars['Boolean']['output']>;
};
export type ProductEdge = {
    __typename?: 'ProductEdge';
    cursor: Scalars['String']['output'];
    node: Product;
};
export type ProductFilters = {
    __typename?: 'ProductFilters';
    key: ProductFiltersKey;
    values: Array<Maybe<ProductFiltersValue>>;
};
export type ProductFiltersKey = {
    __typename?: 'ProductFiltersKey';
    display: Scalars['String']['output'];
    kind?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
};
export type ProductFiltersValue = {
    __typename?: 'ProductFiltersValue';
    count?: Maybe<Scalars['Int']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    display: Scalars['String']['output'];
    display_format?: Maybe<Scalars['String']['output']>;
    is_selected: Scalars['Boolean']['output'];
    max?: Maybe<Scalars['Int']['output']>;
    min?: Maybe<Scalars['Int']['output']>;
    query_format?: Maybe<Scalars['String']['output']>;
    selected_max?: Maybe<Scalars['Int']['output']>;
    selected_min?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ProductGroupedAttribute = {
    __typename?: 'ProductGroupedAttribute';
    details?: Maybe<Array<Maybe<DetailAttribute>>>;
    title?: Maybe<Scalars['String']['output']>;
};
export type ProductGroupingDetails = {
    __typename?: 'ProductGroupingDetails';
    choice?: Maybe<Scalars['JSON']['output']>;
    company_id?: Maybe<Scalars['Int']['output']>;
    created_by?: Maybe<UserDetails>;
    created_on: Scalars['String']['output'];
    id?: Maybe<Scalars['JSON']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    modified_by?: Maybe<UserDetails>;
    modified_on: Scalars['String']['output'];
    name: Scalars['JSON']['output'];
    page_visibility?: Maybe<Array<Maybe<PageVisibilityOfItem>>>;
    products: Array<Maybe<ProductInGroup>>;
    same_store_assignment?: Maybe<Scalars['Boolean']['output']>;
    slug?: Maybe<Scalars['JSON']['output']>;
    verified_by?: Maybe<UserDetails>;
    verified_on?: Maybe<Scalars['String']['output']>;
};
export type ProductImage = {
    __typename?: 'ProductImage';
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    secure_url?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ProductInGroup = {
    __typename?: 'ProductInGroup';
    allow_remove?: Maybe<Scalars['Boolean']['output']>;
    auto_add_to_cart?: Maybe<Scalars['Boolean']['output']>;
    auto_select?: Maybe<Scalars['Boolean']['output']>;
    max_quantity: Scalars['Int']['output'];
    min_quantity?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<ProductPriceDetails>;
    product_details?: Maybe<Product_Details>;
    product_uid: Scalars['Int']['output'];
    sizes?: Maybe<Array<Maybe<Size>>>;
};
export type ProductLadderPromotion = {
    __typename?: 'ProductLadderPromotion';
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    currency?: Maybe<CurrencyInfo>;
};
export type ProductListingPrice = {
    __typename?: 'ProductListingPrice';
    effective?: Maybe<Price>;
    marked?: Maybe<Price>;
};
export type ProductPrice = {
    __typename?: 'ProductPrice';
    add_on?: Maybe<Scalars['Float']['output']>;
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Float']['output']>;
    marked?: Maybe<Scalars['Float']['output']>;
    selling_price?: Maybe<Scalars['Float']['output']>;
};
export type ProductPriceDetails = {
    __typename?: 'ProductPriceDetails';
    currency?: Maybe<Scalars['JSON']['output']>;
    max_effective?: Maybe<Scalars['Float']['output']>;
    max_marked?: Maybe<Scalars['Float']['output']>;
    min_effective?: Maybe<Scalars['Float']['output']>;
    min_marked?: Maybe<Scalars['Float']['output']>;
};
export type ProductPriceInfo = {
    __typename?: 'ProductPriceInfo';
    base?: Maybe<ProductPrice>;
    converted?: Maybe<ProductPrice>;
};
export type ProductSeo = {
    __typename?: 'ProductSEO';
    /** The SEO description of the item */
    description?: Maybe<Scalars['JSON']['output']>;
    /** The SEO title of the item */
    title?: Maybe<Scalars['JSON']['output']>;
};
export type ProductSellers = {
    __typename?: 'ProductSellers';
    items?: Maybe<Array<Maybe<ProductSizePrice>>>;
    page?: Maybe<PageInfo>;
    sortOn?: Maybe<Scalars['JSON']['output']>;
};
export type ProductSet = {
    __typename?: 'ProductSet';
    quantity?: Maybe<Scalars['Int']['output']>;
    size_distribution?: Maybe<ProductSetDistribution>;
};
export type ProductSetDistribution = {
    __typename?: 'ProductSetDistribution';
    sizes?: Maybe<Array<Maybe<ProductSetDistributionSize>>>;
};
export type ProductSetDistributionSize = {
    __typename?: 'ProductSetDistributionSize';
    pieces?: Maybe<Scalars['Int']['output']>;
    size?: Maybe<Scalars['String']['output']>;
};
export type ProductSizeDetails = {
    __typename?: 'ProductSizeDetails';
    dimension?: Maybe<Dimension>;
    display?: Maybe<Scalars['String']['output']>;
    is_available?: Maybe<Scalars['Boolean']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    seller_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    value?: Maybe<Scalars['String']['output']>;
    weight?: Maybe<Weight>;
};
export type ProductSizeDetailsCart = {
    __typename?: 'ProductSizeDetailsCart';
    display?: Maybe<Scalars['String']['output']>;
    is_available?: Maybe<Scalars['Boolean']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ProductSizePrice = {
    __typename?: 'ProductSizePrice';
    article_assignment?: Maybe<ArticleAssignment>;
    article_id?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<DeliveryPromiseFormatted>;
    discount?: Maybe<Scalars['String']['output']>;
    discount_meta?: Maybe<DiscountMeta>;
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    is_cod?: Maybe<Scalars['Boolean']['output']>;
    is_gift?: Maybe<Scalars['Boolean']['output']>;
    item_type?: Maybe<Scalars['String']['output']>;
    long_lat?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    marketplace_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    pincode?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<ProductStockPrice>;
    price_per_piece?: Maybe<ProductStockPrice>;
    price_per_unit?: Maybe<ProductStockUnitPrice>;
    quantity?: Maybe<Scalars['Int']['output']>;
    return_config?: Maybe<ReturnConfig>;
    seller?: Maybe<Seller>;
    seller_count?: Maybe<Scalars['Int']['output']>;
    set?: Maybe<ProductSet>;
    special_badge?: Maybe<Scalars['String']['output']>;
    store?: Maybe<Store>;
    strategy_wise_listing?: Maybe<Array<Maybe<StrategyWiseListing>>>;
};
export type ProductSizeStores = {
    __typename?: 'ProductSizeStores';
    count?: Maybe<Scalars['Int']['output']>;
};
export type ProductSizes = {
    __typename?: 'ProductSizes';
    discount?: Maybe<Scalars['String']['output']>;
    multi_size?: Maybe<Scalars['Boolean']['output']>;
    price?: Maybe<ProductListingPrice>;
    sellable?: Maybe<Scalars['Boolean']['output']>;
    size_chart?: Maybe<SizeChart>;
    size_details?: Maybe<Array<Maybe<ProductSizeDetails>>>;
    slug?: Maybe<Scalars['String']['output']>;
    stores?: Maybe<ProductSizeStores>;
};
export type ProductSortOn = {
    __typename?: 'ProductSortOn';
    display?: Maybe<Scalars['String']['output']>;
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ProductStock = {
    __typename?: 'ProductStock';
    items?: Maybe<Array<Maybe<ProductStockDetail>>>;
};
export type ProductStockDetail = {
    __typename?: 'ProductStockDetail';
    company?: Maybe<CompanyDetail>;
    identifier?: Maybe<Scalars['JSON']['output']>;
    item_id?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<ProductStockPrice>;
    quantity?: Maybe<Scalars['Int']['output']>;
    seller?: Maybe<Seller>;
    size?: Maybe<Scalars['String']['output']>;
    store?: Maybe<Store>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type ProductStockPolling = {
    __typename?: 'ProductStockPolling';
    items?: Maybe<Array<Maybe<ProductStockDetail>>>;
    page: PageInfo;
};
export type ProductStockPrice = {
    __typename?: 'ProductStockPrice';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    effective?: Maybe<Scalars['Float']['output']>;
    marked?: Maybe<Scalars['Float']['output']>;
    selling?: Maybe<Scalars['Float']['output']>;
};
export type ProductStockUnitPrice = {
    __typename?: 'ProductStockUnitPrice';
    currency_code?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Scalars['Float']['output']>;
    unit?: Maybe<Scalars['String']['output']>;
};
export type ProductVariant = {
    __typename?: 'ProductVariant';
    display_type?: Maybe<Scalars['String']['output']>;
    header?: Maybe<Scalars['String']['output']>;
    items?: Maybe<Array<Maybe<ProductVariantItem>>>;
    key?: Maybe<Scalars['String']['output']>;
    total?: Maybe<Scalars['Int']['output']>;
};
export type ProductVariantItem = {
    __typename?: 'ProductVariantItem';
    _custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    action?: Maybe<PageAction>;
    color?: Maybe<Scalars['String']['output']>;
    color_name?: Maybe<Scalars['String']['output']>;
    is_available?: Maybe<Scalars['Boolean']['output']>;
    medias?: Maybe<Array<Maybe<Media>>>;
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type Product_Details = {
    __typename?: 'Product_details';
    attributes?: Maybe<Scalars['JSON']['output']>;
    brand_uid?: Maybe<Scalars['Int']['output']>;
    country_of_origin?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['JSON']['output']>;
    grouped_attributes?: Maybe<Scalars['JSON']['output']>;
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    highlights?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    hsn_code?: Maybe<Scalars['Int']['output']>;
    identifier?: Maybe<Scalars['JSON']['output']>;
    image_nature?: Maybe<Scalars['JSON']['output']>;
    images?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    is_set?: Maybe<Scalars['Boolean']['output']>;
    item_code?: Maybe<Scalars['JSON']['output']>;
    media?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    name?: Maybe<Scalars['JSON']['output']>;
    out_of_stock?: Maybe<Scalars['Boolean']['output']>;
    rating?: Maybe<Scalars['Float']['output']>;
    rating_count?: Maybe<Scalars['Int']['output']>;
    short_description?: Maybe<Scalars['JSON']['output']>;
    slug?: Maybe<Scalars['JSON']['output']>;
    template_tag?: Maybe<Scalars['JSON']['output']>;
};
export type Products3Input = {
    identifier?: InputMaybe<Scalars['String']['input']>;
    line_number?: InputMaybe<Scalars['Int']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
export type ProductsDataUpdatesFiltersInput = {
    identifier?: InputMaybe<Scalars['String']['input']>;
    line_number?: InputMaybe<Scalars['Int']['input']>;
};
export type ProductsDataUpdatesInput = {
    data?: InputMaybe<Scalars['JSON']['input']>;
    filters?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesFiltersInput>>>;
};
export type ProductsReasonsDataInput = {
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    reason_text?: InputMaybe<Scalars['String']['input']>;
};
export type ProductsReasonsFiltersInput = {
    identifier?: InputMaybe<Scalars['String']['input']>;
    line_number?: InputMaybe<Scalars['Int']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
export type ProductsReasonsInput = {
    data?: InputMaybe<ProductsReasonsDataInput>;
    filters?: InputMaybe<Array<InputMaybe<ProductsReasonsFiltersInput>>>;
};
export type ProfileEditSuccess = {
    __typename?: 'ProfileEditSuccess';
    country_code?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    register_token?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    resend_email_token?: Maybe<Scalars['String']['output']>;
    resend_timer?: Maybe<Scalars['Int']['output']>;
    resend_token?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    user?: Maybe<UserDetail>;
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
export type Promise = {
    __typename?: 'Promise';
    show_promise?: Maybe<Scalars['Boolean']['output']>;
    timestamp?: Maybe<TimeStampData>;
};
export type PromiseFormatted = {
    __typename?: 'PromiseFormatted';
    max?: Maybe<Scalars['String']['output']>;
    min?: Maybe<Scalars['String']['output']>;
};
export type PromiseTimestamp = {
    __typename?: 'PromiseTimestamp';
    max?: Maybe<Scalars['Float']['output']>;
    min?: Maybe<Scalars['Float']['output']>;
};
export type PromoMeta = {
    __typename?: 'PromoMeta';
    message?: Maybe<Scalars['String']['output']>;
};
export type PromotionOffer = {
    __typename?: 'PromotionOffer';
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    id?: Maybe<Scalars['String']['output']>;
    offer_text?: Maybe<Scalars['String']['output']>;
    promotion_group?: Maybe<Scalars['String']['output']>;
    valid_till?: Maybe<Scalars['String']['output']>;
};
export type PromotionOffers = {
    __typename?: 'PromotionOffers';
    available_promotions?: Maybe<Array<Maybe<LadderPriceOffer>>>;
};
export type PromotionOffersResponse = {
    __typename?: 'PromotionOffersResponse';
    available_promotions?: Maybe<Array<Maybe<PromotionOffer>>>;
};
export type PropDetail = {
    __typename?: 'PropDetail';
    category?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Props = {
    __typename?: 'Props';
    props?: Maybe<Array<Maybe<PropDetail>>>;
};
export declare enum PushTokenAction {
    Create = "CREATE",
    Reset = "RESET",
    Update = "UPDATE"
}
export type PushtokenReqInput = {
    action?: InputMaybe<PushTokenAction>;
    bundle_identifier?: InputMaybe<Scalars['String']['input']>;
    push_token?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    unique_device_id?: InputMaybe<Scalars['String']['input']>;
};
export type PushtokenRes = {
    __typename?: 'PushtokenRes';
    _id?: Maybe<Scalars['String']['output']>;
    application_id?: Maybe<Scalars['String']['output']>;
    bundle_identifier?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    expired_at?: Maybe<Scalars['String']['output']>;
    platform?: Maybe<Scalars['String']['output']>;
    push_token?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    unique_device_id?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    user_id?: Maybe<Scalars['String']['output']>;
};
export type QrCodeResp = {
    __typename?: 'QRCodeResp';
    link?: Maybe<Scalars['String']['output']>;
    svg?: Maybe<Scalars['String']['output']>;
};
export type QrFeature = {
    __typename?: 'QrFeature';
    application?: Maybe<Scalars['Boolean']['output']>;
    collections?: Maybe<Scalars['Boolean']['output']>;
    products?: Maybe<Scalars['Boolean']['output']>;
};
export type Query = {
    __typename?: 'Query';
    address?: Maybe<Address>;
    addresses?: Maybe<Addresses>;
    aggregatorsConfig?: Maybe<AggregatorsConfigDetail>;
    allCountries?: Maybe<CountryList>;
    applicationConfiguration?: Maybe<ApplicationConfiguration>;
    applicationContent?: Maybe<ApplicationContent>;
    applicationStaff?: Maybe<AppStaffConnection>;
    blog?: Maybe<Blog>;
    brand?: Maybe<Brand>;
    brands?: Maybe<BrandConnection>;
    bulkDiscountOffers?: Maybe<BulkDiscountOffers>;
    cart?: Maybe<Cart>;
    cartShipmentDetails?: Maybe<SharedCart>;
    categories?: Maybe<Categories>;
    category?: Maybe<Category>;
    collection?: Maybe<Collection>;
    collectionItems?: Maybe<CollectionItems>;
    collections?: Maybe<CollectionConnection>;
    communicationConsent?: Maybe<CommunicationConsent>;
    compareSimilarProduct?: Maybe<ProductCompareDetails>;
    compareWithFrequentlyCompared?: Maybe<CompareProductWithFrequentlyCompared>;
    countries?: Maybe<CountryConnection>;
    country?: Maybe<CountryDetail>;
    coupons?: Maybe<Coupons>;
    currencies?: Maybe<Array<Maybe<Currency>>>;
    currency?: Maybe<Currency>;
    customObject?: Maybe<CustomObject>;
    departments?: Maybe<Array<Maybe<Department>>>;
    faq?: Maybe<Faq>;
    faqCategory?: Maybe<CategoryBySlug>;
    faqsByCategory?: Maybe<FaQs>;
    followedCollections?: Maybe<FollowedCollections>;
    followedListing?: Maybe<FollowListing>;
    followedProducts?: Maybe<FollowedProducts>;
    followerCount?: Maybe<FollowerCount>;
    homeProducts?: Maybe<ProductConnection>;
    inStockLocations?: Maybe<StockLocations>;
    lead?: Maybe<Lead>;
    localities?: Maybe<LocalityConnection>;
    locality?: Maybe<Locality>;
    locations?: Maybe<Locations>;
    order?: Maybe<Order>;
    orderingStoreDetail?: Maybe<OrderingStore>;
    orderingStores?: Maybe<OrderingStores>;
    orders?: Maybe<OrderConnection>;
    page?: Maybe<Page>;
    payment?: Maybe<Payment>;
    paymentLinkDetail?: Maybe<PaymentLinkDetail>;
    paymentModeRoutes?: Maybe<PaymentModeRouteDetail>;
    pincodeDetails?: Maybe<PincodeDataResponse>;
    platformConfig?: Maybe<PlatformConfig>;
    posOrder?: Maybe<Order>;
    posPaymentModeRoutes?: Maybe<PaymentModeRouteDetail>;
    product?: Maybe<Product>;
    productBundles?: Maybe<ProductBundle>;
    productComparison?: Maybe<ProductCompareDetails>;
    productLadderPromotion?: Maybe<ProductLadderPromotion>;
    productPrice?: Maybe<ProductSizePrice>;
    productSellers?: Maybe<ProductSellers>;
    productStock?: Maybe<ProductStock>;
    productStockForTime?: Maybe<ProductStockPolling>;
    products?: Maybe<ProductConnection>;
    promotionOffers?: Maybe<PromotionOffers>;
    redirectToAggregator?: Maybe<RedirectToAggregatorDetail>;
    refund?: Maybe<Refund>;
    searchApplication?: Maybe<ApplicationDetails>;
    searchProduct?: Maybe<SearchProduct>;
    sharedCartDetails?: Maybe<SharedCartItems>;
    shipment?: Maybe<Shipment>;
    shortLink?: Maybe<ShortLink>;
    slideshow?: Maybe<Slideshow>;
    store?: Maybe<Store>;
    stores?: Maybe<StoreConnection>;
    theme?: Maybe<Theme>;
    user?: Maybe<User>;
    validateCoupon?: Maybe<CouponValidate>;
};
export type QueryAddressArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['String']['input'];
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
export type QueryAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
export type QueryAggregatorsConfigArgs = {
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    xapitoken?: InputMaybe<Scalars['String']['input']>;
};
export type QueryApplicationStaffArgs = {
    orderIncent?: InputMaybe<Scalars['Boolean']['input']>;
    orderingStore?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    user?: InputMaybe<Scalars['String']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
};
export type QueryBlogArgs = {
    root_id?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
};
export type QueryBrandArgs = {
    slug: Scalars['String']['input'];
};
export type QueryBrandsArgs = {
    department?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryBulkDiscountOffersArgs = {
    articleId?: InputMaybe<Scalars['String']['input']>;
    itemId?: InputMaybe<Scalars['Int']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    uid?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryCartArgs = {
    areaCode?: InputMaybe<Scalars['String']['input']>;
    assignCardId?: InputMaybe<Scalars['Int']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includeBreakup?: InputMaybe<Scalars['Boolean']['input']>;
};
export type QueryCartShipmentDetailsArgs = {
    addressId?: InputMaybe<Scalars['String']['input']>;
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includePayment?: InputMaybe<Scalars['Boolean']['input']>;
    orderType?: InputMaybe<Scalars['String']['input']>;
};
export type QueryCategoriesArgs = {
    department?: InputMaybe<Scalars['String']['input']>;
};
export type QueryCategoryArgs = {
    slug: Scalars['String']['input'];
};
export type QueryCollectionArgs = {
    slug: Scalars['String']['input'];
};
export type QueryCollectionItemsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
    sortOn?: InputMaybe<Sort_On>;
};
export type QueryCollectionsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type QueryCompareSimilarProductArgs = {
    slug: Scalars['String']['input'];
};
export type QueryCompareWithFrequentlyComparedArgs = {
    slug: Scalars['String']['input'];
};
export type QueryCountriesArgs = {
    onboarding?: InputMaybe<Scalars['Boolean']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};
export type QueryCountryArgs = {
    countryIsoCode: Scalars['String']['input'];
};
export type QueryCouponsArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type QueryCurrencyArgs = {
    id: Scalars['String']['input'];
};
export type QueryCustomObjectArgs = {
    metaobjectId: Scalars['String']['input'];
};
export type QueryFaqArgs = {
    slug: Scalars['String']['input'];
};
export type QueryFaqCategoryArgs = {
    slug: Scalars['String']['input'];
};
export type QueryFaqsByCategoryArgs = {
    slug: Scalars['String']['input'];
};
export type QueryFollowedListingArgs = {
    collectionType: Scalars['String']['input'];
    pageId?: InputMaybe<Scalars['String']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryFollowerCountArgs = {
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
export type QueryHomeProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    sortOn?: InputMaybe<Scalars['String']['input']>;
};
export type QueryInStockLocationsArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    latitude?: InputMaybe<Scalars['Float']['input']>;
    longitude?: InputMaybe<Scalars['Float']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    range?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryLocalitiesArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    locality: LocalityType;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};
export type QueryLocalityArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    locality: LocalityEnum;
    localityValue: Scalars['String']['input'];
    state?: InputMaybe<Scalars['String']['input']>;
};
export type QueryLocationsArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    locationType?: InputMaybe<LocationTypeEnum>;
};
export type QueryOrderArgs = {
    orderId: Scalars['String']['input'];
};
export type QueryOrderingStoreDetailArgs = {
    storeId: Scalars['Int']['input'];
};
export type QueryOrderingStoresArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
};
export type QueryOrdersArgs = {
    customMeta?: InputMaybe<Scalars['String']['input']>;
    fromDate?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['Int']['input']>;
    toDate?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPageArgs = {
    rootId?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
};
export type QueryPaymentLinkDetailArgs = {
    paymentLinkId?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPaymentModeRoutesArgs = {
    amount: Scalars['Int']['input'];
    cardReference?: InputMaybe<Scalars['String']['input']>;
    cartId: Scalars['String']['input'];
    checkoutMode: Scalars['String']['input'];
    pincode: Scalars['String']['input'];
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    userDetails?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPincodeDetailsArgs = {
    pincode: Scalars['String']['input'];
};
export type QueryPlatformConfigArgs = {
    name?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPosOrderArgs = {
    orderId: Scalars['String']['input'];
};
export type QueryPosPaymentModeRoutesArgs = {
    amount: Scalars['Int']['input'];
    cardreference?: InputMaybe<Scalars['String']['input']>;
    cartId: Scalars['String']['input'];
    checkoutMode: Scalars['String']['input'];
    orderType: Scalars['String']['input'];
    pincode: Scalars['String']['input'];
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    userDetails?: InputMaybe<Scalars['String']['input']>;
};
export type QueryProductArgs = {
    slug: Scalars['String']['input'];
};
export type QueryProductBundlesArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};
export type QueryProductComparisonArgs = {
    slug: Array<InputMaybe<Scalars['String']['input']>>;
};
export type QueryProductLadderPromotionArgs = {
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    promotionId?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
    storeId?: InputMaybe<Scalars['String']['input']>;
};
export type QueryProductPriceArgs = {
    moq?: InputMaybe<Scalars['Int']['input']>;
    pincode?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryProductSellersArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    strategy?: InputMaybe<Scalars['String']['input']>;
};
export type QueryProductStockArgs = {
    alu?: InputMaybe<Scalars['String']['input']>;
    ean?: InputMaybe<Scalars['String']['input']>;
    itemId?: InputMaybe<Scalars['String']['input']>;
    sku?: InputMaybe<Scalars['String']['input']>;
    upc?: InputMaybe<Scalars['String']['input']>;
};
export type QueryProductStockForTimeArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    timestamp: Scalars['String']['input'];
};
export type QueryProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    enableFilter?: InputMaybe<Scalars['Boolean']['input']>;
    filterQuery?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sortOn?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPromotionOffersArgs = {
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    promotionGroup?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryRedirectToAggregatorArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
    source?: InputMaybe<Scalars['String']['input']>;
};
export type QuerySearchApplicationArgs = {
    authorization?: InputMaybe<Scalars['String']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
};
export type QuerySearchProductArgs = {
    query: Scalars['String']['input'];
};
export type QuerySharedCartDetailsArgs = {
    token: Scalars['String']['input'];
};
export type QueryShipmentArgs = {
    shipmentId: Scalars['String']['input'];
};
export type QueryShortLinkArgs = {
    hash: Scalars['String']['input'];
};
export type QuerySlideshowArgs = {
    slug: Scalars['String']['input'];
};
export type QueryStoreArgs = {
    locationId: Scalars['Int']['input'];
};
export type QueryStoresArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    latitude?: InputMaybe<Scalars['Float']['input']>;
    longitude?: InputMaybe<Scalars['Float']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    range?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryThemeArgs = {
    themeId: Scalars['String']['input'];
};
export type QueryValidateCouponArgs = {
    addressId?: InputMaybe<Scalars['String']['input']>;
    aggregatorName?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cardId?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    iin?: InputMaybe<Scalars['String']['input']>;
    merchantCode?: InputMaybe<Scalars['String']['input']>;
    network?: InputMaybe<Scalars['String']['input']>;
    paymentIdentifier?: InputMaybe<Scalars['String']['input']>;
    paymentMode?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
};
export type QuestionSet = {
    __typename?: 'QuestionSet';
    display_name?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
};
export type RawBreakup = {
    __typename?: 'RawBreakup';
    cod_charge?: Maybe<Scalars['Float']['output']>;
    convenience_fee?: Maybe<Scalars['Float']['output']>;
    coupon?: Maybe<Scalars['Float']['output']>;
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    discount?: Maybe<Scalars['Float']['output']>;
    fynd_cash?: Maybe<Scalars['Float']['output']>;
    gift_card?: Maybe<Scalars['Float']['output']>;
    gst_charges?: Maybe<Scalars['Float']['output']>;
    mop_total?: Maybe<Scalars['Float']['output']>;
    mrp_total?: Maybe<Scalars['Float']['output']>;
    promotion?: Maybe<Scalars['Float']['output']>;
    subtotal?: Maybe<Scalars['Float']['output']>;
    total?: Maybe<Scalars['Float']['output']>;
    total_charge?: Maybe<Scalars['Float']['output']>;
    vog?: Maybe<Scalars['Float']['output']>;
    you_saved?: Maybe<Scalars['Float']['output']>;
};
export type RazorPayAggregatorConfig = {
    __typename?: 'RazorPayAggregatorConfig';
    api?: Maybe<Scalars['String']['output']>;
    config_type?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
    vpa?: Maybe<Scalars['String']['output']>;
    webhook_secret?: Maybe<Scalars['String']['output']>;
};
export type ReAssignStoreRequestInput = {
    articles: Array<InputMaybe<Scalars['JSON']['input']>>;
    configuration: Scalars['JSON']['input'];
    identifier: Scalars['String']['input'];
    ignored_locations: Array<InputMaybe<Scalars['Int']['input']>>;
    to_pincode: Scalars['String']['input'];
};
export type ReAssignStoreResponse = {
    __typename?: 'ReAssignStoreResponse';
    assigned_stores?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    error: Scalars['JSON']['output'];
    pystormbreaker_uuid: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
    to_pincode: Scalars['String']['output'];
};
export type ReasonsDataInput = {
    entities?: InputMaybe<Array<InputMaybe<EntitiesReasonsInput>>>;
    products?: InputMaybe<Array<InputMaybe<ProductsReasonsInput>>>;
};
export type RedirectDevice = {
    __typename?: 'RedirectDevice';
    link?: Maybe<Scalars['String']['output']>;
    type?: Maybe<RedirectType>;
};
export type RedirectDeviceInput = {
    link?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Type>;
};
export type RedirectToAggregatorDetail = {
    __typename?: 'RedirectToAggregatorDetail';
    data: RedirectUrl;
    success: Scalars['Boolean']['output'];
};
export declare enum RedirectType {
    AppStore = "app_store",
    Web = "web"
}
export type RedirectUrl = {
    __typename?: 'RedirectUrl';
    signup_url: Scalars['String']['output'];
    status: Scalars['Boolean']['output'];
};
export type Redirects = {
    __typename?: 'Redirects';
    android?: Maybe<RedirectDevice>;
    force_web?: Maybe<Scalars['Boolean']['output']>;
    ios?: Maybe<RedirectDevice>;
    web?: Maybe<WebRedirect>;
};
export type RedirectsInput = {
    android?: InputMaybe<RedirectDeviceInput>;
    force_web?: InputMaybe<Scalars['Boolean']['input']>;
    ios?: InputMaybe<RedirectDeviceInput>;
    web?: InputMaybe<WebRedirectInput>;
};
export type Refund = {
    __typename?: 'Refund';
    activeRefundTransferModes?: Maybe<ActiveRefundTransferModes>;
    orderBeneficiariesDetail?: Maybe<OrderBeneficiaryDetail>;
    userBeneficiariesDetail?: Maybe<OrderBeneficiaryDetail>;
};
export type RefundOrderBeneficiariesDetailArgs = {
    orderId: Scalars['String']['input'];
};
export type RefundUserBeneficiariesDetailArgs = {
    orderId: Scalars['String']['input'];
};
export type RefundAccountResponse = {
    __typename?: 'RefundAccountResponse';
    data?: Maybe<Scalars['JSON']['output']>;
    is_verified_flag?: Maybe<Scalars['Boolean']['output']>;
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type RegisterFormSuccess = {
    __typename?: 'RegisterFormSuccess';
    country_code?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    register_token?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    resend_email_token?: Maybe<Scalars['String']['output']>;
    resend_timer?: Maybe<Scalars['Int']['output']>;
    resend_token?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
export type RegisterRequiredFields = {
    __typename?: 'RegisterRequiredFields';
    email?: Maybe<RequiredFieldDetail>;
    mobile?: Maybe<RequiredFieldDetail>;
};
export type RegistrationPageFeature = {
    __typename?: 'RegistrationPageFeature';
    ask_store_address?: Maybe<Scalars['Boolean']['output']>;
};
export type RenderHtmlRequestInput = {
    base64_html: Scalars['String']['input'];
    returntype?: InputMaybe<Scalars['String']['input']>;
};
export type RequiredFieldDetail = {
    __typename?: 'RequiredFieldDetail';
    is_required?: Maybe<Scalars['Boolean']['output']>;
    level?: Maybe<Scalars['String']['output']>;
};
export type RequiredFields = {
    __typename?: 'RequiredFields';
    email?: Maybe<RequiredFieldDetail>;
    mobile?: Maybe<RequiredFieldDetail>;
};
export type ResendOrCancelPaymentRequestInput = {
    device_id?: InputMaybe<Scalars['String']['input']>;
    order_id: Scalars['String']['input'];
    request_type: Scalars['String']['input'];
};
export type ResendOrCancelPaymentResponse = {
    __typename?: 'ResendOrCancelPaymentResponse';
    data: LinkStatus;
    success: Scalars['Boolean']['output'];
};
export type ResendPaymentLinkResponse = {
    __typename?: 'ResendPaymentLinkResponse';
    message: Scalars['String']['output'];
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    status_code: Scalars['Int']['output'];
    success: Scalars['Boolean']['output'];
};
export type ResetForgotPasswordSuccess = {
    __typename?: 'ResetForgotPasswordSuccess';
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type ResetPasswordSuccess = {
    __typename?: 'ResetPasswordSuccess';
    status?: Maybe<Scalars['String']['output']>;
};
export type ResourceContent = {
    __typename?: 'ResourceContent';
    type?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export declare enum Response {
    No = "NO",
    Yes = "YES"
}
export type ReturnConfig = {
    __typename?: 'ReturnConfig';
    returnable?: Maybe<Scalars['Boolean']['output']>;
    time?: Maybe<Scalars['Int']['output']>;
    unit?: Maybe<Scalars['String']['output']>;
};
export type RevenueEngineFeature = {
    __typename?: 'RevenueEngineFeature';
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type RewardPointRequestInput = {
    points: Scalars['Boolean']['input'];
};
export type RewardPointsConfig = {
    __typename?: 'RewardPointsConfig';
    credit?: Maybe<Credit>;
    debit?: Maybe<Debit>;
};
export type RootPaymentMode = {
    __typename?: 'RootPaymentMode';
    add_card_enabled?: Maybe<Scalars['Boolean']['output']>;
    aggregator_name?: Maybe<Scalars['String']['output']>;
    anonymous_enable?: Maybe<Scalars['Boolean']['output']>;
    display_name: Scalars['String']['output'];
    display_priority: Scalars['Int']['output'];
    is_pay_by_card_pl?: Maybe<Scalars['Boolean']['output']>;
    list?: Maybe<Array<Maybe<PaymentModeList>>>;
    name: Scalars['String']['output'];
    save_card?: Maybe<Scalars['Boolean']['output']>;
};
export type RupifiBanner = {
    __typename?: 'RupifiBanner';
    data: RupifiKycDetail;
    success: Scalars['Boolean']['output'];
};
export type RupifiKycDetail = {
    __typename?: 'RupifiKYCDetail';
    kyc_url?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};
export type RupifyAggregatorConfig = {
    __typename?: 'RupifyAggregatorConfig';
    config_type?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    merchant_id?: Maybe<Scalars['String']['output']>;
    merchant_secret?: Maybe<Scalars['String']['output']>;
    non_trxn_url?: Maybe<Scalars['String']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
    trxn_url?: Maybe<Scalars['String']['output']>;
};
export type Seo = {
    __typename?: 'SEO';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<SeoImage>;
    title?: Maybe<Scalars['String']['output']>;
};
export type SeoConfiguration = {
    __typename?: 'SEOConfiguration';
    seo?: Maybe<SeoSchema>;
};
export type SeoImage = {
    __typename?: 'SEOImage';
    url?: Maybe<Scalars['String']['output']>;
};
export type SmsCommunication = {
    __typename?: 'SMSCommunication';
    display_name?: Maybe<Scalars['String']['output']>;
    response?: Maybe<Scalars['String']['output']>;
};
export type Safetynet = {
    __typename?: 'Safetynet';
    credentials?: Maybe<SafetynetCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type SafetynetCredentials = {
    __typename?: 'SafetynetCredentials';
    api_key?: Maybe<Scalars['String']['output']>;
};
export type SaveAddressResponse = {
    __typename?: 'SaveAddressResponse';
    id?: Maybe<Scalars['String']['output']>;
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type Schedule = {
    __typename?: 'Schedule';
    end?: Maybe<Scalars['String']['output']>;
    next_schedule?: Maybe<Array<Maybe<NextSchedule>>>;
    start?: Maybe<Scalars['String']['output']>;
};
export type SearchItem = {
    __typename?: 'SearchItem';
    action?: Maybe<PageAction>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    display?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Media>;
    type?: Maybe<Scalars['String']['output']>;
};
export type SearchProduct = {
    __typename?: 'SearchProduct';
    items?: Maybe<Array<Maybe<SearchItem>>>;
};
export type SecureUrl = {
    __typename?: 'SecureUrl';
    secure_url?: Maybe<Scalars['String']['output']>;
};
export type Segment = {
    __typename?: 'Segment';
    credentials?: Maybe<SegmentCredentials>;
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
export type SegmentCredentials = {
    __typename?: 'SegmentCredentials';
    write_key?: Maybe<Scalars['String']['output']>;
};
export type SelectCartAddressRequestInput = {
    billingAddressId?: InputMaybe<Scalars['String']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export declare enum SelectedType {
    Exact = "exact",
    None = "none",
    Query = "query"
}
export type Seller = {
    __typename?: 'Seller';
    count?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type SendEmailForgotOtpRequestSchemaInput = {
    action?: InputMaybe<UserAction>;
    email?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
export type SendEmailOtpRequestSchemaInput = {
    action?: InputMaybe<UserAction>;
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    register_token?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
export type SendEmailVerifyLinkSuccess = {
    __typename?: 'SendEmailVerifyLinkSuccess';
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
export type SendMobileForgotOtpRequestSchemaInput = {
    action?: InputMaybe<UserAction>;
    android_hash?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
export type SendMobileOtpRequestSchemaInput = {
    action?: InputMaybe<UserAction>;
    android_hash?: InputMaybe<Scalars['String']['input']>;
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    force?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
export type SendMobileVerifyLinkSuccess = {
    __typename?: 'SendMobileVerifyLinkSuccess';
    verify_mobile_link?: Maybe<Scalars['Boolean']['output']>;
};
export type SendOtpRequestSchemaInput = {
    android_hash?: InputMaybe<Scalars['String']['input']>;
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<Scalars['String']['input']>;
};
export type SendOtpResponse = {
    __typename?: 'SendOtpResponse';
    country_code?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    register_token?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    resend_email_token?: Maybe<Scalars['String']['output']>;
    resend_timer?: Maybe<Scalars['Int']['output']>;
    resend_token?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
export type SendOtpToCustomerResponse = {
    __typename?: 'SendOtpToCustomerResponse';
    message?: Maybe<Scalars['String']['output']>;
    request_id?: Maybe<Scalars['String']['output']>;
    resend_timer?: Maybe<Scalars['Int']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type SendResetPasswordEmailRequestSchemaInput = {
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
};
export type SendResetPasswordMobileRequestSchemaInput = {
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    mobile?: InputMaybe<Scalars['String']['input']>;
};
export type SendVerificationLinkMobileRequestSchemaInput = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    country_code?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
export type SeoSchema = {
    __typename?: 'SeoSchema';
    app?: Maybe<Scalars['String']['output']>;
    cannonical_enabled?: Maybe<Scalars['Boolean']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    custom_meta_tags?: Maybe<Array<Maybe<CustomMetaTag>>>;
    details?: Maybe<Detail>;
    id?: Maybe<Scalars['String']['output']>;
    robots_txt?: Maybe<Scalars['String']['output']>;
    sitemap_enabled?: Maybe<Scalars['Boolean']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type SessionList = {
    __typename?: 'SessionList';
    sessions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type SetDefaultBeneficiaryRequestInput = {
    beneficiary_id: Scalars['String']['input'];
    order_id: Scalars['String']['input'];
};
export type SetDefaultBeneficiaryResponse = {
    __typename?: 'SetDefaultBeneficiaryResponse';
    is_beneficiary_set: Scalars['Boolean']['output'];
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type SharedCart = {
    __typename?: 'SharedCart';
    breakup_values?: Maybe<CartBreakup>;
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    cart_id?: Maybe<Scalars['Int']['output']>;
    checkout_mode?: Maybe<Scalars['String']['output']>;
    comment?: Maybe<Scalars['String']['output']>;
    coupon_text?: Maybe<Scalars['String']['output']>;
    currency?: Maybe<CartCurrency>;
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    error?: Maybe<Scalars['Boolean']['output']>;
    gstin?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    last_modified?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    shared_cart_details?: Maybe<SharedCartDetails>;
    shipments?: Maybe<Array<Maybe<ShipmentResponse>>>;
    uid?: Maybe<Scalars['String']['output']>;
};
export type SharedCartDetails = {
    __typename?: 'SharedCartDetails';
    created_on?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    source?: Maybe<Scalars['JSON']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<Scalars['JSON']['output']>;
};
export type SharedCartItems = {
    __typename?: 'SharedCartItems';
    cart?: Maybe<SharedCart>;
    error?: Maybe<Scalars['String']['output']>;
};
export type SharedCartResponse = {
    __typename?: 'SharedCartResponse';
    cart?: Maybe<SharedCart>;
    error?: Maybe<Scalars['String']['output']>;
};
export type Shipment = {
    __typename?: 'Shipment';
    customer_detail?: Maybe<CustomerDetailsResponse>;
    detail?: Maybe<OrderShipment>;
    invoice_detail?: Maybe<ShipmentInvoice>;
    shipment_bag_reasons?: Maybe<ShipmentBagReasons>;
    shipment_reasons?: Maybe<Array<Maybe<ShipmentReason>>>;
    track_shipment?: Maybe<TrackShipment>;
};
export type ShipmentCustomer_DetailArgs = {
    orderId: Scalars['String']['input'];
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
export type ShipmentShipment_Bag_ReasonsArgs = {
    bagId: Scalars['String']['input'];
};
export type ShipmentApplicationStatusResponse = {
    __typename?: 'ShipmentApplicationStatusResponse';
    statuses?: Maybe<Array<Maybe<StatusesBodyResponse>>>;
};
export type ShipmentBagReasons = {
    __typename?: 'ShipmentBagReasons';
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type ShipmentInvoice = {
    __typename?: 'ShipmentInvoice';
    presigned_type: Scalars['String']['output'];
    presigned_url: Scalars['String']['output'];
    shipment_id: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type ShipmentPayment = {
    __typename?: 'ShipmentPayment';
    display_name?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    mode?: Maybe<Scalars['String']['output']>;
    mop?: Maybe<Scalars['String']['output']>;
    payment_mode?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};
export type ShipmentPromise = {
    __typename?: 'ShipmentPromise';
    formatted?: Maybe<PromiseFormatted>;
    iso?: Maybe<PromiseFormatted>;
    timestamp?: Maybe<PromiseTimestamp>;
};
export type ShipmentReason = {
    __typename?: 'ShipmentReason';
    feedback_type?: Maybe<Scalars['String']['output']>;
    flow?: Maybe<Scalars['String']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    reason_id?: Maybe<Scalars['Int']['output']>;
    reason_text?: Maybe<Scalars['String']['output']>;
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
export type ShipmentResponse = {
    __typename?: 'ShipmentResponse';
    box_type?: Maybe<Scalars['String']['output']>;
    dp_id?: Maybe<Scalars['String']['output']>;
    dp_options?: Maybe<Scalars['JSON']['output']>;
    fulfillment_id?: Maybe<Scalars['Int']['output']>;
    fulfillment_type?: Maybe<Scalars['String']['output']>;
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    order_type?: Maybe<Scalars['String']['output']>;
    promise?: Maybe<DeliveryPromiseResponse>;
    shipment_type?: Maybe<Scalars['String']['output']>;
    shipments?: Maybe<Scalars['Int']['output']>;
};
export type ShipmentStatus = {
    __typename?: 'ShipmentStatus';
    hex_code?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type ShipmentTotalDetails = {
    __typename?: 'ShipmentTotalDetails';
    pieces?: Maybe<Scalars['Int']['output']>;
    sizes?: Maybe<Scalars['Int']['output']>;
    total_price?: Maybe<Scalars['Float']['output']>;
};
export type ShipmentUserInfo = {
    __typename?: 'ShipmentUserInfo';
    email?: Maybe<Scalars['String']['output']>;
    first_name?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    last_name?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type ShipmentsRequestInput = {
    data_updates?: InputMaybe<DataUpdatesInput>;
    identifier: Scalars['String']['input'];
    products?: InputMaybe<Array<InputMaybe<Products3Input>>>;
    reasons?: InputMaybe<ReasonsDataInput>;
};
export type ShortLink = {
    __typename?: 'ShortLink';
    original?: Maybe<ShortLinkDetail>;
    shortLinkByHash?: Maybe<ShortLinkDetail>;
};
export type ShortLinkDetail = {
    __typename?: 'ShortLinkDetail';
    active?: Maybe<Scalars['Boolean']['output']>;
    app_redirect?: Maybe<Scalars['Boolean']['output']>;
    application?: Maybe<Scalars['String']['output']>;
    attribution?: Maybe<Attribution>;
    campaign?: Maybe<CampaignShortLink>;
    count?: Maybe<Scalars['Int']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<Scalars['String']['output']>;
    enable_tracking?: Maybe<Scalars['Boolean']['output']>;
    expire_at?: Maybe<Scalars['String']['output']>;
    fallback?: Maybe<RedirectType>;
    id?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    personalized?: Maybe<Scalars['Boolean']['output']>;
    redirects?: Maybe<Redirects>;
    social_media_tags?: Maybe<SocialMediaTags>;
    title?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    url?: Maybe<UrlInfo>;
    user_id?: Maybe<Scalars['String']['output']>;
};
export type ShortLinkReqInput = {
    active?: InputMaybe<Scalars['Boolean']['input']>;
    attribution?: InputMaybe<AttributionInput>;
    campaign?: InputMaybe<CampaignShortLinkInput>;
    count?: InputMaybe<Scalars['Int']['input']>;
    enable_tracking?: InputMaybe<Scalars['Boolean']['input']>;
    expire_at?: InputMaybe<Scalars['String']['input']>;
    hash?: InputMaybe<Scalars['String']['input']>;
    personalized?: InputMaybe<Scalars['Boolean']['input']>;
    redirects?: InputMaybe<RedirectsInput>;
    social_media_tags?: InputMaybe<SocialMediaTagsInput>;
    title: Scalars['String']['input'];
    url: Scalars['String']['input'];
};
export declare enum SimilarListItem {
    Basic = "basic",
    Brand = "brand",
    Category = "category",
    Price = "price",
    Seller = "seller",
    Specs = "specs",
    Visual = "visual"
}
export type SimplAggregatorConfig = {
    __typename?: 'SimplAggregatorConfig';
    config_type?: Maybe<Scalars['String']['output']>;
    key?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
};
export type Size = {
    __typename?: 'Size';
    display?: Maybe<Scalars['JSON']['output']>;
    is_available?: Maybe<Scalars['Boolean']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['JSON']['output']>;
};
export type SizeChart = {
    __typename?: 'SizeChart';
    description?: Maybe<Scalars['String']['output']>;
    headers?: Maybe<ColumnHeaders>;
    image?: Maybe<Scalars['String']['output']>;
    size_tip?: Maybe<Scalars['String']['output']>;
    sizes?: Maybe<Array<Maybe<SizeChartValues>>>;
    title?: Maybe<Scalars['String']['output']>;
    unit?: Maybe<Scalars['String']['output']>;
};
export type SizeChartValues = {
    __typename?: 'SizeChartValues';
    col_1?: Maybe<Scalars['String']['output']>;
    col_2?: Maybe<Scalars['String']['output']>;
    col_3?: Maybe<Scalars['String']['output']>;
    col_4?: Maybe<Scalars['String']['output']>;
    col_5?: Maybe<Scalars['String']['output']>;
    col_6?: Maybe<Scalars['String']['output']>;
};
export type Slideshow = {
    __typename?: 'Slideshow';
    active?: Maybe<Scalars['Boolean']['output']>;
    application?: Maybe<Scalars['String']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    configuration?: Maybe<ConfigurationSchema>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    date_meta?: Maybe<DateMeta>;
    id?: Maybe<Scalars['String']['output']>;
    media?: Maybe<Array<Maybe<SlideshowMedia>>>;
    platform?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
};
export type SlideshowMedia = {
    __typename?: 'SlideshowMedia';
    action?: Maybe<ContentAction>;
    auto_decide_duration?: Maybe<Scalars['Boolean']['output']>;
    bg_color?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type Slideshows = {
    __typename?: 'Slideshows';
    items?: Maybe<Array<Maybe<Slideshow>>>;
    page?: Maybe<PageInfo>;
};
export type Social = {
    __typename?: 'Social';
    account_kit?: Maybe<Scalars['Boolean']['output']>;
    apple?: Maybe<Scalars['Boolean']['output']>;
    facebook?: Maybe<Scalars['Boolean']['output']>;
    google?: Maybe<Scalars['Boolean']['output']>;
};
export type SocialAccountId = {
    __typename?: 'SocialAccountId';
    app_id?: Maybe<Scalars['String']['output']>;
};
export type SocialLinks = {
    __typename?: 'SocialLinks';
    blog_link?: Maybe<LinkSchema>;
    facebook?: Maybe<LinkSchema>;
    google_plus?: Maybe<LinkSchema>;
    instagram?: Maybe<LinkSchema>;
    linked_in?: Maybe<LinkSchema>;
    pinterest?: Maybe<LinkSchema>;
    twitter?: Maybe<LinkSchema>;
    vimeo?: Maybe<LinkSchema>;
    youtube?: Maybe<LinkSchema>;
};
export type SocialMediaTags = {
    __typename?: 'SocialMediaTags';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};
export type SocialMediaTagsInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};
export type SocialTokens = {
    __typename?: 'SocialTokens';
    account_kit?: Maybe<SocialAccountId>;
    facebook?: Maybe<SocialAccountId>;
    google?: Maybe<SocialAccountId>;
};
export declare enum Sort_On {
    DiscountAsc = "discount_asc",
    DiscountDsc = "discount_dsc",
    Latest = "latest",
    Popular = "popular",
    PriceAsc = "price_asc",
    PriceDsc = "price_dsc"
}
export type Src = {
    __typename?: 'Src';
    link?: Maybe<Scalars['String']['output']>;
};
export type StaffCheckoutInput = {
    _id: Scalars['String']['input'];
    employee_code?: InputMaybe<Scalars['String']['input']>;
    first_name: Scalars['String']['input'];
    last_name: Scalars['String']['input'];
    user: Scalars['String']['input'];
};
export type StatuesRequestInput = {
    exclude_bags_next_state?: InputMaybe<Scalars['String']['input']>;
    shipments?: InputMaybe<Array<InputMaybe<ShipmentsRequestInput>>>;
    status?: InputMaybe<Scalars['String']['input']>;
};
export type Status = {
    __typename?: 'Status';
    color: Scalars['String']['output'];
    display: Scalars['String']['output'];
    key: Scalars['String']['output'];
};
export type StatusesBodyResponse = {
    __typename?: 'StatusesBodyResponse';
    shipments?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};
export type Store = {
    __typename?: 'Store';
    address?: Maybe<StoreAddressSerializer>;
    city?: Maybe<Scalars['String']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    company?: Maybe<CompanyStore>;
    contact_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    count?: Maybe<Scalars['Int']['output']>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    departments?: Maybe<Array<Maybe<Department>>>;
    id?: Maybe<Scalars['Int']['output']>;
    manager?: Maybe<StoreManagerSerializer>;
    name?: Maybe<Scalars['String']['output']>;
    store_code?: Maybe<Scalars['String']['output']>;
    timing?: Maybe<Array<Maybe<StoreTiming>>>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type StoreAddressSerializer = {
    __typename?: 'StoreAddressSerializer';
    address1?: Maybe<Scalars['String']['output']>;
    address2?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    landmark?: Maybe<Scalars['String']['output']>;
    latitude?: Maybe<Scalars['Float']['output']>;
    longitude?: Maybe<Scalars['Float']['output']>;
    pincode?: Maybe<Scalars['Int']['output']>;
    state?: Maybe<Scalars['String']['output']>;
};
export type StoreConnection = {
    __typename?: 'StoreConnection';
    items: Array<Maybe<StoreDetail>>;
    page: PageInfo;
};
export type StoreDetail = {
    __typename?: 'StoreDetail';
    address?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    country?: Maybe<Scalars['String']['output']>;
    lat_long?: Maybe<LatLong>;
    name?: Maybe<Scalars['String']['output']>;
    pincode?: Maybe<Scalars['Int']['output']>;
    state?: Maybe<Scalars['String']['output']>;
    store_code?: Maybe<Scalars['String']['output']>;
    store_email?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type StoreInfo = {
    __typename?: 'StoreInfo';
    name?: Maybe<Scalars['String']['output']>;
    store_code?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['Int']['output']>;
};
export type StoreManagerSerializer = {
    __typename?: 'StoreManagerSerializer';
    email?: Maybe<Scalars['String']['output']>;
    mobile_no?: Maybe<PhoneNumber>;
    name?: Maybe<Scalars['String']['output']>;
};
export type StoreTiming = {
    __typename?: 'StoreTiming';
    closing?: Maybe<Time>;
    open?: Maybe<Scalars['Boolean']['output']>;
    opening?: Maybe<Time>;
    weekday?: Maybe<Scalars['String']['output']>;
};
export declare enum StoreType {
    Hard = "hard",
    Soft = "soft"
}
export type StrategyWiseListing = {
    __typename?: 'StrategyWiseListing';
    distance?: Maybe<Scalars['Int']['output']>;
    pincode?: Maybe<Scalars['Int']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    tat?: Maybe<Scalars['Int']['output']>;
};
export type StripeAggregatorConfig = {
    __typename?: 'StripeAggregatorConfig';
    config_type?: Maybe<Scalars['String']['output']>;
    is_active?: Maybe<Scalars['Boolean']['output']>;
    key: Scalars['String']['output'];
    product_id?: Maybe<Scalars['String']['output']>;
    sdk?: Maybe<Scalars['Boolean']['output']>;
    secret?: Maybe<Scalars['String']['output']>;
    webhook_secret?: Maybe<Scalars['String']['output']>;
};
export type SubmitButton = {
    __typename?: 'SubmitButton';
    background_color: Scalars['String']['output'];
    title: Scalars['String']['output'];
    title_color: Scalars['String']['output'];
};
export type SubmitCustomFormResponse = {
    __typename?: 'SubmitCustomFormResponse';
    message: Scalars['String']['output'];
    ticket?: Maybe<Ticket>;
};
export type SuccessMessageResponse = {
    __typename?: 'SuccessMessageResponse';
    message?: Maybe<Scalars['String']['output']>;
};
export type Support = {
    __typename?: 'Support';
    application?: Maybe<Scalars['String']['output']>;
    config_type?: Maybe<Scalars['String']['output']>;
    contact?: Maybe<ContactSchema>;
    created?: Maybe<Scalars['Boolean']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type TatArticlesRequestInput = {
    category?: InputMaybe<TatCategoryRequestInput>;
    manufacturing_time?: InputMaybe<Scalars['Int']['input']>;
    manufacturing_time_unit?: InputMaybe<Scalars['String']['input']>;
};
export type TatArticlesResponse = {
    __typename?: 'TATArticlesResponse';
    _manufacturing_time_seconds?: Maybe<Scalars['Int']['output']>;
    category?: Maybe<TatCategoryRequest>;
    error?: Maybe<TatErrorSchemaResponse>;
    is_cod_available?: Maybe<Scalars['Boolean']['output']>;
    manufacturing_time?: Maybe<Scalars['Int']['output']>;
    manufacturing_time_unit?: Maybe<Scalars['String']['output']>;
    promise?: Maybe<TatPromiseResponse>;
};
export type TatCategoryRequest = {
    __typename?: 'TATCategoryRequest';
    id?: Maybe<Scalars['Int']['output']>;
    level?: Maybe<Scalars['String']['output']>;
};
export type TatCategoryRequestInput = {
    id?: InputMaybe<Scalars['Int']['input']>;
    level?: InputMaybe<Scalars['String']['input']>;
};
export type TatErrorSchemaResponse = {
    __typename?: 'TATErrorSchemaResponse';
    message?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type TatFormattedResponse = {
    __typename?: 'TATFormattedResponse';
    max?: Maybe<Scalars['String']['output']>;
    min?: Maybe<Scalars['String']['output']>;
};
export type TatLocationDetailsRequestInput = {
    articles?: InputMaybe<Array<InputMaybe<TatArticlesRequestInput>>>;
    from_pincode?: InputMaybe<Scalars['String']['input']>;
    fulfillment_id?: InputMaybe<Scalars['Int']['input']>;
};
export type TatLocationDetailsResponse = {
    __typename?: 'TATLocationDetailsResponse';
    articles?: Maybe<Array<Maybe<TatArticlesResponse>>>;
    from_pincode?: Maybe<Scalars['String']['output']>;
    fulfillment_id?: Maybe<Scalars['Int']['output']>;
};
export type TatPromiseResponse = {
    __typename?: 'TATPromiseResponse';
    formatted?: Maybe<TatFormattedResponse>;
    timestamp?: Maybe<TatTimestampResponse>;
};
export type TatTimestampResponse = {
    __typename?: 'TATTimestampResponse';
    max?: Maybe<Scalars['Int']['output']>;
    min?: Maybe<Scalars['Int']['output']>;
};
export type TatViewRequestInput = {
    action?: InputMaybe<Scalars['String']['input']>;
    identifier?: InputMaybe<Scalars['String']['input']>;
    journey?: InputMaybe<Scalars['String']['input']>;
    location_details?: InputMaybe<Array<InputMaybe<TatLocationDetailsRequestInput>>>;
    source?: InputMaybe<Scalars['String']['input']>;
    to_pincode?: InputMaybe<Scalars['String']['input']>;
};
export type TatViewResponse = {
    __typename?: 'TATViewResponse';
    action?: Maybe<Scalars['String']['output']>;
    error?: Maybe<TatErrorSchemaResponse>;
    identifier?: Maybe<Scalars['String']['output']>;
    is_cod_available?: Maybe<Scalars['Boolean']['output']>;
    journey?: Maybe<Scalars['String']['output']>;
    location_details?: Maybe<Array<Maybe<TatLocationDetailsResponse>>>;
    payment_mode?: Maybe<Scalars['String']['output']>;
    request_uuid?: Maybe<Scalars['String']['output']>;
    source?: Maybe<Scalars['String']['output']>;
    stormbreaker_uuid?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
    to_city?: Maybe<Scalars['String']['output']>;
    to_pincode?: Maybe<Scalars['String']['output']>;
};
export declare enum TagPositionEnum {
    BodyBottom = "body_bottom",
    BodyTop = "body_top",
    Head = "head"
}
export type TagSchema = {
    __typename?: 'TagSchema';
    attributes?: Maybe<Scalars['JSON']['output']>;
    content?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    pages?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    position?: Maybe<TagPositionEnum>;
    source?: Maybe<TagSource>;
    sub_type?: Maybe<TagSubType>;
    type?: Maybe<TagType>;
    url?: Maybe<Scalars['String']['output']>;
};
export type TagSource = {
    __typename?: 'TagSource';
    id?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export declare enum TagSubType {
    External = "external",
    Inline = "inline"
}
export declare enum TagType {
    Css = "css",
    Js = "js"
}
export type Tags = {
    __typename?: 'Tags';
    tags?: Maybe<Scalars['JSON']['output']>;
};
export type Theme = {
    __typename?: 'Theme';
    appliedTheme?: Maybe<ThemeDetail>;
    previewTheme?: Maybe<ThemeDetail>;
    themePageDetail?: Maybe<PageDetail>;
    themePages?: Maybe<Array<Maybe<PageDetail>>>;
};
export type ThemeThemePageDetailArgs = {
    pageValue: Scalars['String']['input'];
};
export type ThemeDetail = {
    __typename?: 'ThemeDetail';
    application?: Maybe<Scalars['String']['output']>;
    applied?: Maybe<Scalars['Boolean']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    assets?: Maybe<Assets>;
    available_sections?: Maybe<Array<Maybe<AvailableSection>>>;
    colors?: Maybe<Colors>;
    config?: Maybe<Config>;
    created_at?: Maybe<Scalars['String']['output']>;
    customized?: Maybe<Scalars['Boolean']['output']>;
    font?: Maybe<Font>;
    id?: Maybe<Scalars['String']['output']>;
    information?: Maybe<ThemeInfo>;
    parent_theme?: Maybe<Scalars['String']['output']>;
    parent_theme_version?: Maybe<Scalars['String']['output']>;
    published?: Maybe<Scalars['Boolean']['output']>;
    src?: Maybe<Src>;
    styles?: Maybe<Scalars['JSON']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    updated_at?: Maybe<Scalars['String']['output']>;
    v?: Maybe<Scalars['Int']['output']>;
    version?: Maybe<Scalars['String']['output']>;
};
export type ThemeImages = {
    __typename?: 'ThemeImages';
    android?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    desktop?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    ios?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    thumbnail?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ThemeInfo = {
    __typename?: 'ThemeInfo';
    description?: Maybe<Scalars['String']['output']>;
    features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    images?: Maybe<ThemeImages>;
    name?: Maybe<Scalars['String']['output']>;
};
export type Ticket = {
    __typename?: 'Ticket';
    assigned_to?: Maybe<Scalars['JSON']['output']>;
    category: TicketCategory;
    content?: Maybe<TicketContent>;
    context?: Maybe<TicketContext>;
    created_at?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<Scalars['JSON']['output']>;
    created_on?: Maybe<CreatedOn>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    id: Scalars['String']['output'];
    integration?: Maybe<Scalars['JSON']['output']>;
    is_feedback_pending?: Maybe<Scalars['Boolean']['output']>;
    priority: Priority;
    response_id?: Maybe<Scalars['String']['output']>;
    source: TicketSourceEnum;
    status: Status;
    sub_category?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    updated_at?: Maybe<Scalars['String']['output']>;
};
export type TicketAsset = {
    __typename?: 'TicketAsset';
    display?: Maybe<Scalars['String']['output']>;
    type: TicketAssetTypeEnum;
    value: Scalars['String']['output'];
};
export type TicketAssetInput = {
    display?: InputMaybe<Scalars['String']['input']>;
    type: TicketAssetTypeEnum;
    value: Scalars['String']['input'];
};
export declare enum TicketAssetTypeEnum {
    Brand = "brand",
    Collection = "collection",
    File = "file",
    Image = "image",
    Order = "order",
    Product = "product",
    Shipment = "shipment",
    Video = "video",
    Youtube = "youtube"
}
export type TicketCategory = {
    __typename?: 'TicketCategory';
    display: Scalars['String']['output'];
    feedback_form?: Maybe<FeedbackForm>;
    group_id?: Maybe<Scalars['Float']['output']>;
    key: Scalars['String']['output'];
    sub_categories?: Maybe<TicketCategory>;
};
export type TicketContent = {
    __typename?: 'TicketContent';
    attachments?: Maybe<Array<Maybe<TicketAsset>>>;
    description?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};
export type TicketContentInput = {
    attachments?: InputMaybe<Array<InputMaybe<TicketAssetInput>>>;
    description?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
export type TicketContext = {
    __typename?: 'TicketContext';
    application_id?: Maybe<Scalars['String']['output']>;
    company_id: Scalars['String']['output'];
};
export type TicketHistory = {
    __typename?: 'TicketHistory';
    _id: Scalars['String']['output'];
    created_at?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<Scalars['JSON']['output']>;
    created_on?: Maybe<CreatedOn>;
    ticket_id: Scalars['String']['output'];
    type: Scalars['String']['output'];
    updated_at?: Maybe<Scalars['String']['output']>;
    value: Scalars['JSON']['output'];
};
export type TicketHistoryPayloadInput = {
    type: HistoryTypeEnum;
    value: Scalars['JSON']['input'];
};
export declare enum TicketSourceEnum {
    PlatformPanel = "platformPanel",
    SalesChannel = "salesChannel"
}
export type Time = {
    __typename?: 'Time';
    hour?: Maybe<Scalars['Int']['output']>;
    minute?: Maybe<Scalars['Int']['output']>;
};
export type TimeStampData = {
    __typename?: 'TimeStampData';
    max?: Maybe<Scalars['String']['output']>;
    min?: Maybe<Scalars['String']['output']>;
};
export type TokenDetails = {
    __typename?: 'TokenDetails';
    firebase?: Maybe<Firebase>;
    freshchat?: Maybe<Freshchat>;
    fynd_rewards?: Maybe<FyndRewards>;
    google_map?: Maybe<GoogleMap>;
    gtm?: Maybe<Gtm>;
    moengage?: Maybe<Moengage>;
    safetynet?: Maybe<Safetynet>;
    segment?: Maybe<Segment>;
};
export type TokenRequestBodySchemaInput = {
    token?: InputMaybe<Scalars['String']['input']>;
};
export type TotalDueAmount = {
    __typename?: 'TotalDueAmount';
    currency?: Maybe<Scalars['String']['output']>;
    formatted_value?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type Track = {
    __typename?: 'Track';
    account_name?: Maybe<Scalars['String']['output']>;
    awb?: Maybe<Scalars['String']['output']>;
    last_location_received_at?: Maybe<Scalars['String']['output']>;
    reason?: Maybe<Scalars['String']['output']>;
    shipment_type?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    updated_time?: Maybe<Scalars['String']['output']>;
};
export type TrackShipment = {
    __typename?: 'TrackShipment';
    results?: Maybe<Array<Maybe<Track>>>;
};
export type TrackingDetails = {
    __typename?: 'TrackingDetails';
    is_current?: Maybe<Scalars['Boolean']['output']>;
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    time?: Maybe<Scalars['String']['output']>;
    tracking_details?: Maybe<Array<Maybe<NestedTrackingDetails>>>;
    value?: Maybe<Scalars['String']['output']>;
};
export type TransferItem = {
    __typename?: 'TransferItem';
    display_name?: Maybe<Scalars['String']['output']>;
    id: Scalars['Int']['output'];
    logo_large: Scalars['String']['output'];
    logo_small: Scalars['String']['output'];
    name: Scalars['String']['output'];
};
export type TransferMode = {
    __typename?: 'TransferMode';
    display_name: Scalars['String']['output'];
    items?: Maybe<Array<Maybe<TransferItem>>>;
};
export declare enum Type {
    Permanent = "permanent",
    Temporary = "temporary"
}
export declare enum Type2 {
    Web = "WEB"
}
export type UmdJs = {
    __typename?: 'UmdJs';
    link?: Maybe<Scalars['String']['output']>;
    links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export declare enum Unit {
    Cm = "cm",
    G = "g",
    Kg = "kg",
    L = "l",
    M = "m",
    Ml = "ml",
    Nos = "nos",
    Pack = "pack"
}
export type UpdateAddressResponse = {
    __typename?: 'UpdateAddressResponse';
    id?: Maybe<Scalars['String']['output']>;
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    is_updated?: Maybe<Scalars['Boolean']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type UpdateCartDetailResponse = {
    __typename?: 'UpdateCartDetailResponse';
    cart?: Maybe<CartDetailResponse>;
    message?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type UpdateCartPaymentRequestInput = {
    address_id?: InputMaybe<Scalars['String']['input']>;
    aggregator_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    payment_mode?: InputMaybe<Scalars['String']['input']>;
};
export type UpdateCartRequestInput = {
    items?: InputMaybe<Array<InputMaybe<UpdateProductCartInput>>>;
    operation: Operation;
};
export type UpdatePasswordRequestSchemaInput = {
    new_password?: InputMaybe<Scalars['String']['input']>;
    old_password?: InputMaybe<Scalars['String']['input']>;
};
export type UpdateProductCartInput = {
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    article_id?: InputMaybe<Scalars['String']['input']>;
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    identifiers: CartProductIdentiferInput;
    item_id?: InputMaybe<Scalars['Int']['input']>;
    item_index?: InputMaybe<Scalars['Int']['input']>;
    item_size?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<Scalars['JSON']['input']>;
    parent_item_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
export type UpdateRefundTransferModeRequestInput = {
    enable: Scalars['Boolean']['input'];
    transfer_mode: Scalars['String']['input'];
};
export type UpdateRefundTransferModeResponse = {
    __typename?: 'UpdateRefundTransferModeResponse';
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type UpdateShipmentStatusRequestInput = {
    force_transition?: InputMaybe<Scalars['Boolean']['input']>;
    lock_after_transition?: InputMaybe<Scalars['Boolean']['input']>;
    statuses?: InputMaybe<Array<InputMaybe<StatuesRequestInput>>>;
    task?: InputMaybe<Scalars['Boolean']['input']>;
    unlock_before_transition?: InputMaybe<Scalars['Boolean']['input']>;
};
export type UrlInfo = {
    __typename?: 'UrlInfo';
    hash?: Maybe<Scalars['String']['output']>;
    original?: Maybe<Scalars['String']['output']>;
    short?: Maybe<Scalars['String']['output']>;
};
export type User = {
    __typename?: 'User';
    activeSessions?: Maybe<SessionList>;
    hasPassword?: Maybe<HasPassword>;
    loggedInUser?: Maybe<UserDetail>;
    logout?: Maybe<Logout>;
};
export declare enum UserAction {
    Resend = "resend",
    Send = "send"
}
export type UserBalance = {
    __typename?: 'UserBalance';
    currency?: Maybe<Scalars['String']['output']>;
    formatted_value?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type UserCredit = {
    __typename?: 'UserCredit';
    data?: Maybe<CreditDetail>;
    success: Scalars['Boolean']['output'];
};
export type UserCreditLimit = {
    __typename?: 'UserCreditLimit';
    currency?: Maybe<Scalars['String']['output']>;
    formatted_value?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};
export type UserDetail = {
    __typename?: 'UserDetail';
    account_type?: Maybe<Scalars['String']['output']>;
    active?: Maybe<Scalars['Boolean']['output']>;
    application_id?: Maybe<Scalars['String']['output']>;
    created_at?: Maybe<Scalars['String']['output']>;
    debug?: Maybe<Debug>;
    dob?: Maybe<Scalars['String']['output']>;
    emails?: Maybe<Array<Maybe<Email>>>;
    first_name?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    has_old_password_hash?: Maybe<Scalars['Boolean']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    last_name?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Scalars['JSON']['output']>;
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    profile_pic_url?: Maybe<Scalars['String']['output']>;
    uid?: Maybe<Scalars['String']['output']>;
    updated_at?: Maybe<Scalars['String']['output']>;
    user_id?: Maybe<Scalars['String']['output']>;
    username?: Maybe<Scalars['String']['output']>;
};
export type UserDetails = {
    __typename?: 'UserDetails';
    contact?: Maybe<Scalars['String']['output']>;
    super_user?: Maybe<Scalars['Boolean']['output']>;
    user_id: Scalars['String']['output'];
    username: Scalars['String']['output'];
};
export type UserEmail = {
    __typename?: 'UserEmail';
    active?: Maybe<Scalars['Boolean']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    primary?: Maybe<Scalars['Boolean']['output']>;
    verified?: Maybe<Scalars['Boolean']['output']>;
};
export type UserInfo = {
    __typename?: 'UserInfo';
    email?: Maybe<Scalars['String']['output']>;
    first_name?: Maybe<Scalars['String']['output']>;
    gender?: Maybe<Scalars['String']['output']>;
    last_name?: Maybe<Scalars['String']['output']>;
    mobile?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type VaariantDetail = {
    __typename?: 'VaariantDetail';
    file?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type ValidateCustomerRequestInput = {
    aggregator: Scalars['String']['input'];
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    merchant_params?: InputMaybe<Scalars['JSON']['input']>;
    order_items?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    payload?: InputMaybe<Scalars['String']['input']>;
    phone_number: Scalars['String']['input'];
    transaction_amount_in_paise: Scalars['Int']['input'];
};
export type ValidateCustomerResponse = {
    __typename?: 'ValidateCustomerResponse';
    data: Scalars['JSON']['output'];
    message: Scalars['String']['output'];
    success: Scalars['Boolean']['output'];
};
export type ValidateVpaRequestInput = {
    upi_vpa: Scalars['String']['input'];
};
export type ValidateVpaResponse = {
    __typename?: 'ValidateVPAResponse';
    data: Data8;
    success: Scalars['Boolean']['output'];
};
export type VerifyEmailForgotOtpRequestSchemaInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    otp?: InputMaybe<Scalars['String']['input']>;
};
export type VerifyEmailOtpSuccess = {
    __typename?: 'VerifyEmailOTPSuccess';
    user?: Maybe<UserDetail>;
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
export type VerifyEmailOtpRequestSchemaInput = {
    action?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    otp?: InputMaybe<Scalars['String']['input']>;
    register_token?: InputMaybe<Scalars['String']['input']>;
};
export type VerifyEmailSuccess = {
    __typename?: 'VerifyEmailSuccess';
    message?: Maybe<Scalars['String']['output']>;
};
export type VerifyForgotOtpSuccess = {
    __typename?: 'VerifyForgotOtpSuccess';
    forgot_token?: Maybe<Scalars['String']['output']>;
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type VerifyMobileForgotOtpRequestSchemaInput = {
    otp?: InputMaybe<Scalars['String']['input']>;
    request_id?: InputMaybe<Scalars['String']['input']>;
};
export type VerifyMobileOtpSuccess = {
    __typename?: 'VerifyMobileOTPSuccess';
    user?: Maybe<UserDetail>;
    verify_mobile_link?: Maybe<Scalars['Boolean']['output']>;
};
export type VerifyOtpInput = {
    otp_code?: InputMaybe<Scalars['String']['input']>;
    request_id?: InputMaybe<Scalars['String']['input']>;
};
export type VerifyOtpRequestSchemaInput = {
    otp?: InputMaybe<Scalars['String']['input']>;
    register_token?: InputMaybe<Scalars['String']['input']>;
    request_id?: InputMaybe<Scalars['String']['input']>;
};
export type VerifyOtpResponse = {
    __typename?: 'VerifyOtpResponse';
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type VerifyOtpSuccess = {
    __typename?: 'VerifyOtpSuccess';
    register_token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UserDetail>;
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
export type WalletOtpRequestInput = {
    country_code: Scalars['String']['input'];
    mobile: Scalars['String']['input'];
};
export type WalletOtpResponse = {
    __typename?: 'WalletOtpResponse';
    is_verified_flag: Scalars['String']['output'];
    request_id: Scalars['String']['output'];
    success?: Maybe<Scalars['Boolean']['output']>;
};
export type WebRedirect = {
    __typename?: 'WebRedirect';
    link?: Maybe<Scalars['String']['output']>;
    type?: Maybe<WebRedirectType>;
};
export type WebRedirectInput = {
    link?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Type2>;
};
export type Weight = {
    __typename?: 'Weight';
    /** Whether the weight is the default one or not */
    is_default: Scalars['Boolean']['output'];
    /** The shipping weight of the product */
    shipping: Scalars['Float']['output'];
    /** The unit of weight */
    unit: Scalars['String']['output'];
};
export type WhatsappCommunication = {
    __typename?: 'WhatsappCommunication';
    country_code?: Maybe<Scalars['String']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    phone_number?: Maybe<Scalars['String']['output']>;
    response?: Maybe<Scalars['String']['output']>;
};
export type BulkDiscountOffers = {
    __typename?: 'bulkDiscountOffers';
    data?: Maybe<Array<Maybe<DiscountOfferDetails>>>;
};
export type LandingPage = {
    __typename?: 'landingPage';
    action?: Maybe<ContentAction>;
    application?: Maybe<Scalars['String']['output']>;
    archived?: Maybe<Scalars['Boolean']['output']>;
    created_by?: Maybe<CreatedBy>;
    custom_json?: Maybe<Scalars['JSON']['output']>;
    date_meta?: Maybe<DateMeta>;
    id?: Maybe<Scalars['String']['output']>;
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    slug?: Maybe<Scalars['String']['output']>;
};
export type PaymentFlowDetail = {
    __typename?: 'paymentFlowDetail';
    api_link?: Maybe<Scalars['String']['output']>;
    data?: Maybe<Scalars['JSON']['output']>;
    payment_flow?: Maybe<Scalars['String']['output']>;
    payment_flow_data?: Maybe<Scalars['JSON']['output']>;
};
export type StockLocations = {
    __typename?: 'stockLocations';
    filters?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    items?: Maybe<Array<Maybe<Store>>>;
    page?: Maybe<PageInfo>;
};
export type TokenForVideoRoom = {
    __typename?: 'tokenForVideoRoom';
    access_token: Scalars['String']['output'];
};
export declare enum WebRedirectType {
    Web = "web"
}
