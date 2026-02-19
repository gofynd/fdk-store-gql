import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function submitCustomFormHandler(submitCustomForm, dispatch, params, oldStore, options) {
    if (submitCustomForm) {
        emitFPIEvent(FPI_EVENTS.CONTACT_US_SUBMIT, params, submitCustomForm, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=submitCustomForm.handler.js.map