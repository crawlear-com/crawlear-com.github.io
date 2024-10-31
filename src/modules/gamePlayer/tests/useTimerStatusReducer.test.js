import { renderHook } from '@testing-library/react';
import useTimerStateChangeReducer from '../hooks/useTimerStateChangeReducer';

test('returns initial state', () => {
    Date.now = jest.fn(() => 121212)
    const { result } = renderHook(() => useTimerStateChangeReducer(0, 6000))

    expect(result.current[0].millis).toBe(0)
    expect(result.current[0].maxTime).toBe(6000)
    expect(result.current[0].state).toBe('pause')
    expect(result.current[0].timeStart).toBe(121212)
});

test('returns initial state with initial values', () => {
    Date.now = jest.fn(() => 121212)
    const { result } = renderHook(() => useTimerStateChangeReducer(111, 666))

    expect(result.current[0].millis).toBe(111)
    expect(result.current[0].maxTime).toBe(666)
    expect(result.current[0].state).toBe('pause')
    expect(result.current[0].timeStart).toBe(121212)
});