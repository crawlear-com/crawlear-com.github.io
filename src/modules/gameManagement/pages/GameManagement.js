import * as React from 'react';
import Analytics from '../../../Analytics';
import GamePlayer from '../../gamePlayer/GamePlayer';
import GameManagementMenu from '../components/GameManagementMenu';
import WithAuthorization from '../../../components/WithAuthorization';
import GameConfigurator from '../../gameConfigurator/pages/GameConfigurator';

import '../styles/GameManagement.scss';

const STATE_MENU = 0;
const STATE_PLAYING = 1;
const STATE_CONFIGURE = 2;

function GameManagement() {
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});
    const GameConfiguratorWithAuthorization = WithAuthorization(GameConfigurator, '/gameconfigurator', '/')

    React.useEffect(() => {
        Analytics.pageview('/completegame/')
        window.document.body.classList.add('game');

        return () => {
            window.document.body.classList.remove('game');
        }
    },[]);

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
                    <GameConfiguratorWithAuthorization preconfiguredGame={game} />
                :<></>}
        </>;
}

export default GameManagement;