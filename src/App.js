import * as React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import FirebaseController from './FirebaseController'
import Analytics from './Analytics'
import WhileLogging from './components/WhileLogging'
import { UserStatusContext } from './context/UserStatusContext'
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
const Landing = lazy(() => import('./pages/Landing'))
const GameConfigurator = lazy(() => import('./modules/gameConfigurator/pages/GameConfigurator'))
const RoutesManagement = lazy(() => import('./modules/routesManagement/pages/RoutesManagement'))
const GameViewer = lazy(() => import('./pages/GameViewer'))
const RouteViewer = lazy(() => import('./pages/RouteViewer'))
const UserViewer = lazy(() => import('./modules/social/pages/UserViewer'))

const NOTKNOWN = -1
const TRUE = 1
const FALSE = 0

function App() {
  const fb = new FirebaseController()
  const [stateLogged, setStateLogged] = React.useState(NOTKNOWN)
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const route = location.pathname

  window.crawlear = window.crawlear || {}
  window.crawlear.fb = window.crawlear.fb || fb

  React.useEffect(() => {
    fb.checkIfLogged(() => {
      if (route.length === 1) {
        navigate('/game')
      }
      setStateLogged(TRUE)
    }, () => {
      onLogout()
    })
    Analytics.init('G-J1NH6FT6E3')
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  function onLogout() {
    setStateLogged(FALSE)
  }

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
    <div className="App">
      { stateLogged === TRUE ? <Menu /> : <></> }
      <div className="AppMainContainer">
      { stateLogged === NOTKNOWN ? <WhileLogging></WhileLogging> : 
          stateLogged === FALSE ? <Landing /> : 
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/game" element={<GameManagement onLogout={onLogout} />} />
              <Route path="/gameconfigurator" element={<GameConfigurator />} />
              <Route path="/route" element={<RoutesManagement />} />
              
              <Route path="/gameviewer" element={<GameViewer gid={queryParams.get && queryParams.get('gid')} />} />
              <Route path="/social" element={<PilotWall onLogout={onLogout} />} />
              <Route path="/routeviewer" element={<RouteViewer rid={queryParams.get && queryParams.get('rid')} />} />
              <Route path="/profile" element={<UserViewer onLogout={onLogout} uid={queryParams.get && queryParams.get('uid')} />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/sitemap.xml" element={<TxtRoute filePath="/sitemap.xml"/>} />
            </Routes>
          </Suspense> }
      </div>

      <div className="adsContainer"></div>
    </div>
</UserStatusContext.Provider>)
}

export default App
