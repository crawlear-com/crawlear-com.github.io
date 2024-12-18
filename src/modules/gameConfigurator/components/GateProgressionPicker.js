import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from '../../../components/Picker';

function GateProgressionPicker({onGatesChange, zones, value, minValue = 1,maxValue = 40}) {
    const { t } = useTranslation(['main']);
    const pickerElements = [];

    for (let i=0; i<zones; i++) {
        pickerElements.push(<div key={`pickerContainer${i}`}>
            <div key={ i } className='zoneName'>{t('description.zona')} { i+1 }:</div>
            <br key={`br${i}`} />
            <Picker key={`picker${i}`} minValue={ minValue }
                maxValue={ maxValue }
                value={ value }
                callback={(result) => { onGatesChange(result, i) }}
                initialValue={ 1 } />
        </div>);
    }

    return <div>
        <p>{t('content.seleccionPuertas')}:</p>
        <div className="gatesPickerContainer pickerContainer horizontalScrollContainer rounded rounded2">
            {pickerElements}
        </div>
    </div>;
}

export default GateProgressionPicker;