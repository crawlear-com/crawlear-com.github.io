import * as React from 'react';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';
import GameList from '../GameList.js';
import UserProfile from '../UserProfile.js';
import GameRequests from '../GameRequests.js';
import GamePlayer from '../GamePlayer.js';

import '../../resources/css/GameManagement.scss';
import { Game } from '../../model/Game.js';
import { Navigate, useNavigate } from 'react-router-dom';

const STATE_MENU = 0;
const STATE_PLAYING = 1;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const [games, setGames] = React.useState([]);
    const [judgeGames, setJudgeGames] = React.useState([]);
    const [currentGames, setCurrentGames] = React.useState([]);
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
        firebase.isUserLogged() && refreshGames();    
    },[]);

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/gameconfigurator" } }} />
    }

    function refreshGames() {
        firebase.getGamesFromUser(window.crawlear.user.uid, (playerGames, currentGames)=> {
            setGames(playerGames);
            setCurrentGames(currentGames);
        });

        firebase.getGamesFromJudge(window.crawlear.user.uid, (judgeGames, currentGames)=> {
            setJudgeGames(judgeGames);
            setCurrentGames(currentGames);
        });
    }

    function onRemoveGame(gamePosition) {
        const game = games[gamePosition];
        const newGames = [...games];

        newGames.splice(gamePosition,1);
        window.crawlear.fb.removeUidFromGame(game, window.crawlear.user.uid);
        setGames(newGames);
    }

    function onRemoveJudgeGame(gamePosition) {
        const game = judgeGames[gamePosition];
        const newGames = [...judgeGames];

        newGames.splice(gamePosition,1);
        window.crawlear.fb.removeUidFromJudgeGame(game, window.crawlear.user.uid);
        setJudgeGames(newGames);
    }

    function onRemoveCurrentGame(gamePosition) {
        const game = currentGames[gamePosition];
        const newGames = [...currentGames];

        newGames.splice(gamePosition,1);
        window.crawlear.fb.removeUidFromJudgeGame(game, window.crawlear.user.uid);
        setCurrentGames(newGames);
    }

    function onGamePlay(event) {
        const gamePosition = event.target.getAttribute("data-gameposition");

        window.scrollTo(0,0);
        setState(STATE_PLAYING);
        setGame(currentGames[gamePosition]);
    }

    function goBackToMenuStatus() {
        setState(STATE_MENU);
        refreshGames();
        setGame(new Game("",
        new Date().toLocaleDateString(),
        { latitude: 0, longitude: 0 },
        false, 2,
        [], [], 600000, 40, 10, 4, 0, [], []));
    }

    function newGameNavigation() {
        navigate("/gameconfigurator");
    }

    return <>
            {state === STATE_MENU ? 
                <>
                    <UserProfile user={window.crawlear.user} onLogout={onLogout} />
                    <GameRequests user={window.crawlear.user} />
                    <GameList title={t('description.partidasprevias')} 
                        games={games} 
                        onRemoveGame={onRemoveGame}/>
                    <GameList title={t('description.partidasdejuez')} 
                        games={judgeGames} 
                        onGamePlay={onGamePlay}
                        onRemoveGame={onRemoveJudgeGame} />
                    <GameList title={t('description.partidasenjuego')} 
                        games={currentGames} 
                        onGamePlay={onGamePlay}
                        onRemoveGame={onRemoveCurrentGame} />

                    <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crear')}</button>
                </> : 

                state === STATE_PLAYING ? 
                    <>
                        <GamePlayer game={game} />
                        <button className="backButton" onClick={goBackToMenuStatus}>{t('description.atras')}</button>
                    </> : 

            <></>}
        </>;
}

export default GameManagement;