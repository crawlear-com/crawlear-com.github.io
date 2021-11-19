import * as React from 'react';
import '../resources/css/Picker.css';

function Picker({callback, minValue, maxValue, initialValue, value}) {
    const elementRef = React.useRef();

    !value && (value = initialValue);

    function arrowClick(elementRef, operation) {
        const value = Number(elementRef.current.innerText);
        let result = value + operation;

        if (result >=minValue && result <=maxValue) {
            elementRef.current.innerText = result;
            callback && callback(result);
        } 

    }
    return <div className="picker">
        <div className="picker--arrowUp" onClick={(event)=> {arrowClick(elementRef,+1)}}></div>
        <div className="picker--value" ref={elementRef}>{value}</div>
        <div className="picker--arrowDown" onClick={(event)=> {arrowClick(elementRef,-1)}}></div>
    </div>;
}

export default Picker;