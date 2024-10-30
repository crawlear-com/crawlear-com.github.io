import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../../../Analytics';
import Utils from '../../../Utils';
import EventManager from '../../../EventManager'
import { MSG_TIME, MSG_START, MSG_STOP } from '../Bluetooth';
import useTimerStateChangeReducer from '../hooks/useTimerStateChangeReducer';
import { TimerStates } from '../reducers/TimerStateChangeReducer';

import '../styles/TimerControl.scss';

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

    const { t } = useTranslation(['main'])
    const eventManager = React.useMemo(()=>new EventManager(), [])
    const containerRef = React.useRef(null)
    const tickTime = React.useRef(startTime || 0)

    const [state, dispatch] = useTimerStateChangeReducer(startTime, maxTime)
    const timeValue = Utils.millisToTime(state.millis)

    const timerCount = React.useCallback((state) => {
        if (tickTime.current < state.maxTime) {
            tickTime.current = (Date.now() - state.timeStart) + state.millis
            onTimerChange && onTimerChange(tickTime.current)
            dispatch({ type: TimerStates.Update, payload: { millis: tickTime.current } })

            if (Date.now() % 2 === 0) {
                eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)))
            }
        } else if ((onPointBecauseLastMinute && state.maxTime > 0 && tickTime.current >= state.maxTime && tickTime.current < (state.maxTime + courtesyTime))
            || state.maxTime === 0) {
            tickTime.current = (Date.now() - state.timeStart)
            onTimerChange && onTimerChange(tickTime.current)
            dispatch({ type: TimerStates.Update, payload: { millis: tickTime.current }})

            if (state.maxTime > 0 && !containerRef.current.classList.contains('blink')) {
                containerRef.current.classList.add('blink')
            }
            if (state.maxTime > 0 && ((state.maxTime + tickTime.current) % 10000 === 0)) {
                onPointBecauseLastMinute()
            }
        } else {
            containerRef.current.classList.toggle('blink');
            containerRef.current.classList.toggle('foreColorRed');
            eventManager.sendMessage(MSG_STOP, {})
            dispatch({ type: TimerStates.Pause })
            onTimeFiasco && onTimeFiasco();
        }

        eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)))
    },[courtesyTime, dispatch, eventManager, onPointBecauseLastMinute, onTimeFiasco, onTimerChange])

    const onPlayPauseChange = React.useCallback(() => {
        containerRef.current.classList.toggle('play')
        if (state.state === TimerStates.Pause || state.state === TimerStates.Stop) {
            Analytics.event('play', 'timePlay', '')
            containerRef.current.classList.remove('blink')
            eventManager.sendMessage(MSG_START, {})
            state.timer && window.clearInterval(state.timer)
            const timer = window.setInterval(() => { timerCount(state) }, TIMER_MIN_INTERVAL)
            dispatch({ type: TimerStates.Play, payload: { millis: tickTime.current, timer: timer }})
        } else {
            Analytics.event('play', 'timePause', '')
            eventManager.sendMessage(MSG_STOP, {})
            state.timer && window.clearInterval(state.timer)
            dispatch({ type: TimerStates.Pause })
        }
    }, [dispatch, state, eventManager, timerCount])

    const onReset = React.useCallback(() => {
        tickTime.current = 0
        if (containerRef.current.classList.contains('play')) {
            containerRef.current.classList.toggle('play')
        }
        state.timer && clearInterval(state.timer);
        containerRef.current.classList.remove('blink')

        dispatch({ type: TimerStates.Stop })
        onTimerChange && onTimerChange(tickTime.current)
        eventManager.sendMessage(MSG_STOP, {})
    }, [state.timer, onTimerChange, dispatch, eventManager])

    React.useEffect(() => {
        forceAction === TimerStates.Stop && onReset()
        forceAction === TimerStates.Pause && state.state === TimerStates.Play && onPlayPauseChange()
    }, [forceAction, onPlayPauseChange, onReset, state])

    return <div ref={containerRef} className="timerContainer">
        <div className='timerLabel'>{(label || t('description.tiempo')).toUpperCase()}:</div>
        <div className="timer">{Utils.printTime(timeValue)}</div>
        <button className="timerPlayButton" onClick={onPlayPauseChange}></button>
        <button onClick={onReset} className="resetButton"></button>
    </div>;
}

export default TimerControl;