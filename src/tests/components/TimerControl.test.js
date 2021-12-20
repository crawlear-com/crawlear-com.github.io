import { render } from '@testing-library/react';
import TimerControl from '../../components/TimerControl.js';

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
  document.body.append(div);
});

test('renders TimerControl', () => {
    const onPlayPauseChangeMock = jest.fn(),
        { container } = render(<TimerControl time={1000} onPlayPauseChange={onPlayPauseChangeMock} />, div);

    expect(container.querySelector(".timer").textContent).toBe("00:00:01:000");
});

test('TimerControl play/pause callback', () => {
    const onPlayPauseChangeMock = jest.fn(),
        { container } = render(<TimerControl time={0} onPlayPauseChange={onPlayPauseChangeMock} />, div),
        playPauseButton = container.querySelector("button");

    playPauseButton.click();
    expect(onPlayPauseChangeMock).toHaveBeenCalled();
});
