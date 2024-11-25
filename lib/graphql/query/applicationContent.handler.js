import { setnavigations, setseoConfiguration, setblogs, setdataLoaders, setannouncements, setsupportInformation, settags, setlandingPage, setlegalInformation, setfaqCategories, setfaqs } from "../../store/slices/content";
export function applicationContenthandler(applicationContent, dispatch) {
    const { announcements, blogs, seo_configuration, custom_fields, data_loaders, faq_categories, faqs, landing_page, navigations, pages, slideshows, legal_information, support_information, tags } = applicationContent;
    if (navigations) {
        dispatch(setnavigations(navigations));
    }
    if (faq_categories) {
        dispatch(setfaqCategories(faq_categories));
    }
    if (faqs) {
        dispatch(setfaqs(faqs));
    }
    if (seo_configuration) {
        dispatch(setseoConfiguration(seo_configuration));
    }
    if (legal_information) {
        dispatch(setlegalInformation(legal_information));
    }
    if (blogs) {
        dispatch(setblogs(blogs));
    }
    if (data_loaders) {
        dispatch(setdataLoaders(data_loaders));
    }
    if (announcements) {
        dispatch(setannouncements(announcements));
    }
    if (support_information) {
        dispatch(setsupportInformation(support_information));
    }
    if (tags) {
        dispatch(settags({ tags }));
    }
    if (landing_page) {
        dispatch(setlandingPage(landing_page));
    }
}
//# sourceMappingURL=applicationContent.handler.js.map