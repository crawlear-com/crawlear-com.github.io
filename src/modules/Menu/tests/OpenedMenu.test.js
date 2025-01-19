import { render, screen, fireEvent } from '@testing-library/react';
import OpenedMenu from '../components/OpenedMenu';

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
  window.crawlear = {
    fb: jest.fn(),
    user: {
        displayName: 'Display Name'
    }
  }
})

jest.mock('../components/BrowseableListItem')
jest.mock('../components/SocialProfile')
jest.mock('../components/LinkList')
jest.mock('../components/LightModeSwitcher')

afterEach(() => {
  delete window.crawlear
})

test('renders Opened Menu', () => {
    const onClick = jest.fn()

    render(<OpenedMenu onClick={onClick} />, div)
    expect(screen.getByText('SocialProfile')).toBeInTheDocument()
    expect(screen.getByText('LinkList')).toBeInTheDocument()
    expect(screen.getByText('LightModeSwitcher')).toBeInTheDocument()
});

test('Menu onClick', () => {
    const onClick = jest.fn()

    render(<OpenedMenu OnClickMenu={onClick} />, div)
    const menu = screen.getByTestId('menuContainer')

    fireEvent.click(menu)
    expect(onClick).toHaveBeenCalled()
});