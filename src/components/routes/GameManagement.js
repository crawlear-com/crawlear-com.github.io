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

    function onConfigureGames(gameArray, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_CONFIGURE);
        setGame(gameArray[gamePosition]);
    }

    async function onRemoveGames(gameArray, gamePosition, setMethod) {
        let game = gameArray[gamePosition];
        const newGames = [...gameArray],
            uid = window.crawlear.user.uid;

        if (game.uids.indexOf(uid)>=0) {
            game = await firebase.removeIdFromGame(game, uid, "uids");
        }
        if (game.jids.indexOf(uid)>=0) {
            game = await firebase.removeIdFromGame(game, uid, "jids");
        }
        if (game.owner.indexOf(uid)>=0) {
            game = await firebase.removeIdFromGame(game, uid, "owner");
        }
        if (game.uids.length === 0 && game.jids.length === 0) {
            await firebase.removeGame(game.gid);
        }

        newGames.splice(gamePosition, 1);
        setMethod(newGames);
    }

    function onGamePlay(games, gamePosition) {
        window.scrollTo(0,0);
        setState(STATE_PLAYING);
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
                            onRemoveGames(games, gamePosition, setGames)}
                        }
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGames(games, gamePosition)}
                        } />
                    <GameList title={t('description.partidasdejuez')} 
                        games={judgeGames}
                        readOnly={false}
                        onGamePlay={(event)=>{
                            onGamePlay(judgeGames, event.target.getAttribute("data-gameposition"));
                        }}
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGames(judgeGames, gamePosition)}
                        }
                        onRemoveGame={(gamePosition)=>{
                            onRemoveGames(judgeGames, gamePosition, setJudgeGames)
                        }} />
                    <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crear')}</button>                        
                    
                    <GameList title={t('description.partidasprevias')} 
                        games={storedGames}
                        readOnly={false}
                        onRemoveGame={(gamePosition)=>{
                            onRemoveGames(storedGames, gamePosition, setStoredGames)}
                        }
                        onConfigureGame={(gamePosition)=>{
                            onConfigureGames(storedGames, gamePosition)}
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