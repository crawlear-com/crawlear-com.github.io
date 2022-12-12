import * as React from 'react';
import '../resources/css/ControlText.scss';
import Analytics from '../Analytics';
import { useTranslation } from 'react-i18next';

function ControlText({
        text,
        step,
        value,
        maxValue,
        onValueChange
    }) {
    const isNegativeControl = (step<0);
    let boldValue = isNegativeControl ? value<0 : value>0;
    const valueRef = React.useRef();
    const { t } = useTranslation();

    function updateValue(step) {
        if (!isNegativeControl && (value+step >= 0) && (!maxValue || value+step <= Math.abs(maxValue*step))) {
            Analytics.event('menu','pointValueChanged',`${text} : ${step}`);
            onValueChange(step);
        } else if (isNegativeControl && (value+step <= 0)) {
            Analytics.event('menu','pointValueChanged',`${text} : ${step}`);
            onValueChange(step);
        }
    }

    function getControlClass(initialClass) {
        return boldValue ? `bold ${initialClass}` : `${initialClass}`;
    }

    return <div className="controlText">
        <button className='buttonControlTextPlus' onClick={() => {
            valueRef.current.focus();
            updateValue(step)
        }}>+</button>
        <button className='buttonControlTextMinus' onClick={() => {
            valueRef.current.focus();
            updateValue(-step)
        }}>-</button>

        <div className={getControlClass("controlTextText")}>{t(text)} </div>
        <div ref={valueRef} className={getControlClass("controlTextValue")}>{value}</div>
    </div>;
}

export default ControlText;