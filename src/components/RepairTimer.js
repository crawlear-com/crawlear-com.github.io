import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';

import '../resources/css/RepairTimer.scss';

function RepairTimer({onTimeFiasco, onRepairTimerChange}) {
    const { t } = useTranslation();

    return <div className="repairTimeContainer">
            <TimerControl 
                label={t('points.reparacion')}
                onTimeFiasco={onTimeFiasco}
                onTimerChange={onRepairTimerChange}
                maxTime={1800000} />
        </div>;
}

export default RepairTimer;