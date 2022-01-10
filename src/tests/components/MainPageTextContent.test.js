import { render, screen } from '@testing-library/react';
import MainPageTextContent from '../../components/MainPageTextContent.js';

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

test('renders MainPageTextContent', () => {
    const { container } = render(<MainPageTextContent />, div),
        content = container.querySelector('.aboutUsContent'),
        ytVideo = content.querySelector(`iframe[src="https://www.youtube.com/embed/vXCjXkd5P4w"]`);
  
    expect(screen.getByText('img @takezorc').closest('a').getAttribute('href')).toBe('https://www.instagram.com/p/CT7FX_CMag7/');
    expect(content.querySelector('.video-responsive')).not.toBeNull();
    expect(content.querySelector('.video-responsive')).not.toBeUndefined();
    expect(ytVideo).not.toBeNull();
    expect(ytVideo).not.toBeUndefined();
});
