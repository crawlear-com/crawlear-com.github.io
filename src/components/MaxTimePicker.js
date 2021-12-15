import * as React from 'react';
import Utils from '../Utils';
import Picker from './Picker';

import '../resources/css/MaxTimePicker.scss';

const HOURS = 0;
const MINUTES = 1;
const SECS = 2;

function MaxTimePicker({onMaxTimeChange, hours, minutes, seconds}) {
    const [time, setTime] = React.useState(0);
    const [values, setValues] = React.useState([]);

    function calculateTime(values) {
        const hours = Number(values[HOURS]) || 0,
            minutes = Number(values[MINUTES]) || 0,
            seconds = Number(values[SECS]) || 0;

        return Utils.timeToMillis(hours, minutes, seconds);
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
            <Picker initialValue={0} minValue={0} maxValue={24} callback={(result) => {arrowClick(result, HOURS)}} />
            <div className="maxTimePickerContainer--separator">h</div>
            <Picker initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, MINUTES)}} />
            <div className="maxTimePickerContainer--separator">m</div>
            <Picker initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, SECS)}} />
            <div className="maxTimePickerContainer--separator">s</div>
        </div>;
}

export default MaxTimePicker;