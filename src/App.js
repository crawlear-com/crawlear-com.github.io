import * as React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { lazy } from 'react'
import FirebaseBaseController from './FirebaseBaseController'
import Analytics from './Analytics'
import { UserStatusContext } from './context/UserStatusContext'
import SuspenseComponent from './SuspenseComponent'
import Landing from './pages/Landing'
import './Error.js'

import './resources/css/Base.scss'
import './resources/css/App.scss'
import './resources/css/Footer.scss'

const TxtRoute = lazy(() => import('./pages/TxtRoute'))
const Menu = lazy(() => import('./components/Menu'))
const GameManagement = lazy(() => import('./modules/gameManagement/pages/GameManagement'))
const PilotWall = lazy(() => import('./modules/social/pages/PilotWall'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const GameConfigurator = lazy(() => import('./modules/gameConfigurator/pages/GameConfigurator'))
const RoutesManagement = lazy(() => import('./modules/routesManagement/pages/RoutesManagement'))
const GameViewer = lazy(() => import('./pages/GameViewer'))
const RouteViewer = lazy(() => import('./pages/RouteViewer'))
const UserViewer = lazy(() => import('./modules/social/pages/UserViewer'))

const TRUE = 1
const FALSE = 0

function App() {
  const fbBase = new FirebaseBaseController()
  const [stateLogged, setStateLogged] = React.useState(FALSE)
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const route = location.pathname

  window.crawlear = window.crawlear || {}
  window.crawlear.fbBase = window.crawlear.fbBase || fbBase

  React.useEffect(() => {
    fbBase.checkIfLogged(() => {
      onLogin()
    }, () => {
      onLogout()
    })
    Analytics.init('G-J1NH6FT6E3')
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  function onLogout() {
    setStateLogged(FALSE)
  }

  function onLogin() {
    fbBase.getFullFirebase(() => {
      setStateLogged(TRUE)

      if (route.length === 1) {
        navigate('/game')
      }  
    })
  }

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
    <div className="App">
      { stateLogged === TRUE ? <SuspenseComponent lazyComponent={<Menu />} /> : <></> }
      <div className="AppMainContainer">
          <Routes>
            <Route path="/" element={<Landing onLogin={onLogin} />} />
            <Route path="/game" element={<SuspenseComponent lazyComponent={<GameManagement />} />} />
            <Route path="/gameconfigurator" element={<SuspenseComponent lazyComponent={<GameConfigurator />} />} />
            <Route path="/route" element={<SuspenseComponent lazyComponent={<RoutesManagement />} />} />
            <Route path="/gameviewer" element={<SuspenseComponent lazyComponent={<GameViewer gid={queryParams.get && queryParams.get('gid')} />} />} />
            <Route path="/social" element={<SuspenseComponent lazyComponent={<PilotWall onLogout={onLogout} />} />} />
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
