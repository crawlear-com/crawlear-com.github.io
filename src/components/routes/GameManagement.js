import * as React from 'react';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';
import GameList from '../GameList.js';
import GameRequests from '../GameRequests.js';
import GamePlayer from '../GamePlayer.js';

import '../../resources/css/GameManagement.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import GameConfigurator from './GameConfigurator.js';

const STATE_MENU = 0;
const STATE_PLAYING = 1;
const STATE_CONFIGURE = 2;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();

    const [allGames, setAllGames] = React.useState([]);
    
    const [games, setGames] = React.useState([]);
    const [judgeGames, setJudgeGames] = React.useState([]);
    const [storedGames, setStoredGames] = React.useState([]);
    const [state, setState] = React.useState(STATE_MENU);
    const [game, setGame] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
        firebase.isUserLogged() && refreshGames();
    },[]);

    React.useEffect(()=>{
        processCurrentGames(allGames);
    },[allGames]);

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/gameconfigurator" } }} />
    }

    function processCurrentGames(games) {
        const jGames = [],
              uGames = [],
              sGames = [];

        games.forEach(game => {
            if (game.gameStatus < 2) {
                if (game.jids.indexOf(window.crawlear.user.uid)>=0 || game.owner.indexOf(window.crawlear.user.uid)>=0) {
                    jGames.push(game)
                } else if (game.uids.indexOf(window.crawlear.user.uid)>=0) {
                    uGames.push(game);
                }
            } else {
                sGames.push(game);
            }
        });

        setGames(uGames);
        setJudgeGames(jGames);
        setStoredGames(sGames);
    }

    function refreshGames() {
        firebase.getGamesFromUser(window.crawlear.user.uid, false, (pGames)=> {
            setAllGames(previousInputs => ([...previousInputs,...pGames]));
        });

        firebase.getGamesFromJudge(window.crawlear.user.uid, false, (jGames)=> {
            setAllGames(previousInputs => ([...previousInputs,...jGames]));
        });

        firebase.getGamesFromDirector(window.crawlear.user.uid, false, (dGames)=> {
            setAllGames(previousInputs => ([...previousInputs,...dGames]));
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

    function onConfigureGame(games, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_CONFIGURE);
        setGame(games[gamePosition]);
    }

    function goBackToMenuStatus() {
        window.scrollTo(0,0);
        setState(STATE_MENU);
        setGame({});

        setAllGames([]);
        setGames([]);
        setJudgeGames([]);
        setStoredGames([]);

        refreshGames();
    }

    function newGameNavigation() {
        navigate("/gameconfigurator");
    }

    return <>
            {state === STATE_MENU ? 
                <>
                    <div className='headerText bold sectionTitle'>{t('description.secciondejuego')}</div>

                    <GameRequests user={window.crawlear.user} />
                    <GameList title={t('description.partidascomopiloto')} 
                        games={games}
                        readOnly={true}
                        onRemoveGame={(gamePosition)=>{
                            onRemovePlayerGames(gamePosition)}
                        }
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGame(games, gamePosition)}
                        } />
                    <GameList title={t('description.partidasdejuez')} 
                        games={judgeGames}
                        readOnly={false}
                        onGamePlay={(event)=>{
                            onGamePlay(judgeGames, event.target.getAttribute("data-gameposition"));
                        }}
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGame(judgeGames, gamePosition)}
                        }
                        onRemoveGame={(gamePosition)=>{
                            onRemoveJudgeGame(gamePosition)}
                        } />
                    <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crear')}</button>                        
                    
                    <GameList title={t('description.partidasprevias')} 
                        games={storedGames}
                        readOnly={false}
                        onRemoveGame={(gamePosition)=>{
                            onRemovePlayerGames(gamePosition)}
                        }
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGame(games, gamePosition)}
                        } />
                </> : 
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