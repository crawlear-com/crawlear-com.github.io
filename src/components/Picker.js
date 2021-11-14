import * as React from 'react';
import '../resources/css/Picker.css';

function Picker({callback, minValue, maxValue, initialValue}) {
    const elementRef = React.useRef();
    const [value, setValue] = React.useState(initialValue);

    function arrowClick(elementRef, operation) {
        const value = Number(elementRef.current.innerText);
        let result = value + operation;

        if (result >=minValue && result <=maxValue) {
            elementRef.current.innerText = result;
            setValue(result);
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