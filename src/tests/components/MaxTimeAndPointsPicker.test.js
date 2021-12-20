import { render } from '@testing-library/react';
import MaxTimeAndPointsPicker from '../../components/MaxTimeAndPointsPicker.js';

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

test('renders Picker', () => {
  const { container } = render(<MaxTimeAndPointsPicker initialValue="0" />, div),
    arrowUp = container.querySelector(".picker--arrowUp"),
    arrowDown = container.querySelector(".picker--arrowDown"),
    value = container.querySelector(".picker--value");

  expect(arrowUp).toBeInTheDocument();
  expect(arrowDown).toBeInTheDocument();
  expect(value).toBeInTheDocument();
  expect(value.textContent).toBe('0');
});
