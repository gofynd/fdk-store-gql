import { setfaqsByCategory } from "../../store/slices/content";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function faqsByCategoryHandler(faqsByCategory, dispatch, options) {
    if (faqsByCategory) {
        conditionalStoreDispatch(dispatch, setfaqsByCategory, faqsByCategory, options);
    }
}
//# sourceMappingURL=faqsByCategory.handler.js.map