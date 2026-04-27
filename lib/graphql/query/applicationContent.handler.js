import { setnavigations, setseoConfiguration, setblogs, setdataLoaders, setannouncements, setsupportInformation, settags, setlandingPage, setlegalInformation, setfaqCategories, setfaqs, } from "../../store/slices/content";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function applicationContenthandler(applicationContent, dispatch, options) {
    const { announcements, blogs, seo_configuration, custom_fields, data_loaders, faq_categories, faqs, landing_page, navigations, pages, slideshows, legal_information, support_information, tags, } = applicationContent;
    if (navigations) {
        conditionalStoreDispatch(dispatch, setnavigations, navigations, options);
    }
    if (faq_categories) {
        conditionalStoreDispatch(dispatch, setfaqCategories, faq_categories, options);
    }
    if (faqs) {
        conditionalStoreDispatch(dispatch, setfaqs, faqs, options);
    }
    if (seo_configuration) {
        conditionalStoreDispatch(dispatch, setseoConfiguration, seo_configuration, options);
    }
    if (legal_information) {
        conditionalStoreDispatch(dispatch, setlegalInformation, legal_information, options);
    }
    if (blogs) {
        conditionalStoreDispatch(dispatch, setblogs, blogs, options);
    }
    if (data_loaders) {
        conditionalStoreDispatch(dispatch, setdataLoaders, data_loaders, options);
    }
    if (announcements) {
        conditionalStoreDispatch(dispatch, setannouncements, announcements, options);
    }
    if (support_information) {
        conditionalStoreDispatch(dispatch, setsupportInformation, support_information, options);
    }
    if (tags) {
        conditionalStoreDispatch(dispatch, settags, { tags }, options);
    }
    if (landing_page) {
        conditionalStoreDispatch(dispatch, setlandingPage, landing_page, options);
    }
}
//# sourceMappingURL=applicationContent.handler.js.map