/** Status options for user accounts. */
export var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["Active"] = "ACTIVE";
    AccountStatusEnum["Inactive"] = "INACTIVE";
    AccountStatusEnum["Unregistered"] = "UNREGISTERED";
})(AccountStatusEnum || (AccountStatusEnum = {}));
/** Actions that can be taken on data. */
export var Action;
(function (Action) {
    Action["Merge"] = "merge";
    Action["Replace"] = "replace";
})(Action || (Action = {}));
/** Actions that can be performed on cart items. */
export var ActionEnum;
(function (ActionEnum) {
    ActionEnum["Merge"] = "merge";
    ActionEnum["Replace"] = "replace";
})(ActionEnum || (ActionEnum = {}));
/** Defines the type of address for business locations. */
export var AddressType;
(function (AddressType) {
    /** Office or business operational address */
    AddressType["Office"] = "office";
    /** Legal registered address of the company */
    AddressType["Registered"] = "registered";
})(AddressType || (AddressType = {}));
/** Types of applications supported. */
export var AppType;
(function (AppType) {
    AppType["Development"] = "development";
    AppType["Live"] = "live";
})(AppType || (AppType = {}));
/** Defines the operational mode of the sales channel. */
export var ApplicationMode;
(function (ApplicationMode) {
    /** Sales channel is in development mode for testing */
    ApplicationMode["Development"] = "development";
    /** Sales channel is live and accessible to customers */
    ApplicationMode["Live"] = "live";
})(ApplicationMode || (ApplicationMode = {}));
/** Defines the current status of the sales channel. */
export var ApplicationStatus;
(function (ApplicationStatus) {
    /** Sales channel is active and operational */
    ApplicationStatus["Active"] = "active";
    /** Sales channel is blocked and not accessible */
    ApplicationStatus["Blocked"] = "blocked";
})(ApplicationStatus || (ApplicationStatus = {}));
/** Defines supported types of user attribute values. */
export var AttributeType;
(function (AttributeType) {
    /** Boolean value (true/false). */
    AttributeType["Boolean"] = "boolean";
    /** Date value (e.g., YYYY-MM-DD). */
    AttributeType["Date"] = "date";
    /** Date and time value (e.g., 2024-01-01T12:00:00Z). */
    AttributeType["DateTime"] = "date_time";
    /** Dropdown with predefined options. */
    AttributeType["Dropdown"] = "dropdown";
    /** Encrypted boolean value. */
    AttributeType["EncryptedBoolean"] = "encrypted_boolean";
    /** Encrypted date value. */
    AttributeType["EncryptedDate"] = "encrypted_date";
    /** Encrypted date and time value. */
    AttributeType["EncryptedDateTime"] = "encrypted_date_time";
    /** Encrypted dropdown with predefined options. */
    AttributeType["EncryptedDropdown"] = "encrypted_dropdown";
    /** Encrypted numeric value. */
    AttributeType["EncryptedNumber"] = "encrypted_number";
    /** Encrypted array of numeric values. */
    AttributeType["EncryptedNumberArray"] = "encrypted_number_array";
    /** Encrypted plain text value. */
    AttributeType["EncryptedString"] = "encrypted_string";
    /** Encrypted array of plain text values. */
    AttributeType["EncryptedStringArray"] = "encrypted_string_array";
    /** HTML-formatted string content. */
    AttributeType["HtmlString"] = "html_string";
    /** URL pointing to a resource. */
    AttributeType["ImageUrl"] = "image_url";
    /** Numeric value (single). */
    AttributeType["Number"] = "number";
    /** Array of numeric values. */
    AttributeType["NumberArray"] = "number_array";
    /** Array of platform user IDs (e.g., for relationships). */
    AttributeType["PlatformUserArray"] = "platform_user_array";
    /** Array of store IDs associated with the user. */
    AttributeType["StoreUidArray"] = "store_uid_array";
    /** Plain text value (single). */
    AttributeType["String"] = "string";
    /** Array of plain text values. */
    AttributeType["StringArray"] = "string_array";
})(AttributeType || (AttributeType = {}));
/** Types of bundles available. */
export var BundleTypeEnum;
(function (BundleTypeEnum) {
    BundleTypeEnum["PhysicalBundle"] = "physical_bundle";
    BundleTypeEnum["VirtualBundle"] = "virtual_bundle";
})(BundleTypeEnum || (BundleTypeEnum = {}));
/** Enum representing the brands of payment cards. */
export var CardBrand;
(function (CardBrand) {
    CardBrand["Amex"] = "AMEX";
    CardBrand["Diners"] = "DINERS";
    CardBrand["Discover"] = "DISCOVER";
    CardBrand["Jcb"] = "JCB";
    CardBrand["Maestro"] = "MAESTRO";
    CardBrand["Mastercard"] = "MASTERCARD";
    CardBrand["Rupay"] = "RUPAY";
    CardBrand["Visa"] = "VISA";
})(CardBrand || (CardBrand = {}));
/** Type of collection: 'query' for dynamic collections based on search criteria, 'items' for manually curated collections. */
export var CollectionType;
(function (CollectionType) {
    CollectionType["Items"] = "items";
    CollectionType["Query"] = "query";
})(CollectionType || (CollectionType = {}));
/** Actions available for communication operations. */
export var CommunicationActionEnum;
(function (CommunicationActionEnum) {
    CommunicationActionEnum["Optin"] = "optin";
    CommunicationActionEnum["Optout"] = "optout";
})(CommunicationActionEnum || (CommunicationActionEnum = {}));
/** Channels available for communication. */
export var CommunicationChannelEnum;
(function (CommunicationChannelEnum) {
    CommunicationChannelEnum["Email"] = "email";
    CommunicationChannelEnum["Sms"] = "sms";
    CommunicationChannelEnum["Whatsapp"] = "whatsapp";
})(CommunicationChannelEnum || (CommunicationChannelEnum = {}));
/** JavaScript frameworks compatible with the content engine. */
export var CompatibleEngine;
(function (CompatibleEngine) {
    CompatibleEngine["React"] = "react";
    CompatibleEngine["Vue2"] = "vue2";
})(CompatibleEngine || (CompatibleEngine = {}));
/** Defines how currency information is displayed to customers. */
export var CurrencyDisplayType;
(function (CurrencyDisplayType) {
    /** Show all available currencies */
    CurrencyDisplayType["All"] = "all";
    /** Show currency code explicitly with price */
    CurrencyDisplayType["Explicit"] = "explicit";
})(CurrencyDisplayType || (CurrencyDisplayType = {}));
/** Supported custom field creator types */
export var CustomFieldCreator;
(function (CustomFieldCreator) {
    /** Created at application level */
    CustomFieldCreator["Application"] = "application";
    /** Created at company level */
    CustomFieldCreator["Company"] = "company";
})(CustomFieldCreator || (CustomFieldCreator = {}));
/** Supported custom field types */
export var CustomFieldType;
(function (CustomFieldType) {
    /** Boolean true/false type */
    CustomFieldType["BooleanType"] = "boolean_type";
    /** Date type */
    CustomFieldType["Date"] = "date";
    /** Datetime type */
    CustomFieldType["Datetime"] = "datetime";
    /** Dropdown select field */
    CustomFieldType["Dropdown"] = "dropdown";
    /** Duration/time period type */
    CustomFieldType["Duration"] = "duration";
    /** File upload type */
    CustomFieldType["File"] = "file";
    /** Float/decimal number type */
    CustomFieldType["FloatType"] = "float_type";
    /** HTML content type */
    CustomFieldType["Html"] = "html";
    /** Integer number type */
    CustomFieldType["Integer"] = "integer";
    /** JSON object type */
    CustomFieldType["Json"] = "json";
    /** Metaobject reference type */
    CustomFieldType["Metaobject"] = "metaobject";
    /** Product reference type */
    CustomFieldType["Product"] = "product";
    /** Multi-line text string */
    CustomFieldType["StringMultiLine"] = "string_multi_line";
    /** Single line text string */
    CustomFieldType["StringSingleLine"] = "string_single_line";
    /** URL/link type */
    CustomFieldType["Url"] = "url";
})(CustomFieldType || (CustomFieldType = {}));
/** Types of data loaders for information retrieval. */
export var DataLoaderType;
(function (DataLoaderType) {
    DataLoaderType["Function"] = "function";
    DataLoaderType["Url"] = "url";
})(DataLoaderType || (DataLoaderType = {}));
/** Defines the delivery strategy for order fulfillment. */
export var DeliveryStrategyValue;
(function (DeliveryStrategyValue) {
    /** Worldwide shipping is allowed */
    DeliveryStrategyValue["All"] = "all";
    /** Shipping is restricted to specific delivery zones */
    DeliveryStrategyValue["DeliveryZone"] = "delivery_zone";
})(DeliveryStrategyValue || (DeliveryStrategyValue = {}));
/** Defines the requirement level for store selection during deployment. */
export var DeploymentStoreSelectionFeatureType;
(function (DeploymentStoreSelectionFeatureType) {
    /** When store selection is compulsory */
    DeploymentStoreSelectionFeatureType["Hard"] = "hard";
    /** When store selection is optional */
    DeploymentStoreSelectionFeatureType["Soft"] = "soft";
})(DeploymentStoreSelectionFeatureType || (DeploymentStoreSelectionFeatureType = {}));
/** Namespace that determines storage location, validation rules, and file-specific constraints */
export var FileStorageNamespace;
(function (FileStorageNamespace) {
    /** Private namespace allowing images and PDFs up to 50Mb */
    FileStorageNamespace["ApplicationAudience"] = "application_audience";
    /** Public namespace allowing images and videos up to 1Gb */
    FileStorageNamespace["FeedbackMedia"] = "feedback_media";
    /** Public namespace allowing all file types up to 100Mb */
    FileStorageNamespace["Misc"] = "misc";
    /** Public namespace allowing images up to 15Mb */
    FileStorageNamespace["UserProfilePic"] = "user_profile_pic";
    /** Private namespace allowing images up to 40Mb */
    FileStorageNamespace["UsersVtoImages"] = "users_vto_images";
})(FileStorageNamespace || (FileStorageNamespace = {}));
/** Filter options for different entity types. */
export var FilterByEnum;
(function (FilterByEnum) {
    FilterByEnum["Order"] = "order";
    FilterByEnum["Shipment"] = "shipment";
})(FilterByEnum || (FilterByEnum = {}));
/** Whether a free gift item should be added or removed from the cart. */
export var FreeGiftItemsOperation;
(function (FreeGiftItemsOperation) {
    /** Add a free gift item to the cart. */
    FreeGiftItemsOperation["Add"] = "add";
    /** Remove a free gift item from the cart. */
    FreeGiftItemsOperation["Remove"] = "remove";
})(FreeGiftItemsOperation || (FreeGiftItemsOperation = {}));
/** Types of items available. */
export var ItemTypeEnum;
(function (ItemTypeEnum) {
    ItemTypeEnum["Composite"] = "composite";
    ItemTypeEnum["Digital"] = "digital";
    ItemTypeEnum["PhysicalBundle"] = "physical_bundle";
    ItemTypeEnum["Set"] = "set";
    ItemTypeEnum["Standard"] = "standard";
    ItemTypeEnum["VirtualBundle"] = "virtual_bundle";
})(ItemTypeEnum || (ItemTypeEnum = {}));
/** Enumeration of locality types. */
export var LocalityEnum;
(function (LocalityEnum) {
    LocalityEnum["City"] = "city";
    LocalityEnum["Pincode"] = "pincode";
    LocalityEnum["Sector"] = "sector";
    LocalityEnum["State"] = "state";
})(LocalityEnum || (LocalityEnum = {}));
/** Types of localities for location classification. */
export var LocalityType;
(function (LocalityType) {
    LocalityType["City"] = "city";
    LocalityType["Pincode"] = "pincode";
    LocalityType["Sector"] = "sector";
    LocalityType["State"] = "state";
})(LocalityType || (LocalityType = {}));
/** Types of locations in the system. */
export var LocationTypeEnum;
(function (LocationTypeEnum) {
    LocationTypeEnum["City"] = "city";
    LocationTypeEnum["Country"] = "country";
    LocationTypeEnum["State"] = "state";
})(LocationTypeEnum || (LocationTypeEnum = {}));
/** Enum for next action type. */
export var NextActionType;
(function (NextActionType) {
    NextActionType["FormPost"] = "FORM_POST";
    NextActionType["Redirect"] = "REDIRECT";
})(NextActionType || (NextActionType = {}));
/** Mode of the offer. */
export var OfferMode;
(function (OfferMode) {
    /** Coupon offer mode. */
    OfferMode["Coupon"] = "coupon";
    /** Promotion offer mode. */
    OfferMode["Promotion"] = "promotion";
})(OfferMode || (OfferMode = {}));
/** Type of offer or promotion. */
export var OfferType;
(function (OfferType) {
    /** Amount-based offer. */
    OfferType["Amount"] = "amount";
    /** Buy One Get One offer. */
    OfferType["Bogo"] = "bogo";
    /** Bundle amount percentage offer. */
    OfferType["BundleAmountPercentage"] = "bundle_amount_percentage";
    /** Bundle price amount offer. */
    OfferType["BundlePriceAmount"] = "bundle_price_amount";
    /** Bundle price percentage offer. */
    OfferType["BundlePricePercentage"] = "bundle_price_percentage";
    /** Cashback offer. */
    OfferType["Cashback"] = "cashback";
    /** Contract price offer. */
    OfferType["ContractPrice"] = "contract_price";
    /** Custom offer type. */
    OfferType["Custom"] = "custom";
    /** External price adjustment discount offer. */
    OfferType["ExternalPriceAdjustmentDiscount"] = "external_price_adjustment_discount";
    /** Fixed price offer. */
    OfferType["FixedPrice"] = "fixed_price";
    /** Fixed unit price offer. */
    OfferType["FixedUnitPrice"] = "fixed_unit_price";
    /** Free gift items offer. */
    OfferType["FreeGiftItems"] = "free_gift_items";
    /** Free item discount absolute offer. */
    OfferType["FreeItemDiscountAbsolute"] = "free_item_discount_absolute";
    /** Free items offer. */
    OfferType["FreeItems"] = "free_items";
    /** Free non-sellable items offer. */
    OfferType["FreeNonSellableItems"] = "free_non_sellable_items";
    /** Item-based discount offer. */
    OfferType["ItemBasedDiscount"] = "item_based_discount";
    /** Ladder price offer. */
    OfferType["LadderPrice"] = "ladder_price";
    /** Percentage-based offer. */
    OfferType["Percentage"] = "percentage";
    /** Shipping price offer. */
    OfferType["ShippingPrice"] = "shipping_price";
})(OfferType || (OfferType = {}));
/** Operations that can be performed on items. */
export var Operation;
(function (Operation) {
    Operation["RemoveItem"] = "remove_item";
    Operation["UpdateItem"] = "update_item";
})(Operation || (Operation = {}));
/** Types of order types available. */
export var OrderTypeEnum;
(function (OrderTypeEnum) {
    OrderTypeEnum["Digital"] = "Digital";
    OrderTypeEnum["HomeDelivery"] = "HomeDelivery";
    OrderTypeEnum["PickAtStore"] = "PickAtStore";
})(OrderTypeEnum || (OrderTypeEnum = {}));
/** Specifies the sales or interaction channels where the attribute is applicable. */
export var OrderingChannel;
(function (OrderingChannel) {
    /** Used in the GoFynd mobile app or ecosystem. */
    OrderingChannel["Gofynd"] = "gofynd";
    /** Used at physical kiosks for customer interaction or ordering. */
    OrderingChannel["Kiosk"] = "kiosk";
    /** Used when selling through marketplace integrations (e.g., Amazon, Flipkart). */
    OrderingChannel["Marketplace"] = "marketplace";
    /** Used for Open Network for Digital Commerce (ONDC) integration. */
    OrderingChannel["Ondc"] = "ondc";
    /** Used in Scan & Go services, where customers scan items and checkout themselves. */
    OrderingChannel["ScanGo"] = "scan_go";
    /** Used with smart trolley systems in physical retail spaces. */
    OrderingChannel["SmartTrolley"] = "smart_trolley";
    /** Used for social commerce platforms (e.g., Instagram, WhatsApp). */
    OrderingChannel["SocialCommerce"] = "social_commerce";
    /** Used in in-store Point-of-Sale (PoS) systems running on Store OS. */
    OrderingChannel["StoreOsPos"] = "store_os_pos";
    /** Used on the customer-facing storefront (website or app). */
    OrderingChannel["Storefront"] = "storefront";
    /** Used in Uniket (B2B wholesale or distribution platform). */
    OrderingChannel["Uniket"] = "uniket";
})(OrderingChannel || (OrderingChannel = {}));
/**
 * Page types for the `seoMarkupSchemas` query (both the `pageTypes` input and
 * the serialized `page_type` output). Values mirror the storefront route
 * taxonomy (FDK `AVAILABLE_PAGE_TYPE`), which the resolver maps to the REST
 * page_type with a generic CAPS_UNDERSCORE ⇄ kebab-lowercase transform — e.g.
 * PROFILE_EMAIL → profile-email. The convex SEO schema model's stored values
 * must use the same singular form so output serialization round-trips.
 */
export var PageType;
(function (PageType) {
    PageType["AboutUs"] = "ABOUT_US";
    PageType["Addresses"] = "ADDRESSES";
    PageType["Blog"] = "BLOG";
    PageType["Brand"] = "BRAND";
    PageType["Brands"] = "BRANDS";
    PageType["Cards"] = "CARDS";
    PageType["Cart"] = "CART";
    PageType["CartDelivery"] = "CART_DELIVERY";
    PageType["CartPayment"] = "CART_PAYMENT";
    PageType["CartReview"] = "CART_REVIEW";
    PageType["Categories"] = "CATEGORIES";
    PageType["Category"] = "CATEGORY";
    PageType["Collection"] = "COLLECTION";
    PageType["Collections"] = "COLLECTIONS";
    PageType["ContactUs"] = "CONTACT_US";
    PageType["Custom"] = "CUSTOM";
    PageType["External"] = "EXTERNAL";
    PageType["Faq"] = "FAQ";
    PageType["Form"] = "FORM";
    PageType["Freshchat"] = "FRESHCHAT";
    PageType["Home"] = "HOME";
    PageType["LocateUs"] = "LOCATE_US";
    PageType["Login"] = "LOGIN";
    PageType["NotificationSettings"] = "NOTIFICATION_SETTINGS";
    PageType["Orders"] = "ORDERS";
    PageType["OrderStatus"] = "ORDER_STATUS";
    PageType["Page"] = "PAGE";
    PageType["Policy"] = "POLICY";
    PageType["Product"] = "PRODUCT";
    PageType["Products"] = "PRODUCTS";
    PageType["ProductRequest"] = "PRODUCT_REQUEST";
    PageType["Profile"] = "PROFILE";
    PageType["ProfileBasic"] = "PROFILE_BASIC";
    PageType["ProfileCompany"] = "PROFILE_COMPANY";
    PageType["ProfileEmail"] = "PROFILE_EMAIL";
    PageType["ProfileLoyaltyRewards"] = "PROFILE_LOYALTY_REWARDS";
    PageType["ProfileOrderShipment"] = "PROFILE_ORDER_SHIPMENT";
    PageType["ProfilePhone"] = "PROFILE_PHONE";
    PageType["RateUs"] = "RATE_US";
    PageType["ReferEarn"] = "REFER_EARN";
    PageType["Register"] = "REGISTER";
    PageType["RequestReattempt"] = "REQUEST_REATTEMPT";
    PageType["ReturnPolicy"] = "RETURN_POLICY";
    PageType["Sections"] = "SECTIONS";
    PageType["Settings"] = "SETTINGS";
    PageType["SharedCart"] = "SHARED_CART";
    PageType["ShippingPolicy"] = "SHIPPING_POLICY";
    PageType["SinglePageCheckout"] = "SINGLE_PAGE_CHECKOUT";
    PageType["Tnc"] = "TNC";
    PageType["TrackOrder"] = "TRACK_ORDER";
    PageType["Wishlist"] = "WISHLIST";
})(PageType || (PageType = {}));
/** Different types of pages in the application. */
export var PageTypes;
(function (PageTypes) {
    PageTypes["Custom"] = "custom";
    PageTypes["Sections"] = "sections";
    PageTypes["System"] = "system";
})(PageTypes || (PageTypes = {}));
/** Visibility settings for page items. */
export var PageVisibilityOfItem;
(function (PageVisibilityOfItem) {
    PageVisibilityOfItem["Pdp"] = "pdp";
})(PageVisibilityOfItem || (PageVisibilityOfItem = {}));
/** Payment flow types available for a Payment Options */
export var PaymentFlow;
(function (PaymentFlow) {
    PaymentFlow["Custom"] = "custom";
    PaymentFlow["Standard"] = "standard";
})(PaymentFlow || (PaymentFlow = {}));
/** Possible payment status */
export var PaymentStatusUpdateResponseStatus;
(function (PaymentStatusUpdateResponseStatus) {
    PaymentStatusUpdateResponseStatus["Failed"] = "failed";
    PaymentStatusUpdateResponseStatus["Pending"] = "pending";
    PaymentStatusUpdateResponseStatus["Success"] = "success";
})(PaymentStatusUpdateResponseStatus || (PaymentStatusUpdateResponseStatus = {}));
/** Types of phone numbers supported. */
export var PhoneTypeEnum;
(function (PhoneTypeEnum) {
    PhoneTypeEnum["PhoneNumber"] = "phone_number";
    PhoneTypeEnum["Tollfree"] = "tollfree";
})(PhoneTypeEnum || (PhoneTypeEnum = {}));
/**
 * Price display mode on PLP (Product Listing Page) for products with multiple sizes.
 * Valid values are min, max, or range.
 */
export var PriceDisplayMode;
(function (PriceDisplayMode) {
    /** Display the maximum (highest) price among the available sizes. */
    PriceDisplayMode["Max"] = "max";
    /** Display the minimum (lowest) price among the available sizes. */
    PriceDisplayMode["Min"] = "min";
    /** Display the full price range (lowest to highest) across sizes. */
    PriceDisplayMode["Range"] = "range";
})(PriceDisplayMode || (PriceDisplayMode = {}));
/** Sorting options for product prices. */
export var PriceSort;
(function (PriceSort) {
    /** Sort by the maximum (highest) price first. */
    PriceSort["Max"] = "max";
    /** Sort by the minimum (lowest) price first. Default option. */
    PriceSort["Min"] = "min";
})(PriceSort || (PriceSort = {}));
/** Defines the strategy type available for a sales channel. */
export var PriceStrategy;
(function (PriceStrategy) {
    /** Applies prices set in the price factory */
    PriceStrategy["PriceFactory"] = "price_factory";
    /** (default) Applies store-level pricing */
    PriceStrategy["StorePrices"] = "store_prices";
})(PriceStrategy || (PriceStrategy = {}));
/** Priority levels for various operations. */
export var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum["High"] = "high";
    PriorityEnum["Low"] = "low";
    PriorityEnum["Medium"] = "medium";
    PriorityEnum["Urgent"] = "urgent";
})(PriorityEnum || (PriorityEnum = {}));
/** Promotion group classification for offers. */
export var PromotionGroup;
(function (PromotionGroup) {
    /** Cart-level promotion group. */
    PromotionGroup["Cart"] = "cart";
    /** Contract-level promotion group. */
    PromotionGroup["Contract"] = "contract";
    /** External price adjustment promotion group. */
    PromotionGroup["ExternalPriceAdjustment"] = "external_price_adjustment";
    /** Ladder price promotion group. */
    PromotionGroup["LadderPrice"] = "ladder_price";
    /** Limited timer promotion group (Hero Banner / Deal of the Day). */
    PromotionGroup["LimitedTimer"] = "limited_timer";
    /** Product-level promotion group. */
    PromotionGroup["Product"] = "product";
})(PromotionGroup || (PromotionGroup = {}));
/** Actions that can be performed on push tokens. */
export var PushTokenAction;
(function (PushTokenAction) {
    PushTokenAction["Create"] = "create";
    PushTokenAction["Reset"] = "reset";
    PushTokenAction["Update"] = "update";
})(PushTokenAction || (PushTokenAction = {}));
/** Types of redirects available in the system. */
export var RedirectType;
(function (RedirectType) {
    RedirectType["AppStore"] = "app_store";
    RedirectType["Web"] = "web";
})(RedirectType || (RedirectType = {}));
/** Enum for Refund Mode Types */
export var RefundModeType;
(function (RefundModeType) {
    /** Issue refund as store credits to the customer */
    RefundModeType["Creditnote"] = "creditnote";
    /** Refund back to the original payment source */
    RefundModeType["RefundToSource"] = "refund_to_source";
    /** Settle the refund offline outside the system */
    RefundModeType["SettleOffline"] = "settle_offline";
    /** Transfer refund amount directly to the customer's bank account */
    RefundModeType["TransferToBank"] = "transfer_to_bank";
})(RefundModeType || (RefundModeType = {}));
/** Defines whether an attribute is mandatory or optional during user registration. */
export var RegistrationType;
(function (RegistrationType) {
    /** The attribute must be filled during registration. */
    RegistrationType["Mandatory"] = "mandatory";
    /** The attribute is optional during registration. */
    RegistrationType["Optional"] = "optional";
})(RegistrationType || (RegistrationType = {}));
/** Types of responses available. */
export var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum["No"] = "no";
    ResponseEnum["Yes"] = "yes";
})(ResponseEnum || (ResponseEnum = {}));
/** Protocol types for security domain configuration. */
export var SecurityUrlScheme;
(function (SecurityUrlScheme) {
    /** HTTP protocol */
    SecurityUrlScheme["Http"] = "http";
    /** HTTPS protocol (default) */
    SecurityUrlScheme["Https"] = "https";
})(SecurityUrlScheme || (SecurityUrlScheme = {}));
/** Types of selection options available. */
export var SelectedType;
(function (SelectedType) {
    SelectedType["Exact"] = "exact";
    SelectedType["None"] = "none";
    SelectedType["Query"] = "query";
})(SelectedType || (SelectedType = {}));
/** Enum for session duration units. */
export var SessionEnum;
(function (SessionEnum) {
    /** Session duration in days. */
    SessionEnum["Days"] = "Days";
    /** Session duration in hours. */
    SessionEnum["Hours"] = "Hours";
    /** Session duration in minutes. */
    SessionEnum["Minutes"] = "Minutes";
})(SessionEnum || (SessionEnum = {}));
/** Represents the types of events that can trigger OTP verification to securely authenticate customer actions. */
export var ShipmentOtpEventType;
(function (ShipmentOtpEventType) {
    /** Used when an OTP needs to be sent to the customer's registered mobile number to authenticate the user while updating the delivery address in case of a Non-Delivery Report (NDR) scenario. For example, trigger this when NDR forms capture a new address. */
    ShipmentOtpEventType["CustomerNdr"] = "customer_ndr";
    /** Used when an OTP needs to be sent to the customer's registered mobile number to authenticate the user while they are entering or updating refund bank account details during the return or refund process. For example, trigger this when customers add bank details for refunds. */
    ShipmentOtpEventType["RefundBankDetails"] = "refund_bank_details";
})(ShipmentOtpEventType || (ShipmentOtpEventType = {}));
/** Types of similar items that can be displayed. */
export var SimilarListItem;
(function (SimilarListItem) {
    SimilarListItem["Basic"] = "basic";
    SimilarListItem["Brand"] = "brand";
    SimilarListItem["Category"] = "category";
    SimilarListItem["Price"] = "price";
    SimilarListItem["Seller"] = "seller";
    SimilarListItem["Specs"] = "specs";
    SimilarListItem["Visual"] = "visual";
})(SimilarListItem || (SimilarListItem = {}));
/** Sorting options for data ordering. */
export var Sort_On;
(function (Sort_On) {
    /** Sorts items based on the depth of size options in descending order. */
    Sort_On["DepthDsc"] = "depth_dsc";
    /** Sorts items based on discount in ascending order. */
    Sort_On["DiscountAsc"] = "discount_asc";
    /** Sorts items based on discount in descending order. */
    Sort_On["DiscountDsc"] = "discount_dsc";
    /** Sorts items based on the latest added. */
    Sort_On["Latest"] = "latest";
    /** Sorts items based on popularity. */
    Sort_On["Popular"] = "popular";
    /** Sorts items based on price in ascending order. */
    Sort_On["PriceAsc"] = "price_asc";
    /** Sorts items based on price in descending order. */
    Sort_On["PriceDsc"] = "price_dsc";
})(Sort_On || (Sort_On = {}));
/** Different types of stores available. */
export var StoreType;
(function (StoreType) {
    StoreType["Hard"] = "hard";
    StoreType["Soft"] = "soft";
})(StoreType || (StoreType = {}));
/** Position options for tag placement. */
export var TagPositionEnum;
(function (TagPositionEnum) {
    TagPositionEnum["BodyBottom"] = "body_bottom";
    TagPositionEnum["BodyTop"] = "body_top";
    TagPositionEnum["Head"] = "head";
})(TagPositionEnum || (TagPositionEnum = {}));
/** Subtypes of tags for categorization. */
export var TagSubType;
(function (TagSubType) {
    TagSubType["External"] = "external";
    TagSubType["Inline"] = "inline";
})(TagSubType || (TagSubType = {}));
/** Types of tags available in the system. */
export var TagType;
(function (TagType) {
    TagType["Css"] = "css";
    TagType["Js"] = "js";
})(TagType || (TagType = {}));
/** Types of themes available. */
export var ThemeTypeEnum;
(function (ThemeTypeEnum) {
    ThemeTypeEnum["React"] = "react";
    ThemeTypeEnum["Vue2"] = "vue2";
})(ThemeTypeEnum || (ThemeTypeEnum = {}));
/** Types of assets that can be attached to tickets. */
export var TicketAssetTypeEnum;
(function (TicketAssetTypeEnum) {
    TicketAssetTypeEnum["Brand"] = "brand";
    TicketAssetTypeEnum["Collection"] = "collection";
    TicketAssetTypeEnum["File"] = "file";
    TicketAssetTypeEnum["Image"] = "image";
    TicketAssetTypeEnum["Order"] = "order";
    TicketAssetTypeEnum["Product"] = "product";
    TicketAssetTypeEnum["Shipment"] = "shipment";
    TicketAssetTypeEnum["Video"] = "video";
    TicketAssetTypeEnum["Youtube"] = "youtube";
})(TicketAssetTypeEnum || (TicketAssetTypeEnum = {}));
/** Sources from which tickets can be created. */
export var TicketSourceEnum;
(function (TicketSourceEnum) {
    TicketSourceEnum["PlatformPanel"] = "platform_panel";
    TicketSourceEnum["SalesChannel"] = "sales_channel";
})(TicketSourceEnum || (TicketSourceEnum = {}));
/** General type classifications. */
export var Type;
(function (Type) {
    Type["Permanent"] = "permanent";
    Type["Temporary"] = "temporary";
})(Type || (Type = {}));
/** Units of measurement for various quantities. */
export var Unit;
(function (Unit) {
    Unit["L"] = "L";
    Unit["Cm"] = "cm";
    Unit["G"] = "g";
    Unit["Kg"] = "kg";
    Unit["M"] = "m";
    Unit["Ml"] = "ml";
    Unit["Nos"] = "nos";
    Unit["Pack"] = "pack";
})(Unit || (Unit = {}));
/** Enum for OTP send and resend actions. */
export var UserAction;
(function (UserAction) {
    /** Resend an OTP to the user. */
    UserAction["Resend"] = "resend";
    /** Send a new OTP to the user. */
    UserAction["Send"] = "send";
})(UserAction || (UserAction = {}));
/** Enum representing allowed registration types for user attributes. */
export var UserAttributeRegistrationType;
(function (UserAttributeRegistrationType) {
    /** The attribute is required during registration. */
    UserAttributeRegistrationType["Mandatory"] = "mandatory";
    /** The attribute is optional during registration. */
    UserAttributeRegistrationType["Optional"] = "optional";
})(UserAttributeRegistrationType || (UserAttributeRegistrationType = {}));
/** Defines the type of validation rule applied to an attribute's value. */
export var ValidationType;
(function (ValidationType) {
    /** Maximum allowed value (numeric, date, or string length). */
    ValidationType["Max"] = "max";
    /** Minimum allowed value (numeric, date, or string length). */
    ValidationType["Min"] = "min";
    /** Pattern matching using regular expression. */
    ValidationType["Regex"] = "regex";
})(ValidationType || (ValidationType = {}));
/** Types of web redirects available. */
export var WebRedirectType;
(function (WebRedirectType) {
    WebRedirectType["Web"] = "web";
})(WebRedirectType || (WebRedirectType = {}));
/** Days of the week. */
export var Weekday;
(function (Weekday) {
    Weekday["Friday"] = "friday";
    Weekday["Monday"] = "monday";
    Weekday["Saturday"] = "saturday";
    Weekday["Sunday"] = "sunday";
    Weekday["Thursday"] = "thursday";
    Weekday["Tuesday"] = "tuesday";
    Weekday["Wednesday"] = "wednesday";
})(Weekday || (Weekday = {}));
/** Template names available in the system. */
export var TemplateNameEnum;
(function (TemplateNameEnum) {
    TemplateNameEnum["CheckoutForm"] = "checkout_form";
    TemplateNameEnum["DefaultDisplay"] = "default_display";
    TemplateNameEnum["Plp"] = "plp";
    TemplateNameEnum["StoreOsForm"] = "store_os_form";
})(TemplateNameEnum || (TemplateNameEnum = {}));
//# sourceMappingURL=graphql.js.map