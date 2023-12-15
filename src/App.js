import * as React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import TxtRoute from './pages/TxtRoute'
import Menu from './components/Menu'
import FirebaseController from './FirebaseController'
import GameManagement from './modules/gameManagement/pages/GameManagement'
import FollowsWall from './modules/social/pages/FollowsWall'
import PilotWall from './modules/social/pages/PilotWall'
import AboutUs from './pages/AboutUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Landing from './pages/Landing'
import Analytics from './Analytics'
import GameConfigurator from './modules/gameConfigurator/pages/GameConfigurator'
import RoutesManagement from './modules/routesManagement/pages/RoutesManagement'
import UserViewer from './modules/social/pages/UserViewer'
import PostViewer from './modules/social/pages/PostViewer'
import GameViewer from './pages/GameViewer'
import RouteViewer from './pages/RouteViewer'
import WhileLogging from './components/WhileLogging'
import { UserStatusContext } from './context/UserStatusContext'
import './Error.js'

import './resources/css/Base.scss'
import './resources/css/App.scss'
import './resources/css/Footer.scss'

const NOTKNOWN = -1
const TRUE = 1
const FALSE = 0


function App() {
  const fb = new FirebaseController()
  const [stateLogged, setStateLogged] = React.useState(NOTKNOWN)
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  window.crawlear = window.crawlear || {}
  window.crawlear.fb = window.crawlear.fb || fb

  React.useEffect(() => {
    fb.checkIfLogged(() => {
      onLogin(true)
    }, () => {
      setStateLogged(FALSE)
      navigate("/gameviewer?gid=2313122");
    });
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  function onLogin(navigateAction) {
    setStateLogged(TRUE)
    if (navigateAction) {
      navigate("/game")
    }
  }

  function onLogout() {
    setStateLogged(FALSE)
  }

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
      <div className="App">
        { stateLogged === TRUE ? <Menu /> : <></> }
        <div className="AppMainContainer">
        { stateLogged === NOTKNOWN ? <WhileLogging></WhileLogging> : 
          <Routes>
            <Route path="/" element={<Landing />} />

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
          </Routes>}
        </div>

        <div className="adsContainer"></div>
      </div>
  </UserStatusContext.Provider>)
}

export default App
