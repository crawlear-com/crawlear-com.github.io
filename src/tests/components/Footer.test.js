import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer.js';

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

  window.crawlear = {};
  window.crawlear.user = {
    displayName: "Crawlear",
    uid: 'uid'
  };
  window.crawlear.fbBase = {
    isUserLogged: jest.fn(()=>{
      return true;
    })
  };
});

afterEach(()=> {
  delete window.crawlear;
});

test('renders Footer embed logged', () => {
  render(<Footer />, div)
  const footer = screen.getByTestId('Footer'),
    currentYear = new Date().getFullYear();

  expect(footer.textContent).toBe(`[©crawlear.com ${currentYear}]`);
});

test('renders Footer embed not logged', () => {
  window.crawlear.fbBase = {
    isUserLogged: jest.fn(()=>{
      return false;
    })
  };

  render(<Footer />, div)
  const footer = screen.getByTestId('Footer'),
    currentYear = new Date().getFullYear();

  expect(footer.textContent).toBe(`[©crawlear.com ${currentYear}- description.aboutus - description.politicaprivacidad]`);
});