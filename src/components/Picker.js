import * as React from 'react';
import '../resources/css/Picker.scss';

function Picker({callback, minValue = 0, maxValue = 200, initialValue = 0, value = 0}) {
    const elementRef = React.useRef();

    !value && (value = initialValue);

    function arrowClick(elementRef, operation) {
        const value = Number(elementRef.current.textContent);
        let result = value + operation;

        if (result >=minValue && result <=maxValue) {
            elementRef.current.textContent = result;

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