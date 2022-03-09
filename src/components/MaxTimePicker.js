import * as React from 'react';
import Utils from '../Utils';
import Picker from './Picker';

import '../resources/css/MaxTimePicker.scss';

const MINUTES = 0;
const SECS = 1;

function MaxTimePicker({onMaxTimeChange, minutes, seconds}) {
    const [time, setTime] = React.useState({minutes, seconds});
    const [values, setValues] = React.useState([]);

    function calculateTime(values) {
        const minutes = Number(values[MINUTES]) || 0,
            seconds = Number(values[SECS]) || 0;

        return {
            minutes, 
            seconds 
        };
    }

    function arrowClick(result, elementRef) {
        const newValues = [...values];

        newValues[elementRef] = result;
        result = calculateTime(newValues);            
        setTime(result);
        setValues(newValues);
        onMaxTimeChange && onMaxTimeChange(result);
    }

    return <div className="pickerContainer timerContainer rounded rounded2">
            <Picker value={time.minutes} initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, MINUTES)}} />
            <div className="maxTimePickerContainer--separator">m</div>
            <Picker value={time.seconds} initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, SECS)}} />
            <div className="maxTimePickerContainer--separator">s</div>
        </div>;
}

export default MaxTimePicker;