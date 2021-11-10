import * as React from 'react';

function ControlText({
        text,
        step,
        value,
        onValueChange
    }) {
    const isNegativeControl = (step<0);
    let boldValue = isNegativeControl ? value<0 : value>0;

    function updateValue(step) {
        if (!isNegativeControl && (value+step >= 0)) {
                onValueChange(step);
        } else if (!isNegativeControl && (value+step <= 0)) {
                onValueChange(step);
        }
    }

    function getControlClass(initialClass) {
        return boldValue ? `bold ${initialClass}` : `${initialClass}`;
    }

    return <div className="controlText">
        <button className='buttonControlTextPlus' onClick={() => {updateValue(step)}}>+</button>
        <button className='buttonControlTextMinus' onClick={() => {updateValue(-step)}}>-</button>

        <div className={getControlClass("controlTextText")}>{text}: </div>
        <div className={getControlClass("controlTextValue")}>{value}</div>        
    </div>;
}

export default ControlText;