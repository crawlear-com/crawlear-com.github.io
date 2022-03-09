import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';

import '../resources/css/RepairTimer.scss';

function RepairTimer({onTimeFiasco}) {
    const { t } = useTranslation();
//1800000
    return <div className="repairTimeContainer">
            {t('points.reparacion').toUpperCase()}:
            <TimerControl 
                onTimeFiasco={onTimeFiasco}
                maxTime={3000} />
        </div>;
}

export default RepairTimer;