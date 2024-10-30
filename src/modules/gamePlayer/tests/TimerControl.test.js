import * as React from 'react'
import { render, screen } from '@testing-library/react';
import TimerControl from '../components/TimerControl.js';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
      return {
          t: (str) => str,
          i18n: {
              changeLanguage: () => new Promise(() => {}),
          }
      };
  }
}))

beforeEach(() => {
    const mockDispatch = jest.fn()
    jest.mock('../hooks/useTimerStateChangeReducer', (startTime, maxTime) => {
        const initialState = {
            millis: startTime || 0,
            timer: 0,
            maxTime: maxTime,
            state: 'pause',
            timeStart: Date.now()
        }

        return [initialState, mockDispatch]
    })
})

test('renders TimerControl', () => {
    const onPlayPauseChangeMock = jest.fn()

    render(<TimerControl time={1000} onPlayPauseChange={onPlayPauseChangeMock} />);

    expect(screen.getByText("00:00:000")).toBeInTheDocument()
});