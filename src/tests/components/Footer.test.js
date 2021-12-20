import { render } from '@testing-library/react';
import Footer from '../../components/Footer.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders Footer embed', () => {
  const { container } = render(<Footer />, div),
    footer = container.querySelector('.Footer'),
    currentYear = new Date().getFullYear();

  expect(footer.textContent).toBe(`©crawlear.com ${currentYear}`);
});
