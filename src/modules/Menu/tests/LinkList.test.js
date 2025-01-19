import { render, screen } from '@testing-library/react';
import LinkList from '../components/LinkList';
import { BrowserRouter } from 'react-router-dom';

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

jest.mock('../components/BrowseableListItem.tsx')

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

test('renders Link List', () => {
    render(<BrowserRouter><LinkList /></BrowserRouter>, div)
    const links = screen.getAllByRole("listitem");

    expect(links[0].textContent).toBe("-")
    expect(links.length).toBe(1);
    expect(screen.getByText("BrowseableListItem description.perfilsocial")).toBeInTheDocument()
    expect(screen.getByText("BrowseableListItem description.herramientajuego")).toBeInTheDocument()
    expect(screen.getByText("BrowseableListItem description.herramientaruta")).toBeInTheDocument()
    expect(screen.getByText("BrowseableListItem description.politicaprivacidad")).toBeInTheDocument()
    expect(screen.getByText("BrowseableListItem description.aboutus")).toBeInTheDocument()
})