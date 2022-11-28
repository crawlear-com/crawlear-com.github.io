import { render } from '@testing-library/react';
import Facebook from '../../../components/embed/Facebook.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders div container', () => {
  const { container } = render(<Facebook url="http://url.com" />, div),
    facebook = container.querySelector('.fb-post');

  expect(facebook.getAttribute("data-href")).toBe("http://url.com");
  expect(facebook.getAttribute("data-show-text")).toBeTruthy();
  expect(facebook.getAttribute("data-width")).toBe("350");
});
