
import './resources/css/Base.css';
import './resources/css/App.css';
import './resources/css/Components.css';
import './resources/css/Footer.css';

import logo from './resources/img/logo.png';
import GameController from './components/GameController';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Menu from './components/Menu';
import React from 'react';
import ReactGA from 'react-ga';

const STATE_GAME = 0;
const STATE_ABOUTUS = 1;

function App() {
  const [state, setState] = React.useState(STATE_GAME);
  let stateComponent;

  React.useEffect(() => {
    ReactGA.initialize('UA-156750890-2');
    ReactGA.pageview('/');
  }, [])

  function onLinkClicked(link) {

  }

  if(state === STATE_GAME) {
    stateComponent = <GameController />;
  } else if(state === STATE_ABOUTUS) {
    stateComponent = <AboutUs />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu onLinkClicked={onLinkClicked}></Menu>
        <img src={logo} alt="logo" />
      </header>

      <div className="AppMainContainer">
        {stateComponent}
      </div>

      <div className="adsContainer"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
