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
        content = container.querySelector('.aboutUsContent');

        expect(content).not.toBeNull();
        expect(content).not.toBeUndefined();
    
});
