const Events = {
    listenEvent: (element:HTMLElement, eventName:string, callback:any) => {
        element.addEventListener(eventName, callback);
    },

    sendEvent: (element:HTMLElement, eventName:string, data:any) => {
        element.dispatchEvent(new CustomEvent(eventName, { detail:  data}));
    }
};

export default Events;