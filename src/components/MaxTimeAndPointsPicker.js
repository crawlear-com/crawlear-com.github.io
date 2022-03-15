import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MaxTimePicker from './MaxTimePicker';
import Picker from './Picker';
import Utils from '../Utils';

import '../resources/css/MaxTimePicker.scss';

function MaxTimeAndPointsPicker({ 
        onMaxTimeChange, 
        onMaxPointsChange, 
        showTimePicker,
        maxTime,
        maxPoints
    }) {
    
    const { t } = useTranslation(),
        maxTimeStruct = Utils.millisToTime(maxTime);
    let maxTimePicker = <></>;

    if (showTimePicker) {
        maxTimePicker = <><p>{t('content.maxTimeText1')}</p>
            <MaxTimePicker 
                onMaxTimeChange={onMaxTimeChange}
                onMaxPointsChange={onMaxPointsChange}
                minutes={maxTimeStruct.m}
                seconds={maxTimeStruct.s}
                millis={maxTimeStruct.mm} />
            </>;
    }

    return <div>
        {maxTimePicker}
        <p>{t('content.maxTimeText2')}</p>
        <div className="pickerContainer rounded rounded2">
            <Picker value={maxPoints} minValue={0} maxValue={40} callback={(result) => {onMaxPointsChange(result)}} initialValue={0} />
        </div>
    </div>;
}

export default MaxTimeAndPointsPicker;