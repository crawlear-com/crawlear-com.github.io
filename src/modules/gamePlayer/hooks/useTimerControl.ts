import * as React from 'react'
import EventManager from '../../../EventManager'
import { MSG_TIME, MSG_START, MSG_STOP } from '../Bluetooth';
import useTimerStateChangeReducer from './useTimerStateChangeReducer';
import { TimerState } from '../reducers/TimerStateChangeReducer';
import { TimerStates } from '../reducers/TimerStateChangeReducer';
import Utils from '../../../Utils';
import Analytics from '../../../Analytics';

const TIMER_MIN_INTERVAL = 10;

const useTimerControl = (startTime: number,
    maxTime: number,
    courtesyTime: number,
    onTimerChange: Function,
    onPointBecauseLastMinute: Function,
    onTimeFiasco: Function,
    containerRef: React.MutableRefObject<HTMLDivElement>): Array<any> => {

    const eventManager = React.useMemo(() => new EventManager(), [])
    const tickTime = React.useRef(startTime || 0)
    const [state, dispatch] = useTimerStateChangeReducer(startTime, maxTime)

    function timerCount(state: TimerState) {
        if (tickTime.current < state.maxTime) {
            tickTime.current = (Date.now() - state.timeStart)
            onTimerChange && onTimerChange(tickTime.current)
            dispatch({ type: TimerStates.Update, payload: { millis: tickTime.current } })

            if (Date.now() % 2 === 0) {
                eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)))
            }
        } else if (timeIsOverAndThereIsCourtesyTime(onPointBecauseLastMinute, state.maxTime, tickTime.current, courtesyTime)) {
            tickTime.current = (Date.now() - state.timeStart)
            onTimerChange && onTimerChange(tickTime.current)
            dispatch({ type: TimerStates.Update, payload: { millis: tickTime.current }})

            if (state.maxTime > 0 && containerRef && !containerRef.current.classList.contains('blink')) {
                containerRef.current.classList.add('blink')
            }
            if (state.maxTime > 0 && ((state.maxTime + tickTime.current) % 10000 === 0)) {
                onPointBecauseLastMinute()
            }
        } else {
            containerRef && containerRef.current.classList.toggle('blink');
            containerRef && containerRef.current.classList.toggle('foreColorRed');
            onTimeFiasco && onTimeFiasco();
            dispatch({ type: TimerStates.Pause, payload: { millis: tickTime.current }})
        }

        eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)))
    }

    function onPlayPauseChange(state: TimerState) {
        containerRef && containerRef.current.classList.toggle('play')

        if (state.state === TimerStates.Pause || state.state === TimerStates.Stop) {
            Analytics.event('play', 'timePlay', '')
            containerRef && containerRef.current.classList.remove('blink')
            eventManager.sendMessage(MSG_START, {})
            state.timer && window.clearInterval(state.timer)

            const timeStart = Date.now()
            const timer = window.setInterval(() => { timerCount({...state,timeStart: timeStart}) }, TIMER_MIN_INTERVAL)

            dispatch({ type: TimerStates.Play, payload: { millis: tickTime.current, timer: timer, timeStart:  timeStart}})
        } else {
            Analytics.event('play', 'timePause', '')
            eventManager.sendMessage(MSG_STOP, {})
            state.timer && window.clearInterval(state.timer)
            dispatch({ type: TimerStates.Pause, payload: { millis: tickTime.current }} )
        }
    }

    function onReset() {
        tickTime.current = 0
        if (containerRef && containerRef.current.classList.contains('play')) {
            containerRef.current.classList.toggle('play')
        }
        state.timer && clearInterval(state.timer);
        containerRef && containerRef.current.classList.remove('blink')
        Analytics.event('play', 'timeStop', '')

        dispatch({ type: TimerStates.Stop })
        onTimerChange && onTimerChange(tickTime.current)
        eventManager.sendMessage(MSG_STOP, {})
    }

    return [state, onPlayPauseChange, onReset]
}

function timeIsOverAndThereIsCourtesyTime(onPointBecauseLastMinute: Function,
    maxTime: number, tickTime: number, courtesyTime: number) {
    return (onPointBecauseLastMinute && maxTime > 0 && tickTime >= maxTime &&
        tickTime < (maxTime + courtesyTime)) || maxTime === 0
}

export default useTimerControl