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

    const [currentGameProgressions, setCurrentGameProgressions] = React.useState();
    const gameProgressionsRef = React.useRef({});

    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
        firebase.isUserLogged() && refreshGames();
    },[]);

    React.useEffect(()=>{
        getGameProgressionsForCurrentGames(games);
    },[games]);

    React.useEffect(()=>{
        getGameProgressionsForCurrentGames(judgeGames);
    },[judgeGames]);

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/gameconfigurator" } }} />
    }

    function getGameProgressionsForCurrentGames(games) {
        games.forEach(game => {
            if (game.gameStatus < 2) {
                firebase.getGameProgressionOnce(game.gid, (uid, progression)=>{
                    const res = {};
        
                    res[game.gid] = {};
                    res[game.gid] = progression;
                    gameProgressionsRef.current[game.gid] = {...gameProgressionsRef.current[game.gid], ...res[game.gid]};
                    setCurrentGameProgressions({...gameProgressionsRef.current});
                }, ()=>{ });
            }
        });
    }

    function refreshGames() {
        firebase.getGamesFromUser(window.crawlear.user.uid, false, (pGames)=> {
            setGames(previousInputs => ([...previousInputs,...pGames]));
        });

        firebase.getGamesFromJudge(window.crawlear.user.uid, false, (jGames)=> {
            setJudgeGames(previousInputs => ([...previousInputs,...jGames]));
        });

        firebase.getGamesFromDirector(window.crawlear.user.uid, false, (dGames)=> {
            setJudgeGames(previousInputs => ([...previousInputs,...dGames]));
        });
    }

    function onRemovePlayerGames(gamePosition) {
        let game = games[gamePosition];
        const newGames = [...games];

        newGames.splice(gamePosition, 1);
        firebase.removeIdFromGame(game, window.crawlear.user.uid, "uids").then((game)=>{
            if (game.uids.length === 0 && game.jids.length === 0) {
                firebase.removeGame(game.gid);
            }
    
            setGames(newGames);
        });
    }

    function onRemoveJudgeGame(gamePosition) {
        let game = judgeGames[gamePosition];
        const newGames = [...judgeGames];

        newGames.splice(gamePosition, 1);// ELIMINAR OWNER TB!!!
        if (game.uids.indexOf(window.crawlear.user.uid)>=0) {
            firebase.removeIdFromGame(game, window.crawlear.user.uid, "uids").then((game)=>{
                firebase.removeIdFromGame(game, window.crawlear.user.uid, "jids").then((game)=>{
                    if (game.uids.length === 0 && game.jids.length === 0) {
                        firebase.removeGame(game.gid);
                    }
            
                    setJudgeGames(newGames);
                });
            });
        } else {
            firebase.removeIdFromGame(game, window.crawlear.user.uid, "jids").then((game)=>{
                if (game.uids.length === 0 && game.jids.length === 0) {
                    firebase.removeGame(game.gid);
                }
        
                setJudgeGames(newGames);
            });
            firebase.removeIdFromGame(game, window.crawlear.user.uid, "owner").then((game)=>{
                if (game.uids.length === 0 && game.jids.length === 0 && game.owner.length === 0) {
                    firebase.removeGame(game.gid);
                }
        
                setJudgeGames(newGames);
            });
        }
    }

    function onGamePlay(games, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_PLAYING);
        setGame(games[gamePosition]);
    }

    function goBackToMenuStatus() {
        setState(STATE_MENU);
        setGame({});
        setJudgeGames([]);
        setGames([]);
        refreshGames();
    }

    function newGameNavigation() {
        navigate("/gameconfigurator");
    }

    return <>
            {state === STATE_MENU ? 
                <>
                    <div className='headerText bold sectionTitle'>{t('description.secciondejuego')}</div>
                    <p className='profileHelper rounded bold'>{t('description.ayuda')}: {t('content.ayudasocialprofile')}</p>

                    <GameRequests user={window.crawlear.user} />
                    <GameList title={t('description.partidasprevias')} 
                        games={games}
                        readOnly={true}
                        gameProgressions={currentGameProgressions}
                        onRemoveGame={(gamePosition)=>{
                            onRemovePlayerGames(gamePosition)}
                        } />
                    <GameList title={t('description.partidasdejuez')} 
                        games={judgeGames}
                        readOnly={false}
                        onGamePlay={(event)=>{
                            onGamePlay(judgeGames, event.target.getAttribute("data-gameposition"));
                        }}
                        gameProgressions={currentGameProgressions}
                        onRemoveGame={(gamePosition)=>{
                            onRemoveJudgeGame(gamePosition)}
                        } />
                    <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crear')}</button>
                </> : 
                state === STATE_PLAYING ? 
                    <GamePlayer inGame={game}
                        onBackButtonClick={goBackToMenuStatus} />
                : <></>}
        </>;
}

export default GameManagement;