import * as React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GameController from './components/GameController';
import TxtRoute from './components/routes/TxtRoute';
import Footer from './components/Footer';
import Menu from './components/Menu';
import FirebaseController from './FirebaseController';
import GameManagement from './components/routes/GameManagement';
import AboutUs from './components/routes/AboutUs';
import PrivacyPolicy from './components/routes/PrivacyPolicy';
import Analytics from './Analytics';
import Landing from './components/routes/Landing';
import Utils from './Utils';

import './resources/css/Base.scss';
import './resources/css/App.scss';
import './resources/css/Footer.scss';

function App() {
  const fb = new FirebaseController();

  window.crawlear = window.crawlear || {};
  window.crawlear.fb = fb;
  const [stateLogged, setStateLogged] = React.useState(false);

  React.useEffect(() => {
    Analytics.init('UA-156750890-2');
  }, [])

  function onLoggin() {
    setStateLogged(true);
  }

  function onLogout() {
    setStateLogged(false);
  }

  return (<>
    <BrowserRouter>
      <div className="App">
        {stateLogged ? <Menu /> : <></>}
        <div className="AppMainContainer">
        <Routes>
          <Route path="/" element={<Landing onLoggin={onLoggin} />} />
          <Route path="/simplegame" element={<GameController />} />
          <Route path="/completegame" element={<GameManagement onLogout={onLogout} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitemap.xml" element={<TxtRoute filePath="/sitemap.xml"/>} />
        </Routes>
        </div>

        <div className="adsContainer"></div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
