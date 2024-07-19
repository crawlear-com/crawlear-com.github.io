import { render, screen } from '@testing-library/react';
import TimerControl from '../components/TimerControl.js';

const div = document.createElement('div');

jest.mock('react-i18next', () => ({
  useTranslation: () => {
      return {
          t: (str) => str,
          i18n: {
              changeLanguage: () => new Promise(() => {}),
          }
      };
  }
}));

beforeEach(()=>{  
  document.body.innerHTML = '';
  div.className = 'AppMainContainer';
  document.body.append(div);
});

test('renders TimerControl', () => {
    const onPlayPauseChangeMock = jest.fn()
    
    render(<TimerControl time={1000} onPlayPauseChange={onPlayPauseChangeMock} />, div);
    expect(screen.getBytRole("timer").textContent).toBe("00:00:000");
});

/*
test('TimerControl play/pause callback', () => {
    const onTimerChangeMock = jest.fn(),
        { container } = render(<TimerControl time={0} onTimerChange={onTimerChangeMock} />, div),
        playPauseButton = container.querySelector(".timerPlayButton");

    playPauseButton.click();
    expect(onTimerChangeMock).toHaveBeenCalled();
});
*/