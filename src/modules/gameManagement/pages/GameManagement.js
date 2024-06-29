"use client"

import * as React from 'react';
import Analytics from '../../../Analytics';
import GamePlayer from '../../gamePlayer/GamePlayer';
import GameConfigurator from '../../gameConfigurator/pages/GameConfigurator';
import dynamic from 'next/dynamic';

import '../styles/GameManagement.scss';

const STATE_MENU = 0;
const STATE_PLAYING = 1;
const STATE_CONFIGURE = 2;

const DynamicGameManagementMenu = dynamic(() => import('../components/GameManagementMenu'), {
    loading: () => <p>Loading GameManagement...</p>,
    ssr: false
  })

function GameManagement() {
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});

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
                <DynamicGameManagementMenu onConfigureGames={onConfigureGames} onGamePlay={onGamePlay} /> : 
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