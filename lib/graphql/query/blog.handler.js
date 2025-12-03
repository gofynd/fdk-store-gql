import { setblog, } from "../../store/slices/content";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function bloghandler(blog, dispatch, options) {
    if (blog) {
        conditionalStoreDispatch(dispatch, setblog, blog, options);
    }
}
//# sourceMappingURL=blog.handler.js.map