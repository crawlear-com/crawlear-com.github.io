export enum TimerStates {
    Play = 'start',
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
    millis: number
}

interface TimerAction {
    type: string
    payload: TimerActionPayload
}

export const TimerStateChangeReducer = ((state: TimerState, action: TimerAction): any => {
    const newState: TimerState = { ...state }

    switch(action.type) {
        case TimerStates.Pause:
            newState.state = TimerStates.Pause
            newState.timer = 0;
            break
        case TimerStates.Stop:
            newState.state = TimerStates.Stop
            newState.millis = 0;
            newState.timer = 0;
            break
        case TimerStates.Play:
            newState.state = TimerStates.Play
            newState.millis = action.payload.millis
            newState.timer = action.payload.timer
            newState.timeStart = Date.now()
            break
        case TimerStates.Update:
            newState.millis = action.payload.millis
            break
    }

    return newState
})