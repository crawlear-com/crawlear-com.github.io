import { render, screen } from '@testing-library/react';
import MaxTimeAndPointsPicker from '../components/MaxTimeAndPointsPicker.js';

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
  render(<MaxTimeAndPointsPicker initialValue="0" />, div)
  const arrows = screen.getAllByRole("button")

  expect(arrows.length).toBe(2);
});
