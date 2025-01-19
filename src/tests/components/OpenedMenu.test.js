import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OpenedMenu from '../../modules/Menu/components/OpenedMenu';

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

jest.mock('../../modules/social/components/UserProfilePhoto')

afterEach(() => {
  delete window.crawlear
})

test('renders Opened Menu', () => {
    const onClick = jest.fn()

    render(<BrowserRouter><OpenedMenu onClick={onClick} /></BrowserRouter>, div)
    const links = screen.getAllByRole("listitem");
    const anchors = screen.getAllByRole("link")

    expect(links.length).toBe(10);
    expect(links[0].textContent).toBe("description.perfilsocial");
    expect(links[1].textContent).toBe("description.herramientajuego");
    expect(links[2].textContent).toBe("description.herramientaruta");
    expect(links[3].textContent).toBe("-");
    expect(anchors[0].getAttribute("href")).toBe("https://www.aecar.org/modalidades.php?tipo=crawler");
    expect(anchors[1].getAttribute("href")).toBe("https://www.clubzonarc.es/");
    expect(anchors[2].getAttribute("href")).toBe("https://isrcc.eu/");
    expect(links[7].textContent).toBe("-");
    expect(links[8].textContent).toBe("description.politicaprivacidad");
    expect(links[9].textContent).toBe("description.aboutus");
    expect(screen.getByText('UserProfilePhoto')).toBeInTheDocument()
    expect(screen.getByText('Display Name')).toBeInTheDocument()
});

test('Menu onClick', () => {
    const onClick = jest.fn()

    render(<BrowserRouter><OpenedMenu OnClickMenu={onClick} /></BrowserRouter>, div)
    const menu = screen.getByTestId('menuContainer')

    fireEvent.click(menu)
    expect(onClick).toHaveBeenCalled()
});