import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from './Picker';

function GateProgressionPicker({onGatesChange, 
    value,
    minValue,
    maxValue}) {
    const { t } = useTranslation();

    return <div>
        <p>{t('content.seleccionPuertas')}:</p>
        <div className="pickerContainer rounded rounded2">
            <Picker minValue={minValue || 1} 
                maxValue={maxValue || 40}
                value={value}
                callback={(result) => {
                    onGatesChange(result);
                }} 
                initialValue={1} />
        </div>
    </div>;
}

export default GateProgressionPicker;