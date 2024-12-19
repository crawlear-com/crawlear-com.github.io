import { renderHook } from '@testing-library/react';
import useTimerControl from '../hooks/useTimerControl';
import { TimerStates } from '../reducers/TimerStateChangeReducer';

const containerRef = { current: { classList: { toggle: jest.fn(), remove: jest.fn(), contains: jest.fn() } } }

jest.mock('../../../Analytics')
jest.mock('../../../EventManager')

var mockDispatch = jest.fn()
jest.mock('../hooks/useTimerStateChangeReducer', () => (startTime, maxTime) => {
    const initialState = {
        millis: startTime || 0,
        timer: 0,
        maxTime: maxTime,
        state: 'pause',
        timeStart: 1212
    }

    return [initialState, mockDispatch]
})

beforeEach(() => {
    window.clearInterval = jest.fn()
    window.setInterval = jest.fn(() => 1212)
    Date.now = jest.fn(() => 8888)
})

test('instanciates hook', () => {
    const { result } = renderHook(() => useTimerControl(99, 1000, 0 , jest.fn(), jest.fn(), jest.fn(), containerRef))

    expect(result.current[0].millis).toBe(99)
    expect(result.current[0].timer).toBe(0)
    expect(result.current[0].maxTime).toBe(1000)
    expect(result.current[0].state).toBe('pause')
    expect(result.current[0].timeStart).toBe(1212)
});

test('onPlayPauseChange calllback being paused', () => {
    const { result } = renderHook(() => useTimerControl(99, 1000, 0 , jest.fn(), jest.fn(), jest.fn(), containerRef))

    const onPlayPauseChange = result.current[1]

    onPlayPauseChange({
        millis: 0,
        timer: 0,
        maxTime: 60000,
        state: 'pause',
        timeStart: 1212
    })

    expect(window.clearInterval).not.toHaveBeenCalled()
    expect(window.setInterval).toHaveBeenCalled()
    expect(containerRef.current.classList.toggle).toHaveBeenCalledWith('play')
    expect(mockDispatch).toBeCalledWith({ type: 'play', payload: { millis: 99, timer: 1212, timeStart: 8888}})
    expect(Date.now).toHaveBeenCalled()
});

test('onReset calllback', () => {
    const onTimerChange = jest.fn()
    const { result } = renderHook(() => useTimerControl(99, 1000, 0 , onTimerChange, jest.fn(), jest.fn(), containerRef))
    const onReset = result.current[2]

    onReset()

    expect(containerRef.current.classList.remove).toHaveBeenCalledWith('blink')
    expect(containerRef.current.classList.contains).toHaveBeenCalledWith('play')
    expect(containerRef.current.classList.toggle).not.toHaveBeenCalledWith('blink')
    expect(onTimerChange).toHaveBeenCalled()
    expect(window.clearInterval).not.toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith({ type: TimerStates.Stop })
});