import Events from "./Events";

const CONTAINER_CLASS = '.AppMainContainer';

class EventManager {
    constructor() {
        this.container = document.querySelector(CONTAINER_CLASS);
    }

    listenMessages(eventName, callback) {
        Events.listenEvent(this.container, eventName, callback);
    }

    sendMessage(eventName, data) {
        Events.sendEvent(this.container, eventName, data)
    }
}

export default EventManager;