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
import { UserStatusContext } from './context/UserStatusContext'
import './Error.js'

import './resources/css/Base.scss'
import './resources/css/App.scss'
import './resources/css/Footer.scss'


function App() {
  const fb = new FirebaseController()
  const [stateLogged, setStateLogged] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  window.crawlear = window.crawlear || {}
  window.crawlear.fb = window.crawlear.fb || fb

  React.useEffect(() => {
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  function onLogin(navigateAction) {
    setStateLogged(true)
    if (navigateAction) {
      navigate("/game");
    }
  }

  function onLogout() {
    setStateLogged(false)
  }

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
      <div className="App">
        {stateLogged ? <Menu /> : <></>}
        <div className="AppMainContainer">
        <Routes>
          <Route path="/" element={<Landing onLogin={()=>{onLogin(true)}} />} />
          <Route path="/game" element={<GameManagement onLogin={()=>{onLogin(false)}} onLogout={onLogout} />} />
          <Route path="/gameconfigurator" element={<GameConfigurator onLogin={()=>{onLogin(false)}} />} />
          <Route path="/gameviewer" element={<GameViewer onLogin={()=>{onLogin(false)}} gid={queryParams.get && queryParams.get('gid')} />} />
          <Route path="/route" element={<RoutesManagement onLogin={()=>{onLogin(false)}} />} />
          <Route path="/routeviewer" element={<RouteViewer onLogin={()=>{onLogin(false)}} rid={queryParams.get && queryParams.get('rid')} />} />
          <Route path="/profile" element={<UserViewer onLogin={()=>{onLogin(false)}} onLogout={onLogout} uid={queryParams.get && queryParams.get('uid')} />} />

          <Route path="/social" element={<PilotWall onLogin={()=>{onLogin(false)}} onLogout={onLogout} />} />
          <Route path="/follows" element={<FollowsWall onLogin={()=>{onLogin(false)}} />} />
          <Route path="/post" element={<PostViewer onLogin={()=>{onLogin(false)}} pid={queryParams.get && queryParams.get('pid')} />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitemap.xml" element={<TxtRoute filePath="/sitemap.xml"/>} />
        </Routes>
        </div>

        <div className="adsContainer"></div>
      </div>
  </UserStatusContext.Provider>)
}

export default App
