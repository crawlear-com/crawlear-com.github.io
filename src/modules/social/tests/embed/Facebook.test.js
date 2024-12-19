import { render, screen } from '@testing-library/react';
import Facebook from '../../components/embed/Facebook.js';

const div = document.createElement('div');

beforeEach(()=>{
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders div container', () => {
  render(<Facebook url="http://url.com" />, div)
  const facebook = screen.getByTestId('fb-post')

  expect(facebook.getAttribute("data-href")).toBe("http://url.com");
  expect(facebook.getAttribute("data-show-text")).toBeTruthy();
  expect(facebook.getAttribute("data-width")).toBe("350");
});
