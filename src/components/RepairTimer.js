import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';

import '../resources/css/RepairTimer.scss';

function RepairTimer({onTimeFiasco, onRepairTimerChange}) {
    const { t } = useTranslation();
//1800000
    return <div className="repairTimeContainer">
            <TimerControl 
                label={t('points.reparacion')}
                onTimeFiasco={onTimeFiasco}
                onTimerChange={onRepairTimerChange}
                maxTime={3000} />
        </div>;
}

export default RepairTimer;