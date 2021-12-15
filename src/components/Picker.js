import * as React from 'react';
import '../resources/css/Picker.scss';

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
        <button className="picker--arrowUp" onClick={(event)=> {arrowClick(elementRef,+1)}}></button>
        <div className="picker--value" ref={elementRef}>{value}</div>
        <button className="picker--arrowDown" onClick={(event)=> {arrowClick(elementRef,-1)}}></button>
    </div>;
}

export default Picker;