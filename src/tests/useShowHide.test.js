import { fireEvent, renderHook } from '@testing-library/react';
import useShowHide from '../hooks/useShowHide';

test('renders hook', () => {
    const addEventListener = window.addEventListener
    window.addEventListener = jest.fn()
    const { result } = renderHook(() => useShowHide('hide'))

    expect(result.current[0]).toBe('')
    expect(window.addEventListener).toHaveBeenCalled()
    window.addEventListener = addEventListener
});

test('hook after sroll', () => {
    const { result } = renderHook(() => useShowHide('hide'))

    fireEvent.scroll(window, { target: { scrollY: 100 } })
    fireEvent.scroll(window, { target: { scrollY: 300 } })
    expect(result.current[0]).toBe('hide')
});
