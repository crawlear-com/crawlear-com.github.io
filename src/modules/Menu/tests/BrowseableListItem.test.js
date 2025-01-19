import { render, screen, fireEvent } from '@testing-library/react';
import BrowseableListItem from '../components/BrowseableListItem';
import Analytics from '../../../Analytics';

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
  render(<BrowseableListItem path="/path1">li content</BrowseableListItem>, div)
  const listItem = screen.getByRole('listitem')

  expect(listItem).toBeInTheDocument()
  expect(listItem.textContent).toBe('li content')
});

test('onClick', () => {
  render(<BrowseableListItem path="/path1">li content</BrowseableListItem>, div)
  const listItem = screen.getByRole('listitem')

  fireEvent.click(listItem)

  expect(mockUsedNavigate).toHaveBeenCalledWith('/path1')
  expect(Analytics.event).toBeCalledWith('navigation','menu','/path1')
});
