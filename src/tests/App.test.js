import { render } from '@testing-library/react';
import App from '../App';

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

test('renders App', () => {

});
