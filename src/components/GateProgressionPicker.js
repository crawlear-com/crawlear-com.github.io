import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from './Picker';

function GateProgressionPicker({onGatesChange,
    zones, 
    value,
    minValue,
    maxValue}) {
    const { t } = useTranslation();
    const pickerElements = [];

    for (let i=0; i<zones; i++) {
        pickerElements.push(<>
            <div className='zoneName'>{t('description.zona')} {i+1}:</div><br />
            <Picker minValue={minValue || 1} 
                maxValue={maxValue || 40}
                value={value}
                callback={(result) => {
                    onGatesChange(result, i);
                }} 
                initialValue={1} />
        </>);
    }

    return <div>
        <p>{t('content.seleccionPuertas')}:</p>
        <div className="gatesPickerContainer pickerContainer horizontalScrollContainer rounded rounded2">
            {pickerElements}
        </div>
    </div>;
}

export default GateProgressionPicker;