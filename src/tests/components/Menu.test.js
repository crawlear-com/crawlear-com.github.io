import { render } from '@testing-library/react';
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
});

test('renders Menu closed', () => {
  const { container } = render(<Menu />, div),
    menu = container.querySelector('.menuContainer'),
    menuEntries = menu.querySelector(".linksContainer");

  expect(menu.querySelectorAll(".burguerMenuBar").length).toBe(3);
  expect(menu.classList.contains("closed")).toBeTruthy();
  expect(menuEntries).toBeNull();
});

test('opens Menu', () => {
    const { container } = render(<Menu />, div),
      menu = container.querySelector('.menuContainer');
  
    expect(menu.classList.contains("open")).toBeFalsy();
    menu.click();
    expect(menu.classList.contains("open")).toBeTruthy();
  });

  test('renders Menu open', () => {
    const { container } = render(<Menu />, div),
      menu = container.querySelector('.menuContainer');
  
    expect(menu.classList.contains("open")).toBeFalsy();
    menu.click();
    const links = menu.querySelectorAll(".linksContainer li");

    expect(links.length).toBe(6);
    expect(links[0].querySelector("a").getAttribute("href")).toBe("/");
    expect(links[1].querySelector("a").getAttribute("href")).toBe("/privacypolicy");
    expect(links[2].querySelector("a").getAttribute("href")).toBe("/aboutus");
    expect(links[3].textContent).toBe("-");
    expect(links[4].querySelector("a").getAttribute("href")).toBe("https://www.aecar.org/modalidades.php?tipo=crawler");
    expect(links[5].querySelector("a").getAttribute("href")).toBe("1 24 REGLAMENTO CRAWLER DEPORTIVO Y TECNICO 2021 V1 BORRADOR 19-1-2021.pdf");
  });