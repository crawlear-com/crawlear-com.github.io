import { render, screen, fireEvent } from '@testing-library/react';
import LightModeSwitcher, { LIGHTMODE_CLASS } from '../components/LightModeSwitcher';

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
  document.body.classList.remove(LIGHTMODE_CLASS)
})

test('renders Light switcher', () => {
  const onClick = jest.fn()

  render(<LightModeSwitcher onClick={onClick} />, div)
  expect(screen.getByText('description.lightdarktheme')).toBeInTheDocument()
});

test('onClick', () => {
  const onClick = jest.fn()

  render(<LightModeSwitcher onClick={onClick} />, div)
  const lightSwitchElement = screen.getByText('description.lightdarktheme')
  fireEvent.click(lightSwitchElement)
  expect(document.body.classList.contains(LIGHTMODE_CLASS)).toBeTruthy()
});

test('onClick x2', () => {
  const onClick = jest.fn()

  render(<LightModeSwitcher onClick={onClick} />, div)
  const lightSwitchElement = screen.getByText('description.lightdarktheme')
  fireEvent.click(lightSwitchElement)
  expect(document.body.classList.contains(LIGHTMODE_CLASS)).toBeTruthy()
  fireEvent.click(lightSwitchElement)
  expect(document.body.classList.contains(LIGHTMODE_CLASS)).toBeFalsy()
});