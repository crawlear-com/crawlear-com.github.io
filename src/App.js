
import './resources/css/Base.css';
import './resources/css/App.css';
import './resources/css/Components.css';
import './resources/css/Footer.css';

import logo from './resources/img/logo2.png';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameController from './components/GameController';
import Footer from './components/Footer';
import Menu from './components/Menu';

import AboutUs from './components/routes/AboutUs';
import PrivacyPolicy from './components/routes/PrivacyPolicy';

import Analytics from './Analytics';

function App() {
  React.useEffect(() => {
    Analytics.init('UA-156750890-2');
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
          <img src={logo} alt="logo" />
        </header>

        <div className="AppMainContainer">
        <Routes>
          <Route path="/" element={<GameController />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        </div>

        <div className="adsContainer"></div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
