import { setnavigations, setseoConfiguration, setblogs, setdataLoaders, setannouncements, setsupportInformation, settags, setlandingPage } from "../../store/slices/content";
export function applicationContenthandler(applicationContent, dispatch) {
    const { announcements, blogs, seoConfiguration, customFields, dataLoaders, faqCategories, faqs, landingPage, navigations, pages, slideshows, legalInformation, supportInformation, tags } = applicationContent;
    if (navigations) {
        dispatch(setnavigations(navigations));
    }
    if (seoConfiguration) {
        dispatch(setseoConfiguration(seoConfiguration));
    }
    if (blogs) {
        dispatch(setblogs(blogs));
    }
    if (dataLoaders) {
        dispatch(setdataLoaders(dataLoaders));
    }
    if (announcements) {
        dispatch(setannouncements(announcements));
    }
    if (supportInformation) {
        dispatch(setsupportInformation(supportInformation));
    }
    if (tags) {
        dispatch(settags(tags));
    }
    if (landingPage) {
        dispatch(setlandingPage(landingPage));
    }
}
//# sourceMappingURL=applicationContent.handler.js.map