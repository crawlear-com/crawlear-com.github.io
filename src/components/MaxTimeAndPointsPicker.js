import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MaxTimePicker from './MaxTimePicker';
import Picker from './Picker';

import '../resources/css/MaxTimePicker.css';

const MODE_OFFICIAL = 1;

function MaxTimeAndPointsPicker({ 
        mode, 
        onMaxTimeChange, 
        onMaxPointsChange, 
        onCompleteGameMaxtimeSelected,
        showTimePicker
    }) {
    
    const { t } = useTranslation();
    let maxTimePicker = <></>;

    if (showTimePicker) {
        maxTimePicker = <><p>{t('content.maxTimeText1')}</p>
            <MaxTimePicker onMaxTimeChange={onMaxTimeChange}
                hours={0}
                minutes={0}
                seconds={0} />
            </>;
    }

    return <div>
        {maxTimePicker}
        <p>{t('content.maxTimeText2')}</p>
        <div className="pickerContainer timerContainer rounded rounded2">
            <Picker minValue={0} maxValue={40} callback={(result) => {onMaxPointsChange(result)}} initialValue={0} />
        </div>
        <button onClick={onCompleteGameMaxtimeSelected} className="rounded rounded2 importantNote">{t('description.continuar')}</button>
    </div>;
}

export default MaxTimeAndPointsPicker;