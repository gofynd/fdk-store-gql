import { emitFPIEvent, FPI_EVENTS } from "../../helpers/FPI-events";
export function createTicketHandler(createTicket, dispatch, params, oldStore, options) {
    console.log("Inside contact us handler...");
    if (createTicket) {
        console.log("Inside contact us handler if condition...");
        emitFPIEvent(FPI_EVENTS.CONTACT_US_SUBMIT, params, createTicket, oldStore, dispatch, options);
    }
}
//# sourceMappingURL=createTicket.handler.js.map