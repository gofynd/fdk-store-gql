export var Action;
(function (Action) {
    Action["Merge"] = "merge";
    Action["Replace"] = "replace";
})(Action || (Action = {}));
export var ActionEnum;
(function (ActionEnum) {
    ActionEnum["Merge"] = "merge";
    ActionEnum["Replace"] = "replace";
})(ActionEnum || (ActionEnum = {}));
export var AppType;
(function (AppType) {
    AppType["Development"] = "development";
    AppType["Live"] = "live";
})(AppType || (AppType = {}));
export var CommunicationActionEnum;
(function (CommunicationActionEnum) {
    CommunicationActionEnum["Optin"] = "optin";
    CommunicationActionEnum["Optout"] = "optout";
})(CommunicationActionEnum || (CommunicationActionEnum = {}));
export var CommunicationChannelEnum;
(function (CommunicationChannelEnum) {
    CommunicationChannelEnum["Email"] = "email";
    CommunicationChannelEnum["Sms"] = "sms";
    CommunicationChannelEnum["Whatsapp"] = "whatsapp";
})(CommunicationChannelEnum || (CommunicationChannelEnum = {}));
export var DataLoaderType;
(function (DataLoaderType) {
    DataLoaderType["Function"] = "function";
    DataLoaderType["Url"] = "url";
})(DataLoaderType || (DataLoaderType = {}));
export var LocalityEnum;
(function (LocalityEnum) {
    LocalityEnum["Pincode"] = "pincode";
    LocalityEnum["Sector"] = "sector";
})(LocalityEnum || (LocalityEnum = {}));
export var LocalityType;
(function (LocalityType) {
    LocalityType["City"] = "city";
    LocalityType["Pincode"] = "pincode";
    LocalityType["Sector"] = "sector";
    LocalityType["State"] = "state";
})(LocalityType || (LocalityType = {}));
export var LocationTypeEnum;
(function (LocationTypeEnum) {
    LocationTypeEnum["City"] = "city";
    LocationTypeEnum["Country"] = "country";
    LocationTypeEnum["State"] = "state";
})(LocationTypeEnum || (LocationTypeEnum = {}));
export var Operation;
(function (Operation) {
    Operation["RemoveItem"] = "remove_item";
    Operation["UpdateItem"] = "update_item";
})(Operation || (Operation = {}));
export var PageTypes;
(function (PageTypes) {
    PageTypes["Custom"] = "custom";
    PageTypes["Sections"] = "sections";
    PageTypes["System"] = "system";
})(PageTypes || (PageTypes = {}));
export var PageVisibilityOfItem;
(function (PageVisibilityOfItem) {
    PageVisibilityOfItem["Pdp"] = "pdp";
})(PageVisibilityOfItem || (PageVisibilityOfItem = {}));
export var PhoneTypeEnum;
(function (PhoneTypeEnum) {
    PhoneTypeEnum["PhoneNumber"] = "phone_number";
    PhoneTypeEnum["Tollfree"] = "tollfree";
})(PhoneTypeEnum || (PhoneTypeEnum = {}));
export var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum["High"] = "high";
    PriorityEnum["Low"] = "low";
    PriorityEnum["Medium"] = "medium";
    PriorityEnum["Urgent"] = "urgent";
})(PriorityEnum || (PriorityEnum = {}));
export var PushTokenAction;
(function (PushTokenAction) {
    PushTokenAction["Create"] = "create";
    PushTokenAction["Reset"] = "reset";
    PushTokenAction["Update"] = "update";
})(PushTokenAction || (PushTokenAction = {}));
export var RedirectType;
(function (RedirectType) {
    RedirectType["AppStore"] = "app_store";
    RedirectType["Web"] = "web";
})(RedirectType || (RedirectType = {}));
export var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum["No"] = "no";
    ResponseEnum["Yes"] = "yes";
})(ResponseEnum || (ResponseEnum = {}));
export var SelectedType;
(function (SelectedType) {
    SelectedType["Exact"] = "exact";
    SelectedType["None"] = "none";
    SelectedType["Query"] = "query";
})(SelectedType || (SelectedType = {}));
export var SessionEnum;
(function (SessionEnum) {
    SessionEnum["Days"] = "Days";
    SessionEnum["Hours"] = "Hours";
    SessionEnum["Minutes"] = "Minutes";
})(SessionEnum || (SessionEnum = {}));
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
export var Sort_On;
(function (Sort_On) {
    Sort_On["DiscountAsc"] = "discount_asc";
    Sort_On["DiscountDsc"] = "discount_dsc";
    Sort_On["Latest"] = "latest";
    Sort_On["Popular"] = "popular";
    Sort_On["PriceAsc"] = "price_asc";
    Sort_On["PriceDsc"] = "price_dsc";
})(Sort_On || (Sort_On = {}));
export var StoreType;
(function (StoreType) {
    StoreType["Hard"] = "hard";
    StoreType["Soft"] = "soft";
})(StoreType || (StoreType = {}));
export var TagPositionEnum;
(function (TagPositionEnum) {
    TagPositionEnum["BodyBottom"] = "body_bottom";
    TagPositionEnum["BodyTop"] = "body_top";
    TagPositionEnum["Head"] = "head";
})(TagPositionEnum || (TagPositionEnum = {}));
export var TagSubType;
(function (TagSubType) {
    TagSubType["External"] = "external";
    TagSubType["Inline"] = "inline";
})(TagSubType || (TagSubType = {}));
export var TagType;
(function (TagType) {
    TagType["Css"] = "css";
    TagType["Js"] = "js";
})(TagType || (TagType = {}));
export var ThemeTypeEnum;
(function (ThemeTypeEnum) {
    ThemeTypeEnum["React"] = "react";
    ThemeTypeEnum["Vue2"] = "vue2";
})(ThemeTypeEnum || (ThemeTypeEnum = {}));
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
export var TicketSourceEnum;
(function (TicketSourceEnum) {
    TicketSourceEnum["PlatformPanel"] = "platform_panel";
    TicketSourceEnum["SalesChannel"] = "sales_channel";
})(TicketSourceEnum || (TicketSourceEnum = {}));
export var Type;
(function (Type) {
    Type["Permanent"] = "permanent";
    Type["Temporary"] = "temporary";
})(Type || (Type = {}));
export var Unit;
(function (Unit) {
    Unit["Cm"] = "cm";
    Unit["G"] = "g";
    Unit["Kg"] = "kg";
    Unit["L"] = "l";
    Unit["M"] = "m";
    Unit["Ml"] = "ml";
    Unit["Nos"] = "nos";
    Unit["Pack"] = "pack";
})(Unit || (Unit = {}));
export var UserAction;
(function (UserAction) {
    UserAction["Resend"] = "resend";
    UserAction["Send"] = "send";
})(UserAction || (UserAction = {}));
export var WebRedirectType;
(function (WebRedirectType) {
    WebRedirectType["Web"] = "web";
})(WebRedirectType || (WebRedirectType = {}));
export var TemplateNameEnum;
(function (TemplateNameEnum) {
    TemplateNameEnum["CheckoutForm"] = "checkout_form";
    TemplateNameEnum["DefaultDisplay"] = "default_display";
    TemplateNameEnum["StoreOsForm"] = "store_os_form";
})(TemplateNameEnum || (TemplateNameEnum = {}));
//# sourceMappingURL=graphql.js.map