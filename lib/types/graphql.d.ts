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
    Merge = "merge",
    Replace = "replace"
}
export declare enum ActionEnum {
    Merge = "merge",
    Replace = "replace"
}
/** Represents the page details used to rendering. */
export type ActionPage = {
    __typename?: 'ActionPage';
    /** Parameters that should be considered in path. */
    params?: Maybe<Scalars['JSON']['output']>;
    /** Query parameter if any to be added to the action. */
    query?: Maybe<Scalars['JSON']['output']>;
    /** The type of action such as product, products, category, brand. */
    type?: Maybe<Scalars['String']['output']>;
    /** The URL of action. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Represents the page details used to rendering. */
export type ActionPageDetail = {
    __typename?: 'ActionPageDetail';
    /** Parameters that should be considered in path. */
    params?: Maybe<Scalars['JSON']['output']>;
    /** Query parameter if any to be added to the action. */
    query?: Maybe<Scalars['JSON']['output']>;
    /** The type of action such as product, products, category, brand. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Action query schema which includes list of product slugs. */
export type ActionQuery = {
    __typename?: 'ActionQuery';
    /** Contains list of product slug. */
    product_slug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Active payment gateway cards response. */
export type ActiveCardAggregator = {
    __typename?: 'ActiveCardAggregator';
    /** A payment gateway card response. */
    cards?: Maybe<ActiveCardAggregatorCardInfo>;
    /** Human readable message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** A payment gateway card response. */
export type ActiveCardAggregatorCardInfo = {
    __typename?: 'ActiveCardAggregatorCardInfo';
    /** Payment gateway name. */
    aggregator?: Maybe<Scalars['String']['output']>;
    /** Payment gateway CARD api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Payment gateway customer id. */
    customer_id?: Maybe<Scalars['String']['output']>;
};
/** Active refund transfer modes. */
export type ActiveRefundTransferModes = {
    __typename?: 'ActiveRefundTransferModes';
    /** A List of transfor mode details. */
    data: Array<Maybe<TransferMode>>;
};
/** Add Beneficiary Details OTP request. */
export type AddBeneficiaryDetailsOtpRequestInput = {
    /** Bank Details For OTP. */
    details: BankDetailsForOtpInput;
    /** Unique identifier for an order. */
    order_id: Scalars['String']['input'];
};
/** Add beneficiary details request object. */
export type AddBeneficiaryDetailsRequestInput = {
    /** True if  beneficiary to be added by delights or False if by User. */
    delights: Scalars['Boolean']['input'];
    /** Beneficiary Mode Details. */
    details: DetailsInput;
    /** Merchant Order Id. */
    order_id: Scalars['String']['input'];
    /** OTP received by customer. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Request Id for add benificiary request. */
    request_id?: InputMaybe<Scalars['String']['input']>;
    /** Shipment Id of the respective Merchant Order Id. */
    shipment_id: Scalars['String']['input'];
    /** Transfer Mode of the Beneficiary to be added. */
    transfer_mode: Scalars['String']['input'];
};
/** Add Beneficiary Via Otp Verification Request. */
export type AddBeneficiaryViaOtpVerificationRequestInput = {
    /** Hash key of the beneficiary Id. */
    hash_key: Scalars['String']['input'];
    /** Otp sent to the given Mobile No. */
    otp: Scalars['String']['input'];
    /** Request id. */
    request_id: Scalars['String']['input'];
};
/** Add Beneficiary Via Otp Verification Response. */
export type AddBeneficiaryViaOtpVerificationResponse = {
    __typename?: 'AddBeneficiaryViaOtpVerificationResponse';
    /** Aggregator Response of beneficiary. */
    message: Scalars['String']['output'];
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Add cart detail API schema which specifies cart data, response message and success flag. */
export type AddCartDetailResponse = {
    __typename?: 'AddCartDetailResponse';
    /** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
    cart?: Maybe<Cart>;
    /** Message of add to cart API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** When adding multiple items check if all added. True if only few are added. */
    partial?: Maybe<Scalars['Boolean']['output']>;
    /** True if all items are added successfully. False if partially added or not added. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Items data list to be added in cart which includes item id, article id, item size, meta, parent item identifier, article assignment and custom json. */
export type AddCartRequestInput = {
    /** List of items detail which need to be added to cart like item id, item size, and item quantity. */
    items?: InputMaybe<Array<InputMaybe<CartItem>>>;
    /** Field to create to new cart whille user adds item to cart. */
    new_cart?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Details required to create a ticket. */
export type AddTicketPayloadInput = {
    /** Optional custom data that needs to be sent. */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Category of the ticket. */
    category: Scalars['String']['input'];
    /** Content for the ticket. */
    content: TicketContentInput;
    /** Creator of the ticket. */
    created_by?: InputMaybe<Scalars['JSON']['input']>;
    /** Describes the priority of the tickets created by the form. */
    priority?: InputMaybe<PriorityEnum>;
    /** Status of the ticket. */
    status?: InputMaybe<Scalars['String']['input']>;
    /** List of emails to be informed for ticket updates. */
    subscribers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
/** Address details, consists of pincode, phone, address id, country code, geo location, country, state, city, landmark, email etc. */
export type Address = {
    __typename?: 'Address';
    /** Address description for address data. */
    address?: Maybe<Scalars['String']['output']>;
    /** Address type of address. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** Area description for address. */
    area?: Maybe<Scalars['String']['output']>;
    /** Area code of the address. */
    area_code?: Maybe<Scalars['String']['output']>;
    /** Area code slug for address. example pincode is slug for India. */
    area_code_slug?: Maybe<Scalars['String']['output']>;
    /** Checkout mode of address on which address to be used for which checkout mode of cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** City of the address. */
    city?: Maybe<Scalars['String']['output']>;
    /** Country of address. */
    country?: Maybe<Scalars['String']['output']>;
    /** Country code of address. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Country iso code for address. */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** Country phone code for address. */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /** Created by user id of address. */
    created_by_user_id?: Maybe<Scalars['String']['output']>;
    /** Custom json of the address. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Email address for address data. */
    email?: Maybe<Scalars['String']['output']>;
    /** Geolocation details for address data. */
    geo_location?: Maybe<GeoLocation>;
    /** Google map point of the address. */
    google_map_point?: Maybe<Scalars['JSON']['output']>;
    /** Id of the address. */
    id?: Maybe<Scalars['String']['output']>;
    /** States whether address is active or not. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Default address flag if no address selected then this should be the default address selected. */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /** Landmark of address. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** Metadata of the address. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Name of person in address data to whom it belongs to. */
    name?: Maybe<Scalars['String']['output']>;
    /** Phone number for address. */
    phone?: Maybe<Scalars['String']['output']>;
    /** Sector of the address. */
    sector?: Maybe<Scalars['String']['output']>;
    /** State of the address. */
    state?: Maybe<Scalars['String']['output']>;
    /** State code for address. */
    state_code?: Maybe<Scalars['String']['output']>;
    /** Tags of address from which it can be identified. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** User id of address for which address is created. */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** Address details, consists of pincode, phone, address id, country code, geo location, country, state, city, landmark, email etc. */
export type Address2Input = {
    /** Custom json of the address. */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Address description for address data. */
    address?: InputMaybe<Scalars['String']['input']>;
    /** Address type of address. */
    address_type?: InputMaybe<Scalars['String']['input']>;
    /** Area description for address. */
    area?: InputMaybe<Scalars['String']['input']>;
    /** Area code of the address. */
    area_code?: InputMaybe<Scalars['String']['input']>;
    /** Area code slug for address. example pincode is slug for India. */
    area_code_slug?: InputMaybe<Scalars['String']['input']>;
    /** Checkout mode of address on which address to be used for which checkout mode of cart. */
    checkout_mode?: InputMaybe<Scalars['String']['input']>;
    /** City of the address. */
    city?: InputMaybe<Scalars['String']['input']>;
    /** Country of address. */
    country?: InputMaybe<Scalars['String']['input']>;
    /** Country code of address. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Country iso code for address. */
    country_iso_code?: InputMaybe<Scalars['String']['input']>;
    /** Country phone code for address. */
    country_phone_code?: InputMaybe<Scalars['String']['input']>;
    /** Created by user id of address. */
    created_by_user_id?: InputMaybe<Scalars['String']['input']>;
    /** Email address for address data. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Geo location coordinates data for address. */
    geo_location?: InputMaybe<GeoLocationInput>;
    /** Google map point of the address. */
    google_map_point?: InputMaybe<Scalars['JSON']['input']>;
    /** Id of the address. */
    id?: InputMaybe<Scalars['String']['input']>;
    /** States whether address is active or not. */
    is_active?: InputMaybe<Scalars['Boolean']['input']>;
    /** Default address flag if no address selected then this should be the default address selected. */
    is_default_address?: InputMaybe<Scalars['Boolean']['input']>;
    /** Landmark of address. */
    landmark?: InputMaybe<Scalars['String']['input']>;
    /** Metadata of the address. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Name of person in address data to whom it belongs to. */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Phone number for address. */
    phone?: InputMaybe<Scalars['String']['input']>;
    pincode?: InputMaybe<Scalars['String']['input']>;
    /** Sector of the address. */
    sector?: InputMaybe<Scalars['String']['input']>;
    /** State of the address. */
    state?: InputMaybe<Scalars['String']['input']>;
    /** State code for address. */
    state_code?: InputMaybe<Scalars['String']['input']>;
    /** Tags of address from which it can be identified. */
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** User id of address for which address is created. */
    user_id?: InputMaybe<Scalars['String']['input']>;
};
/** KYC Address Details. */
export type AddressAsPerIdInput = {
    /** First line of the address. */
    addressline1: Scalars['String']['input'];
    /** Second line of the address. */
    addressline2?: InputMaybe<Scalars['String']['input']>;
    /** City of the KYC address. */
    city: Scalars['String']['input'];
    /** Landmark near the address. */
    land_mark?: InputMaybe<Scalars['String']['input']>;
    /** Type of ownership for the address (e.g., rented, owned). */
    ownership_type?: InputMaybe<Scalars['String']['input']>;
    /** Postal code of the address. */
    pincode: Scalars['String']['input'];
    /** State of the KYC address. */
    state: Scalars['String']['input'];
};
/** KYC Address Details. */
export type AddressInput = {
    /** First line of the address. */
    addressline1: Scalars['String']['input'];
    /** Second line of the address. */
    addressline2?: InputMaybe<Scalars['String']['input']>;
    /** City of the KYC address. */
    city: Scalars['String']['input'];
    /** Landmark near the address. */
    land_mark?: InputMaybe<Scalars['String']['input']>;
    /** Type of ownership for the address (e.g., rented, owned). */
    ownership_type?: InputMaybe<Scalars['String']['input']>;
    /** Postal code of the address. */
    pincode: Scalars['String']['input'];
    /** State of the KYC address. */
    state: Scalars['String']['input'];
};
/** Fetch address response schema which includes pii masking flag and list of addresses. */
export type Addresses = {
    __typename?: 'Addresses';
    /** Address description for address data. */
    address?: Maybe<Array<Maybe<Address>>>;
    /** Personally Identifiable Information masking flag to denote if the user data in address is masked or not. */
    pii_masking?: Maybe<Scalars['Boolean']['output']>;
    /** Defines validation rules for user addresses. */
    validation_config?: Maybe<ValidationConfig>;
};
/** Contains advance payment details */
export type AdvanceDetails = {
    __typename?: 'AdvanceDetails';
    /** All available types of prepayment. */
    all_prepayment_type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Is custom advance amount allowed. */
    allow_custom_advance_amount?: Maybe<Scalars['Boolean']['output']>;
    /** Amount for Payment Breakdown. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Type of cancellation. */
    cancellation_type?: Maybe<Scalars['String']['output']>;
    /** The description for Advance Payment (user configured). */
    description?: Maybe<Scalars['String']['output']>;
    /** The display name for Advance payment. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Is Advance Payment active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Type of prepayment value. */
    prepayment_type?: Maybe<Scalars['String']['output']>;
    /** Value for prepayment in advance payment. */
    prepayment_value?: Maybe<Scalars['Float']['output']>;
    /** Time limit for processing refund. */
    refund_time_limit?: Maybe<Scalars['Float']['output']>;
    /** Time unit for refunds. */
    time_unit?: Maybe<Scalars['String']['output']>;
};
/** Contains advance payment details */
export type AdvancePaymentObject = {
    __typename?: 'AdvancePaymentObject';
    /** Advance payment details */
    advance?: Maybe<AdvanceDetails>;
    /** Display name for Advance Payment Mode. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Display Priority for Payment Option. */
    display_priority?: Maybe<Scalars['Int']['output']>;
    /** Payment mode. */
    list?: Maybe<Array<Maybe<PaymentModeList>>>;
    /** Name of Advance Payment Mode. */
    name?: Maybe<Scalars['String']['output']>;
    /** Payment Mode ID for Advance Payment Option. */
    payment_mode_id?: Maybe<Scalars['Int']['output']>;
    /** Pyament split details */
    split?: Maybe<SplitObject>;
};
/** Aggregators Config details. */
export type AggregatorsConfigDetail = {
    __typename?: 'AggregatorsConfigDetail';
    /** CCAvenue config detail schema. */
    ccavenue?: Maybe<CcAvenueAggregatorConfig>;
    /** Environment i.e Live or Test. */
    env: Scalars['String']['output'];
    /** Juspay config detail schema. */
    juspay?: Maybe<JusPayAggregatorConfig>;
    /** Mswipe config detail schema. */
    mswipe?: Maybe<MSwipeAggregatorConfig>;
    /** PayUMoney config detail schema. */
    payumoney?: Maybe<PayuMoneyAggregatorConfig>;
    /** Razorpay config detail schema. */
    razorpay?: Maybe<RazorPayAggregatorConfig>;
    /** Rupifi config detail schema. */
    rupifi?: Maybe<RupifyAggregatorConfig>;
    /** Simpl config detail schema. */
    simpl?: Maybe<SimplAggregatorConfig>;
    /** Stripe config detail schema. */
    stripe?: Maybe<StripeAggregatorConfig>;
    /** Api response was successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Balance Details. */
export type AmountAvailable = {
    __typename?: 'AmountAvailable';
    /** Currency. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Formated Amount with currency symbol. */
    formatted_value?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Details regarding the announcement bar contents. */
export type Announcements = {
    __typename?: 'Announcements';
    /** Details regarding the announcement bar contents. */
    announcements?: Maybe<Scalars['JSON']['output']>;
    /** list of page slugs on which announcement should be fetched as soon as they are loaded. */
    refresh_pages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** number of seconds after which api should hit again to fetch new announcements. */
    refresh_rate?: Maybe<Scalars['Int']['output']>;
};
/** Details about the sales channel, including its settings, metadata, and associated resources. */
export type AppBasicDetails = {
    __typename?: 'AppBasicDetails';
    /** URL of the banner image for the sales channel. */
    banner?: Maybe<SecureUrl>;
    /** Numeric ID allotted to a business account where the sales channel exists. */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** It gives a detailed information about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** Primary domain associated with the sales channel. */
    domain?: Maybe<Domain>;
    /** List of domains associated with the sales channel. */
    domains?: Maybe<Array<Maybe<Domain>>>;
    /** List of domains associated with the sales channel. */
    favicon?: Maybe<SecureUrl>;
    /** The unique identifier (24-digit Mongo Object ID) for the sales channel details. */
    id?: Maybe<Scalars['String']['output']>;
    /** URL of the logo image for the sales channel. */
    logo?: Maybe<SecureUrl>;
    /** URL of the mobile version of the logo image for the sales channel. */
    mobile_logo?: Maybe<SecureUrl>;
    /** Store name of the ordering store. */
    name: Scalars['String']['output'];
    /** Slug identifier. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Credentials required for Firebase integration. */
export type AppCredentials = {
    __typename?: 'AppCredentials';
    /** Secret API key for Google Maps. A unique identifier that authenticates requests made to Google Maps API. */
    api_key?: Maybe<Scalars['String']['output']>;
    /** Alphanumeric ID allotted to a sales channel application created within a business account. */
    application_id?: Maybe<Scalars['String']['output']>;
};
/** Response object containing details about currencies related to an application. */
export type AppCurrencyInfo = {
    __typename?: 'AppCurrencyInfo';
    /** The unique identifier of the application. */
    _id?: Maybe<Scalars['String']['output']>;
    /** Alphanumeric ID allotted to an application (sales channel website) created within a business account. */
    application?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of when the application was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Details of the default currency for the application. */
    default_currency?: Maybe<DefaultCurrency>;
    /** ISO 8601 timestamp of when the application was last modified. */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** A list of currencies supported by the application. */
    supported_currency?: Maybe<Array<Maybe<Currency>>>;
};
/** Details about the sales channel, including its settings, metadata, and associated resources. */
export type AppDetails = {
    __typename?: 'AppDetails';
    /** It shows application is live or in development mode. */
    app_type?: Maybe<AppType>;
    /** Authentication settings for the sales channel. */
    auth?: Maybe<ApplicationAuth>;
    /** URL of the banner image for the sales channel. */
    banner?: Maybe<SecureUrl>;
    /** An integer value that specifies the number of seconds until the key expires. */
    cache_ttl?: Maybe<Scalars['Int']['output']>;
    /** It indicates different channel types like store, website-and-mobile-apps. Default value is store. */
    channel_type?: Maybe<Scalars['String']['output']>;
    /** Numeric ID allotted to a business account where the sales channel exists. */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** CORS configuration for the sales channel. */
    cors?: Maybe<ApplicationCors>;
    /** ISO 8601 timestamp of sales channel creation. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** It gives a detailed information about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** Primary domain associated with the sales channel. */
    domain?: Maybe<Domain>;
    /** List of domains associated with the sales channel. */
    domains?: Maybe<Array<Maybe<Domain>>>;
    /** List of domains associated with the sales channel. */
    favicon?: Maybe<SecureUrl>;
    /** The unique identifier (24-digit Mongo Object ID) for the sales channel details. */
    id?: Maybe<Scalars['String']['output']>;
    /** Indicates sales channel is active or not active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether a sales channel is internal or not. */
    is_internal?: Maybe<Scalars['Boolean']['output']>;
    /** URL of the logo image for the sales channel. */
    logo?: Maybe<SecureUrl>;
    /** List of meta information for the sales channel. */
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    /** URL of the mobile version of the logo image for the sales channel. */
    mobile_logo?: Maybe<SecureUrl>;
    /** Application mode. */
    mode?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of sales channel updation. */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** Store name of the ordering store. */
    name: Scalars['String']['output'];
    /** The unique identifier (24-digit Mongo Object ID) of owner who owns the application. */
    owner?: Maybe<Scalars['String']['output']>;
    /** List of redirections for the sales channel. */
    redirections?: Maybe<Array<Maybe<ApplicationRedirections>>>;
    /** Slug identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Current status of the application. */
    status?: Maybe<Scalars['String']['output']>;
    /** Random generated fix length string for sales channel. It is required and auto-generated. */
    token?: Maybe<Scalars['String']['output']>;
    /** List of tokens associated with the sales channel. */
    tokens?: Maybe<Array<Maybe<TokenSchema>>>;
    /** ISO 8601 timestamp of sales channel updation. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Version key for tracking revisions. Default value is zero. */
    version?: Maybe<Scalars['Float']['output']>;
    /** Sales channel website details. */
    website?: Maybe<ApplicationWebsite>;
};
/** Configuration for various features of the application. */
export type AppFeature = {
    __typename?: 'AppFeature';
    /** Application ID of the sales channel. */
    app?: Maybe<Scalars['String']['output']>;
    /** Configuration options for features related to the shopping cart, including GST input, staff selection, and coupon usage. */
    cart?: Maybe<CartFeature>;
    /** Configuration for common features across the application. */
    common?: Maybe<CommonFeature>;
    /** ISO 8601 timestamp showing the date when the features were configured. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Configuration for the home page of the application. */
    home_page?: Maybe<HomePageFeature>;
    /** Application ID of the sales channel. */
    id?: Maybe<Scalars['String']['output']>;
    /** Configuration for the landing page of the application. */
    landing_page?: Maybe<LandingPageFeature>;
    /** ISO 8601 timestamp of last known modifications to the sales channel feature configuration. */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** Configuration options for order-related features, such as enabling the 'buy again' option. */
    order?: Maybe<OrderFeature>;
    /** Configuration for the PCR feature. */
    pcr?: Maybe<PcrFeature>;
    /** Configuration for product detail features in the application. */
    product_detail?: Maybe<ProductDetailFeature>;
    /** Configuration for the QR feature. */
    qr?: Maybe<QrFeature>;
    /** Configuration for the registration page of the application. */
    registration_page?: Maybe<RegistrationPageFeature>;
    /** ISO 8601 timestamp of last known modifications to the sales channel feature configuration. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Version key for tracking revisions. Default value is zero. */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Response object containing token information for the application. */
export type AppIntegrationTokens = {
    __typename?: 'AppIntegrationTokens';
    /** Alphanumeric ID allotted to an application (sales channel website) created within a business account. */
    application?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of token creation. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** The unique identifier (24-digit Mongo Object ID) of the token. */
    id?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of token updation. */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** Tokens associated with the application. */
    tokens?: Maybe<TokenDetails>;
    /** ISO 8601 timestamp of token updation. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Version key for tracking revisions. Default value is zero. */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Represents a language supported by the application. */
export type AppLanguages = {
    __typename?: 'AppLanguages';
    /** Code of the ordering store (usually same as Store Code). */
    code?: Maybe<Scalars['String']['output']>;
    /** Store name of the ordering store. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Details about application owner. */
export type AppOwnerInfo = {
    __typename?: 'AppOwnerInfo';
    /** URL for the banner image of the application. */
    banner?: Maybe<SecureUrl>;
    /** Company Information. */
    company_info?: Maybe<CompanyInfo>;
    /** CORS settings for the application. */
    cors?: Maybe<ApplicationCors>;
    /** ISO 8601 timestamp of sales channel information creation. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** It gives a detailed information about the sales channel. It is required. */
    description?: Maybe<Scalars['String']['output']>;
    /** The domain information associated with the application. */
    domain?: Maybe<Domain>;
    /** List of domains associated with the application. */
    domains?: Maybe<Array<Maybe<Domain>>>;
    /** URL for the favicon image of the application. */
    favicon?: Maybe<SecureUrl>;
    /** The unique identifier (24-digit Mongo Object ID) of owner info. */
    id?: Maybe<Scalars['String']['output']>;
    /** Indicates sales channel is active or not active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** URL for the logo image of the application. */
    logo?: Maybe<SecureUrl>;
    /** Metadata related to the application. */
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    /** URL for the mobile logo of the application. */
    mobile_logo?: Maybe<SecureUrl>;
    /** Mode of the application. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Store name of the ordering store. */
    name?: Maybe<Scalars['String']['output']>;
    /** Information about the owner of the application. */
    owner_info?: Maybe<OwnerInfo>;
    /** Random generated fix length string for sales channel. It is required and auto-generated. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Slug identifier for the application. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Random generated fix length string for sales channel. It is required and auto-generated. */
    token?: Maybe<Scalars['String']['output']>;
    /** List of tokens associated with the application. */
    tokens?: Maybe<Array<Maybe<TokenSchema>>>;
    /** The website URL of the application. */
    website?: Maybe<ApplicationWebsite>;
};
export declare enum AppType {
    Development = "development",
    Live = "live"
}
/** Configuration indicating whether authentication is enabled for the sales channel. */
export type ApplicationAuth = {
    __typename?: 'ApplicationAuth';
    /** Shows sales channel auth is enabled or not enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Get details of the current sales channel. */
export type ApplicationConfiguration = {
    __typename?: 'ApplicationConfiguration';
    /** Details about the currency supported by the sales channel, including its ID, name, code, and other attributes. */
    app_currencies?: Maybe<AppCurrencyInfo>;
    /** Details about the sales channel, including its settings, metadata, and associated resources. */
    app_details?: Maybe<AppDetails>;
    /** Details of a specific sales channel including its branding, domain, and associated information. */
    basic_details?: Maybe<AppBasicDetails>;
    /** Get contact details of the sales channel. */
    contact_info?: Maybe<ContactInfo>;
    /** Response schema containing the application feature details. */
    features?: Maybe<AppFeature>;
    /** Response object containing token information for the application. */
    integration_tokens?: Maybe<AppIntegrationTokens>;
    /** Object containing a list of supported languages. */
    languages?: Maybe<Array<Maybe<AppLanguages>>>;
    /** Details about the application, including its company, owner, domain, and other relevant properties. */
    owner_info?: Maybe<AppOwnerInfo>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContent = {
    __typename?: 'ApplicationContent';
    /** List all current announcements in the application. */
    announcements?: Maybe<Announcements>;
    /** List all the blogs against an application. */
    blogs?: Maybe<Blogs>;
    /** List custom fields attached to a particular resource by using the resource. */
    custom_fields?: Maybe<CustomFields>;
    /** List all the data loaders that are enabled for an application. */
    data_loaders?: Maybe<DataLoaders>;
    /** List categories for organizing FAQs. */
    faq_categories?: Maybe<FaqCategories>;
    /** List frequently asked questions and answers. */
    faqs?: Maybe<FaQs>;
    /** Get content of the application's landing page. */
    landing_page?: Maybe<LandingPage>;
    /** Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. */
    legal_information?: Maybe<LeagalInformation>;
    /** Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. */
    navigations?: Maybe<Navigations>;
    /** Lists all Custom Pages. */
    pages?: Maybe<Pages>;
    /** Get search engine optimization configurations of an application. Details include the title, description and an image. */
    seo_configuration?: Maybe<SeoSchema>;
    /** List slideshows along with their details. */
    slideshows?: Maybe<Slideshows>;
    /** Get customer support contact details. Contact Details can be either a phone number or an email-id or both. */
    support_information?: Maybe<SupportInformation>;
    /** Lists HTML tags to power additional functionalities within an application. */
    tags?: Maybe<Array<Maybe<TagSchema>>>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContentBlogsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContentCustom_FieldsArgs = {
    resource: Scalars['String']['input'];
    resourceId: Scalars['String']['input'];
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContentNavigationsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContentPagesArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContentSlideshowsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Configuration for Cross-Origin Resource Sharing, listing domains allowed to access the sales channel. */
export type ApplicationCors = {
    __typename?: 'ApplicationCors';
    /** List of domains added to the sales channel. */
    domains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Represents the SEO metadata for an application item. */
export type ApplicationItemSeo = {
    __typename?: 'ApplicationItemSEO';
    /** It contains detailed information about the SEO. */
    description?: Maybe<Scalars['String']['output']>;
    /** The SEO title of the item. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Object containing contents related to a FAQ. */
export type ApplicationLegalFaq = {
    __typename?: 'ApplicationLegalFAQ';
    /** The contents of a answer of a FAQ. */
    answer?: Maybe<Scalars['String']['output']>;
    /** The contents of a question of a FAQ. */
    question?: Maybe<Scalars['String']['output']>;
};
/** Metadata related to the application, including name-value pairs for additional information about the sales channel. */
export type ApplicationMeta = {
    __typename?: 'ApplicationMeta';
    /** Indicates to name of application meta. */
    name?: Maybe<Scalars['String']['output']>;
    /** Value related to application meta name. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Details about domain redirections, including the old and new URLs and the type of redirection (permanent or temporary). */
export type ApplicationRedirections = {
    __typename?: 'ApplicationRedirections';
    /** Old domain url of the sales channel. */
    redirect_from?: Maybe<Scalars['String']['output']>;
    /** New domain URL of the sales channel. Users will be automatically redirected from old domain to new domain. */
    redirect_to?: Maybe<Scalars['String']['output']>;
    /** It shows domain redirection type. Permanent redirection is for long time period redirection, and temporary redirection for a short time period. */
    type?: Maybe<Type>;
};
/** Configuration for the sales channel's website, including whether it's enabled and its base path. */
export type ApplicationWebsite = {
    __typename?: 'ApplicationWebsite';
    /** Base path for the current sales channel website. */
    basepath?: Maybe<Scalars['String']['output']>;
    /** Shows whether sales channel website URL is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Fields to determine the free gift items to be received from the promotion applied. */
export type AppliedFreeArticles = {
    __typename?: 'AppliedFreeArticles';
    /** IDs of free articles. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** Free gift items details. */
    free_gift_item_details?: Maybe<FreeGiftItemDetails>;
    /** Parent item identifier for free article. */
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    /** Quantity of free articles. */
    quantity?: Maybe<Scalars['Int']['output']>;
};
/** Applied Promotion details. */
export type AppliedPromos = {
    __typename?: 'AppliedPromos';
    /** The discount amount provided by the promotion. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** An array containing details of free articles applied under the promotion. */
    applied_free_articles?: Maybe<Array<Maybe<OrderAppliedFreeArticles>>>;
    /** The quantity of articles required to qualify for the promotion. */
    article_quantity?: Maybe<Scalars['Float']['output']>;
    /** Indicates if the promotion is applied to the MRP. */
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    /** The unique identifier for the promotion. */
    promo_id?: Maybe<Scalars['String']['output']>;
    /** The name of the promotion . */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** The type of promotion. */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Fields to determine the applied promotions details on a product. */
export type AppliedPromotion = {
    __typename?: 'AppliedPromotion';
    /** Per unit discount amount applied with current promotion. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Applied free article for free gift item promotions. */
    applied_free_articles?: Maybe<Array<Maybe<AppliedFreeArticles>>>;
    /** Quantity of article on which promotion is applicable. */
    article_quantity?: Maybe<Scalars['Int']['output']>;
    /** Buy rules for promotions. */
    buy_rules?: Maybe<Array<Maybe<BuyRules>>>;
    /** Promotion code. */
    code?: Maybe<Scalars['String']['output']>;
    /** Discount rules for promotions. */
    discount_rules?: Maybe<Array<Maybe<DiscountRulesApp>>>;
    /** Meta object for extra data. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** If applied promotion is applied on product MRP or ESP. */
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    /** Offer text of current promotion. */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Ownership of promotion. */
    ownership?: Maybe<Ownership>;
    /** Promotion id. */
    promo_id?: Maybe<Scalars['String']['output']>;
    /** Promotion group for the promotion. */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Promotion name of current promotion. */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type of current promotion. */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Apply coupon request schema used to apply the coupon that includes cart id and coupon to be applied. */
export type ApplyCouponRequestInput = {
    /** Coupon code to be applied. */
    coupon_code: Scalars['String']['input'];
};
/** Contains array of tags associated with the article. */
export type Article = {
    __typename?: 'Article';
    /** An array of tags associated with the article. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Defines how articles are assigned based on strategic and operational criteria. */
export type ArticleAssignment = {
    __typename?: 'ArticleAssignment';
    /** Scope of assignment, which can be multi-companies, single-company, or single-store. */
    level?: Maybe<Scalars['String']['output']>;
    /** Method used for article assignment, such as optimal, fast-delivery, low-price, or manual. */
    strategy?: Maybe<Scalars['String']['output']>;
};
/** Article level gift details which includes article id. */
export type ArticleGiftDetailInput = {
    /** Gift details which includes flag for gift applied or not and gift message added by user. */
    article_id?: InputMaybe<GiftDetailInput>;
};
/** Pricing information for the free gift article, including both the initial marked price and the final effective price after applying the product discount. */
export type ArticlePriceDetails = {
    __typename?: 'ArticlePriceDetails';
    /** effective price of article added in cart. */
    effective?: Maybe<Scalars['Float']['output']>;
    /** marked price of article added in cart. */
    marked?: Maybe<Scalars['Float']['output']>;
};
/** Article level price details which includes base and converted prices of article. */
export type ArticlePriceInfo = {
    __typename?: 'ArticlePriceInfo';
    /** Base price information like currency code, currncy symbol, effctive and marked, selling prices. */
    base?: Maybe<BasePrice>;
    /** Base price information like currency code, currncy symbol, effctive and marked, selling prices. */
    converted?: Maybe<BasePrice>;
};
/** Data related to image. */
export type Asset = {
    __typename?: 'Asset';
    /** Aspect ratio of the image. */
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** URL of the image. */
    secure_url?: Maybe<Scalars['String']['output']>;
};
/** An object containing information about assets, such as images, files, or other resources used in the application. */
export type Assets = {
    __typename?: 'Assets';
    /** An object representing commonjs module information. */
    common_js?: Maybe<CommonJs>;
    /** An object representing css assets. */
    css?: Maybe<Css>;
    /** Urls for umd javascript assets. */
    umd_js?: Maybe<UmdJs>;
};
/** A card request to be attached to the customer. */
export type AttachCardRequestInput = {
    /** Card token of payment gateway. */
    card_id: Scalars['String']['input'];
    /** Name of the card holder. */
    name_on_card?: InputMaybe<Scalars['String']['input']>;
    /** Nickname of the card holder. */
    nickname?: InputMaybe<Scalars['String']['input']>;
    /** Refresh cache flag. */
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
};
/** A customer attached cards listing. */
export type AttachCardsResponse = {
    __typename?: 'AttachCardsResponse';
    /** List of cards of customer. */
    data: Scalars['JSON']['output'];
    /** Human readable message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Represents an individual attribute of a product. */
export type Attribute = {
    __typename?: 'Attribute';
    /** A list of product attributes within this group. */
    details?: Maybe<Array<Maybe<AttributeDetail>>>;
    /** The title or name of the attribute group. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Represents the details of an attribute used for comparison or metadata. */
export type AttributeDetail = {
    __typename?: 'AttributeDetail';
    /** A description of the attribute. */
    description?: Maybe<Scalars['String']['output']>;
    /** Display name or label for the attribute. */
    display?: Maybe<Scalars['String']['output']>;
    /** Unique key or identifier for the attribute. */
    key?: Maybe<Scalars['String']['output']>;
    /** URL or path to the logo associated with the attribute. */
    logo?: Maybe<Scalars['String']['output']>;
};
/** Schema for expiration attributes of shortlink campaign. */
export type Attribution = {
    __typename?: 'Attribution';
    /** Expiration of campaign. */
    campaign_cookie_expiry?: Maybe<Scalars['String']['output']>;
};
/** Schema for expiration attributes of shortlink campaign. */
export type AttributionInput = {
    /** Expiration of campaign. */
    campaign_cookie_expiry?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the authentication success structure. */
export type AuthSuccess = {
    __typename?: 'AuthSuccess';
    /** Unique registration token for user. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Boolean which specifies if user is registered. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
/** Data related to author of blog. */
export type Author = {
    __typename?: 'Author';
    /** Description of the author of blog. */
    designation?: Maybe<Scalars['String']['output']>;
    /** Unique Identifier of the author of blog. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the author of blog. */
    name?: Maybe<Scalars['String']['output']>;
};
/** An object representing theme page detail. */
export type AvailablePage = {
    __typename?: 'AvailablePage';
    /** The unique identifier for the object. */
    id?: Maybe<Scalars['String']['output']>;
    /** The url path for the page. For example, 'about-us'. */
    path?: Maybe<Scalars['String']['output']>;
    /** An array of properties associated with the object, where each property is represented as an object. */
    props?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** An array of sections that make up the page. */
    sections?: Maybe<Array<Maybe<AvailablePageSchemaSections>>>;
    /** An array of metadata attributes for the sections of the page, each represented by an object. */
    sections_meta?: Maybe<Array<Maybe<PageSectionMetaAttributes>>>;
    /** An object representing seo-related information for the page. */
    seo?: Maybe<PageSeo>;
    /** The textual content associated with the page. For example, 'about us'. */
    text?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the theme associated with the section. */
    theme?: Maybe<Scalars['String']['output']>;
    /** The type of the page, which can be 'system', 'custom', or 'sections'. */
    type?: Maybe<PageTypes>;
    /** The name of the page. For example, 'about-us'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** An object defining conditions or predicates for the section. */
export type AvailablePagePredicate = {
    __typename?: 'AvailablePagePredicate';
    /** Predicate related to platform conditions. */
    platform?: Maybe<PagePlatformPredicate>;
    /** Predicate related to route conditions. */
    route?: Maybe<AvailablePageRoutePredicate>;
    /** Predicate related to schedule conditions. */
    schedule?: Maybe<PageSchedulePredicate>;
    /** Predicate related to screen conditions. */
    screen?: Maybe<PageScreenPredicate>;
    /** Predicate related to user conditions. */
    user?: Maybe<PageUserPredicate>;
    /** An array of zone ids associated with the section. */
    zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Predicate related to route conditions. */
export type AvailablePageRoutePredicate = {
    __typename?: 'AvailablePageRoutePredicate';
    /** The exact URL for the route when 'selected' is set to 'exact'. */
    exact_url?: Maybe<Scalars['String']['output']>;
    /** An object representing query parameters for the route when 'selected' is set to 'query'. */
    query?: Maybe<Scalars['JSON']['output']>;
    /** Specifies the type of route selection, which can be 'none', 'exact', or 'query'. */
    selected?: Maybe<SelectedType>;
};
/** An object representing a section of the page. Each section can contain various attributes and elements that contribute to the page's content. */
export type AvailablePageSchemaSections = {
    __typename?: 'AvailablePageSchemaSections';
    /** An array of blocks within the section, where each block is represented as an object. */
    blocks?: Maybe<Array<Maybe<Block>>>;
    /** A label for the section, which can be used for display purposes. */
    label?: Maybe<Scalars['String']['output']>;
    /** The name of the section. */
    name?: Maybe<Scalars['String']['output']>;
    /** An object defining conditions or predicates for the section. */
    predicate?: Maybe<AvailablePagePredicate>;
    /** An object containing preset configurations for the section. */
    preset?: Maybe<SectionPreset>;
    /** An object containing various properties associated with the section. */
    props?: Maybe<Scalars['JSON']['output']>;
    /** The source of the section, for example, 'themebundle'. */
    source?: Maybe<Scalars['String']['output']>;
};
/** An object representing a section item. */
export type AvailableSection = {
    __typename?: 'AvailableSection';
    /** An array having blocks of the section. */
    blocks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** The label of the property. */
    label?: Maybe<Scalars['String']['output']>;
    /** The name of the block. */
    name?: Maybe<Scalars['String']['output']>;
    /** An array of objects representing properties or attributes of the section item. */
    props?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};
/** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
export type AvailableStore = {
    __typename?: 'AvailableStore';
    /** The count associated with the store. */
    count?: Maybe<Scalars['Int']['output']>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Badge information associated with the collection. */
export type Badge = {
    __typename?: 'Badge';
    /** Color of the badge text. */
    color?: Maybe<Scalars['String']['output']>;
    /** Text for the badge. */
    text?: Maybe<Scalars['String']['output']>;
};
/** Schema for bag reason meta. */
export type BagReasonMeta = {
    __typename?: 'BagReasonMeta';
    /** Indicates whether to display a text box on the front end. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for individual bag reason. */
export type BagReasons = {
    __typename?: 'BagReasons';
    /** The text displayed. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier. */
    id?: Maybe<Scalars['Int']['output']>;
    /** Schema for bag reason meta. */
    meta?: Maybe<BagReasonMeta>;
    /** A list of quality check types. */
    qc_type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A list of questions for delivery partner. */
    question_set?: Maybe<Array<Maybe<QuestionSet>>>;
    /** A list of reasons. */
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
};
/** Schema for bags reorder. */
export type BagsForReorder = {
    __typename?: 'BagsForReorder';
    /** Schema for article assignment. */
    article_assignment?: Maybe<BagsForReorderArticleAssignment>;
    /** The unique identifier for the item. */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** The size of the item. */
    item_size?: Maybe<Scalars['String']['output']>;
    /** The quantity of the item. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The identifier for the seller. */
    seller_id?: Maybe<Scalars['Int']['output']>;
    /** The identifier for the store. */
    store_id?: Maybe<Scalars['Int']['output']>;
};
/** Schema for article assignment. */
export type BagsForReorderArticleAssignment = {
    __typename?: 'BagsForReorderArticleAssignment';
    /** The level at which the article assignment is made. */
    level?: Maybe<Scalars['String']['output']>;
    /** The strategy used for article assignment. */
    strategy?: Maybe<Scalars['String']['output']>;
};
/** Bank Details For OTP. */
export type BankDetailsForOtpInput = {
    /** Name of the account holder. */
    account_holder: Scalars['String']['input'];
    /** Account number of the holder. */
    account_no: Scalars['String']['input'];
    /** Name of the bank. */
    bank_name: Scalars['String']['input'];
    /** Branch name of the bank. */
    branch_name: Scalars['String']['input'];
    /** IFSC code of the bank. */
    ifsc_code: Scalars['String']['input'];
};
/** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
export type BaseInfo = {
    __typename?: 'BaseInfo';
    /** Name of entities like brand or seller. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of entities like brand or seller. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Base price information like currency code, currncy symbol, effctive and marked, selling prices. */
export type BasePrice = {
    __typename?: 'BasePrice';
    /** Currency code for all amounts. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol of the currncy used for price. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Current per unit price of product after existing deductions. */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Original price of product. */
    marked?: Maybe<Scalars['Float']['output']>;
};
/** Order Beneficiary Details. */
export type BeneficiaryDetails = {
    __typename?: 'BeneficiaryDetails';
    /** Account Holder Name. */
    account_holder: Scalars['String']['output'];
    /** Account Number. */
    account_no: Scalars['String']['output'];
    /** Address of User. */
    address: Scalars['String']['output'];
    /** Bank Name Of Account. */
    bank_name: Scalars['String']['output'];
    /** Beneficiary ID. */
    beneficiary_id: Scalars['String']['output'];
    /** Branch Name Of Account. */
    branch_name?: Maybe<Scalars['String']['output']>;
    /** Remarks. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Creation Date of Beneficiary. */
    created_on: Scalars['String']['output'];
    /** User Id Who filled the Beneficiary. */
    delights_user_name?: Maybe<Scalars['String']['output']>;
    /** Display Name Of Account. */
    display_name: Scalars['String']['output'];
    /** Email of User. */
    email: Scalars['String']['output'];
    /** ID of the Order Beneficiary. */
    id: Scalars['Int']['output'];
    /** IFSC Code. */
    ifsc_code: Scalars['String']['output'];
    /** Boolean Flag whether Beneficiary set or not. */
    is_active: Scalars['Boolean']['output'];
    /** Mobile no of User. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Modification Date of Beneficiary. */
    modified_on: Scalars['String']['output'];
    /** Short Title Of Account. */
    subtitle: Scalars['String']['output'];
    /** Title Of Account. */
    title: Scalars['String']['output'];
    /** TransferMode. */
    transfer_mode: Scalars['String']['output'];
};
/** Billing Address data in shipment */
export type BillingAddress = {
    __typename?: 'BillingAddress';
    /** The full address. */
    address?: Maybe<Scalars['String']['output']>;
    /** The primary line of the address. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The secondary line of the address. */
    address2?: Maybe<Scalars['String']['output']>;
    /** The category of the address. */
    address_category?: Maybe<Scalars['String']['output']>;
    /** The type of address. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** The area or locality. */
    area?: Maybe<Scalars['String']['output']>;
    /** The city of the address. */
    city?: Maybe<Scalars['String']['output']>;
    /** The name of the contact person. */
    contact_person?: Maybe<Scalars['String']['output']>;
    /** The country of the address. */
    country?: Maybe<Scalars['String']['output']>;
    /** The ISO code for the country. */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** The country phone code. */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /** The date and time when the address was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** The formatted display address, typically used for printing or displaying in user interfaces. */
    display_address?: Maybe<Scalars['String']['output']>;
    /** The email address. */
    email?: Maybe<Scalars['String']['output']>;
    /** A nearby landmark. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** The latitude coordinate. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** The longitude coordinate. */
    longitude?: Maybe<Scalars['Float']['output']>;
    /** The name of the person associated with the address. */
    name?: Maybe<Scalars['String']['output']>;
    /** The phone number of the person associated with the address. */
    phone?: Maybe<Scalars['String']['output']>;
    /** The postal code of the address. */
    pincode?: Maybe<Scalars['String']['output']>;
    /** The state of the address. */
    state?: Maybe<Scalars['String']['output']>;
    /** The date and time when the address was last updated . */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** The version of the address format. */
    version?: Maybe<Scalars['String']['output']>;
};
/** An array of blocks included in the section, each represented by an object conforming to the block schema. */
export type Block = {
    __typename?: 'Block';
    /** The name of the block. */
    name?: Maybe<Scalars['String']['output']>;
    /** The props of the block. */
    props?: Maybe<BlockProps>;
    /** The type of the block. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Properties of a block. */
export type BlockProps = {
    __typename?: 'BlockProps';
    /** The image details of the block. */
    image?: Maybe<ImagePickerProp>;
    /** The slide_link details of the block. */
    slide_link?: Maybe<ImagePickerProp>;
};
/** All relevant data related to a blog. */
export type Blog = {
    __typename?: 'Blog';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Boolean flag denoting whether blog is archived or not. */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Data related to author of blog. */
    author?: Maybe<Author>;
    /** Contents of blog. */
    content?: Maybe<Array<Maybe<ResourceContent>>>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details related to resource creation and updation. */
    date_meta?: Maybe<DateMeta>;
    /** Data related to image. */
    feature_image?: Maybe<Asset>;
    /** Unique identifier for an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Timestamp denoting when the blog was published. */
    publish_date?: Maybe<Scalars['String']['output']>;
    /** Boolean flag denoting whether blog is published or not. */
    published?: Maybe<Scalars['Boolean']['output']>;
    /** Estimated time required to read the blog. */
    reading_time?: Maybe<Scalars['String']['output']>;
    /** Details related to SEO of an entry. */
    seo?: Maybe<BlogSeo>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** A brief description of blog. */
    summary?: Maybe<Scalars['String']['output']>;
    /** Tags under a blog. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Title of the Blog. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Filters available for blogs. */
export type BlogFilters = {
    __typename?: 'BlogFilters';
    /** All tags present under blogs. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Details related to SEO of an entry. */
export type BlogSeo = {
    __typename?: 'BlogSEO';
    /** List of action objects which can power breadcrumbs on website. */
    breadcrumb?: Maybe<Array<Maybe<SeObreadcrumb>>>;
    /** List of action objects which can power breadcrumbs on website. */
    canonical_url?: Maybe<Scalars['String']['output']>;
    /** The contents of og:description. */
    description?: Maybe<Scalars['String']['output']>;
    /** The image url of the og:image. */
    image?: Maybe<SeoImage>;
    /** List of meta tags. */
    meta_tags?: Maybe<Array<Maybe<SeoMetaItem>>>;
    /** Data containing priority and frequency of sitemap. */
    sitemap?: Maybe<BlogSitemap>;
    /** The contents of og:title. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Data containing priority and frequency of sitemap. */
export type BlogSitemap = {
    __typename?: 'BlogSitemap';
    /** Value of sitemap frequency change denoting how frequently the content changes. */
    frequency?: Maybe<Scalars['String']['output']>;
    /** Value of sitemap priority randing from 0.0 to 1.0. */
    priority?: Maybe<Scalars['Float']['output']>;
};
/** Blogs live on a sales channel. */
export type Blogs = {
    __typename?: 'Blogs';
    /** Filters available for blogs. */
    filters?: Maybe<BlogFilters>;
    /** List of blogs with details. */
    items?: Maybe<Array<Maybe<Blog>>>;
    /** Data related to pagination. */
    page?: Maybe<PageInfo>;
};
/** Response containing a list of brand items along with pagination information. */
export type Brand = {
    __typename?: 'Brand';
    /** Schema to define the Action Object. */
    action?: Maybe<PageActionDetail>;
    /** Banner URLs associated with the brand. */
    banners?: Maybe<ImageUrls>;
    /** Lists the departments or categories under which the brand's products are listed. */
    departments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Detailed description of the brand, including its history, values, product offerings, and other relevant information. */
    description?: Maybe<Scalars['String']['output']>;
    /** Details about any discounts currently available on the brand's products. */
    discount?: Maybe<Scalars['String']['output']>;
    /** URL or file path to the brand's logo, used in various parts of the platform for branding purposes. */
    logo?: Maybe<Media>;
    /** Name of the brand. */
    name?: Maybe<Scalars['String']['output']>;
    /** URL-friendly version of the brand's name, used in the web address to access the brand's page on the platform. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the brand. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** List of brand items included in the response. */
export type BrandConnection = {
    __typename?: 'BrandConnection';
    /** List of brand items included in the response. */
    items?: Maybe<Array<Maybe<Brand>>>;
    /** An object representing a page with pagination details. */
    page: PageInfo;
};
/** Response containing a list of brand items along with pagination information. */
export type BrandDetail = {
    __typename?: 'BrandDetail';
    /** Banner URLs associated with the brand. */
    banners?: Maybe<ImageUrls>;
    /** Custom JSON data related to the brand, allowing for additional metadata. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Detailed description of the brand, including its history, values, product offerings, and other relevant information. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL or file path to the brand's logo, used in various parts of the platform for branding purposes. */
    logo?: Maybe<Media>;
    /** Name of the brand. */
    name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the brand. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Bulk price response schema details consists of offers from multiple seller. */
export type BulkDiscountOffers = {
    __typename?: 'BulkDiscountOffers';
    /** Actual data to be in response consist of offers from multiple seller. */
    data?: Maybe<Array<Maybe<DiscountOfferDetails>>>;
};
/** Contains information about key features or highlights of a business. */
export type BusinessHighlights = {
    __typename?: 'BusinessHighlights';
    /** Hosted URL of icon image representing the business highlight. */
    icon?: Maybe<Scalars['String']['output']>;
    /** Contains information about key features or highlights of a business. */
    id?: Maybe<Scalars['String']['output']>;
    /** Detailed information about the highlight. */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Title of the business highlight, e.g. Superfast Delivery. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Business Details Schema. */
export type BusinessInfoInput = {
    /** KYC Address Details. */
    address?: InputMaybe<AddressInput>;
    /** Type of business ownership (e.g., sole proprietorship, partnership). */
    business_ownership_type?: InputMaybe<Scalars['String']['input']>;
    /** Type of business (e.g., retail, wholesale). */
    business_type?: InputMaybe<Scalars['String']['input']>;
    /** Type of legal entity (e.g., corporation, LLC). */
    entity_type?: InputMaybe<Scalars['String']['input']>;
    /** Food and Drug Administration registration number. */
    fda?: InputMaybe<Scalars['String']['input']>;
    /** Food Safety and Standards Authority of India registration number. */
    fssai?: InputMaybe<Scalars['String']['input']>;
    /** Goods and Services Tax Identification Number. */
    gstin?: InputMaybe<Scalars['String']['input']>;
    /** Name of the business. */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Permanent Account Number of the business. */
    pan?: InputMaybe<Scalars['String']['input']>;
    /** Shop and Establishment registration details. */
    shop_and_establishment?: InputMaybe<Scalars['JSON']['input']>;
    /** Age or duration of the business. */
    vintage?: InputMaybe<Scalars['String']['input']>;
};
/** Rules of promotion which suffies then only the promotion is applied. */
export type BuyRules = {
    __typename?: 'BuyRules';
    /** Cart conditions details for promotion. */
    cart_conditions?: Maybe<Scalars['JSON']['output']>;
    /** Item criteria of promotion. */
    item_criteria?: Maybe<Scalars['JSON']['output']>;
};
/** CCAvenue config detail schema. */
export type CcAvenueAggregatorConfig = {
    __typename?: 'CCAvenueAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type: Scalars['String']['output'];
    /** Payment gateway api key. */
    key: Scalars['String']['output'];
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret: Scalars['String']['output'];
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** An object representing css assets. */
export type Css = {
    __typename?: 'CSS';
    /** An array of strings representing urls for css assets. */
    links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Schema for campaign attributes of shortlink. It includes source and channel of communication of campaign. */
export type CampaignShortLink = {
    __typename?: 'CampaignShortLink';
    /** Channel of communication of campaign. */
    medium?: Maybe<Scalars['String']['output']>;
    /** Source of communication of campaign. */
    source?: Maybe<Scalars['String']['output']>;
};
/** Schema for campaign attributes of shortlink. It includes source and channel of communication of campaign. */
export type CampaignShortLinkInput = {
    /** Channel of communication of campaign. */
    medium?: InputMaybe<Scalars['String']['input']>;
    /** Source of communication of campaign. */
    source?: InputMaybe<Scalars['String']['input']>;
};
/** Cancel Or Resend Payment Link Request. */
export type CancelOrResendPaymentLinkRequestInput = {
    /** Unique id of payment link. */
    payment_link_id: Scalars['String']['input'];
};
/** Cancel Payment Link Response. */
export type CancelPaymentLinkResponse = {
    __typename?: 'CancelPaymentLinkResponse';
    /** Detailed message. */
    message: Scalars['String']['output'];
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** Card response. */
export type Card = {
    __typename?: 'Card';
    /** Name of the payment aggregator. */
    aggregator_name: Scalars['String']['output'];
    /** Brand of the card. */
    card_brand?: Maybe<Scalars['String']['output']>;
    /** Brand image on the card. */
    card_brand_image?: Maybe<Scalars['String']['output']>;
    /** Unique fingerprint of the card for identification. */
    card_fingerprint?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the card within the system. */
    card_id?: Maybe<Scalars['String']['output']>;
    /** International Securities Identification Number for the card. */
    card_isin?: Maybe<Scalars['String']['output']>;
    /** Issuer of the card. */
    card_issuer?: Maybe<Scalars['String']['output']>;
    /** Name mentioned on the card. */
    card_name?: Maybe<Scalars['String']['output']>;
    /** Card number mentioned on the card. */
    card_number?: Maybe<Scalars['String']['output']>;
    /** Card reference. */
    card_reference?: Maybe<Scalars['String']['output']>;
    /** Encrypted token representing the card. */
    card_token?: Maybe<Scalars['String']['output']>;
    /** Type of the card. */
    card_type?: Maybe<Scalars['String']['output']>;
    /** Whether card is tokenized or not. */
    compliant_with_tokenisation_guidelines?: Maybe<Scalars['Boolean']['output']>;
    /** Card's expiration month. */
    exp_month?: Maybe<Scalars['Int']['output']>;
    /** Card's expiration year. */
    exp_year?: Maybe<Scalars['Int']['output']>;
    /** Card expiry. */
    expired?: Maybe<Scalars['Boolean']['output']>;
    /** User-defined name for the card. */
    nickname?: Maybe<Scalars['String']['output']>;
};
/** List card response. */
export type CardConnection = {
    __typename?: 'CardConnection';
    /** List of cards of customer. */
    data?: Maybe<Array<Maybe<Card>>>;
    /** Human readable message. */
    message: Scalars['String']['output'];
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Card Details Response. */
export type CardData = {
    __typename?: 'CardData';
    /** Card details. */
    data: CardDetail;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Card details. */
export type CardDetail = {
    __typename?: 'CardDetail';
    /** Bank associated with the card. */
    bank: Scalars['String']['output'];
    /** Code identifying the bank. */
    bank_code: Scalars['String']['output'];
    /** Brand of the card (e.g., Visa, MasterCard). */
    card_brand: Scalars['String']['output'];
    /** Card's expiration month. */
    card_exp_month?: Maybe<Scalars['String']['output']>;
    /** Card's expiration year. */
    card_exp_year?: Maybe<Scalars['String']['output']>;
    /** Object representation of the card. */
    card_object: Scalars['String']['output'];
    /** Card Sub type. */
    card_sub_type: Scalars['String']['output'];
    /** Card Token. */
    card_token?: Maybe<Scalars['String']['output']>;
    /** Country where the card was issued. */
    country: Scalars['String']['output'];
    /** Extended Card Type. */
    extended_card_type: Scalars['String']['output'];
    /** Unique identifier for the record. */
    id: Scalars['String']['output'];
    /** Indicates whether the card is domestic. */
    is_domestic_card: Scalars['Boolean']['output'];
    /** Name of the cardholder. */
    name_on_card?: Maybe<Scalars['String']['output']>;
    /** Current status of the card. */
    status: Scalars['Boolean']['output'];
    /** General type of the card (e.g., debit, credit). */
    type: Scalars['String']['output'];
    /** User associated with the card. */
    user?: Maybe<Scalars['String']['output']>;
};
/** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
export type Cart = {
    __typename?: 'Cart';
    /** List of saved addresses for user cart checkout. */
    addresses?: Maybe<Addresses>;
    /** List of applied promotions data to cart which includes promotion id, promotion name, offer text, description, buy rules, discount rules and promotion type. */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag for the cart which denotes user is doing fast checkout for the cart using buy now. */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier of the user cart. */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of user cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message to be added in user cart. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Common config at sales channel which includes delivery charge config. */
    common_config?: Maybe<CartCommonConfig>;
    /** Coupon data of user cart which denotes if coupon is applied, coupon code, coupon amount, coupon title and coupon message. */
    coupon?: Maybe<CartDetailCoupon>;
    /** Coupon text of coupon applied on cart. */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency of the price for the cart. */
    currency?: Maybe<CartCurrency>;
    /** Custom meta details added cart checkout API payload. */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge in information message on shipment. */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Delivery promise of user cart. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** GSTIN added in user cart. */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the user cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Cart validity flag determines the if the response is valid or not. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Items data list in user cart that includes item id, item size, store id, available sizes and rest of the item related data. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of cart. */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the get cart detail API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Notification object which denotes notification data for user cart. */
    notification?: Maybe<Scalars['JSON']['output']>;
    /** Pan card config states at what condition user should enter the pan card. */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /** Permanent Account Number of the user. */
    pan_no?: Maybe<Scalars['String']['output']>;
    /** Payment selection lock config for the user cart. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /** Restrict checkout flag to restrict the checkout process. */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Staff employee user id if cart is created by staff employee for the customer. */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Success flag of get cart detail API response. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier of the user cart. */
    uid?: Maybe<Scalars['String']['output']>;
    /** Count of items present in user cart. */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
export type CartAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
export type CartBreakup = {
    __typename?: 'CartBreakup';
    /** Coupon price breakup details which includes coupon code, coupon type, coupon value, coupon description, coupn message etc. */
    coupon?: Maybe<CouponBreakup>;
    /** List of breakup data which is used to display the breakup to the customer like MRP total, Discount, Sub total, coupon value, promotion value and final total. */
    display?: Maybe<Array<Maybe<DisplayBreakup>>>;
    /** Loyalty points data for the user cart. */
    loyalty_points?: Maybe<LoyaltyPoints>;
    /** Price raw breakup of the cart which denotes cod charge, convinience fee, coupon amount, delivery charge, discount, loyalty points, gift card, gst charge, etc. */
    raw?: Maybe<RawBreakup>;
};
/** Checkout request schema which includes custom meta, merchant code, cart id, payment methods, address id, callback url, order type, billing address and card details. */
export type CartCheckoutDetailRequestInput = {
    /** Address id of the user where the order to be delivered. */
    address_id?: InputMaybe<Scalars['String']['input']>;
    /** Aggregator of payment mode to do the payment. */
    aggregator?: InputMaybe<Scalars['String']['input']>;
    /** Billing address json which includes customer address, customer phone, customer email, customer pincode, customer landmark and customer name. */
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Billing address id selected by user on which shipment bill to be generated. */
    billing_address_id?: InputMaybe<Scalars['String']['input']>;
    /** Callback url after payment received/failed. */
    callback_url?: InputMaybe<Scalars['String']['input']>;
    /** Cart id of the user cart. */
    cart_id?: InputMaybe<Scalars['String']['input']>;
    /** Custom meta data to be added in order. */
    custom_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Customer details to be added in order. */
    customer_details?: InputMaybe<CustomerDetailsInput>;
    /** Delivery address data which includes customer address, customer phone, customer email, customer pincode, customer landmark and customer name. */
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Extra meta to be added while checkout in order. */
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Cart id of the user cart. */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Issuer Identification Number' number of card if payment mode is card to do the payment. */
    iin?: InputMaybe<Scalars['String']['input']>;
    /** Merchant code of the payment mode selected to do the payment. */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Meta data sent while checkout. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Network of card if payment mode is card to do the payment. */
    network?: InputMaybe<Scalars['String']['input']>;
    /** Order type of the order being placed like pickAtStore or HomeDelivery. */
    order_type?: InputMaybe<Scalars['String']['input']>;
    /** Ordering store id of the store from which the order is getting placed. */
    ordering_store?: InputMaybe<Scalars['Int']['input']>;
    /** Payment auto confirm flag if payment need not to be collected from user. */
    payment_auto_confirm?: InputMaybe<Scalars['Boolean']['input']>;
    /** Payment identifier of the payment mode selected to do the payment. */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Payment methods list used to make the payment. */
    payment_methods: Array<InputMaybe<PaymentMethodInput>>;
    /** Payment mode of the payment selected to do the payment. */
    payment_mode: Scalars['String']['input'];
    /** Payment params which includes payment identifier and merchant code. */
    payment_params?: InputMaybe<Scalars['JSON']['input']>;
    /** Staff details which can be added while checkout if staff member is doing check on behalf of customer which incluedes empployee code, user, last name, first name and staff user id. */
    staff?: InputMaybe<StaffCheckoutInput>;
    /** Type of cart if payment mode is card to do the payment. */
    type?: InputMaybe<Scalars['String']['input']>;
};
/** Checkout cart detail respoonse schema includes cart id, delivery promise, items, comment, coupon text etc. */
export type CartCheckoutResponse = {
    __typename?: 'CartCheckoutResponse';
    /** App intercept url which is used to redirect on app after payment in confirmed/failed. */
    app_intercept_url?: Maybe<Scalars['String']['output']>;
    /** Callback url to be redirected after payment received/failed. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Checkout cart detail respoonse schema includes cart id, delivery promise, items, comment, coupon text etc. */
    cart?: Maybe<CheckCart>;
    /** Data of the user cart checkout includes cart data, address, user id, order type etc. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Message of the cart checkout API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Order id generated after placing order. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Payment confirm url used to redirect after payment is confirmed. */
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    /** Success flag of cart checkout API response. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Cart common config which determines delivery charge config. */
export type CartCommonConfig = {
    __typename?: 'CartCommonConfig';
    /** Delivery charge config which includes charges applicable condition and enabled flag. */
    delivery_charges_config?: Maybe<DeliveryChargesConfig>;
};
/** Currency data of the cart for prices. */
export type CartCurrency = {
    __typename?: 'CartCurrency';
    /** Currency code defined by ISO 4217:2015. */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of user cart prices. */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Cart level coupon data which denoes cashback amount, coupon code, coupon description, coupon sub title, and coupon value. */
export type CartDetailCoupon = {
    __typename?: 'CartDetailCoupon';
    /** Fields denotes cashback amount applied to cart. */
    cashback_amount?: Maybe<Scalars['Float']['output']>;
    /** Primary cashback message for coupon applied to cart. */
    cashback_message_primary?: Maybe<Scalars['String']['output']>;
    /** Secondary cashback message for coupon applied to cart. */
    cashback_message_secondary?: Maybe<Scalars['String']['output']>;
    /** Coupon code to be applied to cart. */
    coupon_code?: Maybe<Scalars['String']['output']>;
    /** Coupon description of the coupon applied to cart. */
    coupon_description?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the coupon applied to cart. */
    coupon_id?: Maybe<Scalars['String']['output']>;
    /** Coupon subtitle of the coupon applied to cart. */
    coupon_subtitle?: Maybe<Scalars['String']['output']>;
    /** Coupon Title of the coupon applied. */
    coupon_title?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Value of the coupon applied to cart. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Total discount earned from coupon applied to cart. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Flag to determine where the coupon is applied to cart or not. */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Determine where the coupon applied to cart is valid. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount value of the coupon applied to cart. */
    maximum_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message of the coupon applied to cart. */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum cart value of the coupon applied to cart. */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
};
/** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
export type CartDetailResponse = {
    __typename?: 'CartDetailResponse';
    /** List of applied promotions data to cart which includes promotion id, promotion name, offer text, description, buy rules, discount rules and promotion type. */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag for the cart which denotes user is doing fast checkout for the cart using buy now. */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier of the user cart. */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of user cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message to be added in user cart. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Common config at sales channel which includes delivery charge config. */
    common_config?: Maybe<CartCommonConfig>;
    /** Coupon data of user cart which denotes if coupon is applied, coupon code, coupon amount, coupon title and coupon message. */
    coupon?: Maybe<CartDetailCoupon>;
    /** Coupon text of coupon applied on cart. */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency of the price for the cart. */
    currency?: Maybe<CartCurrency>;
    /** Metadata for custom cart */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge in information message on shipment. */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Delivery promise of user cart. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** GSTIN added in user cart. */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the user cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Cart validity flag determines the if the response is valid or not. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Items data list in user cart that includes item id, item size, store id, available sizes and rest of the item related data. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of cart. */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the get cart detail API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Notification object which denotes notification data for user cart. */
    notification?: Maybe<Scalars['JSON']['output']>;
    /** Pan card config states at what condition user should enter the pan card. */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /** Permanent Account Number of the user. */
    pan_no?: Maybe<Scalars['String']['output']>;
    /** Payment selection lock config for the user cart. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /** Restrict checkout flag to restrict the checkout process. */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Staff employee user id if cart is created by staff employee for the customer. */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Success flag of get cart detail API response. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier of the user cart. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Configuration options for features related to the shopping cart, including GST input, staff selection, and coupon usage. */
export type CartFeature = {
    __typename?: 'CartFeature';
    /** Allow adding of Google Maps. Default value is true. */
    google_map?: Maybe<Scalars['Boolean']['output']>;
    /** Whether customer is allowed to enter GST on the cart page for claiming input credits. */
    gst_input?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the staff is placing order on behalf of customer. Default value is true. */
    placing_for_customer?: Maybe<Scalars['Boolean']['output']>;
    /** Allow coupon apply and credits, together. Default value is false. */
    revenue_engine_coupon?: Maybe<Scalars['Boolean']['output']>;
    /** Whether staff selection is enabled on cart page. */
    staff_selection?: Maybe<Scalars['Boolean']['output']>;
};
/** Add to cart request schema which has items data to be added in cart. */
export type CartItem = {
    /** Field to add custom json at article level while add items to cart . */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Field to determine how article assignment should happen by article assignment level and strategy. */
    article_assignment?: InputMaybe<Scalars['JSON']['input']>;
    /** Unique identifier of an article . */
    article_id?: InputMaybe<Scalars['String']['input']>;
    /** Display field at article level . */
    display?: InputMaybe<Scalars['String']['input']>;
    /** Extra meta data to be added at article level while add items to cart. */
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Unique identifier to identify product. */
    item_id?: InputMaybe<Scalars['Int']['input']>;
    /** Field to determine size of the product. */
    item_size?: InputMaybe<Scalars['String']['input']>;
    /** Field to add meta data at article level. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Fields to determine parent product of the product. */
    parent_item_identifiers?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    /** Filed to determine whether user is making request from pos or not. */
    pos?: InputMaybe<Scalars['Boolean']['input']>;
    /** Field to specify the product groups of the product that the user is trying to add in cart. */
    product_group_tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Field to specify the product quantity that user wants to buy. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
    /** Unique idetifier of the seller selected by the user from which user want to buy a product . */
    seller_id?: InputMaybe<Scalars['Int']['input']>;
    /** Add items using seller identifier for store os. */
    seller_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier of the store selected by the user from which user want to buy a product. */
    store_id?: InputMaybe<Scalars['Int']['input']>;
};
/** Response schema which defines how many total number of items are in cart. */
export type CartItemCountResponse = {
    __typename?: 'CartItemCountResponse';
    /** Item count present in cart. */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Cart meta request schema to update the cart meta detail like delivery slots, comment message, GSTIN and custom cart meta. */
export type CartMetaRequestInput = {
    /** Checkout mode of user cart. */
    checkout_mode?: InputMaybe<Scalars['String']['input']>;
    /** Comment message to be added in user cart. */
    comment?: InputMaybe<Scalars['String']['input']>;
    /** Metadata for custom cart */
    custom_cart_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Delivery slots details includes article level time slot when the shipment can be delivered. */
    delivery_slots?: InputMaybe<Scalars['JSON']['input']>;
    /** Article level gift details which includes article id. */
    gift_details?: InputMaybe<ArticleGiftDetailInput>;
    /** GSTIN number to be added in user cart. */
    gstin?: InputMaybe<Scalars['String']['input']>;
    /** Customer contact details for customer pickup at store. */
    pick_up_customer_details?: InputMaybe<Scalars['JSON']['input']>;
};
/** Cart meta response schema. */
export type CartMetaResponse = {
    __typename?: 'CartMetaResponse';
    /** Whether added meta was vaild. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Detailed message. */
    message?: Maybe<Scalars['String']['output']>;
};
/** Price of single quantity product for seller currency and customer currency. */
export type CartPriceInfo = {
    __typename?: 'CartPriceInfo';
    /** Seller currency price details of the product for single quantity. */
    base?: Maybe<PriceInfo>;
    /** Customer currency price details of the product for single quantity. */
    converted?: Maybe<PriceInfo>;
};
/** Cart product data structure which includes product data as action, attributes, brand, categoreis,, images, item code, tags, item id, item name, etc. */
export type CartProduct = {
    __typename?: 'CartProduct';
    /** Field to add custom json of the product in cart. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Schema of Action Object to render the product. */
    action?: Maybe<ProductAction>;
    /** Product attributes defined on platform. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
    brand?: Maybe<BaseInfo>;
    /** Product category information which incldes category name and category id. */
    categories?: Maybe<Array<Maybe<CategoryInfo>>>;
    /** Product Images urls of different types like secure url, aspect ration url and url. */
    images?: Maybe<Array<Maybe<ProductImage>>>;
    /** Product code of the product while defining product on platform. */
    item_code?: Maybe<Scalars['String']['output']>;
    /** Product name of the product in cart which is defined on platform. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique product url name generated via product name and other meta data. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Products tags that are added to each product to identify the set of products. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Contains Tags which is a lable or batch that is attached to a product in cart. */
    teaser_tag?: Maybe<Tags>;
    /** Type of product in cart. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the product in cart. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Product identifiers uniquely generated by cart to uniquely identify the product in cart. */
export type CartProductIdentifer = {
    __typename?: 'CartProductIdentifer';
    /** Article idenfier generated by cart. */
    identifier?: Maybe<Scalars['String']['output']>;
};
/** Product identifiers uniquely generated by cart to uniquely identify the product in cart. */
export type CartProductIdentiferInput = {
    /** Article idenfier generated by cart. */
    identifier?: InputMaybe<Scalars['String']['input']>;
};
/** Product information of the products in cart which includes article information, charges applied, coupon data, delivery promise, discount etc. */
export type CartProductInfo = {
    __typename?: 'CartProductInfo';
    /** Product store information of the product added in cart. */
    article?: Maybe<ProductArticle>;
    /** Availability information of the product like deliverable, out of stock, valid product etc. */
    availability?: Maybe<ProductAvailability>;
    /** Bulk offer information for the product which denotes if any bulk offer is applied to the product in cart. */
    bulk_offer?: Maybe<Scalars['JSON']['output']>;
    /** Charges information which denotes types of charges and amount of charge applied to that product in cart. */
    charges?: Maybe<Array<Maybe<ChargesInfo>>>;
    /** Coupon actual price breakup details. */
    coupon?: Maybe<CouponDetails>;
    /** Message for the coupon denotes which coupon is applied and empty if not applied. */
    coupon_message?: Maybe<Scalars['String']['output']>;
    /** Whether MTO (Make to Order) is enabled or not. */
    custom_order?: Maybe<Scalars['JSON']['output']>;
    /** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** Discount amount of the product in cart. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Product identifiers uniquely generated by cart to uniquely identify the product in cart. */
    identifiers: CartProductIdentifer;
    /** Whether or not the product is a set of items. */
    is_set?: Maybe<Scalars['Boolean']['output']>;
    /** The attribute key associated with the size. */
    key?: Maybe<Scalars['String']['output']>;
    /** Product level message which denotes error information to display over the product in cart. */
    message?: Maybe<Scalars['String']['output']>;
    /** An Integer indication the Minimum Order Quantity of a product, e.g. 100. */
    moq?: Maybe<Scalars['JSON']['output']>;
    /** Parent item information of the product which identifies the parent of the product in cart. */
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    /** Price of single quantity product for seller currency and customer currency. */
    price?: Maybe<CartPriceInfo>;
    /** Price of single quantity product for seller currency and customer currency. */
    price_per_unit?: Maybe<ProductPriceInfo>;
    /** Cart product data structure which includes product data as action, attributes, brand, categoreis,, images, item code, tags, item id, item name, etc. */
    product?: Maybe<CartProduct>;
    /** European Article Number of the product (limited upto 50 EAN identifier in a single request). */
    product_ean_id?: Maybe<Scalars['String']['output']>;
    /** Loyalty points message data. */
    promo_meta?: Maybe<PromoMeta>;
    /** List of applicable promotion for the product in cart. */
    promotions_applied?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Quantity of the product added in cart. */
    quantity?: Maybe<Scalars['Int']['output']>;
};
/** Cart shipment response schema for get shipments API. */
export type CartShipmentsResponse = {
    __typename?: 'CartShipmentsResponse';
    /** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of the user cart. */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message added in cart. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of coupon applied on cart. */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. */
    currency?: Maybe<CartCurrency>;
    /** Metadata for custom cart */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge in information message on shipment. */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
    delivery_promise?: Maybe<ShipmentPromise>;
    /** Error details if any error occurs which includes type of error, error code and error message. */
    error?: Maybe<Scalars['Boolean']['output']>;
    /** GSTIN number added in cart. */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart id of the user cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Cart validity flag determines the if the response is valid or not. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Last modified timestamp of cart. */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message of get shipments API. */
    message?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /** Restrict checkout flag to restrict the checkout process. */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** List of Shipments which includes shipment data like shipment items, shipment promise, Shipment type, shipment order type, shipment dp options etc. */
    shipments?: Maybe<Array<Maybe<ShipmentResponse>>>;
    /** Cart id of the user cart. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Response containing a list of department category trees and department identifiers. */
export type Categories = {
    __typename?: 'Categories';
    /** List of department category trees. */
    data?: Maybe<Array<Maybe<DepartmentCategoryDetail>>>;
    /** List of departments. */
    departments?: Maybe<Array<Maybe<DepartmentIdentifier>>>;
};
/** Response containing metadata for a category. */
export type Category = {
    __typename?: 'Category';
    /** Custom JSON data related to the category, allowing for additional metadata. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Banner images associated with the category, including portrait and landscape orientations. */
    banners?: Maybe<ImageUrls>;
    /** Logo associated with the category. */
    logo?: Maybe<Media>;
    /** Name of the category. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the category. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Details regarding a FAQ category under which FAQs are stored. */
export type CategoryBySlug = {
    __typename?: 'CategoryBySlug';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding a FAQs stored under a FAQs category. */
    children?: Maybe<Array<Maybe<ChildSchema>>>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details of the FAQ category. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the image associated with FAQ Category. */
    icon_url?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Order of FAQ Category. */
    index?: Maybe<Scalars['Int']['output']>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Title of a FAQ Category. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Details regarding a FAQ category under which FAQs are stored. */
export type CategoryDetail = {
    __typename?: 'CategoryDetail';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding a FAQs stored under a FAQs category. */
    children?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details of the FAQ category. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the image associated with FAQ Category. */
    icon_url?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Order of FAQ Category. */
    index?: Maybe<Scalars['Int']['output']>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Title of a FAQ Category. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Category information schema which denotes category name and category id. */
export type CategoryInfo = {
    __typename?: 'CategoryInfo';
    /** Category name of the product . */
    name?: Maybe<Scalars['String']['output']>;
    /** Product Category Id. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Represents a L1 category. */
export type CategoryItem = {
    __typename?: 'CategoryItem';
    /** Schema of Action Object. */
    action: PageActionDetail;
    /** Banner images associated with the L1  category. */
    banners: ImageUrls;
    /** List of categories under the L1  category. */
    childs?: Maybe<Array<Maybe<CategoryItemL2>>>;
    /** Name of the L1 category. */
    name: Scalars['String']['output'];
    /** Slug or URL-friendly identifier for the L1 category. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L1 category. */
    uid: Scalars['Int']['output'];
};
/** Represents a L2 category. */
export type CategoryItemL2 = {
    __typename?: 'CategoryItemL2';
    /** Custom JSON data related to the L2 category, allowing for additional metadata. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Schema of Action Object. */
    action: PageActionDetail;
    /** Banner images associated with the L2  category. */
    banners: ImageUrls;
    /** List of categories under the L2  category. */
    childs?: Maybe<Array<Maybe<CategoryItemL3>>>;
    /** Name of the L2 category. */
    name: Scalars['String']['output'];
    /** Slug or URL-friendly identifier for the L2 category. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L2  category. */
    uid: Scalars['Int']['output'];
};
/** Represents a L3 category with associated details and banners. */
export type CategoryItemL3 = {
    __typename?: 'CategoryItemL3';
    /** Custom JSON data related to the L3 category, allowing for additional metadata. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Schema of Action Object. */
    action: PageActionDetail;
    /** Banner images associated with the L3  category. */
    banners: ImageUrls;
    /** List of categories under the L3  category. */
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    /** Name of the L3 category. */
    name: Scalars['String']['output'];
    /** Slug or URL-friendly identifier for the L3 category. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L3  category. */
    uid: Scalars['Int']['output'];
};
/** Represents a L4 category with associated details and banners. */
export type CategoryItemL4 = {
    __typename?: 'CategoryItemL4';
    /** Custom JSON data related to the L3 category, allowing for additional metadata. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Schema of Action Object. */
    action: PageActionDetail;
    /** Banner images associated with the L4  category. */
    banners: ImageUrls;
    /** List of categories under the L4  category. */
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    /** Name of the L4 category. */
    name: Scalars['String']['output'];
    /** Slug or URL-friendly identifier for the L3 category. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L4 category. */
    uid: Scalars['Int']['output'];
};
/** Represents a L1 category. */
export type CategoryItem5 = {
    __typename?: 'CategoryItem';
    /** Banner images associated with the L1  category. */
    banners: ImageUrls;
    /** List of categories under the L1  category. */
    childs?: Maybe<Array<Maybe<CategoryItemL2>>>;
    /** Name of the L1 category. */
    name: Scalars['String']['output'];
    /** Slug or URL-friendly identifier for the L1 category. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L1 category. */
    uid: Scalars['Int']['output'];
    logo?: Maybe<CollectionLogo>;
};
/** The schema for the all the communication channels that the user has accept to receive communication through. */
export type Channels = {
    __typename?: 'Channels';
    /** The schema for the communication channel for email channel which includes the response indicating the user's preference and the display name of the communication channel. */
    email?: Maybe<EmailCommunication>;
    /** The schema for the communication channel for SMS channel which includes the response indicating the user's preference and the display name of the communication channel. */
    sms?: Maybe<SmsCommunication>;
    /** The schema for the communication channel for whatsapp channel which includes the response indicating the user's preference and the display name of the communication channel. */
    whatsapp?: Maybe<WhatsappCommunication>;
};
/** Charge amount schema, amount defined for the charges */
export type ChargeAmount = {
    __typename?: 'ChargeAmount';
    /** Charges amount in base currency. */
    base_currency?: Maybe<ChargeAmountCurrency>;
    /** Charges amount in ordering currency. */
    ordering_currency?: Maybe<ChargeAmountCurrency>;
};
/** Charge amount currency currency schema */
export type ChargeAmountCurrency = {
    __typename?: 'ChargeAmountCurrency';
    /** Charge currency code */
    currency?: Maybe<Scalars['String']['output']>;
    /** Charge currency value or amount */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Charge Customer Request. */
export type ChargeCustomerRequestInput = {
    /** Payment gateway name i.e Simpl, Mswipe. */
    aggregator: Scalars['String']['input'];
    /** Chargeable amount of order. */
    amount: Scalars['Int']['input'];
    /** Unique order id. */
    order_id: Scalars['String']['input'];
    /** Transaction token of payment gateway. */
    transaction_token?: InputMaybe<Scalars['String']['input']>;
    /** Already Verified flag from payment gateway i.e Mswipe. */
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Charge Customer Response. */
export type ChargeCustomerResponse = {
    __typename?: 'ChargeCustomerResponse';
    /** Payment gateway name i.e Simpl, Mswipe. */
    aggregator: Scalars['String']['output'];
    /** Cart id of customer. */
    cart_id?: Maybe<Scalars['String']['output']>;
    /** Delivery address id of customer. */
    delivery_address_id?: Maybe<Scalars['String']['output']>;
    /** Human readable message. */
    message: Scalars['String']['output'];
    /** Unique order id. */
    order_id: Scalars['String']['output'];
    /** Status of charged payment. */
    status: Scalars['String']['output'];
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Charge amount distribution logic, config by which charge will assign to the entity or distribution_level */
export type ChargeDistributionLogic = {
    __typename?: 'ChargeDistributionLogic';
    /** This field defines the distribution */
    distribution?: Maybe<ChargeDistributionSchema>;
    /** This field defines the distribution level, e.g distribution level is (order, shipment, article) */
    distribution_level?: Maybe<Scalars['String']['output']>;
};
/** Charge distribution structure, used to refer the distribution logic for the entity such as Order, shipment, article */
export type ChargeDistributionSchema = {
    __typename?: 'ChargeDistributionSchema';
    /** This field defines the distribution logic */
    logic?: Maybe<Scalars['String']['output']>;
    /** This field defines the distribution type */
    type?: Maybe<Scalars['String']['output']>;
};
/** Charges amount data which deffently denotes amount of charges in seller currency and customer currency. */
export type ChargesAmount = {
    __typename?: 'ChargesAmount';
    /** This is destination currency of value. */
    currency?: Maybe<Scalars['String']['output']>;
    /** This is the value of amount added. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Charges information which denotes types of charges and amount of charge applied to that product in cart. */
export type ChargesInfo = {
    __typename?: 'ChargesInfo';
    /** Whether refund is allowed or not for the charge. */
    allow_refund?: Maybe<Scalars['Boolean']['output']>;
    /** Charge amount applied to the product in cart. */
    amount?: Maybe<ChargesAmount>;
    /** Code of the charge applied. */
    code?: Maybe<Scalars['String']['output']>;
    /** Meta data related to charges price adjustment. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Name of the charge applied. */
    name?: Maybe<Scalars['String']['output']>;
    /** Type of the charge applied. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Charges threshhold data which denotes how much charge will be applied on cart value threshold. */
export type ChargesThreshold = {
    __typename?: 'ChargesThreshold';
    /** Charges amount to be applied on cart. */
    charges?: Maybe<Scalars['Float']['output']>;
    /** Threshold of cart value on which the charge should be applied . */
    threshold?: Maybe<Scalars['Float']['output']>;
};
/** Checkout cart detail respoonse schema includes cart id, delivery promise, items, comment, coupon text etc. */
export type CheckCart = {
    __typename?: 'CheckCart';
    /** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of the user cart for which the order placed. */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of user cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Whether Cash On Delivery available. */
    cod_available?: Maybe<Scalars['Boolean']['output']>;
    /** Cash On Delivery charges of the user cart. */
    cod_charges?: Maybe<Scalars['Int']['output']>;
    /** Cash On Delivery message for the order placed. */
    cod_message?: Maybe<Scalars['String']['output']>;
    /** Comment message added in cart after order placed. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of the applied coupon on order placed. */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. */
    currency?: Maybe<CartCurrency>;
    /** Metadata for custom cart */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge in information message on shipment. */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Delivery charge order value. */
    delivery_charge_order_value?: Maybe<Scalars['Int']['output']>;
    /** Delivery charges of the order placed via checkout API. */
    delivery_charges?: Maybe<Scalars['Int']['output']>;
    /** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
    delivery_promise?: Maybe<ShipmentPromise>;
    /** Error details if any error occurs which includes type of error, error code and error message. */
    error_message?: Maybe<Scalars['String']['output']>;
    /** GSTIN number added in cart. */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart id of the user cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Valid flag fotr the checkout response if order placed was valid. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Items details in cart after order placed. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of cart. */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the cart checkout API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Order id generated after placing order. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /** Restrict checkout flag to restrict the checkout process. */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Store code from which the order placed. */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Store employees data. */
    store_emps?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Success flag of checkout cart API response. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of user cart. */
    uid?: Maybe<Scalars['String']['output']>;
    /** User type of the cart who places the order. */
    user_type?: Maybe<Scalars['String']['output']>;
};
/** Details regarding a FAQs stored under a FAQs category. */
export type ChildSchema = {
    __typename?: 'ChildSchema';
    /** The contents of a answer of a FAQ. */
    answer?: Maybe<Scalars['String']['output']>;
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** The contents of a question of a FAQ. */
    question?: Maybe<Scalars['String']['output']>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Describes the request to send code to reset password. */
export type CodeRequestBodySchemaInput = {
    /** Unique code to verify request. */
    code?: InputMaybe<Scalars['String']['input']>;
};
/** Provides detailed information about a collection. */
export type Collection = {
    __typename?: 'Collection';
    /** Custom JSON object containing additional properties specific to the collection. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Actions associated with the collection. */
    action?: Maybe<CollectionAction>;
    /** Indicates if facets are allowed for filtering within the collection. */
    allow_facets?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if sorting is allowed for this collection. */
    allow_sort?: Maybe<Scalars['Boolean']['output']>;
    /** Application ID associated with the collection. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** Badge information associated with the collection. */
    badge?: Maybe<Badge>;
    /** Banner URLs associated with the collection. */
    banners?: Maybe<ImageUrls>;
    /** Cron details for scheduling related to the collection. */
    cron?: Maybe<Scalars['JSON']['output']>;
    /** Detailed description of the collection,. */
    description?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the collection is active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Logo image associated with the collection. */
    logo?: Maybe<CollectionLogo>;
    /** Additional metadata related to the collection. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The name of the collection. */
    name?: Maybe<Scalars['String']['output']>;
    /** Priority level of the collection for sorting or display purposes. */
    priority?: Maybe<Scalars['Int']['output']>;
    /** List of product details included in the response. */
    products?: Maybe<ProductConnection>;
    /** A list of queries used to filter the collection. */
    query?: Maybe<Array<Maybe<CollectionQuery>>>;
    /** Schedule details for the collection, including timing and duration information. */
    schedule?: Maybe<Schedule>;
    /** The URL-friendly identifier for the collection. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The attribute by which the collection items are sorted. */
    sort_on?: Maybe<Scalars['String']['output']>;
    /** Tags associated with the collection. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of collections e.g query, items. */
    type?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the collection. */
    uid?: Maybe<Scalars['String']['output']>;
    /** Keys of the facets visible for filtering within the collection. */
    visible_facets_keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Provides detailed information about a collection. */
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
/** Schema of Action Object. */
export type CollectionAction = {
    __typename?: 'CollectionAction';
    /** Represents the page details used for rendering. */
    page?: Maybe<Page>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Response object containing a list of collection details, applicable filters, and pagination information for collection listings. */
export type CollectionConnection = {
    __typename?: 'CollectionConnection';
    /** Filter options available for the collection listings. This includes tags and filter types that can be used to refine the search results. */
    filters?: Maybe<CollectionFilter>;
    /** An array of collection details. Each item in the array represents a collection with various attributes and configurations. */
    items: Array<Collection>;
    /** Pagination details for the collection listings. It includes information such as the current page number, total pages, and items per page. */
    page: PageInfo;
};
export type CollectionDetail = {
    __typename?: 'CollectionDetail';
    /** Custom JSON object containing additional properties specific to the collection. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Indicates if facets are allowed for filtering within the collection. */
    allow_facets?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if sorting is allowed for this collection. */
    allow_sort?: Maybe<Scalars['Boolean']['output']>;
    /** Application ID associated with the collection. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** Badge information associated with the collection. */
    badge?: Maybe<Badge>;
    /** Banner URLs associated with the collection. */
    banners?: Maybe<ImageUrls>;
    /** Cron details for scheduling related to the collection. */
    cron?: Maybe<Scalars['JSON']['output']>;
    /** Detailed description of the collection,. */
    description?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the collection is active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Logo image associated with the collection. */
    logo?: Maybe<CollectionLogo>;
    /** Additional metadata related to the collection. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The name of the collection. */
    name?: Maybe<Scalars['String']['output']>;
    /** Priority level of the collection for sorting or display purposes. */
    priority?: Maybe<Scalars['Int']['output']>;
    /** List of product details included in the response. */
    products?: Maybe<ProductConnection>;
    /** A list of queries used to filter the collection. */
    query?: Maybe<Array<Maybe<CollectionQuery>>>;
    /** Schedule details for the collection, including timing and duration information. */
    schedule?: Maybe<Schedule>;
    /** The URL-friendly identifier for the collection. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The attribute by which the collection items are sorted. */
    sort_on?: Maybe<Scalars['String']['output']>;
    /** Tags associated with the collection. */
    tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of collections e.g query, items. */
    type?: Maybe<Scalars['String']['output']>;
    /** Keys of the facets visible for filtering within the collection. */
    visible_facets_keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type CollectionDetailProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sortOn?: InputMaybe<Scalars['String']['input']>;
};
/** Contains filter options available for the collection listings. */
export type CollectionFilter = {
    __typename?: 'CollectionFilter';
    /** An array of tag filters available for the collection listings. Each tag allows for filtering based on specific attributes. */
    tags?: Maybe<Array<Maybe<CollectionListingFilterTagType>>>;
    /** An array of filter types available for the collection listings. Each type represents a different category or attribute for filtering. */
    type?: Maybe<Array<Maybe<CollectionListingFilterTagType>>>;
};
/** Detailed list of collection objects. */
export type CollectionItems = {
    __typename?: 'CollectionItems';
    /** True for fetching all filter parameters and False for disabling the filter parameters. */
    filters?: Maybe<Array<Maybe<ProductFilters>>>;
    /** List of collection objects. */
    items?: Maybe<Array<Maybe<ProductListingDetail>>>;
    /** Page information for collections response. */
    page?: Maybe<PageInfo>;
    /** The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below. */
    sort_on?: Maybe<Array<Maybe<ProductSortOn>>>;
};
/** An array of tag|type filters available for the collection listings. */
export type CollectionListingFilterTagType = {
    __typename?: 'CollectionListingFilterTagType';
    /** The display name of the tag|type. This may be a user-friendly version of the tag name shown in the UI. */
    display?: Maybe<Scalars['String']['output']>;
    /** A flag indicating whether the tag|type is currently selected as a filter option. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** The name of the tag|type. This is typically used as a label for filtering purposes. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Represents a media file with its associated properties, such as URL, type, and metadata. */
export type CollectionLogo = {
    __typename?: 'CollectionLogo';
    /** Alternative text for the media, used for accessibility and SEO purposes. */
    alt?: Maybe<Scalars['String']['output']>;
    /** Metadata for collection logo */
    meta?: Maybe<CollectionLogoMeta>;
    /** The type of media, such as image, video. */
    type?: Maybe<Scalars['String']['output']>;
    /** Absolute url for Media. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Contains the metadata for collection logo */
export type CollectionLogoMeta = {
    __typename?: 'CollectionLogoMeta';
    /** The source or origin of the media file, which could be a URL or a reference to where the media was obtained. */
    source?: Maybe<Scalars['String']['output']>;
};
/** Query parameters for filtering collections based on attributes. */
export type CollectionQuery = {
    __typename?: 'CollectionQuery';
    /** The attribute on which the filter is applied. */
    attribute?: Maybe<Scalars['String']['output']>;
    /** The operator used for filtering the collection. */
    op?: Maybe<Scalars['String']['output']>;
    /** The values used for filtering based on the attribute. */
    value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Different color options. */
export type Colors = {
    __typename?: 'Colors';
    /** The accent color. */
    accent_color?: Maybe<Scalars['String']['output']>;
    /** The background color. */
    bg_color?: Maybe<Scalars['String']['output']>;
    /** The secondary button color. */
    button_secondary_color?: Maybe<Scalars['String']['output']>;
    /** The link color. */
    link_color?: Maybe<Scalars['String']['output']>;
    /** The primary color. */
    primary_color?: Maybe<Scalars['String']['output']>;
    /** The secondary color. */
    secondary_color?: Maybe<Scalars['String']['output']>;
};
/** Header for a column in the size chart. */
export type ColumnHeader = {
    __typename?: 'ColumnHeader';
    /** Indicates if the column value can be converted or transformed. */
    convertable?: Maybe<Scalars['Boolean']['output']>;
    /** The value or title of the column header. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Column headers for the size chart. */
export type ColumnHeaders = {
    __typename?: 'ColumnHeaders';
    /** Header for column 1. */
    col_1?: Maybe<ColumnHeader>;
    /** Header for column 2. */
    col_2?: Maybe<ColumnHeader>;
    /** Header for column 3. */
    col_3?: Maybe<ColumnHeader>;
    /** Header for column 4. */
    col_4?: Maybe<ColumnHeader>;
    /** Header for column 5. */
    col_5?: Maybe<ColumnHeader>;
    /** Header for column 6. */
    col_6?: Maybe<ColumnHeader>;
};
/** Configuration for common features across the application. */
export type CommonFeature = {
    __typename?: 'CommonFeature';
    /** Configuration for the WhatsApp communication opt-in dialog. */
    communication_optin_dialog?: Maybe<CommunicationOptinDialogFeature>;
    /** Whether product comparison feature is enabled on PDP. */
    compare_products?: Maybe<CompareProductsFeature>;
    /** Configuration for currency settings in the application. */
    currency?: Maybe<CurrencyFeature>;
    /** Configuration for store selection during application deployment. */
    deployment_store_selection?: Maybe<DeploymentStoreSelectionFeature>;
    /** Whether customer feedback is enabled on PDP. */
    feedback?: Maybe<FeedbackFeature>;
    /** Configuration for international shipping settings. */
    international_shipping?: Maybe<IntrenationalShippingFeature>;
    /** Configuration for sorting product listings on the listing page. */
    listing_page?: Maybe<ListingPageFeature>;
    /** Configuration for displaying prices on product listing pages. */
    listing_price?: Maybe<ListingPriceFeature>;
    /** Configuration for the revenue engine. */
    revenue_engine?: Maybe<RevenueEngineFeature>;
    /** Configuration for reward points within the application. */
    reward_points?: Maybe<RewardPointsConfig>;
};
/** An object representing commonjs module information. */
export type CommonJs = {
    __typename?: 'CommonJs';
    /** A string representing the url or link to the commonjs module. */
    link?: Maybe<Scalars['String']['output']>;
};
export declare enum CommunicationActionEnum {
    Optin = "optin",
    Optout = "optout"
}
export declare enum CommunicationChannelEnum {
    Email = "email",
    Sms = "sms",
    Whatsapp = "whatsapp"
}
/** The response schema for the communication consent API includes the application ID associated with the transaction, the user’s identity, and the channels of communication. */
export type CommunicationConsent = {
    __typename?: 'CommunicationConsent';
    /** The ID of the sales channel where the user has given their consent. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** The schema for the all the communication channels that the user has accept to receive communication through. */
    channels?: Maybe<Channels>;
    /** Identifier which can uniquely identify the user. */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** The request schema for the communication consent API includes the user's response status, the user's choice to opt in or opt out of receiving communications, and the channel through which the user wishes to receive communications. */
export type CommunicationConsentReqInput = {
    /** The user's choice to opt in or opt out of receiving communications. */
    action?: InputMaybe<CommunicationActionEnum>;
    /** The channel of communication the user has agreed to receive messages through. */
    channel?: InputMaybe<CommunicationChannelEnum>;
    /** Whether the user has responded to the inquiry regarding their preference for opting in or out of receiving communications. */
    response?: InputMaybe<ResponseEnum>;
};
/** Configuration for the WhatsApp communication opt-in dialog. */
export type CommunicationOptinDialogFeature = {
    __typename?: 'CommunicationOptinDialogFeature';
    /** Shows whether WhatsApp communication is enabled. */
    visibility?: Maybe<Scalars['Boolean']['output']>;
};
/** Detailed address for the company. */
export type CompanyAddress = {
    __typename?: 'CompanyAddress';
    /** Address of the opted store. */
    address1?: Maybe<Scalars['String']['output']>;
    /** Address of the opted store. */
    address2?: Maybe<Scalars['String']['output']>;
    /** Indicates different office types like office, registered, and home. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** City of the opted store, e.g. Mumbai. */
    city?: Maybe<Scalars['String']['output']>;
    /** Country of the opted store, e.g. India. */
    country?: Maybe<Scalars['String']['output']>;
    /** 6-digit PIN Code  of the ordering store, e.g. 400001. */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** State of the opted store, e.g. Maharashtra. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Company details. */
export type CompanyDetail = {
    __typename?: 'CompanyDetail';
    /** Unique identifier of the company. */
    id?: Maybe<Scalars['Int']['output']>;
    /** Name of the company. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Details about the application, covering company and owner information, domain, website, CORS settings, and other attributes. */
export type CompanyInfo = {
    __typename?: 'CompanyInfo';
    /** List of addresses associated with the company. */
    addresses?: Maybe<Array<Maybe<CompanyAddress>>>;
    /** ISO 8601 timestamp of company information creation. */
    created_on?: Maybe<Scalars['String']['output']>;
    /** The unique identifier (24-digit Mongo Object ID) of company information. */
    id?: Maybe<Scalars['String']['output']>;
    /** Indicates company is active or not active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the company, Reliance Retail Limited. */
    name?: Maybe<Scalars['String']['output']>;
    /** List of emails to notify. */
    notification_emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Unique identifier for the company. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Information about the company that owns the store. */
export type CompanyStore = {
    __typename?: 'CompanyStore';
    /**
     * The type of business structure, which can be one of the following:
     *         - `Private`: Private Limited Company
     *         - `LLP/Partnership`: Limited Liability Partnership or Partnership
     *         - `HUF/Proprietorship`: Hindu Undivided Family or Proprietorship.
     */
    business_type?: Maybe<Scalars['String']['output']>;
    /**
     * The type of company, which can be one of the following:
     *         - `distributor`: Distributor
     *         - `franchise`: Franchise
     *         - `mbo`: MBO (Managed Business Operations)
     *         - `manufacturer-owner`: Owner/Manufacturer.
     */
    company_type?: Maybe<Scalars['String']['output']>;
    /** The name of the company store. */
    name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the company store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Whether product comparison feature is enabled on PDP. */
export type CompareProductsFeature = {
    __typename?: 'CompareProductsFeature';
    /** Whether product comparison feature is enabled on PDP. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** The configuration object that contains various settings and parameters. Each property within this object defines a specific configuration setting, allowing for customization and control over different aspects of the system or application. */
export type Config = {
    __typename?: 'Config';
    /** The current configuration. */
    current?: Maybe<Scalars['String']['output']>;
    /** A global schema object containing an array of properties. */
    global_schema?: Maybe<Props>;
    /** A list of configurations. */
    list?: Maybe<Array<Maybe<ListItem>>>;
    /** Preset configuration, containing an array of pages. */
    preset?: Maybe<Preset>;
};
/** Data related to slideshow/screensaver. */
export type ConfigurationSchema = {
    __typename?: 'ConfigurationSchema';
    /** Duration of the slideshow/screensaver. */
    duration?: Maybe<Scalars['Int']['output']>;
    /** Amount of time in seconds after which slideshow/screensaver is run. */
    sleep_time?: Maybe<Scalars['Int']['output']>;
    /** Direction of the slideshow. */
    slide_direction?: Maybe<Scalars['String']['output']>;
    /** Flag denoting whether screensaver needs to be shown on launch of website/app. */
    start_on_launch?: Maybe<Scalars['Boolean']['output']>;
};
/** Get contact details of the sales channel. */
export type ContactInfo = {
    __typename?: 'ContactInfo';
    /** Contains address details for the application. */
    address?: Maybe<InformationAddress>;
    /** Alphanumeric ID allotted to an application (sales channel website) created within a business account. */
    application?: Maybe<Scalars['String']['output']>;
    /** Array of notable business highlights with icons and descriptions. */
    business_highlights?: Maybe<Array<Maybe<BusinessHighlights>>>;
    /** Copyright statement usually seen at the site's footer. */
    copyright_text?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of creation of the application information. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Unique identifier (24-digit Mongo Object ID) of the application information. */
    id?: Maybe<Scalars['String']['output']>;
    /** Array of additional relevant web links related to the application. */
    links?: Maybe<Array<Maybe<Links>>>;
    /** Includes links to the application's social media profiles. */
    social_links?: Maybe<SocialLinks>;
    /** Contains support information, including contact details and working hours. */
    support?: Maybe<InformationSupport>;
    /** ISO 8601 timestamp of updation of the application information. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Version key for tracking revisions. Default value is zero. */
    version?: Maybe<Scalars['Int']['output']>;
};
/** Details regarding the customer support contact details. */
export type ContactSchema = {
    __typename?: 'ContactSchema';
    /** Details related to email contact of SPOC. */
    email?: Maybe<EmailSchema>;
    /** Details related to phone contact of SPOC. */
    phone?: Maybe<PhoneSchema>;
};
/** An action object that can reference a page or a popup. */
export type ContentAction = {
    __typename?: 'ContentAction';
    /** Details of the action when its related to a page. */
    page?: Maybe<ActionPage>;
    /** Details of the action when its related to a popup. */
    popup?: Maybe<ActionPage>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Provide details about a specific country. */
export type Country = {
    __typename?: 'Country';
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Whether the country entity is currently active or not. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Details about the logistics operations associated with the country. */
    logistics?: Maybe<CountryLogistics>;
    /** Metadata associated with the country, offering additional details or classifications. */
    meta?: Maybe<CountryMetaResponse>;
    /** The name of the packaging. */
    name?: Maybe<Scalars['String']['output']>;
    /** Identifier for the parent of the current locality. */
    parent_id?: Maybe<Scalars['String']['output']>;
    /** Specific type of locality hierarchy the pincode belongs to (e.g., city, state, country). */
    sub_type?: Maybe<Scalars['String']['output']>;
    /** Specifies the type of geographical feature or data, typically "Point" for coordinates in geographic data systems. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the country. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** List of countries with their details. */
export type CountryConnection = {
    __typename?: 'CountryConnection';
    /** List of countries, each containing detailed information about individual country. */
    items?: Maybe<Array<Maybe<CountryDetails>>>;
    /** Pagination details for the list of locations, including current page, page size, and total items. */
    page?: Maybe<PageInfo>;
};
/** Provides details about a currency. */
export type CountryCurrency = {
    __typename?: 'CountryCurrency';
    /** The currency code, typically a three-letter ISO code (e.g., "USD" for US Dollar). */
    code?: Maybe<Scalars['String']['output']>;
    /** It represent a country name. */
    name?: Maybe<Scalars['String']['output']>;
    /** The symbol used to represent the currency (e.g., "$" for US Dollar). */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Currency info details of ladder price which includes currncy code and currency symbol. */
export type CountryCurrencyInfo = {
    __typename?: 'CountryCurrencyInfo';
    /** Currency code of country. */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency name for currency of country. */
    name?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of country. */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Provides details about a country. */
export type CountryDetail = {
    __typename?: 'CountryDetail';
    /** Details about the country’s currency, including code, name, and symbol (e.g., {"code": "USD", "name": "United States Dollar", "symbol": "$"}). */
    currency?: Maybe<CountryCurrencyInfo>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Address-related information in a country. */
    fields?: Maybe<CountryFields>;
    /** Levels within the country (e.g., states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"}, {"name": "City", "slug": "city"}]). */
    hierarchy?: Maybe<CountryHierarchy>;
    /** Unique identifier for the country. */
    id?: Maybe<Scalars['String']['output']>;
    /** Two-letter ISO code representing the country. */
    iso2?: Maybe<Scalars['String']['output']>;
    /** Three-letter ISO code representing the country. */
    iso3?: Maybe<Scalars['String']['output']>;
    /** Geographical latitude of the country. */
    latitude?: Maybe<Scalars['String']['output']>;
    /** Geographical longitude of the country. */
    longitude?: Maybe<Scalars['String']['output']>;
    /** The name of the packaging. */
    name?: Maybe<Scalars['String']['output']>;
    /** International dialing code for the country (e.g., "+1"). */
    phone_code?: Maybe<Scalars['String']['output']>;
    /** List of time zones used in the country (e.g., ["America/New_York", "America/Los_Angeles"]). */
    timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Indicates the type of object. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Provides details about a country. */
export type CountryDetails = {
    __typename?: 'CountryDetails';
    /** Details about the country’s currency, including code, name, and symbol (e.g., {"code": "USD", "name": "United States Dollar", "symbol": "$"}). */
    currency?: Maybe<CountryCurrencyInfo>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Levels within the country (e.g., states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"}, {"name": "City", "slug": "city"}]). */
    hierarchy?: Maybe<CountryHierarchy>;
    /** Unique identifier for the country. */
    id?: Maybe<Scalars['String']['output']>;
    /** Two-letter ISO code representing the country. */
    iso2?: Maybe<Scalars['String']['output']>;
    /** Three-letter ISO code representing the country. */
    iso3?: Maybe<Scalars['String']['output']>;
    /** Geographical latitude of the country. */
    latitude?: Maybe<Scalars['String']['output']>;
    /** Geographical longitude of the country. */
    longitude?: Maybe<Scalars['String']['output']>;
    /** The name of the packaging. */
    name?: Maybe<Scalars['String']['output']>;
    /** International dialing code for the country (e.g., "+1"). */
    phone_code?: Maybe<Scalars['String']['output']>;
    /** List of time zones used in the country (e.g., ["America/New_York", "America/Los_Angeles"]). */
    timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Indicates the type of object. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Address-related information in a country. */
export type CountryFields = {
    __typename?: 'CountryFields';
    /** Specifies the fields and attributes related to address information, including display names, input types, and validation rules. This section defines the details needed for address collection and formatting. */
    address: Array<Maybe<CountryFieldsAddress>>;
    /** Provides templates for how addresses should be formatted in different contexts, such as during checkout, in store operating systems, and for general display. */
    address_template: CountryFieldsAddressTemplate;
    /** Lists the specific address fields used to determine whether a location is serviceable. These fields are crucial for validating service coverage and availability. */
    serviceability_fields: Array<Maybe<Scalars['String']['output']>>;
};
/** Describes the configuration of address fields for a country. */
export type CountryFieldsAddress = {
    __typename?: 'CountryFieldsAddress';
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name: Scalars['String']['output'];
    /** Specifies if the field can be edited by the user. */
    edit?: Maybe<Scalars['Boolean']['output']>;
    /** The message shown to the user if the input does not meet the validation criteria. */
    error_text?: Maybe<Scalars['String']['output']>;
    /** Defines the type of input control used for the field (e.g., textbox). */
    input: Scalars['String']['output'];
    /** Indicates whether the field is mandatory for the user to fill out. */
    required: Scalars['Boolean']['output'];
    /** URL-friendly version of the name, often used for referencing or querying purposes. */
    slug: Scalars['String']['output'];
    /** Details any validation rules applied to the field, such as regex patterns. */
    validation?: Maybe<FieldValidation>;
    /** Provides predefined values or options for the field, if applicable. */
    values?: Maybe<CountryFieldsAddressValues>;
};
/** Defines the templates for formatting addresses. */
export type CountryFieldsAddressTemplate = {
    __typename?: 'CountryFieldsAddressTemplate';
    /** The format used to display or collect address information during checkout. */
    checkout_form: Scalars['String']['output'];
    /** The general format for displaying address information. */
    default_display: Scalars['String']['output'];
    /** The format used for address entry or display in the store's operating system. */
    store_os_form: Scalars['String']['output'];
};
/** Specifies how to retrieve address field values for a country. */
export type CountryFieldsAddressValues = {
    __typename?: 'CountryFieldsAddressValues';
    /** List all values based on broader criteria or parameters. */
    get_all?: Maybe<GetOneOrAll>;
    /** Get a single value based on specific parameters. */
    get_one?: Maybe<GetOneOrAll>;
};
/** Describes the hierarchical structure of a country. */
export type CountryHierarchy = {
    __typename?: 'CountryHierarchy';
    /** It represent a country name. */
    name?: Maybe<Scalars['String']['output']>;
    /** A URL-friendly version of the name, often used for referencing or querying purposes. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** A response containing a list of countries, with each entry providing details about individual countries. */
export type CountryList = {
    __typename?: 'CountryList';
    /** A list of country entities, each containing details about individual countries. */
    results?: Maybe<Array<Maybe<Country>>>;
};
/** Provides comprehensive details about a delivery operation. */
export type CountryLogistics = {
    __typename?: 'CountryLogistics';
    /** Provide entity responsible for handling the delivery of goods. */
    dp?: Maybe<DeliveryOperationSchema>;
};
/** Provides metadata about a country. */
export type CountryMetaData = {
    __typename?: 'CountryMetaData';
    /** The International Subscriber Dialing (ISD) code, also known as the country dialing code, used for making international phone calls to the country (e.g., "+91" for India, "+1" for the United States). */
    ISD_code?: Maybe<Scalars['String']['output']>;
    /** The ISO 3166-1 alpha-2 code representing the country (e.g., "IN" for India, "US" for the United States). */
    country_code?: Maybe<Scalars['String']['output']>;
};
/** Provides metadata about a country. */
export type CountryMetaResponse = {
    __typename?: 'CountryMetaResponse';
    /** The ISO 3166-1 alpha-2 code representing the country (e.g., "IN" for India, "US" for the United States). */
    country_code?: Maybe<Scalars['String']['output']>;
    /** The International Subscriber Dialing (ISD) code, also known as the country dialing code, used for making international phone calls to the country (e.g., "+91" for India, "+1" for the United States). */
    isd_code?: Maybe<Scalars['String']['output']>;
};
/** Coupon data applied on cart that includes coupon code, coupon type, coupon value, description, title, subtitle etc. */
export type Coupon = {
    __typename?: 'Coupon';
    /** The amount based on cart value. */
    coupon_amount?: Maybe<Scalars['Float']['output']>;
    /** Message which is used to display to the customer if the coupon is applied successfully. */
    coupon_applicable_message?: Maybe<Scalars['String']['output']>;
    /** Coupon code of the coupon applied on cart. */
    coupon_code?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Coupon value of the coupon applied to cart. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon description of the coupon applied to cart. */
    description?: Maybe<Scalars['String']['output']>;
    /** End date of the coupon on which the coupon expires. */
    end_date?: Maybe<Scalars['String']['output']>;
    /** Message to display to user for expiry of the coupon . */
    expires_on?: Maybe<Scalars['String']['output']>;
    /** Flag to determine where the coupon is applicable to cart or not. */
    is_applicable?: Maybe<Scalars['Boolean']['output']>;
    /** Flag to determine where the coupon is applied to cart or not. */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Bank offer flag for the coupon if the coupon is applicable for only if payment done by bank or mode specified in coupon. */
    is_bank_offer?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount value of the coupon applied to cart. */
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message of the coupon applied to cart. */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum cart value of the coupon applied to cart. */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    /** Offer text of the coupon which highligts coupon offer defined while creating coupon . */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Start date of the coupon when the coupon will be live for the users to apply on cart. */
    start_date?: Maybe<Scalars['String']['output']>;
    /** Coupon subtitle of the coupon applied to cart which is used to display. */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Coupon Title of the coupon applied denotes name of the coupon. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Coupon price breakup details which includes coupon code, coupon type, coupon value, coupon description, coupn message etc. */
export type CouponBreakup = {
    __typename?: 'CouponBreakup';
    /** Coupon code of the coupon applied. */
    code?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Value of the coupon applied to cart. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon description of the coupon applied to cart. */
    description?: Maybe<Scalars['String']['output']>;
    /** Applied flag which denotes if any coupon is applied to cart. */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount value of the coupon applied to cart. */
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message of the coupon applied to cart. */
    message?: Maybe<Scalars['String']['output']>;
    /** Minumum cart value of cart after which the coupon can be applied. */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon subtitle of the coupon applied to cart which is used to display. */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Coupon Title of the coupon applied denotes name of the coupon. */
    title?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the coupon applied to cart. */
    uid?: Maybe<Scalars['String']['output']>;
    /** Coupon value of the coupon applied to cart. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Coupon actual price breakup details. */
export type CouponDetails = {
    __typename?: 'CouponDetails';
    /** Coupon code of the coupon applied. */
    code?: Maybe<Scalars['String']['output']>;
    /** Discout amount applied from coupon for single quantity of the product. */
    discount_single_quantity?: Maybe<Scalars['Float']['output']>;
    /** Total discount earned from coupon applied to cart. */
    discount_total_quantity?: Maybe<Scalars['Float']['output']>;
};
/** Payment mode validity details of the coupon which shows coupon is valid for the payment mode or not. */
export type CouponValidate = {
    __typename?: 'CouponValidate';
    /** Coupon is valid flag if coupon is valid for the payment mode. */
    coupon_validity?: Maybe<CouponValidity>;
    /** Payment mode valid message for coupon. */
    message?: Maybe<Scalars['String']['output']>;
    /** success flag of coupon payment mode validity API response. */
    success: Scalars['Boolean']['output'];
};
/** Coupon validity schema which includes coupon title, coupon code, next validation flag, valid flag, error display message and discount of coupon. */
export type CouponValidity = {
    __typename?: 'CouponValidity';
    /** Coupon code of the coupon applied. */
    code?: Maybe<Scalars['String']['output']>;
    /** Coupon discount value of the coupon applied. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Display message for coupon validity. */
    display_message_en?: Maybe<Scalars['String']['output']>;
    /** Flag for coupon validation required on next page or not. */
    next_validation_required?: Maybe<Scalars['Boolean']['output']>;
    /** Coupon Title of the coupon applied. */
    title?: Maybe<Scalars['String']['output']>;
    /** Valid flag which denotes if the applied coupon is valid or not. */
    valid?: Maybe<Scalars['Boolean']['output']>;
};
/** Get coupon list response schema which page information and list of coupons. */
export type Coupons = {
    __typename?: 'Coupons';
    /** List of available coupon which can be applied on cart. */
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    /** Page information of the coupon list. */
    page?: Maybe<PageCoupon>;
};
/** Create Order User Data. */
export type CreateOrderUserData = {
    __typename?: 'CreateOrderUserData';
    /** Aggregator name. */
    aggregator?: Maybe<Scalars['String']['output']>;
    /** Total amount for the transaction. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Callback url for aggregator. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Mobile number. */
    contact?: Maybe<Scalars['String']['output']>;
    /** Currency of the transaction. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Aggregator customer id. */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** Email. */
    email?: Maybe<Scalars['String']['output']>;
    /** Merchant order id. */
    merchant_order_id?: Maybe<Scalars['String']['output']>;
    /** Method details. */
    method?: Maybe<Scalars['String']['output']>;
    /** Aggregator order id. */
    order_id?: Maybe<Scalars['String']['output']>;
};
/** Create order user request schema. */
export type CreateOrderUserRequestInput = {
    /** Currency of the transaction. */
    currency: Scalars['String']['input'];
    /** Failure page url. */
    failure_callback_url: Scalars['String']['input'];
    /** Meta details. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Unique id of payment link. */
    payment_link_id: Scalars['String']['input'];
    /** Create Order User Payment Method schema. */
    payment_methods: PaymentMethodsInput;
    /** Success  page url. */
    success_callback_url: Scalars['String']['input'];
};
/** Create Order User Response. */
export type CreateOrderUserResponse = {
    __typename?: 'CreateOrderUserResponse';
    /** Callback url for aggregator. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Create Order User Data. */
    data?: Maybe<CreateOrderUserData>;
    /** Detailed message. */
    message: Scalars['String']['output'];
    /** Merchant order id. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Payment confirm url for aggregator. */
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** Create Payment Link Request. */
export type CreatePaymentLinkRequestInput = {
    /** Total value of order. */
    amount: Scalars['Float']['input'];
    /** Merchant order id. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Email to which the payment link is to be sent. */
    email: Scalars['String']['input'];
    /** Merchant order id. */
    external_order_id: Scalars['String']['input'];
    /** Create Payment Link Meta. */
    meta: MetaInput;
    /** Mobile number to which the payment link is to be sent. */
    mobile_number: Scalars['String']['input'];
};
/** Create Payment Link Response. */
export type CreatePaymentLinkResponse = {
    __typename?: 'CreatePaymentLinkResponse';
    /** Detailed message. */
    message: Scalars['String']['output'];
    /** Unique id of payment link. */
    payment_link_id?: Maybe<Scalars['String']['output']>;
    /** Url of payment link. */
    payment_link_url?: Maybe<Scalars['String']['output']>;
    /** Polling request timeout. */
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** Details regarding the creator of entity. */
export type CreatedBy = {
    __typename?: 'CreatedBy';
    /** Details containing the creator of custom page. */
    id?: Maybe<Scalars['String']['output']>;
};
/** Time of creation of the history event. */
export type CreatedOn = {
    __typename?: 'CreatedOn';
    /** Useragent details. */
    user_agent: Scalars['String']['output'];
};
/** Details for crediting reward points. */
export type Credit = {
    __typename?: 'Credit';
    /** Shows whether reward points should be credited. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credit Detail. */
export type CreditDetail = {
    __typename?: 'CreditDetail';
    /** Credit detail. */
    data: CreditSummary;
    /** Payment confirmation updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Credit summary response. */
export type CreditSummary = {
    __typename?: 'CreditSummary';
    /** User is registered with aggregator or not. */
    is_registered: Scalars['Boolean']['output'];
    /** URL to which the user may redirect. */
    signup_url: Scalars['String']['output'];
    /** Customer Credit status. */
    status: Scalars['Boolean']['output'];
};
/** Configuration settings for the scheduler. */
export type CronSchedule = {
    __typename?: 'CronSchedule';
    /** String representing the cron expression. */
    cron?: Maybe<Scalars['String']['output']>;
    /** Duration of the scheduled entity. */
    duration?: Maybe<Scalars['Float']['output']>;
    /** End time of schedule. */
    end?: Maybe<Scalars['String']['output']>;
    /** Details regarding the next trigger point of schedule. */
    next_schedule?: Maybe<Array<Maybe<NextSchedule>>>;
    /** Start time of schedule. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Details about the currency supported by the sales channel, including its ID, name, code, and other attributes. */
export type Currency = {
    __typename?: 'Currency';
    /** 3-character currency code, e.g. INR, USD, EUR. */
    code?: Maybe<Scalars['String']['output']>;
    /** Country code. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Country name. */
    country_name?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of sales channel support currency creation. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Acceptable decimal limits for a given currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid value of a currency. */
    decimal_digits?: Maybe<Scalars['Int']['output']>;
    /** The unique identifier of the application. */
    id?: Maybe<Scalars['String']['output']>;
    /** Shows currency is enabled or not in current sales channel. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the currency, e.g Indian Rupee. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique symbol for identifying the currency, e.g. ₹. */
    symbol?: Maybe<Scalars['String']['output']>;
    /** ISO 8601 timestamp of when the application was last modified. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Configuration for currency settings in the application. */
export type CurrencyFeature = {
    __typename?: 'CurrencyFeature';
    /** 3-letter code of the default currency used in the application. Default value is 'INR'. */
    default_currency?: Maybe<Scalars['String']['output']>;
    /** If 'explicit', currency formatting shows currency code with price. For explicit or all currency selection. */
    type?: Maybe<Scalars['String']['output']>;
    /** 3-letter currency code. */
    value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Currency info details of ladder price which includes currncy code and currency symbol. */
export type CurrencyInfo = {
    __typename?: 'CurrencyInfo';
    /** Currency code of ladder price promotion. */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of ladder price product. */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Schema for current status. */
export type CurrentStatus = {
    __typename?: 'CurrentStatus';
    /** The type of journey for the shipment, indicating the direction of the shipment. */
    journey_type?: Maybe<Scalars['String']['output']>;
    /** The name or label indicating the current state or status. */
    name?: Maybe<Scalars['String']['output']>;
    /** The current status of the bag. */
    status?: Maybe<Scalars['String']['output']>;
    /** The date and time when the status was last updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Object containing details of custom field. */
export type CustomField = {
    __typename?: 'CustomField';
    /** Application ID - Identifier for a Sales channel. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Unique Identifier for a company. */
    company_id?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent the time when data was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Details of the owner of custom field creator. */
    created_by?: Maybe<Scalars['String']['output']>;
    /** Denotes where the custom field has been defined - within a company or within a sales channel. */
    creator?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for a custom field definition. */
    definition_id?: Maybe<Scalars['String']['output']>;
    /** Whether the custom field has invalid values. */
    has_invalid_values?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Array denoting if there's a validation failure on a custom field inside a custom object. */
    invalid_value_errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Whether the custom field definition is deleted. */
    is_deleted?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier for a custom field. */
    key?: Maybe<Scalars['String']['output']>;
    /** Whether custom field can have multiple values or not. */
    multi_value?: Maybe<Scalars['Boolean']['output']>;
    /** Namespace under which custom field is present. */
    namespace?: Maybe<Scalars['String']['output']>;
    /** Type of an entity under which custom field is defined. */
    resource?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the entity under which custom field is defined. */
    resource_id?: Maybe<Scalars['String']['output']>;
    /** The type type of custom field. */
    type?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent when was the last time when data was updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Array containing values of custom field. */
    value?: Maybe<CustomFieldValue>;
};
/** Array containing values of custom field. */
export type CustomFieldValue = {
    __typename?: 'CustomFieldValue';
    /** Array containing value(s) of custom field. */
    value?: Maybe<Scalars['JSON']['output']>;
};
/** Object containing a list of custom fields against a resource. */
export type CustomFields = {
    __typename?: 'CustomFields';
    /** List of custom fields against a resource. */
    items?: Maybe<Array<Maybe<CustomField>>>;
};
/** Details regarding a form. */
export type CustomForm = {
    __typename?: 'CustomForm';
    /** Application ID - Identifier for a Sales channel. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Time of creation of the history event. */
    created_on?: Maybe<CreatedOn>;
    /** Form description that will be shown to the user. */
    description?: Maybe<Scalars['String']['output']>;
    /** Form header image that will be shown to the user. */
    header_image?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the form. */
    id?: Maybe<Scalars['String']['output']>;
    /** List of all the form fields. */
    inputs?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** If login is required to make a form response submission. */
    login_required: Scalars['Boolean']['output'];
    /** Describes how polling will be done for the created tickets. */
    poll_for_assignment?: Maybe<PollForAssignment>;
    /** Denotes the priority of ticket. */
    priority: Priority;
    /** If new response submission for the form should be notified to the assignees. */
    should_notify: Scalars['Boolean']['output'];
    /** Slug for the form, which is to be used for accessing the form. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Details for submit button. */
    submit_button?: Maybe<SubmitButton>;
    /** Message that is to be shown on successful form response submission. */
    success_message?: Maybe<Scalars['String']['output']>;
    /** Form title that will be shown to the user. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Data related to filled form fields. */
export type CustomFormSubmissionPayloadInput = {
    /** List of all attachments related to the form. */
    attachments?: InputMaybe<Array<InputMaybe<TicketAssetInput>>>;
    /** Custom form response. */
    response: Array<InputMaybe<Scalars['JSON']['input']>>;
};
/** Represents custom metadata fields with a key and its corresponding value. */
export type CustomMetaFields = {
    __typename?: 'CustomMetaFields';
    /** A key to store a custom field. */
    key: Scalars['String']['output'];
    /** A value to store in the custom field. */
    value: Scalars['String']['output'];
};
/** Custom meta tag for a sales channel website. */
export type CustomMetaTag = {
    __typename?: 'CustomMetaTag';
    /** Contents of the custom meta tag group. */
    content?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the custom meta tag group. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Data containing details of custom field definition. */
export type CustomObjectDefintion = {
    __typename?: 'CustomObjectDefintion';
    /** Key of custom field inside custom object. */
    display_name_key?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of definition of custom field. */
    name?: Maybe<Scalars['String']['output']>;
    /** Data type of the custom field. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Details related to a custom page and contents. */
export type CustomPageDetail = {
    __typename?: 'CustomPageDetail';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Flag denoting whether the page is archived or not. */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Components can be used to store multiple components. */
    component_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Contents of a custom page. */
    content?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** A CDN URL at which the entire html content can be fetched from. */
    content_path?: Maybe<Scalars['String']['output']>;
    /** Details regarding the creator of entity. */
    created_by?: Maybe<CreatedBy>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details related to resource creation and updation. */
    date_meta?: Maybe<DateMeta>;
    /** Description about the page. */
    description?: Maybe<Scalars['String']['output']>;
    /** Data related to image. */
    feature_image?: Maybe<Asset>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Orientation for Custom Pages - Landscape or portrait. */
    orientation?: Maybe<Scalars['String']['output']>;
    /** List of Custom JSON object for specific use cases. */
    page_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Platform for Custom Pages - Denotes the device type. */
    platform?: Maybe<Scalars['String']['output']>;
    /** Whether page is active or not on website. */
    published?: Maybe<Scalars['Boolean']['output']>;
    /** Details related to schedule of a custom page. */
    schedule?: Maybe<CronSchedule>;
    /** Details related to SEO of an entry. */
    seo?: Maybe<BlogSeo>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Tags under a page. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The title of the page. */
    title?: Maybe<Scalars['String']['output']>;
    /** Type of editor through which the page was created so appropriate rendering engine is used. */
    type?: Maybe<Scalars['String']['output']>;
    /** Visibility of Page. */
    visibility?: Maybe<Scalars['JSON']['output']>;
};
/** Customer details Schema which includes customer name, mobile and email. */
export type CustomerDetailsInput = {
    /** Email address of the customer to be added in customer detail while checkout. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Mobile number of customer to be added in customer detail while checkout. */
    mobile: Scalars['String']['input'];
    /** name of customer to be added in customer detail while checkout. */
    name?: InputMaybe<Scalars['String']['input']>;
};
/** Schema for customer details response. */
export type CustomerDetailsResponse = {
    __typename?: 'CustomerDetailsResponse';
    /** Country of the customer. */
    country?: Maybe<Scalars['String']['output']>;
    /** Customer's name. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the order. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Customer's phone number. */
    phone?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the shipment. */
    shipment_id?: Maybe<Scalars['String']['output']>;
};
/** Customer Onboarding Request Schema. */
export type CustomerOnboardingRequestInput = {
    /** Payment aggregator handling the transaction. */
    aggregator: Scalars['String']['input'];
    /** Business Details Schema. */
    business_info?: InputMaybe<BusinessInfoInput>;
    /** Device Details. */
    device?: InputMaybe<DeviceInput>;
    /** Marketplace Info Schema. */
    marketplace_info?: InputMaybe<MarketplaceInfoInput>;
    /** Merchant Category Code, indicating the type of business. */
    mcc?: InputMaybe<Scalars['String']['input']>;
    /** Component or field of the KYC form. */
    personal_info: PersonalInfoInput;
    /** Callback url. */
    source: Scalars['String']['input'];
};
/** Customer onboarding response. */
export type CustomerOnboardingResponse = {
    __typename?: 'CustomerOnboardingResponse';
    /** Onboard Summary Schema. */
    data: OnboardSummary;
    /** Status updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Details regarding data loaders. */
export type DataLoaderDetail = {
    __typename?: 'DataLoaderDetail';
    /** Content of a data loader. */
    content?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of dataloader. */
    name?: Maybe<Scalars['String']['output']>;
    /** Operation ID of the method which data loader is overriding. */
    operation_id?: Maybe<Scalars['String']['output']>;
    /** Service of data loader which overrides the default method. */
    service?: Maybe<Scalars['String']['output']>;
    /** Details regarding the details of extension which created dataloader. */
    source?: Maybe<DataLoaderSource>;
    /** Type of data loader. */
    type?: Maybe<DataLoaderType>;
    /** URL at which data loader redirects. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Details regarding the details of extension which created dataloader. */
export type DataLoaderSource = {
    __typename?: 'DataLoaderSource';
    /** Identifier of an extension. */
    id?: Maybe<Scalars['String']['output']>;
    /** Type of creator. */
    type?: Maybe<Scalars['String']['output']>;
};
export declare enum DataLoaderType {
    Function = "function",
    Url = "url"
}
/** List of data loaders. */
export type DataLoaders = {
    __typename?: 'DataLoaders';
    /** List of data loaders. */
    items?: Maybe<Array<Maybe<DataLoaderDetail>>>;
};
/** Schema for data updates. */
export type DataUpdatesInput = {
    /** Data updates for shipments. */
    entities?: InputMaybe<Array<InputMaybe<EntitiesDataUpdatesInput>>>;
    /** Data updates for bags. */
    products?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesInput>>>;
};
/** Details related to resource creation and updation. */
export type DateMeta = {
    __typename?: 'DateMeta';
    /** Timestamp which represent the time when data was created. */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent when was the last time when data was updated. */
    modified_on?: Maybe<Scalars['String']['output']>;
};
/** Details for debiting reward points. */
export type Debit = {
    __typename?: 'Debit';
    /** Allow automatic debit of reward points. */
    auto_apply?: Maybe<Scalars['Boolean']['output']>;
    /** Shows whether reward points are available for debit. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Strategy channel for debiting reward points. */
    strategy_channel?: Maybe<Scalars['String']['output']>;
};
/** Represents the default currency. */
export type DefaultCurrency = {
    __typename?: 'DefaultCurrency';
    /** 3-character code of the default currency, e.g. INR, EUR, USD. */
    code?: Maybe<Scalars['String']['output']>;
    /** The unique identifier (24-digit Mongo Object ID) of the default currency. */
    ref?: Maybe<Scalars['String']['output']>;
};
/** Consent text details shown to user. */
export type DeleteAccountConsent = {
    __typename?: 'DeleteAccountConsent';
    /** Consent text to be shown to user. */
    consent_text?: Maybe<Scalars['String']['output']>;
};
/** Structure of reasons to be shown to user for delete account. */
export type DeleteAccountReasons = {
    __typename?: 'DeleteAccountReasons';
    /** Unique id of the reason . */
    reason_id?: Maybe<Scalars['String']['output']>;
    /** Text of the reason to be shown to user. */
    reason_text?: Maybe<Scalars['String']['output']>;
    /** A boolean whether to show text area or not. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Delete address response, includes address id and deleted flag. */
export type DeleteAddressResponse = {
    __typename?: 'DeleteAddressResponse';
    /** Id of the address. */
    id?: Maybe<Scalars['String']['output']>;
    /** Deleted flag in delete address response states whether the address was deleted or not. */
    is_deleted?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to delete the application user. */
export type DeleteApplicationUserRequestSchemaInput = {
    /** OTP to verify the delete application user request. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Reason to delete the application user. */
    reason?: InputMaybe<Scalars['String']['input']>;
    /** Reason id of request to delete the application user . */
    reason_id?: InputMaybe<Scalars['String']['input']>;
    /** ID of request to delete the application user . */
    request_id?: InputMaybe<Scalars['String']['input']>;
    /** User id for the application user. */
    user_id?: InputMaybe<Scalars['String']['input']>;
};
/** Delete Cards Response. */
export type DeleteCardsResponse = {
    __typename?: 'DeleteCardsResponse';
    /** Human readable message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Delete cart response which includes message and success flag. */
export type DeleteCartDetailResponse = {
    __typename?: 'DeleteCartDetailResponse';
    /** Message for delete cart response. */
    message?: Maybe<Scalars['String']['output']>;
    /** True if cart is archived successfully. False if not archived. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema representing the response received upon a successful user deletion. */
export type DeleteUserSuccess = {
    __typename?: 'DeleteUserSuccess';
    /** Whether the user deletion operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Delete card request. */
export type DeletehCardRequestInput = {
    /** Card token of payment gateway. */
    card_id: Scalars['String']['input'];
};
/** An object containing the delivery address details. */
export type DeliveryAddress = {
    __typename?: 'DeliveryAddress';
    /** The full address. */
    address?: Maybe<Scalars['String']['output']>;
    /** The primary line of the address. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The secondary line of the address. */
    address2?: Maybe<Scalars['String']['output']>;
    /** The category of the address. */
    address_category?: Maybe<Scalars['String']['output']>;
    /** The type of address. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** The area or locality. */
    area?: Maybe<Scalars['String']['output']>;
    /** The city of the address. */
    city?: Maybe<Scalars['String']['output']>;
    /** The name of the contact person. */
    contact_person?: Maybe<Scalars['String']['output']>;
    /** The country of the address. */
    country?: Maybe<Scalars['String']['output']>;
    /** The ISO code for the country. */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** The country phone code. */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /** The date and time when the address was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** The formatted display address, typically used for printing or displaying in user interfaces. */
    display_address?: Maybe<Scalars['String']['output']>;
    /** The email address. */
    email?: Maybe<Scalars['String']['output']>;
    /** A nearby landmark. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** The latitude coordinate. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** The longitude coordinate. */
    longitude?: Maybe<Scalars['Float']['output']>;
    /** The name of the person associated with the address. */
    name?: Maybe<Scalars['String']['output']>;
    /** The phone number of the person associated with the address. */
    phone?: Maybe<Scalars['String']['output']>;
    /** The postal code of the address. */
    pincode?: Maybe<Scalars['String']['output']>;
    /** The state of the address. */
    state?: Maybe<Scalars['String']['output']>;
    /** The date and time when the address was last updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** The version of the address format. */
    version?: Maybe<Scalars['String']['output']>;
};
/** Delivery charge config which includes charges applicable condition and enabled flag. */
export type DeliveryChargesConfig = {
    __typename?: 'DeliveryChargesConfig';
    /** Charges applicable based on threshold. */
    charges?: Maybe<Array<Maybe<ChargesThreshold>>>;
    /** Delivery charge enabled for the cart or not. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Provides comprehensive details about a delivery operation. */
export type DeliveryOperationSchema = {
    __typename?: 'DeliveryOperationSchema';
    /** A code that identifies a specific geographic area, often used for sorting and routing deliveries. */
    area_code?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the delivery partner (DP) is assigned from stormbreaker service. */
    assign_dp_from_sb?: Maybe<Scalars['Boolean']['output']>;
    /** An identifier used to reference accounts or entities outside the organization's system, such as partner accounts. */
    external_account_id?: Maybe<Scalars['String']['output']>;
    /** First Mile Priority; focuses on the initial segment of the logistics process, from the point of origin to the first distribution center. */
    fm_priority?: Maybe<Scalars['Int']['output']>;
    /** An identifier used internally to track accounts or entities within the organization's system. */
    internal_account_id?: Maybe<Scalars['String']['output']>;
    /** Last Mile Priority; deals with the final stage of the delivery process, where goods are delivered from the distribution center to the final destination. */
    lm_priority?: Maybe<Scalars['Int']['output']>;
    /** Refers to the various activities and processes involved in managing and executing the delivery and logistics operations. */
    operations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The method of payment used for transactions, such as credit card, debit card, cash on delivery, etc. */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** Reverse Pickup Priority; pertains to the process of collecting goods from the customer for return or exchange. */
    rvp_priority?: Maybe<Scalars['Int']['output']>;
    /** The method of transportation used for delivering goods, such as road, rail, air, or sea. */
    transport_mode?: Maybe<Scalars['String']['output']>;
};
/** Min and Max Delivery promise formatted. */
export type DeliveryPromiseFormatted = {
    __typename?: 'DeliveryPromiseFormatted';
    /** Maximum Delivery promise formatted. */
    max?: Maybe<Scalars['String']['output']>;
    /** Minimum Delivery promise formatted. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
export type DeliveryPromiseResponse = {
    __typename?: 'DeliveryPromiseResponse';
    /** Formatted time of the promise. */
    formatted?: Maybe<DeliveryPromiseFormatted>;
    /** Promise in ISO format. */
    iso?: Maybe<DeliveryPromiseFormatted>;
    /** Timestamp promise time. */
    timestamp?: Maybe<DeliveryPromiseTimestamp>;
};
/** Timestamp details of delivery promise. */
export type DeliveryPromiseTimestamp = {
    __typename?: 'DeliveryPromiseTimestamp';
    /** Maximum Delivery promise formatted timestamp. */
    max?: Maybe<Scalars['Float']['output']>;
    /** Minimum Delivery promise formatted timestamp. */
    min?: Maybe<Scalars['Float']['output']>;
};
/** Represents a department with its associated details. */
export type Department = {
    __typename?: 'Department';
    /** Represents a media file with its associated properties, such as URL, type, and metadata. */
    logo?: Maybe<Media>;
    /** Name of the department. */
    name?: Maybe<Scalars['String']['output']>;
    /** Specifies the display order of the department, determining its position in lists and navigation menus based on priority. */
    priority_order?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly version of the department's name, used in the web address to access the department's page on the platform. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the department. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Represents a department with its associated category hierarchy. */
export type DepartmentCategoryDetail = {
    __typename?: 'DepartmentCategoryDetail';
    /** Name of the department. */
    department: Scalars['String']['output'];
    /** List of categories within the department. */
    items?: Maybe<Array<Maybe<CategoryItem>>>;
};
/** Represents a unique identifier for a department. */
export type DepartmentIdentifier = {
    __typename?: 'DepartmentIdentifier';
    /** Slug or URL-friendly identifier for the department. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the department. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Configuration for store selection during application deployment. */
export type DeploymentStoreSelectionFeature = {
    __typename?: 'DeploymentStoreSelectionFeature';
    /** Shows whether selection of store (for deploying the application) is permitted. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Permitted values are 'hard' and 'soft'. For hard type delivery, store selection is compulsory. For soft type, delivery store selection is optional. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Data regarding the og:title and og:description of a sales channel website. */
export type Detail = {
    __typename?: 'Detail';
    /** Contents of the og:description of a sales channel website. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the og:image of a sales channel website. */
    image_url?: Maybe<Scalars['String']['output']>;
    /** Contents of the og:title of a sales channel website. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Represents an individual attribute of a product. */
export type DetailAttribute = {
    __typename?: 'DetailAttribute';
    /** The key or name of the product attribute. */
    key?: Maybe<Scalars['String']['output']>;
    /** The type or category of the product attribute. */
    type?: Maybe<Scalars['String']['output']>;
    /** The value of the product attribute. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Beneficiary Mode Details. */
export type DetailsInput = {
    /** Name of the Account Holder. */
    account_holder: Scalars['String']['input'];
    /** Account Number of the Account Holder. */
    account_no: Scalars['String']['input'];
    /** Address of the User. */
    address?: InputMaybe<Scalars['String']['input']>;
    /** Bank Name of the Account. */
    bank_name: Scalars['String']['input'];
    /** Branch Name of the Account. */
    branch_name: Scalars['String']['input'];
    /** Remarks added by the user. */
    comment?: InputMaybe<Scalars['String']['input']>;
    /** Email of the Account Holder. */
    email: Scalars['String']['input'];
    /** Ifsc Code of the Account. */
    ifsc_code: Scalars['String']['input'];
    /** Mobile Number of the User. */
    mobile: Scalars['String']['input'];
    /** VPA of the Account. */
    vpa?: InputMaybe<Scalars['String']['input']>;
    /** Wallet of the Account. */
    wallet?: InputMaybe<Scalars['String']['input']>;
};
/** Device Details. */
export type DeviceInput = {
    /** Device maker. */
    device_make?: InputMaybe<Scalars['String']['input']>;
    /** Device Model. */
    device_model?: InputMaybe<Scalars['String']['input']>;
    /** Device Type(E.g. Mobile). */
    device_type?: InputMaybe<Scalars['String']['input']>;
    /** IP. */
    identification_number?: InputMaybe<Scalars['String']['input']>;
    /** Static value = ip. */
    identifier_type?: InputMaybe<Scalars['String']['input']>;
    /** OS Name. */
    os?: InputMaybe<Scalars['String']['input']>;
    /** OS Version. */
    os_version?: InputMaybe<Scalars['String']['input']>;
};
/** Represents the dimensions of a product, including its height, length, width, and unit of measurement. */
export type Dimension = {
    __typename?: 'Dimension';
    /** The height of the product. */
    height: Scalars['Float']['output'];
    /** Whether the dimension is the default one or not. */
    is_default: Scalars['Boolean']['output'];
    /** The length of the product. */
    length: Scalars['Float']['output'];
    /** The unit of dimension. */
    unit: Scalars['String']['output'];
    /** The width of the product. */
    width: Scalars['Float']['output'];
};
/** Holds information about the discount countdown timer for a product. */
export type DiscountMeta = {
    __typename?: 'DiscountMeta';
    /** The end time of the live discount. */
    end?: Maybe<Scalars['String']['output']>;
    /** The start time of the live discount. */
    start?: Maybe<Scalars['String']['output']>;
    /** The time in minutes before the discount ends when the countdown timer should start. */
    start_timer_in_minutes?: Maybe<Scalars['Float']['output']>;
    /** Determines whether the discount countdown is visible or not. */
    timer?: Maybe<Scalars['Boolean']['output']>;
};
/** Bulk price offer details which denotes offers list and seller details. */
export type DiscountOfferDetails = {
    __typename?: 'DiscountOfferDetails';
    /** offers is the list of Offer item, which consists of margin percentage, price, quantity, offer type and offer price. */
    offers?: Maybe<Array<Maybe<OfferItem>>>;
    /** Seller details consists of seller uid and seller name. */
    seller?: Maybe<CategoryInfo>;
};
/** Discount rules of the promotion. */
export type DiscountRulesApp = {
    __typename?: 'DiscountRulesApp';
    /** Item criteria of promotion. */
    item_criteria?: Maybe<Scalars['JSON']['output']>;
    /** Matched buy rules for promotion. */
    matched_buy_rules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Offer for promotion. */
    offer?: Maybe<Scalars['JSON']['output']>;
    /** Raw offer details for promotion. */
    raw_offer?: Maybe<Scalars['JSON']['output']>;
};
/** Display price breakup schema denotes price currency, key, value,message to display as breakup on UI. */
export type DisplayBreakup = {
    __typename?: 'DisplayBreakup';
    /** Currency code for the price . */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for the price. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Display key field that to be shown against the value. */
    display?: Maybe<Scalars['String']['output']>;
    /** Key of the price like total_mrp, total, subtotal etc. */
    key?: Maybe<Scalars['String']['output']>;
    /** List of message at price level to be displayed. */
    message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Value for the price which is set from platform if applicable. */
    preset?: Maybe<Scalars['Float']['output']>;
    /** Numeric value of the price. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Details about the sales channel domain, including verification status, whether it's primary or shortlink, and its unique identifier. */
export type Domain = {
    __typename?: 'Domain';
    /** The unique identifier (24-digit Mongo Object ID) of the sales channel domain. */
    id?: Maybe<Scalars['String']['output']>;
    /** Domain is hosting domain or not. */
    is_predefined?: Maybe<Scalars['Boolean']['output']>;
    /** Domain is primary or not. Primary domain is the default/main domain. */
    is_primary?: Maybe<Scalars['Boolean']['output']>;
    /** Shortlink is present or not for the domain. */
    is_shortlink?: Maybe<Scalars['Boolean']['output']>;
    /** Domain name. */
    name?: Maybe<Scalars['String']['output']>;
    /** Domain is verified or not. TXT and A records should propagate correctly. */
    verified?: Maybe<Scalars['Boolean']['output']>;
};
/** Balance Details. */
export type DueAmount = {
    __typename?: 'DueAmount';
    /** Currency. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Formated Amount with currency symbol. */
    formatted_value?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Describes the request structure to update the email. */
export type EditEmailRequestSchemaInput = {
    /** Email of the user. */
    email?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to edit the phone number. */
export type EditMobileRequestSchemaInput = {
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number of user. */
    phone?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to edit the mobile number in profile details. */
export type EditProfileMobileSchemaInput = {
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number of user. */
    phone?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to edit the profile details. */
export type EditProfileRequestSchemaInput = {
    /** Unique hash value. */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Date of birth of user. */
    dob?: InputMaybe<Scalars['String']['input']>;
    /** Email id of user. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** First name of the application user. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** Gender of user. */
    gender?: InputMaybe<Scalars['String']['input']>;
    /** Last name of the application user. */
    last_name?: InputMaybe<Scalars['String']['input']>;
    /** Describes the request structure to edit the mobile number in profile details. */
    mobile?: InputMaybe<EditProfileMobileSchemaInput>;
    /** Profile picture of user. */
    profile_pic_url?: InputMaybe<Scalars['String']['input']>;
    /** Unique temporary registration of the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Identity of the sender. */
    sender?: InputMaybe<Scalars['String']['input']>;
};
/** Represents user email details. */
export type Email = {
    __typename?: 'Email';
    /** Is the email active. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Email address. */
    email?: Maybe<Scalars['String']['output']>;
    /** Is it a primary email. */
    primary?: Maybe<Scalars['Boolean']['output']>;
    /** Is the email verified. */
    verified?: Maybe<Scalars['Boolean']['output']>;
};
/** The schema for the communication channel for email channel which includes the response indicating the user's preference and the display name of the communication channel. */
export type EmailCommunication = {
    __typename?: 'EmailCommunication';
    /** Name of the channel of communication the user has agreed to receive messages through. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. */
    response?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the response received upon successfully sending an OTP to the user's email. */
export type EmailOtpSuccess = {
    __typename?: 'EmailOtpSuccess';
    /** A token used to authorize the resending of an OTP via email. */
    resend_email_token?: Maybe<Scalars['String']['output']>;
    /** Whether the OTP send operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Email address for support contact. */
export type EmailProperties = {
    __typename?: 'EmailProperties';
    /** Additional identifier or key for the email address. */
    key?: Maybe<Scalars['String']['output']>;
    /** Value of email. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Details related to email contact of SPOC. */
export type EmailSchema = {
    __typename?: 'EmailSchema';
    /** Whether contact detail is active or not. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Details related to email contact of SPOC. */
    email?: Maybe<Array<Maybe<EmailProperties>>>;
};
/** Schema for entity data updates. */
export type EntitiesDataUpdatesInput = {
    /** Information about the data to be updated. */
    data?: InputMaybe<Scalars['JSON']['input']>;
    /** Criteria applied to filter the shipments. */
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
/** Schema for entity reasons. */
export type EntitiesReasonsInput = {
    /** Schema for entity reasons data. */
    data?: InputMaybe<EntityReasonDataInput>;
    /** Criteria applied to filter the shipment. */
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
/** Schema for entity reasons data. */
export type EntityReasonDataInput = {
    /** The unique identifier for the reason. */
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    /** The text describing the reason. */
    reason_text?: InputMaybe<Scalars['String']['input']>;
};
/** Epaylater Banner Data. */
export type EpayLaterKycDetail = {
    __typename?: 'EpayLaterKYCDetail';
    /** Need to display banner or not. */
    display: Scalars['Boolean']['output'];
    /** EPayLater message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Epaylater KYC status. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Epaylater Banner Response. */
export type EpaylaterBanner = {
    __typename?: 'EpaylaterBanner';
    /** Epaylater Banner Data. */
    data: EpayLaterKycDetail;
    /** Successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Details related to FAQ. */
export type Faq = {
    __typename?: 'FAQ';
    /** The contents of a answer of a FAQ. */
    answer?: Maybe<Scalars['String']['output']>;
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** The contents of a question of a FAQ. */
    question?: Maybe<Scalars['String']['output']>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Tags under a FAQ. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** List of FAQ Categories. */
export type FaqCategories = {
    __typename?: 'FAQCategories';
    /** List of FAQ Categories. */
    categories?: Maybe<Array<Maybe<CategoryDetail>>>;
};
/** Details related to FAQ. */
export type FaQs = {
    __typename?: 'FAQs';
    /** Detailed list of FAQs. */
    faqs?: Maybe<Array<Maybe<Faq>>>;
};
/** Whether customer feedback is enabled on PDP. */
export type FeedbackFeature = {
    __typename?: 'FeedbackFeature';
    /** Whether customer feedback is enabled on PDP. Default value is false. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Support category array list details. */
export type FeedbackForm = {
    __typename?: 'FeedbackForm';
    /** Input details for the feedback form. */
    inputs?: Maybe<Scalars['JSON']['output']>;
    /** Timestamp details of feedback form. */
    timestamps?: Maybe<Scalars['JSON']['output']>;
    /** Title for the feedback form. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Criteria for validating a field. */
export type FieldValidation = {
    __typename?: 'FieldValidation';
    /** Specifies rules for validating a data field using regular expressions. */
    regex?: Maybe<FieldValidationRegex>;
    /** Specifies the validation method, such as regex for regular expression validation. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Specifies rules for validating a data field using regular expressions. */
export type FieldValidationRegex = {
    __typename?: 'FieldValidationRegex';
    /** Defines constraints for the length of a data field. */
    length?: Maybe<LengthValidation>;
    /** Regular expression pattern used to validate the field. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Schema for financial breakup. */
export type FinancialBreakup = {
    __typename?: 'FinancialBreakup';
    /** Indicates if the refund amount was added to Fynd Cash. */
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    /** The total amount paid by the customer. */
    amount_paid?: Maybe<Scalars['Float']['output']>;
    /** The rounded-off amount paid by the customer. */
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    /** The total amount that needs to be collected from the customer. */
    amount_to_be_collected?: Maybe<Scalars['Float']['output']>;
    /** The amount calculated by the brand. */
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    /** The cashback amount earned. */
    cashback?: Maybe<Scalars['Float']['output']>;
    /** The amount of cashback applied. */
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    /** The cash on delivery charges, if applicable. */
    cod_charges?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from coupons. */
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The value of the coupon applied. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** The delivery charge for the order. */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** The discount applied to the item. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** The amount of Fynd credits used. */
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    /** The GST fee applied to the item. */
    gst_fee?: Maybe<Scalars['Float']['output']>;
    /** The GST tag indicating the type of GST applied. */
    gst_tag?: Maybe<Scalars['String']['output']>;
    /** The GST tax percentage applied . */
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    /** The HSN (Harmonized System of Nomenclature) code of the item. */
    hsn_code?: Maybe<Scalars['String']['output']>;
    /** Schema for identifiers. */
    identifiers?: Maybe<Identifiers>;
    /** The name of the item. */
    item_name?: Maybe<Scalars['String']['output']>;
    /** The effective price after all adjustments. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** The original marked price of the item. */
    price_marked?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from promotions. */
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The amount refunded to the customer. */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** The amount credited for refund . */
    refund_credit?: Maybe<Scalars['Float']['output']>;
    /** The size of the item . */
    size?: Maybe<Scalars['String']['output']>;
    /** The total number of units purchased. */
    total_units?: Maybe<Scalars['Int']['output']>;
    /** The transfer price of the item. */
    transfer_price?: Maybe<Scalars['Float']['output']>;
    /** The value of the goods before tax and other charges. */
    value_of_good?: Maybe<Scalars['Float']['output']>;
};
/** Firebase integration settings for the application. */
export type Firebase = {
    __typename?: 'Firebase';
    /** Credentials required for Firebase integration. */
    credentials?: Maybe<FirebaseCredentials>;
    /** Shows whether Firebase integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for Firebase integration. */
export type FirebaseCredentials = {
    __typename?: 'FirebaseCredentials';
    /** Firebase credentials for the Android platform. */
    android?: Maybe<AppCredentials>;
    /** Secret API key for Google Maps. A unique identifier that authenticates requests made to Google Maps API. */
    api_key?: Maybe<Scalars['String']['output']>;
    /** Alphanumeric ID allotted to a sales channel application created within a business account. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Google Cloud Manager's Sender ID for Firebase. It is a unique numerical value which is created when you configure your project in the Google Developers Console/Google Cloud Console. */
    gcm_sender_id?: Maybe<Scalars['String']['output']>;
    /** Firebase credentials for the iOS platform. */
    ios?: Maybe<AppCredentials>;
    /** Project ID for Firebase integration. Project ID is a unique identifier for a project and is used only within the console. */
    project_id?: Maybe<Scalars['String']['output']>;
};
/** Structure of flashcard details. */
export type FlashCard = {
    __typename?: 'FlashCard';
    /** Background colour of the text to be shown on the flash card. */
    background_color?: Maybe<Scalars['String']['output']>;
    /** Text to be shown in the flash card. */
    text?: Maybe<Scalars['String']['output']>;
    /** Text colour for the text in the flash card. */
    text_color?: Maybe<Scalars['String']['output']>;
};
/** Response object containing a list of products that the user is following and pagination information for the follow listing. */
export type FollowListing = {
    __typename?: 'FollowListing';
    /** An array of product details that the user is following. Each item includes information such as the product name, price, and other attributes. */
    items: Array<Maybe<ProductListingDetail>>;
    /** Pagination details for the follow listing. It includes information such as the current page number, total pages, and items per page. */
    page: PageInfo;
};
/** Response object returned after a user follows or unfollows an item, indicating the success of the operation. */
export type FollowPostResponse = {
    __typename?: 'FollowPostResponse';
    /** A unique identifier for the follow operation, which can be used to reference or track the follow status. */
    id: Scalars['String']['output'];
    /** A message indicating the result of the follow or unfollow operation. This could be a confirmation message or an error message. */
    message: Scalars['String']['output'];
};
/** Response object containing the count of followers for a specific item, such as a product, collection, or brand. */
export type FollowerCount = {
    __typename?: 'FollowerCount';
    /** The number of followers for the item. This count indicates how many users are following the specified item. */
    count?: Maybe<Scalars['Int']['output']>;
};
/** An object representing font properties and attributes. */
export type Font = {
    __typename?: 'Font';
    /** The font family. */
    family?: Maybe<Scalars['String']['output']>;
    /** Multiple variants of a font, each with specific properties related to styles or weights of the font. */
    variants?: Maybe<FontVariants>;
};
/** Multiple variants of a font, each with specific properties related to styles or weights of the font. */
export type FontVariants = {
    __typename?: 'FontVariants';
    /** A variant of a font, containing properties related to specific styles or weights of the font. */
    bold?: Maybe<VaariantDetail>;
    /** A variant of a font, containing properties related to specific styles or weights of the font. */
    light?: Maybe<VaariantDetail>;
    /** A variant of a font, containing properties related to specific styles or weights of the font. */
    medium?: Maybe<VaariantDetail>;
    /** A variant of a font, containing properties related to specific styles or weights of the font. */
    regular?: Maybe<VaariantDetail>;
    /** A variant of a font, containing properties related to specific styles or weights of the font. */
    semi_bold?: Maybe<VaariantDetail>;
};
/** Describes the request structure to initiate the password recovery process for the user. */
export type ForgotPasswordRequestSchemaInput = {
    /** Unique code to verify request. */
    code?: InputMaybe<Scalars['String']['input']>;
    /** Password of user. */
    password?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to register new user. */
export type FormRegisterRequestSchemaInput = {
    /** Email of user. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** First name of the application user. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** Gender of user. */
    gender?: InputMaybe<Scalars['String']['input']>;
    /** Last name of the application user. */
    last_name?: InputMaybe<Scalars['String']['input']>;
    /** Password of user. */
    password?: InputMaybe<Scalars['String']['input']>;
    /** Schema representing the phone details for user registration. */
    phone?: InputMaybe<FormRegisterRequestSchemaPhoneInput>;
    /** Unique registration token of user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the phone details for user registration. */
export type FormRegisterRequestSchemaPhoneInput = {
    /** Country code for mobile number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** The user's mobile number without the country code. */
    mobile?: InputMaybe<Scalars['String']['input']>;
};
/** Details of free gift items which are received via promotion. */
export type FreeGiftItemDetails = {
    __typename?: 'FreeGiftItemDetails';
    /** Pricing information for the free gift article, including both the initial marked price and the final effective price after applying the product discount. */
    article_price?: Maybe<ArticlePriceDetails>;
    /** Available sizes for the free gift item. */
    available_sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** item brand name. */
    item_brand_name?: Maybe<Scalars['String']['output']>;
    /** Item id. */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** item images URL. */
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Item name. */
    item_name?: Maybe<Scalars['String']['output']>;
    /** item price details. */
    item_price_details?: Maybe<ItemPriceDetails>;
    /** item slug. */
    item_slug?: Maybe<Scalars['String']['output']>;
    /** Selected size for the free gift item. */
    size?: Maybe<Scalars['String']['output']>;
};
/** Details of free gift items which are received via promotion. */
export type FreeGiftItems = {
    __typename?: 'FreeGiftItems';
    /** Pricing information for the free gift article, including both the initial marked price and the final effective price after applying the product discount. */
    article_price?: Maybe<ArticlePriceDetails>;
    /** Available sizes for the free gift item. */
    available_sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Item brand name of the free gift item promotion applied on cart. */
    item_brand_name?: Maybe<Scalars['String']['output']>;
    /** Item id of the free gift item. */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** Images URLs for free gift items. */
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Name of the free gift item received via free gift promotion. */
    item_name?: Maybe<Scalars['String']['output']>;
    /** Item price details which inclued effective, marked, currency. */
    item_price_details?: Maybe<ItemPriceDetails>;
    /** Slug for an item. */
    item_slug?: Maybe<Scalars['String']['output']>;
    /** Selected size for the free gift item. */
    size?: Maybe<Scalars['String']['output']>;
};
/** Represents Freshchat integration settings for the application. */
export type Freshchat = {
    __typename?: 'Freshchat';
    /** Credentials required for Freshchat integration. */
    credentials?: Maybe<FreshchatCredentials>;
    /** Shows whether Freshchat integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for Freshchat integration. */
export type FreshchatCredentials = {
    __typename?: 'FreshchatCredentials';
    /** The unique app_id of your Freshchat account for integrating Freshchat with your sales channel. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** The unique app_key of your Freshchat account for integrating Freshchat with your sales channel. */
    app_key?: Maybe<Scalars['String']['output']>;
    /** Web token used for accessing the Freshchat APIs. */
    web_token?: Maybe<Scalars['String']['output']>;
};
/** Schema for fulfilling company. */
export type FulfillingCompany = {
    __typename?: 'FulfillingCompany';
    /** The unique identifier for the fulfilling company. */
    id?: Maybe<Scalars['Int']['output']>;
    /** The name of the fulfilling company. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Schema for fulfilling store. */
export type FulfillingStore = {
    __typename?: 'FulfillingStore';
    /** A code associated with the store. */
    code?: Maybe<Scalars['String']['output']>;
    /** The identifier of the company associated with the store. */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** The name of the company associated with the store. */
    company_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the store. */
    id?: Maybe<Scalars['Int']['output']>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Represents Fynd Rewards integration settings for the application. */
export type FyndRewards = {
    __typename?: 'FyndRewards';
    /** Credentials required for Fynd Rewards integration. */
    credentials?: Maybe<FyndRewardsCredentials>;
};
/** Credentials required for Fynd Rewards integration. */
export type FyndRewardsCredentials = {
    __typename?: 'FyndRewardsCredentials';
    /** Public key for integrating with Fynd rewards. */
    public_key?: Maybe<Scalars['String']['output']>;
};
/** Geolocation details. */
export type GeoLocation = {
    __typename?: 'GeoLocation';
    /** Latitude details. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** Longitude details. */
    longitude?: Maybe<Scalars['Float']['output']>;
};
/** Geolocation details for address data. */
export type GeoLocationInput = {
    /** Latitude coordinate for address. */
    latitude?: InputMaybe<Scalars['Float']['input']>;
    /** Longitude coordinate for address. */
    longitude?: InputMaybe<Scalars['Float']['input']>;
};
/** Schema conatins the request paramaters for getcartDetails. */
export type GetCartItemsRequestInput = {
    /** Area code to fetch customer cart. */
    areaCode?: InputMaybe<Scalars['String']['input']>;
    /** assigned cart id. */
    assignCardId?: InputMaybe<Scalars['Int']['input']>;
    /** Boolean flag to specify include breakup values or not. */
    b?: InputMaybe<Scalars['Boolean']['input']>;
    /** Boolean value to fetch buyNow values. */
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    c?: InputMaybe<Scalars['Boolean']['input']>;
    /** Boolean flag to specify include all items or not. */
    i?: InputMaybe<Scalars['Boolean']['input']>;
    /** Unique id of a user cart. */
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Get coupon list response schema which page information and list of coupons. */
export type GetCouponResponse = {
    __typename?: 'GetCouponResponse';
    /** List of available coupon which can be applied on cart. */
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    /** Pagination schema for get coupon list available on cart. */
    page?: Maybe<PageCoupon>;
};
/** Represents a request for retrieving data based on specified criteria. */
export type GetOneOrAll = {
    __typename?: 'GetOneOrAll';
    /** Identifier for the specific operation or query being performed. */
    operation_id?: Maybe<Scalars['String']['output']>;
    /** Defines parameters for retrieving geographic data. */
    params?: Maybe<GetOneOrAllParams>;
};
/** Defines parameters for retrieving geographic data. */
export type GetOneOrAllParams = {
    __typename?: 'GetOneOrAllParams';
    /** Define the path parameters for retrieving geographical data. */
    path?: Maybe<GetOneOrAllPath>;
    /** Allows to filter results based on one or more geographic levels. */
    query?: Maybe<GetOneOrAllQuery>;
};
/** Define the path parameters for retrieving geographical data. */
export type GetOneOrAllPath = {
    __typename?: 'GetOneOrAllPath';
    /** Specifies the type of locality to be retrieved, such as city, state, or pincode (e.g., "city", "state", "pincode"). */
    locality_type?: Maybe<Scalars['String']['output']>;
    /** The specific value of the locality being queried, such as the name of the city or the pincode (e.g., "Mumbai", "400093"). */
    locality_value?: Maybe<Scalars['String']['output']>;
};
/** Allows to filter results based on one or more geographic levels. */
export type GetOneOrAllQuery = {
    __typename?: 'GetOneOrAllQuery';
    /** The name of the city within the specified state. */
    city?: Maybe<Scalars['String']['output']>;
    /** The name of the country to filter the results. */
    country?: Maybe<Scalars['String']['output']>;
    /** The name of the sector or area within the specified city. */
    sector?: Maybe<Scalars['String']['output']>;
    /** The name of the state within the specified country. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Cart share link request schema used to get the share link to share cart to any other user. This includes cart id and meta json. */
export type GetShareCartLinkRequestInput = {
    /** Cart id of user cart for generating cart sharing token. */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Staff, Ordering store or any other data. This data will be used to generate link as well as sent as shared details. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
};
/** Cart share link response schema which includes url and token. */
export type GetShareCartLinkResponse = {
    __typename?: 'GetShareCartLinkResponse';
    /** Short shareable final url which can populate shared cart items in one's cart or replaced one's cart with shared cart items. */
    share_url?: Maybe<Scalars['String']['output']>;
    /** Short url unique id of the cart which is opted to share with other user. */
    token?: Maybe<Scalars['String']['output']>;
};
/** Gift details which includes flag for gift applied or not and gift message added by user. */
export type GiftDetailInput = {
    /** Gift message for the one while receive the delivery of the order with this message. */
    gift_message?: InputMaybe<Scalars['String']['input']>;
    /** Is gift applied flag which determines if this is a gift oder not. */
    is_gift_applied?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Represents Google Maps integration settings for the application. */
export type GoogleMap = {
    __typename?: 'GoogleMap';
    /** Credentials required for Google Maps integration. */
    credentials?: Maybe<GoogleMapCredentials>;
    /** Shows whether Google map integration is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for Google Maps integration. */
export type GoogleMapCredentials = {
    __typename?: 'GoogleMapCredentials';
    /** Secret API key for Google Maps. A unique identifier that authenticates requests made to Google Maps API. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Represents Google Tag Manager (GTM) integration settings for the application. */
export type Gtm = {
    __typename?: 'Gtm';
    /** Credentials required for GTM integration. */
    credentials?: Maybe<GtmCredentials>;
    /** Shows whether GTM integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for GTM integration. */
export type GtmCredentials = {
    __typename?: 'GtmCredentials';
    /** Secret credential API key for GTM. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the response received upon checking if a user has set an account password. */
export type HasPassword = {
    __typename?: 'HasPassword';
    /** An integer value indicating whether the user has set a password (1 for true, 0 for false). */
    result?: Maybe<Scalars['Boolean']['output']>;
};
/** Configuration for the home page of the application. */
export type HomePageFeature = {
    __typename?: 'HomePageFeature';
    /** Shows whether order processing is enabled or not enabled. */
    order_processing?: Maybe<Scalars['Boolean']['output']>;
};
/** List all the products associated with a brand, collection or category in a random order */
export type HomeProducts = {
    __typename?: 'HomeProducts';
    /** List of product details displayed on the home page. */
    items?: Maybe<Array<Maybe<ProductListingDetail>>>;
    /** Message related to the home listing response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Contains details about pagination info. */
    page?: Maybe<PageInfo>;
};
/** IFSC Code response. */
export type IfscCodeDetail = {
    __typename?: 'IFSCCodeDetail';
    /** Bank Name Of Account. */
    bank_name: Scalars['String']['output'];
    /** Branch Name Of Account. */
    branch_name: Scalars['String']['output'];
    /** Payment confirmation updated or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for identifiers. */
export type Identifiers = {
    __typename?: 'Identifiers';
    /** The European Article Number (EAN) of the item. */
    ean?: Maybe<Scalars['String']['output']>;
    /** The Stock Keeping Unit (SKU) code of the item. */
    sku_code?: Maybe<Scalars['String']['output']>;
};
/** Object containing type and values */
export type ImagePickerProp = {
    __typename?: 'ImagePickerProp';
    /** The type of the property. */
    type?: Maybe<Scalars['String']['output']>;
    /** The value of the property. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Represents different image formats for a brand or product, typically used for varying display orientations. */
export type ImageUrls = {
    __typename?: 'ImageUrls';
    /** Image URL or path for the landscape orientation. */
    landscape?: Maybe<Media>;
    /** Image URL or path for the portrait orientation. */
    portrait?: Maybe<Media>;
};
/** Details of a store, including its contact information, address, and geographic coordinates. */
export type InStockStore = {
    __typename?: 'InStockStore';
    /** The address details of the store. */
    address?: Maybe<StoreAddressSerializer>;
    /** Information about the company that owns the store. */
    company?: Maybe<CompanyStore>;
    /** Contact details for the store. */
    contact_numbers?: Maybe<Array<Maybe<StorePhoneNumber>>>;
    /** A list of departments within the store. */
    departments?: Maybe<Array<Maybe<StoreDepartment>>>;
    /** The manager's email address for the store. */
    manager?: Maybe<StoreManagerSerializer>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
    /** A unique code or identifier for the store, often used for internal reference. */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Contains the detailed address including PIN code, city, state, country, and type of address. */
export type InformationAddress = {
    __typename?: 'InformationAddress';
    /** Contact address of the sales channel. */
    address_line?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Name of the city, e.g. Mumbai. */
    city?: Maybe<Scalars['String']['output']>;
    /** Name of the country, e.g. India. */
    country?: Maybe<Scalars['String']['output']>;
    /** Contains location type and coordinates. */
    loc?: Maybe<InformationLoc>;
    /** Phone numbers with country codes. */
    phone?: Maybe<Array<Maybe<InformationPhone>>>;
    /** 6-digit PIN Code of the city, e.g. 400001. */
    pincode?: Maybe<Scalars['Int']['output']>;
};
/** Contains location type and coordinates. */
export type InformationLoc = {
    __typename?: 'InformationLoc';
    /** 10-digit mobile number. */
    coordinates?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    /** Country code for contact number, e.g. +91 (for India). */
    type?: Maybe<Scalars['String']['output']>;
};
/** Country code and 10-digit mobile number for contact. */
export type InformationPhone = {
    __typename?: 'InformationPhone';
    /** Country code for contact number, e.g. +91 (for India). */
    code?: Maybe<Scalars['String']['output']>;
    /** 10-digit mobile number. */
    number?: Maybe<Scalars['String']['output']>;
};
/** Details on support contacts, including phone numbers, email addresses, and support hours. */
export type InformationSupport = {
    __typename?: 'InformationSupport';
    /** An array of email contact details. */
    email?: Maybe<Array<Maybe<EmailProperties>>>;
    /** An array of phone contact details, including country code and number. */
    phone?: Maybe<Array<Maybe<PhoneSupport>>>;
    /** Working hours of support team, e.g. 9 AM to 9 PM. */
    timing?: Maybe<Scalars['String']['output']>;
};
/** Intent App. */
export type IntentApp = {
    __typename?: 'IntentApp';
    /** Code of the intent App. */
    code?: Maybe<Scalars['String']['output']>;
    /** Display Name of the intent App. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Payment Mode Logo. */
    logos?: Maybe<Logo>;
    /** Package Name of the intent App. */
    package_name?: Maybe<Scalars['String']['output']>;
};
/** Intent App Error List. */
export type IntentAppErrorList = {
    __typename?: 'IntentAppErrorList';
    /** Code of the intent App. */
    code?: Maybe<Scalars['String']['output']>;
    /** Package Name of the intent App. */
    package_name?: Maybe<Scalars['String']['output']>;
};
/** Configuration for international shipping settings. */
export type IntrenationalShippingFeature = {
    __typename?: 'IntrenationalShippingFeature';
    /** International shipping is enabled or not. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for invoice. */
export type Invoice = {
    __typename?: 'Invoice';
    /** URL providing access to the invoice. */
    invoice_url?: Maybe<Scalars['String']['output']>;
    /** URL providing access to the invoice label. */
    label_url?: Maybe<Scalars['String']['output']>;
    /** The date and time when the invoice was last updated. */
    updated_date?: Maybe<Scalars['String']['output']>;
};
/** Schema for brand within item. */
export type ItemBrand = {
    __typename?: 'ItemBrand';
    /** The URL of the brand's logo. */
    logo?: Maybe<Scalars['String']['output']>;
    /** The name of the brand. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Details of article price added in cart. */
export type ItemPriceDetails = {
    __typename?: 'ItemPriceDetails';
    /** Currency of the article added in cart. */
    currency?: Maybe<Scalars['String']['output']>;
    /** effective price of article added in cart. */
    effective?: Maybe<PriceMinMax>;
    /** marked price of article added in cart. */
    marked?: Maybe<PriceMinMax>;
};
/** JusPay config detail schema. */
export type JusPayAggregatorConfig = {
    __typename?: 'JusPayAggregatorConfig';
    /** The API associated with the cards. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Ladder offer item  details which includes price, margin, max quantity, min quantity and type. */
export type LadderOfferItem = {
    __typename?: 'LadderOfferItem';
    /** Percentage value of discount. */
    margin?: Maybe<Scalars['Int']['output']>;
    /** Minimum quantity upto which offer is applicable. If not present that offer is applicable on all quantities. */
    max_quantity?: Maybe<Scalars['Int']['output']>;
    /** Minimum quantity from which offer is applicable. */
    min_quantity?: Maybe<Scalars['Int']['output']>;
    /** Ladder price details which includes currency symbol, offer price, currency code, effective and marked price. */
    price?: Maybe<LadderPrice>;
    /** Offer type of the ladder promotion. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Ladder price details which includes currency symbol, offer price, currency code, effective and marked price. */
export type LadderPrice = {
    __typename?: 'LadderPrice';
    /** Currency code for all amounts. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of ladder price product. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Current per unit price of product after existing deductions. */
    effective?: Maybe<Scalars['Int']['output']>;
    /** Original price of product. */
    marked?: Maybe<Scalars['Int']['output']>;
    /** Discounted per unit price for current offer object. */
    offer_price?: Maybe<Scalars['Float']['output']>;
};
/** Ladder price offer details which included promotion id, buy rules, calculate on, offer text, discount rules, promotino group, free gift items and desription of promotino data. */
export type LadderPriceOffer = {
    __typename?: 'LadderPriceOffer';
    /** Buy rules of ladder price promotion applicable on product. */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** If this ladder offer is to be calculated on MRP or ESP price. */
    calculate_on?: Maybe<Scalars['String']['output']>;
    /** Offer details including T&amp;C of ladder price promotion applicable on product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of ladder price promotion applicable on product. */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Details of free gift items list. */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** ID of the promotion. */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer prices for ladder price promotion applicable on product. */
    offer_prices?: Maybe<Array<Maybe<LadderOfferItem>>>;
    /** Offer title of ladder price promotion applicable on product. */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Group of ladder price promotion applicable on the product. */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Datetime ISO String for promotion end date. */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Ladder price offer details which included promotion id, buy rules, calculate on, offer text, discount rules, promotino group, free gift items and desription of promotino data. */
export type LadderPriceOfferDetails = {
    __typename?: 'LadderPriceOfferDetails';
    /** Buy rules of ladder price promotion applicable on product. */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Offer details including T&amp;C of ladder price promotion applicable on product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of ladder price promotion applicable on product. */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Details of free gift items list. */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** ID of the promotion. */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title of ladder price promotion applicable on product. */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Group of ladder price promotion applicable on the product. */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Name of ladder price promotion applicable on the product. */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type of the promotion which is availalbe on product. */
    promotion_type?: Maybe<Scalars['String']['output']>;
    /** Datetime ISO String for promotion end date. */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Ladder price offers details which includes list of available ladder promotion on product. */
export type LadderPriceOffers = {
    __typename?: 'LadderPriceOffers';
    /** Available ladder promotions offers list. */
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    /** Currency info details of ladder price which includes currncy code and currency symbol. */
    currency?: Maybe<CurrencyInfo>;
};
/** Details contains data related to landing page. */
export type LandingPage = {
    __typename?: 'LandingPage';
    /** An object representing the parameters, query, URL, and type for an action related to a page. */
    action?: Maybe<ContentAction>;
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Whether landing page is archived or not. */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Details regarding the creator of entity. */
    created_by?: Maybe<CreatedBy>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Data related to creation and updation timestamps. */
    date_meta?: Maybe<DateMeta>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** List of platforms linked to this landing page. */
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Configuration for the landing page of the application. */
export type LandingPageFeature = {
    __typename?: 'LandingPageFeature';
    /** Shows whether a guest can checkout from cart without logging in. */
    continue_as_guest?: Maybe<Scalars['Boolean']['output']>;
    /** Details of the page shown after successful login. */
    launch_page?: Maybe<LaunchPage>;
    /** Shows the text displayed over the login button. */
    login_btn_text?: Maybe<Scalars['String']['output']>;
    /** Shows whether a textbox for entering domain is available. */
    show_domain_textbox?: Maybe<Scalars['Boolean']['output']>;
    /** Shows whether register button is available in the login/landing page. */
    show_register_btn?: Maybe<Scalars['Boolean']['output']>;
};
/** Details of the name of an entry in other languages. */
export type Language = {
    __typename?: 'Language';
    /** Name of an entry in a specific language. */
    display?: Maybe<Scalars['String']['output']>;
};
/** Represents the geographic coordinates of a location, typically used to specify the latitude and longitude of a store or point of interest. */
export type LatLong = {
    __typename?: 'LatLong';
    /** An array containing the latitude and longitude values of the location. */
    coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    /** The type of geographic coordinate system used. For example, "Point" indicates a single point in a geographic coordinate system. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Details of the page shown after successful login. */
export type LaunchPage = {
    __typename?: 'LaunchPage';
    /** Type of the launch page. */
    page_type?: Maybe<Scalars['String']['output']>;
    /** Launch page params. It can be nullable. */
    params?: Maybe<Scalars['JSON']['output']>;
    /** Query related to launch page. It can be nullable. */
    query?: Maybe<Scalars['JSON']['output']>;
};
/** Object containing all legal related contents. */
export type LeagalInformation = {
    __typename?: 'LeagalInformation';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent the time when data was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** FAQs of an application. */
    faq?: Maybe<Array<Maybe<ApplicationLegalFaq>>>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Content for Privacy Policy page on storefront. */
    policy?: Maybe<Scalars['String']['output']>;
    /** Content for Return policy page on storefront. */
    returns?: Maybe<Scalars['String']['output']>;
    /** Content for Shipping Policy page on storefront. */
    shipping?: Maybe<Scalars['String']['output']>;
    /** Content for Terms and Conditions page on storefront. */
    tnc?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent when was the last time when data was updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Defines constraints for the length of a data field. */
export type LengthValidation = {
    __typename?: 'LengthValidation';
    /** The maximum number of characters or digits allowed. */
    max?: Maybe<Scalars['Int']['output']>;
    /** The minimum number of characters or digits allowed. */
    min?: Maybe<Scalars['Int']['output']>;
};
/** Contains link with title and icon. */
export type LinkSchema = {
    __typename?: 'LinkSchema';
    /** Hosted URL of icon image representing the business highlight. */
    icon?: Maybe<Scalars['String']['output']>;
    /** Web URL for redirecting to a related page. */
    link?: Maybe<Scalars['String']['output']>;
    /** Title of the business highlight, e.g. Superfast Delivery. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Link status. */
export type LinkStatus = {
    __typename?: 'LinkStatus';
    /** This key specifies payment done status of payment link. */
    is_payment_done?: Maybe<Scalars['Boolean']['output']>;
    /** Message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Link action status. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Contains information about related pages or links. */
export type Links = {
    __typename?: 'Links';
    /** Web URL for redirecting to a related page. */
    link?: Maybe<Scalars['String']['output']>;
    /** Name of the related page or link. */
    title?: Maybe<Scalars['String']['output']>;
};
/** An object representing the configuration settings for a theme. */
export type ListItem = {
    __typename?: 'ListItem';
    /** A global configuration object containing various settings for the theme. */
    global_config?: Maybe<Scalars['JSON']['output']>;
    /** The name of the configuration. */
    name?: Maybe<Scalars['String']['output']>;
    /** An array of pages associated with the theme configuration. */
    page?: Maybe<Array<Maybe<PageConfig>>>;
};
/** Configuration for sorting product listings on the listing page. */
export type ListingPageFeature = {
    __typename?: 'ListingPageFeature';
    /** Determines the sorting criteria for product listings on the page. */
    sort_on?: Maybe<Scalars['String']['output']>;
};
/** Configuration for displaying prices on product listing pages. */
export type ListingPriceFeature = {
    __typename?: 'ListingPriceFeature';
    /** Sorting of listing price with min or max value. Default value is min. */
    sort?: Maybe<Scalars['String']['output']>;
    /** Shows which price to display on PLP if one product has multiple prices (for each size), valid values are 'min', 'max', 'range'. Default value is range. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Details of the name of an entry in other languages. */
export type LocaleLanguage = {
    __typename?: 'LocaleLanguage';
    /** Details of the name of an entry in other languages. */
    ar?: Maybe<Language>;
    /** Details of the name of an entry in other languages. */
    en_us?: Maybe<Language>;
    /** Details of the name of an entry in other languages. */
    hi?: Maybe<Language>;
};
/** Represents a collection of geographical locations, each associated with specific hierarchical data such as cities, states, or countries. */
export type Locality = {
    __typename?: 'Locality';
    /** Custom meta to store custom json against hierarchy. */
    custom_meta?: Maybe<Scalars['JSON']['output']>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** A unique identifier for the locality. */
    id?: Maybe<Scalars['String']['output']>;
    /** Representing the localities that are associated with or contained within the current locality.It provides detailed information about the parent localities, including their names, identifiers, and hierarchical relationships. */
    localities?: Maybe<Array<Maybe<LocalityParent>>>;
    /** The actual geographical data, such as country names (India), state names (Maharashtra), pin codes (400603), city names (Dubai), or local sectors (Deira). */
    name?: Maybe<Scalars['String']['output']>;
    /** Identifiers for the parent of the current locality. */
    parent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Specifies the category of the address component, such as pincode, state, city, country, or sector. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Provides information about localities based on specified criteria. */
export type LocalityConnection = {
    __typename?: 'LocalityConnection';
    /** List of localities, each containing detailed information about individual locality. */
    items?: Maybe<Array<Maybe<Locality>>>;
    /** Pagination details for the list of locations, including current page, page size, and total items. */
    page?: Maybe<PageInfo>;
};
export declare enum LocalityEnum {
    Pincode = "pincode",
    Sector = "sector"
}
/** Describes a parent locality within the geographical hierarchy. */
export type LocalityParent = {
    __typename?: 'LocalityParent';
    /** Custom meta to store custom json against hierarchy. */
    custom_meta?: Maybe<Scalars['JSON']['output']>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** A unique identifier for the locality. */
    id?: Maybe<Scalars['String']['output']>;
    /** The actual geographical data, such as country names (India), state names (Maharashtra), pin codes (400603), city names (Dubai), or local sectors (Deira). */
    name?: Maybe<Scalars['String']['output']>;
    /** Identifiers for the parent of the current locality. */
    parent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Specifies the category of the address component, such as pincode, state, city, country, or sector. */
    type?: Maybe<Scalars['String']['output']>;
};
export declare enum LocalityType {
    City = "city",
    Pincode = "pincode",
    Sector = "sector",
    State = "state"
}
/** Default language details for a location. */
export type LocationDefaultCurrency = {
    __typename?: 'LocationDefaultCurrency';
    /** Code of the language. */
    code?: Maybe<Scalars['String']['output']>;
    /** The name of the currency. */
    name?: Maybe<Scalars['String']['output']>;
    /** The symbol representing the currency. */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Default language details for a location. */
export type LocationDefaultLanguage = {
    __typename?: 'LocationDefaultLanguage';
    /** The ISO 4217 code for the currency. */
    code?: Maybe<Scalars['String']['output']>;
    /** The name of the currency. */
    name?: Maybe<Scalars['String']['output']>;
};
export declare enum LocationTypeEnum {
    City = "city",
    Country = "country",
    State = "state"
}
/** Contains information of the login options a application can use. */
export type Login = {
    __typename?: 'Login';
    /** Application is providing login with OTP or not. */
    otp?: Maybe<Scalars['Boolean']['output']>;
    /** Application is providing login with password or not. */
    password?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema representing the response received upon a successful login operation. */
export type LoginSuccess = {
    __typename?: 'LoginSuccess';
    /** A token used for registration purposes. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** A random uuid string used to track the send OTP response. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
};
/** Payment Mode Logo. */
export type Logo = {
    __typename?: 'Logo';
    /** Large Logo. */
    large: Scalars['String']['output'];
    /** Small Logo. */
    small: Scalars['String']['output'];
};
/** Schema representing the response received upon a successful logout operation. */
export type Logout = {
    __typename?: 'Logout';
    /** Whether the logout operation was successful. */
    logout?: Maybe<Scalars['Boolean']['output']>;
};
/** Contains information of the card position and background colour. */
export type LookAndFeel = {
    __typename?: 'LookAndFeel';
    /** Background colour of the card. */
    background_color?: Maybe<Scalars['String']['output']>;
    /** Position of the card eg right, left, top-right etc. */
    card_position?: Maybe<Scalars['String']['output']>;
};
/** Loyalty points data for the user cart. */
export type LoyaltyPoints = {
    __typename?: 'LoyaltyPoints';
    /** Whether the loyalty points are applicable for the cart . */
    applicable?: Maybe<Scalars['Float']['output']>;
    /** Description for loyalty points. */
    description?: Maybe<Scalars['String']['output']>;
    /** Whether the loyalty points are applied on the cart . */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Total loyalty points available with user. */
    total?: Maybe<Scalars['Float']['output']>;
};
/** Represents the minimum order quantity (MOQ) requirements for an application item. */
export type Moq = {
    __typename?: 'MOQ';
    /** The minimum quantity increment in which the item can be purchased. */
    increment_unit?: Maybe<Scalars['Int']['output']>;
    /** The maximum quantity allowed for purchase. */
    maximum?: Maybe<Scalars['Int']['output']>;
    /** The minimum quantity required for purchase. */
    minimum?: Maybe<Scalars['Int']['output']>;
};
/** Mswipe config detail schema. */
export type MSwipeAggregatorConfig = {
    __typename?: 'MSwipeAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Marketplace Info Schema. */
export type MarketplaceInfoInput = {
    /** Date of joining. */
    date_of_joining?: InputMaybe<Scalars['String']['input']>;
    /** Merchant id. */
    membership_id: Scalars['String']['input'];
    /** Name of store. */
    name: Scalars['String']['input'];
};
/** Represents a media file with its associated properties, such as URL, type, and metadata. */
export type Media = {
    __typename?: 'Media';
    /** Alternative text for the media, used for accessibility and SEO purposes. */
    alt?: Maybe<Scalars['String']['output']>;
    /** Contains additional information about the media file, such as its source. */
    meta?: Maybe<Meta>;
    /** The type of media, such as image, video. */
    type?: Maybe<Scalars['String']['output']>;
    /** Absolute url for Media. */
    url?: Maybe<Scalars['String']['output']>;
};
/** The source or origin of the media file, which could be a URL or a reference to where the media was obtained. */
export type Meta = {
    __typename?: 'Meta';
    /** Schema to define a Meta Object. */
    source?: Maybe<Scalars['String']['output']>;
};
/** Payment Methods Meta Order Schema. */
export type Meta2Input = {
    /** Merchant code. */
    merchant_code: Scalars['String']['input'];
    /** Payment gateway name. */
    payment_gateway: Scalars['String']['input'];
    /** Payment identifier. */
    payment_identifier: Scalars['String']['input'];
};
/** Any additional information you want to store other than the documents fields. */
export type MetaDetail = {
    __typename?: 'MetaDetail';
    /** One of the custom field that you are storing in meta. */
    fynd_default?: Maybe<Scalars['Boolean']['output']>;
};
/** Create Payment Link Meta. */
export type MetaInput = {
    /** Total amount for the transaction. */
    amount: Scalars['String']['input'];
    /** Identifier for the card assigned to the transaction. */
    assign_card_id?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier for the shopping cart. */
    cart_id: Scalars['String']['input'];
    /** Mode of checkout process (e.g., guest, registered user). */
    checkout_mode: Scalars['String']['input'];
    /** Postal code of the address. */
    pincode: Scalars['String']['input'];
};
/** Represents MoEngage integration settings for the application. */
export type Moengage = {
    __typename?: 'Moengage';
    /** Credentials required for MoEngage integration. */
    credentials?: Maybe<MoengageCredentials>;
    /** Shows whether MoEngage integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for MoEngage integration. */
export type MoengageCredentials = {
    __typename?: 'MoengageCredentials';
    /** APP ID provided by MoEngage to identify a specific app. The app_id for your MoEngage account is available on the MoEngage Dashboard. */
    app_id?: Maybe<Scalars['String']['output']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    /** Add a new address to their cart to save details such as name, email, contact information, and address. */
    addAddress?: Maybe<SaveAddressResponse>;
    /** Add beneficiary details specifically for refund transactions, including account holder name, account number and bank details. */
    addBeneficiaryDetails?: Maybe<RefundAccountResponse>;
    /** Add a new email address to the user's profile. */
    addEmail?: Maybe<VerifyEmailOtpSuccess>;
    /** Add to cart request schema which has items data to be added in cart. */
    addItemsToCart?: Maybe<AddCartDetailResponse>;
    /** Add a new mobile number to the user's profile. */
    addMobileNumber?: Maybe<VerifyMobileOtpSuccess>;
    /** Add bank account specifically for refunds, employing OTP verification for security. */
    addRefundBankAccountUsingOTP?: Maybe<RefundAccountResponse>;
    /** Apply a coupon code to the cart to trigger discounts on eligible items. */
    applyCoupon?: Maybe<CartDetailResponse>;
    /** Link payment card to a user account for seamless transactions. Upon successful linking, the card becomes associated with the user's profile, enabling secure and convenient payments. */
    attachCardToCustomer?: Maybe<AttachCardsResponse>;
    /** Cancel previously generated payment link. */
    cancelPaymentLink?: Maybe<CancelPaymentLinkResponse>;
    /** Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. */
    checkAndUpdatePaymentStatus?: Maybe<PaymentStatusUpdateResponse>;
    /** Verify and update status of a payment made through a link.Upon successful verification and update, the response includes details about the aggregator name, payment status, and whether retrying the process is required. */
    checkAndUpdatePaymentStatusPaymentLink?: Maybe<PaymentStatusUpdateResponse>;
    /** Enhanced version of checkout process that supports multiple mode of payment(MOP). */
    checkoutCart?: Maybe<CartCheckoutResponse>;
    /** Initiate the creation of an order handler for processing payments through a link. */
    createOrderHandlerPaymentLink?: Maybe<CreateOrderUserResponse>;
    /** Create new payment link for transactions. */
    createPaymentLink?: Maybe<CreatePaymentLinkResponse>;
    /** Create an order and payment on the aggregator side. */
    createPaymentOrder?: Maybe<PaymentOrderDetails>;
    /** Creates a shortened version of a given URL for easier sharing. */
    createShortLink?: Maybe<ShortLinkDetail>;
    /** Create a new customer ticket for a user query. */
    createTicket?: Maybe<SupportTicket>;
    /** Initiate the onboarding process for payment services, providing personal, business, and device information, along with marketplace details, to enable customer registration and credit availability. */
    customerOnboard?: Maybe<CustomerOnboardingResponse>;
    /** Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. */
    deleteCart?: Maybe<DeleteCartDetailResponse>;
    /** Delete email from profile. */
    deleteEmail?: Maybe<LoginSuccess>;
    /** Delete mobile number from profile. */
    deleteMobileNumber?: Maybe<LoginSuccess>;
    /** Verify OTP sent to mobile/email and delete the user's account. */
    deleteUser?: Maybe<DeleteUserSuccess>;
    /** Delete payment card from the user's account. */
    deleteUserCard?: Maybe<DeleteCardsResponse>;
    /** Delink the wallet. */
    delinkWallet?: Maybe<WalletResponse>;
    /** Enable/Disable a particular refund transfer mode based on the request body parameters, indicating whether the mode should be enabled or disabled. */
    enableOrDisableRefundTransferMode?: Maybe<UpdateRefundTransferModeResponse>;
    /** Add a product, brand, or item to the user's followed list by collection Id. */
    followById?: Maybe<FollowPostResponse>;
    /** Reset a password using the code sent on email or sms the login. */
    forgotPassword?: Maybe<LoginSuccess>;
    /** Generates a QR code for the application for easy sharing. */
    getApplicationQRCode?: Maybe<QrCodeResp>;
    /** Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. */
    getCartShareLink?: Maybe<GetShareCartLinkResponse>;
    /** Generates a QR code for a specific product collection using its slug. */
    getCollectionQRCodeBySlug?: Maybe<QrCodeResp>;
    /** Reset cookie of ordering store. */
    getOrderingStoreCookie?: Maybe<SuccessMessageResponse>;
    /** Creates a QR code for a specific product identified by its slug. */
    getProductQRCodeBySlug?: Maybe<QrCodeResp>;
    /** Converts a given URL into a scannable QR code. */
    getUrlQRCode?: Maybe<QrCodeResp>;
    /** Initiate the payment procedure for an order. Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order, polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. */
    initialisePayment?: Maybe<PaymentInitializationResponse>;
    /** Begin payment process for an order by initializing it through a payment link.Upon successful initialization, the response includes details about the payment status, aggregator details, order IDs, polling URL for status updates, and other relevant information. */
    initialisePaymentPaymentLink?: Maybe<PaymentInitializationResponse>;
    /** Verify the linking of wallet using OTP for further processing of payment. */
    linkWallet?: Maybe<WalletResponse>;
    /** Enable ios users to log in to the system using their apple id. */
    loginWithAppleIOS?: Maybe<AuthSuccess>;
    /** Allow login using an email and password combination. */
    loginWithEmailAndPassword?: Maybe<LoginSuccess>;
    /** Enable users to log in to the system using their facebook accounts. */
    loginWithFacebook?: Maybe<AuthSuccess>;
    /** Enable website users to log in to the system using their google accounts. */
    loginWithGoogle?: Maybe<AuthSuccess>;
    /** Enable android users to log in to the system using their facebook accounts. */
    loginWithGoogleAndroid?: Maybe<AuthSuccess>;
    /** Enable ios users to log in to the system using their facebook accounts. */
    loginWithGoogleIOS?: Maybe<AuthSuccess>;
    /** Allow users to log in using a one-time password sent to their mobile. */
    loginWithOTP?: Maybe<SendOtpResponse>;
    /** Login user using a token for authentication. */
    loginWithToken?: Maybe<LoginSuccess>;
    /** Enable new users to register using a form. */
    registerWithForm?: Maybe<RegisterFormSuccess>;
    /** Delete an existing customer address from the system. */
    removeAddress?: Maybe<DeleteAddressResponse>;
    /** Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. */
    removeCoupon?: Maybe<CartDetailResponse>;
    /** Delete store cookie. */
    removeOrderingStoreCookie?: Maybe<SuccessMessageResponse>;
    /** Render HTML for a payment aggregator page. */
    renderHTML?: Maybe<RenderHtmlResponse>;
    /** Resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. */
    resendOrCancelPayment?: Maybe<ResendOrCancelPaymentResponse>;
    /** Resend an existing payment link to the user to complete the payment. */
    resendPaymentLink?: Maybe<ResendPaymentLinkResponse>;
    /** Reset a password using the code sent on email or sms. */
    resetForgotPassword?: Maybe<ResetForgotPasswordSuccess>;
    /** Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. */
    selectAddress?: Maybe<CartDetailResponse>;
    /** Select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. */
    selectPaymentMode?: Maybe<CartDetailResponse>;
    /** Send a one-time password to the user's email for verification when resetting a forgotten password. */
    sendForgotOTPOnEmail?: Maybe<EmailOtpSuccess>;
    /** Send a one-time password to the user's mobile for verification when resetting a forgotten password. */
    sendForgotOTPOnMobile?: Maybe<OtpSuccess>;
    /** Send a one-time password to the user's email for verification. */
    sendOTPOnEmail?: Maybe<EmailOtpSuccess>;
    /** Send a one-time password to the user's mobile for verification. */
    sendOTPOnMobile?: Maybe<OtpSuccess>;
    /** Send OTP to the customer for shipment verification. */
    sendOtpForRefundBankDetails?: Maybe<SendOtpToCustomerResponse>;
    /** Send a password reset link to the user's email. */
    sendResetPasswordEmail?: Maybe<ResetPasswordSuccess>;
    /** Send a password reset link to the user's mobile. */
    sendResetPasswordMobile?: Maybe<ResetPasswordSuccess>;
    /** Validate password reset link code. */
    sendResetToken?: Maybe<ResetPasswordSuccess>;
    /** Send a verification link to a newly added email address. */
    sendVerificationLinkToEmail?: Maybe<SendEmailVerifyLinkSuccess>;
    /** Send a verification link to a newly added mobile number. */
    sendVerificationLinkToMobile?: Maybe<SendMobileVerifyLinkSuccess>;
    /** Set an email address as the primary contact for the user. */
    setEmailAsPrimary?: Maybe<LoginSuccess>;
    /** Set a mobile number as the primary contact for the user. */
    setMobileNumberAsPrimary?: Maybe<LoginSuccess>;
    /** Create user-entered data from a custom form for processing. */
    submitCustomForm?: Maybe<SubmitCustomFormResponse>;
    /** Remove a followed item, brand, or product using its collection ID. */
    unfollowById?: Maybe<FollowPostResponse>;
    /** Customer can modify the details of a previously saved addresses. */
    updateAddress?: Maybe<UpdateAddressResponse>;
    /** Update cart. Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. */
    updateCart?: Maybe<UpdateCartDetailResponse>;
    /** Update metadata associated with a cart, which includes customer preferences, delivery instructions, or any special requirements related to the cart items. */
    updateCartMeta?: Maybe<CartMetaResponse>;
    /** Merge or replace shared cart items with existing cart. */
    updateCartWithSharedItems?: Maybe<SharedCartResponse>;
    /** Update or insert the consent provided by the user for receiving communication messages. */
    updateCommunicationConsent?: Maybe<CommunicationConsent>;
    /** Update default beneficiary for the order refund of the user. */
    updateDefaultBeneficiary?: Maybe<SetDefaultBeneficiaryResponse>;
    /** Allow user to change their password. */
    updatePassword?: Maybe<VerifyEmailSuccess>;
    /** Allow users to modify and update their profile details. */
    updateProfile?: Maybe<ProfileEditSuccess>;
    /** Update current status of a specific shipment using its shipment ID. Supports both partial and full transition as per the configured settings. */
    updateShipmentStatus?: Maybe<ShipmentApplicationStatusResponse>;
    /** Update user attributes. */
    updateUserAttributes?: Maybe<UserAttributes>;
    /** Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. */
    validateAddress?: Maybe<ValidateAddressResponse>;
    /** Validate if a Virtual Payment Address (VPA) is valid for processing payments and returns the validation result.is_valid boolean value indicating whether the VPA is valid for payments. */
    validateVPA?: Maybe<ValidateVpaResponse>;
    /** Verify the payment status and charge from the customer's BNPL (Buy Now, Pay Later) account after order confirmation. */
    verifyAndChargePayment?: Maybe<ChargeCustomerResponse>;
    /** Verify if the user is eligible for pay-later payment from the payment aggregator side using the customer's phone number. */
    verifyCustomerForPayment?: Maybe<ValidateCustomerResponse>;
    /** Verify user email with a code sent within a link sent to their email. */
    verifyEmail?: Maybe<VerifyEmailSuccess>;
    /** Verify one-time password sent to user's email for resetting a forgotten password. */
    verifyEmailForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    /** Verify one-time password sent to user's email. */
    verifyEmailOTP?: Maybe<VerifyOtpSuccess>;
    /** Verify user mobile with a code sent within a link sent to their mobile. */
    verifyMobile?: Maybe<VerifyEmailSuccess>;
    /** Verify one-time password sent to user's mobile for resetting a forgotten password. */
    verifyMobileForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    /** Verify one-time password sent to user's mobile. */
    verifyMobileOTP?: Maybe<VerifyOtpSuccess>;
    /** Verify the OTP provided by the user and adds a bank beneficiary for refund processing. */
    verifyOtpAndAddBeneficiaryForBank?: Maybe<AddBeneficiaryViaOtpVerificationResponse>;
    /** Verify OTP provided by the user and adds a wallet beneficiary. */
    verifyOtpAndAddBeneficiaryForWallet?: Maybe<WalletOtpResponse>;
    /** Verify OTP sent by customer. */
    verifyOtpForRefundBankDetails?: Maybe<VerifyOtpResponse>;
    /** Link wallet for the aggregator for processing of payment. */
    walletLinkInitiate?: Maybe<WalletResponse>;
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
    orderType?: InputMaybe<Scalars['String']['input']>;
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
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartType?: InputMaybe<Scalars['String']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    p?: InputMaybe<Scalars['Boolean']['input']>;
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
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartCheckoutDetailRequestInput?: InputMaybe<CartCheckoutDetailRequestInput>;
    cartType?: InputMaybe<Scalars['String']['input']>;
};
export type MutationCreateOrderHandlerPaymentLinkArgs = {
    createOrderUserRequestInput?: InputMaybe<CreateOrderUserRequestInput>;
};
export type MutationCreatePaymentLinkArgs = {
    createPaymentLinkRequestInput?: InputMaybe<CreatePaymentLinkRequestInput>;
};
export type MutationCreatePaymentOrderArgs = {
    paymentOrderInput?: InputMaybe<PaymentOrderInput>;
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
    countryCode: Scalars['String']['input'];
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
export type MutationDelinkWalletArgs = {
    walletDelinkRequestSchemaInput?: InputMaybe<WalletDelinkRequestSchemaInput>;
};
export type MutationEnableOrDisableRefundTransferModeArgs = {
    updateRefundTransferModeRequestInput?: InputMaybe<UpdateRefundTransferModeRequestInput>;
};
export type MutationFollowByIdArgs = {
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
export type MutationForgotPasswordArgs = {
    forgotPasswordRequestSchemaInput?: InputMaybe<ForgotPasswordRequestSchemaInput>;
};
export type MutationGetCartShareLinkArgs = {
    getShareCartLinkRequestInput?: InputMaybe<GetShareCartLinkRequestInput>;
};
export type MutationGetCollectionQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
};
export type MutationGetOrderingStoreCookieArgs = {
    orderingStoreSelectRequestInput?: InputMaybe<OrderingStoreSelectRequestInput>;
};
export type MutationGetProductQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
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
export type MutationLinkWalletArgs = {
    walletVerifyRequestSchemaInput?: InputMaybe<WalletVerifyRequestSchemaInput>;
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
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
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
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
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
export type MutationSendOtpForRefundBankDetailsArgs = {
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
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
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
export type MutationUpdateAddressArgs = {
    address2Input?: InputMaybe<Address2Input>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationUpdateCartArgs = {
    areaCode?: InputMaybe<Scalars['String']['input']>;
    b?: InputMaybe<Scalars['Boolean']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartType?: InputMaybe<Scalars['String']['input']>;
    i?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    orderType?: InputMaybe<Scalars['String']['input']>;
    updateCartRequestInput?: InputMaybe<UpdateCartRequestInput>;
};
export type MutationUpdateCartMetaArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartMetaRequestInput?: InputMaybe<CartMetaRequestInput>;
    id?: InputMaybe<Scalars['String']['input']>;
};
export type MutationUpdateCartWithSharedItemsArgs = {
    action: ActionEnum;
    token: Scalars['String']['input'];
};
export type MutationUpdateCommunicationConsentArgs = {
    communicationConsentReqInput: CommunicationConsentReqInput;
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
    shipmentId: Scalars['String']['input'];
    updateShipmentStatusRequestInput: UpdateShipmentStatusRequestInput;
};
export type MutationUpdateUserAttributesArgs = {
    updateUserAttributesRequestSchemaInput?: InputMaybe<UpdateUserAttributesRequestSchemaInput>;
};
export type MutationValidateAddressArgs = {
    countryIsoCode?: InputMaybe<Scalars['String']['input']>;
    templateName?: InputMaybe<TemplateNameEnum>;
    validateAddressRequestInput?: InputMaybe<ValidateAddressRequestInput>;
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
export type MutationVerifyOtpForRefundBankDetailsArgs = {
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
    verifyOtpInput?: InputMaybe<VerifyOtpInput>;
};
export type MutationWalletLinkInitiateArgs = {
    walletLinkRequestSchemaInput?: InputMaybe<WalletLinkRequestSchemaInput>;
};
/** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
export type NameInformation = {
    __typename?: 'NameInformation';
    /** Name of entities like brand or seller. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of entities like brand or seller. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Data related to navigation links. */
export type Navigation = {
    __typename?: 'Navigation';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Whether navigation is archived or not. */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Details regarding the creator of entity. */
    created_by?: Maybe<CreatedBy>;
    /** Details related to resource creation and updation. */
    date_meta?: Maybe<DateMeta>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the navigation link. */
    name?: Maybe<Scalars['String']['output']>;
    /** List of all navigations links and relevant details. */
    navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    /** Details regarding the orientation on which the navigation is to be applied. */
    orientation?: Maybe<Orientation>;
    /** Details regarding the platforms for which this navigation is to applied on. */
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A short, human-readable, URL-friendly identifier. */
    slug?: Maybe<Scalars['String']['output']>;
    /** A hardcoded key for internally managing navigation versions. */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Details related to navigation link. */
export type NavigationReference = {
    __typename?: 'NavigationReference';
    /** Details regarding the authorization level to access the navigation item. */
    acl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Schema to define the Action Object. */
    action?: Maybe<ContentAction>;
    /** Whether navigation is active or not. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Display name of the navigation link. */
    display?: Maybe<Scalars['String']['output']>;
    /** URL of an image associated with a navigation link. */
    image?: Maybe<Scalars['String']['output']>;
    /** Details of name of an entry in other languages. */
    locale_language?: Maybe<LocaleLanguage>;
    /** Number denoting the position of navigation link. */
    sort_order?: Maybe<Scalars['Int']['output']>;
    /** List of sub links and details under a navigation. */
    sub_navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    /** List of tags under a navigation link. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** List of navigation items. */
export type Navigations = {
    __typename?: 'Navigations';
    /** List of navigation items. */
    items?: Maybe<Array<Maybe<Navigation>>>;
    /** Data related to pagination. */
    page?: Maybe<PageInfo>;
};
/** Schema for nested tracking details. */
export type NestedTrackingDetails = {
    __typename?: 'NestedTrackingDetails';
    /** Indicates whether the tracking event is the current or active status. */
    is_current?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the tracking event has passed or occurred. */
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    /** The status of the tracking event. */
    status?: Maybe<Scalars['String']['output']>;
    /** The time associated with the tracking event. */
    time?: Maybe<Scalars['String']['output']>;
};
/** Represents the net quantity of a product, including its unit of measurement and value. */
export type NetQuantity = {
    __typename?: 'NetQuantity';
    /** The unit of measurement used for the net quantity of the product. */
    unit?: Maybe<Unit>;
    /** The value of the net quantity of the product. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** The `Schedule` schema defines the timing and details for recurring or one-time tasks. It includes information on when the job should start and end, the frequency of the task, and any additional metadata. This schema helps in scheduling jobs or tasks based on specified timings and durations. */
export type NextSchedule = {
    __typename?: 'NextSchedule';
    /** The end time of the live discount. */
    end?: Maybe<Scalars['String']['output']>;
    /** The start time of the live discount. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Describes the request structure to login or register in ios app using apple account credentials. */
export type OAuthRequestAppleSchemaInput = {
    /** Schema representing the oauth token details for apple login. */
    oauth?: InputMaybe<OAuthRequestAppleSchemaOauthInput>;
    /** Schema representing the profile information of the user for apple login. */
    profile?: InputMaybe<OAuthRequestAppleSchemaProfileInput>;
    /** Unique user identifier. */
    user_identifier?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the oauth token details for apple login. */
export type OAuthRequestAppleSchemaOauthInput = {
    /** The identity token issued by apple. */
    identity_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the profile information of the user for apple login. */
export type OAuthRequestAppleSchemaProfileInput = {
    /** The first name of the user. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** The full name of the user. */
    full_name?: InputMaybe<Scalars['String']['input']>;
    /** The last name of the user. */
    last_name?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to login or register using facebook/google account credentials. */
export type OAuthRequestSchemaInput = {
    /** Boolean to specify if the user is signed in . */
    is_signed_in?: InputMaybe<Scalars['Boolean']['input']>;
    /** Schema representing the oauth2 token details. */
    oauth2?: InputMaybe<OAuthRequestSchemaOauth2Input>;
    /** Schema representing the profile information of the user. */
    profile?: InputMaybe<OAuthRequestSchemaProfileInput>;
};
/** Schema representing the oauth2 token details. */
export type OAuthRequestSchemaOauth2Input = {
    /** The access token issued by the oauth2 provider. */
    access_token?: InputMaybe<Scalars['String']['input']>;
    /** The expiry time of the access token in milliseconds since epoch. */
    expiry?: InputMaybe<Scalars['Int']['input']>;
    /** The refresh token issued by the oauth2 provider. */
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the profile information of the user. */
export type OAuthRequestSchemaProfileInput = {
    /** The email address of the user. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** The first name of the user. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** The full name of the user. */
    full_name?: InputMaybe<Scalars['String']['input']>;
    /** The unique identifier of the user. */
    id?: InputMaybe<Scalars['String']['input']>;
    /** The url of the user's profile picture. */
    image?: InputMaybe<Scalars['String']['input']>;
    /** The last name of the user. */
    last_name?: InputMaybe<Scalars['String']['input']>;
};
/** Offer Item Details, This consists of margin percentage, price, quantity, offer type and offer price. */
export type OfferItem = {
    __typename?: 'OfferItem';
    /** Whether offer discount is auto applied in cart. */
    auto_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Is true for best offer from all offers present for all sellers. */
    best?: Maybe<Scalars['Boolean']['output']>;
    /** Percentage value of discount. */
    margin?: Maybe<Scalars['Int']['output']>;
    /** Offer price details of the item includes effective price, selling price, currency and max price. */
    price?: Maybe<OfferPrice>;
    /** Quantity on which offer is applicable. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Total price of offer quantity with discount. */
    total?: Maybe<Scalars['Float']['output']>;
    /** Type of the offer. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Offer price details of the item includes effective price, selling price, currency and max price. */
export type OfferPrice = {
    __typename?: 'OfferPrice';
    /** Discounted per unit price for current offer object. */
    bulk_effective?: Maybe<Scalars['Float']['output']>;
    /** The currency code for an offer price is the three-letter code that corresponds to the currency in which the offer price is denominated. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The "effective price" is the actual price paid by the consumer after accounting for product discounts. It represents the true cost of a product or service after all adjustments have been made. */
    effective?: Maybe<Scalars['Int']['output']>;
    /** The price at which the product is sold to the end consumer, typically the original price before discounts. */
    marked?: Maybe<Scalars['Int']['output']>;
};
/** Customer onboarding response. */
export type OnboardSummary = {
    __typename?: 'OnboardSummary';
    /** Url for activation. */
    activation_url?: Maybe<Scalars['String']['output']>;
    /** Whether is eligible for transaction. */
    is_eligible_for_txn?: Maybe<Scalars['Boolean']['output']>;
    /** Rupifi customer ID. */
    merchant_customer_ref_id?: Maybe<Scalars['String']['output']>;
    /** URL to which the user may redirect. */
    redirect_url: Scalars['String']['output'];
    /** User Session. */
    session: Scalars['JSON']['output'];
    /** Status updated or not. */
    status: Scalars['Boolean']['output'];
    /** Description of status. */
    status_remark?: Maybe<Scalars['String']['output']>;
};
export declare enum Operation {
    RemoveItem = "remove_item",
    UpdateItem = "update_item"
}
/** Order details. */
export type Order = {
    __typename?: 'Order';
    /** A List containing details of bags available for reorder. */
    bags_for_reorder?: Maybe<Array<Maybe<BagsForReorder>>>;
    /** A List containing the breakup of various charges and discounts. */
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValues>>>;
    /** An Array of object containing order charges details. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** The GSTIN code for the shipment. */
    gstin_code?: Maybe<Scalars['String']['output']>;
    /** An object containing additional metadata for the order. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The date and time when the order was created. */
    order_created_time?: Maybe<Scalars['String']['output']>;
    /** The timestamp when the order was created. */
    order_created_ts?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the order. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** A List containing details of individual shipments within the order. */
    shipments?: Maybe<Array<Maybe<OrderShipment>>>;
    /** The total number of shipments in the order. */
    total_shipments_in_order?: Maybe<Scalars['Int']['output']>;
    /** User Info. */
    user_info?: Maybe<UserInfo>;
};
/** Schema for applied free articles. */
export type OrderAppliedFreeArticles = {
    __typename?: 'OrderAppliedFreeArticles';
    /** The unique identifier for the article. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** An object containing details about the free gift item. */
    free_gift_item_details?: Maybe<Scalars['JSON']['output']>;
    /** The identifier for the parent item to which this free article is related. */
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    /** The quantity of the free article. */
    quantity?: Maybe<Scalars['Float']['output']>;
};
/** Bag details. */
export type OrderBags = {
    __typename?: 'OrderBags';
    /** An array containing information about applied promotions. */
    applied_promos?: Maybe<Array<Maybe<AppliedPromos>>>;
    /** Order bags article details. */
    article?: Maybe<Article>;
    /** Indicates if the shipment can be canceled. */
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the item can be returned. */
    can_return?: Maybe<Scalars['Boolean']['output']>;
    /** Bags charges details. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** The code of the currency used. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The symbol of the currency used. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** An object containing the current status of the item. */
    current_status?: Maybe<CurrentStatus>;
    /** The date and time when the item is expected to be delivered . */
    delivery_date?: Maybe<Scalars['String']['output']>;
    /** The date and time when the item is expected to be delivered. */
    financial_breakup?: Maybe<Array<Maybe<FinancialBreakup>>>;
    /** The unique identifier for the order item. */
    id?: Maybe<Scalars['Int']['output']>;
    /** An object containing details about the item. */
    item?: Maybe<OrderItem>;
    /** The line number of the item in the order. */
    line_number?: Maybe<Scalars['Int']['output']>;
    /** An object containing metadata for the item. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** An object containing details of parent promotional bags. */
    parent_promo_bags?: Maybe<Scalars['JSON']['output']>;
    /** An object containing price details for the item. */
    prices?: Maybe<Prices>;
    /** The quantity of the item. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The last date and time by which the item can be returned. */
    returnable_date?: Maybe<Scalars['String']['output']>;
    /** The identifier for the seller. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
};
/** Order Beneficiary Details. */
export type OrderBeneficiaryDetail = {
    __typename?: 'OrderBeneficiaryDetail';
    /** All Beneficiaries Of An Order. */
    beneficiaries?: Maybe<Array<Maybe<BeneficiaryDetails>>>;
    /** Show Beneficiary details on UI or not. */
    show_beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
};
/** Breakup details of various charges and discounts. */
export type OrderBreakupValues = {
    __typename?: 'OrderBreakupValues';
    /** The international currency code representing the currency used for the value. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Symbol representing the currency used for the value. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The name of the entity as it should be displayed. */
    display?: Maybe<Scalars['String']['output']>;
    /** The official name of the entity. */
    name?: Maybe<Scalars['String']['output']>;
    /** The numerical value associated with the entity. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Order listing details. */
export type OrderConnection = {
    __typename?: 'OrderConnection';
    /** An array containing the order statuses. */
    filters?: Maybe<OrderFilters>;
    /** List of orders, each containing detailed information about individual orders and their respective shipments. */
    items?: Maybe<Array<Maybe<Order>>>;
    /** Page Configuration. */
    page?: Maybe<OrderPageInfo>;
};
/** Configuration options for order-related features, such as enabling the 'buy again' option. */
export type OrderFeature = {
    __typename?: 'OrderFeature';
    /** Allow buy again option for order. Default value is false. */
    buy_again?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for order filters. */
export type OrderFilters = {
    __typename?: 'OrderFilters';
    /** An array containing the order statuses. */
    statuses?: Maybe<Array<Maybe<OrderStatus>>>;
};
/** Schema for item. */
export type OrderItem = {
    __typename?: 'OrderItem';
    /** An object containing various attributes of the item. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** An object containing brand information. */
    brand?: Maybe<ItemBrand>;
    /** The code or SKU of the item. */
    code?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the item. */
    id?: Maybe<Scalars['Float']['output']>;
    /** An array of URLs pointing to images of the item. */
    image?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** An array of level 1 categories the item belongs. */
    l1_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** An array of level 2 categories the item belongs to. */
    l2_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The level 3 category name. */
    l3_category_name?: Maybe<Scalars['String']['output']>;
    /** The name of the ite. */
    name?: Maybe<Scalars['String']['output']>;
    /** An object containing brand information. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
    /** The size of the item. */
    size?: Maybe<Scalars['String']['output']>;
    /** A unique key or identifier for the item slug. */
    slug_key?: Maybe<Scalars['String']['output']>;
};
/** Schema for order's pagination. */
export type OrderPageInfo = {
    __typename?: 'OrderPageInfo';
    /** Specifies the current page number. It helps in identifying the position within the paginated results. */
    current?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether there is a next page available. It is true if a next page exists and false if the current page is the last one. */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** Total number of items available across all pages. It provides a count of all the items that match the query criteria, regardless of pagination. */
    item_total?: Maybe<Scalars['Int']['output']>;
    /** Represents the number of items on the current page. It indicates how many items are included in each page of the paginated response. */
    size?: Maybe<Scalars['Int']['output']>;
    /** Specifies the current page number. It helps in identifying the position within the paginated results. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Contains Metadata for the order. */
export type OrderRequest = {
    __typename?: 'OrderRequest';
    /** Metadata for the order. */
    meta?: Maybe<Scalars['JSON']['output']>;
};
/** Shipment details. */
export type OrderShipment = {
    __typename?: 'OrderShipment';
    /** The airway bill number for the shipment. */
    awb_no?: Maybe<Scalars['String']['output']>;
    /** An array containing details about the individual bags in the shipment. */
    bags?: Maybe<Array<Maybe<OrderBags>>>;
    /** Indicates if there are any beneficiary details. */
    beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
    /** Billing details for the order shipment */
    billing_address?: Maybe<BillingAddress>;
    /** An array containing the breakup of various charges and discounts. */
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValues>>>;
    /** An object containing details about the breakability of the shipment. */
    can_break?: Maybe<Scalars['JSON']['output']>;
    /** Indicates if the shipment can be canceled. */
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the shipment can be returned. */
    can_return?: Maybe<Scalars['Boolean']['output']>;
    /** Order charges information. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** Any comments related to the shipment. */
    comment?: Maybe<Scalars['String']['output']>;
    /** An object containing custom metadata for the shipment. */
    custom_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** An object containing the delivery address details. */
    delivery_address?: Maybe<DeliveryAddress>;
    /** The expected delivery date. */
    delivery_date?: Maybe<Scalars['String']['output']>;
    /** The name of the delivery partner. */
    dp_name?: Maybe<Scalars['String']['output']>;
    /** Fulfilling company details. */
    fulfilling_company?: Maybe<FulfillingCompany>;
    /** Store fulfilling the shipment. */
    fulfilling_store?: Maybe<FulfillingStore>;
    /** The GSTIN code for the shipment. */
    gstin_code?: Maybe<Scalars['String']['output']>;
    /** Schema for invoice. */
    invoice?: Maybe<Invoice>;
    /** The URL for customer support or help. */
    need_help_url?: Maybe<Scalars['String']['output']>;
    /** Metadata for the order. */
    order?: Maybe<OrderRequest>;
    /** The unique identifier for the order. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** The type of order. */
    order_type?: Maybe<Scalars['String']['output']>;
    /** An object containing payment details. */
    payment?: Maybe<ShipmentPayment>;
    /** Payment information for the order shipment */
    payment_info?: Maybe<Array<Maybe<ShipmentPaymentInfo>>>;
    /** Different prices related to the shipment(refund_amount, discount, etc). */
    prices?: Maybe<Prices>;
    /** An object containing promise details for delivery. */
    promise?: Maybe<Promise>;
    /** An object containing details of any refunds. */
    refund_details?: Maybe<Scalars['JSON']['output']>;
    /** An object containing metadata about the return process. */
    return_meta?: Maybe<Scalars['JSON']['output']>;
    /** The last date by which the item can be returned. */
    returnable_date?: Maybe<Scalars['String']['output']>;
    /** The date and time when the shipment was created. */
    shipment_created_at?: Maybe<Scalars['String']['output']>;
    /** The timestamp when the shipment was created. */
    shipment_created_ts?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the shipment. */
    shipment_id?: Maybe<Scalars['String']['output']>;
    /** An object containing the current status of the shipment. */
    shipment_status?: Maybe<ShipmentStatus>;
    /** Indicates if the download invoice option should be shown. */
    show_download_invoice?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the track link should be shown. */
    show_track_link?: Maybe<Scalars['Boolean']['output']>;
    /** An object containing size information for the items in the shipment. */
    size_info?: Maybe<Scalars['JSON']['output']>;
    /** The total number of bags in the shipment. */
    total_bags?: Maybe<Scalars['Int']['output']>;
    /** An object containing the total details of the shipment. */
    total_details?: Maybe<ShipmentTotalDetails>;
    /** The URL for tracking the shipment. */
    track_url?: Maybe<Scalars['String']['output']>;
    /** An array containing details of the tracking history of the shipment. */
    tracking_details?: Maybe<Array<Maybe<TrackingDetails>>>;
    /** The tracking number for the shipment. */
    traking_no?: Maybe<Scalars['String']['output']>;
    /** User information for the shipment. */
    user_info?: Maybe<ShipmentUserInfo>;
};
/** Status of the order. */
export type OrderStatus = {
    __typename?: 'OrderStatus';
    /** The text to display. */
    display?: Maybe<Scalars['String']['output']>;
    /** Indicates whether this option is currently selected. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** The value representing the selection. */
    value?: Maybe<Scalars['Int']['output']>;
};
/** Represents the selection details of an ordering store. */
export type OrderingStoreSelectInput = {
    /** Ordering store unique uid. It is required. */
    uid: Scalars['Int']['input'];
};
/** Request object to select an ordering store. */
export type OrderingStoreSelectRequestInput = {
    /** Represents the selection details of an ordering store. */
    ordering_store: OrderingStoreSelectInput;
};
/** Details regarding the orientation on which the navigation is to be applied. */
export type Orientation = {
    __typename?: 'Orientation';
    /** Data related to devices where navigation is assigned in landscape mode. */
    landscape?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Data related to devices where navigation is assigned in portrait mode. */
    portrait?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Schema representing the response received upon successfully sending an OTP to the user's mobile. */
export type OtpSuccess = {
    __typename?: 'OtpSuccess';
    /** The country specific prefix for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Additional information about the operation's result. */
    message?: Maybe<Scalars['String']['output']>;
    /** The user's mobile number without the country code. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** A token used for completing the registration process. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** A random uuid string used to track the OTP send response. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** The time in seconds before an OTP can be resent. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** A token used to authorize the resending of an OTP. */
    resend_token?: Maybe<Scalars['String']['output']>;
    /** Whether the OTP send operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Outstanding Order details response. */
export type OutstandingOrderDetail = {
    __typename?: 'OutstandingOrderDetail';
    /** Dict containing the outstanding order details. */
    data?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Message. */
    message?: Maybe<Scalars['String']['output']>;
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Details of the individual who owns or manages the application, including their contact details. */
export type OwnerInfo = {
    __typename?: 'OwnerInfo';
    /** List of email addresses of the owner. */
    emails?: Maybe<Array<Maybe<UserEmail>>>;
    /** First name of the owner. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier (24-digit Mongo Object ID) of owner info. */
    id?: Maybe<Scalars['String']['output']>;
    /** Last name of the owner. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** List of phone numbers of the owner. */
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    /** Hosted URL of profile pic. */
    profile_pic?: Maybe<Scalars['String']['output']>;
};
/** Ownership details of the promotion who burns the cash. */
export type Ownership = {
    __typename?: 'Ownership';
    /** Promotion amount bearable party. */
    payable_by?: Maybe<Scalars['String']['output']>;
    /** Promotion amount payable category. */
    payable_category?: Maybe<Scalars['String']['output']>;
};
/** Represents the page details used for rendering. */
export type Page = {
    __typename?: 'Page';
    /** Parameters that should be considered in path. */
    params?: Maybe<Params>;
    /** Query parameter if any to be added to the action. */
    query?: Maybe<Scalars['JSON']['output']>;
    /** The type of action such as product, products, category, brand. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Schema to define the Action Object. */
export type PageAction = {
    __typename?: 'PageAction';
    /** Represents the page details used for rendering. */
    page?: Maybe<ActionPage>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Schema to define the Action Object. */
export type PageActionDetail = {
    __typename?: 'PageActionDetail';
    /** Represents the page details used for rendering. */
    page?: Maybe<ActionPageDetail>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Page configuration object. */
export type PageConfig = {
    __typename?: 'PageConfig';
    /** An array of pages. */
    page?: Maybe<Scalars['String']['output']>;
    /** Object representing page configuration settings. */
    settings?: Maybe<Scalars['JSON']['output']>;
};
/** Pagination schema for get coupon list available on cart. */
export type PageCoupon = {
    __typename?: 'PageCoupon';
    /** Current page number. */
    current?: Maybe<Scalars['Int']['output']>;
    /** Denotes if next page of coupon is available. */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** Denotes if previous page of the coupon is available. */
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    /** Total pages of coupon availalbe. */
    total?: Maybe<Scalars['Int']['output']>;
    /** Total coupons are available for the cart. */
    total_item_count?: Maybe<Scalars['Int']['output']>;
};
/** An object representing theme page detail. */
export type PageDetail = {
    __typename?: 'PageDetail';
    /** An array of sections that make up the page. */
    sections?: Maybe<Array<Maybe<PageSections>>>;
    /** The name of the page. For example, 'about-us'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Common Schema for pagination (cursor and number). */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** Specifies the current page number. It helps in identifying the position within the paginated results. */
    current?: Maybe<Scalars['Int']['output']>;
    /**  Indicates whether there is a next page available. It is true if a next page exists and false if the current page is the last one. */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** The boolean field indicates whether there is a previous page available. It is true if a previous page exists and false if the current page is the first one. */
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    /** Total number of items available across all pages. It provides a count of all the items that match the query criteria, regardless of pagination. */
    item_total?: Maybe<Scalars['Int']['output']>;
    /** Specifies the identifier for the next page of results. It is used for fetching the subsequent set of items in a paginated response. */
    next_id?: Maybe<Scalars['String']['output']>;
    /** Represents the number of items on the current page. It indicates how many items are included in each page of the paginated response. */
    size?: Maybe<Scalars['Int']['output']>;
    /** Specifies type of pagination. If it is 'cursor' based or 'number' based. */
    type?: Maybe<Scalars['String']['output']>;
};
/** An Object containing page platform predicate details */
export type PagePlatformPredicate = {
    __typename?: 'PagePlatformPredicate';
    /** Section visibility on android platform. */
    android?: Maybe<Scalars['Boolean']['output']>;
    /** Section visibility on ios platform. */
    ios?: Maybe<Scalars['Boolean']['output']>;
    /** Section visibility on web platform. */
    web?: Maybe<Scalars['Boolean']['output']>;
};
/** An object defining conditions or predicates for the section. */
export type PagePredicate = {
    __typename?: 'PagePredicate';
    /** Predicate related to route conditions. */
    route?: Maybe<PageRoutePredicate>;
    /** Predicate related to screen conditions. */
    screen?: Maybe<PageScreenPredicate>;
    /** Predicate related to user conditions. */
    user?: Maybe<PageUserPredicate>;
};
/** Predicate related to route conditions. */
export type PageRoutePredicate = {
    __typename?: 'PageRoutePredicate';
    /** The exact URL for the route when 'selected' is set to 'exact'. */
    exact_url?: Maybe<Scalars['String']['output']>;
    /** Specifies the type of route selection, which can be 'none', 'exact', or 'query'. */
    selected?: Maybe<SelectedType>;
};
/** An object representing seo-related information for the page. */
export type PageSeo = {
    __typename?: 'PageSEO';
    /** The unique identifier for the object. */
    _id?: Maybe<Scalars['String']['output']>;
    /** An array representing breadcrumb navigation, where each item provides information about a step in the navigation path. */
    breadcrumb?: Maybe<Array<Maybe<SeObreadcrumb>>>;
    /** The canonical url of the page. */
    canonical_url?: Maybe<Scalars['String']['output']>;
    /** The SEO description of the page. */
    description?: Maybe<Scalars['String']['output']>;
    /** An array of meta tags for the page, each represented by an object. */
    meta_tags?: Maybe<Array<Maybe<SeoMetaItem>>>;
    /** The sitemap of the page. */
    sitemap?: Maybe<SeoSitemap>;
    /** The SEO title of the page. */
    title?: Maybe<Scalars['String']['output']>;
};
/** An Object containing page schedule predicate details */
export type PageSchedulePredicate = {
    __typename?: 'PageSchedulePredicate';
    /** A cron expression specifying the schedule for the predicate. */
    cron?: Maybe<Scalars['String']['output']>;
    /** The end date and time for the schedule, in iso 8601 format. */
    end?: Maybe<Scalars['String']['output']>;
    /** The start date and time for the schedule, in iso 8601 format. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Predicate related to screen conditions. */
export type PageScreenPredicate = {
    __typename?: 'PageScreenPredicate';
    /** Indicates if the predicate applies to desktop screens. */
    desktop?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the predicate applies to mobile screens. */
    mobile?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the predicate applies to tablet screens. */
    tablet?: Maybe<Scalars['Boolean']['output']>;
};
/** An object representing metadata attributes for a section of the page. */
export type PageSectionMetaAttributes = {
    __typename?: 'PageSectionMetaAttributes';
    /** A key-value pair object containing metadata attributes for the section. */
    attributes?: Maybe<Scalars['JSON']['output']>;
};
/** An object representing a section of the page. Each section can contain various attributes and elements that contribute to the page's content. */
export type PageSections = {
    __typename?: 'PageSections';
    /** An array of blocks within the section, where each block is represented as an object. */
    blocks?: Maybe<Array<Maybe<Block>>>;
    /** The name of the section. */
    name?: Maybe<Scalars['String']['output']>;
    /** An object defining conditions or predicates for the section. */
    predicate?: Maybe<PagePredicate>;
    /** An object containing preset configurations for the section. */
    preset?: Maybe<SectionPreset>;
    /** An object containing various properties associated with the section. */
    props?: Maybe<SectionProps>;
};
export declare enum PageTypes {
    Custom = "custom",
    Sections = "sections",
    System = "system"
}
/** Predicate related to user conditions. */
export type PageUserPredicate = {
    __typename?: 'PageUserPredicate';
    /** True if the user is anonymous. */
    anonymous?: Maybe<Scalars['Boolean']['output']>;
    /** True if the user is authenticated. */
    authenticated?: Maybe<Scalars['Boolean']['output']>;
};
export declare enum PageVisibilityOfItem {
    Pdp = "pdp"
}
/** Object containing list of custom pages with all details and paginated data. */
export type Pages = {
    __typename?: 'Pages';
    /** List of details of custom pages. */
    items?: Maybe<Array<Maybe<CustomPageDetail>>>;
    /** Data related to pagination. */
    page?: Maybe<PageInfo>;
};
/** Parameters that should be considered in path. */
export type Params = {
    __typename?: 'Params';
    /** The unique identifier for the product grouping. */
    slug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Describes the request structure to login or register using an email address and password. */
export type PasswordLoginRequestSchemaInput = {
    /** Captcha_code for sending password login request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Password of user. */
    password?: InputMaybe<Scalars['String']['input']>;
    /** Username of user. */
    username?: InputMaybe<Scalars['String']['input']>;
};
/** Get payment details. */
export type Payment = {
    __typename?: 'Payment';
    /** Get details about the active card aggregator used by the user, including the aggregator name.You can refresh the data by setting the 'refresh' parameter to true if needed. */
    active_card_aggregator?: Maybe<ActiveCardAggregator>;
    /** List all active cards saved by the user.Includes details such as the card's aggregator name, card ID, token, reference, number, expiration date, type, issuer, brand, nickname, and whether it has expired. */
    active_user_cards?: Maybe<CardConnection>;
    /** Get details of a specified payment card, including information such as the card type, brand, country, and expiration date. */
    card_details?: Maybe<CardData>;
    /** Check the availability and status of customer credit, providing the status of payment along with registration information and signup URL if the customer is not registered. */
    check_credit?: Maybe<CreditDetail>;
    /** Get summary of the customer's credit information, including details such as merchant customer reference ID, status, balance, limit, due amount, used amount, due date, days overdue, total due amount, and a repayment URL. */
    customer_credit_summary?: Maybe<UserCredit>;
    /** Get Epaylater payment banner details. It provides information about the banner's display status, along with relevant messages and the user's registration status. */
    epay_later_banner_details?: Maybe<EpaylaterBanner>;
    /** Get details of orders with outstanding payments. */
    outstanding_order_details?: Maybe<OutstandingOrderDetail>;
    /** Get details of orders that have been paid for, including shipment ID, order ID, due date, payment date, amount, and transaction ID, based on the aggregator merchant user ID. */
    paid_order_details?: Maybe<OutstandingOrderDetail>;
    /** List payment modes available for a given payment link. */
    payment_mode_routes_payment_link?: Maybe<PaymentModeRouteDetail>;
    /** Get Rupifi payment banner details. It provides information such as the KYC URL and the current status of the Rupifi payment banner. */
    rupifi_banner_details?: Maybe<RupifiBanner>;
    /** Validate IFSC code and returns bank details if valid. */
    verify_IFSC_code?: Maybe<IfscCodeDetail>;
};
/** Get payment details. */
export type PaymentActive_Card_AggregatorArgs = {
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Get payment details. */
export type PaymentActive_User_CardsArgs = {
    forceRefresh?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Get payment details. */
export type PaymentCard_DetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
    cardInfo: Scalars['String']['input'];
};
/** Get payment details. */
export type PaymentCheck_CreditArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
/** Get payment details. */
export type PaymentCustomer_Credit_SummaryArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
/** Get payment details. */
export type PaymentOutstanding_Order_DetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
/** Get payment details. */
export type PaymentPaid_Order_DetailsArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
};
/** Get payment details. */
export type PaymentPayment_Mode_Routes_Payment_LinkArgs = {
    paymentLinkId: Scalars['String']['input'];
};
/** Get payment details. */
export type PaymentRupifi_Banner_DetailsArgs = {
    pageValue: Scalars['String']['input'];
};
/** Get payment details. */
export type PaymentVerify_Ifsc_CodeArgs = {
    ifscCode?: InputMaybe<Scalars['String']['input']>;
};
/** Payment mode validity details of the coupon which shows coupon is valid for the payment mode or not. */
export type PaymentCouponValidate = {
    __typename?: 'PaymentCouponValidate';
    /** Coupon validity schema which includes coupon title, coupon code, next validation flag, valid flag, error display message and discount of coupon. */
    coupon_validity?: Maybe<CouponValidity>;
    /** Payment mode valid message for coupon. */
    message?: Maybe<Scalars['String']['output']>;
    /** Success flag of coupon payment mode validity API response. */
    success: Scalars['Boolean']['output'];
};
/** Contains details for default payment selection */
export type PaymentDefaultSelection = {
    __typename?: 'PaymentDefaultSelection';
    /** Identifier for Payment Mode. */
    identifier?: Maybe<Scalars['String']['output']>;
    /** Default Selection Payment Mode. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Decide if the default payment mode will skip the payment options page altogether or just be preferred on the Frontend. */
    skip?: Maybe<Scalars['Boolean']['output']>;
};
/** Aggregator Route. */
export type PaymentFlowDetail = {
    __typename?: 'PaymentFlowDetail';
    /** API link of the aggregator. */
    api_link?: Maybe<Scalars['String']['output']>;
    /** Details about aggregator route. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Payment flow. */
    payment_flow?: Maybe<Scalars['String']['output']>;
    /** Payment flow data. */
    payment_flow_data?: Maybe<Scalars['JSON']['output']>;
};
/** Payment flow object. */
export type PaymentFlows = {
    __typename?: 'PaymentFlows';
    /** Ajio Dhan Payment flow object. */
    ajiodhan?: Maybe<PaymentFlowDetail>;
    /** BQR Razorpay Payment flow object. */
    bqr_razorpay?: Maybe<PaymentFlowDetail>;
    /** CCAvenue Payment flow object. */
    ccavenue?: Maybe<PaymentFlowDetail>;
    /** ePayLater Payment flow object. */
    epaylater?: Maybe<PaymentFlowDetail>;
    /** Fynd Payment flow object. */
    fynd?: Maybe<PaymentFlowDetail>;
    /** JioPay Payment flow object. */
    jiopay?: Maybe<PaymentFlowDetail>;
    /** Juspay Payment flow object. */
    juspay?: Maybe<PaymentFlowDetail>;
    /** Mswipe Payment flow object. */
    mswipe?: Maybe<PaymentFlowDetail>;
    /** PayUbiz Payment flow object. */
    payubiz?: Maybe<PaymentFlowDetail>;
    /** Razorpay Payment flow object. */
    razorpay?: Maybe<PaymentFlowDetail>;
    /** Rupifi Payment flow object. */
    rupifi?: Maybe<PaymentFlowDetail>;
    /** Simpl Payment flow object. */
    simpl?: Maybe<PaymentFlowDetail>;
    /** Stripe Payment flow object. */
    stripe?: Maybe<PaymentFlowDetail>;
    /** UPI Razorpay Payment flow object. */
    upi_razorpay?: Maybe<PaymentFlowDetail>;
};
/** Payment Initialization Request. */
export type PaymentInitializationRequestInput = {
    /** Payment gateway name. */
    aggregator: Scalars['String']['input'];
    /** Payable amount. */
    amount: Scalars['Int']['input'];
    /** Customer valid mobile number. */
    contact: Scalars['String']['input'];
    /** Currency code. */
    currency: Scalars['String']['input'];
    /** Payment gateway customer id. */
    customer_id: Scalars['String']['input'];
    /** EDC machine Unique Identifier. */
    device_id?: InputMaybe<Scalars['String']['input']>;
    /** Customer valid email. */
    email: Scalars['String']['input'];
    /** Unique fynd order id. */
    merchant_order_id: Scalars['String']['input'];
    /** Payment method. */
    method: Scalars['String']['input'];
    /** Payment gateway order id. */
    order_id: Scalars['String']['input'];
    /** Payment gateway payment id. */
    razorpay_payment_id?: InputMaybe<Scalars['String']['input']>;
    /** Payment polling timeout if not received response. */
    timeout?: InputMaybe<Scalars['Int']['input']>;
    /** Customer vpa address. */
    vpa?: InputMaybe<Scalars['String']['input']>;
};
/** Payment Initialization Response. */
export type PaymentInitializationResponse = {
    __typename?: 'PaymentInitializationResponse';
    /** Payment gateway name. */
    aggregator: Scalars['String']['output'];
    /** Payment order id. */
    aggregator_order_id?: Maybe<Scalars['String']['output']>;
    /** Payable amount. */
    amount?: Maybe<Scalars['Int']['output']>;
    /** Bharat qr image url. */
    bqr_image?: Maybe<Scalars['String']['output']>;
    /** Currency code. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Payment gateway customer id. */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** EDC machine Unique Identifier. */
    device_id?: Maybe<Scalars['String']['output']>;
    /** Order id. */
    merchant_order_id: Scalars['String']['output'];
    /** Payment method. */
    method: Scalars['String']['output'];
    /** Polling url. */
    polling_url: Scalars['String']['output'];
    /** Payment  id. */
    razorpay_payment_id?: Maybe<Scalars['String']['output']>;
    /** Status of payment. */
    status?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
    /** Timeout. */
    timeout?: Maybe<Scalars['Int']['output']>;
    /** UPI poll url. */
    upi_poll_url?: Maybe<Scalars['String']['output']>;
    /** Payment virtual address. */
    virtual_id?: Maybe<Scalars['String']['output']>;
    /** Customer vpa address. */
    vpa?: Maybe<Scalars['String']['output']>;
};
/** Get Payment Link Response. */
export type PaymentLink = {
    __typename?: 'PaymentLink';
    /** Payment amount. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Merchant order id. */
    external_order_id?: Maybe<Scalars['String']['output']>;
    /** Name of merchant that created payment link. */
    merchant_name?: Maybe<Scalars['String']['output']>;
    /** Message. */
    message: Scalars['String']['output'];
    /** Status of payment link. */
    payment_link_current_status?: Maybe<Scalars['String']['output']>;
    /** Url of payment link. */
    payment_link_url?: Maybe<Scalars['String']['output']>;
    /** Polling request timeout. */
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Payment confirmation updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Payment link details. */
export type PaymentLinkDetail = {
    __typename?: 'PaymentLinkDetail';
    /** Get Payment Link Response. */
    payment_link?: Maybe<PaymentLink>;
    /** Polling Payment Link Response. */
    polling_payment_link?: Maybe<PollingPaymentLinkDetail>;
};
/** Payment meta detail includes merchant code, type, payment gateway, and payment identifier. */
export type PaymentMetaInput = {
    /** Merchant code of the payment mode selected to do the payment. */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Payment gateway used to do the payment. */
    payment_gateway?: InputMaybe<Scalars['String']['input']>;
    /** Payment identifier of the payment mode selected to do the payment. */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Type of card if payment mode is card to do the payment. */
    type?: InputMaybe<Scalars['String']['input']>;
};
/** Payment method details used to make the payment includes data like payment meta, payment mode, payment name, amout, and payment extra identifiers. */
export type PaymentMethodInput = {
    /** Amount of the payment mode to be paid. */
    amount?: InputMaybe<Scalars['Float']['input']>;
    /** Payment mode of payment method used to make payment. */
    mode: Scalars['String']['input'];
    /** Name of the payment mode used to make payment. */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Payment name of payment method used to make payment. */
    payment?: InputMaybe<Scalars['String']['input']>;
    /** Payment extra identifier for the payment mode to do the payment. */
    payment_extra_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    /** Payment meta detail includes merchant code, type, payment gateway, and payment identifier. */
    payment_meta: PaymentMetaInput;
};
/** Create Order User Payment Method schema. */
export type PaymentMethodsInput = {
    /** Payment Methods Meta Order Schema. */
    meta: Meta2Input;
    /** Payment mode. */
    mode: Scalars['String']['input'];
    /** Payment mode name. */
    name: Scalars['String']['input'];
};
/** Payment Methods Meta Order Schema. */
export type PaymentMethodsMetaOrderInput = {
    /** Merchant code. */
    merchant_code: Scalars['String']['input'];
    /** Payment gateway name. */
    payment_gateway: Scalars['String']['input'];
    /** Payment identifier. */
    payment_identifier: Scalars['String']['input'];
};
/** Payment Mode List Data. */
export type PaymentModeList = {
    __typename?: 'PaymentModeList';
    /** Name of the payment aggregator. */
    aggregator_name: Scalars['String']['output'];
    /** Brand of the card (e.g., Visa, MasterCard). */
    card_brand?: Maybe<Scalars['String']['output']>;
    /** Image representing the card brand. */
    card_brand_image?: Maybe<Scalars['String']['output']>;
    /** Unique fingerprint of the card for identification. */
    card_fingerprint?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the card within the system. */
    card_id?: Maybe<Scalars['String']['output']>;
    /** International Securities Identification Number for the card. */
    card_isin?: Maybe<Scalars['String']['output']>;
    /** Issuing bank or institution of the card. */
    card_issuer?: Maybe<Scalars['String']['output']>;
    /** Name printed on the card. */
    card_name?: Maybe<Scalars['String']['output']>;
    /** Card number mentioned on the card. */
    card_number?: Maybe<Scalars['String']['output']>;
    /** Reference identifier for the card. */
    card_reference?: Maybe<Scalars['String']['output']>;
    /** Encrypted token representing the card. */
    card_token?: Maybe<Scalars['String']['output']>;
    /** Type of the card (e.g., debit, credit). */
    card_type?: Maybe<Scalars['String']['output']>;
    /** Limit for Cash on Delivery (COD) transactions. */
    cod_limit?: Maybe<Scalars['Float']['output']>;
    /** Maximum limit per order for COD transactions. */
    cod_limit_per_order?: Maybe<Scalars['Float']['output']>;
    /** General code for identifying a transaction or status. */
    code?: Maybe<Scalars['String']['output']>;
    /** Indicates compliance with tokenization guidelines. */
    compliant_with_tokenisation_guidelines?: Maybe<Scalars['Boolean']['output']>;
    /** Display name for the card in the user interface. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Priority of display in the user interface. */
    display_priority?: Maybe<Scalars['Int']['output']>;
    /** Card's expiration month. */
    exp_month?: Maybe<Scalars['Int']['output']>;
    /** Card's expiration year. */
    exp_year?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the card is expired. */
    expired?: Maybe<Scalars['Boolean']['output']>;
    /** Virtual Payment Address (VPA) used by Fynd. */
    fynd_vpa?: Maybe<Scalars['String']['output']>;
    /** Application intended for handling the transaction. */
    intent_app?: Maybe<Array<Maybe<IntentApp>>>;
    /** List of error dictionaries related to intent app. */
    intent_app_error_dict_list?: Maybe<Array<Maybe<IntentAppErrorList>>>;
    /** List of errors associated with the intent app. */
    intent_app_error_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Flow or process intended for the transaction. */
    intent_flow?: Maybe<Scalars['Boolean']['output']>;
    /** Payment Mode Logo. */
    logo_url?: Maybe<Logo>;
    /** Unique code identifying the merchant. */
    merchant_code?: Maybe<Scalars['String']['output']>;
    /** Payment methods meta. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** User's name. */
    name?: Maybe<Scalars['String']['output']>;
    /** User-defined name for the card. */
    nickname?: Maybe<Scalars['String']['output']>;
    /** Remaining available limit on the card. */
    remaining_limit?: Maybe<Scalars['Float']['output']>;
    /** Number of retry attempts. */
    retry_count?: Maybe<Scalars['Int']['output']>;
    /** Timeout duration for transactions. */
    timeout?: Maybe<Scalars['Int']['output']>;
};
/** Single payment option with flow and split values. */
export type PaymentModeRouteDetail = {
    __typename?: 'PaymentModeRouteDetail';
    /** Advance Payment Array. */
    advance_payment?: Maybe<Array<Maybe<AdvancePaymentObject>>>;
    /** Payment Breakup for advance payment. */
    payment_breakup?: Maybe<Scalars['JSON']['output']>;
    /** Payment option and flow object. */
    payment_options: PaymentOptionDetails;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Payment option and flow object. */
export type PaymentOptionDetails = {
    __typename?: 'PaymentOptionDetails';
    /** Details for default payment selection */
    payment_default_selection?: Maybe<PaymentDefaultSelection>;
    /** Payment flow object. */
    payment_flows: PaymentFlows;
    /** Payment options. */
    payment_option: Array<Maybe<RootPaymentMode>>;
};
/** Payment Order Data Schema. */
export type PaymentOrderData = {
    __typename?: 'PaymentOrderData';
    /** Aggregator name. */
    aggregator?: Maybe<Scalars['String']['output']>;
    /** Amount. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Callback url for aggregator. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Contact number of the customer. */
    contact?: Maybe<Scalars['String']['output']>;
    /** Currency used for the order. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Aggregator customer id. */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** Email address of the customer. */
    email?: Maybe<Scalars['String']['output']>;
    /** Merchant order id. */
    merchant_order_id?: Maybe<Scalars['String']['output']>;
    /** Method of payment or delivery for the order. */
    method?: Maybe<Scalars['String']['output']>;
    /** Aggregator order id. */
    order_id?: Maybe<Scalars['String']['output']>;
};
/** Payment Order response model. */
export type PaymentOrderDetails = {
    __typename?: 'PaymentOrderDetails';
    /** Callback url for aggregator. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Payment Order Data Schema. */
    data?: Maybe<PaymentOrderData>;
    /** Detailed message. */
    message: Scalars['String']['output'];
    /** Merchant order id. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Payment confirm url for aggregator. */
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    /** HTTP status code. */
    status_code?: Maybe<Scalars['Int']['output']>;
    /** Successful or failure. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Payment Order Request Schema. */
export type PaymentOrderInput = {
    /** Order id. */
    order_id: Scalars['String']['input'];
    /** All payment methods for order. */
    payment_methods?: InputMaybe<Array<InputMaybe<PaymentOrderMethodsInput>>>;
    /** Shipment_id. */
    shipment_id?: InputMaybe<Scalars['String']['input']>;
};
/** Payment Order Methods. */
export type PaymentOrderMethodsInput = {
    /** Amount to be collected. */
    amount: Scalars['Float']['input'];
    /** Payment Methods Meta Order Schema. */
    meta: PaymentMethodsMetaOrderInput;
    /** Payment mode. */
    mode: Scalars['String']['input'];
    /** Payment mode name. */
    name: Scalars['String']['input'];
    /** Payment type i.e. Required / Blocked. */
    payment?: InputMaybe<Scalars['String']['input']>;
};
/** Payment Default Selection Schema. */
export type PaymentSelectionLock = {
    __typename?: 'PaymentSelectionLock';
    /** Default Selection Payment Mode. */
    default_options?: Maybe<Scalars['String']['output']>;
    /** Denotes if default payment selection is enable. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Identifier for Payment Mode. */
    payment_identifier?: Maybe<Scalars['String']['output']>;
};
/** Payment Status Update Request. */
export type PaymentStatusUpdateRequestInput = {
    /** Payment gateway name. */
    aggregator: Scalars['String']['input'];
    /** Payable amount. */
    amount: Scalars['Int']['input'];
    /** Customer valid mobile number. */
    contact: Scalars['String']['input'];
    /** Currency code. */
    currency: Scalars['String']['input'];
    /** Payment gateway customer id. */
    customer_id: Scalars['String']['input'];
    /** EDC machine Unique Identifier. */
    device_id?: InputMaybe<Scalars['String']['input']>;
    /** Customer valid email. */
    email: Scalars['String']['input'];
    /** Unique fynd order id. */
    merchant_order_id: Scalars['String']['input'];
    /** Unique fynd transaction id. */
    merchant_transaction_id: Scalars['String']['input'];
    /** Payment method. */
    method: Scalars['String']['input'];
    /** Payment gateway order id. */
    order_id: Scalars['String']['input'];
    /** Status of payment. */
    status: Scalars['String']['input'];
    /** Customer vpa address. */
    vpa?: InputMaybe<Scalars['String']['input']>;
};
/** Payment status update response. */
export type PaymentStatusUpdateResponse = {
    __typename?: 'PaymentStatusUpdateResponse';
    /** Payment gateway name. */
    aggregator_name: Scalars['String']['output'];
    /** Redirect url. */
    redirect_url?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    retry: Scalars['Boolean']['output'];
    /** Payment status. */
    status: Scalars['String']['output'];
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** PayUMoney config detail schema. */
export type PayuMoneyAggregatorConfig = {
    __typename?: 'PayuMoneyAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Configuration for the PCR feature. */
export type PcrFeature = {
    __typename?: 'PcrFeature';
    /** Allow staff selection. Default value is false. */
    staff_selection?: Maybe<Scalars['Boolean']['output']>;
};
/** Component or field of the KYC form. */
export type PersonalInfoInput = {
    /** KYC Address Details. */
    address_as_per_id: AddressAsPerIdInput;
    /** Date of birth of the individual. */
    dob: Scalars['String']['input'];
    /** Driving license number. */
    driving_license?: InputMaybe<Scalars['String']['input']>;
    /** Email address. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Indicates whether the email is verified. */
    email_verified: Scalars['Boolean']['input'];
    /** Father's name. */
    fathers_name?: InputMaybe<Scalars['String']['input']>;
    /** First name of the individual. */
    first_name: Scalars['String']['input'];
    /** Gender of the individual. */
    gender?: InputMaybe<Scalars['String']['input']>;
    /** Last name of the individual. */
    last_name?: InputMaybe<Scalars['String']['input']>;
    /** Middle name of the individual. */
    middle_name?: InputMaybe<Scalars['String']['input']>;
    /** Indicates whether the mobile number is verified. */
    mobile_verified: Scalars['Boolean']['input'];
    /** Mother's name. */
    mothers_name?: InputMaybe<Scalars['String']['input']>;
    /** Permanent Account Number (PAN). */
    pan?: InputMaybe<Scalars['String']['input']>;
    /** Passport number. */
    passport?: InputMaybe<Scalars['String']['input']>;
    /** Phone number. */
    phone: Scalars['String']['input'];
    /** Voter ID number. */
    voter_id?: InputMaybe<Scalars['String']['input']>;
};
/** Object representing a user's phone number, including its active status, whether it's the primary number, verification status, and the phone number itself. */
export type PhoneNumber = {
    __typename?: 'PhoneNumber';
    /** Current phone number is active or not active. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Country code, e.g. +91. */
    country_code?: Maybe<Scalars['Int']['output']>;
    /** Phone number of the user. */
    phone?: Maybe<Scalars['String']['output']>;
    /** Indicates current phone number is primary or not for a user. */
    primary?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates current phone number is verified or not verified. */
    verified?: Maybe<Scalars['Boolean']['output']>;
};
/** Details related to phone contact of SPOC. */
export type PhoneProperties = {
    __typename?: 'PhoneProperties';
    /** International dial Code. */
    code?: Maybe<Scalars['String']['output']>;
    /** Name of the Contact SPOC. */
    key?: Maybe<Scalars['String']['output']>;
    /** Phone Number. */
    number?: Maybe<Scalars['String']['output']>;
    /** Denotes the type of phone number. */
    phone_type?: Maybe<PhoneTypeEnum>;
};
/** Details related to phone contact of SPOC. */
export type PhoneSchema = {
    __typename?: 'PhoneSchema';
    /** Flag denoting whether contact detail is active or not. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Details related to phone contact of SPOC. */
    phone?: Maybe<Array<Maybe<PhoneProperties>>>;
};
/** Contact number with country code and phone number. */
export type PhoneSupport = {
    __typename?: 'PhoneSupport';
    /** Code of the ordering store (usually same as Store Code). */
    code?: Maybe<Scalars['String']['output']>;
    /** Additional identifier or key for the contact number. */
    key?: Maybe<Scalars['String']['output']>;
    /** 10-digit mobile number. */
    number?: Maybe<Scalars['String']['output']>;
};
export declare enum PhoneTypeEnum {
    PhoneNumber = "phone_number",
    Tollfree = "tollfree"
}
/** Provides information about address hierarchy . */
export type PincodeDetails = {
    __typename?: 'PincodeDetails';
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The name of the packaging. */
    name?: Maybe<Scalars['String']['output']>;
    /** Indicates the specific type of locality hierarchy the pincode belongs to (e.g., city, state, country). */
    sub_type?: Maybe<Scalars['String']['output']>;
    /** This field stands for "Unique Identifier," a unique value assigned to each instance to ensure differentiation and reference. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Provides geographical information for a pincode. */
export type PincodeLatLongData = {
    __typename?: 'PincodeLatLongData';
    /** Contains the latitude and longitude values representing the precise location. The format is usually an array with two values: [longitude, latitude]. */
    coordinates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Specifies the type of geographical feature or data, typically "Point" for coordinates in geographic data systems. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Provides metadata about a specific pincode. */
export type PincodeMetaData = {
    __typename?: 'PincodeMetaData';
    /** A unique identifier used within the system to track or reference the specific zone associated with the pincode. */
    internal_zone_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Geographical region to which the pincode belongs,
     * often used to categorize or group pincodes for regional management or postal purposes.
     */
    zone?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the platform sales channel authentication configuration. */
export type PlatformConfig = {
    __typename?: 'PlatformConfig';
    /** Is the application config active or not. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** When was the application platform config document was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Any consent you want a user to know while deleting the account. */
    delete_account_consent?: Maybe<DeleteAccountConsent>;
    /** Number of days after which the user account will be deleted. */
    delete_account_day?: Maybe<Scalars['Int']['output']>;
    /** List of reasons you can set to ask the user when an account is being deleted from the application. */
    delete_account_reasons?: Maybe<Array<Maybe<DeleteAccountReasons>>>;
    /** Image to be shown on registration page for desktop devices. */
    desktop_image?: Maybe<Scalars['String']['output']>;
    /** The display name of the platform. */
    display?: Maybe<Scalars['String']['output']>;
    /** Information of the flashcard like text colour, text and background color of text. */
    flash_card?: Maybe<FlashCard>;
    /** Forgot password option to be given or not to application user. */
    forgot_password?: Maybe<Scalars['Boolean']['output']>;
    /** Unique document id of the platform config. */
    id?: Maybe<Scalars['String']['output']>;
    /** Login option to be provided with password or OTP either both. */
    login?: Maybe<Login>;
    /** The look and feel configuration of the platform. */
    look_and_feel?: Maybe<LookAndFeel>;
    /** Additional information for platform config. */
    meta?: Maybe<MetaDetail>;
    /** Image to be shown on registration page for mobile devices. */
    mobile_image?: Maybe<Scalars['String']['output']>;
    /** Name of the application. */
    name?: Maybe<Scalars['String']['output']>;
    /** Whether to show the registration page on landing page or not. */
    register?: Maybe<Scalars['Boolean']['output']>;
    /** Information which fields are mandatory for application eg is email mandatory or phone number mandatory or either both of them are mandatory. */
    register_required_fields?: Maybe<RegisterRequiredFields>;
    /** Information which fields are mandatory for application eg is email mandatory or phone number mandatory or either both of them are mandatory. */
    required_fields?: Maybe<RequiredFields>;
    /** Contains session config formation like is session rolling, if yes then number of days or hours till session gets rolled . */
    session_config?: Maybe<SessionExpiry>;
    /** Skip the captcha or not. */
    skip_captcha?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to skip the login or not. */
    skip_login?: Maybe<Scalars['Boolean']['output']>;
    /** Information whether application social logins like facebook, google etc are enabled or disabled. */
    social?: Maybe<Social>;
    /** Application credentials like client id and secret for social logins. */
    social_tokens?: Maybe<SocialTokens>;
    /** Text to be shown at the top of the flash card like login to fynd, login to tira. */
    subtext?: Maybe<Scalars['String']['output']>;
    /** The date and time when the configuration was last updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Version of the document. */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Describes how polling will be done for the created tickets. */
export type PollForAssignment = {
    __typename?: 'PollForAssignment';
    /** Duration for polling of staff. */
    duration: Scalars['Float']['output'];
    /** Message if polling failed. */
    failure_message: Scalars['String']['output'];
    /** Message for polling. */
    message: Scalars['String']['output'];
    /** Message for successful polling. */
    success_message: Scalars['String']['output'];
};
/** Polling Payment Link Response. */
export type PollingPaymentLinkDetail = {
    __typename?: 'PollingPaymentLinkDetail';
    /** Aggregator name. */
    aggregator_name?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** HTTP status code. */
    http_status?: Maybe<Scalars['Int']['output']>;
    /** Message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Unique order id. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Unique id of payment link. */
    payment_link_id?: Maybe<Scalars['String']['output']>;
    /** URL to which the user may redirect. */
    redirect_url?: Maybe<Scalars['String']['output']>;
    /** Error. */
    status?: Maybe<Scalars['String']['output']>;
    /** HTTP status code. */
    status_code?: Maybe<Scalars['Int']['output']>;
    /** Payment confirmation updated or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Preset configuration, containing an array of pages. */
export type Preset = {
    __typename?: 'Preset';
    /** An array of pages included in the preset, each represented by an object. */
    pages?: Maybe<Array<Maybe<PageDetail>>>;
};
/** The effective price object for the product. */
export type Price = {
    __typename?: 'Price';
    /** The currency code for the currency in which the product is available. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The currency symbol for the currency in which the product is available. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The maximum price for the product across stores. */
    max?: Maybe<Scalars['Float']['output']>;
    /** The minimum price for the product across stores. */
    min?: Maybe<Scalars['Float']['output']>;
};
export type PriceAdjustmentCharge = {
    __typename?: 'PriceAdjustmentCharge';
    /** Charges amount */
    amount?: Maybe<ChargeAmount>;
    /** Code defined for charge */
    code?: Maybe<Scalars['String']['output']>;
    /** Contains distribution logic for price adjustment. */
    distribution_logic?: Maybe<ChargeDistributionLogic>;
    /** Display name for charge (charge is unique by the name) */
    name?: Maybe<Scalars['String']['output']>;
    /** Type defined for charge */
    type?: Maybe<Scalars['String']['output']>;
};
/** Price of single quantity product for seller currency and customer currency. */
export type PriceInfo = {
    __typename?: 'PriceInfo';
    /** Price before promotion and coupon amount applied for calculation. */
    add_on?: Maybe<Scalars['Float']['output']>;
    /** Currency code for all amounts. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Current per unit price of product after existing deductions. */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Original price of product. */
    marked?: Maybe<Scalars['Float']['output']>;
    /** Selling price of the product. */
    selling?: Maybe<Scalars['Float']['output']>;
};
export type PriceMinMax = {
    __typename?: 'PriceMinMax';
    /** Max price of article added in user cart. */
    max?: Maybe<Scalars['Float']['output']>;
    /** Min price of article added in user cart. */
    min?: Maybe<Scalars['Float']['output']>;
};
/** Schema for prices. */
export type Prices = {
    __typename?: 'Prices';
    /** Indicates if the refund amount was added to Fynd Cash. */
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    /** The total amount paid by the customer. */
    amount_paid?: Maybe<Scalars['Float']['output']>;
    /** The rounded-off amount paid by the customer. */
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    /** The total amount that needs to be collected from the customer. */
    amount_to_be_collected?: Maybe<Scalars['Float']['output']>;
    /** The amount calculated by the brand. */
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    /** The cashback amount earned. */
    cashback?: Maybe<Scalars['Float']['output']>;
    /** The amount of cashback applied. */
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    /** The cash on delivery charges, if applicable. */
    cod_charges?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from coupons. */
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The value of the coupon applied. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** The code of the currency used. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The symbol of the currency used. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The delivery charge for the order. */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** The discount applied to the item. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** The amount of Fynd credits used. */
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    /** The GST tax percentage applied. */
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    /** The effective price after all adjustments. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** The original marked price of the item. */
    price_marked?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from promotions. */
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The amount refunded to the customer. */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** The amount credited for refund . */
    refund_credit?: Maybe<Scalars['Float']['output']>;
    /** The transfer price of the item. */
    transfer_price?: Maybe<Scalars['Float']['output']>;
    /** The value of the goods before tax and other charges. */
    value_of_good?: Maybe<Scalars['Float']['output']>;
};
/** Denotes the priority of ticket. */
export type Priority = {
    __typename?: 'Priority';
    /** Color for priority. */
    color: Scalars['String']['output'];
    /** Display text for priority. */
    display: Scalars['String']['output'];
    /** Describes the priority of the tickets created by the form. */
    key: PriorityEnum;
};
export declare enum PriorityEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    Urgent = "urgent"
}
/** Detailed information about a product. */
export type Product = {
    __typename?: 'Product';
    /** Represents Action Object. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<ProductBrand>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<ProductBrand>>>;
    /** Represents a mapping of product categories at different levels. */
    category_map?: Maybe<ProductCategoryMap>;
    /** Color of the product, if applicable. */
    color?: Maybe<Scalars['String']['output']>;
    /** Custom JSON object for additional product data. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /** Department to which the product belongs. */
    department?: Maybe<ProductDepartment>;
    /** The long description of the product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount applied to the product, if any. */
    discount?: Maybe<Scalars['String']['output']>;
    /** A dictionary of grouped product attributes. */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /** Indicates whether the product has variants. */
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    /** A list of highlights for the product. */
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The nature of the product's images. */
    image_nature?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product can be sold as an individual product. */
    is_dependent?: Maybe<Scalars['Boolean']['output']>;
    /** The item code of the product. */
    item_code?: Maybe<Scalars['String']['output']>;
    /** This field describes the type of item, indicating the category or nature of the product. Possible values are Standard, Composite, Wet, Digital. */
    item_type?: Maybe<Scalars['String']['output']>;
    /** Media files associated with the product. */
    media?: Maybe<Array<Maybe<Media>>>;
    /** Minimum order quantity requirements for the product. */
    moq?: Maybe<Moq>;
    /** The name of the product. */
    name?: Maybe<Scalars['String']['output']>;
    /** Represents the net quantity of a product, including its unit of measurement and value. */
    net_quantity?: Maybe<NetQuantity>;
    /** Price details of the product. */
    price?: Maybe<ProductListingPriceDetails>;
    /** List of bundle/product grouping slugs mapped to the product. */
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Date and time when the product was made available online. */
    product_online_date?: Maybe<Scalars['String']['output']>;
    /** The rating of the product. */
    rating?: Maybe<Scalars['Float']['output']>;
    /** The number of ratings the product has received. */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** SEO metadata for the product. */
    seo?: Maybe<ProductSeo>;
    /** The short description of the product. */
    short_description?: Maybe<Scalars['String']['output']>;
    /** List of products marked similar to given product. */
    similars?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Product available sizes details. */
    sizes?: Maybe<ProductSizes>;
    /** A list of image URLs for the product. */
    slug: Scalars['String']['output'];
    /** Tags associated with the product for better categorization. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Teaser tag or short promotional phrase for the product. */
    teaser_tag?: Maybe<Scalars['String']['output']>;
    /** Identifiers or names of tryout versions of the product. */
    tryouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Product type or classification. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** Details of product variants. */
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
};
/** Detailed information about a product. */
export type ProductSizesArgs = {
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema of Action Object to render the product. */
export type ProductAction = {
    __typename?: 'ProductAction';
    /** Action query schema which includes list of product slugs. */
    query?: Maybe<ActionQuery>;
    /** Type of action. */
    type?: Maybe<Scalars['String']['output']>;
    /** Url of the product to render the product . */
    url?: Maybe<Scalars['String']['output']>;
};
/** Product store information of the product added in cart. */
export type ProductArticle = {
    __typename?: 'ProductArticle';
    /** Field to update custom json of the article in cart. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Meta details of the article added from cart. */
    cart_item_meta?: Maybe<Scalars['JSON']['output']>;
    /** Field to update extra meta of the article in cart. */
    extra_meta?: Maybe<Scalars['JSON']['output']>;
    /** Gift card detail if gift card applied to the product which indicates gift price, gift applicable flag and display message for the gift. */
    gift_card?: Maybe<Scalars['JSON']['output']>;
    /** Unique identifier of the article. */
    identifier?: Maybe<Scalars['JSON']['output']>;
    /** Whether the product can be purchased as a gift. It is true if the product is available for gifting and false otherwise. */
    is_gift_visible?: Maybe<Scalars['Boolean']['output']>;
    /** Article meta data. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Quantity of the product which will specially manufactured as not available in stock. */
    mto_quantity?: Maybe<Scalars['Int']['output']>;
    /** Fields to determine parent product of the product. */
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    /** Article level price details which includes base and converted prices of article. */
    price?: Maybe<ArticlePriceInfo>;
    /** List fot the unique identifier for the product grouping. */
    product_group_tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Quantity of the article added in cart. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
    seller?: Maybe<NameInformation>;
    /** List of identifiers used by sellers for the product size. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
    /** Size of the article added in cart. */
    size?: Maybe<Scalars['String']['output']>;
    /** Store information of the store which includes store name, store id and store code. */
    store?: Maybe<StoreInfo>;
    /** A list of article tags. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of the data sent in response. Possible value is article. */
    type?: Maybe<Scalars['String']['output']>;
    /** This unique identifier is assigned to the specific article. This represents item x size x location. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Availability information of the product like deliverable, out of stock, valid product etc. */
export type ProductAvailability = {
    __typename?: 'ProductAvailability';
    /** Product sizes availability. */
    available_sizes?: Maybe<Array<Maybe<ProductSizeDetailsCart>>>;
    /** Deliverable flag denotes if the product is deliverable or not. */
    deliverable?: Maybe<Scalars['Boolean']['output']>;
    /** Valid flag for the product if the product added in cart is valid to place the order. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Quantity of the product available on other store. */
    other_store_quantity?: Maybe<Scalars['Int']['output']>;
    /** Denotes if the product is available in stock. */
    out_of_stock?: Maybe<Scalars['Boolean']['output']>;
    /** All sizes of the product. */
    sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Product sizes availability. */
export type ProductAvailabilitySize = {
    __typename?: 'ProductAvailabilitySize';
    /** Display size of the product. */
    display?: Maybe<Scalars['String']['output']>;
    /** Available flag for the size of the product if that is available. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Actual value of the size. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Represents the details of a product brand. */
export type ProductBrand = {
    __typename?: 'ProductBrand';
    /** Schema to define the Action Object. */
    action?: Maybe<PageActionDetail>;
    /** It contains detailed information about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** Media object representing the logo of the product brand. */
    logo?: Maybe<Media>;
    /** Name of the product brand. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product brand. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Represents list of bundles/product groupings. */
export type ProductBundle = {
    __typename?: 'ProductBundle';
    /** Represents list of bundles/product groupings. */
    items?: Maybe<Array<Maybe<ProductGroupingDetails>>>;
};
/** Represents a mapping of product categories at different levels. */
export type ProductCategoryMap = {
    __typename?: 'ProductCategoryMap';
    /** Detailing Level 1 Category Action Object. */
    l1?: Maybe<ProductBrand>;
    /** Detailing Level 2 Category Action Object. */
    l2?: Maybe<ProductBrand>;
    /** Detailing Level 3 Category Action Object. */
    l3?: Maybe<ProductBrand>;
};
/** Response schema for comparing products with additional metadata. */
export type ProductCompareDetails = {
    __typename?: 'ProductCompareDetails';
    /** Metadata about attributes used for comparing products. */
    attributes_metadata?: Maybe<Array<Maybe<Attribute>>>;
    /** List of product details for comparison. */
    items?: Maybe<Array<Maybe<Product>>>;
    /** Subtitle or additional description for the comparison. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** Title or name of the comparison. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Represents the response for a product listing query, including product details, filters, pagination, and sorting options. */
export type ProductConnection = {
    __typename?: 'ProductConnection';
    /** List of filters available for refining the product listings. */
    filters?: Maybe<ProductFilters>;
    /** List of product details included in the response. */
    items: Array<ProductListingDetail>;
    /** Pagination details for the product listings. */
    page: PageInfo;
    /** List of sorting options available for the product listings. */
    sort_on?: Maybe<ProductSortOn>;
};
/** Represents a department with its associated details. */
export type ProductDepartment = {
    __typename?: 'ProductDepartment';
    /** Represents a media file with its associated properties, such as URL, type, and metadata. */
    logo?: Maybe<Media>;
    /** Name of the department. */
    name?: Maybe<Scalars['String']['output']>;
    /** URL-friendly version of the department's name, used in the web address to access the department's page on the platform. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the department. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
export type ProductDetailCustomOrder = {
    __typename?: 'ProductDetailCustomOrder';
    /** A boolean flag indicating whether MTO (Make to Order) is enabled or not. */
    is_custom_order?: Maybe<Scalars['Boolean']['output']>;
    /** The unit of time taken for manufacturing. */
    manufacturing_time?: Maybe<Scalars['Int']['output']>;
    /** The unit of time required for manufacturing is defined in hours or days. */
    manufacturing_time_unit?: Maybe<Scalars['String']['output']>;
};
/** Configuration for product detail features in the application. */
export type ProductDetailFeature = {
    __typename?: 'ProductDetailFeature';
    /** Indicates whether customers can request for a product. Default value is false. */
    request_product?: Maybe<Scalars['Boolean']['output']>;
    /** Shows whether the customers can choose the seller on PDP. */
    seller_selection?: Maybe<Scalars['Boolean']['output']>;
    /** Configuration to show similar products, other products from same seller, other products in same category, other products in same price range, etc. */
    similar?: Maybe<Array<Maybe<SimilarListItem>>>;
    /** Allow user to update product meta. Default value is true. */
    update_product_meta?: Maybe<Scalars['Boolean']['output']>;
};
/** Detailed information about a product. */
export type ProductDetails = {
    __typename?: 'ProductDetails';
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** The unique ID of the product's brand. */
    brand_uid?: Maybe<Scalars['Int']['output']>;
    /** The country of origin for the product. */
    country_of_origin?: Maybe<Scalars['JSON']['output']>;
    /** The long description of the product. */
    description?: Maybe<Scalars['JSON']['output']>;
    /** A dictionary of grouped product attributes. */
    grouped_attributes?: Maybe<Scalars['JSON']['output']>;
    /** Whether or not the product has a variant. */
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    /** A list of highlights for the product. */
    highlights?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** The HSN code of the product. */
    hsn_code?: Maybe<Scalars['Int']['output']>;
    /** A dictionary of product identifiers. */
    identifier?: Maybe<ProductIdentifier>;
    /** The nature of the product's images. */
    image_nature?: Maybe<Scalars['JSON']['output']>;
    /** A list of image URLs for the product. */
    images?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Whether or not the product is a set of items. */
    is_set?: Maybe<Scalars['Boolean']['output']>;
    /** The item code of the product. */
    item_code?: Maybe<Scalars['JSON']['output']>;
    /** A list of media objects for the product. */
    media?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** The name of the product. */
    name?: Maybe<Scalars['JSON']['output']>;
    /** Whether or not the product is out of stock. */
    out_of_stock?: Maybe<Scalars['Boolean']['output']>;
    /** The rating of the product. */
    rating?: Maybe<Scalars['Float']['output']>;
    /** The number of ratings the product has received. */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** The short description of the product. */
    short_description?: Maybe<Scalars['JSON']['output']>;
    /** The unique identifier for the product grouping. */
    slug?: Maybe<Scalars['JSON']['output']>;
    /** The template tag of the product. */
    template_tag?: Maybe<Scalars['JSON']['output']>;
};
/** Represents a set of filters used for refining product listings based on filter keys and values. */
export type ProductFilters = {
    __typename?: 'ProductFilters';
    /** Represents a filter key used to categorize or define filter options in product listings. */
    key?: Maybe<ProductFiltersKey>;
    /** List of filter values associated with the filter key. */
    values?: Maybe<Array<Maybe<ProductFiltersValue>>>;
};
/** Represents a filter key used to categorize or define filter options in product listings. */
export type ProductFiltersKey = {
    __typename?: 'ProductFiltersKey';
    /** Display name or label for the filter key. */
    display: Scalars['String']['output'];
    /** Type or category of the filter key (e.g., range, multivalued). */
    kind?: Maybe<Scalars['String']['output']>;
    /** URL or path to the logo associated with the filter key. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Name or identifier of the filter key. */
    name: Scalars['String']['output'];
};
/** Represents the value of a filter used in product listings. */
export type ProductFiltersValue = {
    __typename?: 'ProductFiltersValue';
    /** Number of products that match this filter value. */
    count?: Maybe<Scalars['Int']['output']>;
    /** Currency code for the currency used for price type filters. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for the price type filters. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Display name or label for the filter value. */
    display: Scalars['String']['output'];
    /** Format in which the filter value is displayed. */
    display_format?: Maybe<Scalars['String']['output']>;
    /** Whether this filter value is currently selected. */
    is_selected: Scalars['Boolean']['output'];
    /** Maximum value of the filter range. */
    max?: Maybe<Scalars['Int']['output']>;
    /** Minimum value for the range filter. */
    min?: Maybe<Scalars['Int']['output']>;
    /** Format used for the filter value in queries. */
    query_format?: Maybe<Scalars['String']['output']>;
    /** The maximum value selected by the user for range filter. */
    selected_max?: Maybe<Scalars['Int']['output']>;
    /** The minimum value selected by the user for range filter. */
    selected_min?: Maybe<Scalars['Int']['output']>;
    /** Value associated with the filter option. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Represents a group of product attributes. */
export type ProductGroupedAttribute = {
    __typename?: 'ProductGroupedAttribute';
    /** A list of product attributes within this group. */
    details?: Maybe<Array<Maybe<DetailAttribute>>>;
    /** The title or name of the attribute group. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Represents group of product mapped in a bundle. */
export type ProductGroupingDetails = {
    __typename?: 'ProductGroupingDetails';
    /** Unique identifier of the product grouping. */
    _id?: Maybe<Scalars['String']['output']>;
    /** The choice of the product grouping. */
    choice?: Maybe<Scalars['JSON']['output']>;
    /** The ID of the company that owns the product grouping. */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** User details of the creator of the document. */
    created_by?: Maybe<UserDetails>;
    /** Timestamp of the creation of the document. */
    created_on: Scalars['String']['output'];
    /** Whether the product grouping is active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** The URL for the logo of the product grouping. */
    logo?: Maybe<Scalars['String']['output']>;
    /** A dictionary containing metadata information. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** User details of the last modifier of the document. */
    modified_by?: Maybe<UserDetails>;
    /** Timestamp of the last modification of the document. */
    modified_on: Scalars['String']['output'];
    /** The name of the product grouping. */
    name: Scalars['JSON']['output'];
    /** A list of page visibilities of the product grouping. */
    page_visibility?: Maybe<Array<Maybe<PageVisibilityOfItem>>>;
    /** A list of products in the grouping. */
    products: Array<Maybe<ProductInGroup>>;
    /** Whether the products are assigned to the same store. */
    same_store_assignment?: Maybe<Scalars['Boolean']['output']>;
    /** The unique identifier for the product grouping. */
    slug?: Maybe<Scalars['JSON']['output']>;
    /** User details of the verifier of the document, if applicable. */
    verified_by?: Maybe<UserDetails>;
    /** Timestamp of when the document was verified, if applicable. */
    verified_on?: Maybe<Scalars['String']['output']>;
};
/** Contains product identifier details */
export type ProductIdentifier = {
    __typename?: 'ProductIdentifier';
    /** The Alternative Lookup Product of the item. */
    alu?: Maybe<Scalars['String']['output']>;
    /** The European Article Number (EAN) of the item. */
    ean?: Maybe<Scalars['String']['output']>;
    /** ISBN (International Standard Book Number) is a unique identifier used globally to identify books and other non-periodical publications. */
    isbn?: Maybe<Scalars['String']['output']>;
    /** The Stock Keeping Unit (SKU) code of the item. */
    sku_code?: Maybe<Scalars['String']['output']>;
    /** Universal Product Code of the item. */
    upc?: Maybe<Scalars['String']['output']>;
};
/** Product images data in different formats. */
export type ProductImage = {
    __typename?: 'ProductImage';
    /** Aspect ratio of the product image. */
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    /** Secured url of the product image. */
    secure_url?: Maybe<Scalars['String']['output']>;
    /** Bucket link url for product image. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Configuration of a product within a group/bundle. */
export type ProductInGroup = {
    __typename?: 'ProductInGroup';
    /** Whether the product can be removed from the cart. */
    allow_remove?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the product should be automatically added to the cart. */
    auto_add_to_cart?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the product should be automatically selected. */
    auto_select?: Maybe<Scalars['Boolean']['output']>;
    /** The maximum quantity of the product that can be added to the cart. */
    max_quantity: Scalars['Int']['output'];
    /** The minimum quantity of the product that can be added to the cart. */
    min_quantity?: Maybe<Scalars['Int']['output']>;
    /** The price details for the product. */
    price?: Maybe<ProductPriceDetails>;
    /** The details of the product. */
    product_details?: Maybe<ProductDetails>;
    /** The unique ID of the product in the group. */
    product_uid: Scalars['Int']['output'];
    /** The available sizes for the product. */
    sizes?: Maybe<Array<Maybe<Size>>>;
};
/** Ladder price offers details which includes list of available ladder promotion on product. */
export type ProductLadderPromotion = {
    __typename?: 'ProductLadderPromotion';
    /** Available ladder promotions offers list. */
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    /** Ladder price offers details which includes list of available ladder promotion on product. */
    currency?: Maybe<CurrencyInfo>;
};
/** List of product details included in the response. */
export type ProductListingDetail = {
    __typename?: 'ProductListingDetail';
    /** Represents Action Object. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<ProductBrand>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<ProductBrand>>>;
    /** Represents a mapping of product categories at different levels. */
    category_map?: Maybe<ProductCategoryMap>;
    /** Color of the product, if applicable. */
    color?: Maybe<Scalars['String']['output']>;
    /** Custom JSON object for additional product data. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /** The long description of the product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount applied to the product, if any. */
    discount?: Maybe<Scalars['String']['output']>;
    /** A dictionary of grouped product attributes. */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /** Indicates whether the product has variants. */
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    /** A list of highlights for the product. */
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** List of seller identifiers for the product. */
    identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The nature of the product's images. */
    image_nature?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product can be sold as an individual product. */
    is_dependent?: Maybe<Scalars['Boolean']['output']>;
    /** The item code of the product. */
    item_code?: Maybe<Scalars['String']['output']>;
    /** This field describes the type of item, indicating the category or nature of the product. Possible values are Standard, Composite, Wet, Digital. */
    item_type?: Maybe<Scalars['String']['output']>;
    /** Media files associated with the product. */
    media?: Maybe<Array<Maybe<Media>>>;
    /** Minimum order quantity requirements for the product. */
    moq?: Maybe<Moq>;
    /** The name of the product. */
    name?: Maybe<Scalars['String']['output']>;
    /** Represents the net quantity of a product, including its unit of measurement and value. */
    net_quantity?: Maybe<NetQuantity>;
    /** Price details of the product. */
    price?: Maybe<ProductListingPriceDetails>;
    /** List of bundle/product grouping slugs mapped to the product. */
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Date and time when the product was made available online. */
    product_online_date?: Maybe<Scalars['String']['output']>;
    /** The rating of the product. */
    rating?: Maybe<Scalars['Float']['output']>;
    /** The number of ratings the product has received. */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the product is available for sale. */
    sellable?: Maybe<Scalars['Boolean']['output']>;
    /** SEO metadata for the product. */
    seo?: Maybe<ApplicationItemSeo>;
    /** The short description of the product. */
    short_description?: Maybe<Scalars['String']['output']>;
    /** List of products marked similar to given product. */
    similars?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Available sizes for the product. */
    sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A list of image URLs for the product. */
    slug: Scalars['String']['output'];
    /** Tags associated with the product for better categorization. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Teaser tag or short promotional phrase for the product. */
    teaser_tag?: Maybe<Scalars['String']['output']>;
    /** Identifiers or names of tryout versions of the product. */
    tryouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Product type or classification. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** Detailed information about the variants of a product. */
    variants?: Maybe<Array<Maybe<ProductVariantDetail>>>;
};
/** Represents details of price for a product. */
export type ProductListingPrice = {
    __typename?: 'ProductListingPrice';
    /** The effective price object for the product. */
    effective?: Maybe<Price>;
    /** The effective price object for the product. */
    marked?: Maybe<Price>;
    /** The selling price object for the product. */
    selling?: Maybe<Price>;
};
/** Represents details of price for a product. */
export type ProductListingPriceDetails = {
    __typename?: 'ProductListingPriceDetails';
    /** The effective price object for the product. */
    effective?: Maybe<Price>;
    /** The effective price object for the product. */
    marked?: Maybe<Price>;
};
/** Per quantity price of the product . */
export type ProductPrice = {
    __typename?: 'ProductPrice';
    /** Price before promotion and coupon amount applied for calculation. */
    add_on?: Maybe<Scalars['Float']['output']>;
    /** Currency code of the price defined for the product. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol of the price defined for the product. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Selling price of the product . */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Maximum price of the product . */
    marked?: Maybe<Scalars['Float']['output']>;
    /** Selling price of the product. */
    selling_price?: Maybe<Scalars['Float']['output']>;
};
/** Detailed pricing information for a product group. */
export type ProductPriceDetails = {
    __typename?: 'ProductPriceDetails';
    /** The currency code for the prices. */
    currency?: Maybe<Scalars['JSON']['output']>;
    /** The maximum effective price of the product group. */
    max_effective?: Maybe<Scalars['Float']['output']>;
    /** The minimum marked price of the product group. */
    max_marked?: Maybe<Scalars['Float']['output']>;
    /** The minimum effective price of the product group. */
    min_effective?: Maybe<Scalars['Float']['output']>;
    /** The minimum marked price of the product group. */
    min_marked?: Maybe<Scalars['Float']['output']>;
};
/** Price of single quantity product for seller currency and customer currency. */
export type ProductPriceInfo = {
    __typename?: 'ProductPriceInfo';
    /** Per quantity price of the product . */
    base?: Maybe<ProductPrice>;
    /** Per quantity price of the product . */
    converted?: Maybe<ProductPrice>;
};
/** Details related to SEO of an entry. */
export type ProductSeo = {
    __typename?: 'ProductSEO';
    /** The contents of og:description. */
    description?: Maybe<Scalars['JSON']['output']>;
    /** The SEO title. */
    title?: Maybe<Scalars['JSON']['output']>;
};
/** Response schema for product size sellers. */
export type ProductSellers = {
    __typename?: 'ProductSellers';
    /** A list of products with size and price details available from various sellers. */
    items?: Maybe<Array<Maybe<ProductSizePrice>>>;
    /** Information about the pagination of the results. */
    page?: Maybe<PageInfo>;
    /** A list of sorting and filtering criteria applied to the sellers' data. */
    sort_on?: Maybe<SellerSortOn>;
};
/** Details of a product set. */
export type ProductSet = {
    __typename?: 'ProductSet';
    /** The quantity of products in the set. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The size distribution of the product set. */
    size_distribution?: Maybe<ProductSetDistribution>;
};
/** Distribution details of a product set. */
export type ProductSetDistribution = {
    __typename?: 'ProductSetDistribution';
    /** A list of size distributions in the product set. */
    sizes?: Maybe<Array<Maybe<ProductSetDistributionSize>>>;
};
/** Distribution details of product sizes for Set type of Products. */
export type ProductSetDistributionSize = {
    __typename?: 'ProductSetDistributionSize';
    /** The number of pieces available in this size. */
    pieces?: Maybe<Scalars['Int']['output']>;
    /** The number of pieces available in this size. */
    size?: Maybe<Scalars['String']['output']>;
};
/** Data containing priority and frequency of sitemap. */
export type ProductSiteMap = {
    __typename?: 'ProductSiteMap';
    /** Value of sitemap frequency change denoting how frequently the content changes. */
    frequency?: Maybe<Scalars['String']['output']>;
    /** Value of sitemap priority randing from 0.0 to 1.0. */
    priority?: Maybe<Scalars['Float']['output']>;
};
/** Represents the size details of a product, including dimensions, weight, and availability. */
export type ProductSizeDetails = {
    __typename?: 'ProductSizeDetails';
    /** The dimensions of the product size. */
    dimension?: Maybe<Dimension>;
    /** Display name of the product size. */
    display?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product size is available for purchase. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** The quantity of the product size available. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** List of identifiers used by sellers for the product size. */
    seller_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The value or label representing the product size. */
    value?: Maybe<Scalars['String']['output']>;
    /** The weight of the product size. */
    weight?: Maybe<Weight>;
};
/** Product sizes availability. */
export type ProductSizeDetailsCart = {
    __typename?: 'ProductSizeDetailsCart';
    /** Display size of the product. */
    display?: Maybe<Scalars['String']['output']>;
    /** Available flag for the size of the product if that is available. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Actual value of the size. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Response schema for product size price. */
export type ProductSizePrice = {
    __typename?: 'ProductSizePrice';
    /** Information about serviceability algorithm. */
    article_assignment?: Maybe<ArticleAssignment>;
    /** This unique identifier is assigned to the specific article. This represents item x size x location. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** Estimated delivery time for the product, indicating when the customer can expect to receive their order based on the shipping options and location. */
    delivery_promise?: Maybe<DeliveryPromiseFormatted>;
    /** Amount or percentage of discount applied to the product's price, showing the savings for the customer. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Discount countdown timer for a product. */
    discount_meta?: Maybe<DiscountMeta>;
    /** Collection of attributes grouped together, which provides detailed characteristics of the product, such as color, size, material, etc. */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /** Whether Cash on Delivery (COD) is available for this product. It is true if COD is available and false otherwise. */
    is_cod?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the product can be purchased as a gift. It is true if the product is available for gifting and false otherwise. */
    is_gift?: Maybe<Scalars['Boolean']['output']>;
    /** Type of item, indicating the category or nature of the product. Possible values are Standard, Composite, Wet, Digital. */
    item_type?: Maybe<Scalars['String']['output']>;
    /** Longitude and latitude coordinates, possibly indicating the location of the store or warehouse where the product is stocked. */
    long_lat?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    /** Attributes specific to the marketplace, such as ratings, reviews, shipping options, and other marketplace-specific details. */
    marketplace_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /** Postal code or zip code for which the product's availability and delivery options are being checked. */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** Price details of product. Includes currency details, MRP, Selling price. */
    price?: Maybe<ProductStockPrice>;
    /** The price of a single unit of the product. It helps customers understand the cost per item when purchasing multiple units. */
    price_per_piece?: Maybe<ProductStockPrice>;
    /** Price per unit of measurement for products sold in quantities (e.g., price per kilogram, liter, etc.), helping customers compare unit prices. */
    price_per_unit?: Maybe<ProductStockUnitPrice>;
    /** Available quantity of the product in stock. It shows the number of units available for purchase. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Information about the return policy for the product, including conditions, timeframes, and any specific instructions or restrictions. */
    return_config?: Maybe<ReturnConfig>;
    /** Seller offering the product, including the seller's name, rating, and other relevant information. */
    seller?: Maybe<Seller>;
    /** Number of sellers offering this product. It indicates the level of competition and availability from different sellers. */
    seller_count?: Maybe<Scalars['Int']['output']>;
    /** Collection or bundle of items that are sold together as a set, detailing the components included in the set. */
    set?: Maybe<ProductSet>;
    /** Special badges or labels assigned to the product, such as "Bestseller," "New Arrival," or "Limited Edition.". */
    special_badge?: Maybe<Scalars['String']['output']>;
    /** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
    store?: Maybe<AvailableStore>;
    /** Details about serviceability attributes. */
    strategy_wise_listing?: Maybe<Array<Maybe<StrategyWiseListing>>>;
};
/** Information about the availability of product sizes in different stores. */
export type ProductSizeStores = {
    __typename?: 'ProductSizeStores';
    /** Number of stores where the product size is available. */
    count?: Maybe<Scalars['Int']['output']>;
};
/** Details about different sizes of the product, including pricing and availability. */
export type ProductSizes = {
    __typename?: 'ProductSizes';
    /** Discount information applicable to the product sizes. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Information about the discount countdown timer for a product. */
    discount_meta?: Maybe<DiscountMeta>;
    /** Whether the product supports multiple sizes. */
    multi_size?: Maybe<Scalars['Boolean']['output']>;
    /** Contains price information for product sizes. */
    price?: Maybe<ProductListingPrice>;
    /** Pricing details for product. */
    price_per_piece?: Maybe<ProductListingPrice>;
    /** Whether the product sizes are available for sale. */
    sellable?: Maybe<Scalars['Boolean']['output']>;
    /** Size chart associated with the product sizes. */
    size_chart?: Maybe<SizeChart>;
    /** List of available sizes for the product. */
    size_details?: Maybe<Array<Maybe<ProductSizeDetails>>>;
    /** Information about the availability of product sizes in different stores. */
    stores?: Maybe<ProductSizeStores>;
};
/** Represents sorting options available for products, including metadata and selection status. */
export type ProductSortOn = {
    __typename?: 'ProductSortOn';
    /** Display name or label for the sorting option. */
    display?: Maybe<Scalars['String']['output']>;
    /** Indicates whether this sorting option is currently selected. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** URL or path to the logo associated with the sorting option. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Name or identifier of the sorting option. */
    name?: Maybe<Scalars['String']['output']>;
    /** Value used to specify the sorting order (e.g., price_asc, discount_dsc). */
    value?: Maybe<Scalars['String']['output']>;
};
/** Pricing details for product. */
export type ProductStockPrice = {
    __typename?: 'ProductStockPrice';
    /** The currency code for which the product is available. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The currency symbol for the currency in which the product is available. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The effective or final price for the product at the given pincode. */
    effective?: Maybe<Scalars['Float']['output']>;
    /** The marked price of the product. */
    marked?: Maybe<Scalars['Float']['output']>;
    /** The selling price of the product. */
    selling?: Maybe<Scalars['Float']['output']>;
};
/** Unit price details for product. */
export type ProductStockUnitPrice = {
    __typename?: 'ProductStockUnitPrice';
    /** The currency code for the unit price. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The currency symbol for the unit price. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The unit price of the product. */
    price?: Maybe<Scalars['Float']['output']>;
    /** The unit of measure for the product. */
    unit?: Maybe<Scalars['String']['output']>;
};
/** Represents the details of a product variant, including display type, header, logo, and associated items. */
export type ProductVariant = {
    __typename?: 'ProductVariant';
    /** The type of display for the product variant (e.g., image, text, image, color). */
    display_type?: Maybe<Scalars['String']['output']>;
    /** Group ID used to group variants. */
    group_id?: Maybe<Scalars['String']['output']>;
    /** Header or title for the product variant section. */
    header?: Maybe<Scalars['String']['output']>;
    /** List of product variant items. */
    items?: Maybe<Array<Maybe<ProductVariantItem>>>;
    /** Attribute identifier of the variant. */
    key?: Maybe<Scalars['String']['output']>;
    /** URL or path to the logo associated with the product variant. */
    logo?: Maybe<Scalars['String']['output']>;
};
/** Represents the details of a product variant, including display type, header, logo, and associated items. */
export type ProductVariantDetail = {
    __typename?: 'ProductVariantDetail';
    /** The type of display for the product variant (e.g., image, text, image, color). */
    display_type?: Maybe<Scalars['String']['output']>;
    /** Header or title for the product variant section. */
    header?: Maybe<Scalars['String']['output']>;
    /** List of product variant items. */
    items?: Maybe<Array<Maybe<ProductVariantItem>>>;
    /** Attribute identifier of the variant. */
    key?: Maybe<Scalars['String']['output']>;
    /** The total number of product variants available. */
    total?: Maybe<Scalars['Int']['output']>;
};
/** Details of a specific product variant. */
export type ProductVariantItem = {
    __typename?: 'ProductVariantItem';
    /** Custom JSON object for additional data related to the product. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Custom metadata fields associated with the product. */
    _custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema of Action Object to render to the variant product. */
    action?: Maybe<PageActionDetail>;
    /** Color code or representation for the variant. */
    color?: Maybe<Scalars['String']['output']>;
    /** Name of the color for the variant. */
    color_name?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product variant is available for purchase. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Media files associated with the product variant. */
    medias?: Maybe<Array<Maybe<Media>>>;
    /** Name of the product variant. */
    name?: Maybe<Scalars['String']['output']>;
    /** URL-friendly identifier for the product. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product variant. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** Value or label representing the product variant. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Product details. */
export type Products3Input = {
    /** The unique identifier for the product. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
    /** The quantity of the product. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema for products filters. */
export type ProductsDataUpdatesFiltersInput = {
    /** The quantity of the product. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema for product data updates. */
export type ProductsDataUpdatesInput = {
    /** Information about the data to be updated. */
    data?: InputMaybe<Scalars['JSON']['input']>;
    /** Criteria applied to filter the products. */
    filters?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesFiltersInput>>>;
};
/** Schema for product reasons data. */
export type ProductsReasonsDataInput = {
    /** The unique identifier for the reason. */
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    /** The text describing the reason. */
    reason_text?: InputMaybe<Scalars['String']['input']>;
};
/** Schema for product reasons filters. */
export type ProductsReasonsFiltersInput = {
    /** The unique identifier for the product. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
    /** The quantity of the product. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema for product reasons. */
export type ProductsReasonsInput = {
    /** Schema for product reasons data. */
    data?: InputMaybe<ProductsReasonsDataInput>;
    /** Criteria applied to filter the products. */
    filters?: InputMaybe<Array<InputMaybe<ProductsReasonsFiltersInput>>>;
};
/** Describes the response on successful user profile update. */
export type ProfileEditSuccess = {
    __typename?: 'ProfileEditSuccess';
    /** The country specific prefix for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Email id of user. */
    email?: Maybe<Scalars['String']['output']>;
    /** Information about the operation's result. */
    message?: Maybe<Scalars['String']['output']>;
    /** The user's mobile number without the country code. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Unique registration token for user. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** A random uuid string used to track the request. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** Unique token to identify the request for OTP verification in case of unverified email. */
    resend_email_token?: Maybe<Scalars['String']['output']>;
    /** Time in seconds before an request can be resent. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** A token used to authorize the resending of request. */
    resend_token?: Maybe<Scalars['String']['output']>;
    /** Whether the operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** If user is registered or not. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to send a link to verify the registered email id of the user. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to send a OTP to verify the registered email id of the user. */
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to send a OTP to verify the registered phone of the user. */
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for promise. */
export type Promise = {
    __typename?: 'Promise';
    /** Indicates whether the promise details should be shown. */
    show_promise?: Maybe<Scalars['Boolean']['output']>;
    /** Schema for time stamp data. */
    timestamp?: Maybe<TimeStampData>;
};
/** Min and Max Delivery promise formatted timestamp. */
export type PromiseFormatted = {
    __typename?: 'PromiseFormatted';
    /** Maximum Delivery promise formatted timestamp. */
    max?: Maybe<Scalars['String']['output']>;
    /** Minimum Delivery promise formatted timestamp. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Shipment level promise times. */
export type PromiseTimestamp = {
    __typename?: 'PromiseTimestamp';
    /** Maximum Promise for the shipment. */
    max?: Maybe<Scalars['Float']['output']>;
    /** Minimum delivery promise time for the shipment. */
    min?: Maybe<Scalars['Float']['output']>;
};
/** Loyalty points message data. */
export type PromoMeta = {
    __typename?: 'PromoMeta';
    /** Loyalty points message denotes how much loyalty points and applied and how much left with the user. */
    message?: Maybe<Scalars['String']['output']>;
};
/** Promotion offer details includes promotion id, buy rules, offer text, promotion type, promotion name, promotion group, discount rules, free gift items list and promo description. */
export type PromotionOffer = {
    __typename?: 'PromotionOffer';
    /** Buy rules of promotion which is available on product. */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Offer details including T&amp;C of the promotion which is avaiable on product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of promotions which is avaiable on product. */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Details of free gift items which included item id, brand name, item name, item slug, item price and item image url. */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** Promotion id of the promotion which is available on product. */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title of the promotion which is available on product. */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Group of the promotion which is available on product. */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Datetime ISO String for promotion end date which is available on product. */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Promotion offer response detail which incluedes available promotions list. */
export type PromotionOffersResponse = {
    __typename?: 'PromotionOffersResponse';
    /** Available promotion details which are available on product which includes promotion data like promotion id, promotion name, buy rules, discount rules validity dates etc. */
    available_promotions?: Maybe<Array<Maybe<PromotionOffer>>>;
};
/** Contains List of promotions data which are applicable on cart/product. */
export type PromotionPaymentOffer = {
    __typename?: 'PromotionPaymentOffer';
    /** Application id on which the promotion was created. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Buy rules of promotions which denotes if the rules matches than only promotion is applicable. */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Article Price on which promotion calculated like effective price or marked price. */
    calculate_on?: Maybe<Scalars['String']['output']>;
    /** Offer details including T&amp;C of the promotion which is avaiable on cart. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of promotions which is avaiable on cart. */
    discount_rules?: Maybe<Scalars['JSON']['output']>;
    /** Promotion id of the promotion which is available on cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title of the promotion which is available on cart. */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Group promotion which is available on cart. */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Name of the promotion which is available on cart. */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type of the promotion which is availalbe on cart. */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Returns a array containing the available offers (if exists) on product via promotions. Refer `PromotionPaymentOffersResponse` for more details. */
export type PromotionPaymentOffers = {
    __typename?: 'PromotionPaymentOffers';
    /** List of promotions data which are applicable on cart/product. */
    promotions?: Maybe<Array<Maybe<PromotionPaymentOffer>>>;
    /** Success flag of get payment offers API response. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. */
export type Promotions = {
    __typename?: 'Promotions';
    /** available promotion details which are available on product which includes promotion data like promotion id, promotion name, buy rules, discount rules validity dates etc. */
    available_promotions?: Maybe<Array<Maybe<LadderPriceOfferDetails>>>;
};
/** An object representing a single property with various attributes. */
export type PropDetail = {
    __typename?: 'PropDetail';
    /** The category of the property. */
    category?: Maybe<Scalars['String']['output']>;
    /** The ID of the property. */
    id?: Maybe<Scalars['String']['output']>;
    /** Additional information about the property. */
    info?: Maybe<Scalars['String']['output']>;
    /** The label of the property. */
    label?: Maybe<Scalars['String']['output']>;
    /** The type of the property. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Various static properties. */
export type Props = {
    __typename?: 'Props';
    /** Configuration object holding static values for the application. */
    props?: Maybe<Array<Maybe<PropDetail>>>;
};
export declare enum PushTokenAction {
    Create = "create",
    Reset = "reset",
    Update = "update"
}
/** The request schema for creating or editing a push token includes the nature of the operation specifications of the push token and the type of push token owner. */
export type PushtokenReqInput = {
    /** The type of operation to perform with the push token, such as create, update, or reset. */
    action?: InputMaybe<PushTokenAction>;
    /** Unique identifier used to identify a bundle. */
    bundle_identifier?: InputMaybe<Scalars['String']['input']>;
    /** A string of codes containing comprehensive data that identifies a identity of requester. */
    push_token?: InputMaybe<Scalars['String']['input']>;
    /** Source address of the requestee. */
    type?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier used to identify a device. */
    unique_device_id?: InputMaybe<Scalars['String']['input']>;
};
/** Response schema for QR code api that returns the original Link, which is the URL encoded by the QR code, and svg, which is the QR code in SVG format. */
export type QrCodeResp = {
    __typename?: 'QRCodeResp';
    /** Original url that was used to encoded url into a QR code. */
    link?: Maybe<Scalars['String']['output']>;
    /** String representation of the QR Code in SVG format. */
    svg?: Maybe<Scalars['String']['output']>;
};
/** Configuration for the QR feature. */
export type QrFeature = {
    __typename?: 'QrFeature';
    /** Whether sharing of mobile app via QR code is allowed. Default value is false. */
    application?: Maybe<Scalars['Boolean']['output']>;
    /** Whether sharing collection via QR code is allowed. Default value is false. */
    collections?: Maybe<Scalars['Boolean']['output']>;
    /** Whether sharing product via QR code is allowed. Default value is false. */
    products?: Maybe<Scalars['Boolean']['output']>;
};
export type Query = {
    __typename?: 'Query';
    /** Get a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. */
    address?: Maybe<Address>;
    /** List all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. */
    addresses?: Maybe<Addresses>;
    /** Get aggregator secret key of all payment gateways utilized for payments when using the SDK for the payment gateway. */
    aggregatorsConfig?: Maybe<AggregatorsConfigDetail>;
    /** Get a list of countries within the specified delivery zones for that application. */
    allCountries?: Maybe<CountryList>;
    /** Get details of the current sales channel. */
    applicationConfiguration?: Maybe<ApplicationConfiguration>;
    /** Query to get details about application content like blog, faq, faqCategories etc. */
    applicationContent?: Maybe<ApplicationContent>;
    /** Get the theme configuration and template details of a theme applied to the application. */
    appliedTheme?: Maybe<ThemeDetail>;
    /** Get information related to a specific blog such as it's contents, author, publish date, SEO related information. */
    blog?: Maybe<Blog>;
    /** Get metadata of a brand such as name, information, logo, banner, etc. */
    brand?: Maybe<BrandDetail>;
    /** Get metadata of a brand such as name, information, logo, banner, etc. */
    brands?: Maybe<BrandConnection>;
    /** List offer discounts with information about quantity and seller. One offer is marked with a "best" flag, indicating it as the best offer among the list. */
    bulkDiscountOffers?: Maybe<BulkDiscountOffers>;
    /** Get details of a cart linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. */
    cart?: Maybe<Cart>;
    /** Get shipment details for the items in a cart, specific to the selected address. Shipment details include delivery promises, seller information, item details, and other relevant information. */
    cartShipmentDetails?: Maybe<CartShipmentsResponse>;
    /** List all available product categories. Also, users can filter the categories by department. */
    categories?: Maybe<Categories>;
    /** Get detailed information about a specific product category using its slug and get metadata of a category such as name, information, logo, banner, etc. */
    category?: Maybe<Category>;
    /** Get detailed information about a specific collection using its slug. */
    collection?: Maybe<CollectionDetail>;
    /** Fetch items within a particular collection identified by its slug. */
    collectionItems?: Maybe<CollectionItems>;
    /** List of curated product collections with filtering options based on tags and collection names. */
    collections?: Maybe<CollectionConnection>;
    /** List of supported countries. */
    countries?: Maybe<CountryConnection>;
    /** Get details about a particular country and its address format customized for different business scenarios. */
    country?: Maybe<CountryDetail>;
    /** List all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. */
    coupons?: Maybe<Coupons>;
    /** List available currencies. */
    currencies?: Maybe<Array<Maybe<Currency>>>;
    /** Get currency configuration of the sales channel. */
    currency?: Maybe<Currency>;
    /** Get the consent provided by the user for receiving communication. */
    customerCommunicationConsent?: Maybe<CommunicationConsent>;
    /** List all departments associated with available products. */
    departments?: Maybe<Array<Maybe<Department>>>;
    /** Get a specific FAQ using its slug identifier. */
    faq?: Maybe<Faq>;
    /** List categories for organizing FAQs. */
    faqCategory?: Maybe<CategoryBySlug>;
    /** List categories for organizing FAQs. */
    faqsByCategory?: Maybe<FaQs>;
    /** Get a list of products or brands the user is following. */
    followedListing?: Maybe<FollowListing>;
    /** Get the total number of followers for a specific item by its ID. */
    followerCount?: Maybe<FollowerCount>;
    /** List all the products associated with a brand, collection or category in a random order. */
    homeProducts?: Maybe<HomeProducts>;
    /** List stores where specified products are currently in stock. */
    inStockLocations?: Maybe<StockLocations>;
    /** Get geographical data for a specific type of locality based on the provided filters. For instance, obtain a list of cities for a given country and state. */
    localities?: Maybe<LocalityConnection>;
    /** Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. */
    locality?: Maybe<Locality>;
    /** Get order details such as tracking details, shipment, store information using Fynd Order ID. */
    order?: Maybe<Order>;
    /** Get all orders associated with a customer account. */
    orders?: Maybe<OrderConnection>;
    /** Get detailed information for a specific page within the theme. */
    page?: Maybe<CustomPageDetail>;
    /** Get Payment details. */
    payment?: Maybe<Payment>;
    /** Get payment link details. */
    paymentLinkDetail?: Maybe<PaymentLinkDetail>;
    /** Get available payment methods on the payment page, specifying the aggregator for each option, such as 'Netbanking powered by Juspay' and 'Card powered by Razorpay'. */
    paymentModeRoutes?: Maybe<PaymentModeRouteDetail>;
    /** Retrieve platform sales channel authentication configuration. */
    platformConfig?: Maybe<PlatformConfig>;
    /** Get available payment methods on the payment page for POS, specifying the aggregator for each option, such as 'CARD powered by Juspay' and 'QR powered by Razorpay'. */
    posPaymentModeRoutes?: Maybe<PaymentModeRouteDetail>;
    /** Get product details such as price, attributes, HSN code, SKU code, etc. */
    product?: Maybe<Product>;
    /** Get products bundles to the one specified by its slug. */
    productBundles?: Maybe<ProductBundle>;
    /** Get all the products that have the same category. */
    productComparison?: Maybe<ProductCompareDetails>;
    /** Get ladder offers associated for the items in the cart. Ladder offers provide discounts or special pricing based on item quantity, allowing users to benefit from bulk purchases or promotional deals. */
    productLadderPromotion?: Maybe<ProductLadderPromotion>;
    /** Get the price of a product size at all the selling locations near to a PIN Code. */
    productPrice?: Maybe<ProductSizePrice>;
    /** List all sellers offering a specific product identified by its slug and size. */
    productSellers?: Maybe<ProductSellers>;
    /** List all products available in the catalog. It supports filtering based on product name, brand, department, category, collection, and more, while also offering sorting options based on factors like price, ratings, discounts, and other relevant criteria. */
    products?: Maybe<ProductConnection>;
    /** List top 5 payment offers available for current product. */
    promotionPaymentOffers?: Maybe<PromotionPaymentOffers>;
    /** List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. */
    promotions?: Maybe<Promotions>;
    /** Get details about the active card aggregator used by the user, including the aggregator's name. You can refresh the data by setting the 'refresh' parameter to true if needed. */
    redirectToAggregator?: Maybe<RedirectToAggregatorDetail>;
    /** Get Refund details. */
    refund?: Maybe<Refund>;
    /** Get products, brands, or categories based on a search query, which can be a partial or full name match. */
    searchProduct?: Maybe<SearchProduct>;
    /** Get cart items from the shared cart link based on unique token. */
    sharedCartDetails?: Maybe<SharedCartItems>;
    /** Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. */
    shipment?: Maybe<Shipment>;
    /** Get previously created short link using its hash identifier. */
    shortLink?: Maybe<ShortLink>;
    /** Get a slideshow using its `slug`. */
    slideshow?: Maybe<Slideshow>;
    /** Get details about a store based on its location Id. */
    store?: Maybe<Store>;
    /** List all stores associated with the sales channel. */
    stores?: Maybe<StoreConnection>;
    /** Use this nested query to get details of customForm, ticket details. */
    support?: Maybe<Support>;
    /** Use this query to fetch details like appliedTheme, previewTheme, themePages and details. */
    theme?: Maybe<Theme>;
    /** Use this nested query to retrieve user details like if the User isLoggedIn or not, to logout, to get activeSessionList and to check if hasPassword set or not. */
    user?: Maybe<User>;
    /** Get the list of user attributes. */
    userAttributes?: Maybe<UserAttributes>;
    /** Check whether user is already registered or not to the sales channel. */
    userExists?: Maybe<UserExists>;
    /** Validate the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. */
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
    includeCodCharges?: InputMaybe<Scalars['Boolean']['input']>;
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
export type QueryOrderArgs = {
    orderId: Scalars['String']['input'];
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
    amount: Scalars['Float']['input'];
    cardReference?: InputMaybe<Scalars['String']['input']>;
    cartId: Scalars['String']['input'];
    checkoutMode: Scalars['String']['input'];
    pincode: Scalars['String']['input'];
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    userDetails?: InputMaybe<Scalars['String']['input']>;
};
export type QueryPlatformConfigArgs = {
    name?: InputMaybe<Scalars['String']['input']>;
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
export type QueryPromotionPaymentOffersArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    uid?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryPromotionsArgs = {
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    promotionGroup?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
export type QueryRedirectToAggregatorArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
    source?: InputMaybe<Scalars['String']['input']>;
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
export type QueryUserAttributesArgs = {
    slug?: InputMaybe<Scalars['String']['input']>;
};
export type QueryUserExistsArgs = {
    q?: InputMaybe<Scalars['String']['input']>;
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
/** Schema for question. */
export type QuestionSet = {
    __typename?: 'QuestionSet';
    /** The text displayed for the question. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the question. */
    id?: Maybe<Scalars['Int']['output']>;
};
/** Price raw breakup of the cart which denotes cod charge, convinience fee, coupon amount, delivery charge, discount, loyalty points, gift card, gst charge, etc. */
export type RawBreakup = {
    __typename?: 'RawBreakup';
    /** Cod charge value applied to cart. This is applied when user select payment mode as COD. */
    cod_charge?: Maybe<Scalars['Float']['output']>;
    /** Convenience fee amount applied to cart. */
    convenience_fee?: Maybe<Scalars['Float']['output']>;
    /** Coupon amount applied to cart. */
    coupon?: Maybe<Scalars['Float']['output']>;
    /** Delivery charge applied to cart. */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** Discount amount recieved on cart. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Loyalty points applied on cart. */
    fynd_cash?: Maybe<Scalars['Float']['output']>;
    /** Gift cart amount applied on cart. */
    gift_card?: Maybe<Scalars['Float']['output']>;
    /** GST charges applied on cart. */
    gst_charges?: Maybe<Scalars['Float']['output']>;
    /** Total of payment modes by which payment is going to be done. */
    mop_total?: Maybe<Scalars['Float']['output']>;
    /** Maximum price total amount of all products in cart. */
    mrp_total?: Maybe<Scalars['Float']['output']>;
    /** Selling price amount of all products in cart. */
    subtotal?: Maybe<Scalars['Float']['output']>;
    /** Total payable amount by the customer. */
    total?: Maybe<Scalars['Float']['output']>;
    /** Total amount of charges applied on cart. */
    total_charge?: Maybe<Scalars['Float']['output']>;
    /** Total value of goods after all discount, coupons and promotion applied of all products in cart. */
    vog?: Maybe<Scalars['Float']['output']>;
    /** Total amount will be saved if customer places the order. */
    you_saved?: Maybe<Scalars['Float']['output']>;
};
/** Razorpay config detail schema. */
export type RazorPayAggregatorConfig = {
    __typename?: 'RazorPayAggregatorConfig';
    /** The API associated with the cards. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Schema for reasons data. */
export type ReasonsDataInput = {
    /** Reasons data for shipments. */
    entities?: InputMaybe<Array<InputMaybe<EntitiesReasonsInput>>>;
    /** Reasons data for bags. */
    products?: InputMaybe<Array<InputMaybe<ProductsReasonsInput>>>;
};
/** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
export type RedirectDevice = {
    __typename?: 'RedirectDevice';
    /** Fallback URL to redirect users to the app store or a web page if the app is not installed when they click the link. */
    link?: Maybe<Scalars['String']['output']>;
    /** Type of fallback used to redirect users to the app store or a web page if the app is not installed when they click the link. */
    type?: Maybe<RedirectType>;
};
/** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
export type RedirectDeviceInput = {
    /** Fallback URL to redirect users to the app store or a web page if the app is not installed when they click the link. */
    link?: InputMaybe<Scalars['String']['input']>;
    /** Type of fallback used to redirect users to the app store or a web page if the app is not installed when they click the link. */
    type?: InputMaybe<RedirectType>;
};
/** Redirect to aggregator response. */
export type RedirectToAggregatorDetail = {
    __typename?: 'RedirectToAggregatorDetail';
    /** Redirect URL. */
    data: RedirectUrl;
    /** Status updated or not. */
    success: Scalars['Boolean']['output'];
};
export declare enum RedirectType {
    AppStore = "app_store",
    Web = "web"
}
/** Redirect URL. */
export type RedirectUrl = {
    __typename?: 'RedirectUrl';
    /** URL to which the user may redirect. */
    signup_url: Scalars['String']['output'];
    /** Aggregator Operation is successful or not. */
    status: Scalars['Boolean']['output'];
};
/** Redirects schema for redirection configuration for different mediums like device and web. */
export type Redirects = {
    __typename?: 'Redirects';
    /** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    android?: Maybe<RedirectDevice>;
    /** Flag for overriding redirection traffic to the web if the app is not installed when the link is clicked. */
    force_web?: Maybe<Scalars['Boolean']['output']>;
    /** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    ios?: Maybe<RedirectDevice>;
    /** Redirection schema for web that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    web?: Maybe<WebRedirect>;
};
/** Redirects schema for redirection configuration for different mediums like device and web. */
export type RedirectsInput = {
    /** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    android?: InputMaybe<RedirectDeviceInput>;
    /** Flag for overriding redirection traffic to the web if the app is not installed when the link is clicked. */
    force_web?: InputMaybe<Scalars['Boolean']['input']>;
    /** Redirection schema for device that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    ios?: InputMaybe<RedirectDeviceInput>;
    /** Redirection schema for web that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
    web?: InputMaybe<WebRedirectInput>;
};
/** Get refund details. */
export type Refund = {
    __typename?: 'Refund';
    /** Lists available refund modes, such as UPI, providing details like display name, logo, and ID for each mode. */
    active_refund_transfer_modes?: Maybe<ActiveRefundTransferModes>;
    /** Get beneficiary details like bank name, ifsc code, branch name associated with a specific order for refund processing. */
    order_beneficiaries_detail?: Maybe<OrderBeneficiaryDetail>;
    /** Get beneficiaries associated with the user for processing refunds, based on the provided order ID. */
    user_beneficiaries_detail?: Maybe<OrderBeneficiaryDetail>;
};
/** Get refund details. */
export type RefundOrder_Beneficiaries_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Get refund details. */
export type RefundUser_Beneficiaries_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Refund account Response. */
export type RefundAccountResponse = {
    __typename?: 'RefundAccountResponse';
    /** Refund account data. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Flag for verification of refund. */
    is_verified_flag?: Maybe<Scalars['Boolean']['output']>;
    /** Response message. */
    message: Scalars['String']['output'];
    /** Success or failure flag. */
    success: Scalars['Boolean']['output'];
};
/** Schema representing the response received upon a successful user registration using a form. */
export type RegisterFormSuccess = {
    __typename?: 'RegisterFormSuccess';
    /** The country specific prefix for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** The email address provided during registration. */
    email?: Maybe<Scalars['String']['output']>;
    /** A string containing additional information about the operation's result. */
    message?: Maybe<Scalars['String']['output']>;
    /** The user's phone mobile without the country code. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** A token used for completing the registration process. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** A random uuid string used to track the registration response. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** A token used to authorize the resending of an OTP via email. */
    resend_email_token?: Maybe<Scalars['String']['output']>;
    /** The time in seconds before an OTP can be resent. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** A token used to authorize the resending of an OTP. */
    resend_token?: Maybe<Scalars['String']['output']>;
    /** A boolean value indicating whether the registration operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the user already exists. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    /** Whether email OTP verification is required. */
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    /** Whether mobile OTP verification is required. */
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
/** Structure of mandatory fields while registering user. */
export type RegisterRequiredFields = {
    __typename?: 'RegisterRequiredFields';
    /** Structure of email configuration. */
    email?: Maybe<RequiredFieldDetail>;
    /** Structure of phone configuration. */
    mobile?: Maybe<RequiredFieldDetail>;
};
/** Configuration for the registration page of the application. */
export type RegistrationPageFeature = {
    __typename?: 'RegistrationPageFeature';
    /** Shows whether a form to collect the address of the store, should be displayed upon visiting the website. */
    ask_store_address?: Maybe<Scalars['Boolean']['output']>;
};
/** An object containing theme release details */
export type Release = {
    __typename?: 'Release';
    /** The release notes of the theme. */
    notes?: Maybe<Scalars['String']['output']>;
    /** The version of the theme. */
    version?: Maybe<Scalars['String']['output']>;
};
/** Render HTML Request. */
export type RenderHtmlRequestInput = {
    /** Base64 encoded html string. */
    base64_html: Scalars['String']['input'];
    /** Return Type of API. */
    returntype?: InputMaybe<Scalars['String']['input']>;
};
/** Render HTML Response. */
export type RenderHtmlResponse = {
    __typename?: 'RenderHtmlResponse';
    /** HTML string. */
    html?: Maybe<Scalars['String']['output']>;
};
/** Structure of email/mobile configuration. */
export type RequiredFieldDetail = {
    __typename?: 'RequiredFieldDetail';
    /** Is email/phone mandatory for user to register on a application or not. */
    is_required?: Maybe<Scalars['Boolean']['output']>;
    /** Level of email/phone mandatory hard is mandatory and soft is optional. */
    level?: Maybe<Scalars['String']['output']>;
};
/** Mandatory fields for user when registering as a user. */
export type RequiredFields = {
    __typename?: 'RequiredFields';
    /** Structure of email configuration. */
    email?: Maybe<RequiredFieldDetail>;
    /** Structure of phone configuration. */
    mobile?: Maybe<RequiredFieldDetail>;
};
/** Resend or cancel payment request. */
export type ResendOrCancelPaymentRequestInput = {
    /** EDC machine Unique Identifier. */
    device_id?: InputMaybe<Scalars['String']['input']>;
    /** Unique order id. */
    order_id: Scalars['String']['input'];
    /** Either resend or cancel. */
    request_type: Scalars['String']['input'];
};
/** Resend Or Cancel Payment Response. */
export type ResendOrCancelPaymentResponse = {
    __typename?: 'ResendOrCancelPaymentResponse';
    /** Link status. */
    data: LinkStatus;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Resend Payment Link Response. */
export type ResendPaymentLinkResponse = {
    __typename?: 'ResendPaymentLinkResponse';
    /** Detailed message. */
    message: Scalars['String']['output'];
    /** Polling request timeout. */
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    /** HTTP status code. */
    status_code: Scalars['Int']['output'];
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** Schema representing the response received upon a successful password reset operation. */
export type ResetForgotPasswordSuccess = {
    __typename?: 'ResetForgotPasswordSuccess';
    /** Whether the password reset operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema representing the response received upon a successful password reset operation. */
export type ResetPasswordSuccess = {
    __typename?: 'ResetPasswordSuccess';
    /** Status of the password reset operation. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Data related to contents of blogs. */
export type ResourceContent = {
    __typename?: 'ResourceContent';
    /** The type of content of blogs - html. */
    type?: Maybe<Scalars['String']['output']>;
    /** The contents of blog. */
    value?: Maybe<Scalars['String']['output']>;
};
export declare enum ResponseEnum {
    No = "no",
    Yes = "yes"
}
/** Return configuration details. */
export type ReturnConfig = {
    __typename?: 'ReturnConfig';
    /** Indicates if the item is returnable. */
    returnable?: Maybe<Scalars['Boolean']['output']>;
    /** Distribution details of product sizes for Set type of Products. */
    time?: Maybe<Scalars['Int']['output']>;
    /** The unit for the return configuration. */
    unit?: Maybe<Scalars['String']['output']>;
};
/** Configuration for the revenue engine. */
export type RevenueEngineFeature = {
    __typename?: 'RevenueEngineFeature';
    /** Enable revenue engine. Default value is false. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Configuration for reward points within the application. */
export type RewardPointsConfig = {
    __typename?: 'RewardPointsConfig';
    /** Details for crediting reward points. */
    credit?: Maybe<Credit>;
    /** Details for debiting reward points. */
    debit?: Maybe<Debit>;
};
/** Root Payment Mode Schema. */
export type RootPaymentMode = {
    __typename?: 'RootPaymentMode';
    /** Anonymous card flag. */
    add_card_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Display Priority. */
    aggregator_name?: Maybe<Scalars['String']['output']>;
    /** Anonymous card flag. */
    anonymous_enable?: Maybe<Scalars['Boolean']['output']>;
    /** Payment mode display name. */
    display_name: Scalars['String']['output'];
    /** Display Priority. */
    display_priority: Scalars['Int']['output'];
    /** This flag will be true in case of Payment link payment through card. */
    is_pay_by_card_pl?: Maybe<Scalars['Boolean']['output']>;
    /** Payment mode. */
    list?: Maybe<Array<Maybe<PaymentModeList>>>;
    /** Payment mode name. */
    name: Scalars['String']['output'];
    /** Card save or not. */
    save_card?: Maybe<Scalars['Boolean']['output']>;
};
/** Rupifi Banner Response. */
export type RupifiBanner = {
    __typename?: 'RupifiBanner';
    /** Rupifi Banner Data. */
    data: RupifiKycDetail;
    /** Successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Rupifi Banner Data. */
export type RupifiKycDetail = {
    __typename?: 'RupifiKYCDetail';
    /** Rupifi KYC banner url. */
    kyc_url?: Maybe<Scalars['String']['output']>;
    /** Rupifi KYC status. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Rupify config detail schema. */
export type RupifyAggregatorConfig = {
    __typename?: 'RupifyAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Represents the SEO metadata for an application item. */
export type Seo = {
    __typename?: 'SEO';
    /** It contains detailed information about the SEO. */
    description?: Maybe<Scalars['String']['output']>;
    /** The SEO Image of the item. */
    image?: Maybe<SeoImage>;
    /** The SEO title of the item. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Object containing all data related to SEO for a sales channel website. */
export type SeoConfiguration = {
    __typename?: 'SEOConfiguration';
    /** Object containing all data related to SEO for a sales channel website. */
    seo?: Maybe<SeoSchema>;
};
/** The image url of the og:image. */
export type SeoImage = {
    __typename?: 'SEOImage';
    /** The url of image. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Additional SEO meta tags. */
export type SeoMetaItem = {
    __typename?: 'SEOMetaItem';
    /** List of key value pairs to power meta tags. */
    items?: Maybe<Array<Maybe<SeoMetaItems>>>;
    /** Title of the custom meta tags group. */
    title?: Maybe<Scalars['String']['output']>;
};
/** List of key value pairs to power meta tags. */
export type SeoMetaItems = {
    __typename?: 'SEOMetaItems';
    /** The key denoting the attribute name of SEO meta tag. */
    key?: Maybe<Scalars['String']['output']>;
    /** The key denoting the attribute value of SEO meta tag. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Data containing priority and frequency of sitemap. */
export type SeoSitemap = {
    __typename?: 'SEOSitemap';
    /** Value of sitemap frequency change denoting how frequently the content changes. */
    frequency?: Maybe<Scalars['String']['output']>;
    /** Value of sitemap priority randing from 0.0 to 1.0. */
    priority?: Maybe<Scalars['Float']['output']>;
};
/** List of action objects which can power breadcrumbs on website. */
export type SeObreadcrumb = {
    __typename?: 'SEObreadcrumb';
    /** Schema to define the Action Object. */
    action?: Maybe<ContentAction>;
    /** URL of where the breadcrumb link redirects to. */
    url?: Maybe<Scalars['String']['output']>;
};
/** The schema for the communication channel for SMS channel which includes the response indicating the user's preference and the display name of the communication channel. */
export type SmsCommunication = {
    __typename?: 'SMSCommunication';
    /** Name of the channel of communication the user has agreed to receive messages through. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. */
    response?: Maybe<Scalars['String']['output']>;
};
/** Represents SafetyNet integration settings for the application. */
export type Safetynet = {
    __typename?: 'Safetynet';
    /** Credentials required for SafetyNet integration. */
    credentials?: Maybe<SafetynetCredentials>;
    /** Shows whether Safetynet integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for SafetyNet integration. */
export type SafetynetCredentials = {
    __typename?: 'SafetynetCredentials';
    /** Secret credential API key for Safetynet. This API key is used for calling the methods of Safetynet APIs. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Save address response details, which includes address id, success flag and default address flag. */
export type SaveAddressResponse = {
    __typename?: 'SaveAddressResponse';
    /** Id of the address. */
    id?: Maybe<Scalars['String']['output']>;
    /** Default address flag if no address selected then this should be the default address selected. */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /** Success flag of save address Response. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schedule details for the collection, including timing and duration information. */
export type Schedule = {
    __typename?: 'Schedule';
    /** The end time of the job. */
    end?: Maybe<Scalars['String']['output']>;
    /** List of next schedules. */
    next_schedule?: Maybe<Array<Maybe<NextSchedule>>>;
    /** The start time of the job. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Represents an item in the autocomplete suggestion list. */
export type SearchItem = {
    __typename?: 'SearchItem';
    /** Schema of Action Object. */
    action?: Maybe<PageActionDetail>;
    /** Custom JSON data related to the autocomplete item, allowing for additional metadata. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** The display string for the size. */
    display?: Maybe<Scalars['String']['output']>;
    /** The URL for the logo of the product grouping. */
    logo?: Maybe<Media>;
    /** The type of action such as product, products, category, brand. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Response containing a list of autocomplete items. */
export type SearchProduct = {
    __typename?: 'SearchProduct';
    /** List of autocomplete items suggested based on user input. */
    items?: Maybe<Array<Maybe<SearchItem>>>;
};
/** An object containing various properties associated with the section. */
export type SectionProps = {
    __typename?: 'SectionProps';
    /** An object containing various properties associated with the autoplay. */
    autoplay?: Maybe<ImagePickerProp>;
    /** An object containing various properties associated with the item_margin. */
    item_margin?: Maybe<ImagePickerProp>;
    /** An object containing various properties associated with the slide_interval. */
    slide_interval?: Maybe<ImagePickerProp>;
    /** An object containing various properties associated with the title. */
    title?: Maybe<ImagePickerProp>;
};
/** A secure URL for hosted images or assets. */
export type SecureUrl = {
    __typename?: 'SecureUrl';
    /** Hosted URL of the image. */
    secure_url?: Maybe<Scalars['String']['output']>;
};
/** Represents Segment integration settings for the application. */
export type Segment = {
    __typename?: 'Segment';
    /** Credentials required for Segment integration. */
    credentials?: Maybe<SegmentCredentials>;
    /** Shows whether Segment integration is enabled or disabled for the sales channel. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Credentials required for Segment integration. */
export type SegmentCredentials = {
    __typename?: 'SegmentCredentials';
    /** The unique identifier for a source that tells Segment from which source data is coming from, to which workspace the data belongs, and which destinations should receive the data. */
    write_key?: Maybe<Scalars['String']['output']>;
};
/** Select address request schema, includes cart id, address id and billing address id. */
export type SelectCartAddressRequestInput = {
    /** Billing address id selected by user on which shipment bill to be generated. */
    billing_address_id?: InputMaybe<Scalars['String']['input']>;
    /** Cart id of the user cart for which the select address operation performed. */
    cart_id?: InputMaybe<Scalars['String']['input']>;
    /** Address is selected by user on which shipment to be delivered. */
    id?: InputMaybe<Scalars['String']['input']>;
};
export declare enum SelectedType {
    Exact = "exact",
    None = "none",
    Query = "query"
}
/** Information about a seller. */
export type Seller = {
    __typename?: 'Seller';
    /** The store count serviceable by this seller. */
    count?: Maybe<Scalars['Int']['output']>;
    /** The name of the seller. */
    name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the seller. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** A list of sorting and filtering criteria applied to the sellers' data. */
export type SellerSortOn = {
    __typename?: 'SellerSortOn';
    /** Indicates whether this sorting option is currently selected. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** Name or identifier of the sorting option. */
    name?: Maybe<Scalars['String']['output']>;
    /** Value used to specify the sorting order (e.g., price_asc, discount_dsc). */
    value?: Maybe<Scalars['String']['output']>;
};
/** Describes the request structure to send OTP to email. */
export type SendEmailForgotOtpRequestSchemaInput = {
    /** Action to specify if to send or resent the OTP. */
    action?: InputMaybe<UserAction>;
    /** Email of a user to send email OTP. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Token to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to send OTP to email. */
export type SendEmailOtpRequestSchemaInput = {
    /** Action to specify if to send or resent the OTP. */
    action?: InputMaybe<UserAction>;
    /** Captcha_code for sending email otp request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Email of a user to send email OTP. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Unique temporary registration of the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Token to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully sending a verification link to an email. */
export type SendEmailVerifyLinkSuccess = {
    __typename?: 'SendEmailVerifyLinkSuccess';
    /** Whether the email verification link was successfully sent. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to send OTP on forgot mobile number. */
export type SendMobileForgotOtpRequestSchemaInput = {
    /** Action to specify if to send or resent the OTP. */
    action?: InputMaybe<UserAction>;
    /** Unique hash value. */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number of user. */
    mobile?: InputMaybe<Scalars['String']['input']>;
    /** Token to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to send OTP on mobile. */
export type SendMobileOtpRequestSchemaInput = {
    /** Action to specify if to send or resent the OTP. */
    action?: InputMaybe<UserAction>;
    /** Unique hash value. */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Captcha_code for sending reset mobile  otp request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Force verify the OTP. */
    force?: InputMaybe<Scalars['String']['input']>;
    /** Mobile number of user. */
    mobile?: InputMaybe<Scalars['String']['input']>;
    /** Token to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully sending a verification link to a mobile number. */
export type SendMobileVerifyLinkSuccess = {
    __typename?: 'SendMobileVerifyLinkSuccess';
    /** Whether the mobile verification link was successfully sent. */
    verify_mobile_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to login or register with a one-time password (OTP) sent via email or sms. */
export type SendOtpRequestSchemaInput = {
    /** Unique hash value. */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Captcha_code for sending otp request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number. */
    mobile?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the successful response on sending OTP on user registration or authentication. */
export type SendOtpResponse = {
    __typename?: 'SendOtpResponse';
    /** Country code for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Email id of user. */
    email?: Maybe<Scalars['String']['output']>;
    /** Message to specify the OTP send status. Eg. OTP sent, failed to send OTP etc. */
    message?: Maybe<Scalars['String']['output']>;
    /** Phone number of user. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Unique registration token for user. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** Unique request id for the OTP. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** Unique token to identify the OTP send request and resend the token on email. */
    resend_email_token?: Maybe<Scalars['String']['output']>;
    /** Time after which opt can be resent. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** Unique token to identify the OTP send request and resend the token. */
    resend_token?: Maybe<Scalars['String']['output']>;
    /** Specify if the OTP is successfully sent. */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** If user is registered or not. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
    /** If email OTP verification is mandatory for registration. */
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    /** If mobile OTP verification is mandatory for registration. */
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for send otp. */
export type SendOtpToCustomerResponse = {
    __typename?: 'SendOtpToCustomerResponse';
    /** Message indicating the result of the request. */
    message?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the request. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** Time in seconds before the OTP can be resent. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the request was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to reset a password using the link sent on email. */
export type SendResetPasswordEmailRequestSchemaInput = {
    /** Captcha_code for sending reset password email request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Email id of user. */
    email?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to reset a password using the link sent on mobile. */
export type SendResetPasswordMobileRequestSchemaInput = {
    /** Captcha_code for sending reset password mobile request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number of user. */
    mobile?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to send verification link to phone number. */
export type SendVerificationLinkMobileRequestSchemaInput = {
    /** Boolean to specify if the phone number is active or not. */
    active?: InputMaybe<Scalars['Boolean']['input']>;
    /** Country code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number. */
    phone?: InputMaybe<Scalars['String']['input']>;
    /** Boolean to specify if the phone number is primary or not. */
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    /** Boolean to specify if the phone number is verified or not. */
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Object containing all data related to SEO for a sales channel website. */
export type SeoSchema = {
    __typename?: 'SeoSchema';
    /** Contents of additional sitemap. */
    additonal_sitemap?: Maybe<Scalars['String']['output']>;
    /** Application ID - Identifier for a Sales channel. */
    app?: Maybe<Scalars['String']['output']>;
    /** Whether canonical tags is enabled or not for a sales channel's website. */
    cannonical_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Timestamp which represent the time when data was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Custom meta tags for a sales channel website. */
    custom_meta_tags?: Maybe<Array<Maybe<CustomMetaTag>>>;
    /** Data regarding the og:title and og:description of a sales channel website. */
    details?: Maybe<Detail>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Contents of robots.txt file of a sales channel. */
    robots_txt?: Maybe<Scalars['String']['output']>;
    /** Whether sitemaps is enabled or not for a sales channel's website. */
    sitemap_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Timestamp which represent when was the last time when data was updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
export declare enum SessionEnum {
    Days = "Days",
    Hours = "Hours",
    Minutes = "Minutes"
}
/** Consent text details shown to user. */
export type SessionExpiry = {
    __typename?: 'SessionExpiry';
    /** Number of days or hours based on type till which the session can be rolled back. */
    duration?: Maybe<Scalars['Int']['output']>;
    /** Whether session needs to be rollback or not. */
    is_rolling?: Maybe<Scalars['Boolean']['output']>;
    /** Days or hours the type of time for session rollback. */
    type?: Maybe<SessionEnum>;
};
/** Schema representing the response received upon successfully retrieving all active sessions of a user. */
export type SessionList = {
    __typename?: 'SessionList';
    /** An array of active session identifiers. */
    sessions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Set Default beneficiary request. */
export type SetDefaultBeneficiaryRequestInput = {
    /** Beneficiary Hash Id of the beneficiary added. */
    beneficiary_id: Scalars['String']['input'];
    /** Merchant Order Id. */
    order_id: Scalars['String']['input'];
};
/** Set default beneficiary Response. */
export type SetDefaultBeneficiaryResponse = {
    __typename?: 'SetDefaultBeneficiaryResponse';
    /** Boolean Flag whether Beneficiary set or not. */
    is_beneficiary_set: Scalars['Boolean']['output'];
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Share cart detail includes checkout mode, cart id, payment selection lock config, delivery promise, comment message,  items, breakup values and other cart data of shared cart. */
export type SharedCart = {
    __typename?: 'SharedCart';
    /** Price breakup of cart which denotes different values like coupon, display, and loyalty points. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of user cart for generating cart sharing token. */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of address on which address to be used for which checkout mode of cart. */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message added in user cart. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of the applied coupon on user cart. */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. */
    currency?: Maybe<CartCurrency>;
    /** Metadata of custom cart */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge info message of the user cart. */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** GSTIN added in user cart. */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart id of shared cart. */
    id?: Maybe<Scalars['String']['output']>;
    /** Valid flag for get shared cart detail API. */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Items data list in user cart that includes item id, item size, store id, available sizes and rest of the item related data. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of user cart. */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the get shared cart API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /** Restrict checkout flag to restrict the checkout process. */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Shared cart details schema included token, user, created on, source and meta. */
    shared_cart_details?: Maybe<SharedCartDetails>;
    /** Cart id of the user cart. */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Shared cart details schema included token, user, created on, source and meta. */
export type SharedCartDetails = {
    __typename?: 'SharedCartDetails';
    /** Created on timestamp of user cart. */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Meta data sent while generating share cart link. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Share link device and other source information. */
    source?: Maybe<Scalars['JSON']['output']>;
    /** Short link id of the user cart that needs to be shared. */
    token?: Maybe<Scalars['String']['output']>;
    /** User details of who generated share link. */
    user?: Maybe<Scalars['JSON']['output']>;
};
/** Shared cart response schema which included error or cart data. */
export type SharedCartItems = {
    __typename?: 'SharedCartItems';
    /** Cart of share cart which inclued cart items, promise, checkout mode, comment, GSTIN etc. */
    cart?: Maybe<SharedCart>;
    /** Error details if any error occurs which includes type of error, error code and error message. */
    error?: Maybe<Scalars['String']['output']>;
};
/** Shared cart response schema which included error or cart data. */
export type SharedCartResponse = {
    __typename?: 'SharedCartResponse';
    /** Share cart detail includes checkout mode, cart id, payment selection lock config, delivery promise, comment message,  items, breakup values and other cart data of shared cart. */
    cart?: Maybe<SharedCart>;
    /** Error details if any error occurs which includes type of error, error code and error message. */
    error?: Maybe<Scalars['String']['output']>;
};
/** Shipment details. */
export type Shipment = {
    __typename?: 'Shipment';
    /** Schema for customer details response. */
    customer_detail?: Maybe<CustomerDetailsResponse>;
    /** Shipment details. */
    detail?: Maybe<OrderShipment>;
    /** Schema for shipment invoice. */
    invoice_detail?: Maybe<ShipmentInvoice>;
    /** Individual bag reason details. */
    shipment_bag_reasons?: Maybe<ShipmentBagReasons>;
    /** Individual shipment reason details. */
    shipment_reasons?: Maybe<ShipmentCancellationReasons>;
    /** Shipment tracking details. */
    track_shipment?: Maybe<TrackShipment>;
};
/** Shipment details. */
export type ShipmentCustomer_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Shipment details. */
export type ShipmentShipment_Bag_ReasonsArgs = {
    bagId: Scalars['String']['input'];
};
/** Schema for Shipment Application Status Response. */
export type ShipmentApplicationStatusResponse = {
    __typename?: 'ShipmentApplicationStatusResponse';
    /** An array containing different status options of shipments. */
    statuses?: Maybe<Array<Maybe<StatusesBodyResponse>>>;
};
/** Schema for shipment's bag reasons. */
export type ShipmentBagReasons = {
    __typename?: 'ShipmentBagReasons';
    /** A list of shipment's bag reasons. */
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
    /** Indicates if the operation was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for shipment's cancellation reasons list. */
export type ShipmentCancellationReasons = {
    __typename?: 'ShipmentCancellationReasons';
    /** A list of shipment reasons. */
    reasons?: Maybe<Array<Maybe<ShipmentReason>>>;
};
/** Get invoice shipment response. */
export type ShipmentInvoice = {
    __typename?: 'ShipmentInvoice';
    /** Type of presigned URL. */
    presigned_type: Scalars['String']['output'];
    /** The presigned URL for accessing the shipment data, obtained from the response data. */
    presigned_url: Scalars['String']['output'];
    /** Identifier for the shipment. */
    shipment_id: Scalars['String']['output'];
    /** Indicates if the operation was successful . */
    success: Scalars['Boolean']['output'];
};
/** Schema for shipment payment. */
export type ShipmentPayment = {
    __typename?: 'ShipmentPayment';
    /** The name to be displayed for the payment mode. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** URL of the logo representing the payment mode. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Information about the payment source. For eg, NB_ICICI. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Stands for Mode of Payment. This is a short code (like 'COD' for Cash On Delivery) that represents the payment method used. */
    mop?: Maybe<Scalars['String']['output']>;
    /** Information about the payment mode, indicates whether COD or PREPAID. */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** The current status of the payment. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipment payment. */
export type ShipmentPaymentInfo = {
    __typename?: 'ShipmentPaymentInfo';
    /** Amount paid using this payment method. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** The name to be displayed for the payment mode. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** URL of the logo representing the payment mode. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Information about the payment source. For eg, NB_ICICI. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Stands for Mode of Payment. This is a short code (like 'COD' for Cash On Delivery) that represents the payment method used. */
    mop?: Maybe<Scalars['String']['output']>;
    /** Information about the payment mode, indicates whether COD or PREPAID. */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** The current status of the payment. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
export type ShipmentPromise = {
    __typename?: 'ShipmentPromise';
    /** Min and Max Delivery promise formatted timestamp. */
    formatted?: Maybe<PromiseFormatted>;
    /** Promise in ISO format. */
    iso?: Maybe<PromiseFormatted>;
    /** Shipment level promise times. */
    timestamp?: Maybe<PromiseTimestamp>;
};
/** Schema for individual shipment reason. */
export type ShipmentReason = {
    __typename?: 'ShipmentReason';
    /** The type of feedback. */
    feedback_type?: Maybe<Scalars['String']['output']>;
    /** The process flow related to the reason. */
    flow?: Maybe<Scalars['String']['output']>;
    /** The priority level of the reason. */
    priority?: Maybe<Scalars['Int']['output']>;
    /** The unique identifier for the reason. */
    reason_id?: Maybe<Scalars['Int']['output']>;
    /** The text describing the reason. */
    reason_text?: Maybe<Scalars['String']['output']>;
    /** A flag indicating whether to show a textbox on the frontend. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Shipment Response details of the cart which how many shipments will be shipped for the items in cart and gives infoormation about box type, order type, promise of each shipment and delivery partner details. */
export type ShipmentResponse = {
    __typename?: 'ShipmentResponse';
    /** Box type of the shipment in which the shipment will be delivered. */
    box_type?: Maybe<Scalars['String']['output']>;
    /** Delivery partner id of the shipment. */
    dp_id?: Maybe<Scalars['String']['output']>;
    /** Delivery partner options that are available to deliver the shipment. */
    dp_options?: Maybe<Scalars['JSON']['output']>;
    /** Fulfilment id of the shipment. */
    fulfillment_id?: Maybe<Scalars['Int']['output']>;
    /** Fulfilment type of shipment. */
    fulfillment_type?: Maybe<Scalars['String']['output']>;
    /** Item details in the shipment. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Order type of the shipment like pickAtStore or HomeDelivery. */
    order_type?: Maybe<Scalars['String']['output']>;
    /** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
    promise?: Maybe<DeliveryPromiseResponse>;
    /** Shipment type of the shipment returned in get shipments API like single_shipment or multiple shipment. Single Shipment means 1 item in 1 shipment and vice versa in the other one. */
    shipment_type?: Maybe<Scalars['String']['output']>;
    /** Count of shipments that will be shipped. */
    shipments?: Maybe<Scalars['Int']['output']>;
};
/** Schema for shipment status. */
export type ShipmentStatus = {
    __typename?: 'ShipmentStatus';
    /** The hexadecimal color code associated with the shipment status. */
    hex_code?: Maybe<Scalars['String']['output']>;
    /** The title or display name representing the shipment status. */
    title?: Maybe<Scalars['String']['output']>;
    /** The internal or code value representing the shipment status. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipment total details. */
export type ShipmentTotalDetails = {
    __typename?: 'ShipmentTotalDetails';
    /** The total number of pieces included. */
    pieces?: Maybe<Scalars['Int']['output']>;
    /** The number of different sizes included. */
    sizes?: Maybe<Scalars['Int']['output']>;
    /** The total price of the order or item. */
    total_price?: Maybe<Scalars['Float']['output']>;
};
/** Schema for shipments user info. */
export type ShipmentUserInfo = {
    __typename?: 'ShipmentUserInfo';
    /** Email address of the user. */
    email?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the store. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** A code associated with the store. */
    gender?: Maybe<Scalars['String']['output']>;
    /** The name of the company associated with the store. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** The identifier of the company associated with the store. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipments request. */
export type ShipmentsRequestInput = {
    /** Schema for data updates. */
    data_updates?: InputMaybe<DataUpdatesInput>;
    /** The unique identifier for request which is the shipment_id. */
    identifier: Scalars['String']['input'];
    /** Specific bag to be updated. */
    products?: InputMaybe<Array<InputMaybe<Products3Input>>>;
    /** Schema for reasons data. */
    reasons?: InputMaybe<ReasonsDataInput>;
};
/** Schema for url component of short link which contains original link to be shortened, the hash of URL and the shortened URL. */
export type ShortLink = {
    __typename?: 'ShortLink';
    /** Original web address which will be converted to shortlink. */
    original?: Maybe<ShortLinkDetail>;
    /** Schema for url component of short link which contains original link to be shortened, the hash of URL and the shortened URL. */
    short_link_by_hash?: Maybe<ShortLinkDetail>;
};
/** Response schema for successful creation of short link  that includes original link, meta data, hash of url, campaign attributes, document ID, document timestamps, redirect attributes and social media attributes of short link to be created. */
export type ShortLinkDetail = {
    __typename?: 'ShortLinkDetail';
    /** Status of the shortlink. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Application redirection flag of shortlink. */
    app_redirect?: Maybe<Scalars['Boolean']['output']>;
    /** The ID of the sales channel associated with the shortlink. */
    application?: Maybe<Scalars['String']['output']>;
    /** Additional attributes of shortlink. */
    attribution?: Maybe<Attribution>;
    /** Campaign attributes of shortlink. */
    campaign?: Maybe<CampaignShortLink>;
    /** Click count of shortlink. */
    count?: Maybe<Scalars['Int']['output']>;
    /** The timestamp indicating when a record was initially created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Reference of the creator of the shortlink. */
    created_by?: Maybe<Scalars['String']['output']>;
    /** Flag to enable tracking of a short link. */
    enable_tracking?: Maybe<Scalars['Boolean']['output']>;
    /** Expiry of the shortlink. */
    expire_at?: Maybe<Scalars['String']['output']>;
    /** Fallback attributes of shortlink. */
    fallback?: Maybe<RedirectType>;
    /** Key used to uniquely identify document that contains shortlink details. */
    id?: Maybe<Scalars['String']['output']>;
    /** Additional attributes of shortlink. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** To create personalized short links. */
    personalized?: Maybe<Scalars['Boolean']['output']>;
    /** Redirection attributes of shortlink. */
    redirects?: Maybe<Redirects>;
    /** Social media attributes of shortlink. */
    social_media_tags?: Maybe<SocialMediaTags>;
    /** Name reference of the shortlink. */
    title?: Maybe<Scalars['String']['output']>;
    /** The timestamp indicating when a record was last modified or updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Original web address which will be converted to shortlink. */
    url?: Maybe<UrlInfo>;
    /** Identifier which can uniquely identify the user. */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** Request schema for creation of short link  that includes original link, meta data, hash of url, campaign attributes, redirect attributes and social media attributes of short link to be created. */
export type ShortLinkReqInput = {
    /** Status of the shortlink. */
    active?: InputMaybe<Scalars['Boolean']['input']>;
    /** Schema for expiration attributes of shortlink campaign. */
    attribution?: InputMaybe<AttributionInput>;
    /** Schema for campaign attributes of shortlink. It includes source and channel of communication of campaign. */
    campaign?: InputMaybe<CampaignShortLinkInput>;
    /** Click count of shortlink. */
    count?: InputMaybe<Scalars['Int']['input']>;
    /** Flag to enable tracking of a short link. */
    enable_tracking?: InputMaybe<Scalars['Boolean']['input']>;
    /** Expiry of the shortlink. */
    expire_at?: InputMaybe<Scalars['String']['input']>;
    /** A string value used for converting long URL to short URL and vice-versa. */
    hash?: InputMaybe<Scalars['String']['input']>;
    /** To create personalized short links. */
    personalized?: InputMaybe<Scalars['Boolean']['input']>;
    /** Redirects schema for redirection configuration for different mediums like device and web. */
    redirects?: InputMaybe<RedirectsInput>;
    /** Schema for Social Media Tags attributes of shortlink. */
    social_media_tags?: InputMaybe<SocialMediaTagsInput>;
    /** Give a name to the link. */
    title: Scalars['String']['input'];
    /** The web address to shorten. */
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
/** Simpl config detail schema. */
export type SimplAggregatorConfig = {
    __typename?: 'SimplAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Detailed information about a specific size. */
export type Size = {
    __typename?: 'Size';
    /** The display string for the size. */
    display?: Maybe<Scalars['JSON']['output']>;
    /** Whether or not this size is available. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** The quantity of this size available. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The value of the size. */
    value?: Maybe<Scalars['JSON']['output']>;
};
/** Size chart providing detailed sizing information for products. */
export type SizeChart = {
    __typename?: 'SizeChart';
    /** Description related to the size chart. */
    description?: Maybe<Scalars['String']['output']>;
    /** Headers used in the size chart columns. */
    headers?: Maybe<ColumnHeaders>;
    /** URL of the image representing the size chart. */
    image?: Maybe<Scalars['String']['output']>;
    /** Additional tip or guideline related to sizing. */
    size_tip?: Maybe<Scalars['String']['output']>;
    /** Array of size chart values for different sizes. */
    sizes?: Maybe<Array<Maybe<SizeChartValues>>>;
    /** Title or name of the size chart. */
    title?: Maybe<Scalars['String']['output']>;
    /** Unit of measurement used in the size chart (e.g., in, cm). */
    unit?: Maybe<Scalars['String']['output']>;
};
/** Values corresponding to different size chart columns. */
export type SizeChartValues = {
    __typename?: 'SizeChartValues';
    /** Value for column 1. */
    col_1?: Maybe<Scalars['String']['output']>;
    /** Value for column 2. */
    col_2?: Maybe<Scalars['String']['output']>;
    /** Value for column 3. */
    col_3?: Maybe<Scalars['String']['output']>;
    /** Value for column 4. */
    col_4?: Maybe<Scalars['String']['output']>;
    /** Value for column 5. */
    col_5?: Maybe<Scalars['String']['output']>;
    /** Value for column 6. */
    col_6?: Maybe<Scalars['String']['output']>;
};
/** Details related to slideshow/screensaver. */
export type Slideshow = {
    __typename?: 'Slideshow';
    /** Details related to slideshow/screensaver. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Whether slideshow is deleted or not. */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Data related to slideshow/screensaver. */
    configuration?: Maybe<ConfigurationSchema>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details related to resource creation and updation. */
    date_meta?: Maybe<DateMeta>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Details related to slideshow/screensaver. */
    media?: Maybe<Array<Maybe<SlideshowMedia>>>;
    /** Details related to slideshow/screensaver. */
    platform?: Maybe<Scalars['String']['output']>;
    /** Details related to slideshow/screensaver. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** An object containing al the media urls for displaying in slideshow/screensaver. */
export type SlideshowMedia = {
    __typename?: 'SlideshowMedia';
    /** Schema to define the Action Object. */
    action?: Maybe<ContentAction>;
    /** Whether the duration for each media is to be decided by system or not. If true, it'll equally divide time in all medias. */
    auto_decide_duration?: Maybe<Scalars['Boolean']['output']>;
    /** Background colour of Media. */
    bg_color?: Maybe<Scalars['String']['output']>;
    /** Amount of time in seconds for which Media has to appear. */
    duration?: Maybe<Scalars['Int']['output']>;
    /** Type of Media. */
    type?: Maybe<Scalars['String']['output']>;
    /** URL of Media where it's hosted. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Details related to slideshow/screensaver. */
export type Slideshows = {
    __typename?: 'Slideshows';
    /** Details related to slideshow/screensaver. */
    items?: Maybe<Array<Maybe<Slideshow>>>;
    /** Data related to pagination. */
    page?: Maybe<PageInfo>;
};
/** Type of social login are active or inactive for application. */
export type Social = {
    __typename?: 'Social';
    /** Is accountkit social login active for application or not. */
    account_kit?: Maybe<Scalars['Boolean']['output']>;
    /** Is apple social login active for application or not. */
    apple?: Maybe<Scalars['Boolean']['output']>;
    /** Is facebook social login active for application or not . */
    facebook?: Maybe<Scalars['Boolean']['output']>;
    /** Is google social login active for application or not . */
    google?: Maybe<Scalars['Boolean']['output']>;
};
/** Structure of credentials of account kit social. */
export type SocialAccountId = {
    __typename?: 'SocialAccountId';
    /** App id of the  credentials account kit. */
    app_id?: Maybe<Scalars['String']['output']>;
};
/** Contains social media and blog links related to the brand or business, including icons and URLs for various platforms. */
export type SocialLinks = {
    __typename?: 'SocialLinks';
    /** Contains information about the brand's blog page. */
    blog_link?: Maybe<LinkSchema>;
    /** Contains information about the brand's Facebook page. */
    facebook?: Maybe<LinkSchema>;
    /** Contains information about the brand's Google+ account. */
    google_plus?: Maybe<LinkSchema>;
    /** Contains information about the brand's Instagram page. */
    instagram?: Maybe<LinkSchema>;
    /** Contains information about the brand's LinkedIn channel. */
    linked_in?: Maybe<LinkSchema>;
    /** Contains information about the brand's Pinterest page. */
    pinterest?: Maybe<LinkSchema>;
    /** Contains information about the brand's Twitter account. */
    twitter?: Maybe<LinkSchema>;
    /** Contains information about the brand's Vimeo channel. */
    vimeo?: Maybe<LinkSchema>;
    /** Contains information about the brand's YouTube channel. */
    youtube?: Maybe<LinkSchema>;
};
/** Schema for Social Media Tags attributes of shortlink. */
export type SocialMediaTags = {
    __typename?: 'SocialMediaTags';
    /** Description to be displayed when link is shared on social media platforms. */
    description?: Maybe<Scalars['String']['output']>;
    /** Preview to be displayed when link is shared on social media platforms. */
    image?: Maybe<Scalars['String']['output']>;
    /** Title to be displayed when link is shared on social media platforms. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Schema for Social Media Tags attributes of shortlink. */
export type SocialMediaTagsInput = {
    /** Description to be displayed when link is shared on social media platforms. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Preview to be displayed when link is shared on social media platforms. */
    image?: InputMaybe<Scalars['String']['input']>;
    /** Title to be displayed when link is shared on social media platforms. */
    title?: InputMaybe<Scalars['String']['input']>;
};
/** Structure of social credentials of application owner. */
export type SocialTokens = {
    __typename?: 'SocialTokens';
    /** Credentials of the accountkit social login of application owner. */
    accountkit?: Maybe<SocialAccountId>;
    /** Structure of credentials of facebook social. */
    facebook?: Maybe<SocialAccountId>;
    /** Structure of credentials of google social. */
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
/** Contains payment split details */
export type SplitObject = {
    __typename?: 'SplitObject';
    /** Amount pending to be paid. */
    amount_remaining?: Maybe<Scalars['Float']['output']>;
    /** Number of splits remaining. */
    splits_remaining?: Maybe<Scalars['Int']['output']>;
    /** Maximum amount of splits allowed. */
    total_number_of_splits?: Maybe<Scalars['Int']['output']>;
};
/** Archived zip containing complete theme code. */
export type Src = {
    __typename?: 'Src';
    /** Object containing theme bundles, eg: common.js, umd.js. */
    link?: Maybe<Scalars['String']['output']>;
};
/** Staff details which can be added while checkout if staff member is doing check on behalf of customer which incluedes empployee code, user, last name, first name and staff user id. */
export type StaffCheckoutInput = {
    /** Id of staff who does checkout on behalf of customer. */
    _id: Scalars['String']['input'];
    /** Employee code of staff who does checkout on behalf of customer. */
    employee_code?: InputMaybe<Scalars['String']['input']>;
    /** First name of staff emplyee who does checkout on behalf of customer. */
    first_name: Scalars['String']['input'];
    /** Last name of staff employee who does checkout on behalf of customer. */
    last_name: Scalars['String']['input'];
    /** User id of the employee who does checkout on behalf of customer. */
    user: Scalars['String']['input'];
};
/** Schema for statuses. */
export type StatuesRequestInput = {
    /** State to be change for Remaining Bag/Products. */
    exclude_bags_next_state?: InputMaybe<Scalars['String']['input']>;
    /** A list containing information about shipments. */
    shipments?: InputMaybe<Array<InputMaybe<ShipmentsRequestInput>>>;
    /** The status to which the entity is to be transitioned. */
    status?: InputMaybe<Scalars['String']['input']>;
};
/** Denotes in what state is the ticket. */
export type Status = {
    __typename?: 'Status';
    /** Color for status. */
    color: Scalars['String']['output'];
    /** Display text for status. */
    display: Scalars['String']['output'];
    /** Key for status. */
    key: Scalars['String']['output'];
};
/** Schema for Statuses body response. */
export type StatusesBodyResponse = {
    __typename?: 'StatusesBodyResponse';
    /** List of shipments. */
    shipments?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};
/** A list of application stores with associated filters and pagination details. */
export type StockLocations = {
    __typename?: 'StockLocations';
    /** A list of filters applied to the store listing. */
    filters?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** A list of application stores. */
    items?: Maybe<Array<Maybe<InStockStore>>>;
    /** Pagination details for the store listing. */
    page?: Maybe<PageInfo>;
};
/** Details of a store, including its contact information, address, and geographic coordinates. */
export type Store = {
    __typename?: 'Store';
    /** The address details of the store. */
    address?: Maybe<StoreAddressSerializer>;
    /** Information about the company that owns the store. */
    company?: Maybe<CompanyStore>;
    /** Contact details for the store. */
    contact_numbers?: Maybe<Array<Maybe<StorePhoneNumber>>>;
    /** Custom JSON data related to the store. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** A list of departments within the store. */
    departments?: Maybe<Array<Maybe<StoreDepartment>>>;
    /** The manager's email address for the store. */
    manager?: Maybe<StoreManagerSerializer>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
    /** A unique code or identifier for the store, often used for internal reference. */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Represents the opening and closing times for a store on a specific weekday. */
    timing?: Maybe<Array<Maybe<StoreTiming>>>;
    /** Unique identifier for the store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** The address details for the store. */
export type StoreAddressSerializer = {
    __typename?: 'StoreAddressSerializer';
    /** The address line 1 of the store. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The address line2 of the store. */
    address2?: Maybe<Scalars['String']['output']>;
    /** The city where the store is located. */
    city?: Maybe<Scalars['String']['output']>;
    /** The country where the store is located. */
    country?: Maybe<Scalars['String']['output']>;
    /** A landmark near the store. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** The latitude of the store's location. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** The longitude of the store's location. */
    longitude?: Maybe<Scalars['Float']['output']>;
    /** The postal code for the store's location. */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The state where the store is located. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Response object containing a list of stores and pagination information for store listings. */
export type StoreConnection = {
    __typename?: 'StoreConnection';
    /** An array of store details. Each store includes information such as name, address, and geographic coordinates. */
    items: Array<Maybe<StoreDetail>>;
    /** An array of store details. Each store includes information such as name, address, and geographic coordinates. */
    page: PageInfo;
};
/** Details about store department. */
export type StoreDepartment = {
    __typename?: 'StoreDepartment';
    /** An object containing information about the store department's logo, such as the URL or other related media details. */
    logo?: Maybe<Scalars['JSON']['output']>;
    /** The name of the store department, which is typically used for display and identification purposes. */
    name?: Maybe<Scalars['String']['output']>;
    /** The priority or ranking of the department within the store. This field is used to determine the order in which departments are displayed or processed. */
    priority_order?: Maybe<Scalars['Int']['output']>;
    /** A URL-friendly identifier for the store department, often used in web addresses and routing to uniquely identify the department. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The unique identifier assigned to the store department. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Detailed information about a store. */
export type StoreDetail = {
    __typename?: 'StoreDetail';
    /** The street address of the store. */
    address?: Maybe<Scalars['String']['output']>;
    /** The city where the store is located. */
    city?: Maybe<Scalars['String']['output']>;
    /** The country where the store is located. */
    country?: Maybe<Scalars['String']['output']>;
    /** Geographic coordinates of the store, including latitude and longitude. */
    lat_long?: Maybe<LatLong>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
    /** The postal code or zip code for the store's location. */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The state or province where the store is located. */
    state?: Maybe<Scalars['String']['output']>;
    /** A unique code or identifier for the store, often used for internal reference. */
    store_code?: Maybe<Scalars['String']['output']>;
    /** The manager's email address for the store. */
    store_email?: Maybe<Scalars['String']['output']>;
    /** The list of tags mapped to the store. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The unique identifier for the store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Store information of the store which includes store name, store id and store code. */
export type StoreInfo = {
    __typename?: 'StoreInfo';
    /** Store name of the store from where the product is fulfiled . */
    name?: Maybe<Scalars['String']['output']>;
    /** A unique code or identifier for the store, often used for internal reference. */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Unique identifiers of the store from where product is fulfileld. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Details of the store manager. */
export type StoreManagerSerializer = {
    __typename?: 'StoreManagerSerializer';
    /** The email address of the store manager. */
    email?: Maybe<Scalars['String']['output']>;
    /** Contact details for the seller. */
    mobile_no?: Maybe<StorePhoneNumber>;
    /** The name of the store manager. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Object representing a user's phone number, including its active status, whether it's the primary number, verification status, and the phone number itself. */
export type StorePhoneNumber = {
    __typename?: 'StorePhoneNumber';
    /** Country code, e.g. +91. */
    country_code?: Maybe<Scalars['Int']['output']>;
    /** Phone number of the user. */
    number?: Maybe<Scalars['String']['output']>;
};
/** Represents the opening and closing times for a store on a specific weekday. */
export type StoreTiming = {
    __typename?: 'StoreTiming';
    /** Represents a specific time with hour and minute. */
    closing?: Maybe<Time>;
    /** Indicates if the store is open on this day. */
    open?: Maybe<Scalars['Boolean']['output']>;
    /** Represents a specific time with hour and minute. */
    opening?: Maybe<Time>;
    /** The day of the week. */
    weekday?: Maybe<Scalars['String']['output']>;
};
export declare enum StoreType {
    Hard = "hard",
    Soft = "soft"
}
/** Strategy details for the assigned store. */
export type StrategyWiseListing = {
    __typename?: 'StrategyWiseListing';
    /** Distance between bullfight location and customer location in kilometers. . */
    distance?: Maybe<Scalars['Int']['output']>;
    /** Pincode mapped based on strategy. */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The quantity available for assigned store. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Turn around Time to deliver the product with this strategy. */
    tat?: Maybe<Scalars['Int']['output']>;
};
/** Stripe config detail schema. */
export type StripeAggregatorConfig = {
    __typename?: 'StripeAggregatorConfig';
    /** Payment gateway api endpoint. */
    api?: Maybe<Scalars['String']['output']>;
    /** Fynd or self payment gateway. */
    config_type?: Maybe<Scalars['String']['output']>;
    /** Payment gateway api key. */
    key?: Maybe<Scalars['String']['output']>;
    /** Unique merchant id. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Unique merchant key. */
    merchant_key?: Maybe<Scalars['String']['output']>;
    /** Masked pin. */
    pin?: Maybe<Scalars['String']['output']>;
    /** SDK details. */
    sdk?: Maybe<Scalars['Boolean']['output']>;
    /** Masked payment gateway api secret. */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Details for submit button. */
export type SubmitButton = {
    __typename?: 'SubmitButton';
    /** Color for submit button. */
    background_color: Scalars['String']['output'];
    /** Title for submit button. */
    title: Scalars['String']['output'];
    /** Title color submit button. */
    title_color: Scalars['String']['output'];
};
/** Acknowledgement details on submission of custom form. */
export type SubmitCustomFormResponse = {
    __typename?: 'SubmitCustomFormResponse';
    /** Success message for form submission. */
    message: Scalars['String']['output'];
    /** Ticket created on form submission. */
    ticket?: Maybe<SupportTicket>;
};
/** Response object containing a success message to confirm the successful completion of an operation. */
export type SuccessMessageResponse = {
    __typename?: 'SuccessMessageResponse';
    /** Success message shown to the user (in a string format). */
    message?: Maybe<Scalars['String']['output']>;
};
/** Schema to get details about Support entities like custom form and support ticket. */
export type Support = {
    __typename?: 'Support';
    /** Get a customizable form template for data collection. */
    custom_form?: Maybe<CustomForm>;
    /** Get details of a specific customer support ticket. */
    ticket?: Maybe<SupportTicket>;
};
/** Schema to get details about Support entities like custom form and support ticket. */
export type SupportCustom_FormArgs = {
    slug: Scalars['String']['input'];
};
/** Schema to get details about Support entities like custom form and support ticket. */
export type SupportTicketArgs = {
    id: Scalars['String']['input'];
};
/** Object containing support contact related details. */
export type SupportInformation = {
    __typename?: 'SupportInformation';
    /** Application ID - Identifier for a Sales channel. */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding the customer support contact details. */
    contact?: Maybe<ContactSchema>;
    /** Whether support contact details are created or not. */
    created?: Maybe<Scalars['Boolean']['output']>;
    /** Timestamp which represent the time when data was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent when was the last time when data was updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Ticket created on form submission. */
export type SupportTicket = {
    __typename?: 'SupportTicket';
    /** Custom json relevant to the ticket. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Unique identifier for the ticket. */
    _id?: Maybe<Scalars['String']['output']>;
    /** Details of support staff to whom ticket is assigned. */
    assigned_to?: Maybe<Scalars['JSON']['output']>;
    /** Category assigned to the ticket. */
    category?: Maybe<TicketCategory>;
    /** Content for the ticket. */
    content?: Maybe<TicketContent>;
    /** Details of company and application related to the ticket. */
    context?: Maybe<TicketContext>;
    /** Time when the ticket was created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** User details of ticket creator. */
    created_by?: Maybe<Scalars['JSON']['output']>;
    /** Time of creation of the history event. */
    created_on?: Maybe<CreatedOn>;
    /** Integration type and its details of the ticket. */
    integration?: Maybe<Scalars['JSON']['output']>;
    /** If feedback submission is pending for the ticket. */
    is_feedback_pending?: Maybe<Scalars['Boolean']['output']>;
    /** Denotes the priority of ticket. */
    priority?: Maybe<Priority>;
    /** Details of company and application related to the ticket. */
    response_id?: Maybe<Scalars['String']['output']>;
    /** Denotes if the ticket was created at company or application level. */
    source?: Maybe<TicketSourceEnum>;
    /** Denotes in what state is the ticket. */
    status?: Maybe<Status>;
    /** Sub-category assigned to the ticket. */
    sub_category?: Maybe<Scalars['String']['output']>;
    /** Tags relevant to ticket. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Time when the ticket was last updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
export declare enum TagPositionEnum {
    BodyBottom = "body_bottom",
    BodyTop = "body_top",
    Head = "head"
}
/** Data related to Third party injectable html tags. */
export type TagSchema = {
    __typename?: 'TagSchema';
    /** Custom JSON object for specific use cases. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Content of tag. */
    content?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the html tag. */
    name?: Maybe<Scalars['String']['output']>;
    /** List of all the page where tag is to be added. */
    pages?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Position where Tag is so to be placed. */
    position?: Maybe<TagPositionEnum>;
    /** Details regarding the extension which has added/created the tag. */
    source?: Maybe<TagSource>;
    /** Whether js/css is external or inline. */
    sub_type?: Maybe<TagSubType>;
    /** Whether Tag is JS or CSS. */
    type?: Maybe<TagType>;
    /** URL at which css or js might be hosted. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Data related to Third party injectable html tags. */
export type TagSource = {
    __typename?: 'TagSource';
    /** Identifier of an extension. */
    id?: Maybe<Scalars['String']['output']>;
    /** Type of creator of tag. */
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
/** List of labels or batches attached to a product in cart. */
export type Tags = {
    __typename?: 'Tags';
    /** Tags is a lable or batch that is attached to a product in cart. */
    tags?: Maybe<Scalars['JSON']['output']>;
};
/** Schema for theme-specific details to fetch. */
export type Theme = {
    __typename?: 'Theme';
    /** Gets the theme configuration and template details of a theme by theme id. */
    preview_theme?: Maybe<ThemeDetail>;
    /** Get page level configurations, applied sections and seo data of a page by `page_value` received from list pages api. */
    theme_page_detail?: Maybe<AvailablePage>;
    /** Get all page level configs, sections and seo data of a theme. */
    theme_pages?: Maybe<Array<Maybe<AvailablePage>>>;
};
/** Schema for theme-specific details to fetch. */
export type ThemeTheme_Page_DetailArgs = {
    pageValue: Scalars['String']['input'];
};
/** The response body containing the theme details. */
export type ThemeDetail = {
    __typename?: 'ThemeDetail';
    /** The id of the application. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Whether the theme has been applied or not. */
    applied?: Maybe<Scalars['Boolean']['output']>;
    /** An object containing information about assets, such as images, files, or other resources used in the application. */
    assets?: Maybe<Assets>;
    /** Available sections information. */
    available_sections?: Maybe<Array<Maybe<AvailableSection>>>;
    /** The company id in which sales channel exists. */
    company_id?: Maybe<Scalars['String']['output']>;
    /** The configuration object that contains various settings and parameters. Each property within this object defines a specific configuration setting, allowing for customization and control over different aspects of the system or application. */
    config?: Maybe<Config>;
    /** The creation timestamp of the theme. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** An object representing font properties and attributes. */
    font?: Maybe<Font>;
    /** The ID of the property. */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether the theme is private or not. */
    is_private?: Maybe<Scalars['Boolean']['output']>;
    /** The id of the theme in the marketplace. */
    marketplace_theme_id?: Maybe<Scalars['String']['output']>;
    /** The metadata of a theme */
    meta?: Maybe<ThemeMeta>;
    /** The name of the theme. */
    name?: Maybe<Scalars['String']['output']>;
    /** The styles associated with the theme. */
    styles?: Maybe<Scalars['JSON']['output']>;
    /** An array of tags associated with the theme. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The id of the template theme. */
    template_theme_id?: Maybe<Scalars['String']['output']>;
    /** The theme or category type associated with the page. */
    theme_type?: Maybe<ThemeTypeEnum>;
    /** The last update timestamp of the theme. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** The version of the theme. */
    version?: Maybe<Scalars['String']['output']>;
};
/** An object containing theme image details */
export type ThemeImages = {
    __typename?: 'ThemeImages';
    /** The url of the desktop image. */
    desktop?: Maybe<Scalars['String']['output']>;
    /** The url of the mobile image. */
    mobile?: Maybe<Scalars['String']['output']>;
};
/** Theme Information object. */
export type ThemeInfo = {
    __typename?: 'ThemeInfo';
    /** The description of the theme. */
    description?: Maybe<Scalars['String']['output']>;
    /** A list containing different features of a theme, eg: 'responsive'. */
    features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A list storefront images for the applied theme. */
    images?: Maybe<ThemeImages>;
    /** The name of the block. */
    name?: Maybe<Scalars['String']['output']>;
};
/** An object containing metadata of a theme */
export type ThemeMeta = {
    __typename?: 'ThemeMeta';
    /** The description of the theme. */
    description?: Maybe<Scalars['String']['output']>;
    /** Contains theme android and desktop images */
    images?: Maybe<ThemeImages>;
    /** An array of industries associated with the theme. */
    industry?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The name of the theme. */
    name?: Maybe<Scalars['String']['output']>;
    /** The payment details of the theme. */
    payment?: Maybe<ThemePayment>;
    /** The release of the theme. */
    release?: Maybe<Release>;
    /** The slug of the theme. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** An object containing theme payment details. */
export type ThemePayment = {
    __typename?: 'ThemePayment';
    /** The amount of the theme. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Whether the theme is paid or not. */
    is_paid?: Maybe<Scalars['Boolean']['output']>;
};
export declare enum ThemeTypeEnum {
    React = "react",
    Vue2 = "vue2"
}
/** Additional files added as attachments to a ticket. */
export type TicketAsset = {
    __typename?: 'TicketAsset';
    /** Display text for asset. */
    display?: Maybe<Scalars['String']['output']>;
    /** Type of asset. */
    type: TicketAssetTypeEnum;
    /** To be used for details. */
    value: Scalars['String']['output'];
};
/** Additional files added as attachments to a ticket. */
export type TicketAssetInput = {
    /** Display text for asset. */
    display?: InputMaybe<Scalars['String']['input']>;
    /** Type of asset. */
    type: TicketAssetTypeEnum;
    /** To be used for details. */
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
/** Category assigned to the ticket. */
export type TicketCategory = {
    __typename?: 'TicketCategory';
    /** Category display value identifier. */
    display?: Maybe<Scalars['String']['output']>;
    /** Support category array list details. */
    feedback_form?: Maybe<FeedbackForm>;
    /** Group id of category related data. */
    group_id?: Maybe<Scalars['Float']['output']>;
    /** Category key value identifier. */
    key?: Maybe<Scalars['String']['output']>;
    /** Category assigned to the ticket. */
    sub_categories?: Maybe<TicketCategory>;
};
/** Content for the ticket. */
export type TicketContent = {
    __typename?: 'TicketContent';
    /** List of all attachments related to the ticket. */
    attachments?: Maybe<Array<Maybe<TicketAsset>>>;
    /** Long description of issue. */
    description?: Maybe<Scalars['String']['output']>;
    /** Title for ticket. */
    title: Scalars['String']['output'];
};
/** Content for the ticket. */
export type TicketContentInput = {
    /** List of all attachments related to the ticket. */
    attachments?: InputMaybe<Array<InputMaybe<TicketAssetInput>>>;
    /** Long description of issue. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Title for ticket. */
    title: Scalars['String']['input'];
};
/** Details of company and application related to the ticket. */
export type TicketContext = {
    __typename?: 'TicketContext';
    /** Unique identifier for a Sales channel. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Company ID related to the ticket. */
    company_id: Scalars['String']['output'];
};
export declare enum TicketSourceEnum {
    PlatformPanel = "platform_panel",
    SalesChannel = "sales_channel"
}
/** Represents a specific time with hour and minute. */
export type Time = {
    __typename?: 'Time';
    /** The hour part of the time. */
    hour?: Maybe<Scalars['Int']['output']>;
    /** The minute part of the time. */
    minute?: Maybe<Scalars['Int']['output']>;
};
/** Schema for time stamp data. */
export type TimeStampData = {
    __typename?: 'TimeStampData';
    /** The maximum timestamp value. */
    max?: Maybe<Scalars['String']['output']>;
    /** The minimum timestamp value. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Represents various tokens used for integrating different services within the application. */
export type TokenDetails = {
    __typename?: 'TokenDetails';
    /** Firebase integration details. */
    firebase?: Maybe<Firebase>;
    /** Freshchat integration details. */
    freshchat?: Maybe<Freshchat>;
    /** Fynd Rewards integration details. */
    fynd_rewards?: Maybe<FyndRewards>;
    /** Google Map integration details. */
    google_map?: Maybe<GoogleMap>;
    /** Google Tag Manager integration details. */
    gtm?: Maybe<Gtm>;
    /** Moengage integration details. */
    moengage?: Maybe<Moengage>;
    /** SafetyNet integration details. */
    safetynet?: Maybe<Safetynet>;
    /** Segment integration details. */
    segment?: Maybe<Segment>;
};
/** Describes the request structure to login or register using a token. */
export type TokenRequestBodySchemaInput = {
    /** Unique token. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** List of tokens associated with the sales channel. */
export type TokenSchema = {
    __typename?: 'TokenSchema';
    /** ISO 8601 timestamp of when token created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** User details. */
    created_by?: Maybe<Scalars['JSON']['output']>;
    /** Token string. */
    token?: Maybe<Scalars['String']['output']>;
};
/** Due Amount Details. */
export type TotalDueAmount = {
    __typename?: 'TotalDueAmount';
    /** Currency. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Formated Amount with currency symbol. */
    formatted_value?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Schema for individual shipment track. */
export type Track = {
    __typename?: 'Track';
    /** The name of the account handling the shipment. */
    account_name?: Maybe<Scalars['String']['output']>;
    /** The Air Waybill (AWB) number for the shipment. */
    awb?: Maybe<Scalars['String']['output']>;
    /** The last known location of the shipment. */
    last_location_recieved_at?: Maybe<Scalars['String']['output']>;
    /** The reason or additional information about the shipment. */
    reason?: Maybe<Scalars['String']['output']>;
    /** The type of shipment. */
    shipment_type?: Maybe<Scalars['String']['output']>;
    /** The current status of the shipment. */
    status?: Maybe<Scalars['String']['output']>;
    /** The date and time when the shipment was last updated. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** The timestamp of the last update. */
    updated_time?: Maybe<Scalars['String']['output']>;
};
/** Shipment tracking details. */
export type TrackShipment = {
    __typename?: 'TrackShipment';
    /** A array containing tracking details. */
    results?: Maybe<Array<Maybe<Track>>>;
};
/** Schema for tracking details. */
export type TrackingDetails = {
    __typename?: 'TrackingDetails';
    /** Timestamp when this status was created. */
    created_ts?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the tracking event is the current or active status. */
    is_current?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the tracking event has passed or occurred. */
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    /** The status of the tracking event. */
    status?: Maybe<Scalars['String']['output']>;
    /** The time associated with the tracking event. */
    time?: Maybe<Scalars['String']['output']>;
    /** Nested tracking details. */
    tracking_details?: Maybe<Array<Maybe<NestedTrackingDetails>>>;
    /** Current value or state of the process. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Transfer Items Details. */
export type TransferItem = {
    __typename?: 'TransferItem';
    /** Beneficiary Display Name. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Id of the transfer item. */
    id: Scalars['Int']['output'];
    /** Beneficiary large Logo. */
    logo_large: Scalars['String']['output'];
    /** Beneficiary small Logo. */
    logo_small: Scalars['String']['output'];
    /** Beneficiary Name. */
    name: Scalars['String']['output'];
};
/** Transfer Mode Details. */
export type TransferMode = {
    __typename?: 'TransferMode';
    /** Beneficiary Mode Name. */
    display_name: Scalars['String']['output'];
    /** Beneficiary Mode Items. */
    items?: Maybe<Array<Maybe<TransferItem>>>;
};
export declare enum Type {
    Permanent = "permanent",
    Temporary = "temporary"
}
/** Urls for umd javascript assets. */
export type UmdJs = {
    __typename?: 'UmdJs';
    /** An array of strings representing urls or links. */
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
/** Update address response details, includes address id, updated flag and success flag. */
export type UpdateAddressResponse = {
    __typename?: 'UpdateAddressResponse';
    /** ID of an address. */
    id?: Maybe<Scalars['String']['output']>;
    /** Default address flag if no address selected then this should be the default address selected. */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /** Updated flag for update address operation if the address updated or not. */
    is_updated?: Maybe<Scalars['Boolean']['output']>;
    /** Success flag of update address response. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Update cart detail response schema denotes cart data and message of the update cart API response. */
export type UpdateCartDetailResponse = {
    __typename?: 'UpdateCartDetailResponse';
    /** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
    cart?: Maybe<CartDetailResponse>;
    /** Message of update cart API response. */
    message?: Maybe<Scalars['String']['output']>;
    /** True if all items are added successfully. False if partially added or not added. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Update cart payment mode request schema to update payment mode by which the payment to be done to process the order, includes cart id, payment identifier, address id, merchant code, aggregator name and payment mode. */
export type UpdateCartPaymentRequestInput = {
    /** Address id of the user address selected to deliver the shipment. */
    address_id?: InputMaybe<Scalars['String']['input']>;
    /** Aggregator name of the payment gateway. */
    aggregator_name?: InputMaybe<Scalars['String']['input']>;
    /** Cart id of the user cart for which the update cart payment operation performed. */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Merchant code of the payment mode selected to do the payment. */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Payment identifier of the payment mode selected to do the payment. */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Payment mode of the payment selected to do the payment. */
    payment_mode?: InputMaybe<Scalars['String']['input']>;
};
/** Update cart request data that involves items in cart and operation to be performed for items specified. */
export type UpdateCartRequestInput = {
    /** List items data that needs to be updated in cart. */
    items?: InputMaybe<Array<InputMaybe<UpdateProductCartInput>>>;
    /** Field to determine if item to be removed from cart or it needs to be updated. */
    operation: Operation;
};
/** Describes the request structure to update the password. */
export type UpdatePasswordRequestSchemaInput = {
    /** New password. */
    new_password?: InputMaybe<Scalars['String']['input']>;
    /** Old password. */
    old_password?: InputMaybe<Scalars['String']['input']>;
};
/** Update cart product request schema details which includes artidcle id, custom json, extra meta, identifiers, item id, item size, item index, meta, parent item identifiers and quantity. */
export type UpdateProductCartInput = {
    /** Field to update custom json of the product in cart. */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Article id of the product in cart. */
    article_id?: InputMaybe<Scalars['String']['input']>;
    /** Field to update extra meta of the product in cart. */
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Product identifiers uniquely generated by cart to uniquely identify the product in cart. */
    identifiers: CartProductIdentiferInput;
    /** Item id of the product that needs to be updated. */
    item_id?: InputMaybe<Scalars['Int']['input']>;
    /** Item index determines on which index the product falls to be updated. */
    item_index?: InputMaybe<Scalars['Int']['input']>;
    /** Field to update the size of the product in cart. */
    item_size?: InputMaybe<Scalars['String']['input']>;
    /** Field to update meta of the item in cart. */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Field to update parent product of the item in cart. */
    parent_item_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    /** Field to update the quantity of the item in cart. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
/** Update Refund Transfer Request. */
export type UpdateRefundTransferModeRequestInput = {
    /** True for enabling the Transfer Mode. */
    enable: Scalars['Boolean']['input'];
    /** Transfer Mode of the Beneficiary to be added. */
    transfer_mode: Scalars['String']['input'];
};
/** Update Refund Transfer Moder response. */
export type UpdateRefundTransferModeResponse = {
    __typename?: 'UpdateRefundTransferModeResponse';
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for update shipment status request. */
export type UpdateShipmentStatusRequestInput = {
    /** Indicates whether the transition should be forced. */
    force_transition?: InputMaybe<Scalars['Boolean']['input']>;
    /** Indicates whether the status should be locked after the transition. */
    lock_after_transition?: InputMaybe<Scalars['Boolean']['input']>;
    /** An array containing different status details. */
    statuses?: InputMaybe<Array<InputMaybe<StatuesRequestInput>>>;
    /** Indicates whether the task is active or required. */
    task?: InputMaybe<Scalars['Boolean']['input']>;
    /** Indicates whether the status should be unlocked before the transition. */
    unlock_before_transition?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Describes the request structure to update the user attribute. */
export type UpdateUserAttributesRequestSchemaInput = {
    attributes?: InputMaybe<Scalars['JSON']['input']>;
};
/** Schema for url component of short link which contains original link to be shortened, the hash of URL and the shortened URL. */
export type UrlInfo = {
    __typename?: 'UrlInfo';
    /** A string value used for converting long URL to short URL and vice-versa. */
    hash?: Maybe<Scalars['String']['output']>;
    /** Original web address which will be converted to shortlink. */
    original?: Maybe<Scalars['String']['output']>;
    /** Condensed version of a longer URL, redirecting to the original page upon being clicked. */
    short_url?: Maybe<Scalars['String']['output']>;
};
/** Get user details like logged-in, active sessions, logout etc. */
export type User = {
    __typename?: 'User';
    /** Retrieve all active sessions of a user. */
    active_sessions?: Maybe<SessionList>;
    /** Check if a user has set an account password. */
    has_password?: Maybe<HasPassword>;
    /** Retrieve information about the currently logged-in user. */
    logged_in_user?: Maybe<UserDetail>;
    /** Logout currently logged-in user. */
    logout?: Maybe<Logout>;
};
export declare enum UserAction {
    Resend = "resend",
    Send = "send"
}
/** Contains user attributes Details */
export type UserAttributes = {
    __typename?: 'UserAttributes';
    /** Describes the structure of user attribute. */
    attributes?: Maybe<Scalars['JSON']['output']>;
};
/** Balance Details. */
export type UserBalance = {
    __typename?: 'UserBalance';
    /** Currency. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Formated Amount with currency symbol. */
    formatted_value?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Customer Credit Summary Response. */
export type UserCredit = {
    __typename?: 'UserCredit';
    /** Credit summary response. */
    data?: Maybe<UserCreditSummary>;
    /** Payment confirmation updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Credit limit. */
export type UserCreditLimit = {
    __typename?: 'UserCreditLimit';
    /** Currency. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Formated Amount with currency symbol. */
    formatted_value?: Maybe<Scalars['String']['output']>;
    /** Payment amount. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Credit summary. */
export type UserCreditSummary = {
    __typename?: 'UserCreditSummary';
    /** Url for activation. */
    activation_url?: Maybe<Scalars['String']['output']>;
    /** Current amount available. */
    amount_available?: Maybe<AmountAvailable>;
    /** Current balance. */
    balance?: Maybe<UserBalance>;
    /** Status from Credit aggregator end. */
    buyer_status?: Maybe<Scalars['String']['output']>;
    /** ID at Credit aggregator end. */
    credit_line_id?: Maybe<Scalars['String']['output']>;
    /** Due amount to paid. */
    due_amount?: Maybe<DueAmount>;
    /** Due date for repayment. */
    due_date?: Maybe<Scalars['String']['output']>;
    /** Eligibility flag to complete transaction. */
    is_eligible_for_txn?: Maybe<Scalars['Boolean']['output']>;
    /** Total credit limit. */
    limit?: Maybe<UserCreditLimit>;
    /** Unique aggregator customer id. */
    merchant_customer_ref_id?: Maybe<Scalars['String']['output']>;
    /** Url for repayment. */
    repayment_url?: Maybe<Scalars['String']['output']>;
    /** Statement of accounts. Show payment history. */
    soa_url?: Maybe<Scalars['String']['output']>;
    /** Customer Credit status. */
    status?: Maybe<Scalars['String']['output']>;
    /** Message to customer. */
    status_message?: Maybe<Scalars['String']['output']>;
    /** Due amount to paid. */
    total_due_amount?: Maybe<TotalDueAmount>;
};
/** Describes the user details structure. */
export type UserDetail = {
    __typename?: 'UserDetail';
    /** Type of user (user, programmatic (created by system)). */
    account_type?: Maybe<Scalars['String']['output']>;
    /** Is the user active. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Application id of the user. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Date and time of user creation. */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Date of birth of the user. */
    dob?: Maybe<Scalars['String']['output']>;
    /** List of email addresses of the user. */
    emails?: Maybe<Array<Maybe<Email>>>;
    /** Unique id referencing any user external documents (jio). */
    external_id?: Maybe<Scalars['String']['output']>;
    /** First name of the user. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** Gender of the user. */
    gender?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of user. */
    id?: Maybe<Scalars['String']['output']>;
    /** Last name of the user. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** Metadata of the user, used to store details about the user. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** List of phone numbers of the user. */
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    /** URL of the profile picture of the user. */
    profile_pic_url?: Maybe<Scalars['String']['output']>;
    /** Unique id referencing any user external documents. */
    rr_id?: Maybe<Scalars['String']['output']>;
    /** Date and time of user update. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Unique id of the user. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Unique username of the user. */
    username?: Maybe<Scalars['String']['output']>;
};
/** Detailed information about a user. */
export type UserDetails = {
    __typename?: 'UserDetails';
    /** The contact details of the user. */
    contact?: Maybe<Scalars['String']['output']>;
    /** A flag indicating whether the user is a super user. */
    super_user?: Maybe<Scalars['Boolean']['output']>;
    /** The user ID of the user. */
    user_id: Scalars['String']['output'];
    /** The username of the user. */
    username: Scalars['String']['output'];
};
/** Object representing a user's email information, including its active status, whether it's the primary email, verification status, and the email address itself. */
export type UserEmail = {
    __typename?: 'UserEmail';
    /** Current email is active or not active. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Email address of the user. */
    email?: Maybe<Scalars['String']['output']>;
    /** Indicates current email id primary email or not primary email of user. */
    primary?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates current email is verified email or not verified email. */
    verified?: Maybe<Scalars['Boolean']['output']>;
};
/** Returns true or false based on user is registered or not. */
export type UserExists = {
    __typename?: 'UserExists';
    /** Boolean which specifies if user is registered or not. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for user info. */
export type UserInfo = {
    __typename?: 'UserInfo';
    /** Email address of the user. */
    email?: Maybe<Scalars['String']['output']>;
    /** First name of the user. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** Gender of the user. */
    gender?: Maybe<Scalars['String']['output']>;
    /** Last name of the user. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** Mobile number of the user. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Full name of the user (including first and last names). */
    name?: Maybe<Scalars['String']['output']>;
};
/** A variant of a font, containing properties related to specific styles or weights of the font. */
export type VaariantDetail = {
    __typename?: 'VaariantDetail';
    /** The URL of the font file. */
    file?: Maybe<Scalars['String']['output']>;
    /** The name of the block. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Validate the detail of a given address. */
export type ValidateAddressRequestInput = {
    /** Complete address, combining address line 1, address line 2, area, landmark, sector, city, state, and pincode. */
    address?: InputMaybe<Scalars['String']['input']>;
    /** First line of the address, typically containing street or building information. */
    address1?: InputMaybe<Scalars['String']['input']>;
    /** Second line of the address, which can be used for additional address details if needed. */
    address2?: InputMaybe<Scalars['String']['input']>;
    /** Locality or area associated with the address. */
    area?: InputMaybe<Scalars['String']['input']>;
    /** Denote the city or municipality of the address. */
    city?: InputMaybe<Scalars['String']['input']>;
    /** Recipient's email address. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Prominent nearby landmark that aids in locating the address. */
    landmark?: InputMaybe<Scalars['String']['input']>;
    /** Recipient's name associated with the address. */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Recipient's contact phone number. */
    phone?: InputMaybe<Scalars['String']['input']>;
    /** Postal code or PIN code of the address area. */
    pincode?: InputMaybe<Scalars['String']['input']>;
    /** Specifies the sector or district of the address if applicable. */
    sector?: InputMaybe<Scalars['String']['input']>;
    /** Indicates the state or province of the address. */
    state?: InputMaybe<Scalars['String']['input']>;
};
/** Validate the detail of a given address. */
export type ValidateAddressResponse = {
    __typename?: 'ValidateAddressResponse';
    /** Complete address, combining address line 1, address line 2, area, landmark, sector, city, state, and pincode. */
    address?: Maybe<Scalars['String']['output']>;
    /** First line of the address, typically containing street or building information. */
    address1?: Maybe<Scalars['String']['output']>;
    /** Second line of the address, which can be used for additional address details if needed. */
    address2?: Maybe<Scalars['String']['output']>;
    /** Locality or area associated with the address. */
    area?: Maybe<Scalars['String']['output']>;
    /** Denote the city or municipality of the address. */
    city?: Maybe<Scalars['String']['output']>;
    /** Recipient's email address. */
    email?: Maybe<Scalars['String']['output']>;
    /** Prominent nearby landmark that aids in locating the address. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** Recipient's name associated with the address. */
    name?: Maybe<Scalars['String']['output']>;
    /** Recipient's contact phone number. */
    phone?: Maybe<Scalars['String']['output']>;
    /** Postal code or PIN code of the address area. */
    pincode?: Maybe<Scalars['String']['output']>;
    /** Specifies the sector or district of the address if applicable. */
    sector?: Maybe<Scalars['String']['output']>;
    /** Indicates the state or province of the address. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Validate customer by request. */
export type ValidateCustomerRequestInput = {
    /** Payment gateway name in camelcase i.e Simple, Rupifi. */
    aggregator: Scalars['String']['input'];
    /** Extra meta fields. */
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Extra meta fields. */
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Extra meta fields. */
    merchant_params?: InputMaybe<Scalars['JSON']['input']>;
    /** Extra meta fields. */
    order_items?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    /** Hashed payload string. */
    payload?: InputMaybe<Scalars['String']['input']>;
    /** User mobile number without country code. */
    phone_number: Scalars['String']['input'];
    /** Payable amount in paise. */
    transaction_amount_in_paise: Scalars['Int']['input'];
};
/** Validate Customer Response. */
export type ValidateCustomerResponse = {
    __typename?: 'ValidateCustomerResponse';
    /** Payment gateway response data. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Error or success message. */
    message?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Validate VPA Response. */
export type ValidateUpi = {
    __typename?: 'ValidateUPI';
    /** VPA Customer Name. */
    customer_name?: Maybe<Scalars['String']['output']>;
    /** Boolean is true or false. */
    is_valid: Scalars['Boolean']['output'];
    /** Response is successful or not. */
    status: Scalars['String']['output'];
    /** VPA address. */
    upi_vpa: Scalars['String']['output'];
};
/** Validate VPA Request. */
export type ValidateVpaRequestInput = {
    /** Aggregator slug. */
    aggregator?: InputMaybe<Scalars['String']['input']>;
    /** UPI ID. */
    upi_vpa: Scalars['String']['input'];
};
/** Validate VPA Response. */
export type ValidateVpaResponse = {
    __typename?: 'ValidateVPAResponse';
    /** Validate UPI. */
    data?: Maybe<ValidateUpi>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Defines validation rules for user addresses. */
export type ValidationConfig = {
    __typename?: 'ValidationConfig';
    /** The maximum number of addresses a user can have. */
    address_max_limit?: Maybe<Scalars['Int']['output']>;
    /** The total number of addresses saved by a user. */
    user_address_count?: Maybe<Scalars['Int']['output']>;
};
/** Describes the request structure to verify OTP for forgot email. */
export type VerifyEmailForgotOtpRequestSchemaInput = {
    /** Email id of user. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** OTP for verification. */
    otp?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully verifying an email OTP. */
export type VerifyEmailOtpSuccess = {
    __typename?: 'VerifyEmailOTPSuccess';
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Whether the email verification link was successful. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to verify OTP. */
export type VerifyEmailOtpRequestSchemaInput = {
    /** Action to verify the send or resent OTP. */
    action?: InputMaybe<Scalars['String']['input']>;
    /** Email of a user to verify OTP. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** OTP for verification. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Unique temporary registration of the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successful email verification. */
export type VerifyEmailSuccess = {
    __typename?: 'VerifyEmailSuccess';
    /** Result of the email verification process. */
    message?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the response received upon successful OTP verification for forgotten password. */
export type VerifyForgotOtpSuccess = {
    __typename?: 'VerifyForgotOtpSuccess';
    /** A token used for resetting the forgotten password. */
    forgot_token?: Maybe<Scalars['String']['output']>;
    /** Whether the OTP verification was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to verify OTP for forgot mobile number. */
export type VerifyMobileForgotOtpRequestSchemaInput = {
    /** OTP for verification. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Unique request id for the OTP. */
    request_id?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully verifying a mobile OTP. */
export type VerifyMobileOtpSuccess = {
    __typename?: 'VerifyMobileOTPSuccess';
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Whether the mobile number verification link was successful. */
    verify_mobile_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for verify otp. */
export type VerifyOtpInput = {
    /** The OTP code provided by the user for verification. */
    otp_code?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier for the request. */
    request_id?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to verify OTP. */
export type VerifyOtpRequestSchemaInput = {
    /** OTP for verification. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Unique temporary registration of the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Unique request id for the OTP sent to mobile number. */
    request_id?: InputMaybe<Scalars['String']['input']>;
};
/** Schema for verifying otp response. */
export type VerifyOtpResponse = {
    __typename?: 'VerifyOtpResponse';
    /** Indicates whether the request was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema representing the response received upon successful OTP verification. */
export type VerifyOtpSuccess = {
    __typename?: 'VerifyOtpSuccess';
    /** A token used for registration purposes. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Whether the user already exists. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
/** Wallet Dellinking Request schema. */
export type WalletDelinkRequestSchemaInput = {
    /** Aggregator Name. */
    aggregator: Scalars['String']['input'];
    /** Wallet Code. */
    wallet_code: Scalars['String']['input'];
};
/** Wallet Link Request schema. */
export type WalletLinkRequestSchemaInput = {
    /** Aggregator Name. */
    aggregator: Scalars['String']['input'];
    /** Mobile Number for Wallet. */
    mobile: Scalars['String']['input'];
    /** Wallet Code. */
    wallet_code: Scalars['String']['input'];
};
/** Wallet Otp Request. */
export type WalletOtpRequestInput = {
    /** Country Code of the Mobile Number. */
    country_code: Scalars['String']['input'];
    /** Wallet Mobile Number of the User. */
    mobile: Scalars['String']['input'];
};
/** Wallet OTP response. */
export type WalletOtpResponse = {
    __typename?: 'WalletOtpResponse';
    /** Boolean Flag whether OTP Validation is already done or not. */
    is_verified_flag: Scalars['String']['output'];
    /** Request Id for wallet otp request. */
    request_id: Scalars['String']['output'];
    /** Response is successful or not. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Wallet Response Schema. */
export type WalletResponse = {
    __typename?: 'WalletResponse';
    /** Response received from aggregator. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Success/Failure of the API call. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Wallet Verification Request Schema. */
export type WalletVerifyRequestSchemaInput = {
    /** Aggregator Name. */
    aggregator: Scalars['String']['input'];
    /** Token for wallet linking. */
    link_token: Scalars['String']['input'];
    /** OTP received for wallet linking. */
    otp: Scalars['Int']['input'];
};
/** Redirection schema for web that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
export type WebRedirect = {
    __typename?: 'WebRedirect';
    /** Fallback URL to redirect users to the app store or a web page if the app is not installed when they click the link. */
    link?: Maybe<Scalars['String']['output']>;
    /** Type of fallback used to redirect users to the app store or a web page if the app is not installed when they click the link. */
    type?: Maybe<WebRedirectType>;
};
/** Redirection schema for web that includes fallback URL, which is the URL to redirect users to the app store or a web page if the app is not installed, and fallback type, indicating whether the fallback directs users to the app store or a web page. */
export type WebRedirectInput = {
    /** Fallback URL to redirect users to the app store or a web page if the app is not installed when they click the link. */
    link?: InputMaybe<Scalars['String']['input']>;
    /** Type of fallback used to redirect users to the app store or a web page if the app is not installed when they click the link. */
    type?: InputMaybe<WebRedirectType>;
};
export declare enum WebRedirectType {
    Web = "web"
}
/** Represents the weight details of a product, including the unit of measurement and shipping weight. */
export type Weight = {
    __typename?: 'Weight';
    /** Whether the weight is the default one or not. */
    is_default: Scalars['Boolean']['output'];
    /** The shipping weight of the product. */
    shipping: Scalars['Float']['output'];
    /** The unit of weight. */
    unit: Scalars['String']['output'];
};
/** The schema for the communication channel for whatsapp channel which includes the response indicating the user's preference and the display name of the communication channel. */
export type WhatsappCommunication = {
    __typename?: 'WhatsappCommunication';
    /** Alphanumeric identification code for the users country. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Name of the channel of communication the user has agreed to receive messages through. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Phone number of the user that the user has accepted to receive communication through WhatsApp. */
    phone_number?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. */
    response?: Maybe<Scalars['String']['output']>;
};
/** An object of section preset. */
export type SectionPreset = {
    __typename?: 'sectionPreset';
    /** An array of blocks included in the section preset. */
    blocks?: Maybe<Array<Maybe<Block>>>;
};
export declare enum TemplateNameEnum {
    CheckoutForm = "checkout_form",
    DefaultDisplay = "default_display",
    StoreOsForm = "store_os_form"
}
