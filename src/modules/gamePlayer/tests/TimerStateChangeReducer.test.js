import { TimerStateChangeReducer } from "../reducers/TimerStateChangeReducer";
import { TimerStates } from "../reducers/TimerStateChangeReducer";

Date.now = jest.fn(() => 8888)

test('pause action', () => {
    const initialState = {
        millis: 0,
        timer: 111,
        state: TimerStates.Play,
        timeStart: 0
    }
    const newState = TimerStateChangeReducer(initialState, { type: TimerStates.Pause, payload: { }})

    expect(newState.millis).toBe(0)
    expect(newState.state).toBe(TimerStates.Pause)
    expect(newState.timer).toBe(0)
});

test('play action', () => {
    const initialState = {
        millis: 0,
        timer: 0,
        state: TimerStates.Pause,
        timeStart: 0
    }
    const newState = TimerStateChangeReducer(initialState, { type: TimerStates.Play, payload: {
        millis: 123,
        timer: 321,
        timeStart: 121212
     }})

    expect(newState.millis).toBe(123)
    expect(newState.state).toBe(TimerStates.Play)
    expect(newState.timer).toBe(321)
    expect(newState.timeStart).toBe(121212)
    expect(Date.now).not.toHaveBeenCalled()
});

test('stop action', () => {
    const initialState = {
        millis: 1110,
        timer: 2120,
        state: TimerStates.Play,
        timeStart: 0
    }
    const newState = TimerStateChangeReducer(initialState, { type: TimerStates.Stop, payload: { }})

    expect(newState.millis).toBe(0)
    expect(newState.state).toBe(TimerStates.Stop)
    expect(newState.timer).toBe(0)
    expect(newState.timeStart).toBe(0)
});

test('update action', () => {
    const initialState = {
        millis: 1110,
        timer: 2120,
        state: TimerStates.Play,
        timeStart: 0
    }
    const newState = TimerStateChangeReducer(initialState, { type: TimerStates.Update, payload: { millis: 1111 }})

    expect(newState.millis).toBe(1111)
    expect(newState.state).toBe(TimerStates.Play)
    expect(newState.timer).toBe(2120)
    expect(newState.timeStart).toBe(0)
});