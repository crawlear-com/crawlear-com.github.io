import { render, screen } from '@testing-library/react';
import Menu from '../../components/Menu/Menu';

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

jest.mock('../../components/Menu/OpenedMenu.tsx')
jest.mock('../../components/Menu/ClosedMenu.tsx')

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
});

test('renders Menu opened', () => {
  render(<Menu isOpen={true} />, div)
  expect(screen.queryByText('Closed Menu')).not.toBeInTheDocument()
  expect(screen.getByText('Opened Menu')).toBeInTheDocument()
});
