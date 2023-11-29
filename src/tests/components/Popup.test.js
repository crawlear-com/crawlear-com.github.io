import { render, screen, fireEvent } from '@testing-library/react';
import Popup from '../../components/Popup';


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

test('renders Popup', () => {
  render(<Popup></Popup>)
  const popupContainer = screen.getByTitle('popup')

  expect(popupContainer).toBeInTheDocument()
  expect(popupContainer.classList.contains('closed')).toBeFalsy()
});

test('renders children', () => {
  render(<Popup><div title="children"></div></Popup>)
  const children = screen.getByTitle('children')

  expect(children).toBeInTheDocument()
});

test('click to close', () => {
  const onClose = jest.fn()
  render(<Popup onClose={onClose}></Popup>)
  const popupContainer = screen.getByTitle('closeButton')
  fireEvent(popupContainer, new MouseEvent('click', {
    clientX: 0,
    clientY: 0,
    bubbles: true,
    cancelable: true,
  }))

  expect(onClose).toHaveBeenCalledWith(false)
});