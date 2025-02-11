import { render, screen, fireEvent } from '@testing-library/react';
import SocialProfile from '../components/SocialProfile';
import Analytics from '../../../analytics/Analytics';
import { BrowserRouter } from 'react-router-dom';

const div = document.createElement('div');

jest.mock('../../social/components/UserProfilePhoto')
jest.mock('../../../Analytics')

beforeEach(()=>{
  document.body.innerHTML = '';
  document.body.append(div);
  window.crawlear = {
    user: {
      displayName: 'pilot1',
      photoURL: 'https://url1'
    }
  }
})

afterEach(() => {
  delete window.crawlear
})

test('renders Social Profile', () => {
  render(<BrowserRouter><SocialProfile></SocialProfile></BrowserRouter>, div)

  expect(screen.getByText('pilot1')).toBeInTheDocument()
  expect(screen.getByText('UserProfilePhoto')).toBeInTheDocument()
});

test('onClick', () => {
  render(<BrowserRouter><SocialProfile></SocialProfile></BrowserRouter>, div)
  const displayName = screen.getByRole('link')

  fireEvent.click(displayName)

  expect(displayName.getAttribute('href')).toBe('/social')
  expect(Analytics.event).toHaveBeenCalledWith('navigation','menu', '/social')
});
