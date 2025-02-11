import { render, screen, fireEvent } from '@testing-library/react';
import BrowseableListItem from '../components/BrowseableListItem';
import Analytics from '../../../analytics/Analytics';
import { BrowserRouter } from 'react-router-dom'

const div = document.createElement('div');

jest.mock('../../../Analytics')
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

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

test('renders ListItem browseable', () => {
  render(<BrowserRouter><BrowseableListItem path="/path1">li content</BrowseableListItem></BrowserRouter>, div)
  const listItem = screen.getByRole('link')

  expect(listItem).toBeInTheDocument()
  expect(listItem.textContent).toBe('li content')
});

test('onClick', () => {
  render(<BrowserRouter><BrowseableListItem path="/path1">li content</BrowseableListItem></BrowserRouter>, div)
  const listItem = screen.getByRole('link')

  fireEvent.click(listItem)

  expect(Analytics.event).toBeCalledWith('navigation','menu','/path1')
});
