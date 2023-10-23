import { render } from '@testing-library/react';
import GoogleMapsUrl from '../../components/embed/GoogleMapsUrl.js';

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
    const { container } = render(<GoogleMapsUrl latitude={40.4314193} longitude={4.1768656} />, div),
    link = container.querySelector("a"),
    linkUrl = link.getAttribute("href");

  expect(link).toBeInTheDocument();
  expect(linkUrl).toBe("https://www.google.com/maps/search/?api=1&query=40.4314193%2C4.1768656");
});

