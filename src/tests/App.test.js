import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import useLoginProcess from '../hooks/useLoginProcess';
import Analytics from '../Analytics'
import Menu from '../components/Menu';
import Landing from '../pages/Landing';
import { UserStatusContext } from '../context/UserStatusContext';
import '../Error'
import TxtRoute from '../pages/TxtRoute';
import GameManagementWithAuthorization from '../modules/gameManagement/pages/GameManagementWithAuthorization';
import PilotWallWithAuthorization from '../modules/social/pages/PilotWallWithAuthorization';
import AboutUs from '../pages/AboutUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import GameConfiguratorWithAuthorization from '../modules/gameConfigurator/pages/GameConfiguratorWithAuthorization';
import RoutesManagementWithAuthorization from '../modules/routesManagement/pages/RoutesManagementWithAuthorization';
import GameViewer from '../pages/GameViewer';
import RouteViewer from '../pages/RouteViewer';
import UserViewer from '../modules/social/pages/UserViewer';
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
jest.mock('../pages/TxtRoute')
jest.mock('../modules/gameManagement/pages/GameManagementWithAuthorization')
jest.mock('../modules/social/pages/PilotWallWithAuthorization')
jest.mock('../pages/AboutUs')
jest.mock('../pages/PrivacyPolicy')
jest.mock('../modules/gameConfigurator/pages/GameConfiguratorWithAuthorization')
jest.mock('../modules/routesManagement/pages/RoutesManagementWithAuthorization')
jest.mock('../hooks/useLoginProcess')
jest.mock('../components/Menu')
jest.mock('../pages/GameViewer')
jest.mock('../context/UserStatusContext')
jest.mock('../pages/Landing')
jest.mock('../pages/RouteViewer')
jest.mock('../modules/social/pages/UserViewer')

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

test('app router Landing', async () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    await screen.findByText('Menu');

    expect(screen.getByText('Landing')).toBeInTheDocument()
});

test('app router GameManagement', async () => {
    render(<MemoryRouter initialEntries={['/game']}><App /></MemoryRouter>)
    await screen.findByText('GameManagementWithAuthorization');

    expect(screen.getByText('GameManagementWithAuthorization')).toBeInTheDocument()
});

test('app router gameconfigurator', async () => {
    render(<MemoryRouter initialEntries={['/gameconfigurator']}><App /></MemoryRouter>)
    await screen.findByText('GameConfiguratorWithAuthorization');

    expect(screen.getByText('GameConfiguratorWithAuthorization')).toBeInTheDocument()
});

test('app router RouteManagement', async () => {
    render(<MemoryRouter initialEntries={['/route']}><App /></MemoryRouter>)
    await screen.findByText('RoutesManagementWithAuthorization');

    expect(screen.getByText('RoutesManagementWithAuthorization')).toBeInTheDocument()
});

test('app router PilotWall', async () => {
    render(<MemoryRouter initialEntries={['/social']}><App /></MemoryRouter>)
    await screen.findByText('PilotWallWithAuthorization');

    expect(screen.getByText('PilotWallWithAuthorization')).toBeInTheDocument()
});

test('app router routeviewer', async () => {
    render(<MemoryRouter initialEntries={['/routeviewer']}><App /></MemoryRouter>)
    await screen.findByText('RouteViewer');

    expect(screen.getByText('RouteViewer')).toBeInTheDocument()
});

test('app router profile', async () => {
    render(<MemoryRouter initialEntries={['/profile']}><App /></MemoryRouter>)
    await screen.findByText('UserViewer');

    expect(screen.getByText('UserViewer')).toBeInTheDocument()
});

test('app router About us', async () => {
    render(<MemoryRouter initialEntries={['/aboutus']}><App /></MemoryRouter>)
    await screen.findByText('AboutUs');

    expect(screen.getByText('AboutUs')).toBeInTheDocument()
});

test('app router privacypolicy', async () => {
    render(<MemoryRouter initialEntries={['/privacypolicy']}><App /></MemoryRouter>)
    await screen.findByText('PrivacyPolicy');

    expect(screen.getByText('PrivacyPolicy')).toBeInTheDocument()
});