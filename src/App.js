import * as React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy } from 'react'
import Analytics from './Analytics'
import { UserStatusContext } from './context/UserStatusContext'
import SuspenseComponent from './SuspenseComponent'
import Landing from './pages/Landing'
import useLoginProcess from './useLoginProcess'
import './Error.js'

import './resources/css/Base.scss'
import './resources/css/App.scss'
import './resources/css/Footer.scss'

const TxtRoute = lazy(() => import('./pages/TxtRoute'))
const Menu = lazy(() => import('./components/Menu'))
const GameManagement = lazy(() => import('./modules/gameManagement/pages/GameManagementWithAuthorization'))
const PilotWall = lazy(() => import('./modules/social/pages/PilotWallWithAuthorization'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const GameConfigurator = lazy(() => import('./modules/gameConfigurator/pages/GameConfiguratorWithAuthorization'))
const RoutesManagement = lazy(() => import('./modules/routesManagement/pages/RoutesManagementWithAuthorization'))
const GameViewer = lazy(() => import('./pages/GameViewer'))
const RouteViewer = lazy(() => import('./pages/RouteViewer'))
const UserViewer = lazy(() => import('./modules/social/pages/UserViewer'))


function App() {
  const [stateLogged, onLogin, onLogout] = useLoginProcess()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  React.useEffect(() => {
    Analytics.init('G-J1NH6FT6E3')
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
    <div className="App">
      { stateLogged ? <SuspenseComponent lazyComponent={<Menu />} /> : <></> }
      <div className="AppMainContainer">
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
            <Route path="/sitemap.xml" element={<SuspenseComponent lazyComponent={<TxtRoute filePath="/sitemap.xml"/>} />} />
          </Routes>
      </div>
    </div>
</UserStatusContext.Provider>)
}

export default App
