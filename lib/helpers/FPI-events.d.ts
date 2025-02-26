import { EventEmitterFunction } from "../types";
declare global {
    interface Window {
        FPI: {
            event: {
                emit: (eventName: string, payload: any) => undefined;
            };
        };
        fpi: any;
    }
}
export type PayloadCreator = (result: any, param: any, store: any, oldStore?: any) => any;
type FPI_EVENTS = {
    [key: string]: {
        eventName: string;
        payloadCreator: PayloadCreator;
    };
};
export type EventMap = {
    eventName: string;
    payloadCreator: PayloadCreator;
};
export declare const FPI_EVENTS: FPI_EVENTS;
export declare function emitFPIEvent(event: EventMap | undefined, params: any, result: any, oldStore: any, dispatch?: any, eventEmitter?: EventEmitterFunction): true | undefined;
export declare function defaultFPIEmit(eventName: string, payload: any): void;
export declare function collectUnemittedEvents(customData: {
    [x: string]: any;
    hasOwnProperty: (arg0: string) => any;
}): any[];
export declare function getPrimaryVerifiedValue(items?: any): any;
export declare function getEventPayloadWithUtmParams(payload: any, store: any): any;
export declare function emitAllEvents(events: any, FPI_EVENTS: {
    [x: string]: any;
    hasOwnProperty?: any;
}, storeInitialData: any): void;
export {};
