import * as React from 'react';
import Analytics from '../../Analytics.js';
import GamePlayer from '../GamePlayer.js';
import GameManagementMenu from '../GameManagementMenu.js';
import { Navigate } from 'react-router-dom';
import GameConfigurator from './GameConfigurator.js';

import '../../resources/css/GameManagement.scss';

const STATE_MENU = 0;
const STATE_PLAYING = 1;
const STATE_CONFIGURE = 2;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
    },[]);

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/gameconfigurator" } }} />
    }

    function goBackToMenuStatus() {
        window.scrollTo(0,0);
        setState(STATE_MENU);
        setGame({});
    }

    function onConfigureGames(gameArray, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_CONFIGURE);
        setGame(gameArray[gamePosition]);
    }

    function onGamePlay(games, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_PLAYING);
        setGame(games[gamePosition]);
    }

    return <>
            {state === STATE_MENU ? 
                <GameManagementMenu onConfigureGames={onConfigureGames} onGamePlay={onGamePlay} /> : 
                state === STATE_PLAYING ? 
                    <GamePlayer inGame={game}
                        onBackButtonClick={goBackToMenuStatus} />
                : 
                state === STATE_CONFIGURE ? 
                    <GameConfigurator preconfiguredGame={game} />
                :<></>}
        </>;
}

export default GameManagement;