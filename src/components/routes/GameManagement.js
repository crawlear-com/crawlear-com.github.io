import * as React from 'react';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';
import GameList from '../GameList.js';
import UserProfile from '../UserProfile.js';
import GameRequests from '../GameRequests.js';
import GamePlayer from '../GamePlayer.js';

import '../../resources/css/GameManagement.scss';
import { Navigate, useNavigate } from 'react-router-dom';

const STATE_MENU = 0;
const STATE_PLAYING = 1;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const [games, setGames] = React.useState([]);
    const [judgeGames, setJudgeGames] = React.useState([]);
    const [currentGames, setCurrentGames] = React.useState([]);
    const [currentGameProgressions, setCurrentGameProgressions] = React.useState([]);
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
        firebase.isUserLogged() && refreshGames();    
    },[]);

    React.useEffect(()=>{
        getGameProgressionsForCurrentGames(currentGames);
    },[currentGames]);

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/gameconfigurator" } }} />
    }

    function getGameProgressionsForCurrentGames(games) {
        Object.entries(games).forEach(entry => {
            const [key, game] = entry;
        
            firebase.getGameProgression(game.gid, ()=>{}, ()=>{}, (uid, progression)=>{
                const res = {};
    
                res[game.gid] = {};
                res[game.gid][uid] = progression;
                setCurrentGameProgressions((previousInputs) => {
                    previousInputs[game.gid] = previousInputs[game.gid] ? 
                        { ...previousInputs[game.gid],...res[game.gid] }
                        : res[game.gid];
                    return { ...previousInputs};
                });
            }, (uid, progression)=>{
                const res = {};
    
                res[game.gid] = {};
                res[game.gid][uid] = progression;
                setCurrentGameProgressions((previousInputs) => {
                    previousInputs[game.gid] = previousInputs[game.gid] ? 
                        { ...previousInputs[game.gid],...res[game.gid] }
                        : res[game.gid];
                    return { ...previousInputs};
                });
            });    
        });
    }

    function refreshGames() {
        firebase.getGamesFromUser(window.crawlear.user.uid, (pGames, cGames)=> {
            setGames(previousInputs => ([...previousInputs,...pGames]));
            setCurrentGames(previousInputs => ([...previousInputs,...cGames]));
        });

        firebase.getGamesFromJudge(window.crawlear.user.uid, (jGames, cGames)=> {
            setJudgeGames(previousInputs => ([...previousInputs,...jGames]));
            setCurrentGames(previousInputs => ([...previousInputs,...cGames]));
        });
    }

    function onRemoveGame(gamePosition) {
        const game = games[gamePosition];
        const newGames = [...games];

        newGames.splice(gamePosition,1);
        window.crawlear.fb.removeUidFromGame(game, window.crawlear.user.uid);
        setGames(newGames);
    }

    function onGamePlay(event) {
        const gamePosition = event.target.getAttribute("data-gameposition");

        window.scrollTo(0,0);
        setState(STATE_PLAYING);
        setGame(currentGames[gamePosition]);
    }

    function goBackToMenuStatus() {
        setState(STATE_MENU);
        setGame({});
    }

    function newGameNavigation() {
        navigate("/gameconfigurator");
    }

    return <>
            {state === STATE_MENU ? 
                <>
                    <UserProfile user={window.crawlear.user} onLogout={onLogout} />
                    <GameRequests user={window.crawlear.user} />
                    <GameList title={t('description.partidasenjuego')} 
                        games={currentGames}
                        gameProgressions={currentGameProgressions}
                        onGamePlay={onGamePlay}
                        readOnly={false}
                        onRemoveGame={onRemoveGame} />

                    <GameList title={t('description.partidasprevias')} 
                        games={games}
                        readOnly={true}
                        onRemoveGame={onRemoveGame}/>
                    <GameList title={t('description.partidasdejuez')} 
                        games={judgeGames} 
                        readOnly={false}
                        onGamePlay={onGamePlay}
                        onRemoveGame={onRemoveGame} />

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