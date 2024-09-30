import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../../components/Menu.js';

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

test('renders Menu closed', () => {
  render(<BrowserRouter><Menu /></BrowserRouter>, div)
  
  const menu = screen.getByTestId('menuContainer')
  const menuEntries = screen.queryByTestId("linksContainer");
  const menuBars = screen.getAllByTestId("burguerMenuBar")

  expect(menuBars.length).toBe(3);
  expect(menu.classList.contains("closed")).toBeTruthy();
  expect(menuEntries).toBeNull();
});

test('opens Menu', () => {
    render(<BrowserRouter><Menu /></BrowserRouter>, div)
    
    const menu = screen.getByTestId('menuContainer')
  
    expect(menu.classList.contains("open")).toBeFalsy();
    act(() => {
      menu.click();
    })
    expect(menu.classList.contains("open")).toBeTruthy();
  });

  test('renders Menu open', () => {
    render(<BrowserRouter><Menu /></BrowserRouter>, div)
    const menu = screen.getByTestId('menuContainer')
  
    expect(menu.classList.contains("open")).toBeFalsy();
    act(() => {
      menu.click();
    })
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
  });