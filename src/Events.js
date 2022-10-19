
const Events = {
    listenEvent: (element, eventName, callback) => {
        element.addEventListener(eventName, callback);
    },

    sendEvent: (element, eventName, data) => {
        element.dispatchEvent(new CustomEvent(eventName, { detail:  data}));
    }
};





export default Events;