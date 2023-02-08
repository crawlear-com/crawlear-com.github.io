import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from './games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from './games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from './games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras } from './games/RegionalZonaRcGameScores';
import { getGameContent as getMiniCrawlerPassionGameContent, gameExtras as miniCrawlerPassionExtras } from './games/MiniCrawlerPassionGameScores';
import { getGameContent as getGenericGameContent, gameExtras as genericExtras } from './games/GenericGameScores';
import { gameExtras as kingExtras } from './games/KingGameScores';
import Utils from '../Utils';
import ErrorBox from '../components/ErrorBox';
import GameProgression from './GameProgression';
import GameTypePlayer from '../components/GameTypePlayer';
import RepairProgression from './RepairProgression';
import GameProgressionDirector from './GameProgressionDirector';
import PresenceButton from './PresenceButton';
import TrainingController from './games/TrainingController';
import { GameProgressionContext } from './context/GameProgressionContext';
import { isOffline } from './routes/Offline';
import { GAME_TYPE_AECAR, 
         GAME_TYPE_ISRCC, 
         GAME_TYPE_KING, 
         GAME_TYPE_LEVANTE, 
         GAME_TYPE_COPAESPANA,
         GAME_TYPE_MINICRAWLERPASSION,
         GAME_TYPE_GENERIC,
        GameUtils } from '../model/Game.ts';

import '../resources/css/GamePlayer.scss';
import WinnerTable from '../components/WinnerTable';

const GAME_STATUS_CREATED = 0;
const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_FINISHED = 2;
const GAME_STATUS_TRAINING = 3;

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
const STATUS_REPAIR = 'repair';
const STATUS_DONE = 'done';

function GamePlayer({inGame, onBackButtonClick}) {
    const fb = window.crawlear.fb;
    const [state, setState] = React.useState(GAME_STATUS_CREATED);
    const [game, setGame] = React.useState(inGame);
    const [error,setError] = React.useState("");
    const [player, setPlayer] = React.useState(-1);
    const [zone, setZone] = React.useState(-1);
    const [jidGroup, setJidGroup] = React.useState(()=>{
        return Utils.getGroupFromJid(game, window.crawlear.user.uid);
    });
    const [gameProgression, setGameProgression] = React.useState({});
    const gameProgressionRef = React.useRef({});
    const { t } = useTranslation();
    let view = <></>,
        judgeProgression = <></>,
        childrenContent = <></>,
        gameExtras,
        method;

    
    if (game.gameType === GAME_TYPE_AECAR) {
        player!=-1 && zone != -1 && (method = getAecarGameContent);
        gameExtras = aecarExtras;
    } else if (game.gameType === GAME_TYPE_ISRCC) {
        player!=-1 && zone != -1 && (method = getIsrccGameContent);
        gameExtras = isrccExtras;
    } else if (game.gameType === GAME_TYPE_LEVANTE) {
        player!=-1 && zone != -1 && (method = getLevanteGameContent);
        gameExtras = levante124Extras;
    } else if (game.gameType === GAME_TYPE_COPAESPANA) {
        player!=-1 && zone != -1 && (method = getRegionalZonaRcGameContent);
        gameExtras = regionalZonaRcExtras;
    } else if (game.gameType === GAME_TYPE_KING) {
        gameExtras = kingExtras;
    } else if (game.gameType === GAME_TYPE_MINICRAWLERPASSION) {
        player!=-1 && zone != -1 && (method = getMiniCrawlerPassionGameContent);
        gameExtras = miniCrawlerPassionExtras;
    } else if (game.gameType === GAME_TYPE_GENERIC) {
        player!=-1 && zone != -1 && (method = getGenericGameContent);
        gameExtras = genericExtras;
    }

    method && (childrenContent = method(t, player.id, zone, game.players[player.id].zones[zone].points));

    function updateGameFromProgression(progression) {
        const newGame = {...game};

        Object.entries(progression).forEach((user, uIndex)=>{
            Object.entries(user[1]).forEach((zone, zIndex)=>{
                if(zone[1].data) {
                    newGame.players[user[0]].zones[zone[0]] = zone[1].data;
                }
            });
        });

        setGame(newGame);
    }

    React.useEffect(()=>{
        if (!isOffline) {
            fb.getGameProgression(game.gid, ()=>{}, ()=>{}, (group, progression)=>{
                const res = {};

                res[group] = progression;
                updateGameFromProgression(progression);
                gameProgressionRef.current = {...gameProgressionRef.current, ...res};
                setGameProgression({...gameProgressionRef.current, ...res});
            }, (group, progression)=>{
                const res = {};

                res[group] = progression;
                updateGameFromProgression(progression);
                gameProgressionRef.current = {...gameProgressionRef.current, ...res};
                setGameProgression({...gameProgressionRef.current, ...res});
            });
        } else {
            setGameProgression(GameUtils.createGameProgression(game.zones, game.players.length));
        }
    },[]);

    function onZoneClick(player, zone) {
        setZone(zone);
        setPlayer(player);
        setError("");
    }

    function onBeginGame() {
        if(player===-1 || zone === -1) {
            setError(t('content.seleccionapilotoyzona'));
        } else {
            const pid = player.id;
            const group = player.group;
            const value = gameProgression[group][pid][zone];

            if((value.status === STATUS_WAITING && window.confirm(t('content.quieresempezarzona'))) || 
              (value.status === STATUS_DONE && window.confirm(t('content.quiereseditarpartida'))) || 
              (value.status === STATUS_PLAYING && window.confirm(t('content.seguroeditarpartidaenjuego')))) {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[group][pid][zone].status = STATUS_PLAYING;
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, group, zone, gameProgression[group][pid][zone]);
            } else if (value.status === STATUS_PLAYING) {
                setError(t('error.juegoencurso'));
            } else if (value.status === STATUS_REPAIR) { 
                setError(t('error.reparacionencurso'));
            }
        }
    }

    function isGroupGameFinished() {
        let result = true;
        
        if (isIndividualGame()) return true;

        Object.entries(gameProgression).forEach((group)=>{
            if (Number(group[0]) === jidGroup) {
                Object.entries(group[1]).forEach((player)=>{
                    Object.entries(player[1]).forEach((zone)=>{
                        if(zone[1].status === STATUS_WAITING || 
                            zone[1].status === STATUS_REPAIR || 
                            zone[1].status === STATUS_PLAYING) {
        
                            result = false;
                        }
                    });    
                })
            }
        })
        
        return result;
    }

    function isIndividualGame() {
        return game.gameType === 1;
    }

    function onClosePlayButtonClick() {
        if (isGroupGameFinished() && window.confirm(t('content.cerrarpartida')) && !isOffline) {
            fb.getGameResult(game, (game)=>{
                let newGame = {...game};

                newGame.gameStatus = 2;
                gameExtras.onGameEnd(newGame);
                newGame = Utils.getOrderedGameResult(newGame);
                fb.updateGame(newGame);
                fb.removeGameProgression(newGame.gid);
                setGame(newGame);
                setState(GAME_STATUS_FINISHED);
            }, ()=>{});
        } else if (isOffline) {
            const newGame = Utils.getOrderedGameResult(game);

            setGame(GameUtils.getGameResult(newGame, gameProgression));
            setState(GAME_STATUS_FINISHED);
        }
    }

    function onGameEnd(updatedGame) {
        if(!isIndividualGame()) {
            const pid = player.id;
            const group = player.group;
            const newGameProgression = {...gameProgression};
            const newGame = {...game};
    
            newGameProgression[group][pid][zone].status = STATUS_DONE;
            newGameProgression[group][pid][zone].data = updatedGame.players[pid].zones[zone];
            !newGameProgression[group][pid][zone].data.judgedBy && (newGameProgression[group][pid][zone].data.judgedBy = []);
            newGameProgression[group][pid][zone].data.judgedBy.push(window.crawlear.user.uid);
            setGameProgression(newGameProgression);
    
            newGame.players[pid].zones[zone] = newGameProgression[group][pid][zone].data;
            fb.setGameProgression(newGame.gid, pid, group, zone, newGameProgression[group][pid][zone]);
            setState(GAME_STATUS_CREATED); 
            setGame(newGame);
        } else {
            gameExtras.onGameEnd(game);
            const newGame =  Utils.getOrderedGameResult(game);
            newGame.gameStatus = 2;
            fb.updateGame(newGame);
            fb.removeGameProgression(newGame.gid);
            fb.removeDirectorPresenceRequest(newGame.gid);
            setState(GAME_STATUS_FINISHED);
            setGame(newGame);
        }
    }

    function onRepair(playerIndex, zoneIndex) {
        const newGameProgression = {...gameProgression},
            player = game.players[playerIndex],
            group = player.group,
            pid = player.id;

        newGameProgression[group][playerIndex][zoneIndex].status = STATUS_REPAIR;
        newGameProgression[group][playerIndex][zoneIndex].repairData = {
            setTime: new Date().getTime()
        };
        newGameProgression[group][playerIndex][zoneIndex].data = player.zones[zoneIndex];
        setGameProgression(newGameProgression);
        fb.setGameProgression(game.gid, pid, group, zoneIndex, newGameProgression[group][pid][zoneIndex]);
        setState(GAME_STATUS_CREATED);
    }

    function onRepairEnd(id, group, zoneIndex, zone) {
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, id, group, zoneIndex, zone);
    }

    function goTraining() {
        setState(GAME_STATUS_TRAINING);
    }

    function onTrainingEnd() {
        setState(GAME_STATUS_CREATED);
    }

    if (game.gameType !== GAME_TYPE_KING) {
        if (state === GAME_STATUS_CREATED) {
            const directorProgression = [];
            const isCurrentUserIsOwner = GameUtils.isCurrentUserIsOwner(game.owner);

            if (isCurrentUserIsOwner) {
                directorProgression.push(<div key="dP" className="directorContainer rounded rounded3">
                        <div className="bold">{t('description.directordepartida')}</div>
                        <br />
                        <GameProgressionDirector game={game} gameProgression={gameProgression} />
                    </div>);
            }

            if (game.jids.find(elem=>elem===window.crawlear.user.uid)) {
                let buton = <></>;

                if (player.group === jidGroup || isCurrentUserIsOwner) {
                    buton = <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>;
                }
                judgeProgression = <>
                    {t('description.jugadorseleccionado')}: {player !==-1 ? player.name : ""} <br />
                    {t('description.zonaseleccionada')}: {zone !==-1 ? zone+1 : ""}<br />
                    {buton}
                    <PresenceButton fromUid={window.crawlear.user.uid} 
                        game={game} 
                        zone={zone}
                        playerName={player.name}
                        fromName={window.crawlear.user.displayName} />
                </>;
            }

/*            <button className='trainingButton importantNote'
            onClick={goTraining}>{t('description.entrenamientos')}</button> */           
            view = <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
                
                {directorProgression}
                <div className="trackJudgeContainer rounded rounded3">
                    <div className="bold">{t('description.juezdepista')}</div>
                    <GameProgression onZoneClick={onZoneClick} 
                        game={game}
                        jidGroup={jidGroup} />
                    <ErrorBox message={error} />
                    {judgeProgression}
                </div>
                <div className="tendJudgeContainer rounded rounded3">
                    <div className="bold">{t('description.juezdecarpa')}</div>
                    <RepairProgression 
                        gameProgression={gameProgression}
                        game={game}
                        onRepairEnd={onRepairEnd}
                    />
                </div>
                <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
                {GameUtils.isCurrentUserIsOwner(game.owner) && isGroupGameFinished() ? <button className="closeButton importantNote" onClick={onClosePlayButtonClick}>{t('description.cerrarpartida')}</button> : <></>}
            </GameProgressionContext.Provider>;
        } else if (state === GAME_STATUS_PLAYING) {
            view = <GameTypePlayer 
                player={player.id} 
                zone={zone} 
                game={game}
                gameExtras={gameExtras}
                onGameEnd={onGameEnd}
                onRepair={onRepair}>
                    {childrenContent}
                </GameTypePlayer>;
        } else if (state === GAME_STATUS_FINISHED) { 
            view = <div className="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        } else if(state === GAME_STATUS_TRAINING) {
            view = <TrainingController game={game} onTrainingEnd={onTrainingEnd} />
        }
    } else {
        if (state === GAME_STATUS_CREATED || view === GAME_STATUS_PLAYING) { 
            view = <GameTypePlayer 
                game={game} 
                onGameEnd={onGameEnd}
                gameExtras={gameExtras} />;
        } else {
            view = <div class="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        }        
    }

    return view;
}

export default GamePlayer;