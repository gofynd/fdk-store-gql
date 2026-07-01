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
/** Status options for user accounts. */
export declare enum AccountStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Unregistered = "UNREGISTERED"
}
/** Actions that can be taken on data. */
export declare enum Action {
    Merge = "merge",
    Replace = "replace"
}
/** Actions that can be performed on cart items. */
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
/** Page routing configuration with navigation parameters and query filters. */
export type ActionPageDetail = {
    __typename?: 'ActionPageDetail';
    /** URL path parameters for dynamic routing, e.g. {'slug': 'nike', 'category': 'shoes'}. */
    params?: Maybe<Scalars['JSON']['output']>;
    /** Query parameters for filtering and search, e.g. {'brand': ['mothercare'], 'category': ['baby-products']}. */
    query?: Maybe<Scalars['JSON']['output']>;
    /** Target page type for navigation, e.g. 'products', 'product', 'category', 'brand', 'collection'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Action query schema which includes list of product slugs. */
export type ActionQuery = {
    __typename?: 'ActionQuery';
    /** Contains list of product slugs. Example: ['cotton-tshirt'] */
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
    /** Unique ID of the shipment */
    shipment_id?: InputMaybe<Scalars['String']['input']>;
};
/** [Deprecated] Request payload for adding a new refund beneficiary. This input type will be removed in future versions. Use `addBeneficiary` mutation with `AddBeneficiaryInput` instead. */
export type AddBeneficiaryDetailsRequestInput = {
    /** True if beneficiary to be added by delights or False if by User. This field will be removed in future versions. */
    delights: Scalars['Boolean']['input'];
    /** Nested object containing details of the beneficiary. */
    details: DetailsInput;
    /** Unique identifier for an order. */
    order_id: Scalars['String']['input'];
    /** OTP received by customer. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Request Id for add benificiary request. */
    request_id?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier of the shipment. */
    shipment_id: Scalars['String']['input'];
    /** Transfer Mode of the Beneficiary to be added. */
    transfer_mode: Scalars['String']['input'];
};
/** Input object to add a new refund beneficiary for a specific order and shipment. Use this when linking a bank account or UPI ID as the destination for refunds. */
export type AddBeneficiaryInput = {
    /** Details of the beneficiary (bank account or UPI). See `BeneficiaryDetailsInput` for required fields. */
    details: BeneficiaryDetailsInput;
    /** Unique identifier of the order (returned by checkoutCart mutation) for which the refund is being created.  */
    order_id: Scalars['String']['input'];
    /** Unique identifier of the shipment (returned by orders query) linked to the specified order. */
    shipment_id: Scalars['String']['input'];
};
/** Acknowledgement response returned after adding a new refund beneficiary. */
export type AddBeneficiaryResponseDetails = {
    __typename?: 'AddBeneficiaryResponseDetails';
    /** Full name of the bank account holder linked to the beneficiary. */
    account_holder?: Maybe<Scalars['String']['output']>;
    /** Masked bank account number of the beneficiary. eg XXXX-XXXX-1234 */
    account_no?: Maybe<Scalars['String']['output']>;
    /** Name of the bank. */
    bank_name?: Maybe<Scalars['String']['output']>;
    /** UUID assigned internally to this beneficiary. */
    id: Scalars['String']['output'];
    /** This flag indicates whether the beneficiary account is verified by the aggregator. */
    is_verified: Scalars['Boolean']['output'];
    /** Optional Logo URL of the bank. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Optional message describing the beneficiary addition status */
    message?: Maybe<Scalars['String']['output']>;
    /** UPI id of the beneficiary. eg johnddo@oksbi */
    upi?: Maybe<Scalars['String']['output']>;
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
    cart?: Maybe<AddItemToCartResponse>;
    /**
     * List of items that needs to be added in cart. Example: [{ item_id: 123, size: 'M', store_id: 1, success: true }]
     * @deprecated This field is obsolete
     */
    items?: Maybe<Array<Maybe<CartItemInfo>>>;
    /** Message of add to cart API response. Example: '2 items added to cart' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * When adding multiple items check if all added. True if only few are added. Example: false
     * @deprecated This field is obsolete
     */
    partial?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Contains per-article result info. Example: { 'ART123': { success: true, message: 'Added' } }
     * @deprecated This field is obsolete
     */
    result?: Maybe<Scalars['JSON']['output']>;
    /** True if all items are added successfully. False if partially added or not added. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Items to add to cart including item id, article id, size, meta, parent identifiers, article assignment, and custom JSON. Example: items=[{ item_id: 123, item_size: 'M', quantity: 2, store_id: 1 }] */
export type AddCartRequestInput = {
    /** List of items to add to the cart (with item id, size, quantity, etc.). Example: [{ item_id: 123, item_size: 'M', quantity: 2, store_id: 1 }] */
    items?: InputMaybe<Array<InputMaybe<CartItem>>>;
};
/** Select Address response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type AddItemToCartResponse = {
    __typename?: 'AddItemToCartResponse';
    /**
     * List of saved addresses for user cart checkout.
     * @deprecated This field is obsolete
     */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /**
     * Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }]
     * @deprecated This field is obsolete
     */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /**
     * Price breakup for coupon, display, loyalty points, etc.
     * @deprecated This field is obsolete
     */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy Now flag for fast checkout. Example: false */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Checkout mode (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /**
     * Cart-level comment. Example: 'Deliver after 6 PM'
     * @deprecated This field is obsolete
     */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /**
     * Cart-level coupon data (applied flag, code, amount, title, message).
     * @deprecated This field is obsolete , Use breakup_values.coupon instead
     */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /**
     * Currency for prices (e.g., code 'INR', symbol '₹').
     * @deprecated This field is obsolete
     */
    currency?: Maybe<CartCurrency>;
    /**
     * Custom cart metadata. Example: { channel: 'web' }
     * @deprecated This field is obsolete
     */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery charge informational message. Example: 'Free delivery above ₹999'
     * @deprecated This field is obsolete
     */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery promise for the cart.
     * @deprecated This field is obsolete
     */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /**
     * Whether promotion free gift selection is available. Example: true
     * @deprecated This field is obsolete
     */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /**
     * GSTIN associated with the cart. Example: '27AAACI1195H1ZK'
     * @deprecated This field is obsolete
     */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether the cart response is valid. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** List of cart items. When includeCartCalculation is false, only article uid and identifiers are populated per item. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message. Example: 'Cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /**
     * PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 }
     * @deprecated This field is obsolete
     */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /**
     * User PAN number. Example: 'ABCDE1234F'
     * @deprecated This field is obsolete
     */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /** Number of items in cart. Example: 3 */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Select Address response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type AddItemToCartResponseAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Details required to create a ticket. */
export type AddTicketPayloadInput = {
    /** Optional custom data that needs to be sent. */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Category of the ticket. */
    category: Scalars['String']['input'];
    /** Content for the ticket. */
    content: TicketContentInput;
    /** Describes the priority of the tickets created by the form. */
    priority?: InputMaybe<PriorityEnum>;
};
/** Address details including pincode, phone, id, country code, geolocation, country, state, city, landmark, email, etc. */
export type Address = {
    __typename?: 'Address';
    /** Address line(s). Example: '221B Baker Street' */
    address?: Maybe<Scalars['String']['output']>;
    /** Type of address. Example: 'home' */
    address_type?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel id.
     * @deprecated This field is obsolete
     */
    app_id?: Maybe<Scalars['String']['output']>;
    /** Area/locality. Example: 'Andheri East' */
    area?: Maybe<Scalars['String']['output']>;
    /** Area code. Example: '400059' */
    area_code?: Maybe<Scalars['String']['output']>;
    /** Area code slug (e.g., pincode in India). Example: 'pincode' */
    area_code_slug?: Maybe<Scalars['String']['output']>;
    /**
     * Checkout mode associated with this address (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** City of the address (e.g., Mumbai). Example: 'Mumbai' */
    city?: Maybe<Scalars['String']['output']>;
    /** Country of address (e.g., India). Example: 'India' */
    country?: Maybe<Scalars['String']['output']>;
    /**
     * Country phone code (e.g., '+91'). Example: '+91'
     * @deprecated This field is obsolete. Use 'country_phone_code' instead.
     */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Country ISO code (e.g., IN). Example: 'IN' */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** Country phone code (e.g., '+91'). Example: '+91' */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /** User ID that created the address. Example: 'usr_123' */
    created_by_user_id?: Maybe<Scalars['String']['output']>;
    /**
     * Custom JSON for address. Example: { instructions: 'Leave at the gate' }
     * @deprecated This field is obsolete
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Email address. Example: 'john.doe@example.com' */
    email?: Maybe<Scalars['String']['output']>;
    /** Geolocation coordinates. Example: { latitude: 19.076, longitude: 72.8777 } */
    geo_location?: Maybe<GeoLocation>;
    /** Google Maps geometry point. Example: { type: 'Point', coordinates: [72.8777, 19.076] } */
    google_map_point?: Maybe<Scalars['JSON']['output']>;
    /** Address identifier. Example: 'addr_001' */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Whether the address is active. Example: true
     * @deprecated This field is obsolete
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Whether address belongs to an anonymous user. Example: false */
    is_anonymous?: Maybe<Scalars['Boolean']['output']>;
    /** Whether this is the default address. Example: false */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /** Landmark. Example: 'Near City Mall' */
    landmark?: Maybe<Scalars['String']['output']>;
    /** Additional metadata. Example: { floor: '2nd' } */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Full name. Example: 'John Doe' */
    name?: Maybe<Scalars['String']['output']>;
    /** Phone number. Example: '9876543210' */
    phone?: Maybe<Scalars['String']['output']>;
    /** Sector/Block. Example: 'Sector 21' */
    sector?: Maybe<Scalars['String']['output']>;
    /** State. Example: 'Maharashtra' */
    state?: Maybe<Scalars['String']['output']>;
    /** State code. Example: 'MH' */
    state_code?: Maybe<Scalars['String']['output']>;
    /** Tags to identify the address. Example: ['home', 'default'] */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Numeric UID associated with the address. Example: 101 */
    uid?: Maybe<Scalars['Int']['output']>;
    /**
     * User ID the address belongs to. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** Address details including pincode, phone, id, country code, geolocation, country, state, city, landmark, email, etc. */
export type Address2Input = {
    /** Address line(s). Example: '221B Baker Street' */
    address?: InputMaybe<Scalars['String']['input']>;
    /** Type of address. Example: 'home' */
    address_type?: InputMaybe<Scalars['String']['input']>;
    /** Area/locality. Example: 'Andheri East' */
    area?: InputMaybe<Scalars['String']['input']>;
    /** Area code. Example: '400059' */
    area_code?: InputMaybe<Scalars['String']['input']>;
    /** Area code slug (e.g., pincode in India). Example: 'pincode' */
    area_code_slug?: InputMaybe<Scalars['String']['input']>;
    /** Checkout mode associated with this address (e.g., 'self', 'other'). Example: 'self' */
    checkout_mode?: InputMaybe<Scalars['String']['input']>;
    /** City of the address (e.g., Mumbai). Example: 'Mumbai' */
    city?: InputMaybe<Scalars['String']['input']>;
    /** Country of the address (e.g., India). Example: 'India' */
    country?: InputMaybe<Scalars['String']['input']>;
    /** Country ISO code (e.g., IN). Example: 'IN' */
    country_iso_code?: InputMaybe<Scalars['String']['input']>;
    /** Country phone code (e.g., '+91'). Example: '+91' */
    country_phone_code?: InputMaybe<Scalars['String']['input']>;
    /** Email address. Example: 'john.doe@example.com' */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Geolocation coordinates. Example: { latitude: 19.076, longitude: 72.8777 } */
    geo_location?: InputMaybe<GeoLocationInput>;
    /** Address identifier. Example: 'addr_001' */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Whether this is the default address. Example: false */
    is_default_address?: InputMaybe<Scalars['Boolean']['input']>;
    /** Landmark. Example: 'Near City Mall' */
    landmark?: InputMaybe<Scalars['String']['input']>;
    /** Additional metadata. Example: { floor: '2nd' } */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Full name. Example: 'John Doe' */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Phone number. Example: '9876543210' */
    phone?: InputMaybe<Scalars['String']['input']>;
    /** Postal code or PIN code of the address area. */
    pincode?: InputMaybe<Scalars['String']['input']>;
    /** Sector/Block. Example: 'Sector 21' */
    sector?: InputMaybe<Scalars['String']['input']>;
    /** State. Example: 'Maharashtra' */
    state?: InputMaybe<Scalars['String']['input']>;
    /** State code. Example: 'MH' */
    state_code?: InputMaybe<Scalars['String']['input']>;
    /** Tags to identify the address. Example: ['home', 'default'] */
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
/** Defines the type of address for business locations. */
export declare enum AddressType {
    /** Office or business operational address */
    Office = "office",
    /** Legal registered address of the company */
    Registered = "registered"
}
/** Address list response including PII masking and validation rules. */
export type Addresses = {
    __typename?: 'Addresses';
    /** List of saved addresses. */
    address?: Maybe<Array<Maybe<Address>>>;
    /** Whether PII masking is enabled for address data. Example: true */
    pii_masking?: Maybe<Scalars['Boolean']['output']>;
    /** Validation rules for user addresses. */
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
/** Aggregator Route Details. */
export type AggregatorRouteDetail = {
    __typename?: 'AggregatorRouteDetail';
    /** aggregator key. */
    aggregator_key: Scalars['String']['output'];
    /** API link of the aggregator. */
    api_link?: Maybe<Scalars['String']['output']>;
    /** Details about aggregator route. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Payment flow. */
    payment_flow?: Maybe<Scalars['String']['output']>;
    /** Payment flow data. */
    payment_flow_data?: Maybe<Scalars['JSON']['output']>;
    /** Type of the aggregator. */
    type?: Maybe<Scalars['String']['output']>;
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
    /**
     * Mswipe config detail schema.
     * @deprecated Deprecated mswipe aggregator.
     */
    mswipe?: Maybe<MSwipeAggregatorConfig>;
    /** PayUMoney config detail schema. */
    payumoney?: Maybe<PayuMoneyAggregatorConfig>;
    /** Razorpay config detail schema. */
    razorpay?: Maybe<RazorPayAggregatorConfig>;
    /**
     * Rupifi config detail schema.
     * @deprecated Deprecated rupifi aggregator.
     */
    rupifi?: Maybe<RupifyAggregatorConfig>;
    /** Simpl config detail schema. */
    simpl?: Maybe<SimplAggregatorConfig>;
    /**
     * Stripe config detail schema.
     * @deprecated Deprecated stripe aggregator.
     */
    stripe?: Maybe<StripeAggregatorConfig>;
    /** Api response was successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Details of an alternate person authorized to pick up the order. */
export type AlternatePickupPerson = {
    __typename?: 'AlternatePickupPerson';
    /** Country phone code (e.g., '+91'). Example: '+91' */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /** Email of the alternate pickup person. Example: 'jane@example.com' */
    email?: Maybe<Scalars['String']['output']>;
    /** Whether alternate pickup person is enabled. Example: true */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the alternate pickup person. Example: 'Jane Doe' */
    name?: Maybe<Scalars['String']['output']>;
    /** Phone number of the alternate pickup person. Example: '9876543210' */
    phone?: Maybe<Scalars['String']['output']>;
};
/** Alternate person authorized to pick up the order. */
export type AlternatePickupPersonInput = {
    /** Country phone code (e.g., '+91'). Example: '+91' */
    country_phone_code?: InputMaybe<Scalars['String']['input']>;
    /** Email of the alternate pickup person. Example: 'jane@example.com' */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Whether alternate pickup person is enabled. Example: true */
    enabled?: InputMaybe<Scalars['Boolean']['input']>;
    /** Name of the alternate pickup person. Example: 'Jane Doe' */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Phone number of the alternate pickup person. Example: '9876543210' */
    phone?: InputMaybe<Scalars['String']['input']>;
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
    /**
     * list of page slugs on which announcement should be fetched as soon as they are loaded. For example, ['home', 'products', 'cart'].
     * @deprecated This field is obsolete.
     */
    refresh_pages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** number of seconds after which api should hit again to fetch new announcements. For example, 900 or 1200. Default value is 900. */
    refresh_rate?: Maybe<Scalars['Int']['output']>;
};
/** Details about the sales channel, including its settings, metadata, and associated resources. */
export type AppBasicDetails = {
    __typename?: 'AppBasicDetails';
    /**
     * URL of the banner image for the sales channel.
     * @deprecated banner is deprecated. Use banner_url instead.
     */
    banner?: Maybe<SecureUrl>;
    /** URL of the banner image for the sales channel. */
    banner_url?: Maybe<Scalars['String']['output']>;
    /**
     * The ID of the company this sales channel belongs to.
     * @deprecated This field is obsolete.
     */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** Detailed description about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** Primary domain associated with the sales channel. */
    domain: Domain;
    /** List of domains associated with the sales channel. */
    domains: Array<Maybe<Domain>>;
    /**
     * URL for the favicon image for the sales channel.
     * @deprecated favicon is deprecated. Use favicon_url instead.
     */
    favicon?: Maybe<SecureUrl>;
    /** URL for the favicon image for the sales channel. */
    favicon_url?: Maybe<Scalars['String']['output']>;
    /** The unique ID for sales channel. */
    id: Scalars['String']['output'];
    /**
     * URL of the logo image for the sales channel.
     * @deprecated logo is deprecated. Use logo_url instead.
     */
    logo?: Maybe<SecureUrl>;
    /** URL of the logo image for the sales channel. */
    logo_url?: Maybe<Scalars['String']['output']>;
    /**
     * URL of the mobile version of the logo image for the sales channel.
     * @deprecated mobile_logo is deprecated. Use mobile_logo_url instead.
     */
    mobile_logo?: Maybe<SecureUrl>;
    /** URL of the mobile version of the logo image for the sales channel. */
    mobile_logo_url?: Maybe<Scalars['String']['output']>;
    /** Name of the sales channel, e.g. 'My Fashion Store'. */
    name: Scalars['String']['output'];
    /** URL-friendly identifier for the sales channel, e.g. 'my-fashion-store'. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Defines the country level currencies available. */
export type AppCountryCurrencies = {
    __typename?: 'AppCountryCurrencies';
    /** Currencies mapped for country. */
    currencies?: Maybe<Array<Maybe<CurrencyDetail>>>;
    /** Whether this is default country for Sales channel */
    is_default?: Maybe<Scalars['Boolean']['output']>;
    /** ISO2 code of the country */
    iso2?: Maybe<Scalars['String']['output']>;
    /** ISO3 code of the country */
    iso3?: Maybe<Scalars['String']['output']>;
    /** Name of the country */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for country entity */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Platform-specific credentials required for Firebase integration. */
export type AppCredentials = {
    __typename?: 'AppCredentials';
    /** Platform-specific API key for Firebase, e.g. 'AIzaSyC1234567890abcdef'. */
    api_key?: Maybe<Scalars['String']['output']>;
    /** Platform-specific application ID for the sales channel, e.g. 'com.example.app'. */
    application_id?: Maybe<Scalars['String']['output']>;
};
/** Response object containing details about currencies related to an application. */
export type AppCurrencyInfo = {
    __typename?: 'AppCurrencyInfo';
    /**
     * The unique identifier of the sales channel currency configuration.
     * @deprecated This field is obsolete.
     */
    _id?: Maybe<Scalars['String']['output']>;
    /**
     * The ID of the sales channel this currency info belongs to.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp when application sales channel currency was created, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Details of the default currency for the sales channel. */
    default_currency?: Maybe<DefaultCurrency>;
    /**
     * Timestamp when application sales channel currency was updated, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** A list of currencies supported by the sales channel. */
    supported_currency?: Maybe<Array<Maybe<Currency>>>;
};
/** Details about the sales channel, including its settings, metadata, and associated resources. */
export type AppDetails = {
    __typename?: 'AppDetails';
    /**
     * Shows whether sales channel is live or in development mode.
     * @deprecated This field is obsolete.
     */
    app_type?: Maybe<AppType>;
    /**
     * Authentication settings for the sales channel.
     * @deprecated This field is obsolete.
     */
    auth?: Maybe<ApplicationAuth>;
    /**
     * URL of the banner image for the sales channel.
     * @deprecated banner is deprecated. Use banner_url instead.
     */
    banner?: Maybe<SecureUrl>;
    /** URL of the banner image for the sales channel. */
    banner_url?: Maybe<Scalars['String']['output']>;
    /**
     * Cache time-to-live in seconds, e.g. 3600 for 1 hour.
     * @deprecated This field is obsolete.
     */
    cache_ttl?: Maybe<Scalars['Int']['output']>;
    /** Channel type like 'store', 'website-and-mobile-apps'. Default value is 'store'. */
    channel_type?: Maybe<Scalars['String']['output']>;
    /**
     * The ID of the company this sales channel belongs to.
     * @deprecated This field is obsolete.
     */
    company_id: Scalars['Int']['output'];
    /**
     * CORS configuration for the sales channel.
     * @deprecated This field is obsolete.
     */
    cors?: Maybe<ApplicationCors>;
    /**
     * Timestamp when sales channel was created, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at: Scalars['String']['output'];
    /** Detailed description about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** Primary domain associated with the sales channel. */
    domain: Domain;
    /** List of domains associated with the sales channel. */
    domains: Array<Maybe<Domain>>;
    /**
     * URL for the favicon image for the sales channel.
     * @deprecated favicon is deprecated. Use favicon_url instead.
     */
    favicon?: Maybe<SecureUrl>;
    /** URL for the favicon image for the sales channel. */
    favicon_url?: Maybe<Scalars['String']['output']>;
    /**
     * The unique identifier for sales channel.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether sales channel is active or inactive.
     * @deprecated This field is obsolete.
     */
    is_active: Scalars['Boolean']['output'];
    /**
     * Indicates whether a sales channel is internal or external.
     * @deprecated This field is obsolete.
     */
    is_internal?: Maybe<Scalars['Boolean']['output']>;
    /**
     * URL of the logo image for the sales channel.
     * @deprecated logo is deprecated. Use logo_url instead.
     */
    logo?: Maybe<SecureUrl>;
    /** URL of the logo image for the sales channel. */
    logo_url?: Maybe<Scalars['String']['output']>;
    /**
     * List of meta information for the sales channel.
     * @deprecated This field is obsolete.
     */
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    /**
     * URL of the mobile version of the logo image for the sales channel.
     * @deprecated mobile_logo is deprecated. Use mobile_logo_url instead.
     */
    mobile_logo?: Maybe<SecureUrl>;
    /** URL of the mobile version of the logo image for the sales channel. */
    mobile_logo_url?: Maybe<Scalars['String']['output']>;
    /**
     * Shows whether sales channel is in 'live' or 'development' mode.
     * @deprecated This field is obsolete.
     */
    mode: ApplicationMode;
    /**
     * Timestamp when sales channel was updated, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    modified_at: Scalars['String']['output'];
    /** Name of the sales channel, e.g. 'My Fashion Store'. */
    name: Scalars['String']['output'];
    /**
     * The unique ID of the owner who owns the sales channel.
     * @deprecated This field is obsolete.
     */
    owner?: Maybe<Scalars['String']['output']>;
    /**
     * List of redirections for the sales channel.
     * @deprecated This field is obsolete.
     */
    redirections?: Maybe<Array<Maybe<ApplicationRedirections>>>;
    /** A short URL-friendly identifier of a sales channel, e.g. 'my-fashion-store'. */
    slug: Scalars['String']['output'];
    /**
     * Current status of the sales channel, e.g. 'active', 'blocked'.
     * @deprecated This field is obsolete.
     */
    status: ApplicationStatus;
    /**
     * Randomly generated fixed length string for sales channel. It is required and auto-generated.
     * @deprecated This field is obsolete.
     */
    token?: Maybe<Scalars['String']['output']>;
    /**
     * List of tokens associated with the sales channel.
     * @deprecated This field is obsolete.
     */
    tokens?: Maybe<Array<Maybe<TokenSchema>>>;
    /**
     * Timestamp when sales channel was updated, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * Version key for tracking revisions. Default value is zero.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['Float']['output']>;
    /**
     * Sales channel website details.
     * @deprecated This field is obsolete.
     */
    website?: Maybe<ApplicationWebsite>;
};
/** Configuration for various features of the application. */
export type AppFeature = {
    __typename?: 'AppFeature';
    /**
     * Application ID of the sales channel.
     * @deprecated This field is obsolete.
     */
    app?: Maybe<Scalars['String']['output']>;
    /** Configuration options for the buybox feature. */
    buybox: BuyboxFeature;
    /** Configuration options for features related to the shopping cart, including GST input, staff selection, and coupon usage. */
    cart: CartFeature;
    /** Configuration for common features across the sales channel. */
    common: CommonFeature;
    /**
     * Timestamp when sales channel features configuration was created, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /**
     * Configuration for worldwide shipping and restricted shipping to specific stores and products within defined delivery areas.
     * @deprecated This field is obsolete.
     */
    delivery_strategy?: Maybe<DeliveryStrategy>;
    /** Fulfillment options define the different ways an order can be delivered or collected, such as standard delivery, express delivery, or store pickup. */
    fulfillment_option?: Maybe<FulfillmentOptionCount>;
    /** Configuration for the home page of the sales channel. */
    home_page: HomePageFeature;
    /**
     * Unique identifier for the sales channel features configuration.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /** Indicates whether international price factory enabled or not in sales channel. */
    international: Scalars['Boolean']['output'];
    /** Configuration for the landing page of the sales channel. */
    landing_page: LandingPageFeature;
    /**
     * Timestamp when sales channel features configuration was updated.
     * @deprecated This field is obsolete.
     */
    modified_at?: Maybe<Scalars['String']['output']>;
    /** Configuration options for order-related features, such as enabling the 'buy again' option. */
    order: OrderFeature;
    /**
     * Represents an ordering source that can be associated with a sales channel.
     * Ordering sources define the origin or platform from which orders are placed,
     * enabling tracking and differentiation of orders based on their source.
     */
    ordering_sources?: Maybe<Array<Maybe<OrderingSources>>>;
    /** Configuration for the Product Change Request feature. */
    pcr?: Maybe<ProductChangeRequestFeatureConfiguration>;
    /** Indicates the current price strategy for products: store_prices (default) applies store-level pricing, while price_factory applies prices set in the price factory */
    price_strategy: PriceStrategy;
    /**
     * Configuration for product detail features in the sales channel.
     * @deprecated This field is obsolete.
     */
    product_detail?: Maybe<ProductDetailFeature>;
    /** Configuration for the QR feature. */
    qr: QrFeature;
    /** Configuration for the registration page of the sales channel. */
    registration_page: RegistrationPageFeature;
    /** Configuration for security-related features of the sales channel. */
    security?: Maybe<SecurityFeature>;
    /**
     * Timestamp when sales channel features configuration was updated, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * Version key for tracking revisions. Default value is zero.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Response object containing token information for the sales channel. */
export type AppIntegrationTokens = {
    __typename?: 'AppIntegrationTokens';
    /**
     * Alphanumeric ID of the sales channel created within a business account.
     * @deprecated This field is obsolete.
     */
    application: Scalars['String']['output'];
    /**
     * ISO 8601 timestamp of token creation, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at: Scalars['String']['output'];
    /** The unique identifier of the token configuration. */
    id: Scalars['String']['output'];
    /**
     * ISO 8601 timestamp of token modification.
     * @deprecated This field is obsolete.
     */
    modified_at: Scalars['String']['output'];
    /** Integration tokens associated with the sales channel. */
    tokens: TokenDetails;
    /**
     * ISO 8601 timestamp of token update, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * Version key for tracking revisions. Default value is zero.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Represents a language supported by the sales channel. */
export type AppLanguages = {
    __typename?: 'AppLanguages';
    /** Language code, e.g. 'hi-IN', 'en-IN', 'ar-AE'. */
    code: Scalars['String']['output'];
    /** Language name, e.g. 'English', 'हिन्दी', 'عربى'. */
    name: Scalars['String']['output'];
};
/** Details about sales channel owner and configuration. */
export type AppOwnerInfo = {
    __typename?: 'AppOwnerInfo';
    /**
     * URL for the banner image of the sales channel.
     * @deprecated banner is deprecated. Use banner_url instead.
     */
    banner?: Maybe<SecureUrl>;
    /** URL for the banner image of the sales channel. */
    banner_url?: Maybe<Scalars['String']['output']>;
    /** Company information associated with the sales channel. */
    company_info: CompanyInfo;
    /**
     * CORS settings for the sales channel.
     * @deprecated This field is obsolete.
     */
    cors?: Maybe<ApplicationCors>;
    /**
     * ISO 8601 timestamp of sales channel information creation, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Detailed information about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /** The primary domain information associated with the sales channel. */
    domain: Domain;
    /** List of domains associated with the sales channel. */
    domains: Array<Maybe<Domain>>;
    /** URL for the favicon image of the sales channel. */
    favicon?: Maybe<SecureUrl>;
    /** The unique identifier of owner info. */
    id: Scalars['String']['output'];
    /** Indicates whether sales channel is active or inactive. */
    is_active: Scalars['Boolean']['output'];
    /**
     * URL for the logo image of the sales channel.
     * @deprecated logo is deprecated. Use logo_url instead.
     */
    logo?: Maybe<SecureUrl>;
    /** URL for the logo image of the sales channel. */
    logo_url?: Maybe<Scalars['String']['output']>;
    /** Metadata related to the sales channel. */
    meta?: Maybe<Array<Maybe<ApplicationMeta>>>;
    /**
     * URL for the mobile logo of the sales channel.
     * @deprecated mobile_logo is deprecated. Use mobile_logo_url instead.
     */
    mobile_logo?: Maybe<SecureUrl>;
    /** URL for the mobile logo of the sales channel. */
    mobile_logo_url?: Maybe<Scalars['String']['output']>;
    /**
     * Mode of the sales channel, e.g. 'live', 'development'.
     * @deprecated This field is obsolete.
     */
    mode?: Maybe<ApplicationMode>;
    /** Name of the sales channel, e.g. 'My Fashion Store'. */
    name: Scalars['String']['output'];
    /**
     * Information about the owner of the sales channel.
     * @deprecated This field is obsolete.
     */
    owner_info: OwnerInfo;
    /** Randomly generated fixed length secret string for sales channel. */
    secret?: Maybe<Scalars['String']['output']>;
    /** URL-friendly identifier for the sales channel, e.g. 'my-fashion-store'. */
    slug: Scalars['String']['output'];
    /**
     * Current status of the sales channel, e.g. 'active', 'inactive'.
     * @deprecated This field is obsolete.
     */
    status: ApplicationStatus;
    /** Randomly generated fixed length token string for sales channel. */
    token: Scalars['String']['output'];
    /**
     * List of tokens associated with the sales channel.
     * @deprecated This field is obsolete.
     */
    tokens?: Maybe<Array<Maybe<TokenSchema>>>;
    /** The website configuration of the sales channel. */
    website: ApplicationWebsite;
};
/** Types of applications supported. */
export declare enum AppType {
    Development = "development",
    Live = "live"
}
/** Structure of credentials of Apple social login. */
export type AppleSocialAccount = {
    __typename?: 'AppleSocialAccount';
    /** App ID (Client ID) of the Apple social login credentials. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** Redirect URI of the Apple social login credentials. */
    redirect_uri?: Maybe<Scalars['String']['output']>;
};
/** Configuration indicating whether authentication is enabled for the sales channel. */
export type ApplicationAuth = {
    __typename?: 'ApplicationAuth';
    /** Indicates whether sales channel authentication is enabled or disabled. */
    enabled: Scalars['Boolean']['output'];
};
/** Get details of the current sales channel. */
export type ApplicationConfiguration = {
    __typename?: 'ApplicationConfiguration';
    /**
     * Details about the currency supported by the sales channel, including its ID, name, code, and other attributes.
     * @deprecated This Query is obsolete and will be removed in a future release
     */
    app_currencies?: Maybe<AppCurrencyInfo>;
    /** Details about the sales channel, including its settings, metadata, and associated resources. */
    app_details?: Maybe<AppDetails>;
    /**
     * Details of a specific sales channel including its branding, domain, and associated information.
     * @deprecated basic_details will be removed in future. Use app_details instead.
     */
    basic_details?: Maybe<AppBasicDetails>;
    /** Get contact details of the sales channel. */
    contact_info?: Maybe<ContactInfo>;
    /** Details about country and mapped currencies on which sales channel is selling. This can be configured in 'Price Factory' feature */
    country_currencies?: Maybe<Array<Maybe<AppCountryCurrencies>>>;
    /** Response schema containing the sales channel feature details. */
    features?: Maybe<AppFeature>;
    /** Response object containing token information for the sales channel. */
    integration_tokens?: Maybe<AppIntegrationTokens>;
    /** Object containing a list of supported languages. */
    languages?: Maybe<Array<Maybe<AppLanguages>>>;
    /**
     * Details about the sales channel, including its company, owner, domain, and other relevant properties.
     * @deprecated This Query is obsolete and will be removed in a future release
     */
    owner_info?: Maybe<AppOwnerInfo>;
};
/** Schema represents application content details like faqs, data loaders, navigations etc. */
export type ApplicationContent = {
    __typename?: 'ApplicationContent';
    /**
     * List all current announcements in the application.
     * @deprecated This field is obsolete.
     */
    announcements?: Maybe<Announcements>;
    /** List all the blogs against an application. */
    blogs?: Maybe<Blogs>;
    /** List custom fields attached to a particular resource by using the resource. For example, resource: 'product', resourceId: '123456'. */
    custom_fields?: Maybe<CustomFields>;
    /**
     * List all the data loaders that are enabled for an application.
     * @deprecated This field is obsolete.
     */
    data_loaders?: Maybe<DataLoaders>;
    /** List categories for organizing FAQs. */
    faq_categories?: Maybe<FaqCategories>;
    /** List frequently asked questions and answers. */
    faqs?: Maybe<FaQs>;
    /** Get content of the application's landing page. */
    landing_page?: Maybe<LandingPage>;
    /** Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. */
    legal_information?: Maybe<LegalInformation>;
    /** Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. */
    navigations?: Maybe<Navigations>;
    /** Lists all Custom Pages. */
    pages?: Maybe<Pages>;
    /** Get search engine optimization configurations of an application. Details include the title, description and an image. */
    seo_configuration?: Maybe<SeoSchema>;
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
/** Configuration for Cross-Origin Resource Sharing, listing domains allowed to access the sales channel. */
export type ApplicationCors = {
    __typename?: 'ApplicationCors';
    /** List of domains allowed for CORS, e.g. ['https://example.com', 'https://admin.example.com']. */
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
    /** The contents of a answer of a FAQ. For example, 'You can return items within 30 days of purchase'. */
    answer?: Maybe<Scalars['String']['output']>;
    /** The contents of a question of a FAQ. For example, 'What is your return policy?'. */
    question?: Maybe<Scalars['String']['output']>;
};
/** Metadata related to the sales channel, including name-value pairs for additional information about the sales channel. */
export type ApplicationMeta = {
    __typename?: 'ApplicationMeta';
    /** Name of the metadata field, e.g. 'theme_color', 'analytics_id'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Value of the metadata field, e.g. '#FF5722', 'GA-123456789'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Defines the operational mode of the sales channel. */
export declare enum ApplicationMode {
    /** Sales channel is in development mode for testing */
    Development = "development",
    /** Sales channel is live and accessible to customers */
    Live = "live"
}
/** Details about domain redirections, including the old and new URLs and the type of redirection (permanent or temporary). */
export type ApplicationRedirections = {
    __typename?: 'ApplicationRedirections';
    /** Old domain URL of the sales channel, e.g. 'old.example.com'. */
    redirect_from?: Maybe<Scalars['String']['output']>;
    /** New domain URL of the sales channel, e.g. 'new.example.com'. Users will be automatically redirected from old domain to new domain. */
    redirect_to: Scalars['String']['output'];
    /** Domain redirection type. 'permanent' for long-term redirections, 'temporary' for short-term redirections. */
    type: Type;
};
/** Defines the current status of the sales channel. */
export declare enum ApplicationStatus {
    /** Sales channel is active and operational */
    Active = "active",
    /** Sales channel is blocked and not accessible */
    Blocked = "blocked"
}
/** Application store filter listing. */
export type ApplicationStoreFilterListing = {
    __typename?: 'ApplicationStoreFilterListing';
    /** Whether the filter is active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Filter logo URL. */
    logo?: Maybe<Scalars['String']['output']>;
    /** User who modified the filter. */
    modified_by?: Maybe<ModifiedBy>;
    /** Filter modification date and time. */
    modified_on?: Maybe<Scalars['String']['output']>;
    /** Filter name. */
    name?: Maybe<Scalars['String']['output']>;
    /** Filter priority order. */
    priority_order?: Maybe<Scalars['Int']['output']>;
    /** Filter slug. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique filter identifier. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Configuration for the sales channel's website, including whether it's enabled and its base path. */
export type ApplicationWebsite = {
    __typename?: 'ApplicationWebsite';
    /** Base path of the sales channel website, e.g. '/shop', '/store'. */
    basepath?: Maybe<Scalars['String']['output']>;
    /** Indicates whether sales channel website is enabled or disabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Fields to determine the free gift items to be received from the promotion applied. */
export type AppliedFreeArticles = {
    __typename?: 'AppliedFreeArticles';
    /** ID of the free article. Example: '5fdc737e3c05146138192f79' */
    article_id?: Maybe<Scalars['String']['output']>;
    /** Free gift item details. Example: { item_id: 987654, size: 'M' } */
    free_gift_item_details?: Maybe<FreeGiftItemDetails>;
    /** Parent item identifier for free article. Example: 'line_parent_01' */
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    /** Quantity of free articles. Example: 1 */
    quantity?: Maybe<Scalars['Int']['output']>;
};
/** Applied Promotion details. */
export type AppliedPromos = {
    __typename?: 'AppliedPromos';
    /** The discount amount provided by the promotion. For example, `amount` can be set to 1000.0. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** An array containing details of free articles applied under the promotion. For example, `applied_free_articles` can be set to [a OrderAppliedFreeArticles object]. */
    applied_free_articles?: Maybe<Array<Maybe<OrderAppliedFreeArticles>>>;
    /** The quantity of articles required to qualify for the promotion. For example, `article_quantity` can be set to 99.99. */
    article_quantity?: Maybe<Scalars['Float']['output']>;
    /** Indicates if the promotion is applied to the MRP. For example, `mrp_promotion` can be set to true. */
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    /** The unique identifier for the promotion. For example, `promo_id` can be set to '507f1f77bcf86cd799439011'. */
    promo_id?: Maybe<Scalars['String']['output']>;
    /** The name of the promotion . For example, `promotion_name` can be set to 'Sample Name'. */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** The type of promotion. For example, `promotion_type` can be set to 'value'. */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Fields to determine the applied promotions details on a product. */
export type AppliedPromotion = {
    __typename?: 'AppliedPromotion';
    /** Per unit discount amount applied with current promotion. Example: 50.0 */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Applied free articles for free gift promotions. Example: [{ article_id: '5fdc737e3c05146138192f79', quantity: 1 }] */
    applied_free_articles?: Maybe<Array<Maybe<AppliedFreeArticles>>>;
    /** Quantity of article on which promotion is applicable. Example: 2 */
    article_quantity?: Maybe<Scalars['Int']['output']>;
    /** Buy rules for promotions. Example: [{ item_criteria: { brands: [123] } }] */
    buy_rules?: Maybe<Array<Maybe<BuyRules>>>;
    /** Whether cancellation is allowed for orders with this coupon. Example: true */
    cancellation_allowed?: Maybe<Scalars['Boolean']['output']>;
    /** Promotion code. Example: 'DIWALI10' */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency of the price for the cart. Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CartCurrency>;
    /** Additional custom attributes associated with the applied promotion for extended functionality and tracking */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Discount rules for promotions. Example: [{ offer: { percentage: 10 } }] */
    discount_rules?: Maybe<Array<Maybe<DiscountRulesApp>>>;
    /** Meta object for extra data. Example: { stackable: true } */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Whether promotion applies on product MRP or ESP. Example: true */
    mrp_promotion?: Maybe<Scalars['Boolean']['output']>;
    /** Offer label for display. Example: 'Festive Offer' */
    offer_label?: Maybe<Scalars['String']['output']>;
    /** Offer text of current promotion. Example: '10% OFF' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Ownership of promotion. Example: { payable_by: 'merchant', payable_category: 'marketing' } */
    ownership?: Maybe<Ownership>;
    /** Promotion id. Example: 'PROMO123' */
    promo_id?: Maybe<Scalars['String']['output']>;
    /** Promotion group. Example: 'payment' */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Promotion name. Example: 'Diwali Sale' */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type. Example: 'percentage' */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Fields to determine the applied promotions details on a product. */
export type AppliedPromotionCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Request to apply a coupon on the cart. */
export type ApplyCouponRequestInput = {
    /** Coupon code. Example: 'SAVE10' */
    coupon_code: Scalars['String']['input'];
};
/** Apply loyalty points response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type ApplyLoyaltyPointsResponse = {
    __typename?: 'ApplyLoyaltyPointsResponse';
    /**
     * List of saved addresses for user cart checkout.
     * @deprecated This field is obsolete
     */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /**
     * Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }]
     * @deprecated This field is obsolete
     */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup for coupon, display, loyalty points, etc. */
    breakup_values?: Maybe<CartBreakup>;
    /**
     * Buy Now flag for fast checkout. Example: false
     * @deprecated This field is obsolete
     */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Checkout mode (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /**
     * Cart-level comment. Example: 'Deliver after 6 PM'
     * @deprecated This field is obsolete
     */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /**
     * Cart-level coupon data (applied flag, code, amount, title, message).
     * @deprecated This field is obsolete , Use breakup_values.coupon instead
     */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /**
     * Currency for prices (e.g., code 'INR', symbol '₹').
     * @deprecated This field is obsolete
     */
    currency?: Maybe<CartCurrency>;
    /**
     * Custom cart metadata. Example: { channel: 'web' }
     * @deprecated This field is obsolete
     */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery charge informational message. Example: 'Free delivery above ₹999'
     * @deprecated This field is obsolete
     */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery promise for the cart.
     * @deprecated This field is obsolete
     */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /**
     * Whether promotion free gift selection is available. Example: true
     * @deprecated This field is obsolete
     */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /**
     * GSTIN associated with the cart. Example: '27AAACI1195H1ZK'
     * @deprecated This field is obsolete
     */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Whether the cart response is valid. Example: true
     * @deprecated This field is obsolete
     */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /**
     * List of cart items including item id, size, store, pricing, etc.
     * @deprecated This field is obsolete
     */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message. Example: 'Cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /**
     * PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 }
     * @deprecated This field is obsolete
     */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /**
     * User PAN number. Example: 'ABCDE1234F'
     * @deprecated This field is obsolete
     */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Number of items in cart. Example: 3
     * @deprecated This field is obsolete
     */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Apply loyalty points response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type ApplyLoyaltyPointsResponseAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Contains array of tags associated with the article. */
export type Article = {
    __typename?: 'Article';
    /** An array of tags associated with the article. For example, `tags` can be set to ['value']. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/**
 * Article assignment strategy configuration for fulfillment optimization.
 * This object has been deprecated and will be removed in future release.
 */
export type ArticleAssignment = {
    __typename?: 'ArticleAssignment';
    /** Assignment scope level: 'multi-companies', 'single-company', or 'single-store'. */
    level?: Maybe<Scalars['String']['output']>;
    /** Assignment strategy method: 'optimal', 'fast-delivery', 'low-price', or 'manual'. */
    strategy?: Maybe<Scalars['String']['output']>;
};
/** Article assignment rules (level/strategy). Example: { level: 'item', strategy: 'fast-delivery/optimal/low-price/manual' } */
export type ArticleAssignmentInput = {
    /** Article assignment level. Example: 'item' */
    level?: InputMaybe<Scalars['String']['input']>;
    /** Article assignment strategy. Example: 'fast-delivery/optimal/low-price/manual' */
    strategy?: InputMaybe<Scalars['String']['input']>;
};
/** Pricing information for the free gift article, including both the initial marked price and the final effective price after applying the product discount. */
export type ArticlePriceDetails = {
    __typename?: 'ArticlePriceDetails';
    /** Effective price after discounts. Example: 599.0 */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Marked price of the article. Example: 799.0 */
    marked?: Maybe<Scalars['Float']['output']>;
};
/** Article level price details which includes base and converted prices of article. */
export type ArticlePriceInfo = {
    __typename?: 'ArticlePriceInfo';
    /** Base price information (currency code/symbol, effective, marked, selling). Example: { currency_code: 'INR', effective: 499 } */
    base?: Maybe<BasePrice>;
    /** Converted price information (currency code/symbol, effective, marked, selling). Example: { currency_code: 'INR', effective: 499 } */
    converted?: Maybe<BasePrice>;
};
/** Data related to image. */
export type Asset = {
    __typename?: 'Asset';
    /** Aspect ratio of the image. For example, '16:9' or '1:1'. */
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for an entry. For example, 'img_123456' or '67890abcdef'. */
    id?: Maybe<Scalars['String']['output']>;
    /** URL of the image. For example, 'https://cdn.example.com/images/blog-image.jpg'. */
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
/** Product attribute group containing related specifications. */
export type Attribute = {
    __typename?: 'Attribute';
    /** List of specific attributes within this group like color options, technical specs, or dimensions. */
    details?: Maybe<Array<Maybe<AttributeDetail>>>;
    /** The id of the attribute group. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the attribute group, e.g. 'Display', 'Performance', 'Design', 'Connectivity'. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Detailed information about a specific product attribute. */
export type AttributeDetail = {
    __typename?: 'AttributeDetail';
    /** Detailed description explaining the attribute and its significance. */
    description?: Maybe<Scalars['String']['output']>;
    /** User-friendly display name, e.g. 'Screen Size', 'RAM', 'Storage Capacity'. */
    display?: Maybe<Scalars['String']['output']>;
    /** Unique identifier key for the attribute, e.g. 'screen_size', 'ram', 'storage'. */
    key?: Maybe<Scalars['String']['output']>;
    /** URL to icon or logo representing the attribute, e.g. 'https://cdn.example.com/icons/display.png'. */
    logo?: Maybe<Scalars['String']['output']>;
};
/** Schema representing masking properties */
export type AttributeMaskingProperties = {
    __typename?: 'AttributeMaskingProperties';
    /** Whether masking is enabled for this attribute. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Type of masking applied. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Schema representing registration option details */
export type AttributeRegistrationProperties = {
    __typename?: 'AttributeRegistrationProperties';
    /** Whether this attribute is used during customer registration. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Defines if the attribute is mandatory or optional at registration. */
    type?: Maybe<RegistrationType>;
};
/** Defines supported types of user attribute values. */
export declare enum AttributeType {
    /** Boolean value (true/false). */
    Boolean = "boolean",
    /** Date value (e.g., YYYY-MM-DD). */
    Date = "date",
    /** Date and time value (e.g., 2024-01-01T12:00:00Z). */
    DateTime = "date_time",
    /** Dropdown with predefined options. */
    Dropdown = "dropdown",
    /** Encrypted boolean value. */
    EncryptedBoolean = "encrypted_boolean",
    /** Encrypted date value. */
    EncryptedDate = "encrypted_date",
    /** Encrypted date and time value. */
    EncryptedDateTime = "encrypted_date_time",
    /** Encrypted dropdown with predefined options. */
    EncryptedDropdown = "encrypted_dropdown",
    /** Encrypted numeric value. */
    EncryptedNumber = "encrypted_number",
    /** Encrypted array of numeric values. */
    EncryptedNumberArray = "encrypted_number_array",
    /** Encrypted plain text value. */
    EncryptedString = "encrypted_string",
    /** Encrypted array of plain text values. */
    EncryptedStringArray = "encrypted_string_array",
    /** HTML-formatted string content. */
    HtmlString = "html_string",
    /** URL pointing to a resource. */
    ImageUrl = "image_url",
    /** Numeric value (single). */
    Number = "number",
    /** Array of numeric values. */
    NumberArray = "number_array",
    /** Array of platform user IDs (e.g., for relationships). */
    PlatformUserArray = "platform_user_array",
    /** Array of store IDs associated with the user. */
    StoreUidArray = "store_uid_array",
    /** Plain text value (single). */
    String = "string",
    /** Array of plain text values. */
    StringArray = "string_array"
}
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
    /** A token used for registration purposes will be sent when user is not registered. */
    register_token?: Maybe<Scalars['String']['output']>;
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Boolean which specifies if user is registered. */
    user_exists?: Maybe<Scalars['Boolean']['output']>;
};
/** Data related to author of blog. */
export type Author = {
    __typename?: 'Author';
    /** Description of the author of blog. For example, 'Fashion Editor' or 'Content Writer'. */
    designation?: Maybe<Scalars['String']['output']>;
    /** Unique Identifier of the author of blog. For example, 'author_123456' or '67890abcdef'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the author of blog. For example, 'John Doe' or 'Jane Smith'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** An object representing theme page detail. */
export type AvailablePage = {
    __typename?: 'AvailablePage';
    /** ISO 8601 timestamp of creation of the application information. */
    created_at?: Maybe<Scalars['String']['output']>;
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
    /** ISO 8601 timestamp of updation of the application information. */
    updated_at?: Maybe<Scalars['String']['output']>;
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
    /** Asset urls for the section. e.g. js, css */
    assets?: Maybe<SectionAssets>;
    /** An array of blocks within the section, where each block is represented as an object. */
    blocks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** The name of the canvas. */
    canvas?: Maybe<Scalars['String']['output']>;
    /** Custom css of the section. */
    custom_css?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the section. */
    id?: Maybe<Scalars['String']['output']>;
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
    source?: Maybe<SectionSource>;
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
    /** An object containing preset configurations for the section. */
    preset?: Maybe<SectionPreset>;
    /** An array of objects representing properties or attributes of the section item. */
    props?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};
/** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
export type AvailableStore = {
    __typename?: 'AvailableStore';
    /**
     * The address details of the store.
     * @deprecated This field is obsolete.
     */
    address?: Maybe<StoreAddress>;
    /**
     * A unique code or identifier for the store, often used for internal reference.
     * @deprecated This field is obsolete.
     */
    code?: Maybe<Scalars['String']['output']>;
    /**
     * The count associated with the store.
     * @deprecated This field is obsolete.
     */
    count?: Maybe<Scalars['Int']['output']>;
    /** Additional custom attributes associated with the store for extended store configuration and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /**
     * Longitude and latitude coordinates, possibly indicating the location of the store or warehouse where the product is stocked.
     * @deprecated This field is obsolete.
     */
    long_lat?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    /** The name of the store. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
export type AvailableStoreCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
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
    /** Indicates whether the text box added for remarks is optional or mandatory. For example, `remark_required` can be set to true. */
    remark_required?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether to display a text box on the front end. For example, `show_text_area` can be set to true. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for individual bag reason. */
export type BagReasons = {
    __typename?: 'BagReasons';
    /** The text displayed. For example, `display_name` can be set to 'Sample Name'. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier. For example, `id` can be set to 1. */
    id?: Maybe<Scalars['Int']['output']>;
    /** Schema for bag reason meta. For example, `meta` can be set to a BagReasonMeta object. */
    meta?: Maybe<BagReasonMeta>;
    /** A list of quality check types. For example, `qc_type` can be ['pre_qc', 'doorstep_qc']. */
    qc_type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A list of questions for delivery partner. For example, `question_set` can be set to [a QuestionSet object]. */
    question_set?: Maybe<Array<Maybe<QuestionSet>>>;
    /** A list of reasons. For example, `reasons` can be set to [a BagReasons object]. */
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
};
/** Schema for bags available for reorder, can be used to create a new order from a previous purchase. */
export type BagsForReorder = {
    __typename?: 'BagsForReorder';
    /** Schema for article assignment describing how reorder inventory is sourced. For example, { level: 'single-company', strategy: 'optimal' }. */
    article_assignment?: Maybe<BagsForReorderArticleAssignment>;
    /** The unique identifier of the item to be reordered. For example, 95988. */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** The size of the item. For example, 'M'. */
    item_size?: Maybe<Scalars['String']['output']>;
    /** The quantity of the item. For example, 1. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The identifier for the seller providing the inventory. For example, 85. */
    seller_id?: Maybe<Scalars['Int']['output']>;
    /** The identifier for the store fulfilling the order. For example, 616. */
    store_id?: Maybe<Scalars['Int']['output']>;
};
/** Schema for article assignment describing how reorder inventory is sourced, used to determine the source of the inventory for the reordered item. */
export type BagsForReorderArticleAssignment = {
    __typename?: 'BagsForReorderArticleAssignment';
    /** The level at which the article assignment is made. Can be single-company or multi-companies. Default: multi-companies. For example, 'single-company' for a single company or 'multi-companies' for multiple companies. */
    level?: Maybe<Scalars['String']['output']>;
    /** The strategy used for article assignment. Can be optimal or fast-delivery. For example, 'optimal' for the optimal strategy or 'fast-delivery' for the fast-delivery strategy. */
    strategy?: Maybe<Scalars['String']['output']>;
};
/** Represents a beneficiary registered with bank account details in the system. */
export type BankBeneficiary = {
    __typename?: 'BankBeneficiary';
    /** Full name of the bank account holder linked to the beneficiary. */
    account_holder: Scalars['String']['output'];
    /** Masked bank account number of the beneficiary. */
    account_no: Scalars['String']['output'];
    /** Human-readable display name for this bank account type. */
    display_name: Scalars['String']['output'];
    /** Unique ID assigned to the beneficiary. */
    id: Scalars['String']['output'];
    /** IFSC code of the beneficiary’s bank branch. */
    ifsc_code: Scalars['String']['output'];
    /** Whether the beneficiary’s bank account is active. */
    is_active: Scalars['Boolean']['output'];
    /** Whether the beneficiary’s bank account has been verified. */
    is_verified: Scalars['Boolean']['output'];
    /** Optional logo URL of the beneficiary’s bank. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Transfer mode associated with the beneficiary. Typically 'bank'. */
    transfer_mode: Scalars['String']['output'];
};
/** Bank Details For OTP. */
export type BankDetailsForOtpInput = {
    /** Name of the account holder. */
    account_holder?: InputMaybe<Scalars['String']['input']>;
    /** Account number of the holder. */
    account_no?: InputMaybe<Scalars['String']['input']>;
    /** Name of the bank. */
    bank_name?: InputMaybe<Scalars['String']['input']>;
    /** Branch name of the bank. */
    branch_name?: InputMaybe<Scalars['String']['input']>;
    /** IFSC code of the bank. */
    ifsc_code?: InputMaybe<Scalars['String']['input']>;
    /** UPI ID. */
    upi?: InputMaybe<Scalars['String']['input']>;
};
/** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
export type BaseInfo = {
    __typename?: 'BaseInfo';
    /** Name of the entity (brand or seller). Example: 'Fynd Retail' */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the entity. Example: 2001 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Base price information like currency code, currency symbol, effective and marked, selling prices. */
export type BasePrice = {
    __typename?: 'BasePrice';
    /** Currency code for all amounts (ISO 4217), e.g., 'INR'. Example: 'INR' */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol, e.g., '₹'. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Per-unit effective price after deductions. Example: 499.0 */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Original (marked) price. Example: 799.0 */
    marked?: Maybe<Scalars['Float']['output']>;
    /** Selling price of the product. Example: 549.0 */
    selling?: Maybe<Scalars['Float']['output']>;
};
/** Order Beneficiary Details. */
export type BeneficiaryDetails = {
    __typename?: 'BeneficiaryDetails';
    /** Account Holder Name. */
    account_holder?: Maybe<Scalars['String']['output']>;
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
/** Input object for beneficiary details like account holder name, number, IFSC for bank details and upi for UPI details */
export type BeneficiaryDetailsInput = {
    /** Full name of the bank account holder (required for BANK). */
    account_holder?: InputMaybe<Scalars['String']['input']>;
    /** Bank account number of the beneficiary (required for BANK). */
    account_no?: InputMaybe<Scalars['String']['input']>;
    /** IFSC code of the bank account (required for BANK). */
    ifsc_code?: InputMaybe<Scalars['String']['input']>;
    /** UPI ID (Virtual Payment Address) of the beneficiary (required for UPI). */
    upi?: InputMaybe<Scalars['String']['input']>;
};
/** Billing address data in shipment. */
export type BillingAddress = {
    __typename?: 'BillingAddress';
    /** The full address. For example, '123 Main Street, Downtown, Panjim'. */
    address?: Maybe<Scalars['String']['output']>;
    /** The primary line of the address. For example, '123 Main Street, Downtown'. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The secondary line of the address. For example, 'Apartment 2B'. */
    address2?: Maybe<Scalars['String']['output']>;
    /** The category of the address. For example, 'delivery'. */
    address_category?: Maybe<Scalars['String']['output']>;
    /** The type of address. For example, 'home'. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** The area or locality. For example, '203'. */
    area?: Maybe<Scalars['String']['output']>;
    /** The city of the address. For example, 'Panjim'. */
    city?: Maybe<Scalars['String']['output']>;
    /** The name of the contact person. For example, 'Anil Joshi'. */
    contact_person?: Maybe<Scalars['String']['output']>;
    /** The country of the address. For example, 'India'. */
    country?: Maybe<Scalars['String']['output']>;
    /** The ISO code for the country. For example, 'IN'. */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** The country phone code. For example, '+91'. */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the address was created. For example, '2023-01-14T06:17:37Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** The formatted display address, typically used for printing or displaying in user interfaces. For example, '123 Main Street, Downtown, Panjim, Goa 403521'. */
    display_address?: Maybe<Scalars['String']['output']>;
    /** The email address. For example, 'user@example.com'. */
    email?: Maybe<Scalars['String']['output']>;
    /** A nearby landmark. For example, 'Gujarat'. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** The latitude coordinate. For example, 19.0760. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** The longitude coordinate. For example, 73.8286. */
    longitude?: Maybe<Scalars['Float']['output']>;
    /** The name of the person associated with the address. For example, 'John Doe'. */
    name?: Maybe<Scalars['String']['output']>;
    /** The phone number of the person associated with the address. For example, '9876543210'. */
    phone?: Maybe<Scalars['String']['output']>;
    /** The postal code of the address. For example, '400001'. */
    pincode?: Maybe<Scalars['String']['output']>;
    /** The state of the address. For example, 'Goa'. */
    state?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the address was last updated. For example, '2024-10-05T09:00:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * The version of the address format. For example, 'v2'.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['String']['output']>;
};
/** An array of blocks included in the section, each represented by an object conforming to the block schema. */
export type Block = {
    __typename?: 'Block';
    /** The name of the block. */
    name?: Maybe<Scalars['String']['output']>;
    /** The props of the block. */
    props?: Maybe<Scalars['JSON']['output']>;
    /** The type of the block. */
    type?: Maybe<Scalars['String']['output']>;
};
/** All relevant data related to a blog. */
export type Blog = {
    __typename?: 'Blog';
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Boolean flag denoting whether blog is archived or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Data related to author of blog. */
    author?: Maybe<Author>;
    /** Contents of blog. */
    content?: Maybe<Array<Maybe<ResourceContent>>>;
    /**
     * Custom JSON object for specific use cases.
     * @deprecated This field is obsolete.
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details related to resource creation and updation. */
    date_meta?: Maybe<DateMeta>;
    /** Data related to image. */
    feature_image?: Maybe<Asset>;
    /** Unique identifier for an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Timestamp denoting when the blog was published. For example, '2020-03-14T09:25:17.628+0000'. */
    publish_date?: Maybe<Scalars['String']['output']>;
    /**
     * Boolean flag denoting whether blog is published or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    published?: Maybe<Scalars['Boolean']['output']>;
    /** Estimated time required to read the blog. For example, '5 min' or '10 minutes'. */
    reading_time?: Maybe<Scalars['String']['output']>;
    /** Details related to SEO of an entry. */
    seo?: Maybe<SeoDetails>;
    /** A short, human-readable, URL-friendly identifier. For example, 'summer-collection-2024' or 'how-to-style-your-wardrobe'. */
    slug?: Maybe<Scalars['String']['output']>;
    /**
     * Status of the blog. For example, 'published', 'draft', or 'archived'.
     * @deprecated This field is obsolete.
     */
    status?: Maybe<Scalars['String']['output']>;
    /** A brief description of blog. For example, 'Discover the latest summer fashion trends and styles'. */
    summary?: Maybe<Scalars['String']['output']>;
    /** Tags under a blog. For example, ['fashion', 'lifestyle', 'trends']. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Title of the Blog. For example, 'Summer Fashion Trends 2024'. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Filters available for blogs. */
export type BlogFilters = {
    __typename?: 'BlogFilters';
    /** All tags present under blogs. For example, ['fashion', 'lifestyle', 'trends']. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
    /** Navigation action configuration for brand page routing and deep linking functionality. */
    action?: Maybe<PageActionDetail>;
    /** Collection of banner images for brand promotion and visual identity, including desktop and mobile variants. */
    banners?: Maybe<ImageUrls>;
    /** Additional configuration and metadata for customizing brand presentation and behavior. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** List of departments where brand products are categorized, e.g. ['fashion', 'sports', 'electronics']. */
    departments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Comprehensive brand description including history, values, product range, and brand story, e.g. 'Premium athletic wear brand focusing on innovation and performance'. */
    description?: Maybe<Scalars['String']['output']>;
    /**
     * Details about any discounts currently available on the brand's products.
     * @deprecated This field is obsolete.
     */
    discount?: Maybe<Scalars['String']['output']>;
    /** Brand logo media object containing URLs for different sizes and formats for consistent branding across the platform. */
    logo?: Maybe<Media>;
    /** Official brand name as displayed to customers, e.g. 'Nike', 'Adidas', 'Apple', 'Samsung'. */
    name?: Maybe<Scalars['String']['output']>;
    /** URL-friendly brand identifier used in web addresses and routing, e.g. 'nike', 'adidas', 'apple'. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique numeric identifier for the brand used for internal references and API calls, e.g. 123, 456, 789. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Response object containing a paginated list of brands with metadata and pagination information. */
export type BrandConnection = {
    __typename?: 'BrandConnection';
    /** Array of brand objects, each containing brand metadata like name, logo, banner, and slug information. */
    items?: Maybe<Array<Maybe<Brand>>>;
    /** Pagination details including current page, total pages, and navigation information for the brand listing. */
    page: PageInfo;
};
/** Response containing a list of brand items along with pagination information. */
export type BrandDetail = {
    __typename?: 'BrandDetail';
    /** Metadata or settings related to the brand at application level. */
    _app?: Maybe<Scalars['JSON']['output']>;
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
    /** URL-friendly version of the brand's name, used in the web address to access the brand's page on the platform. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the brand. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Bulk price response schema details consists of offers from multiple seller. */
export type BulkDiscountOffers = {
    __typename?: 'BulkDiscountOffers';
    /** Offers from multiple sellers. Example: [{ offers: [{ margin: 10, quantity: 2 }], seller: { uid: 2001, name: 'Acme' } }] */
    data?: Maybe<Array<Maybe<DiscountOfferDetails>>>;
};
/** Schema representing an individual parent bundle for a child product. */
export type Bundle = {
    __typename?: 'Bundle';
    /** Action object for the bundle. */
    action?: Maybe<Scalars['JSON']['output']>;
    /** Brand details of the bundle. */
    brand?: Maybe<NavigationAction>;
    /** Currency code (e.g., INR, USD). */
    currency?: Maybe<Scalars['String']['output']>;
    /** Media assets such as images or videos. */
    media?: Maybe<Array<Maybe<Media>>>;
    /** Name of the bundle. */
    name?: Maybe<Scalars['String']['output']>;
    /** Quantity of product units in this bundle. */
    net_quantity?: Maybe<BundleNetQuantity>;
    /** Original price of the bundle before discount. */
    price?: Maybe<Scalars['Float']['output']>;
    /** Effective price after applying discounts or offers. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** Seller identifiers for individual items within the bundle. */
    seller_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Selected size of the bundle. */
    size?: Maybe<Scalars['String']['output']>;
    /** Slug of the bundle. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Schema for bundle details. */
export type BundleDetails = {
    __typename?: 'BundleDetails';
    /** Unique identifier for the article bundle. For example, `article_bundle_id` can be set to '507f1f77bcf86cd799439011'. */
    article_bundle_id?: Maybe<Scalars['String']['output']>;
    /** Brand name of the bundle Item. For example, `brand_name` can be set to 'Sample Name'. */
    brand_name?: Maybe<Scalars['String']['output']>;
    /** Article net_quantity in bundle Product. For example, `bundle_article_quantity` can be set to 2. */
    bundle_article_quantity?: Maybe<Scalars['Int']['output']>;
    /** Indicates bundle count of the bag. For example, `bundle_count` can be set to 2. */
    bundle_count?: Maybe<Scalars['Int']['output']>;
    /** The unique identifier for the bundle group. For example, `bundle_group_id` can be set to '507f1f77bcf86cd799439011'. */
    bundle_group_id?: Maybe<Scalars['String']['output']>;
    /** An array of image URLs for the bundle. For example, `images` can be set to ['value']. */
    images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Indicates if the item is a base item. For example, `is_base` can be set to true. */
    is_base?: Maybe<Scalars['Boolean']['output']>;
    /** The unique identifier for the bundle item. For example, `item_id` can be set to 1. */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** The type of the bundle item. For example, `item_type` can be set to a BundleTypeEnum object. */
    item_type?: Maybe<BundleTypeEnum>;
    /** The name of the bundle. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
    /** The effective price of the bundle. For example, `price_effective` can be set to 2499.5. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** The marked price of the bundle. For example, `price_marked` can be set to 2499.5. */
    price_marked?: Maybe<Scalars['Float']['output']>;
    /** Return Config for bundle product. For example, `return_config` can be set to a BundleReturnConfig object. */
    return_config?: Maybe<BundleReturnConfig>;
    /** The seller identifier for the bundle. For example, `seller_identifier` can be set to '507f1f77bcf86cd799439011'. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
    /** Size associated with the bundle item. For example, `size` can be set to 'value'. */
    size?: Maybe<Scalars['String']['output']>;
    /** The slug identifier for the bundle. For example, `slug` can be set to 'value'. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Schema representing an individual bundle item. */
export type BundleItem = {
    __typename?: 'BundleItem';
    /** Action object for the bundled product. */
    action?: Maybe<Scalars['JSON']['output']>;
    /** Brand details of the product. */
    brand?: Maybe<NavigationAction>;
    /** Currency code (e.g., INR, USD). */
    currency?: Maybe<Scalars['String']['output']>;
    /** Indicates if this is the base product of the bundle. */
    is_base?: Maybe<Scalars['Boolean']['output']>;
    /** Media assets such as images or videos. */
    media?: Maybe<Array<Maybe<Media>>>;
    /** Name of the product. */
    name?: Maybe<Scalars['String']['output']>;
    /** Quantity of product units in this bundle. */
    net_quantity?: Maybe<BundleNetQuantity>;
    /** Original price of the bundle before discount. */
    price?: Maybe<Scalars['Float']['output']>;
    /** Effective price after applying discounts or offers. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** Seller identifiers for individual items within the bundle. */
    seller_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Selected size of the bundled product. */
    size?: Maybe<Scalars['String']['output']>;
    /** Slug of the product. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Response schema for bundled product items. */
export type BundleItems = {
    __typename?: 'BundleItems';
    /** A list of bundled products with associated media, brand, pricing, and seller details. */
    items?: Maybe<Array<Maybe<BundleItem>>>;
    /** Pagination information for the bundled items. */
    page?: Maybe<PageInfo>;
};
/** Response schema for bundled product items net quantity. */
export type BundleNetQuantity = {
    __typename?: 'BundleNetQuantity';
    /** The unit of measurement for the net quantity. */
    unit?: Maybe<Scalars['String']['output']>;
    /** The value of the net quantity. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Schema for bundle article refund config. */
export type BundleReturnConfig = {
    __typename?: 'BundleReturnConfig';
    /** Indicates if the bundle article can be partially returned. For example, `allow_partial_return` can be set to true. */
    allow_partial_return?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the bundle article is returnable. For example, `returnable` can be set to true. */
    returnable?: Maybe<Scalars['Boolean']['output']>;
    /** Bundle article return unit value. For example, `time` can be set to 3. */
    time?: Maybe<Scalars['Int']['output']>;
    /** Bundle article return window unit type e.g (days, weeks). For example, `unit` can be set to 'value'. */
    unit?: Maybe<Scalars['String']['output']>;
};
/** Types of bundles available. */
export declare enum BundleTypeEnum {
    PhysicalBundle = "physical_bundle",
    VirtualBundle = "virtual_bundle"
}
/** Response schema for bundled parent product items for child products. */
export type BundlesByChild = {
    __typename?: 'BundlesByChild';
    /** A list of bundled products with associated media, brand, pricing, and seller details. */
    items?: Maybe<Array<Maybe<Bundle>>>;
    /** Pagination information for the bundled items. */
    page?: Maybe<PageInfo>;
};
/** Contains information about key features or highlights of a business. */
export type BusinessHighlights = {
    __typename?: 'BusinessHighlights';
    /** Hosted URL of icon image representing the business highlight, e.g. 'https://cdn.example.com/icons/delivery.png'. */
    icon?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the business highlight. */
    id?: Maybe<Scalars['String']['output']>;
    /** Detailed description of the highlight, e.g. 'Get your orders delivered within 24 hours'. */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Title of the business highlight, e.g. 'Superfast Delivery'. */
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
/** Rules of promotion which must be satisfied then only the promotion is applied. */
export type BuyRules = {
    __typename?: 'BuyRules';
    /** Cart conditions such as cart_total and cart_quantity for promotion. */
    cart_conditions?: Maybe<Scalars['JSON']['output']>;
    /** Item criteria like item IDs, brand IDs, category IDs, store IDs, SKUs, tags, and exclusions that determine which items qualify for the buy rule. */
    item_criteria?: Maybe<Scalars['JSON']['output']>;
};
/** Configuration for buybox features on product detail pages. */
export type BuyboxFeature = {
    __typename?: 'BuyboxFeature';
    /** Allow selection of sellers/stores on PDP (product detail page). */
    enable_selection: Scalars['Boolean']['output'];
    /** Toggle buybox listing between sellers and stores. True indicates seller listing, False indicates store listing. */
    is_seller_buybox_enabled: Scalars['Boolean']['output'];
    /** Allow users to see seller/store names on PDP (product detail page). */
    show_name: Scalars['Boolean']['output'];
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** CDN configuration for the uploaded file. */
export type Cdn = {
    __typename?: 'CDN';
    /** The absolute CDN URL (same as 'url'). This is the full URL including protocol and domain. Can be used to access the file from anywhere on the web or in applications. Example: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/user-profile-pic/free/original/abc123-profile.jpg". */
    absolute_url?: Maybe<Scalars['String']['output']>;
    /** The relative CDN URL path. This is the path portion without the base domain. Format: {base_zone}/{bucket_prefix}/{file_path} (if multi_zone) or {bucket_prefix}/{file_path} (if not multi_zone). Example: "fyndnp/wrkr/user-profile-pic/free/original/abc123-profile.jpg". */
    relative_url?: Maybe<Scalars['String']['output']>;
    /** The complete CDN URL (absolute URL) where the file can be accessed. This is the primary URL to reference the file in applications. Format: {base_path}/{base_zone}/{bucket_prefix}/{file_path} or {base_path}/{bucket_prefix}/{file_path} depending on multi_zone configuration. Example: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/user-profile-pic/free/original/abc123-profile.jpg". */
    url?: Maybe<Scalars['String']['output']>;
};
/** An object representing css assets. */
export type Css = {
    __typename?: 'CSS';
    /** A string representing the url or link to the CSS module. */
    link?: Maybe<Scalars['String']['output']>;
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
    /** Unique id of payment link. Returned by createPaymentLink mutation. */
    payment_link_id: Scalars['String']['input'];
};
/** Cancel Payment Link Response. */
export type CancelPaymentLinkResponse = {
    __typename?: 'CancelPaymentLinkResponse';
    /** Detailed message. */
    message: Scalars['String']['output'];
    /**
     * HTTP status code.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    status_code?: Maybe<Scalars['Int']['output']>;
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** A key-value pair object containing canvas attributes for the section. */
export type CanvasItem = {
    __typename?: 'CanvasItem';
    /** Display text of a canvas. */
    label?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of a canvas. */
    value?: Maybe<Scalars['String']['output']>;
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
    /** Card number displayed in its masked format. */
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
/** Enum representing the brands of payment cards. */
export declare enum CardBrand {
    Amex = "AMEX",
    Diners = "DINERS",
    Discover = "DISCOVER",
    Jcb = "JCB",
    Maestro = "MAESTRO",
    Mastercard = "MASTERCARD",
    Rupay = "RUPAY",
    Visa = "VISA"
}
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
    /** Length of the CVV code for the card (e.g., 3 or 4 digits). */
    cvv_length?: Maybe<Scalars['Int']['output']>;
    /** Extended Card Type. */
    extended_card_type: Scalars['String']['output'];
    /** Unique identifier for the record. */
    id: Scalars['String']['output'];
    /** Indicates if the provided card information is valid. */
    is_card_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the card is domestic. */
    is_domestic_card: Scalars['Boolean']['output'];
    /** Indicates if the merchant has enabled the card network (e.g., VISA, MASTERCARD). */
    is_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** URL of the card logo representing the card type, such as VISA or MASTERCARD. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Name of the cardholder. */
    name_on_card?: Maybe<Scalars['String']['output']>;
    /** Current status of the card. */
    status: Scalars['Boolean']['output'];
    /** General type of the card (e.g., debit, credit). */
    type: Scalars['String']['output'];
    /** User associated with the card. */
    user?: Maybe<Scalars['String']['output']>;
};
/** Get cart detail response including applied promos, breakup values, buy_now flag, cart id, checkout mode, comments, coupon info, GSTIN, etc. */
export type Cart = {
    __typename?: 'Cart';
    /** List of saved addresses for user cart checkout. */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /** Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }] */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup for coupon, display, loyalty points, etc. */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy Now flag for fast checkout. Example: false */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode (e.g., 'self', 'other'). Example: 'self' */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Cart-level comment. Example: 'Deliver after 6 PM' */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /** Cart-level coupon data (applied flag, code, amount, title, message). */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency for prices (e.g., code 'INR', symbol '₹'). */
    currency?: Maybe<CartCurrency>;
    /** Custom cart metadata. Example: { channel: 'web' } */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** Delivery charge informational message. Example: 'Free delivery above ₹999' */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Delivery promise for the cart. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** Whether promotion free gift selection is available. Example: true */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /** GSTIN associated with the cart. Example: '27AAACI1195H1ZK' */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether the cart response is valid. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** List of cart items including item id, size, store, pricing, etc. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message. Example: 'Cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /** PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 } */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /** User PAN number. Example: 'ABCDE1234F' */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /** Number of items in cart. Example: 3 */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Get cart detail response including applied promos, breakup values, buy_now flag, cart id, checkout mode, comments, coupon info, GSTIN, etc. */
export type CartAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Price breakup of cart across coupon, display, loyalty points, and raw values. */
export type CartBreakup = {
    __typename?: 'CartBreakup';
    /** Coupon price breakup details which includes coupon code, coupon type, coupon value, coupon description, coupon message etc. */
    coupon?: Maybe<CouponBreakup>;
    /** Display breakup entries like MRP total, discount, subtotal, coupon value, promotion value, and total. */
    display?: Maybe<Array<Maybe<DisplayBreakup>>>;
    /** Loyalty points details for the cart. */
    loyalty_points?: Maybe<LoyaltyPoints>;
    /** Raw breakup: COD charge, convenience fee, coupon, delivery charge, discount, loyalty, gift card, GST, totals, etc. */
    raw?: Maybe<RawBreakup>;
};
/** Checkout request including cart/payment details, addresses, callbacks, order type, and metadata. Use either address_id/billing_address_id or pass delivery_address/billing_address. */
export type CartCheckoutDetailRequestInput = {
    /** Delivery address ID. Example: 'addr_001' */
    address_id?: InputMaybe<Scalars['String']['input']>;
    /** Payment aggregator (e.g., Fynd, Razorpay, Juspay). Example: 'Razorpay' */
    aggregator?: InputMaybe<Scalars['String']['input']>;
    /** Billing address JSON (address, phone, email, pincode, landmark, name). Example: { address: '221B Baker St', phone: '9876543210' } */
    billing_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Cart ID. Example: '5bb521cfdc83215e1889b346' */
    cart_id?: InputMaybe<Scalars['String']['input']>;
    /** Custom order metadata. Example: { source: 'app' } */
    custom_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Customer details. */
    customer_details?: InputMaybe<CustomerDetailsInput>;
    /** Delivery address JSON (address, phone, email, pincode, landmark, name). Example: { address: '221B Baker St', phone: '9876543210' } */
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    /** Extra metadata for checkout. Example: { campaign: 'SUMMER' } */
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Failure callback URL. Example: 'https://example.com/pay/failure' */
    failure_callback_url?: InputMaybe<Scalars['String']['input']>;
    /** Cart ID (alias). Example: '5bb521cfdc83215e1889b346' */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Card IIN (first six digits) for card payments (e.g., 123456). Example: '411111' */
    iin?: InputMaybe<Scalars['String']['input']>;
    /** Merchant code (e.g., ICICI, AXIS). Example: 'ICICI' */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Checkout metadata. Example: { experiment: 'A' } */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Card network (e.g., VISA, MASTERCARD, RUPAY). Example: 'VISA' */
    network?: InputMaybe<Scalars['String']['input']>;
    /** List of order tags used to classify and visually enhance order cards. */
    order_tags?: InputMaybe<Array<InputMaybe<OrderTagInput>>>;
    /** Order type of the shipment (e.g., 'PickAtStore', 'HomeDelivery','Digital). Example: 'HomeDelivery' */
    order_type?: InputMaybe<Scalars['String']['input']>;
    /** Ordering store ID. Example: 1234 */
    ordering_store?: InputMaybe<Scalars['Int']['input']>;
    /** Auto-confirm payment without user action. Example: false */
    payment_auto_confirm?: InputMaybe<Scalars['Boolean']['input']>;
    /** Payment identifier. Example: 'pay_abc123' */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Payment methods list. Example: [{ amount: 499.0, mode: 'CARD', name: 'Visa', payment_meta: { merchant_code: 'ICICI', payment_gateway: 'Razorpay', payment_identifier: 'pay_abc123' } }] */
    payment_methods?: InputMaybe<Array<InputMaybe<PaymentMethodInput>>>;
    /** Payment mode (e.g., COD, CARD, NB). Example: 'CARD' */
    payment_mode: Scalars['String']['input'];
    /** Payment params (identifier, merchant code). Example: { payment_identifier: 'pay_abc123', merchant_code: 'ICICI' } */
    payment_params?: InputMaybe<Scalars['JSON']['input']>;
    /** Success callback URL. Example: 'https://example.com/pay/success' */
    success_callback_url?: InputMaybe<Scalars['String']['input']>;
    /** Card type for card payments (e.g., DEBIT, CREDIT). Example: 'CREDIT' */
    type?: InputMaybe<Scalars['String']['input']>;
};
/** Checkout cart detail response schema includes cart id, delivery promise, items, comment, coupon text etc. */
export type CartCheckoutResponse = {
    __typename?: 'CartCheckoutResponse';
    /**
     * App intercept url for app redirection. Example: 'fynd://checkout/callback'
     * @deprecated This field is obsolete
     */
    app_intercept_url?: Maybe<Scalars['String']['output']>;
    /** Callback url after payment success/failed. Example: 'https://example.com/pay/callback' */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Checkout cart detail response schema includes cart id, delivery promise, items, comment, coupon text etc. */
    cart?: Maybe<CheckCart>;
    /** Payment related fields returned by the API across different aggregators (like Razorpay, Juspay, Paytm, Simpl, etc.). It contains details such as transaction amount, payment method, aggregator info, wallet/bank codes, callback URLs, and QR or UPI information. */
    data?: Maybe<Scalars['JSON']['output']>;
    /** Message of the cart checkout API response. Example: 'Checkout initialized' */
    message?: Maybe<Scalars['String']['output']>;
    /** Order id generated after placing order. Example: 'FY2025-10001' */
    order_id?: Maybe<Scalars['String']['output']>;
    /**
     * Payment confirm url used to redirect after payment is confirmed. Example: 'https://example.com/pay/confirm'
     * @deprecated This field is obsolete, use callback_url instead
     */
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    /** Success flag of cart checkout API response. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Cart common config which determines delivery charge config. */
export type CartCommonConfig = {
    __typename?: 'CartCommonConfig';
    /** Delivery charge config which includes charges applicable condition and enabled flag. Example: { enabled: true, charges: [{ threshold: 999, charges: 0 }] } */
    delivery_charges_config?: Maybe<DeliveryChargesConfig>;
};
/** Currency data used for cart prices. */
export type CartCurrency = {
    __typename?: 'CartCurrency';
    /** Currency code (ISO 4217), e.g., 'INR'. Example: 'INR' */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol, e.g., '₹'. Example: '₹' */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Cart-level coupon data including code, title, messages, value, and validity. */
export type CartDetailCoupon = {
    __typename?: 'CartDetailCoupon';
    /** Cashback amount applied to the cart. Example: 50.0 */
    cashback_amount?: Maybe<Scalars['Float']['output']>;
    /** Primary cashback message. Example: 'You will receive ₹50 cashback' */
    cashback_message_primary?: Maybe<Scalars['String']['output']>;
    /** Secondary cashback message. Example: 'Cashback credited within 48 hours' */
    cashback_message_secondary?: Maybe<Scalars['String']['output']>;
    /** Coupon code applied to cart. Example: 'SAVE10' */
    coupon_code?: Maybe<Scalars['String']['output']>;
    /** Description of the applied coupon. Example: '10% off on orders above ₹999' */
    coupon_description?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the coupon. Example: 'cpn_123' */
    coupon_id?: Maybe<Scalars['String']['output']>;
    /** Coupon subtitle used for display. Example: 'Limited time offer' */
    coupon_subtitle?: Maybe<Scalars['String']['output']>;
    /** Coupon title. Example: 'SAVE10' */
    coupon_title?: Maybe<Scalars['String']['output']>;
    /** Type of coupon. Example: 'percentage' */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Coupon value. Example: 10.0 */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Additional custom attributes associated with the cart coupon for extended metadata and configuration */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Total discount earned from coupon. Example: 150.0 */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Whether any coupon is applied. Example: true */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the applied coupon is valid. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount amount allowed. Example: 500.0 */
    maximum_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message for display. Example: 'Coupon applied successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum cart value required. Example: 999.0 */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
};
/** Cart-level coupon data including code, title, messages, value, and validity. */
export type CartDetailCouponCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Configuration options for features related to the shopping cart, including GST input, staff selection, and coupon usage. */
export type CartFeature = {
    __typename?: 'CartFeature';
    /** Allow adding Google Maps integration. Default value is true. */
    google_map: Scalars['Boolean']['output'];
    /** Whether customer is allowed to enter GST on the cart page for claiming input credits. */
    gst_input: Scalars['Boolean']['output'];
    /**
     * Whether staff is placing order on behalf of customer. Default value is true.
     * @deprecated This field is obsolete.
     */
    placing_for_customer?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Allow coupons and credits to be applied together. Default value is false.
     * @deprecated This field is obsolete.
     */
    revenue_engine_coupon?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Whether staff selection is enabled on cart page.
     * @deprecated This field is obsolete.
     */
    staff_selection?: Maybe<Scalars['Boolean']['output']>;
};
/** Input for adding items to cart. */
export type CartItem = {
    /** Custom JSON at article level. Example: { gift_wrap: true } */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Article assignment rules (level/strategy). Example: { level: 'item', strategy: 'fast-delivery/optimal' } */
    article_assignment?: InputMaybe<ArticleAssignmentInput>;
    /** If true, forces a separate line item. Example: true */
    force_new_line_item?: InputMaybe<Scalars['Boolean']['input']>;
    /** Fulfillment method slug. Example: 'home-delivery' or 'store-pickup' */
    fulfillment_option_slug?: InputMaybe<Scalars['String']['input']>;
    /** Product identifier. Example: 987654 */
    item_id?: InputMaybe<Scalars['Int']['input']>;
    /** Size of the product. Example: 'M' */
    item_size?: InputMaybe<Scalars['String']['input']>;
    /** Metadata at article level. Example: { source: 'PDP' } */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Quantity to add. Example: 2 */
    quantity?: InputMaybe<Scalars['Int']['input']>;
    /** Selected seller ID. Example: 5678 */
    seller_id?: InputMaybe<Scalars['Int']['input']>;
    /** Selected store ID. Example: 1234 */
    store_id?: InputMaybe<Scalars['Int']['input']>;
};
/** Response schema which defines how many total number of items are in cart. */
export type CartItemCountResponse = {
    __typename?: 'CartItemCountResponse';
    /** Item count present in cart. Example: 3 */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Information about cart items including item ID, size, store ID, success status and message */
export type CartItemInfo = {
    __typename?: 'CartItemInfo';
    /** Item id of the product that needs to be added/updated/removed. Example: 123456 */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** Message for added/updated/removed item. Example: 'Updated quantity to 2' */
    message?: Maybe<Scalars['String']['output']>;
    /** Item size of the product that needs to be added/updated/removed. Example: 'M' */
    size?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the store selected by the user. Example: 1001 */
    store_id?: Maybe<Scalars['Int']['output']>;
    /** True if items are added/updated/removed successfully. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Update cart metadata like delivery slots, comment, GSTIN, custom meta, and pickup details. */
export type CartMetaRequestInput = {
    /** Cart-level comment. Example: 'Please deliver after 6 PM' */
    comment?: InputMaybe<Scalars['String']['input']>;
    /** Custom cart metadata. Example: { channel: 'web' } */
    custom_cart_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Gift details per article. Example: [{ article_id: '5fdc737e3c05146138192f79', gift_message: 'Happy Birthday!' }] */
    gift_details?: InputMaybe<Array<InputMaybe<GiftDetailInput>>>;
    /** GSTIN to add to the cart. Example: '27AAACI1195H1ZK' */
    gstin?: InputMaybe<Scalars['String']['input']>;
};
/** Cart meta response schema. */
export type CartMetaResponse = {
    __typename?: 'CartMetaResponse';
    /** Whether added meta was valid. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Detailed message. Example: 'Meta updated' */
    message?: Maybe<Scalars['String']['output']>;
};
/** Price of single quantity product in seller and customer currency. */
export type CartPriceInfo = {
    __typename?: 'CartPriceInfo';
    /** Seller currency price details for single quantity. */
    base?: Maybe<PriceInfo>;
    /** Customer currency price details for single quantity. */
    converted?: Maybe<PriceInfo>;
};
/** Cart product data structure which includes product data as action, attributes, brand, categories, images, item code, tags, item id, item name, etc. */
export type CartProduct = {
    __typename?: 'CartProduct';
    /** Custom JSON for the product in cart. Example: { personalization: true } */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Schema of Action Object to render the product. */
    action?: Maybe<ProductAction>;
    /** Product attributes defined on platform. Example: { material: 'Cotton' } */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
    brand?: Maybe<BaseInfo>;
    /** Product category information which includes category name and category id. */
    categories?: Maybe<Array<Maybe<CategoryInfo>>>;
    /** Additional custom attributes associated with the cart product for extended product information and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Product images in different formats. Example: [{ secure_url: 'https://cdn.example.com/img.jpg' }] */
    images?: Maybe<Array<Maybe<ProductImage>>>;
    /** Product code defined on platform. Example: 'SKU123' */
    item_code?: Maybe<Scalars['String']['output']>;
    /** Product name defined on platform. Example: 'Cotton T-Shirt' */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique product URL slug. Example: 'cotton-tshirt' */
    slug?: Maybe<Scalars['String']['output']>;
    /** Product tags used for identification. Example: ['new', 'bestseller'] */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Contains labels attached to a product in cart. Example: { tags: ['teaser'] } */
    teaser_tag?: Maybe<Tags>;
    /** Type of product in cart. Example: 'standard' */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the product in cart. Example: 123456 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Cart product data structure which includes product data as action, attributes, brand, categories, images, item code, tags, item id, item name, etc. */
export type CartProductCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Product identifiers uniquely generated by cart to uniquely identify the product in cart. */
export type CartProductIdentifer = {
    __typename?: 'CartProductIdentifer';
    /** Article identifier generated by cart. Example: 'line_abc123' */
    identifier?: Maybe<Scalars['String']['output']>;
};
/** Cart-generated product identifiers to uniquely identify an item. */
export type CartProductIdentiferInput = {
    /** Identifier generated by cart. Example: 'line_abc123' */
    identifier?: InputMaybe<Scalars['String']['input']>;
};
/** Product information in cart including article info, availability, charges, coupon, delivery promise, discount, identifiers, price, and quantity. */
export type CartProductInfo = {
    __typename?: 'CartProductInfo';
    /** Date and time when the item was added to the cart e.g. `Tue, 28 Jun 2022 14:47:12 GMT`  */
    added_on?: Maybe<Scalars['String']['output']>;
    /** Product article information including pricing, seller details, store information, fulfillment options and other article-specific data for the product added in cart. */
    article?: Maybe<ProductArticle>;
    /** Availability information (deliverable, out of stock, validity, sizes). */
    availability?: Maybe<ProductAvailability>;
    /** Bulk offer information if applicable. */
    bulk_offer?: Maybe<Scalars['JSON']['output']>;
    /** Charges applied to the product. Example: [{ name: 'delivery', amount: { currency: 'INR', value: 49 } }] */
    charges?: Maybe<Array<Maybe<ChargesInfo>>>;
    /** Coupon price breakup for this product. */
    coupon?: Maybe<CouponDetails>;
    /** Coupon message (empty if none). Example: 'SAVE10 applied' */
    coupon_message?: Maybe<Scalars['String']['output']>;
    /** Make to Order (MTO) configuration object containing custom order settings like manufacturing time, time unit, and custom order flag. */
    custom_order?: Maybe<Scalars['JSON']['output']>;
    /** Shipment-level delivery promise. */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** Discount amount for the product. Example: '₹150' */
    discount?: Maybe<Scalars['String']['output']>;
    /** Cart-generated product identifiers. */
    identifiers: CartProductIdentifer;
    /** Whether the product is a set. Example: false */
    is_set?: Maybe<Scalars['Boolean']['output']>;
    /** This field describes the type of item, indicating the category or nature of the product. */
    item_type?: Maybe<ItemTypeEnum>;
    /** Attribute key associated with the size. Example: 'eu_size' */
    key?: Maybe<Scalars['String']['output']>;
    /** Maximum quantity information based on store/seller/overall. */
    max_quantity?: Maybe<ProductMaxQuantityInfo>;
    /** Product-level message (e.g., error/info). Example: 'Only 1 left in stock' */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum order quantity information. */
    moq?: Maybe<Scalars['JSON']['output']>;
    /** Parent item identifiers. Example: { parent_item_id: 111 } */
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    /** Price per unit in seller and customer currency. */
    price?: Maybe<CartPriceInfo>;
    /** Price per unit of the product. */
    price_per_unit?: Maybe<ProductPriceInfo>;
    /** Product details including action, attributes, brand, categories, images, item code, name, slug, tags, etc. */
    product?: Maybe<CartProduct>;
    /** European Article Number of the product. Example: '8901234567890' */
    product_ean_id?: Maybe<Scalars['String']['output']>;
    /**
     * Loyalty points message data.
     * @deprecated This field is obsolete.
     */
    promo_meta?: Maybe<PromoMeta>;
    /** List of applicable promotions for the product. */
    promotions_applied?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Quantity of the product in cart. Example: 2 */
    quantity?: Maybe<Scalars['Int']['output']>;
};
/** Cart shipment response schema for get shipments API. */
export type CartShipmentsResponse = {
    __typename?: 'CartShipmentsResponse';
    /** Price breakup of cart (coupon, display, loyalty points, etc.). Example: { display: [{ key: 'total', value: 1499.0 }] } */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. Example: false */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of the user cart. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of cart. Example: 'self' */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message added in cart. Example: 'Please call on arrival' */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of coupon applied on cart. Example: 'SAVE10 applied' */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CartCurrency>;
    /** Metadata for custom cart. Example: { channel: 'web' } */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Customer user id associated with cart. Example: 'usr_456' */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** Delivery charge info message on shipment. Example: 'Free delivery over ₹999' */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Shipment level promise (formatted time, timestamp, ISO). */
    delivery_promise?: Maybe<ShipmentPromise>;
    /** Whether an error occurred. Example: false */
    error?: Maybe<Scalars['Boolean']['output']>;
    /** GSTIN number added in cart. Example: '27AAACI1195H1ZK' */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart uid of the user cart. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /** Cart validity flag. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Last modified timestamp of cart. Example: '2025-10-07T14:20:00Z' */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message of get shipments API. Example: 'Shipments fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Restrict checkout flag. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** List of shipments with items and promise details. Example: [{ shipments: 1, order_type: 'HomeDelivery' }] */
    shipments?: Maybe<Array<Maybe<ShipmentResponse>>>;
    /** Cart uid of the user cart. Example: 'uid_987' */
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
    /** Application-specific data and configuration associated with the category. */
    _app?: Maybe<Scalars['JSON']['output']>;
    /** Custom JSON data related to the category, allowing for additional metadata and configuration. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Banner images associated with the category, including portrait and landscape orientations for display. */
    banners?: Maybe<ImageUrls>;
    /** Logo image associated with the category for branding and identification. */
    logo?: Maybe<Media>;
    /** Display name of the category, e.g. 'Men's Clothing', 'Electronics', 'Home & Garden'. */
    name: Scalars['String']['output'];
    /** Unique identifier for the category, e.g. 123, 456, 789. */
    uid: Scalars['Int']['output'];
};
/** Details regarding a FAQ category under which FAQs are stored. */
export type CategoryBySlug = {
    __typename?: 'CategoryBySlug';
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding a FAQs stored under a FAQs category. */
    children?: Maybe<Array<Maybe<Faq>>>;
    /**
     * Custom JSON object for specific use cases.
     * @deprecated This field is obsolete.
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details of the FAQ category. For example, 'Frequently asked questions about shipping and delivery'. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the image associated with FAQ Category. For example, 'https://cdn.example.com/icons/shipping.png'. */
    icon_url?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Order of FAQ Category. For example, 0, 1, 2, or 3. */
    index?: Maybe<Scalars['Int']['output']>;
    /** A short, human-readable, URL-friendly identifier. For example, 'shipping' or 'returns'. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Title of a FAQ Category. For example, 'Shipping & Delivery' or 'Returns & Refunds'. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Details regarding a FAQ category under which FAQs are stored. */
export type CategoryDetail = {
    __typename?: 'CategoryDetail';
    /**
     * Application ID - Identifier for a Sales channel. For example, '621e1f2ca78f7425f939641d'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding a FAQs stored under a FAQs category. For example, ['5ebe2b02543625128ae9d66b', '5ebe2b02543625128ae9d66b', '5ebe2b02543625e92be9d670']. */
    children?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Custom JSON object for housing additional information that may be used for custom use cases.
     * @deprecated This field is obsolete.
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Details of the FAQ category. For example, 'Frequently asked questions about shipping and delivery'. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the image associated with FAQ Category. For example, 'https://cdn.example.com/icons/shipping.png'. */
    icon_url?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Order of FAQ Category. For example, 0, 1, 2, or 3. */
    index?: Maybe<Scalars['Int']['output']>;
    /** A short, human-readable, URL-friendly identifier. For example, 'shipping' or 'returns'. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Title of a FAQ Category. For example, 'Shipping & Delivery' or 'Returns & Refunds'. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Category information schema which denotes category name and category id. */
export type CategoryInfo = {
    __typename?: 'CategoryInfo';
    /** Category name of the product. Example: 'T-Shirts' */
    name?: Maybe<Scalars['String']['output']>;
    /** Product Category ID. Example: 1234 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Represents a L1 (top-level) category. */
export type CategoryItem = {
    __typename?: 'CategoryItem';
    /** Custom JSON data related to the L1 category, allowing for additional metadata and configuration. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Navigation action configuration for the L1 category. */
    action: PageActionDetail;
    /** Banner images associated with the L1 category for display purposes. */
    banners: ImageUrls;
    /** List of L2 (sub)categories under this L1 category. */
    childs?: Maybe<Array<Maybe<CategoryItemL2>>>;
    /** Display name of the L1 category, e.g. 'Clothing', 'Shoes', 'Accessories'. */
    name: Scalars['String']['output'];
    /** Display priority order of the category in listings, e.g. 1, 2, 3 (lower numbers appear first). */
    priority?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly identifier for the L1 category, e.g. 'clothing', 'shoes', 'accessories'. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L1 category, e.g. 101, 102, 103. */
    uid: Scalars['Int']['output'];
};
/** Represents a L2 (second-level) category. */
export type CategoryItemL2 = {
    __typename?: 'CategoryItemL2';
    /** Custom JSON data related to the L2 category, allowing for additional metadata and configuration. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Navigation action configuration for the L2 category. */
    action: PageActionDetail;
    /** Banner images associated with the L2 category for display purposes. */
    banners: ImageUrls;
    /** List of L3 (sub)categories under this L2 category. */
    childs?: Maybe<Array<Maybe<CategoryItemL3>>>;
    /** Display name of the L2 category, e.g. 'Men's Shirts', 'Women's Dresses', 'Running Shoes'. */
    name: Scalars['String']['output'];
    /** Display priority order of the category in listings, e.g. 1, 2, 3 (lower numbers appear first). */
    priority?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly identifier for the L2 category, e.g. 'mens-shirts', 'womens-dresses', 'running-shoes'. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L2 category, e.g. 201, 202, 203. */
    uid: Scalars['Int']['output'];
};
/** Represents a L3 (third-level) category with associated details and banners. */
export type CategoryItemL3 = {
    __typename?: 'CategoryItemL3';
    /** Custom JSON data related to the L3 category, allowing for additional metadata and configuration. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Navigation action configuration for the L3 category. */
    action: PageActionDetail;
    /** Banner images associated with the L3 category for display purposes. */
    banners: ImageUrls;
    /** List of L4 (sub)categories under this L3 category. */
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    /** Display name of the L3 category, e.g. 'Casual Shirts', 'Formal Shirts', 'Tank Tops'. */
    name: Scalars['String']['output'];
    /** Display priority order of the category in listings, e.g. 1, 2, 3 (lower numbers appear first). */
    priority?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly identifier for the L3 category, e.g. 'casual-shirts', 'formal-shirts', 'tank-tops'. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L3 category, e.g. 301, 302, 303. */
    uid: Scalars['Int']['output'];
};
/** Represents a L4 (fourth-level) category with associated details and banners. */
export type CategoryItemL4 = {
    __typename?: 'CategoryItemL4';
    /** Custom JSON data related to the L4 category, allowing for additional metadata and configuration. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Navigation action configuration for the L4 category. */
    action: PageActionDetail;
    /** Banner images associated with the L4 category for display purposes. */
    banners: ImageUrls;
    /** List of L5 (sub)categories under this L4 category, if any exist. */
    childs?: Maybe<Array<Maybe<CategoryItemL4>>>;
    /** Display name of the L4 category, e.g. 'Cotton Casual Shirts', 'Linen Casual Shirts', 'Printed Casual Shirts'. */
    name: Scalars['String']['output'];
    /** Display priority order of the category in listings, e.g. 1, 2, 3 (lower numbers appear first). */
    priority?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly identifier for the L4 category, e.g. 'cotton-casual-shirts', 'linen-casual-shirts'. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the L4 category, e.g. 401, 402, 403. */
    uid: Scalars['Int']['output'];
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
/** Charge amount schema, amount defined for the charges. */
export type ChargeAmount = {
    __typename?: 'ChargeAmount';
    /** Charges amount in base currency. For example, `base_currency` can be set to a ChargeAmountCurrency object. */
    base_currency?: Maybe<ChargeAmountCurrency>;
    /** Charges amount in ordering currency. For example, `ordering_currency` can be set to a ChargeAmountCurrency object. */
    ordering_currency?: Maybe<ChargeAmountCurrency>;
};
/** Charge amount currency currency schema. */
export type ChargeAmountCurrency = {
    __typename?: 'ChargeAmountCurrency';
    /** Charge currency code. For example, `currency` can be set to 'INR'. */
    currency?: Maybe<Scalars['String']['output']>;
    /** Charge currency value or amount. For example, `value` can be set to 2499.5. */
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
/** Charge amount distribution logic, config by which charge will assign to the entity or distribution_level. */
export type ChargeDistributionLogic = {
    __typename?: 'ChargeDistributionLogic';
    /** This field defines the distribution. For example, `distribution` can be set to a ChargeDistributionSchema object. */
    distribution?: Maybe<ChargeDistributionSchema>;
    /** This field defines the distribution level, e.g distribution level is (order, shipment, article). For example, `distribution_level` can be set to 'value'. */
    distribution_level?: Maybe<Scalars['String']['output']>;
};
/** Charge distribution structure, used to refer the distribution logic for the entity such as Order, shipment, article. */
export type ChargeDistributionSchema = {
    __typename?: 'ChargeDistributionSchema';
    /** This field defines the distribution logic. For example, `logic` can be set to 'value'. */
    logic?: Maybe<Scalars['String']['output']>;
    /** This field defines the distribution type. For example, `type` can be set to 'order'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Charges amount data which definitely denotes amount of charges in seller currency and customer currency. */
export type ChargesAmount = {
    __typename?: 'ChargesAmount';
    /** Charge in Base currency (seller currency) */
    base_currency?: Maybe<CurrencyValue>;
    /**
     * Destination currency of value. Example: 'INR'
     * @deprecated This field is obsolete
     */
    currency?: Maybe<Scalars['String']['output']>;
    /** Charge in Ordering currency (customer currency) */
    ordering_currency?: Maybe<CurrencyValue>;
    /**
     * Numeric amount value. Example: 49.0
     * @deprecated This field is obsolete
     */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Charge details including type, name, amount, refund policy, and code. */
export type ChargesInfo = {
    __typename?: 'ChargesInfo';
    /** Whether refund is allowed for this charge. Example: true */
    allow_refund?: Maybe<Scalars['Boolean']['output']>;
    /** Charge amount applied. Example: { currency: 'INR', value: 49 } */
    amount?: Maybe<ChargesAmount>;
    /** Code of the charge. Example: 'DELIVERY' */
    code?: Maybe<Scalars['String']['output']>;
    /** Metadata related to charge price adjustment. Example: { price_adjustment_id: '697373bb8fe26665a1f0d17a', article_level_distribution: true } */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Name of the charge. Example: 'delivery' */
    name?: Maybe<Scalars['String']['output']>;
    /** Type of charge. Example: 'fee' */
    type?: Maybe<Scalars['String']['output']>;
};
/** Charge amount applied at specific cart value threshold. */
export type ChargesThreshold = {
    __typename?: 'ChargesThreshold';
    /** Charge amount. Example: 49.0 */
    charges?: Maybe<Scalars['Float']['output']>;
    /** Cart value threshold for applying the charge. Example: 999.0 */
    threshold?: Maybe<Scalars['Float']['output']>;
};
/** Checkout cart detail response schema includes cart id, delivery promise, items, comment, coupon text etc. */
export type CheckCart = {
    __typename?: 'CheckCart';
    /** Price breakup of cart (coupon, display, loyalty points, etc.). Example: { display: [{ key: 'total', value: 1499.0 }] } */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. Example: false */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of the user cart for which the order placed. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode of user cart. Example: 'self' */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Whether Cash On Delivery available. Example: true */
    cod_available?: Maybe<Scalars['Boolean']['output']>;
    /** Cash On Delivery charges of the user cart. Example: 50 */
    cod_charges?: Maybe<Scalars['Int']['output']>;
    /** Cash On Delivery message for the order placed. Example: 'Available for orders up to ₹10,000' */
    cod_message?: Maybe<Scalars['String']['output']>;
    /** Comment message added in cart after order placed. Example: 'Leave at reception' */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of the applied coupon on order placed. Example: 'SAVE10 applied' */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CartCurrency>;
    /** Metadata for custom cart */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge information message on shipment. Example: 'Free delivery over ₹999' */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Delivery charge order value. Example: 999 */
    delivery_charge_order_value?: Maybe<Scalars['Int']['output']>;
    /** Delivery charges of the order placed via checkout API. Example: 0 */
    delivery_charges?: Maybe<Scalars['Int']['output']>;
    /** Shipment level promise (formatted, timestamp, ISO). */
    delivery_promise?: Maybe<ShipmentPromise>;
    /** Error message if any. Example: 'Payment pending' */
    error_message?: Maybe<Scalars['String']['output']>;
    /** GSTIN number added in cart. Example: '27AAACI1195H1ZK' */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart uid of the user cart. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /** Valid flag for the checkout response. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Items details in cart after order placed. Example: [{ quantity: 2 }] */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of cart. Example: '2025-10-07T14:20:00Z' */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the cart checkout API response. Example: 'Checkout successful' */
    message?: Maybe<Scalars['String']['output']>;
    /** Order id generated after placing order. Example: 'FY2025-10001' */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Restrict checkout flag. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Store code from which the order placed. Example: 'ANDH001' */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Store employees data. Example: [{ id: 'emp_01' }] */
    store_emps?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Success flag of checkout cart API response. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart uid of user cart. Example: 'uid_987' */
    uid?: Maybe<Scalars['String']['output']>;
    /** User type of the cart who places the order. Example: 'guest' */
    user_type?: Maybe<Scalars['String']['output']>;
};
/** Describes the request to send/verify a code. */
export type CodeRequestBodySchemaInput = {
    /** Verification code. */
    code: Scalars['String']['input'];
};
/** Provides detailed information about a collection. */
export type Collection = {
    __typename?: 'Collection';
    /** Custom JSON object containing additional properties specific to the collection. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Actions associated with the collection. */
    action?: Maybe<CollectionAction>;
    /**
     * Indicates if facets are allowed for filtering within the collection.
     * @deprecated This field is obsolete.
     */
    allow_facets?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates if sorting is allowed for this collection.
     * @deprecated This field is obsolete.
     */
    allow_sort?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Application ID associated with the collection.
     * @deprecated This field is obsolete.
     */
    app_id?: Maybe<Scalars['String']['output']>;
    /**
     * Badge information associated with the collection.
     * @deprecated This field is obsolete.
     */
    badge?: Maybe<Badge>;
    /** Banner URLs associated with the collection. */
    banners?: Maybe<ImageUrls>;
    /**
     * Cron details for scheduling related to the collection.
     * @deprecated This field is obsolete.
     */
    cron?: Maybe<Scalars['JSON']['output']>;
    /** Detailed description of the collection explaining its purpose and contents, e.g. 'Curated collection of trending summer fashion items'. */
    description?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether the collection is active.
     * @deprecated This field is obsolete.
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the item is visible. */
    is_visible?: Maybe<Scalars['Boolean']['output']>;
    /** Logo image associated with the collection. */
    logo?: Maybe<CollectionLogo>;
    /**
     * Additional metadata related to the collection.
     * @deprecated This field is obsolete.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The display name of the collection, e.g. 'Summer Essentials', 'Trending Now', 'Best Sellers'. */
    name?: Maybe<Scalars['String']['output']>;
    /**
     * Priority level of the collection for sorting or display purposes.
     * @deprecated This field is obsolete.
     */
    priority?: Maybe<Scalars['Int']['output']>;
    /**
     * List of product details included in the response.
     * @deprecated Removed from collections API to avoid N+1 query issues. Use the products field available on a single collection instead.
     */
    products?: Maybe<ProductConnection>;
    /** Whether collection is published or not. */
    published?: Maybe<Scalars['Boolean']['output']>;
    /**
     * A list of queries used to filter the collection.
     * @deprecated This field is obsolete.
     */
    query?: Maybe<Array<Maybe<CollectionQuery>>>;
    /**
     * Schedule details for the collection, including timing and duration information.
     * @deprecated This field is obsolete.
     */
    schedule?: Maybe<Schedule>;
    /** SEO details for the item, with dynamic fields. */
    seo?: Maybe<SeoDetails>;
    /** The URL-friendly identifier for the collection. */
    slug?: Maybe<Scalars['String']['output']>;
    /**
     * The attribute by which the collection items are sorted.
     * @deprecated This field is obsolete.
     */
    sort_on?: Maybe<Scalars['String']['output']>;
    /** Tags associated with the collection. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Type of collection: 'query' for dynamic collections based on search criteria, 'items' for manually curated collections.
     * @deprecated This field is obsolete.
     */
    type?: Maybe<CollectionType>;
    /** The unique identifier for the collection, e.g. '507f1f77bcf86cd799439011'. */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Keys of the facets visible for filtering within the collection.
     * @deprecated This field is obsolete.
     */
    visible_facets_keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Provides detailed information about a collection. */
export type CollectionProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
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
/** Detailed information about a collection including metadata and configuration. */
export type CollectionDetail = {
    __typename?: 'CollectionDetail';
    /** Custom JSON object containing additional properties specific to the collection. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Actions associated with the collection. */
    action?: Maybe<CollectionAction>;
    /**
     * Indicates if facets are allowed for filtering within the collection.
     * @deprecated This field is obsolete.
     */
    allow_facets?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates if sorting is allowed for this collection.
     * @deprecated This field is obsolete.
     */
    allow_sort?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Application ID associated with the collection.
     * @deprecated This field is obsolete.
     */
    app_id?: Maybe<Scalars['String']['output']>;
    /**
     * Badge information associated with the collection.
     * @deprecated This field is obsolete.
     */
    badge?: Maybe<Badge>;
    /** Banner URLs associated with the collection. */
    banners?: Maybe<ImageUrls>;
    /**
     * Cron details for scheduling related to the collection.
     * @deprecated This field is obsolete.
     */
    cron?: Maybe<Scalars['JSON']['output']>;
    /** Detailed description of the collection explaining its purpose and contents, e.g. 'Curated collection of trending summer fashion items'. */
    description?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether the collection is active.
     * @deprecated This field is obsolete.
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the item is visible. */
    is_visible?: Maybe<Scalars['Boolean']['output']>;
    /** Logo image associated with the collection. */
    logo?: Maybe<CollectionLogo>;
    /**
     * Additional metadata related to the collection.
     * @deprecated This field is obsolete.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The display name of the collection, e.g. 'Summer Essentials', 'Trending Now', 'Best Sellers'. */
    name?: Maybe<Scalars['String']['output']>;
    /**
     * Priority level of the collection for sorting or display purposes.
     * @deprecated This field is obsolete.
     */
    priority?: Maybe<Scalars['Int']['output']>;
    /** List of product details included in the response. */
    products?: Maybe<ProductConnection>;
    /** Whether collection is published or not. */
    published?: Maybe<Scalars['Boolean']['output']>;
    /**
     * A list of queries used to filter the collection.
     * @deprecated This field is obsolete.
     */
    query?: Maybe<Array<Maybe<CollectionQuery>>>;
    /**
     * Schedule details for the collection, including timing and duration information.
     * @deprecated This field is obsolete.
     */
    schedule?: Maybe<Schedule>;
    /** SEO details for the item, with dynamic fields. */
    seo?: Maybe<SeoDetails>;
    /** The URL-friendly identifier for the collection. */
    slug?: Maybe<Scalars['String']['output']>;
    /**
     * The attribute by which the collection items are sorted.
     * @deprecated This field is obsolete.
     */
    sort_on?: Maybe<Scalars['String']['output']>;
    /**
     * Tags associated with the collection.
     * @deprecated This field is obsolete.
     */
    tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Tags associated with the collection. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Type of collection: 'query' for dynamic collections based on search criteria, 'items' for manually curated collections.
     * @deprecated This field is obsolete.
     */
    type?: Maybe<CollectionType>;
    /** The unique identifier for the collection, e.g. '507f1f77bcf86cd799439011'. */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Keys of the facets visible for filtering within the collection.
     * @deprecated This field is obsolete.
     */
    visible_facets_keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Detailed information about a collection including metadata and configuration. */
export type CollectionDetailProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
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
/** Individual item within a collection containing product details and metadata. */
export type CollectionItem = {
    __typename?: 'CollectionItem';
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<NavigationAction>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<NavigationAction>>>;
    /** Represents a mapping of product categories at different levels. */
    category_map?: Maybe<ProductCategoryMap>;
    /**
     * Identifier for the product channel.
     * @deprecated This field is obsolete.
     */
    channel?: Maybe<Scalars['String']['output']>;
    /** Color of the product, if applicable. */
    color?: Maybe<Scalars['String']['output']>;
    /** The country of origin for the product. */
    country_of_origin?: Maybe<Scalars['String']['output']>;
    /** Custom JSON object for additional product data. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the collection item for extended product information and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /** Array of delivery promise options available for the product. */
    delivery_promises?: Maybe<Array<Maybe<DeliveryPromiseItem>>>;
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
    /** List of seller identifiers for the product. */
    identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * The nature of the product's images.
     * @deprecated This field is obsolete.
     */
    image_nature?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product can be sold as an individual product. */
    is_dependent?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates if the product is available for tryout.
     * @deprecated This field is obsolete.
     */
    is_tryout?: Maybe<Scalars['Boolean']['output']>;
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
    /** No of boxes required to pack the product. */
    no_of_boxes?: Maybe<Scalars['Int']['output']>;
    /** Price details of the product. */
    price?: Maybe<ProductListingPriceDetails>;
    /**
     * List of bundle/product grouping slugs mapped to the product.
     * @deprecated This field is obsolete.
     */
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Date and time when the product was made available online. */
    product_online_date?: Maybe<Scalars['String']['output']>;
    /** Meta data for promotions associated with the product. */
    promo_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * The rating of the product.
     * @deprecated This field is obsolete.
     */
    rating?: Maybe<Scalars['Float']['output']>;
    /**
     * The number of ratings the product has received.
     * @deprecated This field is obsolete.
     */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the product is available for sale. */
    sellable?: Maybe<Scalars['Boolean']['output']>;
    /** SEO metadata for the product. */
    seo?: Maybe<SeoDetails>;
    /** The short description of the product. */
    short_description?: Maybe<Scalars['String']['output']>;
    /**
     * List of products marked similar to given product.
     * @deprecated This field is obsolete.
     */
    similars?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Available sizes for product. */
    size_options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * To be deprecated: Product available sizes details. Use size_options.
     * @deprecated Use size_options instead
     */
    sizes?: Maybe<ProductSizes>;
    /** A list of image URLs for the product. */
    slug: Scalars['String']['output'];
    /** Tags associated with the product for better categorization. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Teaser tag or short promotional phrase for the product. */
    teaser_tag?: Maybe<Scalars['String']['output']>;
    /**
     * Identifiers or names of tryout versions of the product.
     * @deprecated This field is obsolete.
     */
    tryouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Product type or classification. */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** List of product variants, each representing a specific option of the product (e.g., size, color, or material). */
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
};
/** Individual item within a collection containing product details and metadata. */
export type CollectionItemCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Individual item within a collection containing product details and metadata. */
export type CollectionItemSizesArgs = {
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Detailed list of collection objects. */
export type CollectionItems = {
    __typename?: 'CollectionItems';
    /** True for fetching all filter parameters and False for disabling the filter parameters. */
    filters?: Maybe<Array<Maybe<ProductFilters>>>;
    /** List of collection objects. */
    items?: Maybe<Array<Maybe<CollectionItem>>>;
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
    /**
     * Metadata for collection logo
     * @deprecated This field is obsolete.
     */
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
/** Type of collection: 'query' for dynamic collections based on search criteria, 'items' for manually curated collections. */
export declare enum CollectionType {
    Items = "items",
    Query = "query"
}
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
    /** Header for column 7. */
    col_7?: Maybe<ColumnHeader>;
    /** Header for column 8. */
    col_8?: Maybe<ColumnHeader>;
    /** Header for column 9. */
    col_9?: Maybe<ColumnHeader>;
    /** Header for column 10. */
    col_10?: Maybe<ColumnHeader>;
};
/** Configuration for common features across the sales channel. */
export type CommonFeature = {
    __typename?: 'CommonFeature';
    /**
     * Configuration for the WhatsApp communication opt-in dialog.
     * @deprecated This field is obsolete.
     */
    communication_optin_dialog?: Maybe<CommunicationOptinDialogFeature>;
    /** Configuration for product comparison feature on PDP. */
    compare_products: CompareProductsFeature;
    /** Configuration for currency settings in the sales channel. */
    currency: CurrencyFeature;
    /**
     * Configuration for store selection during sales channel deployment.
     * @deprecated This field is obsolete.
     */
    deployment_store_selection: DeploymentStoreSelectionFeature;
    /**
     * Configuration for customer feedback on PDP.
     * @deprecated This field is obsolete.
     */
    feedback: FeedbackFeature;
    /** Configuration for international shipping settings. */
    international_shipping: IntrenationalShippingFeature;
    /**
     * Configuration for sorting product listings on the listing page.
     * @deprecated This field is obsolete.
     */
    listing_page?: Maybe<ListingPageFeature>;
    /** Configuration for displaying prices on product listing pages. */
    listing_price: ListingPriceFeature;
    /**
     * Configuration for the revenue engine.
     * @deprecated This field is obsolete.
     */
    revenue_engine?: Maybe<RevenueEngineFeature>;
    /**
     * Configuration for reward points within the sales channel.
     * @deprecated This field is obsolete.
     */
    reward_points?: Maybe<RewardPointsConfig>;
};
/** An object representing commonjs module information. */
export type CommonJs = {
    __typename?: 'CommonJs';
    /** A string representing the url or link to the commonjs module. */
    link?: Maybe<Scalars['String']['output']>;
};
/** Actions available for communication operations. */
export declare enum CommunicationActionEnum {
    Optin = "optin",
    Optout = "optout"
}
/** Channels available for communication. */
export declare enum CommunicationChannelEnum {
    Email = "email",
    Sms = "sms",
    Whatsapp = "whatsapp"
}
/** The response schema for the communication consent API includes the application ID associated with the transaction, the user's identity, and the channels of communication. */
export type CommunicationConsent = {
    __typename?: 'CommunicationConsent';
    /**
     * The ID of the sales channel where the user has given their consent. Example: "000000000000000000000004".
     * @deprecated This field is obsolete.
     */
    app_id?: Maybe<Scalars['String']['output']>;
    /** The schema for all the communication channels that the user has accepted to receive communication through. Contains preferences for email, SMS, and WhatsApp channels. */
    channels?: Maybe<Channels>;
    /**
     * Whether the communication consent is encrypted or not. Indicates if PII data (email, phone numbers) is stored encrypted. Data is decrypted before being returned in API responses. Defaults to false. Example: false.
     * @deprecated This field is obsolete.
     */
    encrypted?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Identifier which can uniquely identify the user. Example: "5e56021c4bda3ccab6d9f884".
     * @deprecated This field is obsolete.
     */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** The request schema for the communication consent API includes the user's response status, the user's choice to opt in or opt out of receiving communications, and the channel through which the user wishes to receive communications. */
export type CommunicationConsentReqInput = {
    /** The user's choice to opt in or opt out of receiving communications. Values: "optin" (User wants to receive communications) or "optout" (User wants to stop receiving communications). */
    action?: InputMaybe<CommunicationActionEnum>;
    /** The channel of communication the user has agreed to receive messages through. Values: "email", "sms", or "whatsapp". */
    channel?: InputMaybe<CommunicationChannelEnum>;
    /** Whether the user has responded to the inquiry regarding their preference for opting in or out of receiving communications. Values: "yes" (User has consented) or "no" (User has declined). */
    response?: InputMaybe<ResponseEnum>;
};
/** Configuration for the WhatsApp communication opt-in dialog. */
export type CommunicationOptinDialogFeature = {
    __typename?: 'CommunicationOptinDialogFeature';
    /** Indicates whether WhatsApp communication opt-in dialog is visible. */
    visibility: Scalars['Boolean']['output'];
};
/** Detailed address information for the company. */
export type CompanyAddress = {
    __typename?: 'CompanyAddress';
    /** Primary address line, e.g. '123 Business Street'. */
    address1: Scalars['String']['output'];
    /** Secondary address line, e.g. 'Suite 456'. */
    address2?: Maybe<Scalars['String']['output']>;
    /** Type of address like 'office', 'registered' */
    address_type: AddressType;
    /** City name, e.g. 'Mumbai'. */
    city: Scalars['String']['output'];
    /** Country name, e.g. 'India'. */
    country?: Maybe<Scalars['String']['output']>;
    /** Country calling code, e.g. '+91'. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Latitude and longitude coordinates of the company location. */
    lat_long?: Maybe<LatLong>;
    /**
     * 6-digit PIN Code, e.g. 400001.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** Postal code, e.g. '400001'. */
    postal_code: Scalars['String']['output'];
    /** Specifies the sector or district of the address if applicable. */
    sector?: Maybe<Scalars['String']['output']>;
    /** State name, e.g. 'Maharashtra'. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Company information and identification details. */
export type CompanyDetail = {
    __typename?: 'CompanyDetail';
    /** Unique numeric identifier for the company, e.g. 12345, 67890. */
    id?: Maybe<Scalars['Int']['output']>;
    /** Official company name, e.g. 'ABC Electronics Pvt Ltd', 'XYZ Fashion House'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Details about the company associated with the sales channel. */
export type CompanyInfo = {
    __typename?: 'CompanyInfo';
    /** List of addresses associated with the company. */
    addresses?: Maybe<Array<Maybe<CompanyAddress>>>;
    /**
     * ISO 8601 timestamp of company information creation, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_on: Scalars['String']['output'];
    /** The unique identifier of company information. */
    id: Scalars['String']['output'];
    /**
     * Indicates whether company is active or inactive.
     * @deprecated This field is obsolete.
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the company, e.g. 'Reliance Retail Limited'. */
    name: Scalars['String']['output'];
    /** List of notification email addresses, e.g. ['admin@company.com', 'support@company.com']. */
    notification_emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Unique numeric identifier for the company. */
    uid: Scalars['Int']['output'];
};
/** Company information that owns the store. */
export type CompanyStore = {
    __typename?: 'CompanyStore';
    /** Type of business structure: Private (Private Limited Company), LLP/Partnership (Limited Liability Partnership), or HUF/Proprietorship (Hindu Undivided Family or Proprietorship). */
    business_type?: Maybe<Scalars['String']['output']>;
    /** Type of company: distributor (Distributor), franchise (Franchise), mbo (Managed Business Operations), or manufacturer-owner (Owner/Manufacturer). */
    company_type?: Maybe<Scalars['String']['output']>;
    /** Company store name. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique company store identifier. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Configuration for product comparison feature on PDP. */
export type CompareProductsFeature = {
    __typename?: 'CompareProductsFeature';
    /** Indicates whether product comparison feature is enabled on PDP. */
    enabled: Scalars['Boolean']['output'];
};
/** JavaScript frameworks compatible with the content engine. */
export declare enum CompatibleEngine {
    React = "react",
    Vue2 = "vue2"
}
/** The response schema provides the outcome of a file upload including file metadata, storage details, and the status of the upload. */
export type CompleteUploadData = {
    __typename?: 'CompleteUploadData';
    /** CDN details for accessing the uploaded file. Contains the URL information needed to retrieve the file from the CDN. */
    cdn?: Maybe<Cdn>;
    /**
     * The MIME type of the uploaded file. This is the content type that was validated during upload. Examples: "image/jpeg", "application/pdf", "text/csv".
     * @deprecated This field is obsolete.
     */
    content_type?: Maybe<Scalars['String']['output']>;
    /** The name of the file that was uploaded. This is the original filename provided by the client. Example: "product-image.jpg". */
    file_name?: Maybe<Scalars['String']['output']>;
    /**
     * The complete storage path where the file is stored in GCS. This is the same path returned from the /start API. Format: /{namespace_path}/{hashed_filename}. Used internally for file retrieval. Example: "/user-profile-pic/free/original/abc123-profile.jpg".
     * @deprecated This field is obsolete.
     */
    file_path?: Maybe<Scalars['String']['output']>;
    /**
     * The namespace identifier that was used for the upload. Determines which bucket (public/private) the file is stored in and the validation rules that were applied. Examples: "user-profile-pic" (public), "feedback-media" (public), "application-audience" (private).
     * @deprecated This field is obsolete.
     */
    namespace?: Maybe<Scalars['String']['output']>;
    /** The size of the file in bytes. Required for validation to ensure the file doesn't exceed namespace size limits. Used to validate against the namespace's max size constraint before upload. Example: 524288. */
    size?: Maybe<Scalars['Int']['output']>;
    /** Array of string tags associated with the file. These are the same tags provided during the /start API call. Can be used for filtering, searching, or organizing files. Examples: ["product", "image"], ["invoice", "2024"], []. If no tags were provided, defaults to empty array. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Contains the upload URL and expiry information from the /start API.
     * @deprecated This field is obsolete.
     */
    upload?: Maybe<Upload>;
};
/** Detailed information about the uploaded file and its processing */
export type CompleteUploadReqInput = {
    /** The MIME type of the file being uploaded. Must match one of the valid content types for the namespace. Examples: "image/jpeg", "application/pdf", "text/csv", "video/mp4". Used for validation and proper file handling by the storage service. */
    content_type: Scalars['String']['input'];
    /** The original name of the file to be uploaded. This is the filename provided in the request. Example: "product-image.jpg". */
    file_name: Scalars['String']['input'];
    /** The complete storage path where the file will be stored in GCS. Auto-generated by the system based on the namespace rules. Format: /{namespace_path}/{hashed_filename}. This path is needed for the /complete API call after uploading. Example: "/user-profile-pic/free/original/abc123-profile.jpg". */
    file_path: Scalars['String']['input'];
    /** The HTTP method to use when uploading to the signed URL. Always "PUT" for file uploads. Use this method when making the request to upload.url. Example: "PUT". */
    method: Scalars['String']['input'];
    /** The namespace that determines file storage rules, validation, path generation, and access control (public/private bucket). Examples: "user-profile-pic" (public), "feedback-media" (public), "application-audience" (private). Each namespace has specific allowed content types and size limits. */
    namespace: Scalars['String']['input'];
    /** The storage operation type to perform. Always "putObject" for file uploads. Indicates this is a write operation to create a new object in the storage bucket. Example: "putObject". */
    operation: Scalars['String']['input'];
    /** The size of the file in bytes. Must match the actual file size. Used for validation against namespace size limits. The system validates this before generating the upload URL. Example: 524288. */
    size: Scalars['Int']['input'];
    /** Optional array of string tags for categorizing and organizing the file. Tags can be provided in the request to attach metadata to the file. Can be used later for filtering and searching. Examples: ["product", "thumbnail"], ["invoice", "2024"], []. Defaults to empty array if not provided. */
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Contains the pre-signed upload URL and its expiration time. */
    upload: UploadDetailsInput;
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
/** Contact details including phone number and country code. */
export type ContactDetails = {
    __typename?: 'ContactDetails';
    /** Country code for the contact number (e.g., 91 for India, 1 for USA). */
    country_code?: Maybe<Scalars['Int']['output']>;
    /** Phone number for contacting the store (e.g., '9876543210'). */
    number?: Maybe<Scalars['String']['output']>;
};
/** Get contact details of the sales channel. */
export type ContactInfo = {
    __typename?: 'ContactInfo';
    /** Contains address details for the sales channel. */
    address?: Maybe<InformationAddress>;
    /**
     * The ID of the sales channel this contact info belongs to.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** A list of notable business highlights with icons and descriptions. */
    business_highlights?: Maybe<Array<Maybe<BusinessHighlights>>>;
    /** Copyright statement usually seen at the site's footer. */
    copyright_text?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp when sales channel information was created.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /**
     * The unique ID for sales channel contact information.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /** List of additional relevant web links related to the sales channel. */
    links?: Maybe<Array<Maybe<Links>>>;
    /** Includes links to the sales channel's social media profiles. */
    social_links: SocialLinks;
    /** The Support information which includes contact details and working hours. */
    support?: Maybe<InformationSupport>;
    /**
     * Timestamp when sales channel information was updated.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * Version key for tracking revisions. Default value is zero.
     * @deprecated This field is obsolete.
     */
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
    /**
     * Details of the action when its related to a popup.
     * @deprecated This field is obsolete.
     */
    popup?: Maybe<ActionPage>;
    /** Type of action to be taken e.g, page. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Provide details about a specific country. */
export type Country = {
    __typename?: 'Country';
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /**
     * Whether the country entity is currently active or not.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Geographical latitude and longitude data. */
    lat_long?: Maybe<PincodeLatLongData>;
    /**
     * Details about the logistics operations associated with the country.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    logistics?: Maybe<CountryLogistics>;
    /** Metadata associated with the country, offering additional details or classifications. */
    meta?: Maybe<CountryMetaResponse>;
    /** The name of the country. */
    name?: Maybe<Scalars['String']['output']>;
    /**
     * Denotes whether a seller can get onboarded to a particular country.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    onboarding_allowed?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Identifier for the parent of the current locality.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    parent_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Serviceability details for the country.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    serviceability?: Maybe<Scalars['JSON']['output']>;
    /**
     * Specific type of locality hierarchy the pincode belongs to (e.g., city, state, country).
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    sub_type?: Maybe<Scalars['String']['output']>;
    /**
     * Specifies the type of geographical feature or data, typically "Point" for coordinates in geographic data systems.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
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
/** Currency info details of ladder price which includes currncy code and currency symbol. */
export type CountryCurrencyInfo = {
    __typename?: 'CountryCurrencyInfo';
    /** Currency code of country (e.g., "USD"). */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency name for currency of country (e.g., "United States Dollar"). */
    name?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of country (e.g., "$", "₹"). */
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
    hierarchy?: Maybe<Array<Maybe<CountryHierarchy>>>;
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
    /** Country currency info (code, name, symbol), e.g., {"code": "USD", "name": "United States Dollar", "symbol": "$"}. */
    currency?: Maybe<CountryCurrencyInfo>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Location hierarchy within the country (e.g., states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"}, {"name": "City", "slug": "city"}]). */
    hierarchy?: Maybe<CountryHierarchy>;
    /** Unique identifier for the country. */
    id?: Maybe<Scalars['String']['output']>;
    /** Two-letter ISO code representing the country (e.g., "US"). */
    iso2?: Maybe<Scalars['String']['output']>;
    /** Three-letter ISO code representing the country (e.g., "USA"). */
    iso3?: Maybe<Scalars['String']['output']>;
    /** Geographical latitude of the country (e.g., "37.7749"). */
    latitude?: Maybe<Scalars['String']['output']>;
    /** Geographical longitude of the country (e.g., "-122.4194"). */
    longitude?: Maybe<Scalars['String']['output']>;
    /** The name of the country (e.g., "United States"). */
    name?: Maybe<Scalars['String']['output']>;
    /** Country dialing code (e.g., "+91" for India, "+1" for US). */
    phone_code?: Maybe<Scalars['String']['output']>;
    /** List of time zones used in the country (e.g., ["America/New_York", "America/Los_Angeles"]). */
    timezones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Indicates the type of object.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    type?: Maybe<Scalars['String']['output']>;
};
/** Defines address field configuration for a country. */
export type CountryFields = {
    __typename?: 'CountryFields';
    /** Address fields and their metadata. */
    address: Array<Maybe<CountryFieldsAddress>>;
    /** Provides templates for how addresses should be formatted in different contexts, such as during checkout, in store operating systems, and for general display. */
    address_template: CountryFieldsAddressTemplate;
    /** Address fields used for serviceability checks (e.g., [pincode] for India, [city, sector] for UAE). */
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
    input?: Maybe<Scalars['String']['output']>;
    /** Indicates the next field to fetch in the address entry sequence. This is for dependent fields eg if city is selected then next field will be state. */
    next?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the field is mandatory for the user to fill out. */
    required?: Maybe<Scalars['Boolean']['output']>;
    /** Unique field identifier for address field. e.g., 'landmark' for landmark field; stays the same even if display_name changes. */
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
    /** Display name of hierarchy of location (e.g., "City", "State", "Pincode"). */
    display_name?: Maybe<Scalars['String']['output']>;
    /** It represent hierarchy of location in country (e.g., "City", "State", "Pincode"). */
    name?: Maybe<Scalars['String']['output']>;
    /** Slug of the hierarchy (e.g., "city", "pincode"). */
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
export type CountryMetaResponse = {
    __typename?: 'CountryMetaResponse';
    /** The ISO 3166-1 alpha-2 code representing the country (e.g., "IN" for India, "US" for the United States). */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Details about the currency associated with the country. */
    currency?: Maybe<CurrencyObject>;
    /**
     * List of deliverables associated with the locality.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    deliverables?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Levels within the country (e.g., states, cities) and their slugs (e.g., [{"name": "State", "slug": "state"}, {"name": "City", "slug": "city"}]). */
    hierarchy?: Maybe<Array<Maybe<CountryHierarchy>>>;
    /** Country dialing code (e.g., "+91" for India, "+1" for US). */
    isd_code?: Maybe<Scalars['String']['output']>;
    /** Two-letter ISO code representing the country (e.g., "IN" for India, "US" for the United States). */
    iso2?: Maybe<Scalars['String']['output']>;
    /** Three-letter ISO code representing the country (e.g., "IND" for India, "USA" for the United States). */
    iso3?: Maybe<Scalars['String']['output']>;
    /** Geographical latitude of the country (e.g., "37.0902"). */
    latitude?: Maybe<Scalars['String']['output']>;
    /** Geographical longitude of the country (e.g., "-95.7129"). */
    longitude?: Maybe<Scalars['String']['output']>;
    /**
     * Identifier for the parent of the current locality.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    parent_id?: Maybe<Scalars['String']['output']>;
    /** International dialing code for the country (e.g., "+1"). */
    phone_code?: Maybe<Scalars['String']['output']>;
    /**
     * Geographical region to which the locality belongs, often used to categorize or group regions for regional management or postal purposes.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    zone?: Maybe<Scalars['String']['output']>;
};
/** Coupon data applied on cart that includes coupon code, coupon type, coupon value, description, title, subtitle etc. */
export type Coupon = {
    __typename?: 'Coupon';
    /** Discount amount based on cart value. Example: 150.0 */
    coupon_amount?: Maybe<Scalars['Float']['output']>;
    /** Message displayed to the customer when coupon is applied. Example: 'Coupon applied successfully' */
    coupon_applicable_message?: Maybe<Scalars['String']['output']>;
    /** Coupon code. Example: 'SAVE10' */
    coupon_code?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the coupon applied to cart. */
    coupon_id?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon. Example: 'percentage' */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Coupon value. Example: 10.0 */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Additional custom attributes associated with the coupon for extended functionality and metadata storage */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Description of the coupon. Example: '10% off on orders above ₹999' */
    description?: Maybe<Scalars['String']['output']>;
    /** End date of the coupon. Example: '2025-12-31' */
    end_date?: Maybe<Scalars['String']['output']>;
    /** Represents the last valid timeslot date on which the coupon can be applied in ISO 8601 (UTC Z) format,based on its configured schedule. If the coupon is restricted to specific days (e.g., Mondays and Thursdays), the expiry date will be the last eligible day within the overall end date range, not necessarily the end date itself. */
    expires_at?: Maybe<Scalars['String']['output']>;
    /** Expiry message. Example: 'Expires soon' */
    expires_on?: Maybe<Scalars['String']['output']>;
    /** Whether the coupon is applicable to the cart. Example: true */
    is_applicable?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the coupon is applied to the cart. Example: false */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Whether this is a bank/payment mode specific offer. Example: false */
    is_bank_offer?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount value allowed. Example: 500.0 */
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message to show to the user. Example: 'Applicable on orders above ₹999' */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum cart value required. Example: 999.0 */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    /** Offer text highlighting the coupon. Example: 'Save 10% today' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** List of discounted rules of coupon. Example: [{ discounted_price: 1499.0 }] */
    rule?: Maybe<Array<Maybe<DiscountRules>>>;
    /** Start date of the coupon. Example: '2025-10-01' */
    start_date?: Maybe<Scalars['String']['output']>;
    /** Coupon subtitle used for display. Example: 'Limited time offer' */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Coupon Title (name of the coupon). Example: 'SAVE10' */
    title?: Maybe<Scalars['String']['output']>;
};
/** Coupon data applied on cart that includes coupon code, coupon type, coupon value, description, title, subtitle etc. */
export type CouponCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Coupon price breakup details which includes coupon code, coupon type, coupon value, coupon description, coupon message etc. */
export type CouponBreakup = {
    __typename?: 'CouponBreakup';
    /** Coupon code of the coupon applied. Example: 'SAVE10' */
    code?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. Example: 'percentage' */
    coupon_type?: Maybe<Scalars['String']['output']>;
    /** Value of the coupon applied to cart. Example: 10.0 */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** Description of the coupon applied to cart. Example: '10% off on orders above ₹999' */
    description?: Maybe<Scalars['String']['output']>;
    /** Whether any coupon is applied to cart. Example: true */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum discount value of the coupon applied to cart. Example: 500.0 */
    max_discount_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon message of the coupon applied to cart. Example: 'Coupon applied successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Minimum cart value after which the coupon can be applied. Example: 999.0 */
    minimum_cart_value?: Maybe<Scalars['Float']['output']>;
    /** Coupon subtitle used for display. Example: 'Limited time offer' */
    sub_title?: Maybe<Scalars['String']['output']>;
    /** Coupon Title (name of the coupon). Example: 'SAVE10' */
    title?: Maybe<Scalars['String']['output']>;
    /** Type of the coupon applied to cart. Example: 'percentage' */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the coupon applied to cart. Example: 'cpn_123' */
    uid?: Maybe<Scalars['String']['output']>;
    /** Coupon value of the coupon applied to cart. Example: 150.0 */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Coupon actual price breakup details. */
export type CouponDetails = {
    __typename?: 'CouponDetails';
    /** Coupon code of the coupon applied. Example: 'SAVE10' */
    code?: Maybe<Scalars['String']['output']>;
    /** Discount amount per unit from coupon. Example: 50.0 */
    discount_single_quantity?: Maybe<Scalars['Float']['output']>;
    /** Total discount earned from coupon applied to cart. Example: 150.0 */
    discount_total_quantity?: Maybe<Scalars['Float']['output']>;
};
/** Apply coupon response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type CouponUpdateResponse = {
    __typename?: 'CouponUpdateResponse';
    /**
     * List of saved addresses for user cart checkout.
     * @deprecated This field is obsolete
     */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /**
     * Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }]
     * @deprecated This field is obsolete
     */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup for coupon, display, loyalty points, etc. */
    breakup_values?: Maybe<CartBreakup>;
    /**
     * Buy Now flag for fast checkout. Example: false
     * @deprecated This field is obsolete
     */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Checkout mode (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /**
     * Cart-level comment. Example: 'Deliver after 6 PM'
     * @deprecated This field is obsolete
     */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /**
     * Cart-level coupon data (applied flag, code, amount, title, message).
     * @deprecated This field is obsolete , Use breakup_values.coupon instead
     */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency for prices (e.g., code 'INR', symbol '₹'). */
    currency?: Maybe<CartCurrency>;
    /**
     * Custom cart metadata. Example: { channel: 'web' }
     * @deprecated This field is obsolete
     */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery charge informational message. Example: 'Free delivery above ₹999'
     * @deprecated This field is obsolete
     */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery promise for the cart.
     * @deprecated This field is obsolete
     */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /**
     * Whether promotion free gift selection is available. Example: true
     * @deprecated This field is obsolete
     */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /**
     * GSTIN associated with the cart. Example: '27AAACI1195H1ZK'
     * @deprecated This field is obsolete
     */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Whether the cart response is valid. Example: true
     * @deprecated This field is obsolete
     */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** List of cart items including item id, size, store, pricing, etc. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message. Example: 'Cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /**
     * PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 }
     * @deprecated This field is obsolete
     */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /**
     * User PAN number. Example: 'ABCDE1234F'
     * @deprecated This field is obsolete
     */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Number of items in cart. Example: 3
     * @deprecated This field is obsolete
     */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Apply coupon response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type CouponUpdateResponseAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Payment mode validity details of the coupon which shows coupon is valid for the payment mode or not. */
export type CouponValidate = {
    __typename?: 'CouponValidate';
    /** Coupon validity status for the payment mode. Example: { valid: true } */
    coupon_validity?: Maybe<CouponValidity>;
    /** Payment mode validity message. Example: 'Applicable on CARD only' */
    message?: Maybe<Scalars['String']['output']>;
    /** Success flag of validation response. Example: true */
    success: Scalars['Boolean']['output'];
};
/** Coupon validity schema which includes coupon title, coupon code, next validation flag, valid flag, error display message and discount of coupon. */
export type CouponValidity = {
    __typename?: 'CouponValidity';
    /** Coupon code of the coupon applied. Example: 'SAVE10' */
    code?: Maybe<Scalars['String']['output']>;
    /** Coupon discount value. Example: 150.0 */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Display message for coupon validity. Example: 'Coupon valid for this payment mode' */
    display_message_en?: Maybe<Scalars['String']['output']>;
    /** Error message for the selected payment mode. Example: 'Not valid on COD' */
    error?: Maybe<Scalars['String']['output']>;
    /** Whether next page validation is required. Example: false */
    next_validation_required?: Maybe<Scalars['Boolean']['output']>;
    /** Coupon title. Example: 'SAVE10' */
    title?: Maybe<Scalars['String']['output']>;
    /** Whether the coupon is valid. Example: true */
    valid?: Maybe<Scalars['Boolean']['output']>;
};
/** Get coupon list response schema which page information and list of coupons. */
export type Coupons = {
    __typename?: 'Coupons';
    /** List of available coupons that can be applied on cart. Example: [{ coupon_code: 'SAVE10', coupon_value: 10 }] */
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    /** Page information of the coupon list. Example: { current: 1, total: 5, has_next: true } */
    page?: Maybe<PageCoupon>;
};
/** Create Order User Data. */
export type CreateOrderUserData = {
    __typename?: 'CreateOrderUserData';
    /** Access code issued by CCAvenue, used for decrypting and validating the response payload. */
    access_code?: Maybe<Scalars['String']['output']>;
    /** Aggregator name. */
    aggregator?: Maybe<Scalars['String']['output']>;
    /** Total amount for the transaction. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Base64-encoded HTML form content. */
    base64_html?: Maybe<Scalars['String']['output']>;
    /** Callback url for aggregator. */
    callback_url?: Maybe<Scalars['String']['output']>;
    /** Mobile number without country code. eg 9876543210. */
    contact?: Maybe<Scalars['String']['output']>;
    /** Currency code of the transaction. eg. INR */
    currency?: Maybe<Scalars['String']['output']>;
    /** Aggregator customer id. */
    customer_id?: Maybe<Scalars['String']['output']>;
    /** Email. */
    email?: Maybe<Scalars['String']['output']>;
    /** Encrypted message required by CCAvenue for redirection. */
    enc_message?: Maybe<Scalars['String']['output']>;
    /** Transaction Id for Extensions. */
    gid?: Maybe<Scalars['String']['output']>;
    /** CCAvenue merchant identifier associated with the transaction. */
    merchant_id?: Maybe<Scalars['String']['output']>;
    /** Merchant order id. */
    merchant_order_id?: Maybe<Scalars['String']['output']>;
    /** Merchant Transaction Id */
    merchant_transaction_id?: Maybe<Scalars['String']['output']>;
    /** Method details. eg card */
    method?: Maybe<Scalars['String']['output']>;
    /** Next step information for the order response. */
    nextAction?: Maybe<NextAction>;
    /** Aggregator order id. eg order_RmFxCPUQ4qvn39 */
    order_id?: Maybe<Scalars['String']['output']>;
};
/** Create order user request schema. */
export type CreateOrderUserRequestInput = {
    /** Currency code of the transaction. eg. INR */
    currency: Scalars['String']['input'];
    /** Failure page url. */
    failure_callback_url: Scalars['String']['input'];
    /** Unique id of payment link. Refer to the response of the createPaymentLink mutation. */
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
    /** Merchant order id. eg FY692D3ADF53333A20BD */
    order_id?: Maybe<Scalars['String']['output']>;
    /**
     * Payment confirm url for aggregator.
     * @deprecated Field is not required and will be removed in a future release. Use callback_url instead.
     */
    payment_confirm_url?: Maybe<Scalars['String']['output']>;
    /**
     * HTTP status code.
     * @deprecated Field is not required and will be removed in a future release.
     */
    status_code?: Maybe<Scalars['Int']['output']>;
    /** Successful or failure. */
    success: Scalars['Boolean']['output'];
};
/** Create Payment Link Request. */
export type CreatePaymentLinkRequestInput = {
    /** Total value of order. */
    amount: Scalars['Float']['input'];
    /** country phone code eg. +91 */
    country_phone_code?: InputMaybe<Scalars['String']['input']>;
    /** Description of payment. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Email to which the payment link is to be sent. */
    email: Scalars['String']['input'];
    /** Merchant order id. */
    external_order_id: Scalars['String']['input'];
    /** Create Payment Link Meta. */
    meta: MetaInput;
    /** Mobile number without country code to which the payment link is to be sent. eg. 9876543210 */
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
    /** Time in seconds until the payment link expires. After this period, polling is no longer necessary. */
    polling_timeout?: Maybe<Scalars['Int']['output']>;
    /**
     * HTTP status code.
     * @deprecated This field is obsolete.
     */
    status_code?: Maybe<Scalars['Int']['output']>;
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
/** Configuration for crediting reward points. */
export type Credit = {
    __typename?: 'Credit';
    /** Indicates whether reward points crediting is enabled. */
    enabled: Scalars['Boolean']['output'];
};
/** Credit Account Sumamry Schema. */
export type CreditAccountSummary = {
    __typename?: 'CreditAccountSummary';
    /** Unique identifier associated with the customer's account */
    account_id: Scalars['String']['output'];
    /** Amount on hold Summary */
    amount_on_hold?: Maybe<Array<Maybe<UserCreditInfo>>>;
    /** Available Balance Summary */
    available_balance?: Maybe<UserCreditInfo>;
    /** Redeemable Balance Summary */
    redeemable_balance?: Maybe<UserCreditInfo>;
    /** Current state of the account, indicating whether it is ACTIVE, INACTIVE, or UNREGISTERED. */
    status?: Maybe<AccountStatusEnum>;
};
/** Validate customer and Fetch Balance response model. */
export type CreditAndCustomerValidation = {
    __typename?: 'CreditAndCustomerValidation';
    /** Credit Account Sumamry */
    account?: Maybe<CreditAccountSummary>;
    /** Unique identifier for the shopping cart. */
    cart_id?: Maybe<Scalars['String']['output']>;
    /** Credit is applied to the user's account or not */
    is_applied: Scalars['Boolean']['output'];
    /** The customer is eligible to make a transaction or not */
    is_eligible: Scalars['Boolean']['output'];
    /** Detailed message about the user credit eligibility. */
    message?: Maybe<Scalars['String']['output']>;
};
/** Credit Detail. */
export type CreditDetail = {
    __typename?: 'CreditDetail';
    /** Credit detail. */
    data: CreditSummary;
    /** Payment confirmation updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Schema for credit note. */
export type CreditNote = {
    __typename?: 'CreditNote';
    /** Unique identifier of the credit note generated for the shipment. For example, `credit_note_id` can be set to 'CN0000050AA000147'. */
    credit_note_id?: Maybe<Scalars['String']['output']>;
    /** Pre-signed URL to download the credit note PDF document generated against shipment and it is valid for a limited time only. For example, `credit_note_url` can be set to 'https://example.com/resource'. */
    credit_note_url?: Maybe<Scalars['String']['output']>;
};
/** Credit summary response. */
export type CreditSummary = {
    __typename?: 'CreditSummary';
    /** Available credit balance. */
    available_credit?: Maybe<Scalars['Float']['output']>;
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
    /** 3-character currency code, e.g. 'INR', 'USD', 'EUR'. */
    code?: Maybe<Scalars['String']['output']>;
    /** Country code associated with the currency, e.g. 'IN'. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Country name associated with the currency, e.g. 'India'. */
    country_name?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp when sales channel currency was created, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Acceptable decimal limits for a given currency, e.g. 2 means up to 2 decimal digits can be accepted (like $1.05). */
    decimal_digits?: Maybe<Scalars['Int']['output']>;
    /** The unique identifier of the currency. */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether currency is enabled or disabled in current sales channel.
     * @deprecated By default only active currencies will be listed on the website
     */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the currency, e.g. 'Indian Rupee'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique symbol for identifying the currency, e.g. '₹'. */
    symbol?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp when sales channel currency was updated, e.g. '2023-10-16T14:20:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Defines the currency details. */
export type CurrencyDetail = {
    __typename?: 'CurrencyDetail';
    /** Currency code ISO 4217 */
    code?: Maybe<Scalars['String']['output']>;
    /** Whether this is default currency for country */
    is_default?: Maybe<Scalars['Boolean']['output']>;
    /** Name of currency */
    name?: Maybe<Scalars['String']['output']>;
    /** Currency symbol */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Defines how currency information is displayed to customers. */
export declare enum CurrencyDisplayType {
    /** Show all available currencies */
    All = "all",
    /** Show currency code explicitly with price */
    Explicit = "explicit"
}
/** Configuration for currency settings in the sales channel. */
export type CurrencyFeature = {
    __typename?: 'CurrencyFeature';
    /** 3-letter code of the default currency used in the sales channel, e.g. 'INR'. Default value is 'INR'. */
    default_currency: Scalars['String']['output'];
    /** Currency display type can be explicit or all. If 'explicit', currency formatting shows currency code with price. */
    type: CurrencyDisplayType;
    /** List of 3-letter currency codes supported, e.g. ['INR', 'USD', 'EUR']. */
    value: Array<Maybe<Scalars['String']['output']>>;
};
/** Currency info details of ladder price which includes currncy code and currency symbol. */
export type CurrencyInfo = {
    __typename?: 'CurrencyInfo';
    /** Currency code of ladder price promotion. */
    code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency of ladder price product. */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Provides details about a currency. */
export type CurrencyObject = {
    __typename?: 'CurrencyObject';
    /** The currency code, typically a three-letter ISO code (e.g., "USD" for US Dollar). */
    code?: Maybe<Scalars['String']['output']>;
    /** Name of the currency. */
    name?: Maybe<Scalars['String']['output']>;
    /** The symbol used to represent the currency (e.g., "$" for US Dollar). */
    symbol?: Maybe<Scalars['String']['output']>;
};
/** Schema for currency. */
export type CurrencySchema = {
    __typename?: 'CurrencySchema';
    /** The ISO 4217 currency code, such as 'INR' for Indian Rupee. This field represents the standardized three-letter code of a currency. For example, 'INR', 'USD', or 'EUR'. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The symbol representing the currency, such as '₹' for Indian Rupee. This is used for display purposes alongside currency amounts. For example, '₹', '$', or '€'. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
};
/** Currency value information containing currency code and amount. */
export type CurrencyValue = {
    __typename?: 'CurrencyValue';
    /** Currency code. Example: 'INR' */
    currency?: Maybe<Scalars['String']['output']>;
    /** Numeric amount value. Example: 100.0 */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Schema for current status. */
export type CurrentStatus = {
    __typename?: 'CurrentStatus';
    /** The type of journey for the shipment, indicating the direction of the shipment. For example, `journey_type` can be set to 'value'. */
    journey_type?: Maybe<Scalars['String']['output']>;
    /** The name or label indicating the current state or status. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
    /** The current status of the bag. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
    /** The date and time when the status was last updated. For example, `updated_at` can be set to '2024-11-01T10:00:00Z'. */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Custom Field details for resources */
export type CustomField = {
    __typename?: 'CustomField';
    /** Creator of the custom field */
    creator?: Maybe<CustomFieldCreator>;
    /** Custom object definition if type is custom object */
    custom_object_definition_id?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. */
    id?: Maybe<Scalars['String']['output']>;
    /** Key identifier for the custom field */
    key: Scalars['String']['output'];
    /** Namespace under which custom field is present. */
    namespace?: Maybe<Scalars['String']['output']>;
    /** Type of custom fields Supported */
    type?: Maybe<CustomFieldType>;
    /** Decoded values array for the custom field */
    values: Scalars['JSON']['output'];
};
/** Supported custom field creator types */
export declare enum CustomFieldCreator {
    /** Created at application level */
    Application = "application",
    /** Created at company level */
    Company = "company"
}
/** Result type that can contain either a single array of custom fields or grouped custom fields for multiple resources */
export type CustomFieldResult = {
    __typename?: 'CustomFieldResult';
    /** Single array of custom fields (for single resource queries) */
    fields?: Maybe<Array<CustomField>>;
    /** Grouped custom fields by resource (for multiple resource queries) */
    groups?: Maybe<Array<ResourceCustomFieldGroup>>;
};
/** Supported custom field types */
export declare enum CustomFieldType {
    /** Boolean true/false type */
    BooleanType = "boolean_type",
    /** Date type */
    Date = "date",
    /** Datetime type */
    Datetime = "datetime",
    /** Dropdown select field */
    Dropdown = "dropdown",
    /** Duration/time period type */
    Duration = "duration",
    /** File upload type */
    File = "file",
    /** Float/decimal number type */
    FloatType = "float_type",
    /** HTML content type */
    Html = "html",
    /** Integer number type */
    Integer = "integer",
    /** JSON object type */
    Json = "json",
    /** Metaobject reference type */
    Metaobject = "metaobject",
    /** Product reference type */
    Product = "product",
    /** Multi-line text string */
    StringMultiLine = "string_multi_line",
    /** Single line text string */
    StringSingleLine = "string_single_line",
    /** URL/link type */
    Url = "url"
}
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
    /** Contents of the custom meta tag group. For example, 'keywords, fashion, clothing'. */
    content?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the custom meta tag group. For example, 'keywords' or 'author'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Data containing details of custom field definition. */
export type CustomObjectDefintion = {
    __typename?: 'CustomObjectDefintion';
    /** Key of custom field inside custom object. For example, 'warranty_period' or 'custom_size'. */
    display_name_key?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, 'def_123456' or '67890abcdef'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of definition of custom field. For example, 'Warranty Period' or 'Custom Size'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Data type of the custom field. For example, 'text', 'number', 'boolean', or 'date'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Details related to a custom page and contents. */
export type CustomPageDetail = {
    __typename?: 'CustomPageDetail';
    /**
     * Application ID - Identifier for a Sales channel.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Flag denoting whether the page is archived or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /** Components can be used to store multiple components. For example, ['comp_1', 'comp_2', 'comp_3']. */
    component_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Contents of a custom page. For example, [{"type": "text", "value": "Hello World"}, {"type": "image", "url": "https://example.com/img.jpg"}]. */
    content?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** A CDN URL at which the entire html content can be fetched from. For example, 'https://cdn.example.com/pages/about-us.html'. */
    content_path?: Maybe<Scalars['String']['output']>;
    /**
     * Details regarding the creator of entity.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<CreatedBy>;
    /** Custom JSON object for specific use cases. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /**
     * Details related to resource creation and updation.
     * @deprecated This field is obsolete.
     */
    date_meta?: Maybe<DateMeta>;
    /** Description about the page. For example, 'Learn more about our company and mission'. */
    description?: Maybe<Scalars['String']['output']>;
    /** Data related to image. */
    feature_image?: Maybe<Asset>;
    /** Unique identifier of an entry. For example, 'page_123456' or '67890abcdef'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Orientation for Custom Pages - Landscape or portrait. For example, 'landscape' or 'portrait'. */
    orientation?: Maybe<Scalars['String']['output']>;
    /** List of Custom JSON object for specific use cases. */
    page_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Platform for Custom Pages - Denotes the device type. For example, 'web', 'ios', or 'android'. */
    platform?: Maybe<Scalars['String']['output']>;
    /**
     * Whether page is active or not on website. For example, true or false.
     * @deprecated This field is obsolete.
     */
    published?: Maybe<Scalars['Boolean']['output']>;
    /** Details related to schedule of a custom page. */
    schedule?: Maybe<CronSchedule>;
    /** Details related to SEO of an entry. */
    seo?: Maybe<SeoDetails>;
    /** A short, human-readable, URL-friendly identifier. For example, 'about-us' or 'contact'. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Tags under a page. For example, ['about', 'company']. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The title of the page. For example, 'About Us' or 'Contact'. */
    title?: Maybe<Scalars['String']['output']>;
    /** Type of editor through which the page was created so appropriate rendering engine is used. For example, 'visual', 'html', or 'markdown'. */
    type?: Maybe<Scalars['String']['output']>;
    /**
     * Visibility of Page.
     * @deprecated This field is obsolete.
     */
    visibility?: Maybe<Scalars['JSON']['output']>;
};
/** Validate customer eligibility and show credit summary. */
export type CustomerAndCreditSummary = {
    /** Payment aggregator handling the transaction. */
    aggregator: Scalars['String']['input'];
    /** Unique identifier for the shopping cart. */
    cart_id?: InputMaybe<Scalars['String']['input']>;
    /** Payable amount */
    transaction_amount: Scalars['Float']['input'];
    /** The unique identifier of the user. */
    user_id?: InputMaybe<Scalars['String']['input']>;
};
/** Customer details including name, mobile, and email. */
export type CustomerDetailsInput = {
    /** Email address. Example: 'john.doe@example.com' */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Mobile number. Example: '9876543210' */
    mobile: Scalars['String']['input'];
    /** Full name. Example: 'John Doe' */
    name?: InputMaybe<Scalars['String']['input']>;
};
/** Schema for customer details response. */
export type CustomerDetailsResponse = {
    __typename?: 'CustomerDetailsResponse';
    /** Country of the customer. For example, `country` can be set to 'India'. */
    country?: Maybe<Scalars['String']['output']>;
    /** Customer's name. For example, `name` can be set to 'John Doe'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the order. For example, `order_id` can be set to 'FY63C1FBA80195F734C0'. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Customer's phone number. For example, `phone` can be set to '9876543210'. */
    phone?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the shipment. For example, `shipment_id` can be set to '16736576489251696245'. */
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
    /**
     * Sales channel id.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** Company id for data loader. For example, 'company_123'. */
    company?: Maybe<Scalars['String']['output']>;
    /** Content of a data loader. For example, HTML content or JSON data. */
    content?: Maybe<Scalars['String']['output']>;
    /**
     * ISO 8601 timestamp of creation of the application information. For example, '2024-01-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Boolean to determine that loader is selected or not. For example, true or false. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** Name of dataloader. For example, 'Product Loader' or 'Category Loader'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Operation ID of the method which data loader is overriding. For example, 'getProducts' or 'getCategories'. */
    operation_id?: Maybe<Scalars['String']['output']>;
    /** Service of data loader which overrides the default method. For example, 'catalog' or 'content'. */
    service?: Maybe<Scalars['String']['output']>;
    /** Details regarding the details of extension which created dataloader. */
    source?: Maybe<DataLoaderSource>;
    /** Type of data loader. */
    type?: Maybe<DataLoaderType>;
    /**
     * ISO 8601 timestamp of updation of the application information. For example, '2024-01-20T14:45:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** URL at which data loader redirects. For example, 'https://example.com/api/products'. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Details regarding the details of extension which created dataloader. */
export type DataLoaderSource = {
    __typename?: 'DataLoaderSource';
    /** Identifier of an extension. For example, '621e1f2ca78f7425f939641d'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Type of creator. For example, 'extension'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Types of data loaders for information retrieval. */
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
/**
 * Schema for performing data updates across shipments and products.
 * It can contain :
 * - Shipment-level updates (via `entities`)
 * - Product/bag-level updates (via `products`)
 */
export type DataUpdatesInput = {
    /** List of shipment-level updates. */
    entities?: InputMaybe<Array<InputMaybe<EntitiesDataUpdatesInput>>>;
    /** List of product or bag-level updates. */
    products?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesInput>>>;
};
/** Details related to resource creation and updation. */
export type DateMeta = {
    __typename?: 'DateMeta';
    /** Timestamp which represent the time when data was created. For example, '2024-01-15T10:30:00Z'. */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Timestamp which represent when was the last time when data was updated. For example, '2024-01-20T14:45:00Z'. */
    modified_on?: Maybe<Scalars['String']['output']>;
};
/** Configuration for debiting reward points. */
export type Debit = {
    __typename?: 'Debit';
    /** Indicates whether automatic debit of reward points is allowed. */
    auto_apply?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether reward points debiting is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Strategy channel for debiting reward points, e.g. 'fynd', 'external'. */
    strategy_channel?: Maybe<Scalars['String']['output']>;
};
/** Represents the default currency. */
export type DefaultCurrency = {
    __typename?: 'DefaultCurrency';
    /** 3-character code of the default currency, e.g. 'INR', 'EUR', 'USD'. */
    code?: Maybe<Scalars['String']['output']>;
    /**
     * The unique identifier reference of the default currency.
     * @deprecated This field is obsolete.
     */
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
    /** Unique ID of the reason. */
    reason_id?: Maybe<Scalars['String']['output']>;
    /** Text of the reason to be shown to user. */
    reason_text?: Maybe<Scalars['String']['output']>;
    /** A boolean whether to show text area or not. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Delete address response, includes address id and deleted flag. */
export type DeleteAddressResponse = {
    __typename?: 'DeleteAddressResponse';
    /** Id of the address. Example: 'addr_001' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether the address was deleted. Example: true */
    is_deleted?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to delete the user. */
export type DeleteApplicationUserRequestSchemaInput = {
    /** OTP to confirm deletion. */
    otp: Scalars['String']['input'];
    /** Reason for deleting the user. */
    reason: Scalars['String']['input'];
    /** Identifier for the selected deletion reason; see PlatformConfig.delete_account_reasons. */
    reason_id: Scalars['String']['input'];
    /** ID of request to delete the user. */
    request_id?: InputMaybe<Scalars['String']['input']>;
};
/** Input object used to delete an existing refund beneficiary. */
export type DeleteBeneficiaryInput = {
    /** Unique identifier of the beneficiary to delete. */
    id: Scalars['String']['input'];
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
    /** Message for delete cart response. Example: 'Cart archived' */
    message?: Maybe<Scalars['String']['output']>;
    /** True if cart is archived successfully. Example: true */
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
    /** The full address. For example, `address` can be set to '123 Main Street, Downtown, Surat'. */
    address?: Maybe<Scalars['String']['output']>;
    /** The primary line of the address. For example, `address1` can be set to '123 Main Street, Downtown'. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The secondary line of the address. For example, `address2` can be set to '123 MG Road'. */
    address2?: Maybe<Scalars['String']['output']>;
    /** The category of the address. For example, `address_category` can be set to '123 MG Road'. */
    address_category?: Maybe<Scalars['String']['output']>;
    /** The type of address. For example, `address_type` can be set to '123 MG Road'. */
    address_type?: Maybe<Scalars['String']['output']>;
    /** The area or locality. For example, `area` can be set to 'Fynd apartments'. */
    area?: Maybe<Scalars['String']['output']>;
    /** The city of the address. For example, `city` can be set to 'Panjim'. */
    city?: Maybe<Scalars['String']['output']>;
    /** The name of the contact person. For example, `contact_person` can be set to 'value'. */
    contact_person?: Maybe<Scalars['String']['output']>;
    /** The country of the address. For example, `country` can be set to 'India'. */
    country?: Maybe<Scalars['String']['output']>;
    /** The ISO code for the country. For example, `country_iso_code` can be set to 'sample_code'. */
    country_iso_code?: Maybe<Scalars['String']['output']>;
    /** The country phone code. For example, `country_phone_code` can be set to '+919876543210'. */
    country_phone_code?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the address was created. For example, `created_at` can be set to 'value'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** The formatted display address, typically used for printing or displaying in user interfaces. For example, `display_address` can be set to '123 Main Street, Downtown, Panjim, Goa 403521'. */
    display_address?: Maybe<Scalars['String']['output']>;
    /** The email address. For example, `email` can be set to 'user@example.com'. */
    email?: Maybe<Scalars['String']['output']>;
    /** A nearby landmark. For example, `landmark` can be set to 'value'. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** The latitude coordinate. For example, `latitude` can be set to 99.99. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** The longitude coordinate. For example, `longitude` can be set to 99.99. */
    longitude?: Maybe<Scalars['Float']['output']>;
    /** The name of the person associated with the address. For example, `name` can be set to 'John Doe'. */
    name?: Maybe<Scalars['String']['output']>;
    /** The phone number of the person associated with the address. For example, `phone` can be set to '9876543210'. */
    phone?: Maybe<Scalars['String']['output']>;
    /** The postal code of the address. For example, `pincode` can be set to '403521'. */
    pincode?: Maybe<Scalars['String']['output']>;
    /** The state of the address. For example, `state` can be set to 'Goa'. */
    state?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the address was last updated. For example, `updated_at` can be set to '2023-01-14T06:17:37Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * The version of the address format. For example, `version` can be set to 'value'.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['String']['output']>;
};
/** Delivery charge configuration including charge thresholds and enabled flag. */
export type DeliveryChargesConfig = {
    __typename?: 'DeliveryChargesConfig';
    /** Charges applicable based on threshold. Example: [{ threshold: 999.0, charges: 0.0 }] */
    charges?: Maybe<Array<Maybe<ChargesThreshold>>>;
    /** Whether delivery charges are enabled. Example: true */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/** Provides comprehensive details about a delivery operation. */
export type DeliveryOperationSchema = {
    __typename?: 'DeliveryOperationSchema';
    /**
     * A code that identifies a specific geographic area, often used for sorting and routing deliveries.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    area_code?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether the delivery partner (DP) is assigned from stormbreaker service.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    assign_dp_from_sb?: Maybe<Scalars['Boolean']['output']>;
    /**
     * An identifier used to reference accounts or entities outside the organization's system, such as partner accounts.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    external_account_id?: Maybe<Scalars['String']['output']>;
    /** First Mile Priority; focuses on the initial segment of the logistics process, from the point of origin to the first distribution center. */
    fm_priority?: Maybe<Scalars['Int']['output']>;
    /**
     * An identifier used internally to track accounts or entities within the organization's system.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    internal_account_id?: Maybe<Scalars['String']['output']>;
    /** Last Mile Priority; deals with the final stage of the delivery process, where goods are delivered from the distribution center to the final destination. */
    lm_priority?: Maybe<Scalars['Int']['output']>;
    /**
     * Refers to the various activities and processes involved in managing and executing the delivery and logistics operations.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    operations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * The method of payment used for transactions, such as credit card, debit card, cash on delivery, etc.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** Reverse Pickup Priority; pertains to the process of collecting goods from the customer for return or exchange. */
    rvp_priority?: Maybe<Scalars['Int']['output']>;
    /**
     * The method of transportation used for delivering goods, such as road, rail, air, or sea.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    transport_mode?: Maybe<Scalars['String']['output']>;
};
/** Contains delivery promises for both global and store levels based on a specific locality type. */
export type DeliveryPromise = {
    __typename?: 'DeliveryPromise';
    /** List of delivery promises for each store. */
    items?: Maybe<Array<Maybe<StorePromise>>>;
    /** Pagination details for the list of promises, including current page, page size, and total items. */
    page?: Maybe<PageInfo>;
    /** Delivery promise information like max and min delivery time. */
    promise?: Maybe<DeliveryPromiseInfo>;
};
/** Min and Max Delivery promise formatted. */
export type DeliveryPromiseFormatted = {
    __typename?: 'DeliveryPromiseFormatted';
    /** Maximum Delivery promise formatted. */
    max?: Maybe<Scalars['String']['output']>;
    /** Minimum Delivery promise formatted. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Contains earliest and latest delivery times for a store. */
export type DeliveryPromiseInfo = {
    __typename?: 'DeliveryPromiseInfo';
    /** Latest delivery time. */
    max?: Maybe<Scalars['String']['output']>;
    /** Earliest delivery time. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Delivery promise option with code and promise details. */
export type DeliveryPromiseItem = {
    __typename?: 'DeliveryPromiseItem';
    /** Fulfillment option name (e.g., 'Express Delivery', 'Hyper Delivery'). */
    code?: Maybe<Scalars['String']['output']>;
    /** Estimated delivery timestamp in ISO 8601 format with timezone. */
    delivery_promise?: Maybe<Scalars['String']['output']>;
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
/** Schema for delivery reattempt request. */
export type DeliveryReattemptRequestInput = {
    /** A dynamic object for the updated shipment delivery address, structured as per country-specific formats. To retrieve the address field structure for a specific country, use the getCountry operationID. Example: { address1: '123 Main Street, Downtown', city: 'Panjim', pincode: '403521', state: 'Goa', area: 'Fynd apartments', landmark: 'Near City Center' }. */
    delivery_address?: InputMaybe<Scalars['JSON']['input']>;
    /** The desired date and time for the shipment delivery reattempt in ISO 8601 UTC format (e.g., 2023-01-22T10:00:00Z). For example, '2023-01-22T10:00:00Z' or '2023-01-22T14:30:00Z'. */
    delivery_reschedule_date: Scalars['String']['input'];
    /** A short note from the customer stating the reason for requesting the delivery reattempt. For example, 'Please deliver in the morning' or 'Not available at this time'. */
    remark: Scalars['String']['input'];
};
/** Represents the response returned after submitting a delivery reattempt request. */
export type DeliveryReattemptRequestResponse = {
    __typename?: 'DeliveryReattemptRequestResponse';
    /** A message confirming the successful submission of the delivery reattempt request. For example, 'Delivery reattempt request submitted successfully' or 'Your delivery has been rescheduled'. */
    message?: Maybe<Scalars['String']['output']>;
};
/**
 * Configuration for worldwide shipping and restricted shipping to specific stores and products within defined delivery areas.
 * This object has been deprecated and will be removed in future release.
 */
export type DeliveryStrategy = {
    __typename?: 'DeliveryStrategy';
    /** Delivery strategy value. 'all' allows worldwide shipping, 'delivery_zone' restricts to specific areas. */
    value: DeliveryStrategyValue;
};
/** Defines the delivery strategy for order fulfillment. */
export declare enum DeliveryStrategyValue {
    /** Worldwide shipping is allowed */
    All = "all",
    /** Shipping is restricted to specific delivery zones */
    DeliveryZone = "delivery_zone"
}
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
    /** Name of the department, e.g. 'Fashion', 'Electronics', 'Home & Garden'. */
    department: Scalars['String']['output'];
    /** List of L1 categories within the department, organized hierarchically. */
    items?: Maybe<Array<Maybe<CategoryItem>>>;
};
/** Represents a unique identifier for a department. */
export type DepartmentIdentifier = {
    __typename?: 'DepartmentIdentifier';
    /** Slug or URL-friendly identifier for the department. */
    slug: Scalars['String']['output'];
    /** Unique identifier for the department. */
    uid: Scalars['Int']['output'];
};
/**
 * Configuration for store selection during sales channel deployment.
 * This object has been deprecated and will be removed in future release.
 */
export type DeploymentStoreSelectionFeature = {
    __typename?: 'DeploymentStoreSelectionFeature';
    /** Indicates whether store selection (for deploying the sales channel) is permitted. */
    enabled: Scalars['Boolean']['output'];
    /** Store selection type. 'hard' means store selection is compulsory, 'soft' means optional. */
    type: DeploymentStoreSelectionFeatureType;
};
/** Defines the requirement level for store selection during deployment. */
export declare enum DeploymentStoreSelectionFeatureType {
    /** When store selection is compulsory */
    Hard = "hard",
    /** When store selection is optional */
    Soft = "soft"
}
/** Data regarding the title and description of a sales channel website. */
export type Detail = {
    __typename?: 'Detail';
    /** Contents of the description of a sales channel website. For example, 'Shop the latest fashion trends and styles'. */
    description?: Maybe<Scalars['String']['output']>;
    /** URL of the image of a sales channel website. For example, 'https://cdn.example.com/og-image.jpg'. */
    image_url?: Maybe<Scalars['String']['output']>;
    /** Contents of the title of a sales channel website. For example, 'Fashion Store - Latest Trends'. */
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
/** [Deprecated] Detailed information about the beneficiary. This input type will be removed in future versions. Use `BeneficiaryDetailsInput` instead. */
export type DetailsInput = {
    /** Full name of the bank account holder. */
    account_holder: Scalars['String']['input'];
    /** Bank account number of the beneficiary. */
    account_no: Scalars['String']['input'];
    /** Residential or business address of the user (optional). */
    address?: InputMaybe<Scalars['String']['input']>;
    /** Name of the beneficiary's bank. */
    bank_name: Scalars['String']['input'];
    /** Branch name of the beneficiary's bank. */
    branch_name: Scalars['String']['input'];
    /** Optional remarks or notes provided by the user */
    comment?: InputMaybe<Scalars['String']['input']>;
    /** Email address of the beneficiary. */
    email: Scalars['String']['input'];
    /** IFSC code of the beneficiary's bank branch. */
    ifsc_code: Scalars['String']['input'];
    /** Mobile number of the beneficiary. */
    mobile: Scalars['String']['input'];
    /** Virtual Payment Address (VPA) for UPI transfer mode. */
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
    /** List of offer items with margin, price, quantity, type, offer price. Example: [{ margin: 10, quantity: 2, price: { effective: 499 } }] */
    offers?: Maybe<Array<Maybe<OfferItem>>>;
    /** Seller details with uid and name. Example: { uid: 2001, name: 'Acme Retail' } */
    seller?: Maybe<CategoryInfo>;
};
/** Lists the discounted price applicable to the product. Note: discounted_price is returned only when store_id is provided in promotions input query object. */
export type DiscountRules = {
    __typename?: 'DiscountRules';
    /** Discount will be reflected in the cart upon adding the product. Example: 1499.0 */
    discounted_price?: Maybe<Scalars['Float']['output']>;
};
/** Discount rules of the promotion. */
export type DiscountRulesApp = {
    __typename?: 'DiscountRulesApp';
    /** Item criteria like item IDs, brand IDs, category IDs, store IDs, SKUs, tags, and exclusions that determine which items qualify for the discount rule. */
    item_criteria?: Maybe<Scalars['JSON']['output']>;
    /** Matched buy rules for promotion. */
    matched_buy_rules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Discount offer details including discount amount, percentage, quantity limits, maximum discount amount, and other offer-specific configurations. */
    offer?: Maybe<Scalars['JSON']['output']>;
    /** Raw offer details of offer object for promotion. */
    raw_offer?: Maybe<Scalars['JSON']['output']>;
};
/** Display price breakup schema denotes price currency, key, value,message to display as breakup on UI. */
export type DisplayBreakup = {
    __typename?: 'DisplayBreakup';
    /** Attribute type (e.g., subtotal). Example: 'subtotal' */
    attr?: Maybe<Scalars['String']['output']>;
    /** Currency code for the price (ISO 4217). Example: 'INR' */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for the price. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Human-readable label to show against the value. Example: 'Discount' */
    display?: Maybe<Scalars['String']['output']>;
    /** Machine key for the price (e.g., total_mrp, subtotal). Example: 'total' */
    key?: Maybe<Scalars['String']['output']>;
    /** Messages to display at this price level. Example: ['Includes taxes'] */
    message?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Original value of the price. Example: 1999.0 */
    original?: Maybe<Scalars['Float']['output']>;
    /** Preset value if set from platform. Example: 0.0 */
    preset?: Maybe<Scalars['Float']['output']>;
    /** Numeric value of the price. Example: 1499.0 */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Details about the sales channel domain, including verification status, whether it's primary or shortlink, and its unique identifier. */
export type Domain = {
    __typename?: 'Domain';
    /**
     * The unique identifier of the sales channel domain.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether domain is a predefined hosting domain.
     * @deprecated This field is obsolete.
     */
    is_predefined?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether this is the primary domain. Primary domain is the default/main domain. */
    is_primary: Scalars['Boolean']['output'];
    /** Indicates whether shortlink is enabled for the domain. */
    is_shortlink: Scalars['Boolean']['output'];
    /** Domain name, e.g. 'example.com'. */
    name: Scalars['String']['output'];
    /** Indicates whether domain is verified. TXT and A records should propagate correctly. */
    verified: Scalars['Boolean']['output'];
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
    /** User's email address. */
    email: Scalars['String']['input'];
};
/** Describes the request structure to edit the phone number. */
export type EditMobileRequestSchemaInput = {
    /** Country calling code. */
    country_code: Scalars['String']['input'];
    /** User's phone number. */
    phone: Scalars['String']['input'];
};
/** Describes the request structure to edit the mobile number in profile details. */
export type EditProfileMobileSchemaInput = {
    /** Country calling code. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** User's phone number (without country code). */
    phone?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to edit profile details. */
export type EditProfileRequestSchemaInput = {
    /** Android SMS Retriever hash (optional). */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** User's consent to the privacy policy. When true, a consent record is stored with a timestamp. */
    consent?: InputMaybe<Scalars['Boolean']['input']>;
    /** Country calling code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** User's date of birth (ISO 8601 string). */
    dob?: InputMaybe<Scalars['String']['input']>;
    /** Email address of the user. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** User's first name. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** Gender of the user. Valid values: male, female, unisex. */
    gender?: InputMaybe<Scalars['String']['input']>;
    /** User's last name. */
    last_name?: InputMaybe<Scalars['String']['input']>;
    /** Phone details to update (country code and number). */
    mobile?: InputMaybe<EditProfileMobileSchemaInput>;
    /** URL of the user's profile picture. */
    profile_pic_url?: InputMaybe<Scalars['String']['input']>;
    /** Temporary registration token for the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Identifier of the request initiator. */
    sender?: InputMaybe<Scalars['String']['input']>;
};
/** Product item eligible for an offer. */
export type EligibleProductItem = {
    __typename?: 'EligibleProductItem';
    /** URL-friendly identifier for the product. Example: 'cotton-tshirt-blue' */
    product_slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the product. Example: 123456 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Pagination information for the response. */
export type EligibleProductPageInfo = {
    __typename?: 'EligibleProductPageInfo';
    /** Current page number. Example: 1 */
    current?: Maybe<Scalars['Int']['output']>;
    /** Whether next page is available. Example: true */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** Whether previous page is available. Example: false */
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    /** Number of items per page. Example: 20 */
    size?: Maybe<Scalars['Int']['output']>;
};
/** Response schema for eligible offer products list. */
export type EligibleProductsResponse = {
    __typename?: 'EligibleProductsResponse';
    /** List of eligible products. Example: [{ product_slug: 'cotton-tshirt-blue', uid: 123456 }] */
    items?: Maybe<Array<Maybe<EligibleProductItem>>>;
    /** Response message. Example: 'Products fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Pagination information. */
    page?: Maybe<EligibleProductPageInfo>;
    /** Whether the request was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
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
    /** Name of the channel of communication the user has agreed to receive messages through. Human-readable label for the email channel. Example: "Email". */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. Values: "yes" (User has opted in to receive email communications) or "no" (User has opted out of receiving email communications). Defaults to "yes" if no consent record exists. Example: "yes". */
    response?: Maybe<Scalars['String']['output']>;
    /** The email address of the user. Only present if user has provided email. Example: "user@example.com". */
    value?: Maybe<Scalars['String']['output']>;
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
/** Enabled status configuration. */
export type EnabledStatus = {
    __typename?: 'EnabledStatus';
    /** Whether the feature is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>;
};
/**
 * Defines structure for updating shipment/entity-level data.
 * - The fields to update (via `data`)
 * - The shipment selection criteria (via `filters`)
 * Example: `{ "filters": [{}], "data": { "delivery_awb_number": "RSC000000513" } }`
 */
export type EntitiesDataUpdatesInput = {
    /** Information about the data to be updated. */
    data?: InputMaybe<Scalars['JSON']['input']>;
    /** Criteria applied to filter the shipments. */
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
/**
 * Defines the reason data structure for shipment (entity) level.
 * - The reason details (via `data`)
 * - The filter conditions to identify the target shipment(s)
 *
 * Example:
 * {"filters": [{}],"data": {"reason_id": "507f1f77bcf86cd799439011","reason_text": "Out of stock"}}
 */
export type EntitiesReasonsInput = {
    /** Schema for entity reasons data. */
    data?: InputMaybe<EntityReasonDataInput>;
    /** Criteria applied to filter the shipment. */
    filters?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};
/**
 * Specifies the actual reason details at the shipment (entity) level.
 * Example:
 * { "reason_id": "507f1f77bcf86cd799439011", "reason_text": "Customer requested cancellation" }
 */
export type EntityReasonDataInput = {
    /** The unique identifier for the reason. For values please refer to the <a href='/partners/commerce/sdk/2.11.0/graphql/application/order/queries/shipment'>shipment.shipment_reasons.</a>. */
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    /** The text describing the reason. For example, 'Customer requested cancellation' or 'Out of stock'. */
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
    /** The contents of a answer of a FAQ. For example, 'Standard shipping takes 5-7 business days'. */
    answer?: Maybe<Scalars['String']['output']>;
    /**
     * Application ID - Identifier for a Sales channel.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, 'faq_123456' or '67890abcdef'. */
    id?: Maybe<Scalars['String']['output']>;
    /** The contents of a question of a FAQ. For example, 'How long does shipping take?'. */
    question?: Maybe<Scalars['String']['output']>;
    /** A short, human-readable, URL-friendly identifier. For example, 'shipping-time' or 'return-policy'. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Tags under a FAQ. For example, ['shipping', 'delivery', 'time']. */
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
/** Configuration for customer feedback on PDP. */
export type FeedbackFeature = {
    __typename?: 'FeedbackFeature';
    /** Indicates whether customer feedback is enabled on PDP. Default value is false. */
    enabled: Scalars['Boolean']['output'];
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
    /** Specifies the validation method. This will be regex for all. */
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
/** Namespace that determines storage location, validation rules, and file-specific constraints */
export declare enum FileStorageNamespace {
    /** Private namespace allowing images and PDFs up to 50Mb */
    ApplicationAudience = "application_audience",
    /** Public namespace allowing images and videos up to 1Gb */
    FeedbackMedia = "feedback_media",
    /** Public namespace allowing all file types up to 100Mb */
    Misc = "misc",
    /** Public namespace allowing images up to 15Mb */
    UserProfilePic = "user_profile_pic",
    /** Private namespace allowing images up to 40Mb */
    UsersVtoImages = "users_vto_images"
}
/** The request schema defines the additional data and instructions for processing the file. */
export type FileUploadParamsInput = {
    /** Specifies a particular directory or location within the storage structure where the file should be placed or is located. */
    subpath?: InputMaybe<Scalars['String']['input']>;
};
/** Filter options for different entity types. */
export declare enum FilterByEnum {
    Order = "order",
    Shipment = "shipment"
}
/** Schema for financial breakup. */
export type FinancialBreakup = {
    __typename?: 'FinancialBreakup';
    /** Indicates if the refund amount was added to Fynd Cash. For example, `added_to_fynd_cash` can be set to true. */
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    /** The total amount paid by the customer. Calculated as price_effective + cod_charges + delivery_charge + article_charge - coupon_effective_discount - promotion_effective_discount - referral_credits - cashback - gift_card_amount - employee_discount - loyalty_discount (must be non-negative). */
    amount_paid?: Maybe<Scalars['Float']['output']>;
    /** The rounded-off amount paid by the customer. For example, `amount_paid_roundoff` can be set to 2499.5. */
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    /** Net amount that needs to be collected: price_effective + cod_charges + delivery_charge - coupon_effective_discount - promotion_effective_discount - referral_credits - cashback - customer credit note - gift card - employee_discount - loyalty_discount - sodexo (where applicable). */
    amount_to_be_collected?: Maybe<Scalars['Float']['output']>;
    /** The amount paid to the brand after subtracting all seller-funded discounts. It represents the brand’s net receivable calculated as: BCA = price_effective - coupon_effective_discount (seller) - promotion_effective_discount (seller). */
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    /** The cashback amount earned. For example, `cashback` can be set to 99.99. */
    cashback?: Maybe<Scalars['Float']['output']>;
    /** The amount of cashback applied. For example, `cashback_applied` can be set to 99.99. */
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    /** The cash on delivery charges, if applicable. For example, `cod_charges` can be set to 99.99. */
    cod_charges?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from coupons. If `coupon_effective_discount` is provided, the accompanying coupon_json payload must not be empty. */
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The value of the coupon applied. For example, `coupon_value` can be set to 2499.5. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** The delivery charge for the order. Included in amount_paid and amount_to_be_collected calculations. */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** Discount = price_marked (MRP) - price_effective; cannot be negative. */
    discount?: Maybe<Scalars['Float']['output']>;
    /**
     * The amount of Fynd credits used. For example, `fynd_credits` can be set to 99.99.
     * @deprecated This field is obsolete.
     */
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    /** The GST fee applied to the item; used when deriving Value of Good (VOG). */
    gst_fee?: Maybe<Scalars['Float']['output']>;
    /** The GST tag indicating the type of GST applied. For example, `gst_tag` can be set to 'value'. */
    gst_tag?: Maybe<Scalars['String']['output']>;
    /** The GST tax percentage applied . For example, `gst_tax_percentage` can be set to 0.18. */
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    /** The HSN (Harmonized System of Nomenclature) code of the item. For example, `hsn_code` can be set to 'sample_code'. */
    hsn_code?: Maybe<Scalars['String']['output']>;
    /** Schema for identifiers. For example, `identifiers` can be set to a Identifiers object. */
    identifiers?: Maybe<Identifiers>;
    /** The name of the item. For example, `item_name` can be set to 'Sample Name'. */
    item_name?: Maybe<Scalars['String']['output']>;
    /** Amount reduced from the payable price when the customer applies loyalty program points while placing the order; also impacts amount_paid and amount_to_be_collected. */
    loyalty_discount?: Maybe<Scalars['Float']['output']>;
    /** The effective price after all adjustments; must not exceed price_marked/MRP. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** The original marked price (MRP) of the item; must be greater than or equal to price_effective. */
    price_marked?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from promotions (seller/marketplace) used in BCA and collection calculations. */
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The amount refunded to the customer. For example, `refund_amount` can be set to 2499.5. */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** The amount credited for refund . For example, `refund_credit` can be set to 99.99. */
    refund_credit?: Maybe<Scalars['Float']['output']>;
    /** The size of the item . For example, `size` can be set to 'value'. */
    size?: Maybe<Scalars['String']['output']>;
    /** Applied Tax Components. For example, `taxes` can be set to [a TaxComponent object]. */
    taxes?: Maybe<Array<Maybe<TaxComponent>>>;
    /** The total number of units purchased. For example, `total_units` can be set to 2. */
    total_units?: Maybe<Scalars['Int']['output']>;
    /** The transfer price of the item. For example, `transfer_price` can be set to 2499.5. */
    transfer_price?: Maybe<Scalars['Float']['output']>;
    /** Value of Good (VOG). VOG = brand_calculated_amount - GST amount (e.g., gst_fee or summed taxes). */
    value_of_good?: Maybe<Scalars['Float']['output']>;
};
/** Firebase integration settings for the sales channel. */
export type Firebase = {
    __typename?: 'Firebase';
    /** Credentials required for Firebase integration. */
    credentials: FirebaseCredentials;
    /** Indicates whether Firebase integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for Firebase integration. */
export type FirebaseCredentials = {
    __typename?: 'FirebaseCredentials';
    /** Firebase credentials for the Android platform. */
    android: AppCredentials;
    /** Firebase API key for authentication, e.g. 'AIzaSyC1234567890abcdef'. */
    api_key?: Maybe<Scalars['String']['output']>;
    /** Application ID allotted to the sales channel, e.g. 'com.example.app'. */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Google Cloud Messaging Sender ID for Firebase, e.g. '123456789012'. */
    gcm_sender_id?: Maybe<Scalars['String']['output']>;
    /** Firebase credentials for the iOS platform. */
    ios: AppCredentials;
    /** Project ID for Firebase integration, e.g. 'my-project-id'. */
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
/** User's followed products list with pagination support. */
export type FollowListing = {
    __typename?: 'FollowListing';
    /** Array of products that the user is currently following, including details like name, price, availability, and images. */
    items: Array<Maybe<FollowedProduct>>;
    /** Pagination information for navigating through the user's followed products list. */
    page: PageInfo;
};
/** Response confirming follow/unfollow action completion. */
export type FollowPostResponse = {
    __typename?: 'FollowPostResponse';
    /** Unique identifier for tracking the follow operation, e.g. 'follow_123456789'. */
    id: Scalars['String']['output'];
    /** Status message confirming the operation result, e.g. 'Successfully followed', 'Successfully unfollowed', 'Already following'. */
    message: Scalars['String']['output'];
};
/** Followed Product details including pricing, availability, and fulfillment information. */
export type FollowedProduct = {
    __typename?: 'FollowedProduct';
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<NavigationAction>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<NavigationAction>>>;
    /**
     * Represents a mapping of product categories at different levels.
     * @deprecated This field is obsolete.
     */
    category_map?: Maybe<ProductCategoryMap>;
    /**
     * Identifier for the product channel.
     * @deprecated This field is obsolete.
     */
    channel?: Maybe<Scalars['String']['output']>;
    /**
     * Color of the product, if applicable.
     * @deprecated This field is obsolete.
     */
    color?: Maybe<Scalars['String']['output']>;
    /** The country of origin for the product. */
    country_of_origin?: Maybe<Scalars['String']['output']>;
    /**
     * Custom JSON object for additional product data.
     * @deprecated This field is obsolete.
     */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the followed product for extended product tracking and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /**
     * Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing.
     * @deprecated Replaced by 'is_custom_order' in followedListing schema.
     */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /**
     * Department to which the product belongs.
     * @deprecated This field is obsolete.
     */
    department?: Maybe<ProductDepartment>;
    /** The long description of the product. */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount applied to the product, if any. */
    discount?: Maybe<Scalars['String']['output']>;
    /**
     * A dictionary of grouped product attributes.
     * @deprecated This field is obsolete.
     */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /**
     * Indicates whether the product has variants.
     * @deprecated This field is obsolete.
     */
    has_variant?: Maybe<Scalars['Boolean']['output']>;
    /** A list of highlights for the product. */
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** List of seller identifiers for the product. */
    identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * The nature of the product's images.
     * @deprecated This field is obsolete.
     */
    image_nature?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether the product can be sold as an individual product.
     * @deprecated This field is obsolete.
     */
    is_dependent?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates if the product is available for tryout.
     * @deprecated This field is obsolete.
     */
    is_tryout?: Maybe<Scalars['Boolean']['output']>;
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
    /**
     * No of boxes required to pack the product.
     * @deprecated This field is obsolete.
     */
    no_of_boxes?: Maybe<Scalars['Int']['output']>;
    /** Price details of the product. */
    price?: Maybe<ProductListingPriceDetails>;
    /**
     * List of bundle/product grouping slugs mapped to the product.
     * @deprecated This field is obsolete.
     */
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Date and time when the product was made available online. */
    product_online_date?: Maybe<Scalars['String']['output']>;
    /**
     * Meta data for promotions associated with the product.
     * @deprecated This field is obsolete.
     */
    promo_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * The rating of the product.
     * @deprecated This field is obsolete.
     */
    rating?: Maybe<Scalars['Float']['output']>;
    /**
     * The number of ratings the product has received.
     * @deprecated This field is obsolete.
     */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the product is available for sale. */
    sellable?: Maybe<Scalars['Boolean']['output']>;
    /** SEO metadata for the product. */
    seo?: Maybe<SeoDetails>;
    /** The short description of the product. */
    short_description?: Maybe<Scalars['String']['output']>;
    /**
     * List of products marked similar to given product.
     * @deprecated This field is obsolete.
     */
    similars?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Product available sizes details. */
    sizes?: Maybe<ProductSizes>;
    /** A list of image URLs for the product. */
    slug: Scalars['String']['output'];
    /** Tags associated with the product for better categorization. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Teaser tag or short promotional phrase for the product.
     * @deprecated This field is obsolete.
     */
    teaser_tag?: Maybe<Scalars['String']['output']>;
    /**
     * Identifiers or names of tryout versions of the product.
     * @deprecated This field is obsolete.
     */
    tryouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /**
     * Product type or classification.
     * @deprecated This field is obsolete.
     */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** List of product variants, each representing a specific option of the product (e.g., size, color, or material). */
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
};
/** Followed Product details including pricing, availability, and fulfillment information. */
export type FollowedProductCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Followed Product details including pricing, availability, and fulfillment information. */
export type FollowedProductSizesArgs = {
    storeId?: InputMaybe<Scalars['Int']['input']>;
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
    /** Verification code or reset-link token obtained via verifyEmailForgotOTP, verifyMobileForgotOTP, or sendResetPasswordEmail. */
    code: Scalars['String']['input'];
    /** New password for the User. */
    password: Scalars['String']['input'];
};
/** Key-value pair used inside FormPostAction or RedirectAction. */
export type FormField = {
    __typename?: 'FormField';
    /** Field name. */
    name: Scalars['String']['output'];
    /** Field value. */
    value: Scalars['String']['output'];
};
/** Post form fields to a URL to continue payment (e.g., CCAvenue, PayUMoney). */
export type FormPostAction = NextAction & {
    __typename?: 'FormPostAction';
    /** List of key-value pairs required for the form POST. */
    fields: Array<FormField>;
    /** Type of action (FORM_POST). */
    type: NextActionType;
};
/** Describes the request structure to register a new user. Email and phone requirements may vary based on platform configuration—either email or phone or both can be mandatory. */
export type FormRegisterRequestSchemaInput = {
    /** User's consent to the privacy policy. When true, a consent record is created with a timestamp. */
    consent?: InputMaybe<Scalars['Boolean']['input']>;
    /** User's email address. May be required based on platform configuration. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** User's first name. */
    first_name: Scalars['String']['input'];
    /** Gender of the user. Valid values: male, female, unisex. */
    gender?: InputMaybe<Scalars['String']['input']>;
    /** User's last name. */
    last_name?: InputMaybe<Scalars['String']['input']>;
    /** User's password. */
    password: Scalars['String']['input'];
    /** Phone details for registration. */
    phone?: InputMaybe<FormRegisterRequestSchemaPhoneInput>;
    /** Unique registration token of the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the phone details for user registration. */
export type FormRegisterRequestSchemaPhoneInput = {
    /** Country calling code. */
    country_code: Scalars['String']['input'];
    /** The user's mobile number without the country code. */
    mobile: Scalars['String']['input'];
};
/** Free gift item associated with a promotion. */
export type FreeGiftItem = {
    /** Selected free gift item ID. Example: 'SKU123' */
    item_id: Scalars['String']['input'];
    /** Size of the selected free gift item. Example: 'L' */
    item_size: Scalars['String']['input'];
    /** Promotion identifier. Example: 'PROMO1' */
    promotion_id: Scalars['String']['input'];
};
/** Details of free gift items received via promotion. */
export type FreeGiftItemDetails = {
    __typename?: 'FreeGiftItemDetails';
    /** Article price information for the free gift item. */
    article_price?: Maybe<ArticlePriceDetails>;
    /** Available sizes. Example: ['S', 'M', 'L'] */
    available_sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Item brand name. Example: 'Acme' */
    item_brand_name?: Maybe<Scalars['String']['output']>;
    /** Item ID. Example: 987654 */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** List of item image URLs. Example: ['https://cdn.example.com/img1.jpg'] */
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Item name. Example: 'Cotton T-Shirt' */
    item_name?: Maybe<Scalars['String']['output']>;
    /** Item price details. */
    item_price_details?: Maybe<ItemPriceDetails>;
    /** Item slug. Example: 'cotton-tshirt' */
    item_slug?: Maybe<Scalars['String']['output']>;
    /** Selected size. Example: 'M' */
    size?: Maybe<Scalars['String']['output']>;
};
/** Details of free gift items which are received via promotion. */
export type FreeGiftItems = {
    __typename?: 'FreeGiftItems';
    /** Pricing information for the free gift article, including both the initial marked price and the final effective price after applying the product discount. */
    article_price?: Maybe<ArticlePriceDetails>;
    /** Available sizes for the free gift item. Example: ['S', 'M', 'L'] */
    available_sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Item brand name of the free gift item promotion applied on cart. Example: 'Acme' */
    item_brand_name?: Maybe<Scalars['String']['output']>;
    /** Item id of the free gift item. Example: 987654 */
    item_id?: Maybe<Scalars['Int']['output']>;
    /** Images URLs for free gift items. Example: ['https://cdn.example.com/img1.jpg'] */
    item_images_url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Name of the free gift item received via free gift promotion. Example: 'Cotton Tote Bag' */
    item_name?: Maybe<Scalars['String']['output']>;
    /** Item price details which include effective, marked, currency. Example: { marked: { min: 299, max: 299 }, effective: { min: 0, max: 0 }, currency: 'INR' } */
    item_price_details?: Maybe<ItemPriceDetails>;
    /** Slug for an item. Example: 'cotton-tote-bag' */
    item_slug?: Maybe<Scalars['String']['output']>;
    /** Selected size for the free gift item. Example: 'M' */
    size?: Maybe<Scalars['String']['output']>;
};
/** Whether a free gift item should be added or removed from the cart. */
export declare enum FreeGiftItemsOperation {
    /** Add a free gift item to the cart. */
    Add = "add",
    /** Remove a free gift item from the cart. */
    Remove = "remove"
}
/** Freshchat integration settings for the sales channel. */
export type Freshchat = {
    __typename?: 'Freshchat';
    /** Credentials required for Freshchat integration. */
    credentials: FreshchatCredentials;
    /** Indicates whether Freshchat integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for Freshchat integration. */
export type FreshchatCredentials = {
    __typename?: 'FreshchatCredentials';
    /** The unique app_id of your Freshchat account, e.g. '12345678-1234-1234-1234-123456789012'. */
    app_id?: Maybe<Scalars['String']['output']>;
    /** The unique app_key of your Freshchat account for API access. */
    app_key?: Maybe<Scalars['String']['output']>;
    /** Web token used for accessing the Freshchat APIs. */
    web_token?: Maybe<Scalars['String']['output']>;
};
/** Schema for fulfilling company. */
export type FulfillingCompany = {
    __typename?: 'FulfillingCompany';
    /** The unique identifier for the fulfilling company. For example, `id` can be set to 1. */
    id?: Maybe<Scalars['Int']['output']>;
    /** The name of the fulfilling company. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Schema for fulfilling store. */
export type FulfillingStore = {
    __typename?: 'FulfillingStore';
    /** A code associated with the store. For example, `code` can be set to 'sample_code'. */
    code?: Maybe<Scalars['String']['output']>;
    /** The identifier of the company associated with the store. For example, `company_id` can be set to 1. */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** The name of the company associated with the store. For example, `company_name` can be set to 'Sample Name'. */
    company_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the store. For example, `id` can be set to 1. */
    id?: Maybe<Scalars['Int']['output']>;
    /** The name of the store. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Fulfillment Option Details. */
export type FulfillmentOption = {
    __typename?: 'FulfillmentOption';
    /** Indicates whether this fulfillment option is the default choice for customers. */
    is_default?: Maybe<Scalars['Boolean']['output']>;
    /** The name of the fulfillment option (e.g., 'Standard Shipping', 'Express Delivery'). */
    name?: Maybe<Scalars['String']['output']>;
    /** A unique identifier for the fulfillment option. */
    slug?: Maybe<Scalars['String']['output']>;
    /** The category or method of fulfillment (e.g., 'Pickup', 'Delivery', 'Courier'). */
    type?: Maybe<Scalars['String']['output']>;
};
/** Fulfillment options define the different ways an order can be delivered or collected, such as standard delivery, express delivery, or store pickup. */
export type FulfillmentOptionCount = {
    __typename?: 'FulfillmentOptionCount';
    /** Total count of available fulfillment options configured for a specific sales channel, e.g. 3. */
    count?: Maybe<Scalars['Int']['output']>;
};
/** Provides list of Fulfillment Options against an app */
export type FulfillmentOptionList = {
    __typename?: 'FulfillmentOptionList';
    /** Short description about the Fulfillment option */
    description?: Maybe<Scalars['String']['output']>;
    /** unique identifier for Fulfillment option */
    id?: Maybe<Scalars['String']['output']>;
    /** Indicates whether this fulfillment option should be automatically applied when no other option is explicitly selected. */
    is_default?: Maybe<Scalars['Boolean']['output']>;
    /** Name of the Fulfillment Option */
    name?: Maybe<Scalars['String']['output']>;
    /** Slug representing the fulfillment option. */
    slug?: Maybe<Scalars['String']['output']>;
    /** Type of Fulfillment option either Home Delivery or Self Pickup */
    type?: Maybe<Scalars['String']['output']>;
};
/** Fulfillment Option Store Details. Contains comprehensive information about a store associated with a fulfillment option, including address, operational details, timings, and availability status. */
export type FulfillmentOptionStore = {
    __typename?: 'FulfillmentOptionStore';
    /** Details about the store's address, including location coordinates and address components. Example: { address1: "OPEX", city: "Ayer Baloi", state: "Johor", country: "Malaysia", pincode: "82100" } */
    address?: Maybe<StoreAddress>;
    /** Average order processing time in seconds. Example: 86400 (24 hours) */
    avg_order_processing_time?: Maybe<Scalars['Int']['output']>;
    /** Identifier of the company to which the store belongs. Example: 67890 */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** Custom fields associated with the store. Can contain any JSON structure. Example: { "warehouse_capacity": 1000, "special_handling": true } */
    customfields?: Maybe<Scalars['JSON']['output']>;
    /** Distance information from the user's location to the store, including value, unit, and calculation reason. Example: { value: 5.2, unit: "km", reason: null } */
    distance?: Maybe<StoreDistance>;
    /** List of holidays for the store as date range tuples [start_date, end_date]. Each tuple contains ISO 8601 date-time strings with timezone. Example: [["2024-03-14T00:00:00+05:30", "2024-03-14T23:59:59+05:30"], ["2024-12-25T00:00:00+05:30", "2024-12-25T23:59:59+05:30"]] */
    holiday_list?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
    /** Indicates whether the store is currently open for operations. Example: true */
    is_open?: Maybe<Scalars['Boolean']['output']>;
    /** Internal name of the store. Example: "Main Warehouse - Johor" */
    name?: Maybe<Scalars['String']['output']>;
    /** Custom fields related to delivery promises. Can contain duration, unit, and value information. Example: { "duration-minute": { "type": "duration", "unit": "days", "value": 10 } } */
    promise_customfields?: Maybe<Scalars['JSON']['output']>;
    /** Store code identifier used for internal reference. Example: "STORE_001" */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Type of store (e.g., 'warehouse', 'retail', 'dark store'). Example: "warehouse" */
    store_type?: Maybe<Scalars['String']['output']>;
    /** Tags associated with the store for categorization and filtering. Example: ["express_delivery", "cold_storage"] */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Timezone of the store location in IANA timezone format. Example: "Asia/Kuala_Lumpur" */
    timezone?: Maybe<Scalars['String']['output']>;
    /** Store timing information including operational and order acceptance timings for each weekday. Example: { operational_timing: [{ weekday: "monday", open: true, opening: { hour: 9, minute: 0 }, closing: { hour: 18, minute: 0 } }] } */
    timing?: Maybe<StoreTimingDetails>;
    /** Unique identifier of the store. Example: 12345 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** List of stores for a Fulfillment option */
export type FulfillmentOptionStores = {
    __typename?: 'FulfillmentOptionStores';
    /** List of Stores against Fulfillment option. */
    items?: Maybe<Array<Maybe<FulfillmentOptionStore>>>;
    /** Pagination details for the list of stores, including current page, page size, and total items. */
    page?: Maybe<PageInfo>;
};
/** List of available Fulfillment options */
export type FulfillmentOptions = {
    __typename?: 'FulfillmentOptions';
    /** List of Fulfillment options. */
    items?: Maybe<Array<Maybe<FulfillmentOption>>>;
};
/** Fynd Rewards integration settings for the sales channel. */
export type FyndRewards = {
    __typename?: 'FyndRewards';
    /** Credentials required for Fynd Rewards integration. */
    credentials: FyndRewardsCredentials;
};
/** Credentials required for Fynd Rewards integration. */
export type FyndRewardsCredentials = {
    __typename?: 'FyndRewardsCredentials';
    /** Public key for integrating with Fynd Rewards, e.g. 'pk_1234567890abcdef'. */
    public_key?: Maybe<Scalars['String']['output']>;
};
/** GST (Goods and Services Tax) credentials and configuration for the store. */
export type GstCredentialsConfiguration = {
    __typename?: 'GSTCredentialsConfiguration';
    /** Electronic invoice generation configuration for tax compliance. */
    e_invoice?: Maybe<EnabledStatus>;
    /** Electronic waybill generation configuration for transportation. */
    e_waybill?: Maybe<EnabledStatus>;
};
/** Geolocation details. */
export type GeoLocation = {
    __typename?: 'GeoLocation';
    /** Latitude details. */
    latitude?: Maybe<Scalars['Float']['output']>;
    /** Longitude details. */
    longitude?: Maybe<Scalars['Float']['output']>;
};
/** Geolocation coordinates for an address. */
export type GeoLocationInput = {
    /** Latitude. Example: 19.076 */
    latitude?: InputMaybe<Scalars['Float']['input']>;
    /** Longitude. Example: 72.8777 */
    longitude?: InputMaybe<Scalars['Float']['input']>;
};
/** Get coupon list response schema which page information and list of coupons. */
export type GetCouponResponse = {
    __typename?: 'GetCouponResponse';
    /** List of available coupons which can be applied on cart. Example: [{ coupon_code: 'SAVE10' }] */
    available_coupon_list?: Maybe<Array<Maybe<Coupon>>>;
    /** Pagination info for coupons. Example: { current: 1, total: 3, has_next: true } */
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
    /** Specifies the type of locality to be retrieved, such as city, state, or pincode (e.g., "city", "state", "pincode"). */
    type?: Maybe<Scalars['String']['output']>;
    /** The specific value of the locality being queried, such as the name of the city or the pincode (e.g., "Mumbai", "400093"). */
    value?: Maybe<Scalars['String']['output']>;
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
/** Contains both UPI and Bank beneficiaries grouped separately. */
export type GetRefundBeneficiary = {
    __typename?: 'GetRefundBeneficiary';
    /** List of saved Bank beneficiaries linked to the user. */
    bank?: Maybe<Array<Maybe<BankBeneficiary>>>;
    /** List of saved UPI beneficiaries linked to the user. */
    upi?: Maybe<Array<Maybe<UpiBeneficiary>>>;
};
/** Request to generate a shareable cart link with optional metadata. */
export type GetShareCartLinkRequestInput = {
    /** Cart ID for generating share token. Example: '5bb521cfdc83215e1889b346' */
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Cart share link response schema which includes url and token. */
export type GetShareCartLinkResponse = {
    __typename?: 'GetShareCartLinkResponse';
    /** Short shareable final url. Example: 'https://fynd.ly/abcd1234' */
    share_url?: Maybe<Scalars['String']['output']>;
    /** Short url unique id of the cart. Example: 'abcd1234' */
    token?: Maybe<Scalars['String']['output']>;
};
/** Gift details including gift message and whether gift is applied. */
export type GiftDetailInput = {
    /** Article ID on which the gift message is set. Example: '5fdc737e3c05146138192f79' */
    article_id?: InputMaybe<Scalars['String']['input']>;
    /** Gift message shown to the recipient. Example: 'Happy Birthday!' */
    gift_message?: InputMaybe<Scalars['String']['input']>;
    /** Whether gift is applied. Example: true */
    is_gift_applied?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Google Maps integration settings for the sales channel. */
export type GoogleMap = {
    __typename?: 'GoogleMap';
    /** Credentials required for Google Maps integration. */
    credentials: GoogleMapCredentials;
    /** Indicates whether Google Maps integration is enabled or disabled. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for Google Maps integration. */
export type GoogleMapCredentials = {
    __typename?: 'GoogleMapCredentials';
    /** API key for Google Maps authentication, e.g. 'AIzaSyC1234567890abcdef'. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Google Tag Manager (GTM) integration settings for the sales channel. */
export type Gtm = {
    __typename?: 'Gtm';
    /** Credentials required for GTM integration. */
    credentials: GtmCredentials;
    /** Indicates whether GTM integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for GTM integration. */
export type GtmCredentials = {
    __typename?: 'GtmCredentials';
    /** GTM container ID for tracking, e.g. 'GTM-XXXXXXX'. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the response received upon checking if a user has set an account password. */
export type HasPassword = {
    __typename?: 'HasPassword';
    /** An integer value indicating whether the user has set a password (1 for true, 0 for false). */
    result?: Maybe<Scalars['Boolean']['output']>;
};
/** Configuration for the home page of the sales channel. */
export type HomePageFeature = {
    __typename?: 'HomePageFeature';
    /** Indicates whether order processing is enabled on the home page. */
    order_processing: Scalars['Boolean']['output'];
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
    /** The European Article Number (EAN) of the item. For example, `ean` can be set to 'value'. */
    ean?: Maybe<Scalars['String']['output']>;
    /** The Stock Keeping Unit (SKU) code of the item. For example, `sku_code` can be set to 'sample_code'. */
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
/** Contains the detailed address including PIN code, city, state, country, and type of address. */
export type InformationAddress = {
    __typename?: 'InformationAddress';
    /** Contact address lines of the sales channel, e.g. ['123 Main Street', 'Suite 456']. */
    address_line?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Name of the city, e.g. Mumbai. */
    city?: Maybe<Scalars['String']['output']>;
    /** Name of the country, e.g. India. */
    country?: Maybe<Scalars['String']['output']>;
    /**
     * Contains location type and coordinates.
     * @deprecated This field is obsolete.
     */
    loc?: Maybe<InformationLoc>;
    /** List of phone numbers with country codes. */
    phone?: Maybe<Array<Maybe<InformationPhone>>>;
    /**
     * 6-digit PIN Code of the city, e.g. 400001.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The postal code of the city, e.g. '400001'. */
    postal_code?: Maybe<Scalars['String']['output']>;
};
/** Contains location type and coordinates. */
export type InformationLoc = {
    __typename?: 'InformationLoc';
    /** An array containing the latitude and longitude values of the location, e.g. [19.0760, 72.8777]. */
    coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
    /** The type of geographic coordinate system used, e.g. 'Point' for a single point location. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Country code and mobile number for contact. */
export type InformationPhone = {
    __typename?: 'InformationPhone';
    /** Country code for contact number, e.g. '+91' (for India). */
    code?: Maybe<Scalars['String']['output']>;
    /** Mobile phone number, e.g. '9876543210'. */
    number?: Maybe<Scalars['String']['output']>;
};
/** Details on support contacts, including phone numbers, email addresses, and support hours. */
export type InformationSupport = {
    __typename?: 'InformationSupport';
    /** A list of email contact details. */
    email?: Maybe<Array<Maybe<EmailProperties>>>;
    /** A list of phone contact details, including country code and number. */
    phone?: Maybe<Array<Maybe<PhoneSupport>>>;
    /** Working hours of support team, e.g. '9 AM to 9 PM'. */
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
    /** Indicates whether international shipping is enabled or disabled. */
    enabled: Scalars['Boolean']['output'];
};
/** Schema for invoice. */
export type Invoice = {
    __typename?: 'Invoice';
    /** URL providing access to the invoice. For example, `invoice_url` can be set to 'https://example.com/resource'. */
    invoice_url?: Maybe<Scalars['String']['output']>;
    /** URL providing access to the invoice label. For example, `label_url` can be set to 'https://example.com/resource'. */
    label_url?: Maybe<Scalars['String']['output']>;
    /** The date and time when the invoice was last updated. For example, `updated_date` can be set to '2024-11-01T10:00:00Z'. */
    updated_date?: Maybe<Scalars['String']['output']>;
};
/** Schema for brand within item. */
export type ItemBrand = {
    __typename?: 'ItemBrand';
    /** The URL of the brand's logo. For example, `logo` can be set to 'value'. */
    logo?: Maybe<Scalars['String']['output']>;
    /** The name of the brand. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Details of article price added in cart. */
export type ItemPriceDetails = {
    __typename?: 'ItemPriceDetails';
    /** Currency code of the article. Example: 'INR' */
    currency?: Maybe<Scalars['String']['output']>;
    /** Effective price of the article. Example: { min: 499.0, max: 599.0 } */
    effective?: Maybe<PriceMinMax>;
    /** Marked price of the article. Example: { min: 699.0, max: 799.0 } */
    marked?: Maybe<PriceMinMax>;
};
/** Types of items available. */
export declare enum ItemTypeEnum {
    Composite = "composite",
    Digital = "digital",
    PhysicalBundle = "physical_bundle",
    Set = "set",
    Standard = "standard",
    VirtualBundle = "virtual_bundle"
}
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Ladder offer item  details which includes price, margin, max quantity, min quantity and type. */
export type LadderOfferItem = {
    __typename?: 'LadderOfferItem';
    /** Percentage value of discount. Example: 10 */
    margin?: Maybe<Scalars['Int']['output']>;
    /** Maximum quantity up to which offer is applicable (optional). Example: 5 */
    max_quantity?: Maybe<Scalars['Int']['output']>;
    /** Minimum quantity from which offer is applicable. Example: 2 */
    min_quantity?: Maybe<Scalars['Int']['output']>;
    /** Ladder price details which includes currency symbol, offer price, currency code, effective and marked price. Example: { currency_code: 'INR', currency_symbol: '₹', offer_price: 499.0, effective: 549, marked: 799 } */
    price?: Maybe<LadderPrice>;
    /** Offer type of the ladder promotion. Example: 'percentage' */
    type?: Maybe<Scalars['String']['output']>;
};
/** Ladder price details which includes currency symbol, offer price, currency code, effective and marked price. */
export type LadderPrice = {
    __typename?: 'LadderPrice';
    /** Currency code for all amounts. Example: 'INR' */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Per unit effective price after deductions. Example: 499 */
    effective?: Maybe<Scalars['Int']['output']>;
    /** Original price of product. Example: 799 */
    marked?: Maybe<Scalars['Int']['output']>;
    /** Discounted per unit price for current offer. Example: 499.0 */
    offer_price?: Maybe<Scalars['Float']['output']>;
};
/** Ladder price offer details which included promotion id, buy rules, calculate on, offer text, discount rules, promotion group, free gift items and description of promotion data. */
export type LadderPriceOffer = {
    __typename?: 'LadderPriceOffer';
    /** Buy rules of ladder price promotion. Example: { item_criteria: { brands: [123] } } */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Whether this offer is calculated on MRP or ESP. Example: 'MRP' */
    calculate_on?: Maybe<Scalars['String']['output']>;
    /** Offer details including T&C. Example: 'Buy 2 get 10% off' */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of ladder price promotion. Example: [{ offer: { percentage: 10 } }] */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** List of free gift items. Example: [{ item_id: 987654, size: 'M' }] */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** ID of the promotion. Example: 'PROMO_L1' */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer prices for ladder price promotion. Example: [{ margin: 10, min_quantity: 2 }] */
    offer_prices?: Maybe<Array<Maybe<LadderOfferItem>>>;
    /** Offer title. Example: 'Buy More Save More' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Promotion group. Example: 'quantity' */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Name of ladder price promotion. Example: 'Bulk Saver' */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** ISO datetime for promotion end date. Example: '2025-12-31T23:59:59Z' */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Ladder price offer details which included promotion id, buy rules, calculate on, offer text, discount rules, promotion group, free gift items and description of promotion data. */
export type LadderPriceOfferDetails = {
    __typename?: 'LadderPriceOfferDetails';
    /** Buy rules of ladder price promotion applicable on product. Example: { cart_conditions: { cart_total: { min: 999 } } } */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the ladder price offer for promotional configuration and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Offer details including T&C. Example: 'Buy 2 get 10% off' */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of ladder price promotion. Example: [{ offer: { percentage: 10 } }] */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Details of free gift items list. Example: [{ item_id: 987654, size: 'M' }] */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** ID of the promotion. Example: 'PROMO_L1' */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title of ladder price promotion. Example: 'Buy More Save More' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Group of ladder price promotion. Example: 'quantity' */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Name of ladder price promotion. Example: 'Bulk Saver' */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type available on product. Example: 'percentage' */
    promotion_type?: Maybe<Scalars['String']['output']>;
    /** Datetime ISO String for promotion end date. Example: '2025-12-31T23:59:59Z' */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Ladder price offer details which included promotion id, buy rules, calculate on, offer text, discount rules, promotion group, free gift items and description of promotion data. */
export type LadderPriceOfferDetailsCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Ladder price offers details which includes list of available ladder promotion on product. */
export type LadderPriceOffers = {
    __typename?: 'LadderPriceOffers';
    /** Available ladder promotion offers list. Example: [{ id: 'PROMO_L1' }] */
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    /** Currency info (code, symbol). Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CurrencyInfo>;
};
/** Details contains data related to landing page. */
export type LandingPage = {
    __typename?: 'LandingPage';
    /** An object representing the parameters, query, URL, and type for an action related to a page. */
    action?: Maybe<ContentAction>;
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Whether landing page is archived or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Details regarding the creator of entity.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<CreatedBy>;
    /**
     * Custom JSON object for housing additional information that may be used for custom use cases.
     * @deprecated This field is obsolete.
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /**
     * Data related to creation and updation timestamps.
     * @deprecated This field is obsolete.
     */
    date_meta?: Maybe<DateMeta>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** List of platforms linked to this landing page. For example, ['web', 'ios', 'android']. */
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A short, human-readable, URL-friendly identifier. For example, 'home' or 'landing-page-ios'. */
    slug?: Maybe<Scalars['String']['output']>;
};
/** Configuration for the landing page of the sales channel. */
export type LandingPageFeature = {
    __typename?: 'LandingPageFeature';
    /** Indicates whether a guest can checkout from cart without logging in. */
    continue_as_guest: Scalars['Boolean']['output'];
    /**
     * Configuration details of the page shown after successful login.
     * @deprecated This field is obsolete.
     */
    launch_page?: Maybe<LaunchPage>;
    /** Text displayed on the login button, e.g. 'Login', 'Sign In', etc. */
    login_btn_text?: Maybe<Scalars['String']['output']>;
    /**
     * Indicates whether a textbox for entering domain is available.
     * @deprecated This field is obsolete.
     */
    show_domain_textbox?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether register button is available on the login/landing page. */
    show_register_btn: Scalars['Boolean']['output'];
};
/** Details of the name of an entry in a specific language. */
export type Language = {
    __typename?: 'Language';
    /** Name of an entry in a specific language. For example, 'Home' in English or 'الصفحة الرئيسية' in Arabic. */
    display?: Maybe<Scalars['String']['output']>;
};
/** Contains all application languages data for a translations */
export type Languages = {
    __typename?: 'Languages';
    /** Unique id. For example, 'lang_123456' or '67890abcdef'. */
    _id?: Maybe<Scalars['String']['output']>;
    /**
     * Application id
     * @deprecated This field is obsolete.
     */
    application_id?: Maybe<Scalars['String']['output']>;
    /**
     * Company id
     * @deprecated This field is obsolete.
     */
    company_id?: Maybe<Scalars['String']['output']>;
    /**
     * Created by user id
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<Scalars['String']['output']>;
    /**
     * Created at time. For example, '2024-01-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Direction for perticular locale. For example, 'ltr' (left-to-right) or 'rtl' (right-to-left). */
    direction?: Maybe<Scalars['String']['output']>;
    /** Name of language visible on storefront. For example, 'English (US)' or 'हिंदी'. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Default or not. For example, true or false. */
    is_default?: Maybe<Scalars['Boolean']['output']>;
    /** Local code for language. For example, 'en_US', 'hi_IN', or 'ar_SA'. */
    locale?: Maybe<Scalars['String']['output']>;
    /**
     * Updated by user id
     * @deprecated This field is obsolete.
     */
    modified_by?: Maybe<Scalars['String']['output']>;
    /**
     * Updated at time. For example, '2024-01-20T14:45:00Z'.
     * @deprecated This field is obsolete.
     */
    modified_on?: Maybe<Scalars['String']['output']>;
    /** Name of language. For example, 'English' or 'Hindi'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Published or not. For example, true or false. */
    published?: Maybe<Scalars['Boolean']['output']>;
};
/** Represents the geographic coordinates of a location, typically used to specify the latitude and longitude of a store or point of interest. */
export type LatLong = {
    __typename?: 'LatLong';
    /** An array containing the latitude and longitude values of the location. */
    coordinates: Array<Maybe<Scalars['Float']['output']>>;
    /** The type of geographic coordinate system used. For example, "Point" indicates a single point in a geographic coordinate system. */
    type: Scalars['String']['output'];
};
/** Configuration details of the page shown after successful login. */
export type LaunchPage = {
    __typename?: 'LaunchPage';
    /** Type of the launch page, e.g. 'home', 'page', 'collection'. */
    page_type: Scalars['String']['output'];
    /** Launch page parameters. Can be null. */
    params?: Maybe<Scalars['JSON']['output']>;
    /** Query parameters related to launch page. Can be null. */
    query?: Maybe<Scalars['JSON']['output']>;
};
/** Object containing all legal related contents. */
export type LegalInformation = {
    __typename?: 'LegalInformation';
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp which represent the time when data was created. For example, '2024-01-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** FAQs of an application. */
    faq?: Maybe<Array<Maybe<ApplicationLegalFaq>>>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Content for Privacy Policy page on storefront. For example, HTML content or plain text. */
    policy?: Maybe<Scalars['String']['output']>;
    /** Content for Return policy page on storefront. For example, HTML content or plain text. */
    returns?: Maybe<Scalars['String']['output']>;
    /** Content for Shipping Policy page on storefront. For example, HTML content or plain text. */
    shipping?: Maybe<Scalars['String']['output']>;
    /** Content for Terms and Conditions page on storefront. For example, HTML content or plain text. */
    tnc?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp which represent when was the last time when data was updated. For example, '2024-01-20T14:45:00Z'.
     * @deprecated This field is obsolete.
     */
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
    /** Hosted URL of icon image representing the link, e.g. 'https://cdn.example.com/icons/facebook.png'. */
    icon?: Maybe<Scalars['String']['output']>;
    /** Web URL for redirecting to a related page, e.g. 'https://facebook.com/company'. */
    link?: Maybe<Scalars['String']['output']>;
    /** Title of the link, e.g. 'Follow us on Facebook'. */
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
    /** Web URL for redirecting to a related page, e.g. 'https://example.com/about'. */
    link?: Maybe<Scalars['String']['output']>;
    /** Name of the related page or link, e.g. 'About Us'. */
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
/**
 * Configuration for sorting product listings on the listing page.
 * This object has been deprecated and will be removed in future versions.
 */
export type ListingPageFeature = {
    __typename?: 'ListingPageFeature';
    /** Determines the sorting criteria for product listings on the page, e.g. 'price', 'popularity', 'newest'. */
    sort_on: Scalars['String']['output'];
};
/** Configuration for displaying prices on product listing pages. */
export type ListingPriceFeature = {
    __typename?: 'ListingPriceFeature';
    /** Price sorting criteria with min or max value, e.g. 'min' or 'max'. Default value is 'min'. */
    sort: PriceSort;
    /** Price display mode on PLP for products with multiple sizes. Valid values: 'min', 'max', 'range'. Default is 'range'. */
    value: PriceDisplayMode;
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
    /** Specifies the code for the locality. */
    code?: Maybe<Scalars['String']['output']>;
    /**
     * Custom meta to store custom json against hierarchy.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    custom_meta?: Maybe<Scalars['JSON']['output']>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** A unique identifier for the locality. */
    id?: Maybe<Scalars['String']['output']>;
    /** Geographical latitude and longitude data. */
    lat_long?: Maybe<PincodeLatLongData>;
    /** Representing the localities that are associated with or contained within the current locality.It provides detailed information about the parent localities, including their names, identifiers, and hierarchical relationships. */
    localities?: Maybe<Array<Maybe<LocalityParent>>>;
    /**
     * Specifies the meta information for the current locality.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The actual geographical data, such as country names (India), state names (Maharashtra), pin codes (400603), city names (Dubai), or local sectors (Deira). */
    name?: Maybe<Scalars['String']['output']>;
    /** Identifiers for the parent of the current locality. eg [city_id  state_id country_id ] for india */
    parent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Unique Identifiers for the parent of the current locality. */
    parent_uid?: Maybe<Scalars['String']['output']>;
    /**
     * Serviceability details for the country.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    serviceability?: Maybe<ServiceabilityModel>;
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
/** Enumeration of locality types. */
export declare enum LocalityEnum {
    City = "city",
    Pincode = "pincode",
    Sector = "sector",
    State = "state"
}
/** Describes a parent locality within the geographical hierarchy. */
export type LocalityParent = {
    __typename?: 'LocalityParent';
    /** Code assigned to a locality, which is unique to its immediate parent. */
    code?: Maybe<Scalars['String']['output']>;
    /**
     * Custom meta to store custom json against hierarchy.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    custom_meta?: Maybe<Scalars['JSON']['output']>;
    /** User-friendly version of the geographical data, which may be more descriptive or formatted differently. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** A unique identifier for the locality. */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Contains meta information related to the locality.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The actual geographical data, such as country names (India), state names (Maharashtra), pin codes (400603), city names (Dubai), or local sectors (Deira). */
    name?: Maybe<Scalars['String']['output']>;
    /** Identifiers for the parent of the current locality. */
    parent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Unique identifier for the immediate parent of the locality. */
    parent_uid?: Maybe<Scalars['String']['output']>;
    /**
     * Serviceability details for the country.
     * @deprecated Operational/coverage data; not for storefronts
     */
    serviceability?: Maybe<ServiceabilityModel>;
    /** Specifies the category of the address component, such as pincode, state, city, country, or sector. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Types of localities for location classification. */
export declare enum LocalityType {
    City = "city",
    Pincode = "pincode",
    Sector = "sector",
    State = "state"
}
/** Types of locations in the system. */
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
    /** A token used for registration purposes will be sent when user is not registered. */
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
    /** Engage points amount applied on the cart. Example: 4034.0 */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Whether the loyalty points are applicable for the cart. Example: 1 */
    applicable?: Maybe<Scalars['Float']['output']>;
    /** Description for loyalty points. Example: 'Points can be redeemed at checkout' */
    description?: Maybe<Scalars['String']['output']>;
    /** Engage points that can be earned on the cart. Example: 56 */
    earn_points?: Maybe<Scalars['Float']['output']>;
    /** Engage points amount that can be earned on the cart. Example: 56.0 */
    earn_points_amount?: Maybe<Scalars['Float']['output']>;
    /** Title to show how many earn points are gained for this order. Example: 'You’ll earn 56 points' */
    earn_title?: Maybe<Scalars['String']['output']>;
    /** Whether loyalty points are applied on the cart. Example: true */
    is_applied?: Maybe<Scalars['Boolean']['output']>;
    /** Message for the applied loyalty points. Example: 'You’ll redeem 4034 points' */
    message?: Maybe<Scalars['String']['output']>;
    /** Engage amount applied on the cart as payment mode. Example: 200.0 */
    mop_amount?: Maybe<Scalars['Float']['output']>;
    /** Engage points applicable on the cart. Example: 4034 */
    points?: Maybe<Scalars['Float']['output']>;
    /** Unique title for reward program applicable. Example: 'Fynd Rewards' */
    title?: Maybe<Scalars['String']['output']>;
    /** Total loyalty points available with user. Example: 1200 */
    total?: Maybe<Scalars['Float']['output']>;
    /** Total engage points available for the user. Example: 560 */
    total_points?: Maybe<Scalars['Float']['output']>;
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
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
    /** Identifier for the card assigned to the transaction. */
    assign_card_id?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier for the shopping cart. */
    cart_id: Scalars['String']['input'];
    /** Mode of checkout process (e.g., guest, registered user, self). */
    checkout_mode: Scalars['String']['input'];
    /** Postal code of the address. */
    pincode?: InputMaybe<Scalars['String']['input']>;
};
/** Details of the user who last modified the entity. */
export type ModifiedBy = {
    __typename?: 'ModifiedBy';
    /** Unique identifier for the user who modified the entity. */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** MoEngage integration settings for the sales channel. */
export type Moengage = {
    __typename?: 'Moengage';
    /** Credentials required for MoEngage integration. */
    credentials: MoengageCredentials;
    /** Indicates whether MoEngage integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for MoEngage integration. */
export type MoengageCredentials = {
    __typename?: 'MoengageCredentials';
    /** App ID provided by MoEngage to identify a specific app, e.g. 'ABCDEF1234567890'. */
    app_id?: Maybe<Scalars['String']['output']>;
};
/** Mutation operations for user management and profile updates. */
export type Mutation = {
    __typename?: 'Mutation';
    /** Add a new address to their cart to save details such as name, email, contact information, and address. */
    addAddress?: Maybe<SaveAddressResponse>;
    /**
     * Add a new refund beneficiary (Bank Account or UPI) for a given shipment.
     * This mutation securely stores beneficiary details for refund processing.
     */
    addBeneficiary?: Maybe<AddBeneficiaryResponseDetails>;
    /**
     * Add beneficiary details specifically for refund transactions, including account holder name, account number and bank details.
     * @deprecated Use addBeneficiary instead. This will be removed in future versions.
     */
    addBeneficiaryDetails?: Maybe<RefundAccountResponse>;
    /** Add a new email address to the user's profile. This API requires email verification via OTP before the email is added to the profile. */
    addEmail?: Maybe<VerifyEmailOtpSuccess>;
    /** Add to cart request schema which has items data to be added in cart. */
    addItemsToCart?: Maybe<AddCartDetailResponse>;
    /** Add a new mobile number to the user's profile. This API requires mobile number verification via OTP before the number is added to the profile. */
    addMobileNumber?: Maybe<VerifyMobileOtpSuccess>;
    /**
     * Add a new refund beneficiary (Bank Account or UPI) for a specific shipment.
     * This mutation securely saves the beneficiary's bank or UPI details so refunds can be processed to their account.
     * This is a secure, OTP-protected version of addBeneficiary, and requires successful OTP verification for enhanced protection.
     * You must call this mutation only after verifying the OTP using verifyOtpForRefundBankDetails.
     * @deprecated Use addRefundBeneficiaryUsingOTPSession instead. This will be removed in future versions.
     */
    addRefundBankAccountUsingOTP?: Maybe<RefundAccountResponse>;
    /**
     * Add a new refund beneficiary (Bank Account or UPI) for a specific shipment.
     * This mutation securely saves the beneficiary's bank or UPI details so refunds can be processed to their account.
     * This is a secure, OTP-protected version of addBeneficiary. You must call this mutation only after verifying the OTP using verifyOtpForRefundBankDetails mutation.
     */
    addRefundBeneficiaryUsingOTPSession?: Maybe<AddBeneficiaryResponseDetails>;
    /** Apply a coupon code to the cart to trigger discounts on eligible items. */
    applyCoupon?: Maybe<CouponUpdateResponse>;
    /** Apply loyalty points to the cart. Users can redeem their accumulated loyalty points and apply them to the items in their cart, thereby availing discounts on their current purchases. */
    applyLoyaltyPoints?: Maybe<ApplyLoyaltyPointsResponse>;
    /**
     * Link payment card to a user account for seamless transactions. Upon successful linking, the card becomes associated with the user's profile, enabling secure and convenient payments.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    attachCardToCustomer?: Maybe<AttachCardsResponse>;
    /** Cancel previously generated payment link. */
    cancelPaymentLink?: Maybe<CancelPaymentLinkResponse>;
    /** Polling process to confirm the payment status. It periodically checks and updates the current status of a payment, ensuring timely and accurate confirmation of payment transactions. */
    checkAndUpdatePaymentStatus?: Maybe<PaymentStatusUpdateResponse>;
    /**
     * Verify and update status of a payment made through a link.Upon successful verification and update, the response includes details about the aggregator name, payment status, and whether retrying the process is required.
     * @deprecated This is deprecated use checkAndUpdatePaymentStatus instead. This will be removed in a future release.
     */
    checkAndUpdatePaymentStatusPaymentLink?: Maybe<PaymentStatusUpdateResponse>;
    /** Enhanced version of checkout process that supports multiple mode of payment(MOP). */
    checkoutCart?: Maybe<CartCheckoutResponse>;
    /** Complete a file upload and get the final uploaded file details. */
    completeUpload?: Maybe<CompleteUploadData>;
    /**
     * Initiates the creation of an order handler for processing payments via a payment link.
     * @deprecated Use createPaymentLinkOrder instead. This will be removed in future versions.
     */
    createOrderHandlerPaymentLink?: Maybe<CreateOrderUserResponse>;
    /** Create new payment link for transactions. */
    createPaymentLink?: Maybe<CreatePaymentLinkResponse>;
    /** Initiates the creation of an order handler for processing payments via a payment link. */
    createPaymentLinkOrder?: Maybe<CreateOrderUserResponse>;
    /** Create an order and payment on the aggregator side. */
    createPaymentOrder?: Maybe<PaymentOrderDetails>;
    /** Creates a shortened version of a given URL for easier sharing. */
    createShortLink?: Maybe<ShortLinkDetail>;
    /** Create a new customer ticket for a user query. */
    createTicket?: Maybe<SupportTicket>;
    /**
     * Initiate the onboarding process for payment services, providing personal, business, and device information, along with marketplace details, to enable customer registration and credit availability.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    customerOnboard?: Maybe<CustomerOnboardingResponse>;
    /** Delete an existing refund beneficiary from the user’s account using the beneficiary ID. */
    deleteBeneficiary?: Maybe<ResponseMessage>;
    /** Delete all items from the user's cart and resets it to its initial state, providing a clean slate for new selections. */
    deleteCart?: Maybe<DeleteCartDetailResponse>;
    /** Delete email from profile. */
    deleteEmail?: Maybe<LoginSuccess>;
    /** Delete mobile number from profile. */
    deleteMobileNumber?: Maybe<LoginSuccess>;
    /** Verify OTP sent to mobile/email and permanently delete the user's account. This API requires OTP verification for security before account deletion. */
    deleteUser?: Maybe<DeleteUserSuccess>;
    /**
     * Delete payment card from the user's account.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    deleteUserCard?: Maybe<DeleteCardsResponse>;
    /**
     * Delink the wallet.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    delinkWallet?: Maybe<WalletResponse>;
    /**
     * Enable/Disable a particular refund transfer mode based on the request body parameters, indicating whether the mode should be enabled or disabled.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    enableOrDisableRefundTransferMode?: Maybe<UpdateRefundTransferModeResponse>;
    /** Add a product, brand, or collection to the user's personal follow list for tracking and notifications. */
    followById?: Maybe<FollowPostResponse>;
    /** Complete the password reset and log the user in using a valid verification code or reset-link token obtained via verifyEmailForgotOTP, verifyMobileForgotOTP, or sendResetPasswordEmail. */
    forgotPassword?: Maybe<LoginSuccess>;
    /**
     * Generates a QR code for the application for easy sharing.
     * @deprecated This is deprecated. Use getUrlQRCode instead. This will be removed in a future release.
     */
    getApplicationQRCode?: Maybe<QrCodeResp>;
    /** Generate a unique shareable link for the customer's cart for a specific sales channel. This link enables easy sharing of the cart contents with other users, facilitating collaborative shopping experiences. */
    getCartShareLink?: Maybe<GetShareCartLinkResponse>;
    /**
     * Generates a QR code for a specific product collection using its slug.
     * @deprecated This is deprecated. Use getUrlQRCode instead. This will be removed in a future release.
     */
    getCollectionQRCodeBySlug?: Maybe<QrCodeResp>;
    /**
     * Creates a QR code for a specific product identified by its slug.
     * @deprecated This is deprecated. Use getUrlQRCode instead. This will be removed in a future release.
     */
    getProductQRCodeBySlug?: Maybe<QrCodeResp>;
    /**
     * Retrieve the list of refund beneficiaries (Bank or UPI) associated
     * with a given order and shipment. This query requires an active OTP session for security.
     * Optional filtering can be applied using `filterBy` to restrict results
     * to beneficiaries directly linked to either the order or the shipment.
     */
    getRefundBeneficiariesUsingOTPSession?: Maybe<GetRefundBeneficiary>;
    /** Converts a given URL into a scannable QR code. */
    getUrlQRCode?: Maybe<QrCodeResp>;
    /** Initiate the payment procedure for an order. Upon successful initiation, it returns a  details including the success status, aggregator information, payment method, status, merchant order ID aggregator order, polling URL, timeout, virtual ID, Razorpay payment ID, customer ID, and device ID. */
    initialisePayment?: Maybe<PaymentInitializationResponse>;
    /** Begin payment process for an order by initializing it through a payment link.Upon successful initialization, the response includes details about the payment status, aggregator details, order IDs, polling URL for status updates, and other relevant information. */
    initialisePaymentPaymentLink?: Maybe<PaymentInitializationResponse>;
    /**
     * Verify the linking of wallet using OTP for further processing of payment.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    linkWallet?: Maybe<WalletResponse>;
    /** Enable iOS users to log in to the system using their Apple ID. */
    loginWithAppleIOS?: Maybe<AuthSuccess>;
    /** Allow login using an email address and password combination. Users must provide valid credentials to authenticate and access their account. */
    loginWithEmailAndPassword?: Maybe<LoginSuccess>;
    /** Enable users to log in to the system using their Facebook accounts. */
    loginWithFacebook?: Maybe<AuthSuccess>;
    /** Enable website users to log in to the system using their Google accounts. */
    loginWithGoogle?: Maybe<AuthSuccess>;
    /** Enable Android users to log in to the system using their Facebook accounts. */
    loginWithGoogleAndroid?: Maybe<AuthSuccess>;
    /** Enable iOS users to log in to the system using their Google accounts. */
    loginWithGoogleIOS?: Maybe<AuthSuccess>;
    /** Allow users to log in using a one-time password (OTP) sent to their mobile number via SMS. This API initiates the OTP login process by sending an OTP to the provided mobile number. */
    loginWithOTP?: Maybe<SendOtpResponse>;
    /**
     * Login user using a pre-issued authentication token. This API allows users to authenticate using a valid token without providing username/password.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    loginWithToken?: Maybe<LoginSuccess>;
    /** Enable new users to register using a registration form. This API creates a new user account with the provided details and may require email/mobile verification based on platform configuration. */
    registerWithForm?: Maybe<RegisterFormSuccess>;
    /** Delete an existing customer address from the system. */
    removeAddress?: Maybe<DeleteAddressResponse>;
    /** Remove an applied coupon from the customer's cart, thereby removing the associated discount from the cart total. */
    removeCoupon?: Maybe<CouponUpdateResponse>;
    /**
     * Renders HTML content for a payment aggregator page.
     * StoreOS-specific API for integrating the Fynd Mode of Payment (MOP) page.
     * Call after createOrderHandlerPaymentLink, using the returned base64_html as input.
     * This mutation decodes and returns the actual HTML string required to display and redirect to the payment aggregator interface.
     */
    renderHTML?: Maybe<RenderHtmlResponse>;
    /** Resend or cancel payment link that have been initiated but may require modification or cancellation for various reasons, ensuring flexibility and control in payment processing. */
    resendOrCancelPayment?: Maybe<ResendOrCancelPaymentResponse>;
    /** Resend an existing payment link to the user to complete the payment. */
    resendPaymentLink?: Maybe<ResendPaymentLinkResponse>;
    /** Complete the password reset and log the user in using a valid verification code or reset-link token obtained via verifyEmailForgotOTP, verifyMobileForgotOTP, or sendResetPasswordEmail. */
    resetForgotPassword?: Maybe<ResetForgotPasswordSuccess>;
    /** Select an address from the saved customer addresses and validates the availability of items in the cart. Additionally, it verifies and updates the delivery promise based on the selected address. */
    selectAddress?: Maybe<SelectAddressResponse>;
    /** Select a preferred payment mode from available options during the cart checkout process to securely and efficiently complete their transaction. */
    selectPaymentMode?: Maybe<SelectPaymentModeResponse>;
    /** Send a one-time password to the user's email for verification when resetting a forgotten password. */
    sendForgotOTPOnEmail?: Maybe<EmailOtpSuccess>;
    /** Send a one-time password to the user's mobile for verification when resetting a forgotten password. */
    sendForgotOTPOnMobile?: Maybe<OtpSuccess>;
    /** Send a one-time password (OTP) to the user's email address for verification purposes. The OTP can be used for login, registration, or profile updates. */
    sendOTPOnEmail?: Maybe<EmailOtpSuccess>;
    /** Send a one-time password (OTP) to the user's mobile number via SMS for verification purposes. The OTP can be used for login, registration, or profile updates. */
    sendOTPOnMobile?: Maybe<OtpSuccess>;
    /** Send OTP to the customer for shipment verification. Used for refund bank details verification. */
    sendOtpForRefundBankDetails?: Maybe<SendOtpToCustomerResponse>;
    /** Send a password reset link to the user's email. */
    sendResetPasswordEmail?: Maybe<ResetPasswordSuccess>;
    /**
     * Send a password reset link to the user's mobile.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    sendResetPasswordMobile?: Maybe<ResetPasswordSuccess>;
    /** Validate password reset link code. */
    sendResetToken?: Maybe<ResetPasswordSuccess>;
    /** Sends an OTP to the customer associated with the given shipment ID. Supports different event types like refund_bank_details or customer_ndr. */
    sendShipmentOtpToCustomer?: Maybe<SendOtpToCustomerResponse>;
    /** Send a verification link to a newly added email address. */
    sendVerificationLinkToEmail?: Maybe<SendEmailVerifyLinkSuccess>;
    /** Send a verification link to a newly added mobile number. */
    sendVerificationLinkToMobile?: Maybe<SendMobileVerifyLinkSuccess>;
    /** Set an email address as the primary contact for the user. */
    setEmailAsPrimary?: Maybe<LoginSuccess>;
    /** Set a mobile number as the primary contact for the user. */
    setMobileNumberAsPrimary?: Maybe<LoginSuccess>;
    /** Generate signed URLs for accessing private files with an expiry time. */
    signUrls?: Maybe<SignUrlResult>;
    /** Initiate a new file upload and retrieve upload URL */
    startUpload?: Maybe<StartUploadData>;
    /** Capture response submitted by the user for a custom form (e.g., feedback form) created by the sales channel owner. */
    submitCustomForm?: Maybe<SubmitCustomFormResponse>;
    /** Submits a delivery reattempt request for a specific shipment. Used when delivery fails and customer wants to reschedule. */
    submitDeliveryReattemptRequest?: Maybe<DeliveryReattemptRequestResponse>;
    /** Remove a product, brand, or collection from the user's follow list to stop tracking. */
    unfollowById?: Maybe<FollowPostResponse>;
    /** Customer can modify the details of a previously saved address. */
    updateAddress?: Maybe<UpdateAddressResponse>;
    /** Update cart. Customers can modify added product attributes such as quantity and size, as well as remove items from the cart. */
    updateCart?: Maybe<UpdateCartDetailResponse>;
    /**
     * Update cart. Customers can adjust the cart breakup by applying or removing store credits as needed.
     * @deprecated This mutation is obsolete
     */
    updateCartBreakup?: Maybe<Cart>;
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
    /** Allow users to modify and update their profile details including personal information, contact details, and preferences. This API supports partial updates of user profile data. */
    updateProfile?: Maybe<ProfileEditSuccess>;
    /** Update current status of a specific shipment using its shipment ID. Supports both partial and full transition as per the configured settings. For example, update shipment status from 'bag_confirmed' to 'bag_packed'. */
    updateShipmentStatus?: Maybe<ShipmentApplicationStatusResponse>;
    /** Update user attributes. */
    updateUserAttributes?: Maybe<UserAttributes>;
    /** Validate addresses using specific templates customized for each country and tailored to various business scenarios. This validation ensures that the data conforms to the information currently stored in the system. */
    validateAddress?: Maybe<ValidateAddressResponse>;
    /** Validate customer eligibility and show credit summary. */
    validateCustomerAndCreditSummary?: Maybe<CreditAndCustomerValidation>;
    /** Validate if a Virtual Payment Address (VPA) is valid for processing payments and returns the validation result.is_valid boolean value indicating whether the VPA is valid for payments. */
    validateVPA?: Maybe<ValidateVpaResponse>;
    /**
     * Verify the payment status and charge from the customer's BNPL (Buy Now, Pay Later) account after order confirmation.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    verifyAndChargePayment?: Maybe<ChargeCustomerResponse>;
    /**
     * Verify if the user is eligible for pay-later payment from the payment aggregator side using the customer's phone number.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    verifyCustomerForPayment?: Maybe<ValidateCustomerResponse>;
    /** Verify user email with a code sent within a link sent to their email. */
    verifyEmail?: Maybe<VerifyEmailSuccess>;
    /** Verify one-time password sent to user's email for resetting a forgotten password. */
    verifyEmailForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    /** Verify the one-time password (OTP) sent to the user's email address. This API validates the OTP and completes the email verification process. */
    verifyEmailOTP?: Maybe<VerifyOtpSuccess>;
    /** Verify user mobile with a code sent within a link sent to their mobile. */
    verifyMobile?: Maybe<VerifyEmailSuccess>;
    /** Verify one-time password sent to user's mobile for resetting a forgotten password. */
    verifyMobileForgotOTP?: Maybe<VerifyForgotOtpSuccess>;
    /** Verify the one-time password (OTP) sent to the user's mobile number via SMS. This API validates the OTP and completes the verification process. */
    verifyMobileOTP?: Maybe<VerifyOtpSuccess>;
    /**
     * Verify the OTP provided by the user and adds a bank beneficiary for refund processing.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    verifyOtpAndAddBeneficiaryForBank?: Maybe<AddBeneficiaryViaOtpVerificationResponse>;
    /**
     * Verify OTP provided by the user and adds a wallet beneficiary.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    verifyOtpAndAddBeneficiaryForWallet?: Maybe<WalletOtpResponse>;
    /** Verify OTP sent by customer. Used to verify OTP for refund bank details. */
    verifyOtpForRefundBankDetails?: Maybe<VerifyOtpResponse>;
    /**
     * Verifies the OTP submitted by the customer for a specific shipment.
     * Supported values include:
     * - `refund_bank_details`: OTP is sent to verify the customer's bank details before processing a refund.
     * - `customer_ndr`: OTP is sent to confirm redelivery instructions or preferences after a failed delivery attempt.
     */
    verifyShipmentOtpFromCustomer?: Maybe<VerifyOtpResponse>;
    /**
     * Link wallet for the aggregator for processing of payment.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    walletLinkInitiate?: Maybe<WalletResponse>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddAddressArgs = {
    address2Input?: InputMaybe<Address2Input>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddBeneficiaryArgs = {
    addBeneficiaryInput?: InputMaybe<AddBeneficiaryInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddEmailArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddItemsToCartArgs = {
    addCartRequestInput?: InputMaybe<AddCartRequestInput>;
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includeBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    includeCartCalculation?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddMobileNumberArgs = {
    editMobileRequestSchemaInput?: InputMaybe<EditMobileRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddRefundBankAccountUsingOtpArgs = {
    addBeneficiaryDetailsOTPRequestInput?: InputMaybe<AddBeneficiaryDetailsOtpRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationAddRefundBeneficiaryUsingOtpSessionArgs = {
    addBeneficiaryInput?: InputMaybe<AddBeneficiaryInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationApplyCouponArgs = {
    applyCouponRequestInput?: InputMaybe<ApplyCouponRequestInput>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includePriceBreakup?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationApplyLoyaltyPointsArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    includeBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    includeItems?: InputMaybe<Scalars['Boolean']['input']>;
    redeemPoints: RedeemLoyaltyPoints;
};
/** Mutation operations for user management and profile updates. */
export type MutationAttachCardToCustomerArgs = {
    attachCardRequestInput?: InputMaybe<AttachCardRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCancelPaymentLinkArgs = {
    cancelOrResendPaymentLinkRequestInput?: InputMaybe<CancelOrResendPaymentLinkRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCheckAndUpdatePaymentStatusArgs = {
    paymentStatusUpdateRequestInput?: InputMaybe<PaymentStatusUpdateRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCheckAndUpdatePaymentStatusPaymentLinkArgs = {
    paymentStatusUpdateRequestInput?: InputMaybe<PaymentStatusUpdateRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCheckoutCartArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartCheckoutDetailRequestInput?: InputMaybe<CartCheckoutDetailRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCompleteUploadArgs = {
    completeUploadReqInput: CompleteUploadReqInput;
    namespace: FileStorageNamespace;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreateOrderHandlerPaymentLinkArgs = {
    createOrderUserRequestInput?: InputMaybe<CreateOrderUserRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreatePaymentLinkArgs = {
    createPaymentLinkRequestInput?: InputMaybe<CreatePaymentLinkRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreatePaymentLinkOrderArgs = {
    createOrderUserRequestInput?: InputMaybe<CreateOrderUserRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreatePaymentOrderArgs = {
    paymentOrderInput?: InputMaybe<PaymentOrderInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreateShortLinkArgs = {
    shortLinkReqInput?: InputMaybe<ShortLinkReqInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCreateTicketArgs = {
    addTicketPayloadInput?: InputMaybe<AddTicketPayloadInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationCustomerOnboardArgs = {
    customerOnboardingRequestInput?: InputMaybe<CustomerOnboardingRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteBeneficiaryArgs = {
    deleteBeneficiary?: InputMaybe<DeleteBeneficiaryInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteCartArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteEmailArgs = {
    email: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteMobileNumberArgs = {
    countryCode: Scalars['String']['input'];
    phone: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteUserArgs = {
    deleteApplicationUserRequestSchemaInput?: InputMaybe<DeleteApplicationUserRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationDeleteUserCardArgs = {
    deletehCardRequestInput?: InputMaybe<DeletehCardRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationDelinkWalletArgs = {
    walletDelinkRequestSchemaInput?: InputMaybe<WalletDelinkRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationEnableOrDisableRefundTransferModeArgs = {
    updateRefundTransferModeRequestInput?: InputMaybe<UpdateRefundTransferModeRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationFollowByIdArgs = {
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationForgotPasswordArgs = {
    forgotPasswordRequestSchemaInput?: InputMaybe<ForgotPasswordRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationGetCartShareLinkArgs = {
    getShareCartLinkRequestInput?: InputMaybe<GetShareCartLinkRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationGetCollectionQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationGetProductQrCodeBySlugArgs = {
    slug: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationGetRefundBeneficiariesUsingOtpSessionArgs = {
    filterBy?: InputMaybe<FilterByEnum>;
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationGetUrlQrCodeArgs = {
    url: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationInitialisePaymentArgs = {
    paymentInitializationRequestInput?: InputMaybe<PaymentInitializationRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationInitialisePaymentPaymentLinkArgs = {
    paymentInitializationRequestInput?: InputMaybe<PaymentInitializationRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLinkWalletArgs = {
    walletVerifyRequestSchemaInput?: InputMaybe<WalletVerifyRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithAppleIosArgs = {
    oAuthRequestAppleSchemaInput?: InputMaybe<OAuthRequestAppleSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithEmailAndPasswordArgs = {
    passwordLoginRequestSchemaInput?: InputMaybe<PasswordLoginRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithFacebookArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithGoogleArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithGoogleAndroidArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithGoogleIosArgs = {
    oAuthRequestSchemaInput?: InputMaybe<OAuthRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithOtpArgs = {
    sendOtpRequestSchemaInput?: InputMaybe<SendOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationLoginWithTokenArgs = {
    tokenRequestBodySchemaInput?: InputMaybe<TokenRequestBodySchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationRegisterWithFormArgs = {
    formRegisterRequestSchemaInput?: InputMaybe<FormRegisterRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationRemoveAddressArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationRemoveCouponArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationRenderHtmlArgs = {
    renderHTMLRequestInput?: InputMaybe<RenderHtmlRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationResendOrCancelPaymentArgs = {
    resendOrCancelPaymentRequestInput?: InputMaybe<ResendOrCancelPaymentRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationResendPaymentLinkArgs = {
    cancelOrResendPaymentLinkRequestInput?: InputMaybe<CancelOrResendPaymentLinkRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationResetForgotPasswordArgs = {
    forgotPasswordRequestSchemaInput?: InputMaybe<ForgotPasswordRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSelectAddressArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includePriceBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    selectCartAddressRequestInput?: InputMaybe<SelectCartAddressRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSelectPaymentModeArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    updateCartPaymentRequestInput?: InputMaybe<UpdateCartPaymentRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendForgotOtpOnEmailArgs = {
    sendEmailForgotOtpRequestSchemaInput?: InputMaybe<SendEmailForgotOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendForgotOtpOnMobileArgs = {
    sendMobileForgotOtpRequestSchemaInput?: InputMaybe<SendMobileForgotOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendOtpOnEmailArgs = {
    sendEmailOtpRequestSchemaInput?: InputMaybe<SendEmailOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendOtpOnMobileArgs = {
    sendMobileOtpRequestSchemaInput?: InputMaybe<SendMobileOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendOtpForRefundBankDetailsArgs = {
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendResetPasswordEmailArgs = {
    sendResetPasswordEmailRequestSchemaInput?: InputMaybe<SendResetPasswordEmailRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendResetPasswordMobileArgs = {
    sendResetPasswordMobileRequestSchemaInput?: InputMaybe<SendResetPasswordMobileRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendResetTokenArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendShipmentOtpToCustomerArgs = {
    eventType?: InputMaybe<ShipmentOtpEventType>;
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendVerificationLinkToEmailArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSendVerificationLinkToMobileArgs = {
    sendVerificationLinkMobileRequestSchemaInput?: InputMaybe<SendVerificationLinkMobileRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSetEmailAsPrimaryArgs = {
    editEmailRequestSchemaInput?: InputMaybe<EditEmailRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSetMobileNumberAsPrimaryArgs = {
    sendVerificationLinkMobileRequestSchemaInput?: InputMaybe<SendVerificationLinkMobileRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationSignUrlsArgs = {
    signUrlInput: SignUrlInput;
};
/** Mutation operations for user management and profile updates. */
export type MutationStartUploadArgs = {
    namespace: FileStorageNamespace;
    startUploadReqInput: StartUploadReqInput;
};
/** Mutation operations for user management and profile updates. */
export type MutationSubmitCustomFormArgs = {
    customFormSubmissionPayloadInput?: InputMaybe<CustomFormSubmissionPayloadInput>;
    slug: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationSubmitDeliveryReattemptRequestArgs = {
    deliveryReattemptRequestInput?: InputMaybe<DeliveryReattemptRequestInput>;
    shipmentId: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationUnfollowByIdArgs = {
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateAddressArgs = {
    address2Input?: InputMaybe<Address2Input>;
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateCartArgs = {
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includeCartCalculation?: InputMaybe<Scalars['Boolean']['input']>;
    includePriceBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    updateCartRequestInput?: InputMaybe<UpdateCartRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateCartBreakupArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includePriceBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    updateCartBreakupRequestInput?: InputMaybe<UpdateCartBreakupRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateCartMetaArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartMetaRequestInput?: InputMaybe<CartMetaRequestInput>;
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateCartWithSharedItemsArgs = {
    action: ActionEnum;
    token: Scalars['String']['input'];
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateCommunicationConsentArgs = {
    communicationConsentReqInput: CommunicationConsentReqInput;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateDefaultBeneficiaryArgs = {
    setDefaultBeneficiaryRequestInput?: InputMaybe<SetDefaultBeneficiaryRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdatePasswordArgs = {
    updatePasswordRequestSchemaInput?: InputMaybe<UpdatePasswordRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateProfileArgs = {
    editProfileRequestSchemaInput?: InputMaybe<EditProfileRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateShipmentStatusArgs = {
    shipmentId: Scalars['String']['input'];
    updateShipmentStatusRequestInput: UpdateShipmentStatusRequestInput;
};
/** Mutation operations for user management and profile updates. */
export type MutationUpdateUserAttributesArgs = {
    updateUserAttributesRequestSchemaInput?: InputMaybe<UpdateUserAttributesRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationValidateAddressArgs = {
    countryIsoCode?: InputMaybe<Scalars['String']['input']>;
    templateName?: InputMaybe<TemplateNameEnum>;
    validateAddressRequestInput?: InputMaybe<ValidateAddressRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationValidateCustomerAndCreditSummaryArgs = {
    customerAndCreditSummary?: InputMaybe<CustomerAndCreditSummary>;
};
/** Mutation operations for user management and profile updates. */
export type MutationValidateVpaArgs = {
    validateVPARequestInput?: InputMaybe<ValidateVpaRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyAndChargePaymentArgs = {
    chargeCustomerRequestInput?: InputMaybe<ChargeCustomerRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyCustomerForPaymentArgs = {
    validateCustomerRequestInput?: InputMaybe<ValidateCustomerRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyEmailArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyEmailForgotOtpArgs = {
    verifyEmailForgotOtpRequestSchemaInput?: InputMaybe<VerifyEmailForgotOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyEmailOtpArgs = {
    verifyEmailOtpRequestSchemaInput?: InputMaybe<VerifyEmailOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyMobileArgs = {
    codeRequestBodySchemaInput?: InputMaybe<CodeRequestBodySchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyMobileForgotOtpArgs = {
    verifyMobileForgotOtpRequestSchemaInput?: InputMaybe<VerifyMobileForgotOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyMobileOtpArgs = {
    verifyOtpRequestSchemaInput?: InputMaybe<VerifyOtpRequestSchemaInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyOtpAndAddBeneficiaryForBankArgs = {
    addBeneficiaryViaOtpVerificationRequestInput?: InputMaybe<AddBeneficiaryViaOtpVerificationRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyOtpAndAddBeneficiaryForWalletArgs = {
    walletOtpRequestInput?: InputMaybe<WalletOtpRequestInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyOtpForRefundBankDetailsArgs = {
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
    verifyOtpInput?: InputMaybe<VerifyOtpInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationVerifyShipmentOtpFromCustomerArgs = {
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
    verifyOtpInput?: InputMaybe<VerifyOtpInput>;
};
/** Mutation operations for user management and profile updates. */
export type MutationWalletLinkInitiateArgs = {
    walletLinkRequestSchemaInput?: InputMaybe<WalletLinkRequestSchemaInput>;
};
/** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
export type NameInformation = {
    __typename?: 'NameInformation';
    /** Name of the entity (brand or seller). Example: 'Fynd Retail' */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the entity. Example: 2001 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Data related to navigation links. */
export type Navigation = {
    __typename?: 'Navigation';
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /**
     * Whether navigation is archived or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    archived?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Details regarding the creator of entity.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<CreatedBy>;
    /**
     * Details related to resource creation and updation.
     * @deprecated This field is obsolete.
     */
    date_meta?: Maybe<DateMeta>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the navigation link. For example, 'Main Menu' or 'Footer Navigation'. */
    name?: Maybe<Scalars['String']['output']>;
    /** List of all navigations links and relevant details. */
    navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    /** Details regarding the orientation on which the navigation is to be applied. */
    orientation?: Maybe<Orientation>;
    /** Details regarding the platforms for which this navigation is to applied on. For example, ['web', 'ios', 'android']. */
    platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A short, human-readable, URL-friendly identifier. For example, 'main-menu' or 'footer-nav'. */
    slug?: Maybe<Scalars['String']['output']>;
    /**
     * A hardcoded key for internally managing navigation versions.
     * @deprecated This field is obsolete.
     */
    version?: Maybe<Scalars['Float']['output']>;
};
/** Navigation action configuration for page routing and user interactions. */
export type NavigationAction = {
    __typename?: 'NavigationAction';
    /**
     * Represents the custom json values of a product brand.
     * @deprecated _custom_json is deprecated. Use custom_config instead.
     */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** Represents the custom config values of a product brand. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** It contains detailed information about the sales channel. */
    description?: Maybe<Scalars['String']['output']>;
    /**
     * Unique identifier of the product brand.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /** Media object representing the logo of the product brand. */
    logo?: Maybe<Media>;
    /** Name of the product brand. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product brand. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Details related to navigation link. */
export type NavigationReference = {
    __typename?: 'NavigationReference';
    /** Details regarding the authorization level to access the navigation item. For example, ['public', 'authenticated']. */
    acl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Schema to define the Action Object. */
    action?: Maybe<ContentAction>;
    /** Whether navigation is active or not. For example, true or false. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Display name of the navigation link. For example, 'Home' or 'Products'. */
    display?: Maybe<Scalars['String']['output']>;
    /** URL of an image associated with a navigation link. For example, 'https://cdn.example.com/icons/home.png'. */
    image?: Maybe<Scalars['String']['output']>;
    /** Details of name of an entry in other languages. */
    locale_language?: Maybe<LocaleLanguage>;
    /** Number denoting the position of navigation link. For example, 1, 2, or 3. */
    sort_order?: Maybe<Scalars['Int']['output']>;
    /** List of sub links and details under a navigation. */
    sub_navigation?: Maybe<Array<Maybe<NavigationReference>>>;
    /** List of tags under a navigation link. For example, ['featured', 'new']. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of action to be taken e.g, page. For example, 'page', 'link', or 'category'. */
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
/** An object containing the date range within which a delivery can be reattempted. */
export type NdrDeliveryWindow = {
    __typename?: 'NdrDeliveryWindow';
    /** The date until which the delivery of a shipment can be reattempted. For example, '2024-11-10'. */
    end_date?: Maybe<Scalars['String']['output']>;
    /** A list of dates to be excluded when selecting a delivery reattempt date. For example, ['2024-11-07']. */
    excluded_dates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The date from which the delivery of a shipment can be reattempted. For example, '2024-11-06'. */
    start_date?: Maybe<Scalars['String']['output']>;
};
/** Non-Delivery Report related info, for example the payload shown when a delivery attempt fails. */
export type NdrDetails = {
    __typename?: 'NdrDetails';
    /** A range of dates in between which delivery can be reattempted. For example, { start_date: '2024-11-06', end_date: '2024-11-10' }. */
    allowed_delivery_window?: Maybe<NdrDeliveryWindow>;
    /** Additional comments provided by the customer while rescheduling the delivery. For example, 'Please attempt after 7 PM'. */
    customer_remarks?: Maybe<Scalars['String']['output']>;
    /** Any extra notes or observations added by the delivery partner at the time of a failed delivery attempt. For example, 'Gate locked'. */
    delivery_partner_remarks?: Maybe<Scalars['String']['output']>;
    /** The specific date on which the courier partner is expected to reattempt delivery of the shipment. For example, '2024-11-08'. */
    delivery_scheduled_date?: Maybe<Scalars['String']['output']>;
    /** The reason recorded by the courier or delivery partner for the failed delivery attempt. For example, 'Customer unavailable'. */
    failure_reason?: Maybe<Scalars['String']['output']>;
    /** A list of fields that are not allowed to be updated while filling a new address in the NDR form. For example, ['pincode', 'city']. */
    non_editable_address_fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Indicates whether to show NDR form or not. For example, true when customer needs to update address. */
    show_ndr_form?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for nested tracking details. */
export type NestedTrackingDetails = {
    __typename?: 'NestedTrackingDetails';
    /** Indicates whether the tracking event is the current or active status. For example, `is_current` can be set to true. */
    is_current?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the tracking event has passed or occurred. For example, `is_passed` can be set to true. */
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    /** The status of the tracking event. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
    /** The time associated with the tracking event. For example, `time` can be set to '2024-11-01T10:00:00Z'. */
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
/** Describes the next action required for completing the payment. */
export type NextAction = {
    /** Type of action. */
    type: NextActionType;
};
/** Enum for next action type. */
export declare enum NextActionType {
    FormPost = "FORM_POST",
    Redirect = "REDIRECT"
}
/** The `Schedule` schema defines the timing and details for recurring or one-time tasks. It includes information on when the job should start and end, the frequency of the task, and any additional metadata. This schema helps in scheduling jobs or tasks based on specified timings and durations. */
export type NextSchedule = {
    __typename?: 'NextSchedule';
    /** The end time of the live discount. */
    end?: Maybe<Scalars['String']['output']>;
    /** The start time of the live discount. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Describes the request structure to login or register in an iOS app using Apple account credentials. Requires user_identifier, identity_token, and optional profile information. */
export type OAuthRequestAppleSchemaInput = {
    /** OAuth token details for Apple login. */
    oauth: OAuthRequestAppleSchemaOauthInput;
    /** User profile details for Apple login. */
    profile: OAuthRequestAppleSchemaProfileInput;
    /** Unique user identifier from Apple (e.g., 000119.6f9a75abd756451fa2adee13d004d4f8.0606). */
    user_identifier: Scalars['String']['input'];
};
/** Schema representing the OAuth token details for Apple login. */
export type OAuthRequestAppleSchemaOauthInput = {
    /** Apple identity token. */
    identity_token: Scalars['String']['input'];
};
/** Schema representing the profile information of the user for Apple login. */
export type OAuthRequestAppleSchemaProfileInput = {
    /** User's first name. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** User's full name. */
    full_name?: InputMaybe<Scalars['String']['input']>;
    /** User's last name. */
    last_name?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to login or register using Facebook/Google account credentials. Different providers require different OAuth2 tokens: Facebook uses access_token, Google Web uses token (ID token), Google Android uses refresh_token. */
export type OAuthRequestSchemaInput = {
    /** OAuth2 token details. */
    oauth2: OAuthRequestSchemaOauth2Input;
    /** User profile information from the provider. */
    profile: OAuthRequestSchemaProfileInput;
};
/** Schema representing the OAuth2 token details. */
export type OAuthRequestSchemaOauth2Input = {
    /** OAuth2 access token. */
    access_token?: InputMaybe<Scalars['String']['input']>;
    /** Access token expiry time in milliseconds since epoch. */
    expiry?: InputMaybe<Scalars['Int']['input']>;
    /** OAuth2 refresh token. */
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the profile information of the user. */
export type OAuthRequestSchemaProfileInput = {
    /** User's email address. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** User's first name. */
    first_name?: InputMaybe<Scalars['String']['input']>;
    /** User's full name. */
    full_name?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier of the user. */
    id: Scalars['String']['input'];
    /** URL of the user's profile picture. */
    image?: InputMaybe<Scalars['String']['input']>;
    /** User's last name. */
    last_name?: InputMaybe<Scalars['String']['input']>;
};
/** Offer Item Details, This consists of margin percentage, price, quantity, offer type and offer price. */
export type OfferItem = {
    __typename?: 'OfferItem';
    /** Whether offer discount is auto applied in cart. Example: true */
    auto_applied?: Maybe<Scalars['Boolean']['output']>;
    /** True if best offer among all sellers. Example: true */
    best?: Maybe<Scalars['Boolean']['output']>;
    /** Percentage value of discount. Example: 15 */
    margin?: Maybe<Scalars['Int']['output']>;
    /** Offer price details including effective, selling, currency, and max price. Example: { effective: 499, currency_code: 'INR', currency_symbol: '₹' } */
    price?: Maybe<OfferPrice>;
    /** Quantity on which offer is applicable. Example: 2 */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Total price of offer quantity with discount. Example: 998.0 */
    total?: Maybe<Scalars['Float']['output']>;
    /** Type of the offer. Example: 'bulk' */
    type?: Maybe<Scalars['String']['output']>;
};
/** Mode of the offer. */
export declare enum OfferMode {
    /** Coupon offer mode. */
    Coupon = "coupon",
    /** Promotion offer mode. */
    Promotion = "promotion"
}
/** Offer price details of the item includes effective price, selling price, currency and max price. */
export type OfferPrice = {
    __typename?: 'OfferPrice';
    /** Discounted per unit price for current offer object. Example: 499.0 */
    bulk_effective?: Maybe<Scalars['Float']['output']>;
    /** The currency code for an offer price is the three-letter code that corresponds to the currency in which the offer price is denominated. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The "effective price" is the actual price paid by the consumer after accounting for product discounts. It represents the true cost of a product or service after all adjustments have been made. */
    effective?: Maybe<Scalars['Int']['output']>;
    /** The price at which the product is sold to the end consumer, typically the original price before discounts. */
    marked?: Maybe<Scalars['Int']['output']>;
};
/** Type of offer or promotion. */
export declare enum OfferType {
    /** Amount-based offer. */
    Amount = "amount",
    /** Buy One Get One offer. */
    Bogo = "bogo",
    /** Bundle amount percentage offer. */
    BundleAmountPercentage = "bundle_amount_percentage",
    /** Bundle price amount offer. */
    BundlePriceAmount = "bundle_price_amount",
    /** Bundle price percentage offer. */
    BundlePricePercentage = "bundle_price_percentage",
    /** Cashback offer. */
    Cashback = "cashback",
    /** Contract price offer. */
    ContractPrice = "contract_price",
    /** Custom offer type. */
    Custom = "custom",
    /** External price adjustment discount offer. */
    ExternalPriceAdjustmentDiscount = "external_price_adjustment_discount",
    /** Fixed price offer. */
    FixedPrice = "fixed_price",
    /** Fixed unit price offer. */
    FixedUnitPrice = "fixed_unit_price",
    /** Free gift items offer. */
    FreeGiftItems = "free_gift_items",
    /** Free item discount absolute offer. */
    FreeItemDiscountAbsolute = "free_item_discount_absolute",
    /** Free items offer. */
    FreeItems = "free_items",
    /** Free non-sellable items offer. */
    FreeNonSellableItems = "free_non_sellable_items",
    /** Item-based discount offer. */
    ItemBasedDiscount = "item_based_discount",
    /** Ladder price offer. */
    LadderPrice = "ladder_price",
    /** Percentage-based offer. */
    Percentage = "percentage",
    /** Shipping price offer. */
    ShippingPrice = "shipping_price"
}
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
/** Operations that can be performed on items. */
export declare enum Operation {
    RemoveItem = "remove_item",
    UpdateItem = "update_item"
}
/** Order details. For example, an order could include shipments 16736576489251696245 placed on 2023-01-14 06:17:37. */
export type Order = {
    __typename?: 'Order';
    /** A list containing details of bags available for reorder. For example, [{ item_id: 95988, quantity: 1 }]. */
    bags_for_reorder?: Maybe<Array<Maybe<BagsForReorder>>>;
    /** A list containing the breakup of various charges and discounts, such as shipping, tax, and coupon adjustments. For example, `breakup_values` can be set to [a OrderBreakupValue object]. */
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValue>>>;
    /** Order-level charges breakdown applied to this order. For example, [{ name: 'shipping', amount: 40.0 }]. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** The currency associated with the order. For example, { currency_code: 'INR', currency_symbol: '₹' }. */
    currency?: Maybe<CurrencySchema>;
    /** The GSTIN code of the user who placed the order. For example, '27ABCDE1234F1Z5'. */
    gstin_code?: Maybe<Scalars['String']['output']>;
    /** Metadata for the order used for tracking and analytics. For example, { source: 'ios_app', campaign: 'diwali_sale' }. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * The date and time when the order was created. For example, '2023-01-14 06:17:37'.
     * @deprecated This field is obsolete.
     */
    order_created_time?: Maybe<Scalars['String']['output']>;
    /** The timestamp when the order was created. For example, '2023-01-14T06:17:37Z'. */
    order_created_ts?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the order. For example, 'FY63C1FBA80195F734C0'. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** A list containing details of individual shipments within the order. For example, [{ shipment_id: '16736576489251696245', status: 'credit_note_generated' }]. */
    shipments?: Maybe<Array<Maybe<OrderShipment>>>;
    /** The total number of shipments in the order. For example, 1, 2, or 3. */
    total_shipments_in_order?: Maybe<Scalars['Int']['output']>;
    /**
     * User info such as name, email, and phone. For example, `user_info` can be set to a UserInfo object.
     * @deprecated This field is obsolete.
     */
    user_info?: Maybe<UserInfo>;
};
/** Schema for applied free articles. */
export type OrderAppliedFreeArticles = {
    __typename?: 'OrderAppliedFreeArticles';
    /** The unique identifier for the article. For example, `article_id` can be set to '507f1f77bcf86cd799439011'. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** An object containing details about the free gift item. For example, `free_gift_item_details` can be set to { key: 'value' }. */
    free_gift_item_details?: Maybe<Scalars['JSON']['output']>;
    /** The identifier for the parent item to which this free article is related. For example, `parent_item_identifier` can be set to '507f1f77bcf86cd799439011'. */
    parent_item_identifier?: Maybe<Scalars['String']['output']>;
    /** The quantity of the free article. For example, `quantity` can be set to 99.99. */
    quantity?: Maybe<Scalars['Float']['output']>;
};
/** Bag details representing each bag/article inside a shipment. */
export type OrderBags = {
    __typename?: 'OrderBags';
    /** An array containing information about applied promotions. For example, [{ promo_id: 'PROMO10', amount: 100.0 }]. */
    applied_promos?: Maybe<Array<Maybe<AppliedPromos>>>;
    /** Order bags article details, for example article metadata and attributes. For example, `article` can be set to a Article object. */
    article?: Maybe<Article>;
    /** Bundle details containing information about the bundle. For example, `bundle_details` can be set to a BundleDetails object. */
    bundle_details?: Maybe<BundleDetails>;
    /** Indicates if the shipment can be canceled. For example, false when dispatched. */
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the item can be returned. For example, true for returnable apparel. */
    can_return?: Maybe<Scalars['Boolean']['output']>;
    /** Bags charges details. For example, [{ name: 'gift_wrap', amount: 30.0 }]. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** The code of the currency used. For example, 'INR'. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The symbol of the currency used. For example, '₹'. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** An object containing the current status of the item. For example, { status: 'delivered' }. */
    current_status?: Maybe<CurrentStatus>;
    /** Additional custom attributes associated with the order bag for extended order information and tracking metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** The date and time when the item is expected to be delivered. For example, '2024-11-05T18:00:00Z'. */
    delivery_date?: Maybe<Scalars['String']['output']>;
    /** The date and time when the item is expected to be delivered. For example, `financial_breakup` can be set to [a FinancialBreakup object]. */
    financial_breakup?: Maybe<Array<Maybe<FinancialBreakup>>>;
    /** The unique identifier for the order item. For example, 21500347. */
    id?: Maybe<Scalars['Int']['output']>;
    /** Indicates if the item is a bundle item. For example, true for bundle SKU. */
    is_bundle_item?: Maybe<Scalars['Boolean']['output']>;
    /** An object containing details about the item. For example, { name: 'Cotton Shirt' }. */
    item?: Maybe<OrderItem>;
    /** The line number of the item in the order. For example, 1. */
    line_number?: Maybe<Scalars['Int']['output']>;
    /** An object containing metadata for the item. For example, { personalization: true }. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** An object containing details of parent promotional bags. For example, { parent_bag_id: 10 }. */
    parent_promo_bags?: Maybe<Scalars['JSON']['output']>;
    /** An object containing price details for the item. For example, { price_effective: 999.0 }. */
    prices?: Maybe<Prices>;
    /** The quantity of the item. For example, 2. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** The last date and time by which the item can be returned. For example, '2024-11-20T23:59:59Z'. */
    returnable_date?: Maybe<Scalars['String']['output']>;
    /** The identifier for the seller. For example, '85'. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
};
/** Bag details representing each bag/article inside a shipment. */
export type OrderBagsCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Order Beneficiary Details. */
export type OrderBeneficiaryDetail = {
    __typename?: 'OrderBeneficiaryDetail';
    /** All Beneficiaries Of An Order. */
    beneficiaries?: Maybe<Array<Maybe<BeneficiaryDetails>>>;
    /** Show Beneficiary details on UI or not. */
    show_beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
};
/** Value breakdown of the order, contains the details of the breakup value for the order. */
export type OrderBreakupValue = {
    __typename?: 'OrderBreakupValue';
    /** The international currency code representing the currency used for the value. For example, 'INR', 'USD', or 'EUR'. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Symbol representing the currency used for the value. For example, '₹', '$', or '€'. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The name of the entity as it should be displayed. For example, 'Subtotal' or 'Shipping Charges'. */
    display?: Maybe<Scalars['String']['output']>;
    /** The slug identifier of the entity. For example, 'subtotal' or 'delivery_charge'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Array of nested breakup values that can contain further sub-values (recursive structure) */
    sub_values?: Maybe<Array<OrderBreakupValue>>;
    /** The numerical value associated with the entity in the currency of the order. For example, 1000.50 or 150.00. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Order listing details, for example the response of an order history page. */
export type OrderConnection = {
    __typename?: 'OrderConnection';
    /** Filter options available for the order listings. For example, [{ value: 1, display: 'Placed' }]. */
    filters?: Maybe<OrderFilters>;
    /** List of orders, each containing detailed information about individual orders and their respective shipments. For example, [{ order_id: 'FY123' }]. */
    items?: Maybe<Array<Maybe<Order>>>;
    /** Pagination configuration such as current page and total items. For example, `page` can be set to a OrderPageInfo object. */
    page?: Maybe<OrderPageInfo>;
};
/** Configuration options for order-related features, such as enabling the 'buy again' option. */
export type OrderFeature = {
    __typename?: 'OrderFeature';
    /** Indicates whether 'buy again' option is allowed for orders. Default value is false. */
    buy_again: Scalars['Boolean']['output'];
    /** When set to false, orders will not be accepted on the sales channel */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Reason for disabling order acceptance. This will be shown to the user when orders are not being accepted. */
    message?: Maybe<Scalars['String']['output']>;
};
/** Schema for order filters. */
export type OrderFilters = {
    __typename?: 'OrderFilters';
    /** An array containing the order statuses. For example, `statuses` can be set to [a OrderStatus object]. */
    statuses?: Maybe<Array<Maybe<OrderStatus>>>;
};
/** Schema for item. */
export type OrderItem = {
    __typename?: 'OrderItem';
    /** An object containing various attributes of the item. For example, `attributes` can be set to { key: 'value' }. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** An object containing brand information. For example, `brand` can be set to a ItemBrand object. */
    brand?: Maybe<ItemBrand>;
    /** The code or SKU of the item. For example, `code` can be set to 'sample_code'. */
    code?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the item. For example, `id` can be set to 9. */
    id?: Maybe<Scalars['Int']['output']>;
    /** An array of URLs pointing to images of the item. For example, `image` can be set to ['value']. */
    image?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** An array of level 1 categories the item belongs. For example, `l1_categories` can be set to ['value']. */
    l1_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** An array of level 2 categories the item belongs to. For example, `l2_categories` can be set to ['value']. */
    l2_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** ID representing the level 2 category classification of the item. For example, `l2_category_id` can be set to 1. */
    l2_category_id?: Maybe<Scalars['Int']['output']>;
    /** The level 3 category name. For example, `l3_category_name` can be set to 'Sample Name'. */
    l3_category_name?: Maybe<Scalars['String']['output']>;
    /** The name of the ite. For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
    /** An object containing brand information. For example, `seller_identifier` can be set to '507f1f77bcf86cd799439011'. */
    seller_identifier?: Maybe<Scalars['String']['output']>;
    /** The size of the item. For example, `size` can be set to 'value'. */
    size?: Maybe<Scalars['String']['output']>;
    /** A unique key or identifier for the item slug. For example, `slug_key` can be set to 'value'. */
    slug_key?: Maybe<Scalars['String']['output']>;
};
/** Schema for order's pagination. */
export type OrderPageInfo = {
    __typename?: 'OrderPageInfo';
    /** Specifies the current page number. It helps in identifying the position within the paginated results. For example, 1, 2, or 3. */
    current?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether there is a next page available. It is true if a next page exists and false if the current page is the last one. For example, true or false. */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** Total number of items available across all pages. It provides a count of all the items that match the query criteria, regardless of pagination. For example, 50, 100, or 250. */
    item_total?: Maybe<Scalars['Int']['output']>;
    /** Represents the number of items on the current page. It indicates how many items are included in each page of the paginated response. For example, 10, 20, or 50. */
    size?: Maybe<Scalars['Int']['output']>;
    /** Specifies the current page number. It helps in identifying the position within the paginated results. For example, 'number' or 'cursor'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Average order processing time configuration. */
export type OrderProcessingTime = {
    __typename?: 'OrderProcessingTime';
    /** Duration value for average order processing time (e.g., 2, 5, 10). */
    duration?: Maybe<Scalars['Int']['output']>;
    /** Unit of time for the duration (e.g., 'hours', 'days', 'minutes'). */
    duration_type?: Maybe<Scalars['String']['output']>;
};
/** Contains Metadata for the order. */
export type OrderRequest = {
    __typename?: 'OrderRequest';
    /** Metadata for the order. For example, { source: 'storefront', app_version: '8.4.2' }. */
    meta?: Maybe<Scalars['JSON']['output']>;
};
/** Shipment details. */
export type OrderShipment = {
    __typename?: 'OrderShipment';
    /** External shipment ID provided by the sales channel or the extension. For example, 'Ajio16526' */
    affiliate_shipment_id?: Maybe<Scalars['String']['output']>;
    /** The airway bill number for the shipment. For example, '8802086113909'. */
    awb_no?: Maybe<Scalars['String']['output']>;
    /** An array containing details about the individual bags in the shipment. For example, [{ line_number: 1, quantity: 2 }]. */
    bags?: Maybe<Array<Maybe<OrderBags>>>;
    /** Indicates if there are any beneficiary details. For example, true when refund beneficiary exists. */
    beneficiary_details?: Maybe<Scalars['Boolean']['output']>;
    /** Billing details for the order shipment, such as billing address records. For example, `billing_address` can be set to a BillingAddress object. */
    billing_address?: Maybe<BillingAddress>;
    /** An array containing the breakup of various charges and discounts, such as shipping, tax, and promo adjustments. For example, `breakup_values` can be set to [a OrderBreakupValue object]. */
    breakup_values?: Maybe<Array<Maybe<OrderBreakupValue>>>;
    /** An object containing details about the breakability of the shipment. For example, { can_break: true }. */
    can_break?: Maybe<Scalars['JSON']['output']>;
    /** Indicates if the shipment can be canceled. For example, false once shipped. */
    can_cancel?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the shipment can be returned. For example, true within the return window. */
    can_return?: Maybe<Scalars['Boolean']['output']>;
    /** Order charges information. For example, [{ name: 'packaging', amount: 20.0 }]. */
    charges?: Maybe<Array<Maybe<PriceAdjustmentCharge>>>;
    /** Any comments related to the shipment. For example, 'Gift wrap requested'. */
    comment?: Maybe<Scalars['String']['output']>;
    /** Schema for credit note. For example, {'credit_note_id': 'creidte-note-001', 'credit_note_url': ''} */
    credit_note?: Maybe<CreditNote>;
    /** An object containing custom metadata for the shipment. For example, { campaign: 'diwali' }. */
    custom_meta?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** An object containing the delivery address details. For example, { city: 'Mumbai', pincode: '400001' }. */
    delivery_address?: Maybe<DeliveryAddress>;
    /** The expected delivery date. For example, '2024-11-05'. */
    delivery_date?: Maybe<Scalars['String']['output']>;
    /** The name of the delivery partner. For example, 'fyndr'. */
    dp_name?: Maybe<Scalars['String']['output']>;
    /** Fulfilling company details. For example, { id: 12, name: 'Fynd Logistics' }. */
    fulfilling_company?: Maybe<FulfillingCompany>;
    /** Store fulfilling the shipment. For example, { id: 1001, name: 'Mumbai DC' }. */
    fulfilling_store?: Maybe<FulfillingStore>;
    /** Fulfillment option, for example 'home-delivery' or 'store-pickup'. For example, `fulfillment_option` can be set to a FulfillmentOption object. */
    fulfillment_option?: Maybe<FulfillmentOption>;
    /** The GSTIN code for the shipment. For example, '27ABCDE1234F1Z5'. */
    gstin_code?: Maybe<Scalars['String']['output']>;
    /** Schema for invoice, for example to provide invoice download URLs. For example, `invoice` can be set to a Invoice object. */
    invoice?: Maybe<Invoice>;
    /** Indicates whether refund configuration is enabled for the sales channel; if disabled, no refund options are shown, and if enabled, the applicable refund modes are displayed. */
    is_refund_config_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Client-defined shipment-level metadata. The structure is flexible and interpretation is the client’s responsibility. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** An object containing Non-Delivery Report (NDR) related details. For example, { show_ndr_form: true }. */
    ndr_details?: Maybe<NdrDetails>;
    /** The URL for customer support or help. For example, 'https://support.example.com/help'. */
    need_help_url?: Maybe<Scalars['String']['output']>;
    /** Metadata for the order. For example, { platform: 'android' }. */
    order?: Maybe<OrderRequest>;
    /** The unique identifier for the order. For example, 'FY63C1FBA80195F734C0'. */
    order_id?: Maybe<Scalars['String']['output']>;
    /** Order type of the shipment (e.g., 'PickAtStore', 'HomeDelivery','Digital). Example: 'HomeDelivery' */
    order_type?: Maybe<OrderTypeEnum>;
    /** An object containing payment details. For example, { mode: 'ONLINE', amount: 1499.0 }. */
    payment?: Maybe<ShipmentPayment>;
    /** Payment information for the order shipment, for example a list of COD and prepaid splits. For example, `payment_info` can be set to [a ShipmentPaymentInfo object]. */
    payment_info?: Maybe<Array<Maybe<ShipmentPaymentInfo>>>;
    /** Different prices related to the shipment (refund_amount, discount, etc). For example, { discount: 100.0 }. */
    prices?: Maybe<Prices>;
    /** An object containing promise details for delivery. For example, { timestamp: { min: '2024-11-05', max: '2024-11-07' } }. */
    promise?: Maybe<Promise>;
    /** An array containing the breakup of various charges and discounts and refund amount. */
    refund_breakup_values?: Maybe<Array<Maybe<OrderBreakupValue>>>;
    /** An object containing details of any refunds. For example, { amount: 500.0 }. */
    refund_details?: Maybe<Scalars['JSON']['output']>;
    /** An object containing Refund Mode details. */
    refund_modes?: Maybe<Array<Maybe<RefundModeData>>>;
    /** An object containing metadata about the return process. For example, { return_mode: 'pickup' }. */
    return_meta?: Maybe<Scalars['JSON']['output']>;
    /** The last date by which the item can be returned. For example, '2024-11-20'. */
    returnable_date?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the shipment was created. For example, '2023-01-14T06:17:37Z'.
     * @deprecated This field is obsolete.
     */
    shipment_created_at?: Maybe<Scalars['String']['output']>;
    /**
     * The timestamp when the shipment was created. For example, '2023-01-14T06:17:37Z'.
     * @deprecated This field is obsolete.
     */
    shipment_created_ts?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the shipment. For example, '16736576489251696245'. */
    shipment_id?: Maybe<Scalars['String']['output']>;
    /** An object containing the current status of the shipment. For example, { title: 'Credit Note Generated', value: 'credit_note_generated' }. */
    shipment_status?: Maybe<ShipmentStatus>;
    /** Indicates if the download invoice option should be shown. For example, true for prepaid orders. */
    show_download_invoice?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if the track link should be shown. For example, true once AWB is assigned. */
    show_track_link?: Maybe<Scalars['Boolean']['output']>;
    /** An object containing size information for the items in the shipment. For example, { sizes: ['M','L'] }. */
    size_info?: Maybe<Scalars['JSON']['output']>;
    /** The total number of bags in the shipment. For example, 3. */
    total_bags?: Maybe<Scalars['Int']['output']>;
    /** An object containing the total details of the shipment. For example, { total_price: 2499.0 }. */
    total_details?: Maybe<ShipmentTotalDetails>;
    /** The URL for tracking the shipment. For example, 'https://track.example.com/SHIP123'. */
    track_url?: Maybe<Scalars['String']['output']>;
    /** An array containing details of the tracking history of the shipment. For example, [{ status: 'Out for Delivery', time: '2024-11-05T07:45:00Z' }]. */
    tracking_details?: Maybe<Array<Maybe<TrackingDetails>>>;
    /** The tracking number for the shipment. For example, 'TRACK987654321'. */
    traking_no?: Maybe<Scalars['String']['output']>;
    /** User information for the shipment. For example, { first_name: 'John', last_name: 'Doe', mobile: '9876543210', email: 'user@example.com' }. */
    user_info?: Maybe<ShipmentUserInfo>;
};
/** Status of the order. */
export type OrderStatus = {
    __typename?: 'OrderStatus';
    /** The text to display. For example, `display` can be set to 'value'. */
    display?: Maybe<Scalars['String']['output']>;
    /** Indicates whether this option is currently selected. For example, `is_selected` can be set to true. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** The value representing the selection. For example, `value` can be set to 1. */
    value?: Maybe<Scalars['Int']['output']>;
};
/** Order tags used to identify specific types of orders, including visual and filterable attributes. */
export type OrderTagInput = {
    /** Display text for the order tag (e.g., 'Bestseller'). */
    display_text: Scalars['String']['input'];
    /** Unique slug identifier for the tag (used for internal tagging or filtering). */
    slug: Scalars['String']['input'];
};
/** Order acceptance timings for each weekday. */
export type OrderTiming = {
    __typename?: 'OrderTiming';
    /** Store closing time. */
    closing?: Maybe<Time>;
    /** Whether the store is open on this day. */
    open?: Maybe<Scalars['Boolean']['output']>;
    /** Store opening time. */
    opening?: Maybe<Time>;
    /** Day of the week (e.g., Monday). */
    weekday?: Maybe<Scalars['String']['output']>;
};
/** Order transaction list response. */
export type OrderTransactionDetail = {
    __typename?: 'OrderTransactionDetail';
    /** List of transactions ordered by created_on ascending. */
    items?: Maybe<Array<Maybe<OrderTransactionItem>>>;
    /** Whether the request was successful. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** A single transaction entry for an order. */
export type OrderTransactionItem = {
    __typename?: 'OrderTransactionItem';
    /** Transaction amount. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** Transaction creation timestamp (ISO 8601). */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Payment mode logo URL. Small logo if available, falls back to large. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Payment mode name (e.g. UPI, Card, COD). */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** Latest transaction status (e.g. complete, pending, failed, cancelled). */
    status?: Maybe<Scalars['String']['output']>;
    /** Merchant transaction ID (merchant_transaction_id). */
    transaction_id?: Maybe<Scalars['String']['output']>;
};
/** Types of order types available. */
export declare enum OrderTypeEnum {
    Digital = "Digital",
    HomeDelivery = "HomeDelivery",
    PickAtStore = "PickAtStore"
}
/** Specifies the sales or interaction channels where the attribute is applicable. */
export declare enum OrderingChannel {
    /** Used in the GoFynd mobile app or ecosystem. */
    Gofynd = "gofynd",
    /** Used at physical kiosks for customer interaction or ordering. */
    Kiosk = "kiosk",
    /** Used when selling through marketplace integrations (e.g., Amazon, Flipkart). */
    Marketplace = "marketplace",
    /** Used for Open Network for Digital Commerce (ONDC) integration. */
    Ondc = "ondc",
    /** Used in Scan & Go services, where customers scan items and checkout themselves. */
    ScanGo = "scan_go",
    /** Used with smart trolley systems in physical retail spaces. */
    SmartTrolley = "smart_trolley",
    /** Used for social commerce platforms (e.g., Instagram, WhatsApp). */
    SocialCommerce = "social_commerce",
    /** Used in in-store Point-of-Sale (PoS) systems running on Store OS. */
    StoreOsPos = "store_os_pos",
    /** Used on the customer-facing storefront (website or app). */
    Storefront = "storefront",
    /** Used in Uniket (B2B wholesale or distribution platform). */
    Uniket = "uniket"
}
/**
 * Represents an ordering source that can be associated with a sales channel.
 * Ordering sources define the origin or platform from which orders are placed,
 * enabling tracking and differentiation of orders based on their source.
 */
export type OrderingSources = {
    __typename?: 'OrderingSources';
    /** Unique identifier slug for the ordering source. Used to reference and identify the source programmatically. */
    key: Scalars['String']['output'];
    /** Human-readable display name of the ordering source. Shown in UI for easy identification by users. */
    name: Scalars['String']['output'];
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
    /** A token used for registration purposes will be sent when user is not registered. */
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
/** Details of the individual who owns or manages the sales channel, including their contact details. */
export type OwnerInfo = {
    __typename?: 'OwnerInfo';
    /** List of email addresses of the owner. */
    emails?: Maybe<Array<Maybe<UserEmail>>>;
    /** First name of the owner, e.g. 'John'. */
    first_name?: Maybe<Scalars['String']['output']>;
    /**
     * The unique identifier of owner info.
     * @deprecated This field is obsolete.
     */
    id?: Maybe<Scalars['String']['output']>;
    /** Last name of the owner, e.g. 'Doe'. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** List of phone numbers of the owner. */
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    /** Hosted URL of owner's profile picture, e.g. 'https://cdn.example.com/profile.jpg'. */
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
/** Navigation action configuration for page routing and user interactions. */
export type PageActionDetail = {
    __typename?: 'PageActionDetail';
    /** Page routing details including URL parameters, query strings, and navigation metadata. */
    page?: Maybe<ActionPageDetail>;
    /** Type of navigation action to execute, e.g. 'page', 'popup', 'external', 'deep_link'. */
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
    /** Current page number. Example: 1 */
    current?: Maybe<Scalars['Int']['output']>;
    /** Whether next page is available. Example: true */
    has_next?: Maybe<Scalars['Boolean']['output']>;
    /** Whether previous page is available. Example: false */
    has_previous?: Maybe<Scalars['Boolean']['output']>;
    /** Total pages available. Example: 5 */
    total?: Maybe<Scalars['Int']['output']>;
    /** Total coupons available for the cart. Example: 23 */
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
    breadcrumbs?: Maybe<Array<Maybe<SeObreadcrumb>>>;
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
    /** A key-value pair object containing canvas attributes for the section. */
    canvas?: Maybe<CanvasItem>;
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
    props?: Maybe<Scalars['JSON']['output']>;
};
/**
 * Page types for the `seoMarkupSchemas` query (both the `pageTypes` input and
 * the serialized `page_type` output). Values mirror the storefront route
 * taxonomy (FDK `AVAILABLE_PAGE_TYPE`), which the resolver maps to the REST
 * page_type with a generic CAPS_UNDERSCORE ⇄ kebab-lowercase transform — e.g.
 * PROFILE_EMAIL → profile-email. The convex SEO schema model's stored values
 * must use the same singular form so output serialization round-trips.
 */
export declare enum PageType {
    AboutUs = "ABOUT_US",
    Addresses = "ADDRESSES",
    Blog = "BLOG",
    Brand = "BRAND",
    Brands = "BRANDS",
    Cards = "CARDS",
    Cart = "CART",
    CartDelivery = "CART_DELIVERY",
    CartPayment = "CART_PAYMENT",
    CartReview = "CART_REVIEW",
    Categories = "CATEGORIES",
    Category = "CATEGORY",
    Collection = "COLLECTION",
    Collections = "COLLECTIONS",
    ContactUs = "CONTACT_US",
    Custom = "CUSTOM",
    External = "EXTERNAL",
    Faq = "FAQ",
    Form = "FORM",
    Freshchat = "FRESHCHAT",
    Home = "HOME",
    LocateUs = "LOCATE_US",
    Login = "LOGIN",
    NotificationSettings = "NOTIFICATION_SETTINGS",
    Orders = "ORDERS",
    OrderStatus = "ORDER_STATUS",
    Page = "PAGE",
    Policy = "POLICY",
    Product = "PRODUCT",
    Products = "PRODUCTS",
    ProductRequest = "PRODUCT_REQUEST",
    Profile = "PROFILE",
    ProfileBasic = "PROFILE_BASIC",
    ProfileCompany = "PROFILE_COMPANY",
    ProfileEmail = "PROFILE_EMAIL",
    ProfileLoyaltyRewards = "PROFILE_LOYALTY_REWARDS",
    ProfileOrderShipment = "PROFILE_ORDER_SHIPMENT",
    ProfilePhone = "PROFILE_PHONE",
    RateUs = "RATE_US",
    ReferEarn = "REFER_EARN",
    Register = "REGISTER",
    RequestReattempt = "REQUEST_REATTEMPT",
    ReturnPolicy = "RETURN_POLICY",
    Sections = "SECTIONS",
    Settings = "SETTINGS",
    SharedCart = "SHARED_CART",
    ShippingPolicy = "SHIPPING_POLICY",
    SinglePageCheckout = "SINGLE_PAGE_CHECKOUT",
    Tnc = "TNC",
    TrackOrder = "TRACK_ORDER",
    Wishlist = "WISHLIST"
}
/** Different types of pages in the application. */
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
/** Visibility settings for page items. */
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
/** Describes the request structure to login or register using an email address and password. Both username (email) and password are required. */
export type PasswordLoginRequestSchemaInput = {
    /** User's password. */
    password: Scalars['String']['input'];
    /** Username (email address or mobile number). */
    username: Scalars['String']['input'];
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
    /**
     * Get Epaylater payment banner details. It provides information about the banner's display status, along with relevant messages and the user's registration status.
     * @deprecated Deprecated epaylater aggregator.
     */
    epay_later_banner_details?: Maybe<EpaylaterBanner>;
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
    /** Payment mode valid message for coupon. Example: 'Applicable on CARD only' */
    message?: Maybe<Scalars['String']['output']>;
    /** Success flag of coupon payment mode validity API response. Example: true */
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
/** Payment flow types available for a Payment Options */
export declare enum PaymentFlow {
    Custom = "custom",
    Standard = "standard"
}
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
    /** Split payment configuration associated with this payment flow. */
    split_configuration?: Maybe<SplitConfigurationDetail>;
    /** Type of the aggregator. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Payment flow object. */
export type PaymentFlows = {
    __typename?: 'PaymentFlows';
    /**
     * Ajio Dhan Payment flow object.
     * @deprecated Deprecated ajiodhan aggregator.
     */
    ajiodhan?: Maybe<PaymentFlowDetail>;
    /** BQR Razorpay Payment flow object. */
    bqr_razorpay?: Maybe<PaymentFlowDetail>;
    /** CCAvenue Payment flow object. */
    ccavenue?: Maybe<PaymentFlowDetail>;
    /**
     * ePayLater Payment flow object.
     * @deprecated Deprecated epaylater aggregator.
     */
    epaylater?: Maybe<PaymentFlowDetail>;
    /** Fynd Payment flow object. */
    fynd?: Maybe<PaymentFlowDetail>;
    /**
     * JioPay Payment flow object.
     * @deprecated Deprecated jiopay aggregator.
     */
    jiopay?: Maybe<PaymentFlowDetail>;
    /** Juspay Payment flow object. */
    juspay?: Maybe<PaymentFlowDetail>;
    /**
     * Mswipe Payment flow object.
     * @deprecated Deprecated mswipe aggregator.
     */
    mswipe?: Maybe<PaymentFlowDetail>;
    /** PayUbiz Payment flow object. */
    payubiz?: Maybe<PaymentFlowDetail>;
    /** Razorpay Payment flow object. */
    razorpay?: Maybe<PaymentFlowDetail>;
    /**
     * Rupifi Payment flow object.
     * @deprecated Deprecated rupifi aggregator.
     */
    rupifi?: Maybe<PaymentFlowDetail>;
    /** Simpl Payment flow object. */
    simpl?: Maybe<PaymentFlowDetail>;
    /**
     * Stripe Payment flow object.
     * @deprecated Deprecated stripe aggregator.
     */
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
    /** Customer valid mobile number without country code. */
    contact: Scalars['String']['input'];
    /** Currency code. Example: INR */
    currency: Scalars['String']['input'];
    /** Payment gateway customer id. */
    customer_id: Scalars['String']['input'];
    /** EDC machine Unique Identifier. */
    device_id?: InputMaybe<Scalars['String']['input']>;
    /** Customer valid email. */
    email: Scalars['String']['input'];
    /** Unique fynd order id. Example: FY692D2AC45171FB895B */
    merchant_order_id: Scalars['String']['input'];
    /** Payment method. Example: UPI, QR */
    method: Scalars['String']['input'];
    /** Payment gateway order id. Example: order_RmEfzG8cYBme5d */
    order_id: Scalars['String']['input'];
    /** Payment polling timeout if not received response. */
    timeout?: InputMaybe<Scalars['Int']['input']>;
};
/** Payment Initialization Response. */
export type PaymentInitializationResponse = {
    __typename?: 'PaymentInitializationResponse';
    /** Payment gateway name. */
    aggregator: Scalars['String']['output'];
    /** Order ID assigned by the payment gateway's aggregator. */
    aggregator_order_id?: Maybe<Scalars['String']['output']>;
    /** Payable amount. */
    amount?: Maybe<Scalars['Int']['output']>;
    /**
     * Bharat qr image url.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    bqr_image?: Maybe<Scalars['String']['output']>;
    /**
     * Currency code. Example: INR
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    currency?: Maybe<Scalars['String']['output']>;
    /**
     * Payment gateway customer id.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * EDC machine Unique Identifier.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    device_id?: Maybe<Scalars['String']['output']>;
    /** Order id. Example: FY692D2AC45171FB895B */
    merchant_order_id: Scalars['String']['output'];
    /**
     * Payment method. Example: UPI, QR
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    method?: Maybe<Scalars['String']['output']>;
    /** Polling url. */
    polling_url: Scalars['String']['output'];
    /**
     * Payment  id.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    razorpay_payment_id?: Maybe<Scalars['String']['output']>;
    /** Status of the payment. */
    status: PaymentStatusUpdateResponseStatus;
    /**
     * Status code of the payment.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    status_code?: Maybe<Scalars['String']['output']>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
    /** Timeout in seconds. */
    timeout?: Maybe<Scalars['Int']['output']>;
    /** UPI poll url. */
    upi_poll_url?: Maybe<Scalars['String']['output']>;
    /** Payment virtual address. */
    virtual_id?: Maybe<Scalars['String']['output']>;
    /**
     * Customer vpa address.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
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
/** Payment meta including merchant code, type, gateway, and identifier. */
export type PaymentMetaInput = {
    /** Merchant code. Example: 'ICICI' */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Payment gateway. Example: 'Razorpay' */
    payment_gateway?: InputMaybe<Scalars['String']['input']>;
    /** Payment identifier. Example: 'pay_abc123' */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Card type for card payments (e.g., DEBIT, CREDIT). Example: 'DEBIT' */
    type?: InputMaybe<Scalars['String']['input']>;
};
/** Payment method details including meta, mode, name, amount, and extra identifiers. */
export type PaymentMethodInput = {
    /** Amount to be paid using this method. Example: 499.0 */
    amount?: InputMaybe<Scalars['Float']['input']>;
    /** Payment mode (e.g., COD, NB, CARD, UPI). Example: 'UPI' */
    mode: Scalars['String']['input'];
    /** Display name of the payment method. Example: 'Google Pay' */
    name?: InputMaybe<Scalars['String']['input']>;
    /** Payment type/category. Example: 'required' */
    payment?: InputMaybe<Scalars['String']['input']>;
    /** Extra identifiers for payment. Example: { upi_vpa: 'name@upi' } */
    payment_extra_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    /** Payment identifier from gateway. Example: 'pay_abc123' */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Payment meta (merchant code, type, gateway, identifier). */
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
    /** Card number displayed in its masked format. */
    card_number?: Maybe<Scalars['String']['output']>;
    /** Reference identifier for the card. */
    card_reference?: Maybe<Scalars['String']['output']>;
    /** Encrypted token representing the card. */
    card_token?: Maybe<Scalars['String']['output']>;
    /** Type of the card (e.g., debit, credit). */
    card_type?: Maybe<Scalars['String']['output']>;
    /** COD Charges. */
    cod_charges?: Maybe<Scalars['Float']['output']>;
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
    /** Indicates if this payment option is eligible for coupling with other payment options, allowing the user to make multi-method of payment (MOP) transactions. */
    partial_payment_allowed?: Maybe<Scalars['Boolean']['output']>;
    /** Amount remaining to be paid across future splits. */
    remaining_amount?: Maybe<Scalars['Float']['output']>;
    /** Remaining available limit on the card. */
    remaining_limit?: Maybe<Scalars['Float']['output']>;
    /** Number of split payments remaining to be made for this order. */
    remaining_splits?: Maybe<Scalars['Int']['output']>;
    /** Number of retry attempts. */
    retry_count?: Maybe<Scalars['Int']['output']>;
    /** Timeout duration for transactions. */
    timeout?: Maybe<Scalars['Int']['output']>;
    /** Total amount to be paid across all splits. */
    total_amount?: Maybe<Scalars['Float']['output']>;
    /** Total number of split payments configured for this order. */
    total_splits?: Maybe<Scalars['Int']['output']>;
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
    /** Aggregator Details. */
    aggregator_details: Array<Maybe<AggregatorRouteDetail>>;
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
/** Payment default selection configuration. */
export type PaymentSelectionLock = {
    __typename?: 'PaymentSelectionLock';
    /** Default payment mode selected. Example: 'CARD' */
    default_options?: Maybe<Scalars['String']['output']>;
    /** Whether default payment selection is enabled. Example: false */
    enabled?: Maybe<Scalars['Boolean']['output']>;
    /** Payment mode identifier. Example: 'pay_abc123' */
    payment_identifier?: Maybe<Scalars['String']['output']>;
};
/** Payment Status Update Request. */
export type PaymentStatusUpdateRequestInput = {
    /** Name of the payment aggregator (see payment_options.payment_option.aggregator_name from the paymentModeRoutes query). Example: UPI_Razorpay */
    aggregator: Scalars['String']['input'];
    /** Payable amount. */
    amount: Scalars['Int']['input'];
    /** Customer 10 digit valid mobile number. */
    contact: Scalars['String']['input'];
    /** Currency code. Example: INR */
    currency: Scalars['String']['input'];
    /** Payment gateway customer id eg cust_RmEfyKmzkMzPUr */
    customer_id: Scalars['String']['input'];
    /** EDC machine Unique Identifier. */
    device_id?: InputMaybe<Scalars['String']['input']>;
    /** Customer valid email. */
    email: Scalars['String']['input'];
    /** Unique fynd order id eg FY692D2AC45171FB895B */
    merchant_order_id: Scalars['String']['input'];
    /** Unique fynd transaction id eg TR692D2BC451FA77D8GF */
    merchant_transaction_id: Scalars['String']['input'];
    /** Payment method eg UPI */
    method: Scalars['String']['input'];
    /** Payment gateway order id eg order_RmEfzG8cYBme5d */
    order_id: Scalars['String']['input'];
    /** Customer virtual id for QR. Example: qr_Rh6w6bT7erCqvC */
    virtual_id?: InputMaybe<Scalars['String']['input']>;
    /** Customer vpa address eg. success@razopray */
    vpa?: InputMaybe<Scalars['String']['input']>;
};
/** Payment status update response. */
export type PaymentStatusUpdateResponse = {
    __typename?: 'PaymentStatusUpdateResponse';
    /** Payment gateway name. */
    aggregator_name: Scalars['String']['output'];
    /** If payment status is success or failed, frontend should redirects the user to this url */
    redirect_url?: Maybe<Scalars['String']['output']>;
    /**
     * If the payment does not complete in 10 minutes, the order is marked as failed and the retry flag is set to true.
     * This notifies the frontend to prompt the user to retry the payment by generating a new QR code.
     */
    retry: Scalars['Boolean']['output'];
    /** Payment status. Possible values: pending, success, failed. */
    status: PaymentStatusUpdateResponseStatus;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Possible payment status */
export declare enum PaymentStatusUpdateResponseStatus {
    Failed = "failed",
    Pending = "pending",
    Success = "success"
}
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
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
    /**
     * Current phone number is active or not active.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
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
    /** International dial Code. For example, '+91' or '+1'. */
    code?: Maybe<Scalars['String']['output']>;
    /** Name of the Contact SPOC. For example, 'Customer Support' or 'Sales Team'. */
    key?: Maybe<Scalars['String']['output']>;
    /** Phone Number. For example, '9876543210' or '18001234567'. */
    number?: Maybe<Scalars['String']['output']>;
    /** Denotes the type of phone number. For example, 'mobile' or 'landline'. */
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
    /** Country code for contact number, e.g. '+91' (for India). */
    code?: Maybe<Scalars['String']['output']>;
    /** Additional identifier or key for the contact number, e.g. 'support' or 'sales'. */
    key?: Maybe<Scalars['String']['output']>;
    /** Mobile phone number, e.g. '9876543210'. */
    number?: Maybe<Scalars['String']['output']>;
};
/** Types of phone numbers supported. */
export declare enum PhoneTypeEnum {
    PhoneNumber = "phone_number",
    Tollfree = "tollfree"
}
/** Store details for pickup orders including location and availability information. */
export type PickupStoreDetail = {
    __typename?: 'PickupStoreDetail';
    /** The full address of the store. Example: '12, MIDC Rd, Andheri East, Mumbai' */
    address?: Maybe<Scalars['String']['output']>;
    /** The distance between the store and the customer's location. Example: 2.5 */
    distance?: Maybe<Scalars['Float']['output']>;
    /** The name of the store or pickup location. Example: 'Fynd Andheri' */
    name?: Maybe<Scalars['String']['output']>;
    /** The postal code of the store's location. Example: '400059' */
    pincode?: Maybe<Scalars['String']['output']>;
    /** The store's operational hours for each day of the week. Example: [{ weekday: 'Monday', opening: { hour: 9, minute: 0 }, closing: { hour: 21, minute: 0 }, open: true }] */
    store_hours?: Maybe<Array<Maybe<StoreHours>>>;
    /** A unique identifier for the store. Example: 2001 */
    store_id?: Maybe<Scalars['Int']['output']>;
};
/** Provides geographical information for a pincode. */
export type PincodeLatLongData = {
    __typename?: 'PincodeLatLongData';
    /** Latitude and longitude as [longitude, latitude], e.g. [72.854, 19.115]. */
    coordinates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Specifies the type of geographical feature or data, typically "Point" for coordinates in geographic data systems. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the platform sales channel authentication configuration. */
export type PlatformConfig = {
    __typename?: 'PlatformConfig';
    /**
     * Is the application config active or not.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    active?: Maybe<Scalars['Boolean']['output']>;
    /**
     * When was the application platform config document was created.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
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
    /** Forgot password option to be given or not to user. */
    forgot_password?: Maybe<Scalars['Boolean']['output']>;
    /** Unique document ID of the platform config. */
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
    /** Information whether application social logins like Facebook, Google etc are enabled or disabled. */
    social?: Maybe<Social>;
    /** Application credentials like client ID and secret for social logins. */
    social_tokens?: Maybe<SocialTokens>;
    /** Text to be shown at the top of the flash card like login to fynd, login to tira. */
    subtext?: Maybe<Scalars['String']['output']>;
    /**
     * The date and time when the configuration was last updated.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /**
     * Version of the document.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
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
/** Details about price adjustment charges applied to orders. */
export type PriceAdjustmentCharge = {
    __typename?: 'PriceAdjustmentCharge';
    /** Charges amount. For example, `amount` can be set to a ChargeAmount object. */
    amount?: Maybe<ChargeAmount>;
    /** Code defined for charge. For example, `code` can be set to 'sample_code'. */
    code?: Maybe<Scalars['String']['output']>;
    /** Contains distribution logic for price adjustment. For example, `distribution_logic` can be set to a ChargeDistributionLogic object. */
    distribution_logic?: Maybe<ChargeDistributionLogic>;
    /** Display name for charge (charge is unique by the name). For example, `name` can be set to 'Sample Name'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Type defined for charge. For example, `type` can be set to 'shipping'. */
    type?: Maybe<Scalars['String']['output']>;
};
/**
 * Price display mode on PLP (Product Listing Page) for products with multiple sizes.
 * Valid values are min, max, or range.
 */
export declare enum PriceDisplayMode {
    /** Display the maximum (highest) price among the available sizes. */
    Max = "max",
    /** Display the minimum (lowest) price among the available sizes. */
    Min = "min",
    /** Display the full price range (lowest to highest) across sizes. */
    Range = "range"
}
/** Price of single quantity product for seller currency and customer currency. */
export type PriceInfo = {
    __typename?: 'PriceInfo';
    /** Price before promotion/coupon (add-on). Example: 0.0 */
    add_on?: Maybe<Scalars['Float']['output']>;
    /** Currency code for all amounts. Example: 'INR' */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for currency. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Net discount applied on product, contains total discount amount including promotions, coupons and engage discount [excluding inventory discount]. */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Price of the product after applying inventory discount and before applying promotion, coupon and engage discount. Example: 499.0 */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Final price of the product in cart after applying all discounts such as promotion, coupon and engage discount. */
    final_price?: Maybe<Scalars['Float']['output']>;
    /** Original MRP of product. Example: 799.0 */
    marked?: Maybe<Scalars['Float']['output']>;
    /** Selling price of the product. Example: 549.0 */
    selling?: Maybe<Scalars['Float']['output']>;
};
/** Price range information showing minimum and maximum values for cart items. */
export type PriceMinMax = {
    __typename?: 'PriceMinMax';
    /** Maximum price. Example: 799.0 */
    max?: Maybe<Scalars['Float']['output']>;
    /** Minimum price. Example: 499.0 */
    min?: Maybe<Scalars['Float']['output']>;
};
/** Sorting options for product prices. */
export declare enum PriceSort {
    /** Sort by the maximum (highest) price first. */
    Max = "max",
    /** Sort by the minimum (lowest) price first. Default option. */
    Min = "min"
}
/** Defines the strategy type available for a sales channel. */
export declare enum PriceStrategy {
    /** Applies prices set in the price factory */
    PriceFactory = "price_factory",
    /** (default) Applies store-level pricing */
    StorePrices = "store_prices"
}
/** Schema for prices. */
export type Prices = {
    __typename?: 'Prices';
    /** Indicates if the refund amount was added to Fynd Cash. For example, `added_to_fynd_cash` can be set to true. */
    added_to_fynd_cash?: Maybe<Scalars['Boolean']['output']>;
    /** The total amount paid by the customer. Calculated as price_effective + cod_charges + delivery_charge + article_charge - coupon_effective_discount - promotion_effective_discount - referral_credits - cashback - gift_card_amount - employee_discount - loyalty_discount (must be non-negative). */
    amount_paid?: Maybe<Scalars['Float']['output']>;
    /** The rounded-off amount paid by the customer. For example, `amount_paid_roundoff` can be set to 2499.5. */
    amount_paid_roundoff?: Maybe<Scalars['Float']['output']>;
    /** Net amount that needs to be collected: price_effective + cod_charges + delivery_charge - coupon_effective_discount - promotion_effective_discount - referral_credits - cashback - customer credit note - gift card - employee_discount - loyalty_discount - sodexo (where applicable). */
    amount_to_be_collected?: Maybe<Scalars['Float']['output']>;
    /** The amount paid to the brand after subtracting all seller-funded discounts. It represents the brand’s net receivable calculated as: BCA = price_effective - coupon_effective_discount (seller) - promotion_effective_discount (seller). */
    brand_calculated_amount?: Maybe<Scalars['Float']['output']>;
    /** The cashback amount earned. For example, `cashback` can be set to 99.99. */
    cashback?: Maybe<Scalars['Float']['output']>;
    /** The amount of cashback applied. For example, `cashback_applied` can be set to 99.99. */
    cashback_applied?: Maybe<Scalars['Float']['output']>;
    /** The cash on delivery charges, if applicable. For example, `cod_charges` can be set to 99.99. */
    cod_charges?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from coupons. If `coupon_effective_discount` is provided, the accompanying coupon_json payload must not be empty. */
    coupon_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The value of the coupon applied. For example, `coupon_value` can be set to 2499.5. */
    coupon_value?: Maybe<Scalars['Float']['output']>;
    /** The code of the currency used. For example, `currency_code` can be set to 'sample_code'. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** The symbol of the currency used. For example, `currency_symbol` can be set to 'INR'. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** The delivery charge for the order. Included in amount_paid and amount_to_be_collected calculations. */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** Discount = price_marked (MRP) - price_effective; cannot be negative. */
    discount?: Maybe<Scalars['Float']['output']>;
    /**
     * The amount of Fynd credits used. For example, `fynd_credits` can be set to 99.99.
     * @deprecated This field is obsolete.
     */
    fynd_credits?: Maybe<Scalars['Float']['output']>;
    /** The GST tax percentage applied. For example, `gst_tax_percentage` can be set to 0.18. */
    gst_tax_percentage?: Maybe<Scalars['Float']['output']>;
    /** Amount reduced from the payable price when the customer applies loyalty program points while placing the order; also impacts amount_paid and amount_to_be_collected. */
    loyalty_discount?: Maybe<Scalars['Float']['output']>;
    /** The effective price after all adjustments; must not exceed price_marked/MRP. */
    price_effective?: Maybe<Scalars['Float']['output']>;
    /** The original marked price (MRP) of the item; must be greater than or equal to price_effective. */
    price_marked?: Maybe<Scalars['Float']['output']>;
    /** The effective discount from promotions (seller/marketplace) used in BCA and collection calculations. */
    promotion_effective_discount?: Maybe<Scalars['Float']['output']>;
    /** The amount refunded to the customer. For example, `refund_amount` can be set to 2499.5. */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** The amount credited for refund . For example, `refund_credit` can be set to 99.99. */
    refund_credit?: Maybe<Scalars['Float']['output']>;
    /** The transfer price of the item. For example, `transfer_price` can be set to 2499.5. */
    transfer_price?: Maybe<Scalars['Float']['output']>;
    /** Value of Good (VOG). VOG = brand_calculated_amount - GST amount (e.g., gst_fee or summed taxes). */
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
/** Priority levels for various operations. */
export declare enum PriorityEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    Urgent = "urgent"
}
/** Schema representing privacy policy consent information */
export type PrivacyPolicyConsent = {
    __typename?: 'PrivacyPolicyConsent';
    /** When the consent was last updated */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Whether the user has consented to the privacy policy */
    value?: Maybe<Scalars['Boolean']['output']>;
};
/** Detailed information about a product. */
export type Product = {
    __typename?: 'Product';
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<NavigationAction>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<NavigationAction>>>;
    /** Represents a mapping of product categories at different levels. */
    category_map?: Maybe<ProductCategoryMap>;
    /**
     * Identifier for the product channel.
     * @deprecated This field is obsolete.
     */
    channel?: Maybe<Scalars['String']['output']>;
    /** Color of the product, if applicable. */
    color?: Maybe<Scalars['String']['output']>;
    /** The country of origin for the product. */
    country_of_origin?: Maybe<Scalars['String']['output']>;
    /** Custom JSON object for additional product data. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the product for extended product information and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /** Department to which the product belongs. */
    department: ProductDepartment;
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
    /**
     * Indicates if the product is available for tryout.
     * @deprecated This field is obsolete.
     */
    is_tryout?: Maybe<Scalars['Boolean']['output']>;
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
    /** No of boxes required to pack the product. */
    no_of_boxes?: Maybe<Scalars['Int']['output']>;
    /** Price details of the product. */
    price?: Maybe<ProductListingPriceDetails>;
    /** List of bundle/product grouping slugs mapped to the product. */
    product_group_tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Date and time when the product was made available online. */
    product_online_date?: Maybe<Scalars['String']['output']>;
    /** Meta data for promotions associated with the product. */
    promo_meta?: Maybe<Scalars['JSON']['output']>;
    /** The rating of the product. */
    rating?: Maybe<Scalars['Float']['output']>;
    /** The number of ratings the product has received. */
    rating_count?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the product is available for sale. */
    sellable?: Maybe<Scalars['Boolean']['output']>;
    /** SEO metadata for the product. */
    seo?: Maybe<SeoDetails>;
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
    /**
     * Product type or classification.
     * @deprecated This field is obsolete.
     */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the product. */
    uid?: Maybe<Scalars['Int']['output']>;
    /** List of product variants, each representing a specific option of the product (e.g., size, color, or material). */
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
};
/** Detailed information about a product. */
export type ProductCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Detailed information about a product. */
export type ProductSizesArgs = {
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Schema of Action Object to render the product. */
export type ProductAction = {
    __typename?: 'ProductAction';
    /** Redirection Page details from item in cart. */
    page?: Maybe<ProductActionPage>;
    /** Action query schema which includes list of product slugs. Example: { product_slug: ['cotton-tshirt'] } */
    query?: Maybe<ActionQuery>;
    /** Type of action. Example: 'navigate' */
    type?: Maybe<Scalars['String']['output']>;
    /** URL of the product to render. Example: 'https://example.com/p/cotton-tshirt' */
    url?: Maybe<Scalars['String']['output']>;
};
/** Redirection Page details from item in cart */
export type ProductActionPage = {
    __typename?: 'ProductActionPage';
    /** Parameters of the redirection page. Example: { slug: ['cotton-tshirt'] } */
    params?: Maybe<ProductActionParams>;
    /** Entity of page to be redirected on click. Example: 'product' */
    type?: Maybe<Scalars['String']['output']>;
};
/** Parameters of the redirection page */
export type ProductActionParams = {
    __typename?: 'ProductActionParams';
    /** URL-friendly identifiers for the products. Example: ['cotton-tshirt'] */
    slug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Product store information of the product added in cart. */
export type ProductArticle = {
    __typename?: 'ProductArticle';
    /** Custom JSON at article level. Example: { gift_wrap: true } */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Meta details of the article from cart. Example: { source: 'cart-page' } */
    cart_item_meta?: Maybe<Scalars['JSON']['output']>;
    /** Extra metadata for the article. Example: { color: 'Red' } */
    extra_meta?: Maybe<Scalars['JSON']['output']>;
    /** Flag to indicate the item as a separate line in cart. Example: false */
    force_new_line_item?: Maybe<Scalars['Boolean']['output']>;
    /** Selected Fulfillment Option Details. */
    fulfillment_option?: Maybe<FulfillmentOption>;
    /** Gift card details if applied (price, applicable flag, message). Example: { price: 500, applicable: true } */
    gift_card?: Maybe<Scalars['JSON']['output']>;
    /** Unique identifier of the article. Example: { uid: 'ART123' } */
    identifier?: Maybe<Scalars['JSON']['output']>;
    /** Whether the product can be purchased as a gift. It is true if the product is available for gifting and false otherwise. */
    is_gift_visible?: Maybe<Scalars['Boolean']['output']>;
    /** Index of the article in cart. Example: 0 */
    item_index?: Maybe<Scalars['Int']['output']>;
    /** Article metadata. Example: { bundle: false } */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Make-to-order quantity if not in stock. Example: 1 */
    mto_quantity?: Maybe<Scalars['Int']['output']>;
    /** Parent product identifiers. Example: { parent_item_id: 111 } */
    parent_item_identifiers?: Maybe<Scalars['JSON']['output']>;
    /** Provides details about a store where customers can pick up their orders. */
    pickup_store_detail?: Maybe<PickupStoreDetail>;
    /** Article level price details including base and converted prices. Example: { base: { effective: 499 }, converted: { effective: 499 } } */
    price?: Maybe<ArticlePriceInfo>;
    /** List of product grouping tags. Example: ['bundle', 'set'] */
    product_group_tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Quantity of the article added in cart. Example: 2 */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Basic information which provides basic info like uid of any entity like brand or seller and name of the entity. */
    seller?: Maybe<NameInformation>;
    /** Seller identifier used for the product size. Example: 'SELLER-001' */
    seller_identifier?: Maybe<Scalars['String']['output']>;
    /** Size of the article added in cart. Example: 'M' */
    size?: Maybe<Scalars['String']['output']>;
    /** Store information of the store which includes store name, store id and store code. */
    store?: Maybe<StoreInfo>;
    /** A list of article tags. Example: ['express-eligible'] */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Type of the data sent in response. Example: 'article' */
    type?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for item × size × location. Example: 'line_abc123' */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Availability information of the product like deliverable, out of stock, valid product etc. */
export type ProductAvailability = {
    __typename?: 'ProductAvailability';
    /** Product sizes availability. Example: [{ value: 'M', display: 'Medium', is_available: true }] */
    available_sizes?: Maybe<Array<Maybe<ProductSizeDetailsCart>>>;
    /** Whether the product is deliverable. Example: true */
    deliverable?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the product is valid to place the order. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** Quantity available in other stores. Example: 5 */
    other_store_quantity?: Maybe<Scalars['Int']['output']>;
    /** Whether the product is in stock. Example: true */
    out_of_stock?: Maybe<Scalars['Boolean']['output']>;
    /** All available sizes. Example: ['S', 'M', 'L', 'XL'] */
    sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Product sizes availability. */
export type ProductAvailabilitySize = {
    __typename?: 'ProductAvailabilitySize';
    /** Display size of the product. Example: 'Medium' */
    display?: Maybe<Scalars['String']['output']>;
    /** Available flag for this size. Example: true */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Actual value of the size. Example: 'M' */
    value?: Maybe<Scalars['String']['output']>;
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
    l1?: Maybe<NavigationAction>;
    /** Detailing Level 2 Category Action Object. */
    l2?: Maybe<NavigationAction>;
    /** Detailing Level 3 Category Action Object. */
    l3?: Maybe<NavigationAction>;
};
/** Configuration for the Product Change Request feature. */
export type ProductChangeRequestFeatureConfiguration = {
    __typename?: 'ProductChangeRequestFeatureConfiguration';
    /** Indicates whether staff selection is allowed for PCR. Default value is false. */
    staff_selection: Scalars['Boolean']['output'];
};
/** Product comparison response with metadata and comparison attributes. */
export type ProductCompareDetails = {
    __typename?: 'ProductCompareDetails';
    /** Metadata about attributes used for product comparison like specifications, features, and pricing. */
    attributes_metadata?: Maybe<Array<Maybe<Attribute>>>;
    /** Array of products being compared with their details and specifications. */
    items?: Maybe<Array<Maybe<Product>>>;
    /** Additional description or context for the comparison, e.g. 'Compare specifications and features'. */
    subtitle?: Maybe<Scalars['String']['output']>;
    /** Main title for the comparison, e.g. 'iPhone 14 vs Samsung Galaxy S23', 'Laptop Comparison'. */
    title?: Maybe<Scalars['String']['output']>;
};
/** Represents the response for a product listing query, including product details, filters, pagination, and sorting options. */
export type ProductConnection = {
    __typename?: 'ProductConnection';
    /** List of filters available for refining the product listings. */
    filters?: Maybe<Array<Maybe<ProductFilters>>>;
    /** List of product details included in the response. */
    items: Array<ProductListingDetail>;
    /** Pagination details for the product listings. */
    page: PageInfo;
    /** List of sorting options available for the product listings. */
    sort_on?: Maybe<Array<Maybe<ProductSortOn>>>;
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
/** Configuration for product detail features in the sales channel. */
export type ProductDetailFeature = {
    __typename?: 'ProductDetailFeature';
    /**
     * Indicates whether customers can request for a product. Default value is false.
     * @deprecated This field is obsolete.
     */
    request_product?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates whether customers can choose the seller on PDP.
     * @deprecated This field is obsolete.
     */
    seller_selection?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Configuration to show similar products, other products from same seller, category, price range, etc.
     * @deprecated This field is obsolete.
     */
    similar?: Maybe<Array<Maybe<SimilarListItem>>>;
    /**
     * Indicates whether users can update product metadata. Default value is true.
     * @deprecated This field is obsolete.
     */
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
    display?: Maybe<Scalars['String']['output']>;
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
    display?: Maybe<Scalars['String']['output']>;
    /** Format in which the filter value is displayed. */
    display_format?: Maybe<Scalars['String']['output']>;
    /** Whether this filter value is currently selected. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** Logo representing the product or associated data. */
    logo?: Maybe<Media>;
    /** Maximum value of the filter range. */
    max?: Maybe<Scalars['Float']['output']>;
    /** Minimum value for the range filter. */
    min?: Maybe<Scalars['Float']['output']>;
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
    /** The id of the attribute group. */
    id?: Maybe<Scalars['String']['output']>;
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
    /**
     * The ID of the company that owns the product grouping.
     * @deprecated This field is obsolete.
     */
    company_id?: Maybe<Scalars['Int']['output']>;
    /**
     * User details of the creator of the document.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<UserDetails>;
    /**
     * Timestamp of the creation of the document.
     * @deprecated This field is obsolete.
     */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Whether the product grouping is active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** The URL for the logo of the product grouping. */
    logo?: Maybe<Scalars['String']['output']>;
    /** A dictionary containing metadata information. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * User details of the last modifier of the document.
     * @deprecated This field is obsolete.
     */
    modified_by?: Maybe<UserDetails>;
    /**
     * Timestamp of the last modification of the document.
     * @deprecated This field is obsolete.
     */
    modified_on?: Maybe<Scalars['String']['output']>;
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
    /**
     * User details of the verifier of the document, if applicable.
     * @deprecated This field is obsolete.
     */
    verified_by?: Maybe<UserDetails>;
    /**
     * Timestamp of when the document was verified, if applicable.
     * @deprecated This field is obsolete.
     */
    verified_on?: Maybe<Scalars['String']['output']>;
};
/** Product identification codes and industry standard identifiers. */
export type ProductIdentifier = {
    __typename?: 'ProductIdentifier';
    /** Alternative Lookup Product code for retail systems, e.g. 'ALU-XYZ-789'. */
    alu?: Maybe<Scalars['String']['output']>;
    /** European Article Number (EAN) barcode, e.g. '1234567890123'. */
    ean?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** International Standard Book Number for books and publications, e.g. '978-0123456789'. */
    isbn?: Maybe<Scalars['String']['output']>;
    /** Stock Keeping Unit (SKU) for inventory management, e.g. 'SKU-ABC-123'. */
    sku_code?: Maybe<Scalars['String']['output']>;
    /** Universal Product Code (UPC) barcode, e.g. '123456789012'. */
    upc?: Maybe<Scalars['String']['output']>;
};
/** Product images data in different formats. */
export type ProductImage = {
    __typename?: 'ProductImage';
    /** Aspect ratio of the product image (e.g., '16:9'). Example: '1:1' */
    aspect_ratio?: Maybe<Scalars['String']['output']>;
    /** Secure HTTPS URL of the product image. Example: 'https://cdn.example.com/image.jpg' */
    secure_url?: Maybe<Scalars['String']['output']>;
    /** CDN URL for the product image. Example: 'https://cdn.example.com/image.jpg' */
    url?: Maybe<Scalars['String']['output']>;
};
/** Product configuration within a bundle or group setting. */
export type ProductInGroup = {
    __typename?: 'ProductInGroup';
    /** Indicates whether customers can remove this product from the bundle selection. */
    allow_remove?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether this product is automatically added to cart with the bundle. */
    auto_add_to_cart?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether this product is pre-selected by default in the bundle. */
    auto_select?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum quantity allowed for this product in the bundle, e.g. 5, 10, 20. */
    max_quantity: Scalars['Int']['output'];
    /** Minimum quantity required for this product in the bundle, e.g. 1, 2. */
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
    /** Available ladder promotions offers list. Example: [{ id: 'PROMO_L1', offer_text: 'Buy 2 get 10% off' }] */
    available_offers?: Maybe<Array<Maybe<LadderPriceOffer>>>;
    /** Currency information for the ladder price offers including currency code and symbol. Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CurrencyInfo>;
};
/** List of product details included in the response. */
export type ProductListingDetail = {
    __typename?: 'ProductListingDetail';
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** A dictionary of product attributes. */
    attributes?: Maybe<Scalars['JSON']['output']>;
    /** Brand associated with the product. */
    brand?: Maybe<NavigationAction>;
    /** List of product categories associated with the product. */
    categories?: Maybe<Array<Maybe<NavigationAction>>>;
    /** Represents a mapping of product categories at different levels. */
    category_map?: Maybe<ProductCategoryMap>;
    /** Identifier for the product channel. */
    channel?: Maybe<Scalars['String']['output']>;
    /** Color of the product, if applicable. */
    color?: Maybe<Scalars['String']['output']>;
    /** The country of origin for the product. */
    country_of_origin?: Maybe<Scalars['String']['output']>;
    /** Custom JSON object for additional product data. */
    custom_config?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the product listing for extended product details and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Custom metadata fields associated with the product. */
    custom_meta?: Maybe<Array<Maybe<CustomMetaFields>>>;
    /** Schema to define manufacturing time(MTO) for a product that needs to be sold before manufacturing. */
    custom_order?: Maybe<ProductDetailCustomOrder>;
    /** Array of delivery promise options available for the product. */
    delivery_promises?: Maybe<Array<Maybe<DeliveryPromiseItem>>>;
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
    /**
     * Indicates if the product is available for tryout.
     * @deprecated This field is obsolete.
     */
    is_tryout?: Maybe<Scalars['Boolean']['output']>;
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
    /** URL-friendly identifier for the product. */
    slug?: Maybe<Scalars['String']['output']>;
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
    /** Detail of product variants, each representing a specific option of the product (e.g., size, color, or material). */
    variants?: Maybe<Array<Maybe<ProductVariantDetail>>>;
};
/** List of product details included in the response. */
export type ProductListingDetailCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
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
/** Represents the maximum quantity details for an item based on store, seller, or overall availability. */
export type ProductMaxQuantityInfo = {
    __typename?: 'ProductMaxQuantityInfo';
    /** Total quantity available across all stores for all sellers. Example: 25 */
    item?: Maybe<Scalars['Int']['output']>;
    /** Total quantity across all stores for the specified seller. Example: 10 */
    item_seller?: Maybe<Scalars['Int']['output']>;
    /** Total quantity available for a specific store. Example: 5 */
    item_store?: Maybe<Scalars['Int']['output']>;
};
/** Per quantity price of the product. */
export type ProductPrice = {
    __typename?: 'ProductPrice';
    /** Price before promotion/coupon (add-on). Example: 0.0 */
    add_on?: Maybe<Scalars['Float']['output']>;
    /** Currency code of the price. Example: 'INR' */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol of the price. Example: '₹' */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Effective price of the product. Example: 499.0 */
    effective?: Maybe<Scalars['Float']['output']>;
    /** Marked price of the product. Example: 799.0 */
    marked?: Maybe<Scalars['Float']['output']>;
    /** Selling price of the product. Example: 549.0 */
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
    /** Per quantity price of the product. Example: { effective: 499 } */
    base?: Maybe<ProductPrice>;
    /** Per quantity price of the product (converted). Example: { effective: 499 } */
    converted?: Maybe<ProductPrice>;
};
/** Product return policy configuration for the store. */
export type ProductReturnConfiguration = {
    __typename?: 'ProductReturnConfiguration';
    /** Whether customers can return products to the same store where they purchased them. */
    on_same_store?: Maybe<Scalars['Boolean']['output']>;
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
    /** Array of product size seller details with pricing, availability, and seller information. */
    items?: Maybe<Array<Maybe<ProductSizeSeller>>>;
    /** Pagination information including current page, total pages, and navigation details. */
    page: PageInfo;
    /** Available sorting options for organizing seller data by criteria like price, delivery time, or seller rating. */
    sort_on?: Maybe<Array<Maybe<SellerSortOn>>>;
};
/** Product bundle or set configuration details. */
export type ProductSet = {
    __typename?: 'ProductSet';
    /** Total quantity of items included in the product set. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Size breakdown and distribution within the product set. */
    size_distribution?: Maybe<ProductSetDistribution>;
};
/** Distribution details of a product set. */
export type ProductSetDistribution = {
    __typename?: 'ProductSetDistribution';
    /** A list of size distributions in the product set. */
    sizes?: Maybe<Array<Maybe<ProductSetDistributionSize>>>;
};
/** Size distribution details for product sets and bundles. */
export type ProductSetDistributionSize = {
    __typename?: 'ProductSetDistributionSize';
    /** Number of pieces available in this specific size, e.g. 2, 5, 10. */
    pieces?: Maybe<Scalars['Int']['output']>;
    /** Size identifier or label, e.g. 'S', 'M', 'L', 'XL', '32', '34'. */
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
    /** All seller-related identifiers for this size, including primary and non-primary identifiers. */
    all_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The dimensions of the product size. */
    dimension?: Maybe<Dimension>;
    /** Display name of the product size. */
    display?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the product size is available for purchase. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Whether this sku is part of any product bundle */
    is_bundle_item?: Maybe<Scalars['Boolean']['output']>;
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
    /** Additional metadata about product size price, including any custom attributes or information that may be relevant for processing or displaying the product size price. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /**
     * Information about serviceability algorithm.
     * @deprecated This field is obsolete.
     */
    article_assignment?: Maybe<ArticleAssignment>;
    /** This unique identifier is assigned to the specific article. This represents item x size x location. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** Estimated delivery timeframes showing when customers can expect to receive their order. */
    delivery_promise?: Maybe<DeliveryPromiseFormatted>;
    /** Discount information showing amount or percentage savings, e.g. '20%', '₹500 off'. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Discount countdown timer showing time-limited offers and urgency. */
    discount_meta?: Maybe<DiscountMeta>;
    /** Fulfillment options details */
    fulfillment_option?: Maybe<FulfillmentOption>;
    /** Grouped product attributes providing detailed characteristics like color, size, material, and specifications. */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /**
     * Date and time when the inventory was last updated.
     * @deprecated This field is obsolete.
     */
    inventory_updated_on?: Maybe<Scalars['String']['output']>;
    /** Indicates whether Cash on Delivery (COD) payment option is available for this product. */
    is_cod?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the product can be purchased as a gift with gift wrapping and message options. */
    is_gift?: Maybe<Scalars['Boolean']['output']>;
    /** Indicate whether product is servicable or not */
    is_serviceable?: Maybe<Scalars['Boolean']['output']>;
    /** Product category type: 'Standard' for regular items, 'Composite' for bundles, 'Wet' for liquids, 'Digital' for downloads. */
    item_type?: Maybe<Scalars['String']['output']>;
    /** Longitude and latitude coordinates, possibly indicating the location of the store or warehouse where the product is stocked. */
    long_lat?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Attributes specific to the marketplace, such as ratings, reviews, shipping options, and other marketplace-specific details. */
    marketplace_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /**
     * PIN code for which product availability and delivery options are being checked, e.g. 400001, 110001.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The postal code for which the product's availability and delivery options are being checked. */
    postal_code?: Maybe<Scalars['String']['output']>;
    /** Price details of product. Includes currency details, MRP, Selling price. */
    price?: Maybe<ProductStockPrice>;
    /**
     * The price of a single unit of the product. It helps customers understand the cost per item when purchasing multiple units.
     * @deprecated This field is obsolete.
     */
    price_per_piece?: Maybe<ProductStockPrice>;
    /** Price per unit of measurement for products sold in quantities (e.g., price per kilogram, liter, etc.), helping customers compare unit prices. */
    price_per_unit?: Maybe<ProductStockUnitPrice>;
    /** Available quantity of the product in stock. It shows the number of units available for purchase. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Information about the return policy for the product, including conditions, timeframes, and any specific instructions or restrictions. */
    return_config?: Maybe<ReturnConfiguration>;
    /** Seller offering the product, including the seller's name, rating, and other relevant information. */
    seller?: Maybe<Seller>;
    /** Number of sellers offering this product. It indicates the level of competition and availability from different sellers. */
    seller_count?: Maybe<Scalars['Int']['output']>;
    /**
     * Collection or bundle of items that are sold together as a set, detailing the components included in the set.
     * @deprecated This field is obsolete.
     */
    set?: Maybe<ProductSet>;
    /**
     * Special badges or labels assigned to the product, such as "Bestseller," "New Arrival," or "Limited Edition.".
     * @deprecated This field is obsolete.
     */
    special_badge?: Maybe<Scalars['String']['output']>;
    /** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
    store?: Maybe<AvailableStore>;
    /** Details about serviceability attributes. */
    strategy_wise_listing?: Maybe<Array<Maybe<StrategyWiseListing>>>;
    /** Tags of article from which it can be identified. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** The total quantity of the item available across all stores for all sellers. */
    total_available_quantity?: Maybe<Scalars['Int']['output']>;
    /** Trader information for the offered product. */
    trader?: Maybe<Scalars['JSON']['output']>;
};
/** Product size seller details including pricing, availability, and fulfillment information. */
export type ProductSizeSeller = {
    __typename?: 'ProductSizeSeller';
    /** Additional metadata about product size price, including any custom attributes or information that may be relevant for processing or displaying the product size price. */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /**
     * Serviceability algorithm information determining how articles are assigned to fulfill orders.
     * @deprecated This field is obsolete.
     */
    article_assignment?: Maybe<ArticleAssignment>;
    /** Unique identifier for the specific article representing item × size × location combination, e.g. 'ART123_M_WH001'. */
    article_id?: Maybe<Scalars['String']['output']>;
    /** Estimated delivery timeframes showing when customers can expect to receive their order. */
    delivery_promise?: Maybe<DeliveryPromiseFormatted>;
    /** Discount information showing amount or percentage savings, e.g. '20%', '₹500 off'. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Discount countdown timer showing time-limited offers and urgency. */
    discount_meta?: Maybe<DiscountMeta>;
    /** Fulfillment options details */
    fulfillment_option?: Maybe<FulfillmentOption>;
    /** Grouped product attributes providing detailed characteristics like color, size, material, and specifications. */
    grouped_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /**
     * Date and time when the inventory was last updated.
     * @deprecated This field is obsolete.
     */
    inventory_updated_on?: Maybe<Scalars['String']['output']>;
    /** Indicates whether Cash on Delivery (COD) payment option is available for this product. */
    is_cod?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the product can be purchased as a gift with gift wrapping and message options. */
    is_gift?: Maybe<Scalars['Boolean']['output']>;
    /** Indicate whether product is servicable or not */
    is_serviceable?: Maybe<Scalars['Boolean']['output']>;
    /** Product category type: 'Standard' for regular items, 'Composite' for bundles, 'Wet' for liquids, 'Digital' for downloads. */
    item_type?: Maybe<Scalars['String']['output']>;
    /** Longitude and latitude coordinates, possibly indicating the location of the store or warehouse where the product is stocked. */
    long_lat?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Attributes specific to the marketplace, such as ratings, reviews, shipping options, and other marketplace-specific details. */
    marketplace_attributes?: Maybe<Array<Maybe<ProductGroupedAttribute>>>;
    /**
     * PIN code for which product availability and delivery options are being checked, e.g. 400001, 110001.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The postal code for which the product's availability and delivery options are being checked. */
    postal_code?: Maybe<Scalars['String']['output']>;
    /** Price details of product. Includes currency details, MRP, Selling price. */
    price?: Maybe<ProductStockPrice>;
    /**
     * The price of a single unit of the product. It helps customers understand the cost per item when purchasing multiple units.
     * @deprecated This field is obsolete.
     */
    price_per_piece?: Maybe<ProductStockPrice>;
    /** Price per unit of measurement for products sold in quantities (e.g., price per kilogram, liter, etc.), helping customers compare unit prices. */
    price_per_unit?: Maybe<ProductStockUnitPrice>;
    /** Available quantity of the product in stock. It shows the number of units available for purchase. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Information about the return policy for the product, including conditions, timeframes, and any specific instructions or restrictions. */
    return_config?: Maybe<ReturnConfiguration>;
    /** Seller offering the product, including the seller's name, rating, and other relevant information. */
    seller?: Maybe<Seller>;
    /** Number of sellers offering this product. It indicates the level of competition and availability from different sellers. */
    seller_count?: Maybe<Scalars['Int']['output']>;
    /**
     * Collection or bundle of items that are sold together as a set, detailing the components included in the set.
     * @deprecated This field is obsolete.
     */
    set?: Maybe<ProductSet>;
    /**
     * Special badges or labels assigned to the product, such as "Bestseller," "New Arrival," or "Limited Edition.".
     * @deprecated This field is obsolete.
     */
    special_badge?: Maybe<Scalars['String']['output']>;
    /** Identifier or name of the store where the product is available. It helps in identifying the specific location or online store offering the product. */
    store?: Maybe<AvailableStore>;
    /** Details about serviceability attributes. */
    strategy_wise_listing?: Maybe<Array<Maybe<StrategyWiseListing>>>;
    /** Tags of article from which it can be identified. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Trader information for the offered product. */
    trader?: Maybe<Scalars['JSON']['output']>;
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
    /** Customise order-related data for the product sizes. */
    custom_order?: Maybe<Scalars['JSON']['output']>;
    /** Discount information applicable to the product sizes. */
    discount?: Maybe<Scalars['String']['output']>;
    /** Information about the discount countdown timer for a product. */
    discount_meta?: Maybe<DiscountMeta>;
    /** Whether the product supports multiple sizes. */
    multi_size?: Maybe<Scalars['Boolean']['output']>;
    /** Number of boxes required for packaging the product. */
    no_of_boxes?: Maybe<Scalars['Int']['output']>;
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
    /** Tags associated with the product sizes. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** A flexible object that holds additional teaser tag information. */
    teaser_tag?: Maybe<Scalars['JSON']['output']>;
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
/** Unit price details for products sold by weight, volume, or measurement. */
export type ProductStockUnitPrice = {
    __typename?: 'ProductStockUnitPrice';
    /** Currency code for the unit price, e.g. 'INR', 'USD', 'EUR'. */
    currency_code?: Maybe<Scalars['String']['output']>;
    /** Currency symbol for display, e.g. '₹', '$', '€'. */
    currency_symbol?: Maybe<Scalars['String']['output']>;
    /** Price per unit of measurement, e.g. 150.00 for ₹150 per kg. */
    price?: Maybe<Scalars['Float']['output']>;
    /** Unit of measurement, e.g. 'kg', 'liter', 'meter', 'piece'. */
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
    /** The total number of product variants available. */
    total?: Maybe<Scalars['Int']['output']>;
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
    /** Navigation action configuration for page routing and user interactions. */
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
/**
 * Defines filters for selecting specific products or line items.
 * Example: `{ "identifier": "21500347", "line_number": 1 }`
 */
export type ProductsDataUpdatesFiltersInput = {
    /** A unique string that serves as the product’s identifier, such as a SKU, barcode, or another distinct code. This ensures the product is correctly identified and distinguished from other items in the system. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. For example, 1. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
};
/**
 * Defines structure for updating bag or product-level data.
 * - The fields to update (via `data`)
 * - The product selection criteria (via `filters`)
 *
 * Example: `{ "filters": [{}], "data": { "meta": { "courier_partner_name": "BVC Logistics" } } }`
 */
export type ProductsDataUpdatesInput = {
    /** Information about the data to be updated. */
    data?: InputMaybe<Scalars['JSON']['input']>;
    /** Criteria applied to filter the products. */
    filters?: InputMaybe<Array<InputMaybe<ProductsDataUpdatesFiltersInput>>>;
};
/**
 * Defines details of individual products or line items.
 * Used to specify which product(s) a transition or update applies to.
 * Example: `{ "identifier": "21500347", "line_number": 1, "quantity": 1 }`
 */
export type ProductsInput = {
    /** A unique string that serves as the product’s identifier, such as a SKU, barcode, or another distinct code. This ensures the product is correctly identified and distinguished from other items in the system. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. For example, 1. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
    /** The quantity of the product. For example, 1. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
/** Response schema for product size price with fulfillment options. */
export type ProductsPriceWithFulfillmentOption = {
    __typename?: 'ProductsPriceWithFulfillmentOption';
    /** Array of product size price details including fulfillment options like delivery, pickup, and shipping methods. */
    items?: Maybe<Array<Maybe<ProductSizePrice>>>;
};
/**
 * Specifies the actual reason details at the product level.
 * Example:{ "reason_id": "507f1f77bcf86cd799439011", "reason_text": "Damaged item" }
 */
export type ProductsReasonsDataInput = {
    /** The unique identifier for the reason. For values please refer to the <a href='/partners/commerce/sdk/2.11.0/graphql/application/order/queries/shipment'>shipment.shipment_reasons.</a>. */
    reason_id?: InputMaybe<Scalars['Int']['input']>;
    /** The text describing the reason. For example, 'Damaged item' or 'Wrong size'. */
    reason_text?: InputMaybe<Scalars['String']['input']>;
};
/**
 * Defines filters for selecting specific product(s) or bag item(s)
 * to which the reason applies.
 * Example:{ "identifier": "21500347", "line_number": 1, "quantity": 1 }
 */
export type ProductsReasonsFiltersInput = {
    /** The unique identifier for the product. For example, '21500347'. */
    identifier?: InputMaybe<Scalars['String']['input']>;
    /** The specific line item of bag. For example, 1. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
    /** The quantity of the product. For example, 1. */
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
/**
 * Defines the reason data structure for bag/product-level actions.
 * - The reason details (via `data`)
 * - The filter conditions to identify which products are affected.
 * Example:
 * `{ "filters": [{ "identifier": "21500347", "line_number": 1 }], "data": {"reason_id": "507f1f77bcf86cd799439011","reason_text": "Wrong size"} }`
 */
export type ProductsReasonsInput = {
    /** Details of the reason for the product-level action. */
    data?: InputMaybe<ProductsReasonsDataInput>;
    /** Filters used to select specific products/bags for which the reason applies. */
    filters?: InputMaybe<Array<InputMaybe<ProductsReasonsFiltersInput>>>;
};
/** Describes the response on successful user profile update. */
export type ProfileEditSuccess = {
    __typename?: 'ProfileEditSuccess';
    /** User's consent information including privacy policy acceptance */
    consent?: Maybe<UserConsent>;
    /** The country specific prefix for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Email ID of user. */
    email?: Maybe<Scalars['String']['output']>;
    /** Information about the operation's result. */
    message?: Maybe<Scalars['String']['output']>;
    /** The user's mobile number without the country code. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** A token used for registration purposes will be sent when user is not registered. */
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
    /** Whether to send a link to verify the registered email ID of the user. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to send a OTP to verify the registered email ID of the user. */
    verify_email_otp?: Maybe<Scalars['Boolean']['output']>;
    /** Whether to send a OTP to verify the registered phone of the user. */
    verify_mobile_otp?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema for promise. */
export type Promise = {
    __typename?: 'Promise';
    /** Indicates whether the promise details should be shown. For example, `show_promise` can be set to true. */
    show_promise?: Maybe<Scalars['Boolean']['output']>;
    /** Schema for time stamp data. For example, `timestamp` can be set to a TimeStampData object. */
    timestamp?: Maybe<TimeStampData>;
};
/** Min and Max Delivery promise formatted timestamp. */
export type PromiseFormatted = {
    __typename?: 'PromiseFormatted';
    /** Maximum Delivery promise formatted timestamp. Example: '9 Oct, 6:00 PM' */
    max?: Maybe<Scalars['String']['output']>;
    /** Minimum Delivery promise formatted timestamp. Example: '8 Oct, 10:00 AM' */
    min?: Maybe<Scalars['String']['output']>;
};
/** Shipment level promise times. */
export type PromiseTimestamp = {
    __typename?: 'PromiseTimestamp';
    /** Maximum Promise for the shipment (epoch seconds). Example: 1702137600 */
    max?: Maybe<Scalars['Float']['output']>;
    /** Minimum delivery promise time for the shipment (epoch seconds). Example: 1702051200 */
    min?: Maybe<Scalars['Float']['output']>;
};
/** Loyalty points message data. */
export type PromoMeta = {
    __typename?: 'PromoMeta';
    /** Loyalty points message, e.g., how many applied and remaining. Example: 'You’ll earn 56 points from this order!' */
    message?: Maybe<Scalars['String']['output']>;
};
/** Promotion group classification for offers. */
export declare enum PromotionGroup {
    /** Cart-level promotion group. */
    Cart = "cart",
    /** Contract-level promotion group. */
    Contract = "contract",
    /** External price adjustment promotion group. */
    ExternalPriceAdjustment = "external_price_adjustment",
    /** Ladder price promotion group. */
    LadderPrice = "ladder_price",
    /** Limited timer promotion group (Hero Banner / Deal of the Day). */
    LimitedTimer = "limited_timer",
    /** Product-level promotion group. */
    Product = "product"
}
/** Promotion offer details includes promotion id, buy rules, offer text, promotion type, promotion name, promotion group, discount rules, free gift items list and promo description. */
export type PromotionOffer = {
    __typename?: 'PromotionOffer';
    /** Buy rules of promotion. Example: { item_criteria: { brands: [123] } } */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Additional custom attributes associated with the promotion offer for extended promotional data and configuration */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /** Offer details including T&C. Example: '10% off with CARD payments' */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of promotion. Example: { offer: { percentage: 10 } } */
    discount_rules?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Free gift items details. Example: [{ item_id: 987654, item_name: 'Tote Bag' }] */
    free_gift_items?: Maybe<Array<Maybe<FreeGiftItems>>>;
    /** Promotion id. Example: 'PROMO_PAY_10' */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title. Example: '10% off with Card' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Promotion group. Example: 'payment' */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** ISO datetime for promotion end date. Example: '2025-12-31T23:59:59Z' */
    valid_till?: Maybe<Scalars['String']['output']>;
};
/** Promotion offer details includes promotion id, buy rules, offer text, promotion type, promotion name, promotion group, discount rules, free gift items list and promo description. */
export type PromotionOfferCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Promotion offer response detail which incluedes available promotions list. */
export type PromotionOffersResponse = {
    __typename?: 'PromotionOffersResponse';
    /** Available promotion details (id, name, buy/discount rules, validity dates). Example: [{ id: 'PROMO1', offer_text: '10% off' }] */
    available_promotions?: Maybe<Array<Maybe<PromotionOffer>>>;
};
/** Contains List of promotions data which are applicable on cart/product. */
export type PromotionPaymentOffer = {
    __typename?: 'PromotionPaymentOffer';
    /**
     * Application id on which the promotion was created. Example: 'app_123'
     * @deprecated This field is obsolete
     */
    application_id?: Maybe<Scalars['String']['output']>;
    /** Buy rules of promotions. Example: { cart_conditions: { cart_total: { min: 999 } } } */
    buy_rules?: Maybe<Scalars['JSON']['output']>;
    /** Price basis used for calculating promotion (effective/marked). Example: 'effective' */
    calculate_on?: Maybe<Scalars['String']['output']>;
    /** Offer details including T&C. Example: '10% off with CARD payments' */
    description?: Maybe<Scalars['String']['output']>;
    /** Discount rules of promotions. Example: { offer: { percentage: 10 } } */
    discount_rules?: Maybe<Scalars['JSON']['output']>;
    /** Promotion id of the promotion. Example: 'PROMO_PAY_10' */
    id?: Maybe<Scalars['String']['output']>;
    /** Offer title of the promotion. Example: '10% off with Card' */
    offer_text?: Maybe<Scalars['String']['output']>;
    /** Promotion group. Example: 'payment' */
    promotion_group?: Maybe<Scalars['String']['output']>;
    /** Name of the promotion. Example: 'Card Discount' */
    promotion_name?: Maybe<Scalars['String']['output']>;
    /** Promotion type. Example: 'percentage' */
    promotion_type?: Maybe<Scalars['String']['output']>;
};
/** Returns an array containing the available offers (if exists) on product via promotions. Refer `PromotionPaymentOffersResponse` for more details. */
export type PromotionPaymentOffers = {
    __typename?: 'PromotionPaymentOffers';
    /** List of promotions data applicable on cart/product. Example: [{ id: 'PROMO_PAY_10' }] */
    promotions?: Maybe<Array<Maybe<PromotionPaymentOffer>>>;
    /** Success flag of get payment offers API response. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. */
export type Promotions = {
    __typename?: 'Promotions';
    /** Available promotion details for the product. Example: [{ id: 'PROMO1', offer_text: '10% off' }] */
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
/** Actions that can be performed on push tokens. */
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
    /** Indicates whether sharing mobile app via QR code is allowed. Default value is false. */
    application: Scalars['Boolean']['output'];
    /** Indicates whether sharing collections via QR code is allowed. Default value is false. */
    collections: Scalars['Boolean']['output'];
    /** Indicates whether sharing products via QR code is allowed. Default value is false. */
    products: Scalars['Boolean']['output'];
};
/** Query operations for user information and profile management. */
export type Query = {
    __typename?: 'Query';
    _empty?: Maybe<Scalars['String']['output']>;
    /** Get a specific customer address stored in the system by providing its unique identifier. This API provides detailed information about the address, including the recipient's name, address, city, postal code, and other relevant details. */
    address?: Maybe<Address>;
    /** List all addresses saved by the customer, simplifying the checkout process by offering pre-saved address options for delivery. */
    addresses?: Maybe<Addresses>;
    /** Get aggregator secret key of all payment gateways utilized for payments when using the SDK for the payment gateway. */
    aggregatorsConfig?: Maybe<AggregatorsConfigDetail>;
    /** Returns all countries available for shipping, as configured in the sales channel's delivery zones. Use this to list countries where shipping or address selection is required for integration. */
    allCountries?: Maybe<CountryList>;
    /** Get comprehensive configuration details of the current sales channel including features, domains, and settings. */
    applicationConfiguration?: Maybe<ApplicationConfiguration>;
    /** Query to get details about sales channel content like blog, faq, faqCategories etc. Returns all available content types for the sales channel. */
    applicationContent?: Maybe<ApplicationContent>;
    /** Get the theme configuration and template details of a theme applied to the application. */
    appliedTheme?: Maybe<ThemeDetail>;
    /** Get the list of attributes definition. */
    attributesDefinition?: Maybe<UserAttributesDefinition>;
    /** Get information related to a specific blog such as it's contents, author, publish date, SEO related information. */
    blog?: Maybe<Blog>;
    /** Get comprehensive metadata of a specific brand including name, description, logo, banner, and other brand details. You can get slug value from the query brands. */
    brand?: Maybe<BrandDetail>;
    /** List all available brands with filtering options by department and pagination support. You can get the available departments from the query departments. */
    brands?: Maybe<BrandConnection>;
    /** List offer discounts with information about quantity and seller. One offer is marked with a "best" flag, indicating it as the best offer among the list. Either pass uid/item_id or slug. */
    bulkDiscountOffers?: Maybe<BulkDiscountOffers>;
    bundleItems?: Maybe<BundleItems>;
    bundlesByChild?: Maybe<BundlesByChild>;
    /** Get details of a cart linked to a specific customer using a unique cart ID. It offers an overview of the items, quantities, prices, and other relevant information associated with the cart. */
    cart?: Maybe<Cart>;
    /** Get shipment details for the items in a cart, specific to the selected address. Shipment details include delivery promises, seller information, item details, and other relevant information. */
    cartShipmentDetails?: Maybe<CartShipmentsResponse>;
    /** List all available product categories organized by department with hierarchical structure and filtering options. You can get the available departments from the query departments. */
    categories?: Maybe<Categories>;
    /** Get comprehensive information about a specific product category including metadata, hierarchy, name, logo, banner, and related details. You can get slug value from the query categories. */
    category?: Maybe<Category>;
    /** Get comprehensive details about a specific collection including metadata, products, and configuration. You can get slug value from the query collections. */
    collection?: Maybe<CollectionDetail>;
    /** Fetch products and items within a specific collection with advanced filtering, sorting, and pagination options. You can get slug value from the query collections. */
    collectionItems?: Maybe<CollectionItems>;
    /** List curated product collections with advanced filtering options based on tags, names, and collection types. */
    collections?: Maybe<CollectionConnection>;
    /**
     * List of supported countries
     * @deprecated Not required. Use allCountries instead
     */
    countries?: Maybe<CountryConnection>;
    /** Get details about a particular country and its address format customized for different business scenarios. */
    country?: Maybe<CountryDetail>;
    /** List all available coupons that customer can apply to their carts. It provides details about each coupon, including its code, discount amount, and applicable conditions. */
    coupons?: Maybe<Coupons>;
    /** List all available currencies supported by the platform with their details like codes, symbols, and status. */
    currencies?: Maybe<Array<Maybe<Currency>>>;
    /** Get detailed currency configuration for a specific currency by its ID, including decimal digits, country info, and active status. */
    currency?: Maybe<Currency>;
    /** Generic query to get custom fields for any resource type(s). Maximum 100 resourceIds and 100 namespaces are supported at a time. */
    customFieldsByResource: CustomFieldResult;
    /** Get the consent provided by the user for receiving communication. */
    customerCommunicationConsent?: Maybe<CommunicationConsent>;
    /** Get delivery promises for both global and store levels based on a specific locality type. */
    deliveryPromise?: Maybe<DeliveryPromise>;
    /** List all departments available in the catalog with their identifiers and basic information. */
    departments?: Maybe<Array<Maybe<Department>>>;
    /** List all products eligible for the given offer. Returns a paginated list of products that can be used with the specified offer. At least one of offerCode or offerId must be provided. offerCode takes priority */
    eligibleOfferProducts?: Maybe<EligibleProductsResponse>;
    /** Get a specific FAQ using its slug identifier. */
    faq?: Maybe<Faq>;
    /** Get a specific FAQ category and its details using its slug identifier. */
    faqCategory?: Maybe<CategoryBySlug>;
    /** Get all FAQs belonging to a specific category using the category slug. */
    faqsByCategory?: Maybe<FaQs>;
    /** Get the user's personalized list of followed products, brands, or collections with pagination. */
    followedListing?: Maybe<FollowListing>;
    /** Get the total number of users following a specific collection, brand, or product. */
    followerCount?: Maybe<FollowerCount>;
    /**
     * Get a list of fulfillment options for the specified product and store for that sales channel.
     * @deprecated Not required. Use productsPriceWithFulfillmentOption instead
     */
    fulfillmentOption?: Maybe<FulfillmentOptionList>;
    /** Get list of stores for a fulfillment option of that sales-channel. */
    fulfillmentOptionStores?: Maybe<FulfillmentOptionStores>;
    /** List fulfillment options available for a specific product at the sales channel. */
    fulfillmentOptions?: Maybe<FulfillmentOptions>;
    /** Get refund modes for a shipment. */
    getRefundModes?: Maybe<RefundOptionsResponse>;
    /** Get refund modes and refund amount breakup for a shipment. */
    getRefundModesWithPriceBreakUp?: Maybe<RefundOptionsWithPriceBreakup>;
    /** List stores that currently have specified products in stock with location-based filtering options. */
    inStockLocations?: Maybe<StockLocations>;
    /** Get application translation languages. Returns all available languages configured for the application, including locale codes, display names, and direction settings. */
    languages?: Maybe<Array<Maybe<Languages>>>;
    /**
     * Retrieves a list of geographical localities (such as countries, states, cities, sectors, or pincodes) based on the provided filters.
     * Supports hierarchical queries, making it suitable for address workflows and system integrations. These hierarchies can be obtained using the country query.
     *
     * Example use cases:
     * - To retrieve all states in India: set `locality = state`, `country = "IN"`
     * - To retrieve all cities in Andhra Pradesh: set `locality = city`, `country = "IN"`, `state = "ANDHRA_PRADESH"` (use the display_name or name of the state)
     * - To retrieve all pincodes in Hyderabad: set `locality = pincode`, `country = "IN"`, `city = "Hyderabad"` (use the display_name or name of the city)
     *
     * Workflow:
     * 1. Fetch all states for a country.
     * 2. Use the state’s display_name or name from the previous response to fetch its cities.
     * 3. Use the city’s display_name or name from the previous response to fetch its pincodes.
     */
    localities?: Maybe<LocalityConnection>;
    /** Get detailed geographical data for a specific locality, such as a pincode. For example, for a pincode value of 400603, the service returns its parent locations, including city, state, and country details. */
    locality?: Maybe<Locality>;
    /** Get order details such as tracking details, shipment, store information using Fynd Order ID. For example, orderId: 'FY63C1FBA80195F734C0'. */
    order?: Maybe<Order>;
    /** Get all payment transactions for an order, ordered by creation time ascending. */
    orderTransactions?: Maybe<OrderTransactionDetail>;
    /** Get all orders associated with a customer account. Returns paginated list of orders with filters. */
    orders?: Maybe<OrderConnection>;
    /** Get detailed information for a specific marketing page using its slug. */
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
    /** Get comprehensive product details including pricing, attributes, specifications, availability, and metadata. You can get slug value from the query products. */
    product?: Maybe<Product>;
    /**
     * Get product bundles and groupings associated with a specific product for cross-selling and upselling. You can get slug value from the query products.
     * @deprecated This query is obsolete.
     */
    productBundles?: Maybe<ProductBundle>;
    /** Compare multiple products side-by-side with detailed attribute and specification analysis. You can get slug value from the query products. */
    productComparison?: Maybe<ProductCompareDetails>;
    /** Get ladder offers associated for the items in the cart. Ladder offers provide discounts or special pricing based on item quantity, allowing users to benefit from bulk purchases or promotional deals. */
    productLadderPromotion?: Maybe<ProductLadderPromotion>;
    /** Get detailed pricing information for a specific product size across different selling locations and fulfillment options. You can get slug and size value from the query products. */
    productPrice?: Maybe<ProductSizePrice>;
    /** List all sellers and stores offering a specific product with pricing, availability, and delivery options. You can get slug and size value from the query products. */
    productSellers?: Maybe<ProductSellers>;
    /** Search and list products with advanced filtering, sorting, and pagination options including brand, category, price range, and more. */
    products?: Maybe<ProductConnection>;
    /** Get comprehensive pricing with multiple fulfillment options for a product size across various selling locations. You can get slug and size value from the query products. */
    productsPriceWithFulfillmentOption?: Maybe<ProductsPriceWithFulfillmentOption>;
    /** List top 5 payment offers available for current product. */
    promotionPaymentOffers?: Maybe<PromotionPaymentOffers>;
    /** List all promotional offers available for the items in the cart, including details such as offer text, unique promotion ID, and validity period. Either pass slug of the product or pass cart_id. */
    promotions?: Maybe<Promotions>;
    /** Get the redirect URL for a payment aggregator to complete the payment process on the aggregator's page. */
    redirectToAggregator?: Maybe<RedirectToAggregatorDetail>;
    /** Get Refund details. */
    refund?: Maybe<Refund>;
    /** Search for products, brands, or categories with autocomplete suggestions and intelligent matching. */
    searchProduct?: Maybe<SearchProduct>;
    /**
     * Active SEO JSON-LD markup schema templates for the sales channel. Pass
     * one or more page types to get the OR-union across them (e.g. `[HOME]`,
     * `[BRAND, CATEGORY]`). Omitting `pageTypes` or passing `[]` returns
     * templates for every page type.
     */
    seoMarkupSchemas: Array<SeoMarkupSchema>;
    /** Get cart items from the shared cart link based on unique token. */
    sharedCartDetails?: Maybe<SharedCartItems>;
    /** Get shipment details such as price breakup, tracking details, store information, etc. using Shipment ID. For example, shipmentId: '16736576489251696245'. */
    shipment?: Maybe<Shipment>;
    /** Get previously created short link using its hash identifier. */
    shortLink?: Maybe<ShortLink>;
    /** Get comprehensive details about a specific store including address, contact information, timing, and services based on its location ID. */
    store?: Maybe<Store>;
    /** List all stores associated with the sales channel with filtering options by location, city, and search queries. */
    stores?: Maybe<StoreConnection>;
    /** Get customer support details including custom forms and ticket information. */
    support?: Maybe<Support>;
    /** Get theme details including applied theme, preview theme, theme pages, and configuration. */
    theme?: Maybe<Theme>;
    /** Get user details including login status, active sessions, and password configuration. */
    user?: Maybe<User>;
    /** Get the list of user attributes. */
    userAttributes?: Maybe<UserAttributes>;
    /** Check whether user is already registered or not to the sales channel. */
    userExists?: Maybe<UserExists>;
    /** Validate the applicability of a coupon code for the selected payment mode for the existing cart. This ensures the coupon's validity before proceeding with the payment process, enhancing user experience and preventing potential errors during transactions. */
    validateCoupon?: Maybe<CouponValidate>;
};
/** Query operations for user information and profile management. */
export type QueryAddressArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['String']['input'];
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryAggregatorsConfigArgs = {
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    xapitoken?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryAttributesDefinitionArgs = {
    customerEditable?: InputMaybe<Scalars['Boolean']['input']>;
    encrypted?: InputMaybe<Scalars['Boolean']['input']>;
    excludingIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isLocked?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    pinOrder?: InputMaybe<Scalars['Int']['input']>;
    pinned?: InputMaybe<Scalars['Boolean']['input']>;
    registrationEnabled?: InputMaybe<Scalars['Boolean']['input']>;
    registrationType?: InputMaybe<Array<InputMaybe<UserAttributeRegistrationType>>>;
    slug?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<AttributeType>;
};
/** Query operations for user information and profile management. */
export type QueryBlogArgs = {
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    root_id?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryBrandArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryBrandsArgs = {
    department?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryBulkDiscountOffersArgs = {
    articleId?: InputMaybe<Scalars['String']['input']>;
    itemId?: InputMaybe<Scalars['Int']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    uid?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryBundleItemsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryBundlesByChildArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryCartArgs = {
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    includeAllItems?: InputMaybe<Scalars['Boolean']['input']>;
    includeBreakup?: InputMaybe<Scalars['Boolean']['input']>;
    includeCodCharges?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryCartShipmentDetailsArgs = {
    addressId?: InputMaybe<Scalars['String']['input']>;
    areaCode?: InputMaybe<Scalars['String']['input']>;
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    orderType?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryCategoriesArgs = {
    department?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryCategoryArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryCollectionArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryCollectionItemsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filterQuery?: InputMaybe<Scalars['String']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
    sortOn?: InputMaybe<Sort_On>;
};
/** Query operations for user information and profile management. */
export type QueryCollectionsArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
/** Query operations for user information and profile management. */
export type QueryCountriesArgs = {
    onboarding?: InputMaybe<Scalars['Boolean']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryCountryArgs = {
    countryIsoCode: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryCouponsArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    productSlug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryCurrencyArgs = {
    id: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryCustomFieldsByResourceArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
    resource: Scalars['String']['input'];
    resourceId?: InputMaybe<Scalars['String']['input']>;
    resourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** Query operations for user information and profile management. */
export type QueryDeliveryPromiseArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryEligibleOfferProductsArgs = {
    offerCode?: InputMaybe<Scalars['String']['input']>;
    offerId?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryFaqArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFaqCategoryArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFaqsByCategoryArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFollowedListingArgs = {
    collectionType: Scalars['String']['input'];
    pageId?: InputMaybe<Scalars['String']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryFollowerCountArgs = {
    collectionId: Scalars['String']['input'];
    collectionType: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFulfillmentOptionArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFulfillmentOptionStoresArgs = {
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryFulfillmentOptionsArgs = {
    productSlug: Scalars['String']['input'];
    storeID?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryGetRefundModesArgs = {
    lineNumbers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryGetRefundModesWithPriceBreakUpArgs = {
    lineNumbers?: InputMaybe<Array<InputMaybe<ShipmentLineItem>>>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryInStockLocationsArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    latitude?: InputMaybe<Scalars['Float']['input']>;
    longitude?: InputMaybe<Scalars['Float']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    range?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryLocalitiesArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    locality: LocalityType;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sector?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryLocalityArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    locality: LocalityEnum;
    localityValue: Scalars['String']['input'];
    sector?: InputMaybe<Scalars['String']['input']>;
    state?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryOrderArgs = {
    orderId: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryOrderTransactionsArgs = {
    orderId: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryOrdersArgs = {
    endDate?: InputMaybe<Scalars['String']['input']>;
    endDatetime?: InputMaybe<Scalars['String']['input']>;
    fromDate?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    startDate?: InputMaybe<Scalars['String']['input']>;
    startDatetime?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<Scalars['Int']['input']>;
    toDate?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryPageArgs = {
    rootId?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryPaymentLinkDetailArgs = {
    paymentLinkId?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryPaymentModeRoutesArgs = {
    amount: Scalars['Float']['input'];
    cardReference?: InputMaybe<Scalars['String']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    displaySplit?: InputMaybe<Scalars['Boolean']['input']>;
    fulfillmentOption?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    orderId?: InputMaybe<Scalars['String']['input']>;
    pincode?: InputMaybe<Scalars['String']['input']>;
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    userDetails?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryPosPaymentModeRoutesArgs = {
    amount: Scalars['Int']['input'];
    cardreference?: InputMaybe<Scalars['String']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    displaySplit?: InputMaybe<Scalars['Boolean']['input']>;
    orderId?: InputMaybe<Scalars['String']['input']>;
    orderType: Scalars['String']['input'];
    pincode?: InputMaybe<Scalars['String']['input']>;
    refresh?: InputMaybe<Scalars['Boolean']['input']>;
    userDetails?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductArgs = {
    slug: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryProductBundlesArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductComparisonArgs = {
    slug: Array<InputMaybe<Scalars['String']['input']>>;
};
/** Query operations for user information and profile management. */
export type QueryProductLadderPromotionArgs = {
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    promotionId?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
    storeId?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductPriceArgs = {
    fulfillmentOptionSlug?: InputMaybe<Scalars['String']['input']>;
    moq?: InputMaybe<Scalars['Int']['input']>;
    pincode?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductSellersArgs = {
    fulfillmentOptionSlug?: InputMaybe<Scalars['String']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    strategy?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    enableFilter?: InputMaybe<Scalars['Boolean']['input']>;
    filterQuery?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    pageType?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sortOn?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryProductsPriceWithFulfillmentOptionArgs = {
    fulfillmentOptionSlug?: InputMaybe<Scalars['String']['input']>;
    moq?: InputMaybe<Scalars['Int']['input']>;
    pincode?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
    slug: Scalars['String']['input'];
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryPromotionPaymentOffersArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    uid?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryPromotionsArgs = {
    autoApply?: InputMaybe<Scalars['Boolean']['input']>;
    cartId?: InputMaybe<Scalars['String']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    promotionGroup?: InputMaybe<Scalars['String']['input']>;
    promotionType?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    storeId?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryRedirectToAggregatorArgs = {
    aggregator?: InputMaybe<Scalars['String']['input']>;
    source?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QuerySearchProductArgs = {
    query: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QuerySeoMarkupSchemasArgs = {
    pageTypes?: InputMaybe<Array<PageType>>;
};
/** Query operations for user information and profile management. */
export type QuerySharedCartDetailsArgs = {
    token: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryShipmentArgs = {
    shipmentId: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryShortLinkArgs = {
    hash: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryStoreArgs = {
    locationId: Scalars['Int']['input'];
};
/** Query operations for user information and profile management. */
export type QueryStoresArgs = {
    city?: InputMaybe<Scalars['String']['input']>;
    latitude?: InputMaybe<Scalars['Float']['input']>;
    longitude?: InputMaybe<Scalars['Float']['input']>;
    pageNo?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    query?: InputMaybe<Scalars['String']['input']>;
    range?: InputMaybe<Scalars['Int']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryThemeArgs = {
    themeId: Scalars['String']['input'];
};
/** Query operations for user information and profile management. */
export type QueryUserAttributesArgs = {
    slug?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryUserExistsArgs = {
    q?: InputMaybe<Scalars['String']['input']>;
};
/** Query operations for user information and profile management. */
export type QueryValidateCouponArgs = {
    addressId?: InputMaybe<Scalars['String']['input']>;
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
    /** The text displayed for the question. For example, `display_name` can be set to 'Sample Name'. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the question. For example, `id` can be set to 1. */
    id?: Maybe<Scalars['Int']['output']>;
};
/** Price raw breakup of the cart which denotes cod charge, convenience fee, coupon amount, delivery charge, discount, loyalty points, gift card, gst charge, etc. */
export type RawBreakup = {
    __typename?: 'RawBreakup';
    /** Cod charge value applied to cart (applies when payment mode is COD). Example: 50.0 */
    cod_charge?: Maybe<Scalars['Float']['output']>;
    /** Convenience fee amount applied to cart. Example: 19.0 */
    convenience_fee?: Maybe<Scalars['Float']['output']>;
    /** Coupon amount applied to cart. Example: 150.0 */
    coupon?: Maybe<Scalars['Float']['output']>;
    /** Delivery charge applied to cart. Example: 0.0 */
    delivery_charge?: Maybe<Scalars['Float']['output']>;
    /** Discount amount received on cart. Example: 350.0 */
    discount?: Maybe<Scalars['Float']['output']>;
    /** Engage points amount applied on the cart. Example: 56.0 */
    engage_amount?: Maybe<Scalars['Float']['output']>;
    /** Engage discount amount applied on the cart as payment mode. Example: 56.0 */
    engage_mop_amount?: Maybe<Scalars['Float']['output']>;
    /** Loyalty points applied on cart. Example: 200.0 */
    fynd_cash?: Maybe<Scalars['Float']['output']>;
    /** Gift card amount applied on cart. Example: 250.0 */
    gift_card?: Maybe<Scalars['Float']['output']>;
    /** GST charges applied on cart. Example: 123.0 */
    gst_charges?: Maybe<Scalars['Float']['output']>;
    /** Total of payment modes by which payment is going to be done. Example: 1499.0 */
    mop_total?: Maybe<Scalars['Float']['output']>;
    /** Maximum price total amount of all products in cart (MRP total). Example: 2999.0 */
    mrp_total?: Maybe<Scalars['Float']['output']>;
    /** Store credits applied on cart. Example: 100.0 */
    store_credit?: Maybe<Scalars['Float']['output']>;
    /** Selling price amount of all products in cart (subtotal). Example: 1699.0 */
    subtotal?: Maybe<Scalars['Float']['output']>;
    /** Total payable amount by the customer. Example: 1549.0 */
    total?: Maybe<Scalars['Float']['output']>;
    /** Total charges applied on cart. Example: 69.0 */
    total_charge?: Maybe<Scalars['Float']['output']>;
    /** Total value of goods after discounts, coupons, promotions. Example: 1600.0 */
    vog?: Maybe<Scalars['Float']['output']>;
    /** Total amount saved with this order. Example: 450.0 */
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
    /** UPI validation details. */
    vpa?: Maybe<Scalars['String']['output']>;
};
/**
 * Schema for specifying reasons associated with shipment or product-level actions.
 * Example:
 * {
 *   "entities": [{ "filters": [{}], "data": { "reason_id": "507f1f77bcf86cd799439011", "reason_text": "Customer requested cancellation" } }],
 *   "products": [{ "filters": [{ "identifier": "21500347", "line_number": 1 }], "data": { "reason_id": "507f1f77bcf86cd799439011", "reason_text": "Damaged item" } }]
 * }
 */
export type ReasonsDataInput = {
    /** Reasons data for shipments. */
    entities?: InputMaybe<Array<InputMaybe<EntitiesReasonsInput>>>;
    /** Reasons data for bags. */
    products?: InputMaybe<Array<InputMaybe<ProductsReasonsInput>>>;
};
/** Redeem loyalty points accumulated from orders or loyalty campaigns. */
export type RedeemLoyaltyPoints = {
    /** If true, redeem points; if false, remove applied points. Example: true */
    redeem_points?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Redirect the user to a URL to continue payment (e.g., Razorpay). */
export type RedirectAction = NextAction & {
    __typename?: 'RedirectAction';
    /** Additional contextual fields (method, token, bank, etc.). */
    fields?: Maybe<Array<FormField>>;
    /** Type of action (REDIRECT). */
    type: NextActionType;
    /** Destination URL to redirect the user. */
    url?: Maybe<Scalars['String']['output']>;
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
/** Types of redirects available in the system. */
export declare enum RedirectType {
    AppStore = "app_store",
    Web = "web"
}
/** Redirect URL. */
export type RedirectUrl = {
    __typename?: 'RedirectUrl';
    /** Extra details, stringify json of the extra data. */
    extra?: Maybe<Scalars['String']['output']>;
    /** URL to which the user may redirect. */
    redirect_url?: Maybe<Scalars['String']['output']>;
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
    /**
     * To be deprecated: Get beneficiary details like bank name, ifsc code, branch name associated with a specific order for refund processing.
     * @deprecated Use 'order_user_beneficiaries' instead.
     */
    order_beneficiaries_detail?: Maybe<OrderBeneficiaryDetail>;
    /** Returns UPI and Bank refund beneficiaries for a user; supports optional `filterBy` (enum: `order`, `shipment`)—when provided, only beneficiaries linked to the specified `order_id` or `shipment_id` are returned. */
    order_user_beneficiaries?: Maybe<GetRefundBeneficiary>;
    /**
     * To be deprecated: Get beneficiaries associated with the user for processing refunds, based on the provided order ID.
     * @deprecated Use 'order_user_beneficiaries' instead.
     */
    user_beneficiaries_detail?: Maybe<OrderBeneficiaryDetail>;
};
/** Get refund details. */
export type RefundOrder_Beneficiaries_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Get refund details. */
export type RefundOrder_User_BeneficiariesArgs = {
    filterBy?: InputMaybe<FilterByEnum>;
    orderId?: InputMaybe<Scalars['String']['input']>;
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** Get refund details. */
export type RefundUser_Beneficiaries_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Refund account Response. */
export type RefundAccountResponse = {
    __typename?: 'RefundAccountResponse';
    /** Name of the bank account holder. */
    account_holder?: Maybe<Scalars['String']['output']>;
    /** Masked bank account number of the beneficiary. */
    account_no?: Maybe<Scalars['String']['output']>;
    /** Name of the bank. */
    bank_name?: Maybe<Scalars['String']['output']>;
    /** Unique ID assigned to the beneficiary. */
    beneficiary_id?: Maybe<Scalars['String']['output']>;
    /**
     * Refund account data.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    data?: Maybe<Scalars['JSON']['output']>;
    /** This flag indicates whether the beneficiary account is verified by the aggregator. */
    is_verified_flag?: Maybe<Scalars['Boolean']['output']>;
    /** Logo URL of the bank. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Response message. */
    message: Scalars['String']['output'];
    /** Success or failure flag. */
    success: Scalars['Boolean']['output'];
    /** UPI id of the beneficiary. */
    upi?: Maybe<Scalars['String']['output']>;
};
/** Refund Mode details for processing refunds. */
export type RefundMode = {
    /** Information about the refund recipient, such as name, bank account details, or payment instructions. */
    beneficiary_details?: InputMaybe<RefundModeTransitionBeneficiaryData>;
    /** Array containing identifiers associated with the original payments, facilitating tracking and reconciliation of refunds. */
    display_name?: InputMaybe<Scalars['String']['input']>;
    /** URL of the logo representing the payment mode. */
    logo?: InputMaybe<Scalars['String']['input']>;
    /** Payment mode identifiers for which this refund mode is assigned. */
    payment_identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    /** Type or method of refund to be applied (e.g., bank transfer, credit card reversal, store credit). */
    refund_mode?: InputMaybe<RefundModeType>;
};
/** Contains information about Refund Mode assigned to payment mode and status */
export type RefundModeData = {
    __typename?: 'RefundModeData';
    /** Amount that was originally paid */
    amount_paid?: Maybe<Scalars['Float']['output']>;
    /** Bank account and beneficiary information */
    beneficiary_details?: Maybe<ShipmentBeneficiaryDetails>;
    /** Indicates that the system applied a default refund mode when no refund mode is chosen during the return/refund process. */
    default_refund_mode?: Maybe<Scalars['Boolean']['output']>;
    /** Human-readable name for the refund mode */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the refund mode instance */
    identifier: Scalars['String']['output'];
    /** logo URL of the refund mode. */
    logos?: Maybe<Scalars['String']['output']>;
    /** Additional payment information */
    payment_identifiers?: Maybe<Array<Scalars['String']['output']>>;
    /** Amount to be refunded */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** Method of refund processing */
    refund_mode: Scalars['String']['output'];
    /** Current refund status */
    refund_status?: Maybe<RefundStatus>;
    /** Additional remarks or notes */
    remarks?: Maybe<Scalars['String']['output']>;
};
/** description: Refund Mode Transition Beneficiary Data for status transition. */
export type RefundModeTransitionBeneficiaryData = {
    /** Unique identifier for the beneficiary. */
    beneficiary_id?: InputMaybe<Scalars['String']['input']>;
};
/** Enum for Refund Mode Types */
export declare enum RefundModeType {
    /** Issue refund as store credits to the customer */
    Creditnote = "creditnote",
    /** Refund back to the original payment source */
    RefundToSource = "refund_to_source",
    /** Settle the refund offline outside the system */
    SettleOffline = "settle_offline",
    /** Transfer refund amount directly to the customer's bank account */
    TransferToBank = "transfer_to_bank"
}
/** Schema for Refund Option */
export type RefundOption = {
    __typename?: 'RefundOption';
    amount?: Maybe<Scalars['Float']['output']>;
    beneficiary_type?: Maybe<Scalars['String']['output']>;
    currency_symbol?: Maybe<Scalars['String']['output']>;
    display_name?: Maybe<Scalars['String']['output']>;
    logo?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    refund_modes?: Maybe<Array<Maybe<RefundOptionMode>>>;
    slug?: Maybe<Scalars['String']['output']>;
    suggested_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Schema for Refund Mode */
export type RefundOptionMode = {
    __typename?: 'RefundOptionMode';
    display_name?: Maybe<Scalars['String']['output']>;
    payment_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    refund_mode?: Maybe<Scalars['String']['output']>;
};
/** Schema For Refund Options */
export type RefundOptionsResponse = {
    __typename?: 'RefundOptionsResponse';
    /** Indicates whether refund configuration is enabled for the sales channel; if disabled, no refund options are shown, and if enabled, the applicable refund modes are displayed. */
    is_refund_config_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** List of available refund options the user can select. */
    refund_options?: Maybe<Array<Maybe<RefundOption>>>;
    /** Breakdown of refund amounts across charges and discounts. */
    refund_price_breakup?: Maybe<Array<Maybe<OrderBreakupValue>>>;
};
/** Schema For Refund Options */
export type RefundOptionsWithPriceBreakup = {
    __typename?: 'RefundOptionsWithPriceBreakup';
    /** Indicates whether refund configuration is enabled for the sales channel; if disabled, no refund options are shown, and if enabled, the applicable refund modes are displayed. */
    is_refund_config_enabled?: Maybe<Scalars['Boolean']['output']>;
    /** List of available refund options the user can select. */
    refund_options?: Maybe<Array<Maybe<RefundOption>>>;
    /** Breakdown of refund amounts across charges and discounts. */
    refund_price_breakup?: Maybe<Array<Maybe<OrderBreakupValue>>>;
};
/** Refund Status Details */
export type RefundStatus = {
    __typename?: 'RefundStatus';
    /** Unique identifier for the refund status. */
    id: Scalars['String']['output'];
    /** Display Status for the storefront its pending when refund is in progress and completed when refund completed for a mode */
    operational_status: Scalars['String']['output'];
    /** Descriptive status of the refund (e.g., refund_acknowledged, refund_approved). */
    status: Scalars['String']['output'];
    /** Refund Status Transaction Data */
    transaction_data?: Maybe<Scalars['JSON']['output']>;
    /** Refund Status Transaction Info per Payment Mode */
    transaction_info?: Maybe<Array<Maybe<RefundTransactionInfo>>>;
};
/** Refund Status Transaction Info per Payment Mode */
export type RefundTransactionInfo = {
    __typename?: 'RefundTransactionInfo';
    /**
     * Payment mode for which the refund was processed.
     * Please refer for detailed
     * <a href='/commerce/references/payment-mode/'>Payment Mode.</a>
     */
    mode?: Maybe<Scalars['String']['output']>;
    /** Refund Reference Number (RRN) generated for the refund transaction. */
    rrn?: Maybe<Scalars['String']['output']>;
    /** Unique Transaction Reference (UTR) for the refund. */
    utr?: Maybe<Scalars['String']['output']>;
};
/** Schema representing the response received upon a successful user registration using a form. */
export type RegisterFormSuccess = {
    __typename?: 'RegisterFormSuccess';
    /** User's consent information including privacy policy acceptance */
    consent?: Maybe<UserConsent>;
    /** The country specific prefix for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** The email address provided during registration. */
    email?: Maybe<Scalars['String']['output']>;
    /** A string containing additional information about the operation's result. */
    message?: Maybe<Scalars['String']['output']>;
    /** The user's phone mobile without the country code. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** A token used for registration purposes will be sent when user is not registered. */
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
/** Configuration for the registration page of the sales channel. */
export type RegistrationPageFeature = {
    __typename?: 'RegistrationPageFeature';
    /** Indicates whether a form to collect store address should be displayed upon visiting the website. */
    ask_store_address: Scalars['Boolean']['output'];
};
/** Defines whether an attribute is mandatory or optional during user registration. */
export declare enum RegistrationType {
    /** The attribute must be filled during registration. */
    Mandatory = "mandatory",
    /** The attribute is optional during registration. */
    Optional = "optional"
}
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
    data?: Maybe<LinkStatus>;
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
    /** The type of content of blogs - html. For example, 'html' or 'markdown'. */
    type?: Maybe<Scalars['String']['output']>;
    /** The contents of blog. For example, HTML content or markdown text. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Group of custom fields by resource slug/id */
export type ResourceCustomFieldGroup = {
    __typename?: 'ResourceCustomFieldGroup';
    /** List of custom fields for this resource */
    custom_fields: Array<CustomField>;
    /** Resource slug or ID */
    resource_id: Scalars['String']['output'];
};
/** Types of responses available. */
export declare enum ResponseEnum {
    No = "no",
    Yes = "yes"
}
/** Represents a standard API response message. */
export type ResponseMessage = {
    __typename?: 'ResponseMessage';
    /** Human-readable description providing details about the status or outcome of the API response. */
    message: Scalars['String']['output'];
};
/** Product return policy configuration and timeframe details. */
export type ReturnConfiguration = {
    __typename?: 'ReturnConfiguration';
    /** Indicates whether the item can be returned by customers. */
    returnable?: Maybe<Scalars['Boolean']['output']>;
    /** Return window duration, e.g. 7, 15, 30 (days/hours based on unit). */
    time?: Maybe<Scalars['Int']['output']>;
    /** Time unit for return period, e.g. 'days', 'hours', 'months'. */
    unit?: Maybe<Scalars['String']['output']>;
};
/**
 * Configuration for the revenue engine.
 * This object has been deprecated and will be removed in future release.
 */
export type RevenueEngineFeature = {
    __typename?: 'RevenueEngineFeature';
    /** Indicates whether revenue engine is enabled. Default value is false. */
    enabled: Scalars['Boolean']['output'];
};
/**
 * Configuration for reward points within the sales channel.
 * This object has been deprecated and will be removed in future versions.
 */
export type RewardPointsConfig = {
    __typename?: 'RewardPointsConfig';
    /** Configuration details for crediting reward points. */
    credit?: Maybe<Credit>;
    /** Configuration details for debiting reward points. */
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
    /** The payment flow to be used for this saved instrument (e.g., 'token', 'recurring', 'standard') */
    flow?: Maybe<PaymentFlow>;
    /** This flag will be true in case of Payment link payment through card. */
    is_pay_by_card_pl?: Maybe<Scalars['Boolean']['output']>;
    /** Payment mode. */
    list?: Maybe<Array<Maybe<PaymentModeList>>>;
    /** Payment mode name. */
    name: Scalars['String']['output'];
    /** Card save or not. */
    save_card?: Maybe<Scalars['Boolean']['output']>;
    /** List of stored payment methods, including saved cards and UPI IDs, available for quick selection during checkout. */
    stored_payment_details?: Maybe<Array<Maybe<StoredPaymentDetails>>>;
    /** A list of UPI handlers that can be used to construct valid UPI IDs for payment processing or user identification. */
    suggested_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** List of payment methods supported by the merchant. */
    supported_methods?: Maybe<Array<Maybe<SupportedMethodDetails>>>;
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
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
/** Details related to SEO of an entry. */
export type SeoDetails = {
    __typename?: 'SEODetails';
    /** List of action objects which can power breadcrumbs on website. */
    breadcrumbs?: Maybe<Array<Maybe<SeObreadcrumb>>>;
    /** Specifies the preferred URL for the resource to resolve duplicate content issues and improve SEO. */
    canonical_url?: Maybe<Scalars['String']['output']>;
    /** The contents of og:description. */
    description?: Maybe<Scalars['String']['output']>;
    /** The image url of the og:image. */
    image?: Maybe<SeoImage>;
    /** List of meta tags. */
    meta_tags?: Maybe<Array<Maybe<SeoMetaItem>>>;
    /** Data containing priority and frequency of sitemap. */
    sitemap?: Maybe<SeoSiteMapDetails>;
    /** The contents of og:title. */
    title?: Maybe<Scalars['String']['output']>;
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
export type SeoSiteMapDetails = {
    __typename?: 'SEOSiteMapDetails';
    /** Value of sitemap frequency change denoting how frequently the content changes. */
    frequency?: Maybe<Scalars['String']['output']>;
    /** Value of sitemap priority randing from 0.0 to 1.0. */
    priority?: Maybe<Scalars['Float']['output']>;
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
    /** Name of the channel of communication the user has agreed to receive messages through. Example: "SMS". */
    display_name?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. Values: "yes" (User has opted in to receive SMS communications) or "no" (User has opted out of receiving SMS communications). Defaults to "yes" if no consent record exists. Example: "yes". */
    response?: Maybe<Scalars['String']['output']>;
    /** The phone number of the user. Phone number with country code prefix. Only present if user has provided phone number. Example: "919869821300". */
    value?: Maybe<Scalars['String']['output']>;
};
/** SafetyNet integration settings for the sales channel. */
export type Safetynet = {
    __typename?: 'Safetynet';
    /** Credentials required for SafetyNet integration. */
    credentials: SafetynetCredentials;
    /** Indicates whether SafetyNet integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for SafetyNet integration. */
export type SafetynetCredentials = {
    __typename?: 'SafetynetCredentials';
    /** API key for SafetyNet authentication, e.g. 'AIzaSyC1234567890abcdef'. */
    api_key?: Maybe<Scalars['String']['output']>;
};
/** Save address response details, which includes address id, success flag and default address flag. */
export type SaveAddressResponse = {
    __typename?: 'SaveAddressResponse';
    /** Id of the address. Example: 'addr_001' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether this is the default address. Example: false */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /** Success flag of save address Response. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schedule details for the collection, including timing and duration information. */
export type Schedule = {
    __typename?: 'Schedule';
    /** The cron expression for the schedule. */
    cron?: Maybe<Scalars['String']['output']>;
    /** The duration of the job in seconds. */
    duration?: Maybe<Scalars['Int']['output']>;
    /** The end time of the job. */
    end?: Maybe<Scalars['String']['output']>;
    /** Additional metadata related to the collection schedule, such as timezone information, scheduling rules, or any other relevant details that can help in understanding the scheduling context. */
    metadata?: Maybe<Scalars['JSON']['output']>;
    /** List of next schedules. */
    next_schedule?: Maybe<Array<Maybe<NextSchedule>>>;
    /** The start time of the job. */
    start?: Maybe<Scalars['String']['output']>;
};
/** Individual search suggestion item with navigation and display information. */
export type SearchItem = {
    __typename?: 'SearchItem';
    /** Navigation action configuration for page routing and user interactions. */
    action?: Maybe<PageActionDetail>;
    /** Additional metadata for customizing the search suggestion behavior and appearance. */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Display text for the suggestion, e.g. 'iPhone 14 Pro', 'Nike Running Shoes', 'Electronics'. */
    display?: Maybe<Scalars['String']['output']>;
    /** Logo or icon associated with the search item for visual identification. */
    logo?: Maybe<Media>;
    /** Type of search result: 'product', 'brand', 'category', 'collection'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Search suggestions and autocomplete results for product queries. */
export type SearchProduct = {
    __typename?: 'SearchProduct';
    /** Array of suggested items including products, brands, and categories based on search input. */
    items?: Maybe<Array<Maybe<SearchItem>>>;
};
/** Asset urls for the section. */
export type SectionAssets = {
    __typename?: 'SectionAssets';
    /** The CDN URL of CSS file. */
    css?: Maybe<Scalars['String']['output']>;
    /** The CDN URL of JS bundle. */
    js?: Maybe<Scalars['String']['output']>;
};
/** An object defining source details for the section. */
export type SectionSource = {
    __typename?: 'SectionSource';
    /** This is the extension binding name containing this section. */
    bundle_name?: Maybe<Scalars['String']['output']>;
    /** The source id specifying the source of the section. */
    id?: Maybe<Scalars['String']['output']>;
    /** This is source type. It will either be themeBundle or extension. */
    type?: Maybe<Scalars['String']['output']>;
};
/** A secure URL for hosted images or assets. */
export type SecureUrl = {
    __typename?: 'SecureUrl';
    /** Secure HTTPS URL of the hosted image, e.g. 'https://cdn.example.com/image.jpg'. */
    secure_url: Scalars['String']['output'];
};
/** Represents a domain configuration for security restrictions. */
export type SecurityDomain = {
    __typename?: 'SecurityDomain';
    /** The host URL for the allowed domain, e.g. 'example.com'. */
    host: Scalars['String']['output'];
    /** The protocol/scheme to use for the domain. Default is 'https'. */
    url_scheme?: Maybe<SecurityUrlScheme>;
};
/** Configuration for security-related features of the sales channel. */
export type SecurityFeature = {
    __typename?: 'SecurityFeature';
    /** List of allowed domains for security restrictions. */
    domains?: Maybe<Array<Maybe<SecurityDomain>>>;
};
/** Protocol types for security domain configuration. */
export declare enum SecurityUrlScheme {
    /** HTTP protocol */
    Http = "http",
    /** HTTPS protocol (default) */
    Https = "https"
}
/** Segment integration settings for the sales channel. */
export type Segment = {
    __typename?: 'Segment';
    /** Credentials required for Segment integration. */
    credentials: SegmentCredentials;
    /** Indicates whether Segment integration is enabled or disabled for the sales channel. */
    enabled: Scalars['Boolean']['output'];
};
/** Credentials required for Segment integration. */
export type SegmentCredentials = {
    __typename?: 'SegmentCredentials';
    /** Write key for Segment that identifies the data source, e.g. 'wk_1234567890abcdef'. */
    write_key?: Maybe<Scalars['String']['output']>;
};
/** Select Address response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type SelectAddressResponse = {
    __typename?: 'SelectAddressResponse';
    /**
     * List of saved addresses for user cart checkout.
     * @deprecated This field is obsolete
     */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /**
     * Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }]
     * @deprecated This field is obsolete
     */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /**
     * Price breakup for coupon, display, loyalty points, etc.
     * @deprecated This field is obsolete
     */
    breakup_values?: Maybe<CartBreakup>;
    /**
     * Buy Now flag for fast checkout. Example: false
     * @deprecated This field is obsolete
     */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Checkout mode (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /**
     * Cart-level comment. Example: 'Deliver after 6 PM'
     * @deprecated This field is obsolete
     */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /**
     * Cart-level coupon data (applied flag, code, amount, title, message).
     * @deprecated This field is obsolete , Use breakup_values.coupon instead
     */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /**
     * Currency for prices (e.g., code 'INR', symbol '₹').
     * @deprecated This field is obsolete
     */
    currency?: Maybe<CartCurrency>;
    /**
     * Custom cart metadata. Example: { channel: 'web' }
     * @deprecated This field is obsolete
     */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery charge informational message. Example: 'Free delivery above ₹999'
     * @deprecated This field is obsolete
     */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery promise for the cart.
     * @deprecated This field is obsolete
     */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /**
     * Whether promotion free gift selection is available. Example: true
     * @deprecated This field is obsolete
     */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /**
     * GSTIN associated with the cart. Example: '27AAACI1195H1ZK'
     * @deprecated This field is obsolete
     */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether the cart response is valid. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /**
     * List of cart items including item id, size, store, pricing, etc.
     * @deprecated This field is obsolete
     */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Response message. Example: 'Cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /**
     * PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 }
     * @deprecated This field is obsolete
     */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /**
     * User PAN number. Example: 'ABCDE1234F'
     * @deprecated This field is obsolete
     */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Number of items in cart. Example: 3
     * @deprecated This field is obsolete
     */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Select Address response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type SelectAddressResponseAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Select address for the cart (delivery and/or billing). */
export type SelectCartAddressRequestInput = {
    /** Billing address ID. Example: 'addr_bill_01' */
    billing_address_id?: InputMaybe<Scalars['String']['input']>;
    /** Cart ID. Example: '5bb521cfdc83215e1889b346' */
    cart_id?: InputMaybe<Scalars['String']['input']>;
    /** Delivery address ID. Example: 'addr_001' */
    id?: InputMaybe<Scalars['String']['input']>;
};
/** Apply coupon response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type SelectPaymentModeResponse = {
    __typename?: 'SelectPaymentModeResponse';
    /**
     * List of saved addresses for user cart checkout.
     * @deprecated This field is obsolete
     */
    addresses?: Maybe<Addresses>;
    /**
     * Alternate pickup person details.
     * @deprecated This field is obsolete
     */
    alternate_pickup_person?: Maybe<AlternatePickupPerson>;
    /**
     * Applied promotions including id, name, offer text, buy/discount rules, type. Example: [{ promo_id: 'PROMO1', offer_text: '10% OFF' }]
     * @deprecated This field is obsolete
     */
    applied_promo_details?: Maybe<Array<Maybe<AppliedPromotion>>>;
    /** Price breakup for coupon, display, loyalty points, etc. */
    breakup_values?: Maybe<CartBreakup>;
    /**
     * Buy Now flag for fast checkout. Example: false
     * @deprecated This field is obsolete
     */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Numeric cart identifier. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /**
     * Checkout mode (e.g., 'self', 'other'). Example: 'self'
     * @deprecated This field is obsolete
     */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /**
     * Cart-level comment. Example: 'Deliver after 6 PM'
     * @deprecated This field is obsolete
     */
    comment?: Maybe<Scalars['String']['output']>;
    /**
     * Sales channel common config (e.g., delivery charge config).
     * @deprecated This field is obsolete
     */
    common_config?: Maybe<CartCommonConfig>;
    /**
     * Cart-level coupon data (applied flag, code, amount, title, message).
     * @deprecated This field is obsolete , Use breakup_values.coupon instead
     */
    coupon?: Maybe<CartDetailCoupon>;
    /**
     * Display text of the applied coupon. Example: 'SAVE10 applied'
     * @deprecated This field is obsolete
     */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency for prices (e.g., code 'INR', symbol '₹'). */
    currency?: Maybe<CartCurrency>;
    /**
     * Custom cart metadata. Example: { channel: 'web' }
     * @deprecated This field is obsolete
     */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * Customer user ID associated with the cart. Example: 'usr_456'
     * @deprecated This field is obsolete
     */
    customer_id?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery charge informational message. Example: 'Free delivery above ₹999'
     * @deprecated This field is obsolete
     */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /**
     * Delivery promise for the cart.
     * @deprecated This field is obsolete
     */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /**
     * Whether promotion free gift selection is available. Example: true
     * @deprecated This field is obsolete
     */
    free_gift_selection_available?: Maybe<Scalars['Boolean']['output']>;
    /**
     * GSTIN associated with the cart. Example: '27AAACI1195H1ZK'
     * @deprecated This field is obsolete
     */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Whether the cart response is valid. Example: true
     * @deprecated This field is obsolete
     */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /**
     * List of cart items including item id, size, store, pricing, etc.
     * @deprecated This field is obsolete
     */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /**
     * Last modified timestamp (ISO 8601). Example: '2025-10-07T14:20:00Z'
     * @deprecated This field is obsolete
     */
    last_modified?: Maybe<Scalars['String']['output']>;
    /**
     * Response message. Example: 'Cart fetched successfully'
     * @deprecated This field is obsolete
     */
    message?: Maybe<Scalars['String']['output']>;
    /**
     * Notification payload for the cart. Example: { type: 'warning', text: 'Few items out of stock' }
     * @deprecated This field is obsolete
     */
    notification?: Maybe<Scalars['JSON']['output']>;
    /**
     * PAN configuration with thresholds for COD and online payments. Example: { enabled: true, cod_threshold_amount: 50000, online_threshold_amount: 200000 }
     * @deprecated This field is obsolete
     */
    pan_config?: Maybe<Scalars['JSON']['output']>;
    /**
     * User PAN number. Example: 'ABCDE1234F'
     * @deprecated This field is obsolete
     */
    pan_no?: Maybe<Scalars['String']['output']>;
    /**
     * Payment selection lock configuration.
     * @deprecated This field is obsolete
     */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Whether checkout is restricted. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Staff user ID if cart is created by a staff member. Example: 'usr_123'
     * @deprecated This field is obsolete
     */
    staff_user_id?: Maybe<Scalars['String']['output']>;
    /** Whether the API call was successful. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
    /** Cart UID. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
    /**
     * Number of items in cart. Example: 3
     * @deprecated This field is obsolete
     */
    user_cart_items_count?: Maybe<Scalars['Int']['output']>;
};
/** Apply coupon response schema which includes cart id, breakup values, coupon, coupon text, gstin etc. */
export type SelectPaymentModeResponseAddressesArgs = {
    buyNow?: InputMaybe<Scalars['Boolean']['input']>;
    checkoutMode?: InputMaybe<Scalars['String']['input']>;
    isDefault?: InputMaybe<Scalars['Boolean']['input']>;
    mobileNo?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['String']['input']>;
};
/** Types of selection options available. */
export declare enum SelectedType {
    Exact = "exact",
    None = "none",
    Query = "query"
}
/** Seller information including identity and service coverage. */
export type Seller = {
    __typename?: 'Seller';
    /** Number of stores or locations serviceable by this seller. */
    count?: Maybe<Scalars['Int']['output']>;
    /** Display name of the seller, e.g. 'ABC Electronics Store', 'FastMart Retail'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the seller, e.g. 12345, 67890. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Sorting options available for organizing seller data. */
export type SellerSortOn = {
    __typename?: 'SellerSortOn';
    /** Indicates whether this sorting option is currently active/selected. */
    is_selected?: Maybe<Scalars['Boolean']['output']>;
    /** Display name of the sorting option, e.g. 'Price: Low to High', 'Fastest Delivery', 'Best Seller'. */
    name?: Maybe<Scalars['String']['output']>;
    /** Internal value used to specify the sorting order, e.g. 'price_asc', 'delivery_time_asc', 'discount_dsc'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Describes the request structure to send OTP for the 'forgot email' flow. */
export type SendEmailForgotOtpRequestSchemaInput = {
    /** Action to send or resend the OTP. */
    action?: InputMaybe<UserAction>;
    /** Email address to send the OTP. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Token used to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to send OTP to an email. */
export type SendEmailOtpRequestSchemaInput = {
    /** Action to send or resend the OTP. */
    action?: InputMaybe<UserAction>;
    /** Email address to send the OTP. */
    email?: InputMaybe<Scalars['String']['input']>;
    /** Temporary registration token for the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Token used to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully sending a verification link to an email. */
export type SendEmailVerifyLinkSuccess = {
    __typename?: 'SendEmailVerifyLinkSuccess';
    /** Whether the email verification link was successfully sent. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to send OTP for the 'forgot mobile' flow. */
export type SendMobileForgotOtpRequestSchemaInput = {
    /** Action to send or resend the OTP. */
    action?: InputMaybe<UserAction>;
    /** Android SMS Retriever hash (optional). */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Country calling code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** User's mobile number. */
    mobile?: InputMaybe<Scalars['String']['input']>;
    /** Token used to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to send OTP to a mobile number. */
export type SendMobileOtpRequestSchemaInput = {
    /** Action to send or resend the OTP. */
    action?: InputMaybe<UserAction>;
    /** Android SMS Retriever hash (optional). */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Captcha code for the mobile OTP request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Country calling code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Force OTP verification (internal use). */
    force?: InputMaybe<Scalars['String']['input']>;
    /** User's mobile number. */
    mobile?: InputMaybe<Scalars['String']['input']>;
    /** Token used to validate the request. */
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Schema representing the response received upon successfully sending a verification link to a mobile number. */
export type SendMobileVerifyLinkSuccess = {
    __typename?: 'SendMobileVerifyLinkSuccess';
    /** Whether the mobile verification link was successfully sent. */
    verify_mobile_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to login or register with an OTP sent via SMS. */
export type SendOtpRequestSchemaInput = {
    /** Android SMS Retriever hash (optional). */
    android_hash?: InputMaybe<Scalars['String']['input']>;
    /** Country calling code for the phone number. */
    country_code: Scalars['String']['input'];
    /** Whether to encrypt the OTP. */
    encrypt_otp?: InputMaybe<Scalars['Boolean']['input']>;
    /** Phone number. */
    mobile: Scalars['String']['input'];
};
/** Describes the successful response on sending OTP on user registration or authentication. */
export type SendOtpResponse = {
    __typename?: 'SendOtpResponse';
    /** Country code for the phone number. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Email ID of user. */
    email?: Maybe<Scalars['String']['output']>;
    /** Message to specify the OTP send status. Eg. OTP sent, failed to send OTP etc. */
    message?: Maybe<Scalars['String']['output']>;
    /** Phone number of user. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** A token used for registration purposes will be sent when user is not registered. */
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
    /** Message indicating the result of the request. For example, 'OTP sent successfully' or 'OTP sent to registered mobile number'. */
    message?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the request. For example, '63c1fd1baf6c6925304395cb'. */
    request_id?: Maybe<Scalars['String']['output']>;
    /** Time in seconds before the OTP can be resent. For example, 30, 60, or 120. */
    resend_timer?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the request was successful. For example, true or false. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to send a reset-password link to an email. */
export type SendResetPasswordEmailRequestSchemaInput = {
    /** Email address of the user. */
    email: Scalars['String']['input'];
};
/** Describes the request structure to send a reset-password link to a mobile number. */
export type SendResetPasswordMobileRequestSchemaInput = {
    /** Captcha code for the reset-password mobile request. */
    captcha_code?: InputMaybe<Scalars['String']['input']>;
    /** Country calling code for the phone number. */
    country_code: Scalars['String']['input'];
    /** User's mobile number. */
    mobile: Scalars['String']['input'];
};
/** Describes the request structure to send a verification link to a phone number. */
export type SendVerificationLinkMobileRequestSchemaInput = {
    /** Whether the phone number is active. */
    active?: InputMaybe<Scalars['Boolean']['input']>;
    /** Country calling code for the phone number. */
    country_code?: InputMaybe<Scalars['String']['input']>;
    /** Phone number. */
    phone?: InputMaybe<Scalars['String']['input']>;
    /** Whether the phone number is the primary contact. */
    primary?: InputMaybe<Scalars['Boolean']['input']>;
    /** Whether the phone number is verified. */
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
/**
 * A single SEO JSON-LD markup schema template configured for a sales channel,
 * keyed by the storefront page type it should be rendered on. The `schema`
 * field is a Mustache/Nunjucks-style template string that storefronts render
 * against the current route's data at request time. Mirrors the REST
 * SEOSchemaMarkupTemplate response.
 */
export type SeoMarkupSchema = {
    __typename?: 'SeoMarkupSchema';
    /** Whether the template is currently active. Inactive templates are not returned by `seoMarkupSchemas`. */
    active?: Maybe<Scalars['Boolean']['output']>;
    /** Admin-facing description of what this template does. */
    description?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /** The storefront page type this template renders on. */
    page_type: PageType;
    /** Mustache/Nunjucks template that produces the JSON-LD payload. Storefront renders this against current page data. */
    schema: Scalars['String']['output'];
    /** Human-readable title for the schema template (admin-only label). */
    title?: Maybe<Scalars['String']['output']>;
};
/** Object containing all data related to SEO for a sales channel website. */
export type SeoSchema = {
    __typename?: 'SeoSchema';
    /** Contents of additional sitemap. For example, 'https://example.com/sitemap.xml'. */
    additional_sitemap?: Maybe<Scalars['String']['output']>;
    /**
     * Contents of additional sitemap. For example, 'https://example.com/sitemap.xml'.
     * @deprecated This field is obsolete.Please use additional_sitemap instead.
     */
    additonal_sitemap?: Maybe<Scalars['String']['output']>;
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    app?: Maybe<Scalars['String']['output']>;
    /** Whether canonical tags is enabled or not for a sales channel's website. For example, true or false. */
    cannonical_enabled?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Timestamp which represent the time when data was created. For example, '2024-01-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Custom meta tags for a sales channel website. */
    custom_meta_tags?: Maybe<Array<Maybe<CustomMetaTag>>>;
    /** Data regarding the title and description of a sales channel website. */
    details?: Maybe<Detail>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Contents of robots.txt file of a sales channel. For example, 'User-agent: *
     * Disallow: /admin/'.
     */
    robots_txt?: Maybe<Scalars['String']['output']>;
    /** Whether sitemaps is enabled or not for a sales channel's website. For example, true or false. */
    sitemap_enabled?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Timestamp which represent when was the last time when data was updated. For example, '2024-01-20T14:45:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Model representing serviceability details for a region. */
export type ServiceabilityModel = {
    __typename?: 'ServiceabilityModel';
    /** Boolean value indicating whether first-mile service is available or not. */
    is_first_mile?: Maybe<Scalars['Boolean']['output']>;
    /** Boolean value indicating whether installation services are available in the specified region or not. */
    is_installation?: Maybe<Scalars['Boolean']['output']>;
    /** Boolean value indicating whether last-mile service is available or not. */
    is_last_mile?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if quality check service is available. This refers to the ability to perform quality checks on items at the customer's doorstep. */
    is_qc?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates if doorstep return service is available. This refers to the ability to return items directly from the customer's doorstep. */
    is_return?: Maybe<Scalars['Boolean']['output']>;
    /** Boolean value indicating whether a region is first-mile serviceable or not in return pickup. */
    is_reverse_pickup?: Maybe<Scalars['Boolean']['output']>;
    /** Limit on the amount of cash on delivery (COD) payments allowed in the specified region. */
    lm_cod_limit?: Maybe<Scalars['Int']['output']>;
    /** Time of day by which pickups must be scheduled to be processed on the same day. eg 10:00 (24 hour format) */
    pickup_cutoff?: Maybe<Scalars['String']['output']>;
    /**
     * Code representing a specific delivery route used.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    route_code?: Maybe<Scalars['String']['output']>;
};
/** Enum for session duration units. */
export declare enum SessionEnum {
    /** Session duration in days. */
    Days = "Days",
    /** Session duration in hours. */
    Hours = "Hours",
    /** Session duration in minutes. */
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
    /** The unique identifier for the shipment. */
    shipment_id?: InputMaybe<Scalars['String']['input']>;
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
    /** Price breakup of cart (coupon, display, loyalty points, etc.). */
    breakup_values?: Maybe<CartBreakup>;
    /** Buy now flag of user cart. Example: false */
    buy_now?: Maybe<Scalars['Boolean']['output']>;
    /** Cart id of user cart for generating cart sharing token. Example: 123456 */
    cart_id?: Maybe<Scalars['Int']['output']>;
    /** Checkout mode for the cart (e.g., 'self', 'other'). Example: 'self' */
    checkout_mode?: Maybe<Scalars['String']['output']>;
    /** Comment message added in user cart. Example: 'Deliver after 6 PM' */
    comment?: Maybe<Scalars['String']['output']>;
    /** Coupon text of the applied coupon on user cart. Example: 'SAVE10 applied' */
    coupon_text?: Maybe<Scalars['String']['output']>;
    /** Currency data of the cart for prices. Example: { code: 'INR', symbol: '₹' } */
    currency?: Maybe<CartCurrency>;
    /** Metadata of custom cart. Example: { channel: 'web' } */
    custom_cart_meta?: Maybe<Scalars['JSON']['output']>;
    /** Delivery charge info message of the user cart. Example: 'Free delivery over ₹999' */
    delivery_charge_info?: Maybe<Scalars['String']['output']>;
    /** Shipment level promise (formatted time, timestamp, ISO). */
    delivery_promise?: Maybe<DeliveryPromiseResponse>;
    /** GSTIN added in user cart. Example: '27AAACI1195H1ZK' */
    gstin?: Maybe<Scalars['String']['output']>;
    /** Shared cart id. Example: 'shrt_abc123' */
    id?: Maybe<Scalars['String']['output']>;
    /** Valid flag for get shared cart detail API. Example: true */
    is_valid?: Maybe<Scalars['Boolean']['output']>;
    /** List of items with id, size, store id, sizes, and related data. */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Last modified timestamp of user cart. Example: '2025-10-07T10:30:00Z' */
    last_modified?: Maybe<Scalars['String']['output']>;
    /** Message of the get shared cart API response. Example: 'Shared cart fetched successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Payment Default Selection Schema. */
    payment_selection_lock?: Maybe<PaymentSelectionLock>;
    /**
     * Restrict checkout flag. Example: false
     * @deprecated This field is obsolete
     */
    restrict_checkout?: Maybe<Scalars['Boolean']['output']>;
    /** Shared cart details including token, user, created_on, source, and meta. */
    shared_cart_details?: Maybe<SharedCartDetails>;
    /** Cart id of the user cart. Example: '5bb521cfdc83215e1889b346' */
    uid?: Maybe<Scalars['String']['output']>;
};
/** Shared cart details schema included token, user, created on, source and meta. */
export type SharedCartDetails = {
    __typename?: 'SharedCartDetails';
    /** Created on timestamp of user cart. Example: '2025-10-07T10:30:00Z' */
    created_on?: Maybe<Scalars['String']['output']>;
    /** Meta data sent while generating share cart link. Example: { campaign: 'DIWALI' } */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** Share link device and other source information. Example: { device: 'android' } */
    source?: Maybe<Scalars['JSON']['output']>;
    /** Short link id of the user cart that needs to be shared. Example: 'shrt_abc123' */
    token?: Maybe<Scalars['String']['output']>;
    /** User details of who generated share link. Example: { id: 'usr_123' } */
    user?: Maybe<Scalars['JSON']['output']>;
};
/** Shared cart response schema which included error or cart data. */
export type SharedCartItems = {
    __typename?: 'SharedCartItems';
    /** Shared cart which includes items, promise, checkout mode, comment, GSTIN, etc. */
    cart?: Maybe<SharedCart>;
    /** Error details if any. Example: 'Invalid or expired token' */
    error?: Maybe<Scalars['String']['output']>;
};
/** Shared cart response schema which included error or cart data. */
export type SharedCartResponse = {
    __typename?: 'SharedCartResponse';
    /** Shared cart details including checkout mode, cart id, payment selection lock, delivery promise, comment, items, breakup values, etc. */
    cart?: Maybe<SharedCart>;
    /** Error details (if any). Example: 'Invalid or expired token' */
    error?: Maybe<Scalars['String']['output']>;
};
/** Shipment details used to fetch shipment specific information, can be used to fetch the details of a specific shipment or to track the shipment. */
export type Shipment = {
    __typename?: 'Shipment';
    /** Schema for customer details response. For example, call with orderId 'FY123456789'. */
    customer_detail?: Maybe<CustomerDetailsResponse>;
    /** Shipment details. */
    detail?: Maybe<OrderShipment>;
    /** Schema for shipment invoice, for example to download invoice for shipment 'SHIP123'. For example, `invoice_detail` can be set to a ShipmentInvoice object. */
    invoice_detail?: Maybe<ShipmentInvoice>;
    /** Individual bag reason details. For example, fetch reasons for bag_id 'bag001'. */
    shipment_bag_reasons?: Maybe<ShipmentBagReasons>;
    /** List of reasons for cancelling an shipment. For example : 'Wrong size' */
    shipment_reasons?: Maybe<ShipmentCancellationReasons>;
    /** Shipment tracking details, can be used to retrieve tracking events for a specific shipment. For example, retrieve tracking events for AWB 'AWB123456'. */
    track_shipment?: Maybe<TrackShipment>;
};
/** Shipment details used to fetch shipment specific information, can be used to fetch the details of a specific shipment or to track the shipment. */
export type ShipmentCustomer_DetailArgs = {
    orderId: Scalars['String']['input'];
};
/** Shipment details used to fetch shipment specific information, can be used to fetch the details of a specific shipment or to track the shipment. */
export type ShipmentShipment_Bag_ReasonsArgs = {
    bagId: Scalars['String']['input'];
};
/** Schema for Shipment Application Status Response. */
export type ShipmentApplicationStatusResponse = {
    __typename?: 'ShipmentApplicationStatusResponse';
    /** An array containing different status options of shipments. For example, `statuses` can be set to [a StatusesBodyResponse object]. */
    statuses?: Maybe<Array<Maybe<StatusesBodyResponse>>>;
};
/** Schema for shipment's bag reasons. */
export type ShipmentBagReasons = {
    __typename?: 'ShipmentBagReasons';
    /** A list of shipment's bag reasons. For example, `reasons` can be set to [a BagReasons object]. */
    reasons?: Maybe<Array<Maybe<BagReasons>>>;
    /** Indicates if the operation was successful. For example, `success` can be set to true. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Contains Payout Details. */
export type ShipmentBeneficiaryDetails = {
    __typename?: 'ShipmentBeneficiaryDetails';
    /** Name of the account holder */
    account_holder?: Maybe<Scalars['String']['output']>;
    /** Bank account number (may be masked) */
    account_no?: Maybe<Scalars['String']['output']>;
    /** Name of the bank */
    bank_name?: Maybe<Scalars['String']['output']>;
    /** Encrypted/encoded beneficiary identifier */
    beneficiary_id?: Maybe<Scalars['String']['output']>;
    /** Bank branch name */
    branch_name?: Maybe<Scalars['String']['output']>;
    /** Indian Financial System Code */
    ifsc_code?: Maybe<Scalars['String']['output']>;
    /** Whether the beneficiary details are verified */
    is_verified?: Maybe<Scalars['Boolean']['output']>;
    /** VPA Address of the customer */
    vpa_address?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipment's cancellation reasons list, for example data returned from cancellation FAQ APIs. */
export type ShipmentCancellationReasons = {
    __typename?: 'ShipmentCancellationReasons';
    /** A list of shipment reasons. For example, [{ reason_id: 1001, reason_text: 'Customer request' }]. */
    reasons?: Maybe<Array<Maybe<ShipmentReason>>>;
};
/** Get invoice shipment response. */
export type ShipmentInvoice = {
    __typename?: 'ShipmentInvoice';
    /** Type of presigned URL. For example, `presigned_type` can be set to 'value'. */
    presigned_type: Scalars['String']['output'];
    /** The presigned URL for accessing the shipment data, obtained from the response data. For example, `presigned_url` can be set to 'https://example.com/resource'. */
    presigned_url: Scalars['String']['output'];
    /** Identifier for the shipment. For example, `shipment_id` can be set to '16736576489251696245'. */
    shipment_id: Scalars['String']['output'];
    /** Indicates if the operation was successful . For example, `success` can be set to true. */
    success: Scalars['Boolean']['output'];
};
/** Represents a specific shipment bag line number along with the quantity eligible for refund. */
export type ShipmentLineItem = {
    /** Unique identifier of the shipment bag line number for which the refund is being requested. */
    line_number?: InputMaybe<Scalars['Int']['input']>;
    /** Number of units from the specified for shipment bag line number to be returned and refunded. */
    quantity?: InputMaybe<Scalars['Float']['input']>;
};
/** Represents the types of events that can trigger OTP verification to securely authenticate customer actions. */
export declare enum ShipmentOtpEventType {
    /** Used when an OTP needs to be sent to the customer's registered mobile number to authenticate the user while updating the delivery address in case of a Non-Delivery Report (NDR) scenario. For example, trigger this when NDR forms capture a new address. */
    CustomerNdr = "customer_ndr",
    /** Used when an OTP needs to be sent to the customer's registered mobile number to authenticate the user while they are entering or updating refund bank account details during the return or refund process. For example, trigger this when customers add bank details for refunds. */
    RefundBankDetails = "refund_bank_details"
}
/** Schema for shipment payment. */
export type ShipmentPayment = {
    __typename?: 'ShipmentPayment';
    /** Amount paid using this payment method. For example, `amount` can be set to 2499.5. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** The name to be displayed for the payment mode. For example, `display_name` can be set to 'Sample Name'. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** URL of the logo representing the payment mode. For example, `logo` can be set to 'value'. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Information about the payment source. For eg, NB_ICICI. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Stands for Mode of Payment. This is a short code (like 'COD' for Cash On Delivery) that represents the payment method used. For example, `mop` can be set to 'value'. */
    mop?: Maybe<Scalars['String']['output']>;
    /** Information about the payment mode, indicates whether COD or PREPAID. For example, `payment_mode` can be set to 'value'. */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** The current status of the payment. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipment payment. */
export type ShipmentPaymentInfo = {
    __typename?: 'ShipmentPaymentInfo';
    /** Amount paid using this payment method. For example, `amount` can be set to 2499.5. */
    amount?: Maybe<Scalars['Float']['output']>;
    /** The name to be displayed for the payment mode. For example, `display_name` can be set to 'Sample Name'. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** URL of the logo representing the payment mode. For example, `logo` can be set to 'value'. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Information about the payment source. For eg, NB_ICICI. */
    mode?: Maybe<Scalars['String']['output']>;
    /** Stands for Mode of Payment. This is a short code (like 'COD' for Cash On Delivery) that represents the payment method used. For example, `mop` can be set to 'value'. */
    mop?: Maybe<Scalars['String']['output']>;
    /** Information about the payment mode, indicates whether COD or PREPAID. For example, `payment_mode` can be set to 'value'. */
    payment_mode?: Maybe<Scalars['String']['output']>;
    /** Refund Amount to this payment mode only populate when shipment is Return */
    refund_amount?: Maybe<Scalars['Float']['output']>;
    /** The current status of the payment. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
};
/** Shipment level promise information which denotes time in 3 different formats i.e formatted time, timestamp and iso format. */
export type ShipmentPromise = {
    __typename?: 'ShipmentPromise';
    /** Min and Max Delivery promise formatted timestamp. Example: { min: 'Tomorrow', max: 'Day after' } */
    formatted?: Maybe<PromiseFormatted>;
    /** Promise in ISO format. Example: { min: '2025-10-08T10:00:00Z', max: '2025-10-09T18:00:00Z' } */
    iso?: Maybe<PromiseFormatted>;
    /** Shipment level promise times. Example: { min: 1702051200, max: 1702137600 } */
    timestamp?: Maybe<PromiseTimestamp>;
};
/** Schema for individual shipment reason. */
export type ShipmentReason = {
    __typename?: 'ShipmentReason';
    /** The type of feedback. For example, `feedback_type` can be set to 'value'. */
    feedback_type?: Maybe<Scalars['String']['output']>;
    /** The process flow related to the reason. For example, `flow` can be set to 'value'. */
    flow?: Maybe<Scalars['String']['output']>;
    /** The priority level of the reason. For example, `priority` can be set to 5. */
    priority?: Maybe<Scalars['Int']['output']>;
    /** The unique identifier for the reason. For values please refer to the <a href='/partners/commerce/sdk/2.11.0/graphql/application/order/queries/shipment'>shipment.shipment_reasons.</a>. */
    reason_id?: Maybe<Scalars['Int']['output']>;
    /** The text describing the reason. For example, `reason_text` can be set to 'Customer requested cancellation'. */
    reason_text?: Maybe<Scalars['String']['output']>;
    /** A flag indicating whether to show a textbox on the frontend. For example, `show_text_area` can be set to true. */
    show_text_area?: Maybe<Scalars['Boolean']['output']>;
};
/** Shipment response details of the cart including how many shipments will be shipped for the items in cart and information about box type, order type, promise of each shipment and delivery partner details. */
export type ShipmentResponse = {
    __typename?: 'ShipmentResponse';
    /** Box type of the shipment. Example: 'standard' */
    box_type?: Maybe<Scalars['String']['output']>;
    /** Delivery partner id of the shipment. Example: 'DP_123' */
    dp_id?: Maybe<Scalars['String']['output']>;
    /** Delivery partner options available. Example: { preferred: 'Express' } */
    dp_options?: Maybe<Scalars['JSON']['output']>;
    /** Fulfillment id of the shipment. Example: 5678 */
    fulfillment_id?: Maybe<Scalars['Int']['output']>;
    /** Shipment Fulfillment Option Details. Example: { selected_option: 'store-pickup' } */
    fulfillment_option?: Maybe<FulfillmentOption>;
    /** Fulfillment type of shipment. Example: 'HomeDelivery' */
    fulfillment_type?: Maybe<Scalars['String']['output']>;
    /** Item details in the shipment. Example: [{ quantity: 1, identifiers: { identifier: 'line_abc' } }] */
    items?: Maybe<Array<Maybe<CartProductInfo>>>;
    /** Order type of the shipment (e.g., 'PickAtStore', 'HomeDelivery','Digital). Example: 'HomeDelivery' */
    order_type?: Maybe<OrderTypeEnum>;
    /** Shipment level promise (formatted, timestamp, ISO). */
    promise?: Maybe<DeliveryPromiseResponse>;
    /** Shipment type (single_shipment or multiple_shipment). Example: 'single_shipment' */
    shipment_type?: Maybe<Scalars['String']['output']>;
    /** Count of shipments that will be shipped. Example: 2 */
    shipments?: Maybe<Scalars['Int']['output']>;
};
/** Schema for shipment status. */
export type ShipmentStatus = {
    __typename?: 'ShipmentStatus';
    /** The hexadecimal color code associated with the shipment status. For example, `hex_code` can be set to 'sample_code'. */
    hex_code?: Maybe<Scalars['String']['output']>;
    /** The title or display name representing the shipment status. For example, `title` can be set to 'value'. */
    title?: Maybe<Scalars['String']['output']>;
    /** The internal or code value representing the shipment status. For example, `value` can be set to '999.0'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Schema for shipment total details. */
export type ShipmentTotalDetails = {
    __typename?: 'ShipmentTotalDetails';
    /** The total number of pieces included. For example, `pieces` can be set to 2. */
    pieces?: Maybe<Scalars['Int']['output']>;
    /** The number of different sizes included. For example, `sizes` can be set to 1. */
    sizes?: Maybe<Scalars['Int']['output']>;
    /** The total price of the order or item. For example, `total_price` can be set to 2499.5. */
    total_price?: Maybe<Scalars['Float']['output']>;
};
/** Schema for shipments user info. */
export type ShipmentUserInfo = {
    __typename?: 'ShipmentUserInfo';
    /** Email address of the user. For example, `email` can be set to 'user@example.com'. */
    email?: Maybe<Scalars['String']['output']>;
    /** First name of the user. For example, `first_name` can be set to 'John'. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** Gender of the user. For example, `gender` can be set to 'male'. */
    gender?: Maybe<Scalars['String']['output']>;
    /** Last name of the user. For example, `last_name` can be set to 'Doe'. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** Mobile number of the user. For example, `mobile` can be set to '9876543210'. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Full name of the user. For example, `name` can be set to 'John Doe'. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Schema for url component of short link which contains original link to be shortened, the hash of URL and the shortened URL. */
export type ShortLink = {
    __typename?: 'ShortLink';
    /** Original web address which will be converted to shortlink. */
    original?: Maybe<ShortLinkDetail>;
    /**
     * Schema for url component of short link which contains original link to be shortened, the hash of URL and the shortened URL.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
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
    /**
     * Additional attributes of shortlink.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    attribution?: Maybe<Attribution>;
    /**
     * Campaign attributes of shortlink.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    campaign?: Maybe<CampaignShortLink>;
    /** Click count of shortlink. */
    count?: Maybe<Scalars['Int']['output']>;
    /** The timestamp indicating when a record was initially created. */
    created_at?: Maybe<Scalars['String']['output']>;
    /**
     * Reference of the creator of the shortlink.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    created_by?: Maybe<Scalars['String']['output']>;
    /** Flag to enable tracking of a short link. */
    enable_tracking?: Maybe<Scalars['Boolean']['output']>;
    /** Expiry of the shortlink. */
    expire_at?: Maybe<Scalars['String']['output']>;
    /** Fallback attributes of shortlink. */
    fallback?: Maybe<RedirectType>;
    /** Key used to uniquely identify document that contains shortlink details. */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Additional attributes of shortlink.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /**
     * To create personalized short links.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
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
    /**
     * Identifier which can uniquely identify the user.
     * @deprecated This field is deprecated and will be removed in a future release.
     */
    user_id?: Maybe<Scalars['String']['output']>;
};
/** Request schema for creation of short link  that includes original link, meta data, hash of url, campaign attributes, redirect attributes and social media attributes of short link to be created. */
export type ShortLinkReqInput = {
    /** Status of the shortlink. */
    active?: InputMaybe<Scalars['Boolean']['input']>;
    /** Flag to enable tracking of a short link. */
    enable_tracking?: InputMaybe<Scalars['Boolean']['input']>;
    /** Expiry of the shortlink. ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ */
    expire_at?: InputMaybe<Scalars['String']['input']>;
    /** Redirects schema for redirection configuration for different mediums like device and web. */
    redirects?: InputMaybe<RedirectsInput>;
    /** Schema for Social Media Tags attributes of shortlink. */
    social_media_tags?: InputMaybe<SocialMediaTagsInput>;
    /** Give a name to the link. */
    title: Scalars['String']['input'];
    /** The web address to shorten. */
    url: Scalars['String']['input'];
};
/** Input for signing URLs with expiry time */
export type SignUrlInput = {
    /** The time in seconds until the signed URL expires. After this time, the signed_url will no longer work and a new one must be requested. Example: 300. */
    expiry: Scalars['Int']['input'];
    /** List of URLs to be signed. Provide the original URL/path for each file that needs temporary access. Example: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/company/61/self/legal/documents/free/original/sample.pdf". */
    urls: Array<InputMaybe<Scalars['String']['input']>>;
};
/** The response schema of the result for the presigned URLs */
export type SignUrlResult = {
    __typename?: 'SignUrlResult';
    /** List of signed URLs with their details */
    urls?: Maybe<Array<Maybe<SignedUrlData>>>;
};
/** Represents a signed URL with its expiration time */
export type SignedUrlData = {
    __typename?: 'SignedUrlData';
    /** The time in seconds until the signed URL expires. After this time, the signed_url will no longer work and a new one must be requested. Example: 300. */
    expiry?: Maybe<Scalars['Int']['output']>;
    /** A pre-signed URL that provides temporary access to the file in the private bucket. This URL includes authentication parameters and can be used to download the file directly. Valid until 'expiry' time. Example: "https://storage.googleapis.com/bucket/company/61/self/legal/documents/free/original/sample.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...&X-Goog-Signature=...". */
    signed_url?: Maybe<Scalars['String']['output']>;
    /** The original URL/path that was provided in the request. Example: "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/company/61/self/legal/documents/free/original/sample.pdf". */
    url?: Maybe<Scalars['String']['output']>;
};
/** Types of similar items that can be displayed. */
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
    secret?: Maybe<Scalars['String']['output']>;
    /** Registered User id. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Payment gateway verify payment api endpoint. */
    verify_api?: Maybe<Scalars['String']['output']>;
};
/** Size variant information including availability and stock details. */
export type Size = {
    __typename?: 'Size';
    /** Human-readable size display name, e.g. 'Small', 'Medium', 'Large', '32 inches'. */
    display?: Maybe<Scalars['JSON']['output']>;
    /** Indicates whether this size variant is currently available for purchase. */
    is_available?: Maybe<Scalars['Boolean']['output']>;
    /** Available stock quantity for this specific size, e.g. 10, 25, 50. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Internal size value or code, e.g. 'S', 'M', 'L', '32', '34'. */
    value?: Maybe<Scalars['JSON']['output']>;
};
/** Size chart providing detailed sizing information for products. */
export type SizeChart = {
    __typename?: 'SizeChart';
    /** Description related to the size chart. */
    description?: Maybe<Scalars['String']['output']>;
    /** Headers used in the size chart columns. */
    headers?: Maybe<ColumnHeaders>;
    /** Unique ID of the size chart. */
    id?: Maybe<Scalars['String']['output']>;
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
    /** Value for column 7. */
    col_7?: Maybe<Scalars['String']['output']>;
    /** Value for column 8. */
    col_8?: Maybe<Scalars['String']['output']>;
    /** Value for column 9. */
    col_9?: Maybe<Scalars['String']['output']>;
    /** Value for column 10. */
    col_10?: Maybe<Scalars['String']['output']>;
};
/** Type of social login are active or inactive for application. */
export type Social = {
    __typename?: 'Social';
    /**
     * Is AccountKit social login active for application or not. This feature is deprecated and no longer functional.
     * @deprecated AccountKit authentication is deprecated and no longer functional.
     */
    account_kit?: Maybe<Scalars['Boolean']['output']>;
    /** Is Apple social login active for application or not. */
    apple?: Maybe<Scalars['Boolean']['output']>;
    /** Is Facebook social login active for application or not. */
    facebook?: Maybe<Scalars['Boolean']['output']>;
    /** Is Google social login active for application or not. */
    google?: Maybe<Scalars['Boolean']['output']>;
};
/** Structure of credentials of account kit social. This type is deprecated and no longer functional. */
export type SocialAccountId = {
    __typename?: 'SocialAccountId';
    /**
     * App ID of the credentials account kit. This field is deprecated.
     * @deprecated AccountKit authentication is deprecated and no longer functional.
     */
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
    /**
     * Credentials of the AccountKit social login of application owner. This feature is deprecated and no longer functional.
     * @deprecated AccountKit authentication is deprecated and no longer functional.
     */
    accountkit?: Maybe<SocialAccountId>;
    /** Structure of credentials of Apple social login. */
    apple?: Maybe<AppleSocialAccount>;
    /** Structure of credentials of Facebook social. */
    facebook?: Maybe<SocialAccountId>;
    /** Structure of credentials of Google social. */
    google?: Maybe<SocialAccountId>;
};
/** Sorting options for data ordering. */
export declare enum Sort_On {
    /** Sorts items based on the depth of size options in descending order. */
    DepthDsc = "depth_dsc",
    /** Sorts items based on discount in ascending order. */
    DiscountAsc = "discount_asc",
    /** Sorts items based on discount in descending order. */
    DiscountDsc = "discount_dsc",
    /** Sorts items based on the latest added. */
    Latest = "latest",
    /** Sorts items based on popularity. */
    Popular = "popular",
    /** Sorts items based on price in ascending order. */
    PriceAsc = "price_asc",
    /** Sorts items based on price in descending order. */
    PriceDsc = "price_dsc"
}
/** Split payment configuration detail for a payment flow. */
export type SplitConfigurationDetail = {
    __typename?: 'SplitConfigurationDetail';
    /** Whether this split configuration is currently active. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Maximum number of split transactions allowed for a single order. */
    max_transactions_allowed?: Maybe<Scalars['Int']['output']>;
    /** Minimum transaction amount required to use split payment. */
    min_transaction_limit?: Maybe<SplitTransactionLimit>;
    /** Timeout settings for completing each split payment. */
    timeout?: Maybe<SplitPaymentTimeout>;
};
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
/** Timeout configuration for a split payment step. */
export type SplitPaymentTimeout = {
    __typename?: 'SplitPaymentTimeout';
    /** Category of timeout applied. 'standard' enforces a fixed duration via unit and value; 'no_limit' means no expiry and unit/value will be null. */
    timeout_type?: Maybe<Scalars['String']['output']>;
    /** Time unit for the timeout duration (e.g., 'minutes', 'hours'). Null when timeout_type is 'no_limit'. */
    unit?: Maybe<Scalars['String']['output']>;
    /** Numeric value of the timeout duration. Null when timeout_type is 'no_limit'. */
    value?: Maybe<Scalars['Int']['output']>;
};
/** Minimum transaction limit for split payment eligibility. */
export type SplitTransactionLimit = {
    __typename?: 'SplitTransactionLimit';
    /** How the limit is interpreted — 'absolute' means a fixed currency amount. 'percentage' means percentage of order amount. */
    limit_type?: Maybe<Scalars['String']['output']>;
    /** Minimum amount required to initiate a split payment. */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Archived zip containing complete theme code. */
export type Src = {
    __typename?: 'Src';
    /** Object containing theme bundles, eg: common.js, umd.js. */
    link?: Maybe<Scalars['String']['output']>;
};
/** Staff details for checkout on behalf of a customer. */
export type StaffCheckoutInput = {
    /** Staff ID. Example: 'staff_001' */
    _id: Scalars['String']['input'];
    /** Employee code. Example: 'EMP-42' */
    employee_code?: InputMaybe<Scalars['String']['input']>;
    /** First name. Example: 'John' */
    first_name: Scalars['String']['input'];
    /** Last name. Example: 'Doe' */
    last_name: Scalars['String']['input'];
    /** User ID of the staff. Example: 'usr_123' */
    user: Scalars['String']['input'];
};
/** The response schema provides detailed information about the file storage path, content type, associated metadata, etc */
export type StartUploadData = {
    __typename?: 'StartUploadData';
    /** The MIME type of the file being uploaded. Must match one of the valid content types for the namespace. Examples: "image/jpeg", "application/pdf", "text/csv", "video/mp4". Used for validation and proper file handling by the storage service. */
    content_type?: Maybe<Scalars['String']['output']>;
    /** The original name of the file to be uploaded. This is the filename provided in the request. Example: "product-image.jpg". */
    file_name?: Maybe<Scalars['String']['output']>;
    /** The complete storage path where the file will be stored in GCS. Auto-generated by the system based on the namespace rules. Format: /{namespace_path}/{hashed_filename}. This path is needed for the /complete API call after uploading. Example: "/user-profile-pic/free/original/abc123-profile.jpg". */
    file_path?: Maybe<Scalars['String']['output']>;
    /** The HTTP method to use when uploading to the signed URL. Always "PUT" for file uploads. Use this method when making the request to upload.url. Example: "PUT". */
    method?: Maybe<Scalars['String']['output']>;
    /** The namespace that determines file storage rules, validation, path generation, and access control (public/private bucket). Examples: "user-profile-pic" (public), "feedback-media" (public), "application-audience" (private). Each namespace has specific allowed content types and size limits. */
    namespace?: Maybe<Scalars['String']['output']>;
    /** The storage operation type to perform. Always "putObject" for file uploads. Indicates this is a write operation to create a new object in the storage bucket. Example: "putObject". */
    operation?: Maybe<Scalars['String']['output']>;
    /** The size of the file in bytes. Must match the actual file size. Used for validation against namespace size limits. The system validates this before generating the upload URL. Example: 524288. */
    size?: Maybe<Scalars['Int']['output']>;
    /** Optional array of string tags for categorizing and organizing the file. Tags can be provided in the request to attach metadata to the file. Can be used later for filtering and searching. Examples: ["product", "thumbnail"], ["invoice", "2024"], []. Defaults to empty array if not provided. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Contains the pre-signed upload URL and its expiration time. */
    upload?: Maybe<Upload>;
};
/** The request schema for initiating a file upload includes the file metadata such as name, content type, size, and optional tags. */
export type StartUploadReqInput = {
    /** The MIME type of the file being uploaded. Must match one of the valid content types for the namespace. Examples: "image/jpeg", "application/pdf", "text/csv", "video/mp4". Used for validation and proper file handling by the storage service. */
    content_type: Scalars['String']['input'];
    /** The original name of the file to be uploaded. This is the filename provided in the request. Example: "product-image.jpg". */
    file_name: Scalars['String']['input'];
    /** Additional parameters for file processing and storage location. */
    params?: InputMaybe<FileUploadParamsInput>;
    /** The size of the file in bytes. Must match the actual file size. Used for validation against namespace size limits. The system validates this before generating the upload URL. Example: 524288. */
    size: Scalars['Int']['input'];
    /** Optional array of string tags for categorizing and organizing the file. Tags can be provided in the request to attach metadata to the file. Can be used later for filtering and searching. Examples: ["product", "thumbnail"], ["invoice", "2024"], []. Defaults to empty array if not provided. */
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
/** Schema for shipments request. */
export type StatusUpdateShipmentsInput = {
    /** Schema for data updates. <br> Example: { entities: [...], products: [...] }. */
    data_updates?: InputMaybe<DataUpdatesInput>;
    /** The unique identifier for request which is the shipment_id. For example, '16736576489251696245'. */
    identifier: Scalars['String']['input'];
    /** Specific bag to be updated. Example: [{ identifier: '21500347', line_number: 1, quantity: 1 }]. */
    products?: InputMaybe<Array<InputMaybe<ProductsInput>>>;
    /** Used to capture cancellation, return, or failure reasons across both shipment (entity) and product (bag) levels. Example: { entities: [...], products: [...] }. */
    reasons?: InputMaybe<ReasonsDataInput>;
    /** Modes for processing refunds. */
    refund_modes?: InputMaybe<Array<InputMaybe<RefundMode>>>;
    /**
     * A list of comments or annotations provided during a status transition or data update on the shipment.
     * Each comment helps capture the intent, context, or the user action performed — such as assigning a delivery partner, updating address, or retrying delivery.
     * Useful for audit trails, communication, and debugging purposes.
     */
    transition_comments?: InputMaybe<Array<InputMaybe<TransitionCommentsInput>>>;
};
/** Schema for Statuses body response. */
export type StatusesBodyResponse = {
    __typename?: 'StatusesBodyResponse';
    /** List of shipments. For example, `shipments` can be set to [{ key: 'value' }]. */
    shipments?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};
/** Schema for status update for shipments. */
export type StatusesRequestInput = {
    /**
     * Other line items in the not included in StatusesRequestInput.Shipments will be transitioned to this state.
     * Please refer for detailed
     * <a href='commerce/miscellaneous/updateShipmentStatus/#4-partial-confirmation-at-products-and-quantity-level\'>example.</a>
     */
    exclude_bags_next_state?: InputMaybe<Scalars['String']['input']>;
    /** A list containing information about shipments. Example: [{ identifier: '16736576489251696245', products: [{ identifier: '21500347', line_number: 1, quantity: 1 }] }]. */
    shipments?: InputMaybe<Array<InputMaybe<StatusUpdateShipmentsInput>>>;
    /**
     * The status to which the shipment is to be transitioned. For example, 'bag_confirmed', 'delivered', or 'return_bag_delivered'.
     * For list of status please refer <a href='/commerce/getting-started/oms-states/'>OMS States</a>.
     */
    status?: InputMaybe<Scalars['String']['input']>;
};
/** Application stores with filters and pagination. */
export type StockLocations = {
    __typename?: 'StockLocations';
    /** Filters applied to the store listing. */
    filters?: Maybe<Array<Maybe<ApplicationStoreFilterListing>>>;
    /** List of application stores. */
    items?: Maybe<Array<Maybe<Store>>>;
    /** Store listing pagination details. */
    page?: Maybe<PageInfo>;
};
/** Store details including contact information, address, and geographic coordinates. */
export type Store = {
    __typename?: 'Store';
    /**
     * Custom JSON data for additional store configuration and metadata.
     * @deprecated This field is obsolete.
     */
    _custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Additional contact numbers and information for the store. */
    additional_contacts?: Maybe<Array<Maybe<ContactDetails>>>;
    /** Complete store address including street, city, state, and coordinates. */
    address?: Maybe<StoreAddress>;
    /**
     * Whether courier partner assignment is done automatically by the system.
     * @deprecated This field is obsolete.
     */
    auto_assign_courier_partner?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Indicates whether automatic invoice generation is enabled for the store.
     * @deprecated This field is obsolete.
     */
    auto_invoice?: Maybe<Scalars['Boolean']['output']>;
    /** Average order processing time at this store location. */
    avg_order_processing_time?: Maybe<OrderProcessingTime>;
    /**
     * Whether bulk shipment processing is enabled for large orders.
     * @deprecated This field is obsolete.
     */
    bulk_shipment?: Maybe<Scalars['Boolean']['output']>;
    /** Company information that owns and operates the store. */
    company?: Maybe<CompanyStore>;
    /**
     * Identifier of the parent company to which the store belongs.
     * @deprecated This field is obsolete.
     */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** List of store contact phone numbers with country codes. */
    contact_numbers?: Maybe<Array<Maybe<StorePhoneNumber>>>;
    /**
     * Indicates whether credit note issuance feature is enabled for returns and refunds.
     * @deprecated This field is obsolete.
     */
    credit_note?: Maybe<Scalars['Boolean']['output']>;
    /** Additional custom attributes associated with the store for extended store configuration and metadata */
    custom_fields?: Maybe<Array<Maybe<CustomField>>>;
    /**
     * Custom JSON data for additional store configuration and metadata.
     * @deprecated This field is obsolete.
     */
    custom_json?: Maybe<Scalars['JSON']['output']>;
    /** Whether the store uses default order acceptance timing configuration. */
    default_order_acceptance_timing?: Maybe<Scalars['Boolean']['output']>;
    /**
     * List of departments available within the store (e.g., Electronics, Fashion, Home).
     * @deprecated This field is obsolete.
     */
    departments?: Maybe<Array<Maybe<StoreDepartment>>>;
    /** Display name of the store as shown to customers (e.g., 'Central Park Store'). */
    display_name?: Maybe<Scalars['String']['output']>;
    /**
     * GST (Goods and Services Tax) credentials and configuration for the store.
     * @deprecated This field is obsolete.
     */
    gst_credentials?: Maybe<GstCredentialsConfiguration>;
    /** Store manager contact and identification information. */
    manager: StoreManagerSerializer;
    /** Display name of the store (e.g., 'Downtown Mall Store', 'Airport Branch'). */
    name?: Maybe<Scalars['String']['output']>;
    /** Custom order acceptance timing schedule for weekdays when not using defaults. */
    order_acceptance_timing?: Maybe<Array<Maybe<OrderTiming>>>;
    /** Product return policy and configuration settings for the store. */
    product_return_config?: Maybe<ProductReturnConfiguration>;
    /**
     * Current operational stage or status of the store (e.g., 'verified', 'pending', 'active').
     * @deprecated This field is obsolete.
     */
    stage?: Maybe<Scalars['String']['output']>;
    /**
     * Unique store code or identifier for internal reference (e.g., 'NYC001', 'LAX024').
     * @deprecated This field is obsolete.
     */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Type classification of the store (e.g., 'retail', 'warehouse', 'flagship', 'outlet'). */
    store_type?: Maybe<Scalars['String']['output']>;
    /** Store operating hours for each day of the week with opening and closing times. */
    timing?: Maybe<Array<Maybe<StoreTiming>>>;
    /** Unique numeric identifier for the store (e.g., 123, 456, 789). */
    uid: Scalars['Int']['output'];
};
/** Store details including contact information, address, and geographic coordinates. */
export type StoreCustom_FieldsArgs = {
    keys?: InputMaybe<Array<Scalars['String']['input']>>;
    namespaces?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** The address details for the store. */
export type StoreAddress = {
    __typename?: 'StoreAddress';
    /** The address line 1 of the store. */
    address1?: Maybe<Scalars['String']['output']>;
    /** The address line2 of the store. */
    address2?: Maybe<Scalars['String']['output']>;
    /**
     * Meta information related to the store's address.
     * @deprecated This field is obsolete.
     */
    address_meta?: Maybe<Scalars['JSON']['output']>;
    /** The city where the store is located. */
    city?: Maybe<Scalars['String']['output']>;
    /** The country where the store is located. */
    country?: Maybe<Scalars['String']['output']>;
    /** Country code for the store address. */
    country_code?: Maybe<Scalars['String']['output']>;
    /** A landmark near the store. */
    landmark?: Maybe<Scalars['String']['output']>;
    /** Geographic coordinates of the store location. */
    lat_long?: Maybe<LatLong>;
    /**
     * The latitude of the store's location.
     * @deprecated This field is obsolete. Use lat_long field instead which provides coordinates in GeoJSON Point format.
     */
    latitude?: Maybe<Scalars['Float']['output']>;
    /**
     * The longitude of the store's location.
     * @deprecated This field is obsolete. Use lat_long field instead which provides coordinates in GeoJSON Point format.
     */
    longitude?: Maybe<Scalars['Float']['output']>;
    /**
     * The postal code for the store's location.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** The postal code for the store's location. */
    postal_code?: Maybe<Scalars['String']['output']>;
    /** The state where the store is located. */
    state?: Maybe<Scalars['String']['output']>;
};
/** Store listing response with pagination information. */
export type StoreConnection = {
    __typename?: 'StoreConnection';
    /** Array of store details including name, address, and coordinates. */
    items: Array<Maybe<StoreDetail>>;
    /** Pagination information for the store listing. */
    page: PageInfo;
};
/** Store department details. */
export type StoreDepartment = {
    __typename?: 'StoreDepartment';
    /** Whether the department is currently active and operational. */
    is_active?: Maybe<Scalars['Boolean']['output']>;
    /** Logo image information and metadata for the department. */
    logo?: Maybe<Scalars['JSON']['output']>;
    /** Display name of the store department (e.g., 'Electronics', 'Fashion', 'Home & Garden'). */
    name?: Maybe<Scalars['String']['output']>;
    /** Priority or ranking order for department display (e.g., 1, 2, 3 - lower numbers appear first). */
    priority_order?: Maybe<Scalars['Int']['output']>;
    /** URL-friendly identifier for the store department (e.g., 'electronics', 'fashion', 'home-garden'). */
    slug?: Maybe<Scalars['String']['output']>;
    /** Unique identifier assigned to the store department (e.g., 101, 102, 103). */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Detailed store information. */
export type StoreDetail = {
    __typename?: 'StoreDetail';
    /** Store street address. */
    address?: Maybe<Scalars['String']['output']>;
    /**
     * Whether courier partner assignment is automatic.
     * @deprecated This field is obsolete.
     */
    auto_assign_courier_partner?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Whether auto-invoice is enabled for the store.
     * @deprecated This field is obsolete.
     */
    auto_invoice?: Maybe<Scalars['Boolean']['output']>;
    /** Average order processing time. */
    avg_order_processing_time?: Maybe<OrderProcessingTime>;
    /**
     * Whether bulk shipment is enabled for the store.
     * @deprecated This field is obsolete.
     */
    bulk_shipment?: Maybe<Scalars['Boolean']['output']>;
    /** City where the store is located. */
    city?: Maybe<Scalars['String']['output']>;
    /**
     * Identifier of the company to which the store belongs.
     * @deprecated This field is obsolete.
     */
    company_id?: Maybe<Scalars['Int']['output']>;
    /** Store contact details. */
    contact_numbers?: Maybe<Array<Maybe<StorePhoneNumber>>>;
    /** Store contact numbers. */
    contacts?: Maybe<Array<Maybe<ContactDetails>>>;
    /** Country where the store is located. */
    country?: Maybe<Scalars['String']['output']>;
    /**
     * Whether credit note issuance is enabled.
     * @deprecated This field is obsolete.
     */
    credit_note?: Maybe<Scalars['Boolean']['output']>;
    /** Whether the store has default order acceptance timings. */
    default_order_acceptance_timing?: Maybe<Scalars['Boolean']['output']>;
    /** Display name of the store. */
    display_name?: Maybe<Scalars['String']['output']>;
    /**
     * GST credentials for the store.
     * @deprecated This field is obsolete.
     */
    gst_credentials?: Maybe<GstCredentialsConfiguration>;
    /** Geographic coordinates of the store, including latitude and longitude. */
    lat_long?: Maybe<LatLong>;
    /** Store manager contact number. */
    manager_contact?: Maybe<Scalars['String']['output']>;
    /** Store name. */
    name?: Maybe<Scalars['String']['output']>;
    /** Order acceptance timings for each weekday. */
    order_acceptance_timing?: Maybe<Array<Maybe<OrderTiming>>>;
    /**
     * Postal code or zip code for the store's location.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** Postal code for the store's location. */
    postal_code?: Maybe<Scalars['String']['output']>;
    /** Product return configuration for the store. */
    product_return_config?: Maybe<ProductReturnConfiguration>;
    /**
     * Stage or status of the store (e.g., 'verified', 'pending', 'active').
     * @deprecated This field is obsolete.
     */
    stage?: Maybe<Scalars['String']['output']>;
    /** State or province where the store is located. */
    state?: Maybe<Scalars['String']['output']>;
    /**
     * Unique store code or identifier for internal reference. (e.g., 'NYC001', 'LAX024').
     * @deprecated This field is obsolete.
     */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Store manager's email address. */
    store_email?: Maybe<Scalars['String']['output']>;
    /** Type of the store. */
    store_type?: Maybe<Scalars['String']['output']>;
    /** List of tags mapped to the store. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Unique store identifier. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Distance information from the user's location to the store. */
export type StoreDistance = {
    __typename?: 'StoreDistance';
    /** Reason if distance cannot be calculated (e.g., 'invalid_customer_location'). */
    reason?: Maybe<Scalars['String']['output']>;
    /** Unit of measurement for the distance (e.g., 'm' for meters, 'km' for kilometers). */
    unit?: Maybe<Scalars['String']['output']>;
    /** Distance value from the user's location (e.g., 1500, 1830). */
    value?: Maybe<Scalars['Float']['output']>;
};
/** Represents the store's operating hours for a specific day of the week. */
export type StoreHours = {
    __typename?: 'StoreHours';
    /** Closing time of the store. Example: { hour: 21, minute: 0 } */
    closing?: Maybe<StoreTime>;
    /** Indicates whether the store is open on the specified weekday. Example: true */
    open?: Maybe<Scalars['Boolean']['output']>;
    /** Opening time of the store. Example: { hour: 9, minute: 0 } */
    opening?: Maybe<StoreTime>;
    /** The day of the week (e.g., 'Monday', 'Tuesday'). Example: 'Monday' */
    weekday?: Maybe<Scalars['String']['output']>;
};
/** Store information of the store which includes store name, store id and store code. */
export type StoreInfo = {
    __typename?: 'StoreInfo';
    /** Store name of the store from where the product is fulfilled. Example: 'Fynd Andheri' */
    name?: Maybe<Scalars['String']['output']>;
    /** A unique code/identifier for the store. Example: 'ANDH001' */
    store_code?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of the store. Example: 2001 */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** Store manager details. */
export type StoreManagerSerializer = {
    __typename?: 'StoreManagerSerializer';
    /** Store manager email address. */
    email?: Maybe<Scalars['String']['output']>;
    /** Contact details for the store manager. */
    mobile_no?: Maybe<StorePhoneNumber>;
    /** Store manager name. */
    name?: Maybe<Scalars['String']['output']>;
};
/** Store phone number with country code. */
export type StorePhoneNumber = {
    __typename?: 'StorePhoneNumber';
    /** Country code (e.g., +91). */
    country_code?: Maybe<Scalars['Int']['output']>;
    /** Phone number. */
    number?: Maybe<Scalars['String']['output']>;
};
/** Contains details of delivery promises for each store. */
export type StorePromise = {
    __typename?: 'StorePromise';
    /** Code assigned to a store. */
    code?: Maybe<Scalars['String']['output']>;
    /** Name of a store. */
    name?: Maybe<Scalars['String']['output']>;
    /** Delivery promise information like max and min. */
    promise?: Maybe<DeliveryPromiseInfo>;
    /** Unique identifier of a store. */
    uid?: Maybe<Scalars['Int']['output']>;
};
/** The opening time of the store. */
export type StoreTime = {
    __typename?: 'StoreTime';
    /** The hour of the store in 24-hour format (e.g., 9 for 9 AM). Example: 9 */
    hour?: Maybe<Scalars['Int']['output']>;
    /** The minute of the store (e.g., 30 for 9:30 AM). Example: 30 */
    minute?: Maybe<Scalars['Int']['output']>;
};
/** Store opening and closing times for a specific weekday. */
export type StoreTiming = {
    __typename?: 'StoreTiming';
    /** Closing time with hour and minute. Example: { hour: 21, minute: 30 } */
    closing?: Maybe<Time>;
    /** Whether the store is open on this day. Example: true */
    open?: Maybe<Scalars['Boolean']['output']>;
    /** Opening time with hour and minute. Example: { hour: 11, minute: 0 } */
    opening?: Maybe<Time>;
    /** Day of the week. Example: monday */
    weekday?: Maybe<Weekday>;
};
/** Store timing information including operational and order acceptance timings. */
export type StoreTimingDetails = {
    __typename?: 'StoreTimingDetails';
    /** Hours when the store is physically open and operational for customers. This defines when the store is available for walk-ins and general operations. Example: [{ weekday: "monday", open: true, opening: { hour: 11, minute: 0 }, closing: { hour: 21, minute: 30 } }] */
    operational_timing?: Maybe<Array<Maybe<StoreTiming>>>;
    /** Hours when the store accepts new orders. This may differ from operational timing as stores might stop accepting orders before closing time to ensure fulfillment. Example: [{ weekday: "monday", open: true, opening: { hour: 11, minute: 0 }, closing: { hour: 20, minute: 30 } }] */
    order_acceptance_timing?: Maybe<Array<Maybe<StoreTiming>>>;
};
/** Different types of stores available. */
export declare enum StoreType {
    Hard = "hard",
    Soft = "soft"
}
/** Stored payment methods, including saved cards and UPI IDs. */
export type StoredPaymentDetails = {
    __typename?: 'StoredPaymentDetails';
    /** aggregator name */
    aggregator_name?: Maybe<Scalars['String']['output']>;
    /** Brand of the card (e.g., Visa, MasterCard). */
    card_brand?: Maybe<CardBrand>;
    /** Image representing the card brand. */
    card_brand_image?: Maybe<Scalars['String']['output']>;
    /** Unique fingerprint of the card for identification. */
    card_fingerprint?: Maybe<Scalars['String']['output']>;
    /** Unique identifier for the card saved at aggregators end. */
    card_id?: Maybe<Scalars['String']['output']>;
    /** International Securities Identification Number for the card. */
    card_isin?: Maybe<Scalars['String']['output']>;
    /** Issuing bank or institution of the card. */
    card_issuer?: Maybe<Scalars['String']['output']>;
    /** Name printed on the card. */
    card_name?: Maybe<Scalars['String']['output']>;
    /** Card number displayed in its masked format. */
    card_number?: Maybe<Scalars['String']['output']>;
    /** Reference identifier for the card. */
    card_reference?: Maybe<Scalars['String']['output']>;
    /** Encrypted token representing the card. */
    card_token?: Maybe<Scalars['String']['output']>;
    /** Type of the card (e.g., debit, credit). */
    card_type?: Maybe<Scalars['String']['output']>;
    /** Indicates compliance with tokenization guidelines. */
    compliant_with_tokenisation_guidelines?: Maybe<Scalars['Boolean']['output']>;
    /** Length of the CVV (Card Verification Value) for the card. */
    cvv_length?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the card can be used without a CVV. */
    cvv_less?: Maybe<Scalars['Boolean']['output']>;
    /** Display name for the card in the user interface. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Card's expiration month. */
    exp_month?: Maybe<Scalars['Int']['output']>;
    /** Card's expiration year. */
    exp_year?: Maybe<Scalars['Int']['output']>;
    /** Indicates whether the card is expired. */
    expired?: Maybe<Scalars['Boolean']['output']>;
    /** Payment Mode Logo. */
    logo_url?: Maybe<Logo>;
    /** Payment methods meta such as Country code associated with the payment instrument. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The name of the customer associated with the saved payment instrument, such as the cardholder or UPI account holder. */
    name?: Maybe<Scalars['String']['output']>;
    /** User-defined name for the card. */
    nickname?: Maybe<Scalars['String']['output']>;
    /** The Virtual Payment Address (VPA) associated with the saved UPI ID for processing UPI transactions */
    vpa?: Maybe<Scalars['String']['output']>;
};
/** Strategy-based store assignment and fulfillment details. */
export type StrategyWiseListing = {
    __typename?: 'StrategyWiseListing';
    /** Distance between fulfillment location and customer location in kilometers, e.g. 5, 15, 25. */
    distance?: Maybe<Scalars['Int']['output']>;
    /**
     * PIN code mapped for this fulfillment strategy, e.g. 400001, 110001.
     * @deprecated pincode is deprecated. Use postal_code instead.
     */
    pincode?: Maybe<Scalars['Int']['output']>;
    /** Postal code for strategy-based assignment, e.g. '400001', '10001'. */
    postal_code?: Maybe<Scalars['String']['output']>;
    /** Available inventory quantity at the assigned store location. */
    quantity?: Maybe<Scalars['Int']['output']>;
    /** Turnaround time to deliver the product using this strategy (in hours), e.g. 24, 48, 72. */
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
    /**
     * Masked payment gateway api secret.
     * @deprecated This is deprecated and will be removed in a future release.
     */
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
    /**
     * Application ID - Identifier for a Sales channel. For example, '622ad5f0a5c59f33cc15ae16'.
     * @deprecated This field is obsolete.
     */
    application?: Maybe<Scalars['String']['output']>;
    /** Details regarding the customer support contact details. */
    contact?: Maybe<ContactSchema>;
    /**
     * Whether support contact details are created or not. For example, true or false.
     * @deprecated This field is obsolete.
     */
    created?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Timestamp which represent the time when data was created. For example, '2024-01-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '622ad5f0a5c59f33cc15ae16'. */
    id?: Maybe<Scalars['String']['output']>;
    /**
     * Timestamp which represent when was the last time when data was updated. For example, '2024-01-20T14:45:00Z'.
     * @deprecated This field is obsolete.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** Ticket created on form submission. */
export type SupportTicket = {
    __typename?: 'SupportTicket';
    /**
     * Custom json relevant to the ticket.
     * @deprecated This field is obsolete.
     */
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
    /** Time when the ticket was created. This will be an ISO string. Example: '2024-03-27T14:35:00Z' */
    created_at?: Maybe<Scalars['String']['output']>;
    /**
     * User details of ticket creator.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<Scalars['JSON']['output']>;
    /** Time of creation of the history event. */
    created_on?: Maybe<CreatedOn>;
    /**
     * Integration type and its details of the ticket.
     * @deprecated This field is obsolete.
     */
    integration?: Maybe<Scalars['JSON']['output']>;
    /**
     * If feedback submission is pending for the ticket.
     * @deprecated This field is obsolete.
     */
    is_feedback_pending?: Maybe<Scalars['Boolean']['output']>;
    /** Denotes the priority of ticket. */
    priority?: Maybe<Priority>;
    /**
     * Details of company and application related to the ticket.
     * @deprecated This field is obsolete.
     */
    response_id?: Maybe<Scalars['String']['output']>;
    /**
     * Denotes if the ticket was created at company or application level.
     * @deprecated This field is obsolete.
     */
    source?: Maybe<TicketSourceEnum>;
    /** Denotes in what state is the ticket. */
    status?: Maybe<Status>;
    /** Sub-category assigned to the ticket. */
    sub_category?: Maybe<Scalars['String']['output']>;
    /** Tags relevant to ticket. */
    tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    /** Time when the ticket was last updated. This will be an ISO string. Example: '2024-03-27T14:35:00Z' */
    updated_at?: Maybe<Scalars['String']['output']>;
};
/** List of payment methods supported by the merchant. */
export type SupportedMethodDetails = {
    __typename?: 'SupportedMethodDetails';
    /** URL of the logo representing the supported payment method. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Name of the supported payment method enabled by the merchant (e.g., Visa, GPay). */
    name?: Maybe<Scalars['String']['output']>;
};
/** Position options for tag placement. */
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
    /** Defines the frameworks where tags are compatible, supporting ReactJS and Vue2 */
    compatible_engines?: Maybe<Array<Maybe<CompatibleEngine>>>;
    /** Content of tag. For example, '<script>console.log("Hello");</script>' or CSS styles. */
    content?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of an entry. For example, '66868055215df804b3eb4434'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Name of the html tag. For example, 'google-analytics' or 'facebook-pixel'. */
    name?: Maybe<Scalars['String']['output']>;
    /** List of all the page where tag is to be added. For example, {"page_slug": "home", "page_name": "Home"}. */
    pages?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
    /** Position where Tag is so to be placed. For example, 'head', 'body', or 'footer'. */
    position?: Maybe<Scalars['String']['output']>;
    /**
     * Details regarding the extension which has added/created the tag.
     * @deprecated This field is obsolete.
     */
    source?: Maybe<TagSource>;
    /** Whether js/css is external or inline. */
    sub_type?: Maybe<TagSubType>;
    /** Whether Tag is JS or CSS. */
    type?: Maybe<TagType>;
    /** URL at which css or js might be hosted. For example, 'https://cdn.example.com/script.js'. */
    url?: Maybe<Scalars['String']['output']>;
};
/** Data related to Third party injectable html tags. */
export type TagSource = {
    __typename?: 'TagSource';
    /** Identifier of an extension. For example, '66868055215df804b3eb4434'. */
    id?: Maybe<Scalars['String']['output']>;
    /** Type of creator of tag. For example, 'extension' or 'custom'. */
    type?: Maybe<Scalars['String']['output']>;
};
/** Subtypes of tags for categorization. */
export declare enum TagSubType {
    External = "external",
    Inline = "inline"
}
/** Types of tags available in the system. */
export declare enum TagType {
    Css = "css",
    Js = "js"
}
/** List of labels or batches attached to a product in cart. */
export type Tags = {
    __typename?: 'Tags';
    /** Label(s) attached to a product in cart. Example: { seasonal: 'winter' } */
    tags?: Maybe<Scalars['JSON']['output']>;
};
/** Represents a detailed breakdown of a specific tax component applied to a transaction or item. This includes the type of tax, the rate at which it is applied, the calculated tax amount, and the base amount on which the tax is computed. */
export type TaxComponent = {
    __typename?: 'TaxComponent';
    /** The name or type of the tax component (e.g., GST, VAT, Service Tax). This helps in identifying the specific tax being applied to the transaction or item. */
    name?: Maybe<Scalars['String']['output']>;
    /** The percentage rate at which the tax is applied to the taxable amount. Typically represented as a decimal (e.g., 0.18 for 18% tax). */
    rate?: Maybe<Scalars['Float']['output']>;
    /** The total monetary value of the tax calculated for this component. This is derived by applying the tax rate to the taxable amount. For example, `tax_amount` can be set to 2499.5. */
    tax_amount?: Maybe<Scalars['Float']['output']>;
    /** The base amount on which the tax is calculated, excluding the tax itself. This represents the value of goods or services before tax is applied. For example, `taxable_amount` can be set to 2499.5. */
    taxable_amount?: Maybe<Scalars['Float']['output']>;
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
export type ThemePreview_ThemeArgs = {
    filters?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Schema for theme-specific details to fetch. */
export type ThemeTheme_Page_DetailArgs = {
    company?: InputMaybe<Scalars['Int']['input']>;
    filters?: InputMaybe<Scalars['Boolean']['input']>;
    pageValue: Scalars['String']['input'];
    sectionPreviewHash?: InputMaybe<Scalars['String']['input']>;
    urlParams?: InputMaybe<Scalars['String']['input']>;
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
    /** Archived zip containing complete theme code. */
    src?: Maybe<Scalars['String']['output']>;
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
/** Types of themes available. */
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
/** Types of assets that can be attached to tickets. */
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
    /**
     * Support category array list details.
     * @deprecated This field is obsolete.
     */
    feedback_form?: Maybe<FeedbackForm>;
    /**
     * Group id of category related data.
     * @deprecated This field is obsolete.
     */
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
/** Sources from which tickets can be created. */
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
    /** The maximum timestamp value. For example, `max` can be set to 'value'. */
    max?: Maybe<Scalars['String']['output']>;
    /** The minimum timestamp value. For example, `min` can be set to 'value'. */
    min?: Maybe<Scalars['String']['output']>;
};
/** Represents various tokens used for integrating different services within the sales channel. */
export type TokenDetails = {
    __typename?: 'TokenDetails';
    /** Firebase integration configuration and credentials. */
    firebase: Firebase;
    /** Freshchat integration configuration and credentials. */
    freshchat: Freshchat;
    /** Fynd Rewards integration configuration and credentials. */
    fynd_rewards: FyndRewards;
    /** Google Maps integration configuration and credentials. */
    google_map: GoogleMap;
    /** Google Tag Manager integration configuration and credentials. */
    gtm: Gtm;
    /** MoEngage integration configuration and credentials. */
    moengage: Moengage;
    /** SafetyNet integration configuration and credentials. */
    safetynet: Safetynet;
    /** Segment integration configuration and credentials. */
    segment: Segment;
};
/** Describes the request structure to login or register using a token. */
export type TokenRequestBodySchemaInput = {
    /** Authentication/verification token. */
    token: Scalars['String']['input'];
};
/** Schema for tokens associated with the sales channel. */
export type TokenSchema = {
    __typename?: 'TokenSchema';
    /**
     * Timestamp when token was created, e.g. '2023-10-15T10:30:00Z'.
     * @deprecated This field is obsolete.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /**
     * Details of the user who created the token.
     * @deprecated This field is obsolete.
     */
    created_by?: Maybe<Scalars['JSON']['output']>;
    /** The token string value. */
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
    /** The name of the account handling the shipment. For example, `account_name` can be set to 'Sample Name'. */
    account_name?: Maybe<Scalars['String']['output']>;
    /** The Air Waybill (AWB) number for the shipment. For example, `awb` can be set to 'value'. */
    awb?: Maybe<Scalars['String']['output']>;
    /** The last known location of the shipment. For example, `last_location_recieved_at` can be set to 'value'. */
    last_location_recieved_at?: Maybe<Scalars['String']['output']>;
    /** A field to store additional metadata related to the courier partner's operations or the shipment. For example, `meta` can be set to { key: 'value' }. */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** The reason or additional information about the shipment. For example, `reason` can be set to 'Customer requested cancellation'. */
    reason?: Maybe<Scalars['String']['output']>;
    /** The type of shipment. For example, `shipment_type` can be set to 'value'. */
    shipment_type?: Maybe<Scalars['String']['output']>;
    /** The current status of the shipment. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
    /** The date and time when the shipment was last updated. For example, `updated_at` can be set to '2024-11-01T10:00:00Z'. */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** The timestamp of the last update. For example, `updated_time` can be set to '2024-11-01T10:00:00Z'. */
    updated_time?: Maybe<Scalars['String']['output']>;
};
/** Shipment tracking details. */
export type TrackShipment = {
    __typename?: 'TrackShipment';
    /** A array containing tracking details. For example, `results` can be set to [a Track object]. */
    results?: Maybe<Array<Maybe<Track>>>;
};
/** Schema for tracking details. */
export type TrackingDetails = {
    __typename?: 'TrackingDetails';
    /**
     * Timestamp when this status was created. For example, `created_ts` can be set to 'value'.
     * @deprecated This field is obsolete.
     */
    created_ts?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the tracking event is the current or active status. For example, `is_current` can be set to true. */
    is_current?: Maybe<Scalars['Boolean']['output']>;
    /** Indicates whether the tracking event has passed or occurred. For example, `is_passed` can be set to true. */
    is_passed?: Maybe<Scalars['Boolean']['output']>;
    /** The status of the tracking event. For example, `status` can be set to 'processing'. */
    status?: Maybe<Scalars['String']['output']>;
    /** The time associated with the tracking event. For example, `time` can be set to '2024-11-01T10:00:00Z'. */
    time?: Maybe<Scalars['String']['output']>;
    /** Nested tracking details. For example, `tracking_details` can be set to [a NestedTrackingDetails object]. */
    tracking_details?: Maybe<Array<Maybe<NestedTrackingDetails>>>;
    /** Current value or state of the process. For example, `value` can be set to '999.0'. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Trader information and identification details. */
export type Trader = {
    __typename?: 'Trader';
    /** Unique key identifier for the trader, e.g. 'trader_id', 'license_no'. */
    key?: Maybe<Scalars['String']['output']>;
    /** Trader value or name, e.g. 'ABC Trading Co.', 'TRD123456'. */
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
/**
 * Schema used to capture comments or notes related to status transitions or data update actions on a shipment.
 * It helps track the context and reason behind each change in the system.
 */
export type TransitionCommentsInput = {
    /**
     * A detailed explanation of the action or change, including any important metadata such as AWB number, partner name, or identifiers.
     * For example, "The Expressbees delivery partner is assigned to the shipment. AWB number: 132134131222, extension_id: 3dsa31230912039890210".
     */
    message?: InputMaybe<Scalars['String']['input']>;
    /** A short, meaningful title summarizing the context of the transition. For example, 'Assigned Delivery Partner' */
    title?: InputMaybe<Scalars['String']['input']>;
};
/** General type classifications. */
export declare enum Type {
    Permanent = "permanent",
    Temporary = "temporary"
}
/** Urls for umd javascript assets. */
export type UmdJs = {
    __typename?: 'UmdJs';
    /** A string representing the url or link to the UmdJs module. */
    link?: Maybe<Scalars['String']['output']>;
    /** An array of strings representing urls or links. */
    links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
/** Units of measurement for various quantities. */
export declare enum Unit {
    L = "L",
    Cm = "cm",
    G = "g",
    Kg = "kg",
    M = "m",
    Ml = "ml",
    Nos = "nos",
    Pack = "pack"
}
/** Update address response details, includes address id, updated flag and success flag. */
export type UpdateAddressResponse = {
    __typename?: 'UpdateAddressResponse';
    /** Unique id associated with address. Example: 101 */
    address_id?: Maybe<Scalars['Int']['output']>;
    /** ID of an address. Example: 'addr_001' */
    id?: Maybe<Scalars['String']['output']>;
    /** Whether this is the default address. Example: true */
    is_default_address?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Whether the address was updated. Example: true
     * @deprecated This field is obsolete
     */
    is_updated?: Maybe<Scalars['Boolean']['output']>;
    /** Success flag of update address response. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Request to update cart breakup-level settings. */
export type UpdateCartBreakupRequestInput = {
    /** Apply store credits on the cart. Example: true */
    store_credit: Scalars['Boolean']['input'];
};
/** Update cart detail response schema denotes cart data and message of the update cart API response. */
export type UpdateCartDetailResponse = {
    __typename?: 'UpdateCartDetailResponse';
    /** Get cart detail API response schema which includes applied promo details, breakup values, buy_now, cart id, checkout mode, comment common config, coupon, coupon text, gstin etc. */
    cart?: Maybe<Cart>;
    /** List of items involved. Example: [{ item_id: 123, size: 'M', store_id: 1, success: true }] */
    items?: Maybe<Array<Maybe<CartItemInfo>>>;
    /** Message of update cart API response. Example: 'Cart updated successfully' */
    message?: Maybe<Scalars['String']['output']>;
    /** Per-article result info. Example: { 'ART123': { success: true, message: 'Updated' } } */
    result?: Maybe<Scalars['JSON']['output']>;
    /** True if all items are added successfully. Example: true */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Update payment mode and related details for checkout (address, merchant code, aggregator, etc.). */
export type UpdateCartPaymentRequestInput = {
    /** Address ID selected for delivery. Example: 'addr_001' */
    address_id?: InputMaybe<Scalars['String']['input']>;
    /** Payment aggregator (e.g., Fynd, Razorpay, Juspay). Example: 'Razorpay' */
    aggregator_name?: InputMaybe<Scalars['String']['input']>;
    /** Cart ID. Example: '5bb521cfdc83215e1889b346' */
    id?: InputMaybe<Scalars['String']['input']>;
    /** Merchant code (e.g., ICICI, AXIS). Example: 'ICICI' */
    merchant_code?: InputMaybe<Scalars['String']['input']>;
    /** Payment identifier from gateway. Example: 'pay_abc123' */
    payment_identifier?: InputMaybe<Scalars['String']['input']>;
    /** Payment mode (e.g., COD, CARD, NB). Example: 'CARD' */
    payment_mode?: InputMaybe<Scalars['String']['input']>;
};
/** Request to update cart items and the operation to perform. */
export type UpdateCartRequestInput = {
    /** Free gift items to update. Example: [{ promotion_id: 'PROMO1', item_id: 'SKU1', item_size: 'L' }] */
    free_gift_items?: InputMaybe<Array<InputMaybe<FreeGiftItem>>>;
    /** Operation for free gift items (add/remove). Example: add */
    free_gift_items_operation?: InputMaybe<FreeGiftItemsOperation>;
    /** List of items to update. Example: [{ identifiers: { identifier: 'abc' }, item_id: 123, item_size: 'M', quantity: 1 }] */
    items?: InputMaybe<Array<InputMaybe<UpdateProductCartInput>>>;
    /** Operation on items (update_item/remove_item). Example: update_item */
    operation: Operation;
};
/** Describes the request structure to update the password. */
export type UpdatePasswordRequestSchemaInput = {
    /** New password. */
    new_password: Scalars['String']['input'];
    /** Current password. */
    old_password: Scalars['String']['input'];
};
/** Update cart product details including article id, custom JSON, extra meta, identifiers, item id/size/index, meta, parent identifiers, quantity, and pickup options. */
export type UpdateProductCartInput = {
    /** Custom JSON at line-item level. Example: { gift_wrap: true } */
    _custom_json?: InputMaybe<Scalars['JSON']['input']>;
    /** Article ID of the item. Example: '5fdc737e3c05146138192f79' */
    article_id?: InputMaybe<Scalars['String']['input']>;
    /** Extra metadata. Example: { color: 'Red' } */
    extra_meta?: InputMaybe<Scalars['JSON']['input']>;
    /** If true, forces a separate line item. Example: true */
    force_new_line_item?: InputMaybe<Scalars['Boolean']['input']>;
    /** Fulfillment method slug. Example: 'home-delivery' or 'store-pickup' */
    fulfillment_option_slug?: InputMaybe<Scalars['String']['input']>;
    /** Cart-generated item identifier. */
    identifiers: CartProductIdentiferInput;
    /** Product item ID. Example: 987654 */
    item_id?: InputMaybe<Scalars['Int']['input']>;
    /** Index of the item line to update. Example: 0 */
    item_index?: InputMaybe<Scalars['Int']['input']>;
    /** Size of the product. Example: 'M' */
    item_size?: InputMaybe<Scalars['String']['input']>;
    /** Line-item metadata. Example: { source: 'cart-page' } */
    meta?: InputMaybe<Scalars['JSON']['input']>;
    /** Parent item identifiers. Example: { parent_item_id: 111 } */
    parent_item_identifiers?: InputMaybe<Scalars['JSON']['input']>;
    /** Quantity to set. Example: 3 */
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
    /** Indicates whether the shipment should be locked after the transition. */
    lock_after_transition?: InputMaybe<Scalars['Boolean']['input']>;
    /** An array containing status transitions for shipments. Example: [{ status: 'bag_confirmed', shipments: [...] }]. */
    statuses?: InputMaybe<Array<InputMaybe<StatusesRequestInput>>>;
    /** Indicates whether to run the status update as a background task, allowing other processes to continue without waiting for this operation to complete. */
    task?: InputMaybe<Scalars['Boolean']['input']>;
    /** Indicates whether the shipment should be unlocked before the transition. */
    unlock_before_transition?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Describes the request structure to update the user attributes. */
export type UpdateUserAttributesRequestSchemaInput = {
    /** User attributes to update (key-value JSON). */
    attributes?: InputMaybe<Scalars['JSON']['input']>;
};
/** Represents a UPI beneficiary account stored in the system. */
export type UpiBeneficiary = {
    __typename?: 'UpiBeneficiary';
    /** Full name of the UPI account holder. */
    customer_name: Scalars['String']['output'];
    /** Human-readable display name for this UPI account type. */
    display_name: Scalars['String']['output'];
    /** Unique ID assigned to the beneficiary. */
    id: Scalars['String']['output'];
    /** Whether this beneficiary account is active. */
    is_active: Scalars['Boolean']['output'];
    /** Whether this UPI account has been verified. */
    is_verified: Scalars['Boolean']['output'];
    /** Optional logo URL of the UPI. */
    logo?: Maybe<Scalars['String']['output']>;
    /** Transfer mode for this beneficiary. Always 'upi'. */
    transfer_mode: Scalars['String']['output'];
    /** Virtual Payment Address (UPI ID) of the beneficiary. */
    vpa_address: Scalars['String']['output'];
};
/** Schema representing a file upload signed URL. */
export type Upload = {
    __typename?: 'Upload';
    /** The time in seconds until the upload URL expires. Default is 1800 seconds (30 minutes). After expiry, the URL becomes invalid and a new one must be requested. The client must complete the upload before this time. Example: 1800. */
    expiry?: Maybe<Scalars['Int']['output']>;
    /** A pre-signed URL that allows direct upload to Google Cloud Storage (GCS). This URL is time-limited and includes authentication signature. Use this URL with PUT method to upload the file directly to GCS without going through the API server. Example: "https://storage.googleapis.com/bucket/path?signature=...". */
    url?: Maybe<Scalars['String']['output']>;
};
/** Details about the upload URL and its expiration */
export type UploadDetailsInput = {
    /** Expiration timestamp for the upload URL */
    expiry: Scalars['Int']['input'];
    /** The pre-signed URL for file upload */
    url: Scalars['String']['input'];
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
    /** Retrieve all active sessions of the currently logged-in user. Returns a list of all active login sessions across different devices and platforms. */
    active_sessions?: Maybe<SessionList>;
    /** Check if a user has set an account password. */
    has_password?: Maybe<HasPassword>;
    /** Retrieve detailed information about the currently logged-in user including profile data, contact information, and account status. */
    logged_in_user?: Maybe<UserDetail>;
    /** Logout the currently logged-in user and terminate their session. */
    logout?: Maybe<Logout>;
};
/** Enum for OTP send and resend actions. */
export declare enum UserAction {
    /** Resend an OTP to the user. */
    Resend = "resend",
    /** Send a new OTP to the user. */
    Send = "send"
}
/** Schema representing validation details */
export type UserAttributeDefinitionValidation = {
    __typename?: 'UserAttributeDefinitionValidation';
    /** Type of validation (e.g., min, max, regex). */
    type?: Maybe<ValidationType>;
    /** Value used in the validation logic. */
    value?: Maybe<Scalars['String']['output']>;
};
/** Enum representing allowed registration types for user attributes. */
export declare enum UserAttributeRegistrationType {
    /** The attribute is required during registration. */
    Mandatory = "mandatory",
    /** The attribute is optional during registration. */
    Optional = "optional"
}
/** Contains user attributes Details */
export type UserAttributes = {
    __typename?: 'UserAttributes';
    /** Describes the structure of user attribute. */
    attributes?: Maybe<Scalars['JSON']['output']>;
};
/** Schema representing list of attributes definition details */
export type UserAttributesDefinition = {
    __typename?: 'UserAttributesDefinition';
    /** List of user attribute definitions that match the filters. */
    items: Array<UserAttributesDefinitionData>;
    /** Pagination metadata for the result set. */
    page: PageInfo;
};
/** Schema representing definition details of an attribute */
export type UserAttributesDefinitionData = {
    __typename?: 'UserAttributesDefinitionData';
    /** Whether the attribute is editable by customers. */
    customer_editable?: Maybe<Scalars['Boolean']['output']>;
    /** A description of the attribute. */
    description?: Maybe<Scalars['String']['output']>;
    /** Optional icon representing the attribute. */
    icon?: Maybe<Scalars['String']['output']>;
    /** The unique identifier for the attribute definition. */
    id: Scalars['String']['output'];
    /** Whether the attribute supports multiple values. */
    is_multi_value?: Maybe<Scalars['Boolean']['output']>;
    /** The display name of the attribute. */
    name: Scalars['String']['output'];
    /** Ordering channels where this attribute is applicable. */
    ordering_channels?: Maybe<Array<OrderingChannel>>;
    /** The order in which the attribute is pinned. */
    pin_order?: Maybe<Scalars['Int']['output']>;
    /** Indicates if the attribute is pinned. */
    pinned?: Maybe<Scalars['Boolean']['output']>;
    /** Registration behavior for this attribute. */
    registration?: Maybe<AttributeRegistrationProperties>;
    /** The attribute's unique key used internally. */
    slug: Scalars['String']['output'];
    /** The data type of the attribute. */
    type: AttributeType;
    /** List of validation rules applied to the attribute. */
    validations?: Maybe<Array<UserAttributeDefinitionValidation>>;
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
/** Schema representing user consent information */
export type UserConsent = {
    __typename?: 'UserConsent';
    /** Privacy policy consent details */
    privacy_policy?: Maybe<PrivacyPolicyConsent>;
};
/** Customer Credit Summary Response. */
export type UserCredit = {
    __typename?: 'UserCredit';
    /** Credit summary response. */
    data?: Maybe<UserCreditSummary>;
    /** Payment confirmation updated or not. */
    success: Scalars['Boolean']['output'];
};
/** Credit Balance Schema. */
export type UserCreditInfo = {
    __typename?: 'UserCreditInfo';
    /** The monetary value, which can represent available balance, redeemed balance, or hold amount, depending on the context. */
    amount: Scalars['Float']['output'];
    /** The currency code (e.g., INR, USD). */
    currency: Scalars['String']['output'];
    /** A unique identifier for the payment transaction. */
    uid?: Maybe<Scalars['String']['output']>;
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
    /**
     * Type of user (user, programmatic (created by system)).
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    account_type?: Maybe<Scalars['String']['output']>;
    /**
     * Is the user active.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    active?: Maybe<Scalars['Boolean']['output']>;
    /**
     * Application id of the user.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    application_id?: Maybe<Scalars['String']['output']>;
    /**
     * Date and time of user creation.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    created_at?: Maybe<Scalars['String']['output']>;
    /** Date of birth of the user. */
    dob?: Maybe<Scalars['String']['output']>;
    /** List of email addresses of the user. */
    emails?: Maybe<Array<Maybe<Email>>>;
    /**
     * Unique id referencing any user external documents.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    external_id?: Maybe<Scalars['String']['output']>;
    /** First name of the user. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** Gender of the user. */
    gender?: Maybe<Scalars['String']['output']>;
    /** Unique identifier of user. */
    id?: Maybe<Scalars['String']['output']>;
    /** Last name of the user. */
    last_name?: Maybe<Scalars['String']['output']>;
    /**
     * Metadata of the user, used to store details about the user.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    meta?: Maybe<Scalars['JSON']['output']>;
    /** List of phone numbers of the user. */
    phone_numbers?: Maybe<Array<Maybe<PhoneNumber>>>;
    /** URL of the profile picture of the user. */
    profile_pic_url?: Maybe<Scalars['String']['output']>;
    /**
     * Unique id referencing any user external documents.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    rr_id?: Maybe<Scalars['String']['output']>;
    /**
     * Date and time of user update.
     * @deprecated This parameter is obsolete and will be removed in a future release.
     */
    updated_at?: Maybe<Scalars['String']['output']>;
    /** Unique id of the user. */
    user_id?: Maybe<Scalars['String']['output']>;
    /** Unique username of the user. */
    username?: Maybe<Scalars['String']['output']>;
};
/** User information and profile details. */
export type UserDetails = {
    __typename?: 'UserDetails';
    /** Contact information like email or phone number, e.g. 'user@example.com', '+919876543210'. */
    contact?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the user has administrative or super user privileges. */
    super_user?: Maybe<Scalars['Boolean']['output']>;
    /** Unique identifier for the user account, e.g. 'usr_123456789'. */
    user_id: Scalars['String']['output'];
    /**
     * Display username or handle, e.g. 'john.doe', 'admin_user'.
     * @deprecated This field is obsolete.
     */
    username?: Maybe<Scalars['String']['output']>;
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
    /** Email address of the user. For example, 'user@example.com'. */
    email?: Maybe<Scalars['String']['output']>;
    /** First name of the user. For example, 'John'. */
    first_name?: Maybe<Scalars['String']['output']>;
    /** Gender of the user. For example, 'male'. */
    gender?: Maybe<Scalars['String']['output']>;
    /** Last name of the user. For example, 'Doe'. */
    last_name?: Maybe<Scalars['String']['output']>;
    /** Mobile number of the user. For example, '9876543210'. */
    mobile?: Maybe<Scalars['String']['output']>;
    /** Full name of the user (including first and last names). For example, 'John Doe'. */
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
    /** Customer name for VPA */
    customer_name?: Maybe<Scalars['String']['output']>;
    /** Validate UPI. */
    data?: Maybe<ValidateUpi>;
    /** Response is successful or not. */
    success: Scalars['Boolean']['output'];
};
/** Defines validation rules for user addresses. */
export type ValidationConfig = {
    __typename?: 'ValidationConfig';
    /** Maximum number of addresses a user can have. Example: 10 */
    address_max_limit?: Maybe<Scalars['Float']['output']>;
    /** Total number of addresses saved by the user. Example: 3 */
    user_address_count?: Maybe<Scalars['Int']['output']>;
};
/** Defines the type of validation rule applied to an attribute's value. */
export declare enum ValidationType {
    /** Maximum allowed value (numeric, date, or string length). */
    Max = "max",
    /** Minimum allowed value (numeric, date, or string length). */
    Min = "min",
    /** Pattern matching using regular expression. */
    Regex = "regex"
}
/** Describes the request structure to verify OTP for the 'forgot email' flow. */
export type VerifyEmailForgotOtpRequestSchemaInput = {
    /** Email address of the user. */
    email: Scalars['String']['input'];
    /** One-time password to verify. */
    otp: Scalars['String']['input'];
};
/** Schema representing the response received upon successfully verifying an email OTP. */
export type VerifyEmailOtpSuccess = {
    __typename?: 'VerifyEmailOTPSuccess';
    /** Describes the user details structure. */
    user?: Maybe<UserDetail>;
    /** Whether the email verification link was successful. */
    verify_email_link?: Maybe<Scalars['Boolean']['output']>;
};
/** Describes the request structure to verify OTP sent to an email address. This API validates the OTP and completes the email verification process. */
export type VerifyEmailOtpRequestSchemaInput = {
    /** Action context for verification. Allowed values: verify, register, login. */
    action: Scalars['String']['input'];
    /** Email address to verify. */
    email: Scalars['String']['input'];
    /** One-time password to verify. */
    otp: Scalars['String']['input'];
    /** Temporary registration token for the user. */
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
/** Describes the request structure to verify OTP for the 'forgot mobile' flow. */
export type VerifyMobileForgotOtpRequestSchemaInput = {
    /** One-time password received for the 'forgot mobile' flow. */
    otp?: InputMaybe<Scalars['String']['input']>;
    /** Unique request ID associated with the OTP. */
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
    /** The OTP code provided by the user for verification. For example, '123456' or '987654'. */
    otp_code?: InputMaybe<Scalars['String']['input']>;
    /** Unique identifier for the request. For example, '63c1fd1baf6c6925304395cb'. */
    request_id?: InputMaybe<Scalars['String']['input']>;
};
/** Describes the request structure to verify OTP sent to a mobile number via SMS. This API validates the OTP and completes the verification process. */
export type VerifyOtpRequestSchemaInput = {
    /** One-time password to verify. */
    otp: Scalars['String']['input'];
    /** Temporary registration token for the user. */
    register_token?: InputMaybe<Scalars['String']['input']>;
    /** Unique request ID associated with the OTP sent to the mobile number. */
    request_id: Scalars['String']['input'];
};
/** Schema for verifying otp response. */
export type VerifyOtpResponse = {
    __typename?: 'VerifyOtpResponse';
    /** Error message indicating if the verification data is expired or if the request is malformed, helping to diagnose and address issues with the verification process. For example, 'OTP verified successfully' or 'Invalid OTP'. */
    message?: Maybe<Scalars['String']['output']>;
    /** Indicates whether the request was successful. For example, true or false. */
    success?: Maybe<Scalars['Boolean']['output']>;
};
/** Schema representing the response received upon successful OTP verification. */
export type VerifyOtpSuccess = {
    __typename?: 'VerifyOtpSuccess';
    /** A token used for registration purposes will be sent when user is not registered. */
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
/** Types of web redirects available. */
export declare enum WebRedirectType {
    Web = "web"
}
/** Days of the week. */
export declare enum Weekday {
    Friday = "friday",
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
    Thursday = "thursday",
    Tuesday = "tuesday",
    Wednesday = "wednesday"
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
    /** Alphanumeric identification code for the user's country. Example: "91". */
    country_code?: Maybe<Scalars['String']['output']>;
    /** Name of the channel of communication the user has agreed to receive messages through. */
    display_name?: Maybe<Scalars['String']['output']>;
    /** Phone number of the user that the user has accepted to receive communication through WhatsApp. Only present if user has provided phone number. Example: "9869821300". */
    phone_number?: Maybe<Scalars['String']['output']>;
    /** The user's choice to opt in or opt out of receiving communications. Values: "yes" (opted in), "no" (opted out), or "noaction" (no preference set). Example: "noaction". */
    response?: Maybe<Scalars['String']['output']>;
};
/** Get Beneficiary Request Schema. */
export type GetRefundBeneficiaryInput = {
    /** filter response based on order_id or shipment_id */
    filterBy?: InputMaybe<Scalars['String']['input']>;
    /** Unique ID of the order */
    orderId?: InputMaybe<Scalars['String']['input']>;
    /** Unique ID of the shipment */
    shipmentId?: InputMaybe<Scalars['String']['input']>;
};
/** An object of section preset. */
export type SectionPreset = {
    __typename?: 'sectionPreset';
    /** An array of blocks included in the section preset. */
    blocks?: Maybe<Array<Maybe<Block>>>;
};
/** Template names available in the system. */
export declare enum TemplateNameEnum {
    CheckoutForm = "checkout_form",
    DefaultDisplay = "default_display",
    Plp = "plp",
    StoreOsForm = "store_os_form"
}
