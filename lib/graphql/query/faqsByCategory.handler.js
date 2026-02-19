import { setfaqsByCategory } from "../../store/slices/content";
import { conditionalStoreDispatch } from "../../store/utils/util";
import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function faqsByCategoryHandler(faqsByCategory, dispatch, params, oldStore, options) {
    if (faqsByCategory) {
        conditionalStoreDispatch(dispatch, setfaqsByCategory, faqsByCategory, options);
        emitFPIEvent(FPI_EVENTS.FAQS_VIEW, params, faqsByCategory, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=faqsByCategory.handler.js.map