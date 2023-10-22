import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../../Analytics';
import Utils from '../../Utils';
import EventManager from '../../EventManager';
import { MSG_TIME, MSG_START, MSG_STOP } from '../Bluetooth';

import '../styles/TimerControl.scss';

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const STATE_STOP = 'stop';
const TIMER_MIN_INTERVAL = 10;

function TimerControl({
    startTime,
    forceAction,
    label,
    onTimerChange,
    courtesyTime,
    maxTime,
    onPointBecauseLastMinute,
    onTimeFiasco }) {
    const { t } = useTranslation();
    const containerRef = React.useRef(null);
    const tickTime = React.useRef(startTime || 0);
    const eventManager = new EventManager();
    const [state, setState] = React.useState(() => {
        return {
            millis: startTime || 0,
            timer: null,
            maxTime: maxTime,
            state: STATE_PAUSE,
            timeStart: Date.now()
        };
    });
    const timeValue = Utils.millisToTime(state.millis);

    React.useEffect(() => {
        forceAction === STATE_STOP && onReset();
        forceAction === STATE_PAUSE && state.state === STATE_PLAY && onPlayPauseChange();
    }, [forceAction]);

    React.useEffect(() => {
        const newState = { ...state };

        if (newState.state === STATE_PLAY) {
            newState.timer && clearInterval(newState.timer);
            newState.millis = tickTime.current;
            newState.timer = setInterval(() => { timerCount(newState) }, TIMER_MIN_INTERVAL);
            newState.timeStart = Date.now();
            eventManager.sendMessage(MSG_START, {});
            setState(previousInputs => ({ ...previousInputs, ...newState }));
        } else if (newState.state === STATE_PAUSE) {
            newState.timer && clearInterval(state.timer);
            newState.timer = null;
            eventManager.sendMessage(MSG_STOP, {});
            setState(previousInputs => ({ ...previousInputs, ...newState }));
        } else {
            newState.millis = 0;
            tickTime.current = 0;
            newState.timer && clearInterval(state.timer);
            newState.timer = null;
            eventManager.sendMessage(MSG_STOP, {});
            setState(previousInputs => ({ ...previousInputs, ...newState }));
        }
        eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)));
    }, [state.state]);

    function timerCount(state) {
        if (tickTime.current < state.maxTime) {
            tickTime.current = (Date.now() - state.timeStart) + state.millis;
            onTimerChange && onTimerChange(tickTime.current);
            setState(previousInputs => ({
                ...previousInputs,
                millis: tickTime.current
            }));
            if (Date.now() % 2 === 0) {
                eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)));
            }
        } else if ((onPointBecauseLastMinute && state.maxTime > 0 && tickTime.current >= state.maxTime && tickTime.current < (state.maxTime + courtesyTime))
            || state.maxTime === 0) {
            tickTime.current = (Date.now() - state.timeStart);
            onTimerChange && onTimerChange(tickTime.current);
            setState(previousInputs => ({
                ...previousInputs,
                millis: tickTime.current
            }));

            if (state.maxTime > 0 && !containerRef.current.classList.contains('blink')) {
                containerRef.current.classList.add('blink');
            }
            if (state.maxTime > 0 && ((state.maxTime + tickTime.current) % 10000 === 0)) {
                onPointBecauseLastMinute();
            }
        } else {
            containerRef.current.classList.toggle('blink');
            containerRef.current.classList.toggle('foreColorRed');
            onPlayPauseChange();
            onTimeFiasco && onTimeFiasco();
        }
    };

    function onReset() {
        tickTime.current = 0;
        state.timer && clearInterval(state.timer);
        containerRef.current.classList.remove('blink');
        setState({
            maxTime: state.maxTime,
            millis: 0,
            timer: null,
            state: STATE_STOP
        });
        onTimerChange && onTimerChange(tickTime.current);
        if (containerRef.current.classList.contains('play')) {
            containerRef.current.classList.toggle('play');
        }
    }

    function onPlayPauseChange() {
        containerRef.current.classList.toggle('play');
        if (state.state === STATE_PAUSE || state.state === STATE_STOP) {
            state.state = STATE_PLAY;
            Analytics.event('play', 'timePlay', '');
            containerRef.current.classList.remove('blink');
        } else {
            state.state = STATE_PAUSE;
            Analytics.event('play', 'timePause', '');
        }
        setState(previousInputs => ({
            ...previousInputs,
            state: state.state
        }));
    }

    return <div ref={containerRef} className="timerContainer">
        <div className='timerLabel'>{(label || t('description.tiempo')).toUpperCase()}:</div>
        <div className="timer">{Utils.printTime(timeValue)}</div>
        <button className="timerPlayButton" onClick={onPlayPauseChange}></button>
        <button onClick={onReset} className="resetButton"></button>
    </div>;
}

export default TimerControl;