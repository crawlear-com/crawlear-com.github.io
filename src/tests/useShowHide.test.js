import { fireEvent, renderHook } from '@testing-library/react';
import useShowHide from '../hooks/useShowHide';

const hideClass = 'hide'

test('renders hook', () => {
    const addEventListener = window.addEventListener
    window.addEventListener = jest.fn()
    const { result } = renderHook(() => useShowHide(hideClass))

    expect(result.current[0]).toBe('')
    expect(window.addEventListener).toHaveBeenCalled()
    window.addEventListener = addEventListener
});

test('after sroll', () => {
    const { result } = renderHook(() => useShowHide(hideClass, 50))

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    fireEvent.scroll(window, { target: { scrollY: 300 } })
    expect(result.current[0]).toBe(hideClass)
});

test('does not hide after sroll less than height', () => {
    const { result } = renderHook(() => useShowHide(hideClass, 50))

    fireEvent.scroll(window, { target: { scrollY: 25 } })
    expect(result.current[0]).toBe('')
});

test('does not hide on top debounce: scrollY<0', () => {
    const { result } = renderHook(() => useShowHide(hideClass, 50))

    fireEvent.scroll(window, { target: { scrollY: 125 } })
    expect(result.current[0]).toBe(hideClass)
    fireEvent.scroll(window, { target: { scrollY: 25 } })
    expect(result.current[0]).toBe('')
    fireEvent.scroll(window, { target: { scrollY: -25 } })
    expect(result.current[0]).toBe('')
});

test('after sroll < height', () => {
    const { result } = renderHook(() => useShowHide(hideClass, 50))

    fireEvent.scroll(window, { target: { scrollY: 10 } })
    expect(result.current[0]).toBe('')
});


test('after sroll and go back 0', () => {
    const { result } = renderHook(() => useShowHide(hideClass))

    fireEvent.scroll(window, { target: { scrollY: 400 } })
    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(result.current[0]).toBe('')
});
