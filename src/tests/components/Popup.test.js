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
  const { container } = render(<Popup></Popup>)
  const popupContainer = screen.getByTitle('popup')

  expect(popupContainer).toBeInTheDocument()
  expect(popupContainer.classList.contains('closed')).toBeFalsy()
});

test('renders children', () => {
  const { container } = render(<Popup><div title="children"></div></Popup>)
  const children = screen.getByTitle('children')

  expect(children).toBeInTheDocument()
});

test('click to close', () => {
  const onClose = jest.fn()
  const { container } = render(<Popup onClose={onClose}></Popup>)
  const popupContainer = screen.getByTitle('popup')
  fireEvent(popupContainer, new MouseEvent('click', {
    clientX: 10,
    clientY: 10,
    bubbles: true,
    cancelable: true,
  }))

  expect(onClose).toHaveBeenCalledWith(false)
});