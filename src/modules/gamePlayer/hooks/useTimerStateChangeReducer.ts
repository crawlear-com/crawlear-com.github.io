import * as React from 'react'

import { TimerStates, TimerStateChangeReducer } from '../reducers/TimerStateChangeReducer'

const useTimerStateChangeReducer = (startTime: number, maxTime: number) => {
    const initialState = {
        millis: startTime || 0,
        timer: 0,
        maxTime: maxTime,
        state: TimerStates.Pause,
        timeStart: Date.now()
    }
    const [timerState, dispatchStateChange] = React.useReducer(TimerStateChangeReducer, initialState)

    return [timerState, dispatchStateChange]
}

export default useTimerStateChangeReducer