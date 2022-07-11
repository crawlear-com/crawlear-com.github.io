import * as React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import GameController from './components/GameController';
import TxtRoute from './components/routes/TxtRoute';
import Menu from './components/Menu';
import FirebaseController from './FirebaseController';
import GameManagement from './components/routes/GameManagement';
import MainContainer from './components/routes/MainContainer';
import AboutUs from './components/routes/AboutUs';
import PrivacyPolicy from './components/routes/PrivacyPolicy';
import Landing from './components/routes/Landing';
import Analytics from './Analytics';
import { Game } from './model/Game';
import GameConfigurator from './components/GameConfigurator';
import UserViewer from './components/routes/UserViewer';
import PostViewer from './components/routes/PostViewer';
import { UserStatusContext } from './components/context/UserStatusContext';

import './Error.js';

import './resources/css/Base.scss';
import './resources/css/App.scss';
import './resources/css/Footer.scss';

function App() {
  const fb = new FirebaseController();
  const [stateLogged, setStateLogged] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  window.crawlear = window.crawlear || {};
  window.crawlear.fb = window.crawlear.fb || fb;

  React.useEffect(() => {
    Analytics.event('App','init',`${navigator.userAgent}`);
  }, [])

  function onLogin(navigateAction) {
    setStateLogged(true);
    if (navigateAction) {
      navigate("/completegame");
    }
  }

  function onLogout() {
    setStateLogged(false);
  }

  function getNewGame() {
    return new Game("",
      new Date().toLocaleDateString(),
      { latitude: 0, longitude: 0 },
      false, 2,
      [], [], 600000, 40, new Array(4).fill(10), 4, 0, [], [], []);
  }

  return (<UserStatusContext.Provider value={{ isUserLoged: stateLogged }}>
      <div className="App">
        {stateLogged ? <Menu /> : <></>}
        <div className="AppMainContainer">
        <Routes>
          <Route path="/" element={<Landing onLogin={()=>{onLogin(true)}} />} />
          <Route path="/simplegame" element={<GameController game={getNewGame} />} />
          <Route path="/completegame" element={<GameManagement onLogin={()=>{onLogin(false)}} onLogout={onLogout} />} />
          <Route path="/social" element={<MainContainer onLogin={()=>{onLogin(false)}} onLogout={onLogout} />} />
          <Route path="/gameconfigurator" element={<GameConfigurator />} />
          <Route path="/profile" element={<UserViewer onLogin={()=>{onLogin(false)}} onLogout={onLogout} uid={queryParams.get && queryParams.get('uid')} />} />
          <Route path="/post" element={<PostViewer onLogin={()=>{onLogin(false)}} pid={queryParams.get && queryParams.get('pid')} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitemap.xml" element={<TxtRoute filePath="/sitemap.xml"/>} />
        </Routes>
        </div>

        <div className="adsContainer"></div>
      </div>
  </UserStatusContext.Provider>);
}

export default App;
