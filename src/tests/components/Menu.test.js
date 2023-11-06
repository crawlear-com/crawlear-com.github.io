import { render, act } from '@testing-library/react';
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
  const { container } = render(<BrowserRouter><Menu /></BrowserRouter>, div),
    menu = container.querySelector('.menuContainer'),
    menuEntries = menu.querySelector(".linksContainer");

  expect(menu.querySelectorAll(".burguerMenuBar").length).toBe(3);
  expect(menu.classList.contains("closed")).toBeTruthy();
  expect(menuEntries).toBeNull();
});

test('opens Menu', () => {
    const { container } = render(<BrowserRouter><Menu /></BrowserRouter>, div),
      menu = container.querySelector('.menuContainer');
  
    expect(menu.classList.contains("open")).toBeFalsy();
    act(() => {
      menu.click()
    })
  
    expect(menu.classList.contains("open")).toBeTruthy();
  });

  test('renders Menu open', () => {
    const { container } = render(<BrowserRouter><Menu /></BrowserRouter>, div),
      menu = container.querySelector('.menuContainer');
  
    expect(menu.classList.contains("open")).toBeFalsy();
    act(() => {
      menu.click();
    })
    const links = menu.querySelectorAll(".linksContainer li");

    expect(links.length).toBe(10);
    expect(links[0].textContent).toBe("description.herramientajuego");
    expect(links[1].textContent).toBe("description.herramientaruta");
    expect(links[2].textContent).toBe("-");
    expect(links[3].querySelector("div").getAttribute("href")).toBe("https://www.aecar.org/modalidades.php?tipo=crawler");
    expect(links[4].querySelector("div").getAttribute("href")).toBe("https://www.clubzonarc.es/");
    expect(links[5].querySelector("div").getAttribute("href")).toBe("https://isrcc.eu/");
    expect(links[6].textContent).toBe("-");
    expect(links[7].textContent).toBe("description.politicaprivacidad");
    expect(links[8].textContent).toBe("description.aboutus");
  });