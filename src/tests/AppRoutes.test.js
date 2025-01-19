import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';

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
jest.mock('../modules/gameManagement/pages/GameManagementWithAuthorization')
jest.mock('../modules/social/pages/PilotWallWithAuthorization')
jest.mock('../pages/AboutUs')
jest.mock('../pages/PrivacyPolicy')
jest.mock('../modules/gameConfigurator/pages/GameConfiguratorWithAuthorization')
jest.mock('../modules/routesManagement/pages/RoutesManagementWithAuthorization')
jest.mock('../hooks/useLoginProcess')
jest.mock('../pages/GameViewer')
jest.mock('../context/UserStatusContext')
jest.mock('../pages/Landing')
jest.mock('../pages/RouteViewer')
jest.mock('../modules/social/pages/UserViewer')

test('app router Landing', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)

    expect(screen.getByText('Landing')).toBeInTheDocument()
});

test('app router GameManagement', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/game']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('GameManagementWithAuthorization');

    expect(screen.getByText('GameManagementWithAuthorization')).toBeInTheDocument()
});

test('app router gameconfigurator', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/gameconfigurator']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('GameConfiguratorWithAuthorization');

    expect(screen.getByText('GameConfiguratorWithAuthorization')).toBeInTheDocument()
});

test('app router RouteManagement', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/route']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('RoutesManagementWithAuthorization');

    expect(screen.getByText('RoutesManagementWithAuthorization')).toBeInTheDocument()
});

test('app router PilotWall', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/social']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('PilotWallWithAuthorization');

    expect(screen.getByText('PilotWallWithAuthorization')).toBeInTheDocument()
});

test('app router routeviewer', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

     render(<MemoryRouter initialEntries={['/routeviewer']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('RouteViewer');

    expect(screen.getByText('RouteViewer')).toBeInTheDocument()
});

test('app router profile', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    render(<MemoryRouter initialEntries={['/profile']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('UserViewer');

    expect(screen.getByText('UserViewer')).toBeInTheDocument()
});

test('app router About us', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    await render(<MemoryRouter initialEntries={['/aboutus']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('AboutUs').then(() => {
        expect(screen.getByText('AboutUs')).toBeInTheDocument()
    })
});

test('app router privacypolicy', async () => {
    const onLogin = jest.fn()
    const onLogout = jest.fn()

    await render(<MemoryRouter initialEntries={['/privacypolicy']}><AppRoutes onLogin={onLogin} onLogout={onLogout} /></MemoryRouter>)
    await screen.findByText('PrivacyPolicy').then(() => {
        expect(screen.getByText('PrivacyPolicy')).toBeInTheDocument()
    })
});