// @ts-ignore
import Events from "./Events.ts";

const CONTAINER_CLASS = '.AppMainContainer';

class EventManager {
    constructor() {
        this.container = document.querySelector(CONTAINER_CLASS);
    }

    listenMessages(eventName:string, callback:any) {
        Events.listenEvent(this.container, eventName, callback);
    }

    sendMessage(eventName:string, data:any) {
        Events.sendEvent(this.container, eventName, data)
    }
}

interface EventManager {
    container: any;
}

export default EventManager;