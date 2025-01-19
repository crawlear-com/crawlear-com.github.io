import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../Error'
import App from '../App';

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

const mockInit = jest.fn()
const mockEvent = jest.fn()
jest.mock('../Analytics', () => ({
    init: (param) => mockInit(param),
    event: (category, action, label) => mockEvent(category, action, label)
  }));

const mockUseNavigate = jest.fn()
const mockUseLocation = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => {
        mockUseLocation()
        return {
            pathname: "crawlear.com/"
        }
    },
    useNavigate: () => mockUseNavigate,
  }));

jest.mock('../Error')
jest.mock('../hooks/useLoginProcess')
jest.mock('../modules/Menu/Menu')
jest.mock('../context/UserStatusContext')
jest.mock('../AppRoutes')

jest.mock('react-helmet-async', () => ({
    Helmet: jest.fn(),
    HelmetProvider: jest.fn(),
  }));

test('renders App and inits', async () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    const menu = await screen.findByText('Menu');

    expect(menu).toBeInTheDocument()
    expect(mockUseLocation).toHaveBeenCalled()
    expect(mockInit).toHaveBeenCalledWith('G-J1NH6FT6E3')
    expect(mockEvent).toHaveBeenCalledWith('App','init',`${navigator.userAgent}`)
});