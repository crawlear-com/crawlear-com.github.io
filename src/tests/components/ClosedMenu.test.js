import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ClosedMenu from '../../components/Menu/ClosedMenu';

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
    fb: jest.fn()
  }
})

afterEach(() => {
  delete window.crawlear
})

test('renders Opened Menu', () => {
    const onClick = jest.fn()

    render(<BrowserRouter><ClosedMenu OnClickMenu={onClick} /></BrowserRouter>, div)
    const menu = screen.getByTestId('menuContainer')
    const menuEntries = screen.queryByTestId("linksContainer")
    const menuBars = screen.getAllByTestId("burguerMenuBar")

    expect(menuBars.length).toBe(3)
    expect(menu.classList.contains("closed")).toBeTruthy()
    expect(menuEntries).toBeNull()
})

test('Menu onClick', () => {
    const onClick = jest.fn()

    render(<BrowserRouter><ClosedMenu OnClickMenu={onClick} /></BrowserRouter>, div)
    const menu = screen.getByTestId('menuContainer')

    fireEvent.click(menu)
    expect(onClick).toHaveBeenCalled()
});