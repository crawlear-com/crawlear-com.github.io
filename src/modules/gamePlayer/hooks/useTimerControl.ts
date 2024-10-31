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

    const timerCount = React.useCallback((state: TimerState) => {
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

            if (state.maxTime > 0 && containerRef && !containerRef.current.classList.contains('blink')) {
                containerRef.current.classList.add('blink')
            }
            if (state.maxTime > 0 && ((state.maxTime + tickTime.current) % 10000 === 0)) {
                onPointBecauseLastMinute()
            }
        } else {
            containerRef && containerRef.current.classList.toggle('blink');
            containerRef && containerRef.current.classList.toggle('foreColorRed');
            eventManager.sendMessage(MSG_STOP, {})
            dispatch({ type: TimerStates.Pause })
            onTimeFiasco && onTimeFiasco();
        }

        eventManager.sendMessage(MSG_TIME, Utils.printTime(Utils.millisToTime(tickTime.current)))
    },[dispatch, containerRef, eventManager, onPointBecauseLastMinute, onTimeFiasco, onTimerChange, courtesyTime])

    const onPlayPauseChange = React.useCallback(() => {
        containerRef && containerRef.current.classList.toggle('play')

        if (state.state === TimerStates.Pause || state.state === TimerStates.Stop) {
            Analytics.event('play', 'timePlay', '')
            containerRef && containerRef.current.classList.remove('blink')
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
    }, [dispatch, state, eventManager, timerCount, containerRef])

    const onReset = React.useCallback(() => {
        tickTime.current = 0
        if (containerRef && containerRef.current.classList.contains('play')) {
            containerRef.current.classList.toggle('play')
        }
        state.timer && clearInterval(state.timer);
        containerRef && containerRef.current.classList.remove('blink')

        dispatch({ type: TimerStates.Stop })
        onTimerChange && onTimerChange(tickTime.current)
        eventManager.sendMessage(MSG_STOP, {})
    }, [state.timer, onTimerChange, dispatch, eventManager, containerRef])

    return [state, onPlayPauseChange, onReset]
}

export default useTimerControl