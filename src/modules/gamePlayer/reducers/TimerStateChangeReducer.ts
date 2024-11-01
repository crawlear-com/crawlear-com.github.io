export enum TimerStates {
    Play = 'play',
    Stop = 'stop',
    Pause = 'pause',
    Update = 'update'
}

export interface TimerState {
    millis: number
    timer: number
    state: TimerStates
    timeStart: number
    maxTime: number
}

interface TimerActionPayload {
    timer: number
    millis: number,
    timeStart: number
}

interface TimerAction {
    type: string
    payload: TimerActionPayload
}

export const TimerStateChangeReducer = ((state: TimerState, action: TimerAction): any => {
    const newState: TimerState = { ...state }
    const payload = action.payload || {}

    switch(action.type) {
        case TimerStates.Pause:
            newState.state = TimerStates.Pause
            newState.timer = 0
            break
        case TimerStates.Stop:
            newState.state = TimerStates.Stop
            newState.millis = 0
            newState.timer = 0
            break
        case TimerStates.Play:
            newState.state = TimerStates.Play
            newState.millis = payload.millis
            newState.timer = payload.timer
            newState.timeStart = payload.timeStart
            break
        case TimerStates.Update:
            newState.millis = action.payload.millis
            break
    }

    return newState
})