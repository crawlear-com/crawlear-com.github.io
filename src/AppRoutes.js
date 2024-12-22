import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { lazy } from 'react';
import SuspenseComponent from './SuspenseComponent';
import Landing from './pages/Landing';

//as unknown as Promise<{ default: React.ComponentType<any>; }>
const AboutUs = lazy(() => import('./pages/AboutUs'));

const GameManagement = lazy(() => import('./modules/gameManagement/pages/GameManagementWithAuthorization'));
const PilotWall = lazy(() => import('./modules/social/pages/PilotWallWithAuthorization'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const GameConfigurator = lazy(() => import('./modules/gameConfigurator/pages/GameConfiguratorWithAuthorization'));
const RoutesManagement = lazy(() => import('./modules/routesManagement/pages/RoutesManagementWithAuthorization'));
const GameViewer = lazy(() => import('./pages/GameViewer'));
const RouteViewer = lazy(() => import('./pages/RouteViewer'));
const UserViewer = lazy(() => import('./modules/social/pages/UserViewer.js'));

function AppRoutes({ onLogin, onLogout }) {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    return (
        <Routes>
        <Route path="/" element={<Landing onLogin={onLogin} />} />
        <Route path="/game" element={<SuspenseComponent lazyComponent={<GameManagement from="/game" to="/" />} />} />
        <Route path="/gameconfigurator" element={<SuspenseComponent lazyComponent={<GameConfigurator from="/gameconfigurator" to="/" />} />} />
        <Route path="/route" element={<SuspenseComponent lazyComponent={<RoutesManagement from="/route" to="/" />} />} />
        <Route path="/gameviewer" element={<SuspenseComponent lazyComponent={<GameViewer gid={queryParams.get && queryParams.get('gid')} />} />} />
        <Route path="/social" element={<SuspenseComponent lazyComponent={<PilotWall from="/social" to="/" onLogout={onLogout} />} />} />
        <Route path="/routeviewer" element={<SuspenseComponent lazyComponent={<RouteViewer rid={queryParams.get && queryParams.get('rid')} />} />} />
        <Route path="/profile" element={<SuspenseComponent lazyComponent={<UserViewer onLogout={onLogout} uid={queryParams.get && queryParams.get('uid')} />} />} />
        <Route path="/aboutus" element={<SuspenseComponent lazyComponent={<AboutUs />} />} />
        <Route path="/privacypolicy" element={<SuspenseComponent lazyComponent={<PrivacyPolicy />} />} />
        </Routes>
    );
}

export default AppRoutes;