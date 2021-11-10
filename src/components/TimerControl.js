import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function TimerControl ({state, time, onPlayPauseChange}) {
    const timeValue = Utils.secondsToTime(time);
    const { t, i18n } = useTranslation();

    return <div className="timerContainer rounded rounded2"> {t('description.tiempo')}:
        <div className="timer">{`${String(timeValue.h).padStart(2, '0')}:${String(timeValue.m).padStart(2, '0')}:${String(timeValue.s).padStart(2, '0')}:${String(timeValue.mm).padStart(3, '0')}`}</div>
        <button className="timerPlayButton importantNote" onClick={onPlayPauseChange}>play/pause</button>
    </div>;
}

export default TimerControl;
