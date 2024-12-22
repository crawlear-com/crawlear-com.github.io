import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { millisToTime, printTime } from '../../../Utils';
import useTimerControl from '../hooks/useTimerControl';
import { TimerStates } from '../reducers/TimerStateChangeReducer';

import '../styles/TimerControl.scss';

function TimerControl({
    startTime,
    forceAction,
    label,
    onTimerChange,
    courtesyTime,
    maxTime,
    onPointBecauseLastMinute,
    onTimeFiasco }) {

    const { t } = useTranslation(['main'])
    const containerRef = React.useRef(null)
    const [state, onPlayPauseChange, onReset] = useTimerControl(startTime, maxTime,
        courtesyTime, onTimerChange, onPointBecauseLastMinute, onTimeFiasco, containerRef)
    const timeValue = millisToTime(state.millis);

    React.useEffect(() => {
        forceAction === TimerStates.Stop && onReset()
        forceAction === TimerStates.Pause && state.state === TimerStates.Play && onPlayPauseChange(state)
    }, [forceAction, state, onPlayPauseChange, onReset])

    return <div ref={containerRef} className="timerContainer">
        <div className='timerLabel'>{(label || t('description.tiempo')).toUpperCase()}:</div>
        <div className="timer">{printTime(timeValue)}</div>
        <button className="timerPlayButton" onClick={() => { onPlayPauseChange(state) }}></button>
        <button onClick={onReset} className="resetButton"></button>
    </div>;
}

export default TimerControl;