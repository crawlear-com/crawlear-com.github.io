import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import TimerControl from '../components/TimerControl'
import useTimerControl from '../hooks/useTimerControl'

const div = document.createElement('div')

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

const mockOnPlayPause = jest.fn()
const mockOnReset = jest.fn()
jest.mock('../hooks/useTimerControl', () => (startTime, maxTime,
    courtesyTime, onTimerChange, onPointBecauseLastMinute, onTimeFiasco, containerRef) => ([{
    millis: 1000,
    timer: 0,
    maxTime: 100,
    state: 'pause',
    timeStart: Date.now()
}, mockOnPlayPause, mockOnReset]))

beforeEach(() => {
    document.body.innerHTML = '';
    document.body.append(div);
})

test('renders TimerControl', () => {
    render(<TimerControl label="timer control" />);
    const buttons = screen.getAllByRole('button')
    const label = screen.getByText('TIMER CONTROL:')

    expect(screen.getByText("00:01:000")).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(buttons.length).toBe(2)
    expect(buttons[0].className).toBe('timerPlayButton')
    expect(buttons[1].className).toBe('resetButton')
});

test('play pause click', () => {
    render(<TimerControl />);
    const button = screen.getAllByRole('button')[0]

    fireEvent.click(button)

    expect(mockOnPlayPause).toHaveBeenCalled()
});

test('reset click', () => {
    render(<TimerControl />);
    const button = screen.getAllByRole('button')[1]

    fireEvent.click(button)

    expect(mockOnReset).toHaveBeenCalled()
});