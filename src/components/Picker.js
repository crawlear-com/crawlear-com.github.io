import * as React from 'react';
import Button from '@mui/material/Button';
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
        <Button variant="outlined" className="picker--arrowUp" onClick={(event)=> {arrowClick(elementRef,+1)}}></Button>
        <div className="picker--value" ref={elementRef}>{value}</div>
        <Button variant="outlined" className="picker--arrowDown" onClick={(event)=> {arrowClick(elementRef,-1)}}></Button>
    </div>;
}

export default Picker;