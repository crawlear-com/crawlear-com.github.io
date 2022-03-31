import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GameController from './components/GameController';
import TxtRoute from './components/routes/TxtRoute';
import Footer from './components/Footer';
import Menu from './components/Menu';
import FirebaseController from './FirebaseController';
import GameManagement from './components/routes/GameManagement';
import AboutUs from './components/routes/AboutUs';
import PrivacyPolicy from './components/routes/PrivacyPolicy';
import Landing from './components/routes/Landing';
import Analytics from './Analytics';
import { Game } from './model/Game';
import GameConfigurator from './components/GameConfigurator';

import './resources/css/Base.scss';
import './resources/css/App.scss';
import './resources/css/Footer.scss';

function App() {
  const fb = new FirebaseController();

  window.crawlear = window.crawlear || {};
  window.crawlear.fb = fb;
  const [stateLogged, setStateLogged] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    Analytics.event('App','init',`${navigator.userAgent}`);
  }, [])

  function onLoggin() {
    setStateLogged(true);
    navigate("/completegame");
  }

  function onLogout() {
    setStateLogged(false);
  }

  function getNewGame() {
    return new Game("",
      new Date().toLocaleDateString(),
      { latitude: 0, longitude: 0 },
      false, 2,
      [], [], 600000, 40, 10, 4, 0, [], []);
  }

  return (<>
      <div className="App">
        {stateLogged ? <Menu /> : <></>}
        <div className="AppMainContainer">
        <Routes>
          <Route path="/" element={<Landing onLoggin={onLoggin} />} />
          <Route path="/simplegame" element={<GameController game={getNewGame} />} />
          <Route path="/completegame" element={<GameManagement onLogout={onLogout} />} />
          <Route path="/gameconfigurator" element={<GameConfigurator />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitemap.xml" element={<TxtRoute filePath="/sitemap.xml"/>} />
        </Routes>
        </div>

        <div className="adsContainer"></div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
