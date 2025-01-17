import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { lazy } from 'react'
import Analytics from './Analytics'
import { UserStatusContext } from './context/UserStatusContext'
import SuspenseComponent from './SuspenseComponent'
import useLoginProcess from './hooks/useLoginProcess'
import AppRoutes from './AppRoutes'
import './Error.js'

import './resources/css/Base.scss'
import './resources/css/App.scss'
import './resources/css/Footer.scss'

const Menu = lazy(() => import('./components/Menu/Menu'));

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const onLoginCallback = () => {
    if (location.pathname.length === 1) {
      navigate('/game')
    }
  }
  const [stateLogged, onLogin, onLogout] = useLoginProcess(onLoginCallback)

  React.useEffect(() => {
    Analytics.init('G-J1NH6FT6E3')
    Analytics.event('App','init',`${navigator.userAgent}`)
  }, [])

  return (
    <UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
    <Helmet>
      <meta property="og:title" content="Crawlear.com Your profesional Crawler Scoreboard and Route manager" />
      <meta property="og:description" content="Crawlear.com Your profesional Crawler Scoreboard and Route manager" />
      <meta property="description" content="Crawlear.com Your profesional Crawler Scoreboard and Route manager" />
      <meta property="og:image" content="https://crawlear.com/static/logo512.png" />
    </Helmet>
    <div className="App">
      { stateLogged ? <SuspenseComponent lazyComponent={<Menu />} /> : <></> }
      <div className="AppMainContainer">
         <AppRoutes onLogin={onLogin} onLogout={onLogout} />
      </div>
    </div>
    </UserStatusContext.Provider>)
}

export default App
