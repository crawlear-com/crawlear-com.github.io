import { render, screen } from '@testing-library/react';
import Menu from '../Menu';

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

jest.mock('../components/OpenedMenu.tsx')
jest.mock('../components/ClosedMenu.tsx')
jest.mock('../components/MenuLogo.tsx')

beforeEach(()=>{
  document.body.innerHTML = '';
  document.body.append(div);
  window.crawlear = {
    fb: jest.fn()
  }
})

afterEach(() => {
  delete window.crawlear
})

test('renders Menu closed', () => {
  render(<Menu />, div)
  expect(screen.getByText('Closed Menu')).toBeInTheDocument()
  expect(screen.queryByText('Opened Menu')).toBeFalsy();
  expect(screen.getByText('Menu Logo')).toBeInTheDocument();
});

test('renders Menu opened', () => {
  render(<Menu isOpen={true} />, div)
  expect(screen.queryByText('Closed Menu')).not.toBeInTheDocument()
  expect(screen.getByText('Opened Menu')).toBeInTheDocument()
  expect(screen.getByText('Menu Logo')).toBeInTheDocument();
});
