import * as React from 'react';
import '../resources/css/ButtonText.scss'
import Analytics from '../Analytics';
import { useTranslation } from 'react-i18next';

function ButtonText({
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

    return <div className="buttonText">
        <button className='buttonTextPlus' onClick={() => {
            valueRef.current.focus();
            updateValue(step)
        }}>+ {t(text)}</button>
        <button className='buttonTextMinus' onClick={() => {
            valueRef.current.focus();
            updateValue(-step)
        }}>- {t(text)}</button>

        <div ref={valueRef} className={getControlClass("buttonTextValue")}>{value}</div>        
    </div>;
}

export default ButtonText;