import { setapplicationStaff, } from "../../store/slices/configuration";
import { conditionalStoreDispatch } from "../../store/utils/util";
export function applicationStaffHandler(applicationStaff, dispatch, options) {
    if (applicationStaff) {
        conditionalStoreDispatch(dispatch, setapplicationStaff, applicationStaff, options);
    }
}
//# sourceMappingURL=applicationStaff.handler.js.map