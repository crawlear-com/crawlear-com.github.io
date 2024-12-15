import * as React from 'react';
import Picker from '../../../components/Picker';

import '../styles/MaxTimePicker.scss';

const MINUTES = 0;
const SECS = 1;

function MaxTimePicker({onMaxTimeChange, minutes, seconds}) {
    const values = [minutes, seconds];

    function calculateTime(values) {
        const minutes = Number(values[MINUTES]) || 0,
            seconds = Number(values[SECS]) || 0;

        return (seconds * 1000) + (minutes * 60 * 1000);
    }

    function arrowClick(result, elementRef) {
        const newValues = [...values];

        newValues[elementRef] = result;
        result = calculateTime(newValues);
        onMaxTimeChange && onMaxTimeChange(result);
    }

    return <div className="pickerContainer rounded rounded2">
            <Picker value={values[MINUTES]} initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, MINUTES)}} />
            <div className="maxTimePickerContainer--separator">m</div>
            <Picker value={values[SECS]} initialValue={0} minValue={0} maxValue={60} callback={(result) => {arrowClick(result, SECS)}} />
            <div className="maxTimePickerContainer--separator">s</div>
        </div>;
}

export default MaxTimePicker;