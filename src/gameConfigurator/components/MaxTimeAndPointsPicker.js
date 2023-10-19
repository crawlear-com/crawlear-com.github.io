import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MaxTimePicker from './MaxTimePicker';
import Picker from '../../components/Picker';
import Utils from '../../Utils';

import '../styles/MaxTimePicker.scss';

function MaxTimeAndPointsPicker({ 
        onMaxTimeChange, 
        onMaxPointsChange, 
        showTimePicker,
        time,
        points
    }) {
    
    const { t } = useTranslation(),
        maxTimeStruct = Utils.millisToTime(time);
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
            <Picker value={points} 
                minValue={0}
                initialValue={0}
                callback={(result) => {
                    onMaxPointsChange(result)
                }} />
        </div>
    </div>;
}

export default MaxTimeAndPointsPicker;