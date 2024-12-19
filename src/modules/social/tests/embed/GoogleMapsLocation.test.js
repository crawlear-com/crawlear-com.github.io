import { render, screen } from '@testing-library/react';
import GoogleMapsLocation from '../../components/embed/GoogleMapsLocation.js';

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
    render(<GoogleMapsLocation location={{
        latitude: 40.4314193,
        longitude: 4.1768656
    }} />, div)

    const iframe = screen.getByTitle("google maps location"),
    iframeUrl = iframe.getAttribute("src");

  expect(iframe).toBeInTheDocument();
  expect(iframeUrl).toBe("https://maps.google.com/maps?q=40.4314193,4.1768656&t=&z=13&ie=UTF8&iwloc=&output=embed");
});

