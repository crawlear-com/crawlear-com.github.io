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

jest.mock('../../../components/Picker')
jest.mock('../components/MaxTimePicker')

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders Picker and not timer', () => {
  render(<MaxTimeAndPointsPicker initialValue="0" showTimePicker={false} />, div)
  const picker = screen.getByText('Picker')
  const timer = screen.queryByText('MaxTimePicker')

  expect(picker).toBeInTheDocument();
  expect(timer).not.toBeInTheDocument();
});

test('renders Picker and timer too', () => {
  render(<MaxTimeAndPointsPicker initialValue="0" showTimePicker={true} />, div)
  const picker = screen.getByText('Picker')
  const timer = screen.queryByText('MaxTimePicker')

  expect(picker).toBeInTheDocument();
  expect(timer).toBeInTheDocument();
});
