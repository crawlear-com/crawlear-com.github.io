import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';
import Utils from '../Utils';
import ErrorBox from '../components/ErrorBox';
import GameProgression from './GameProgression';
import GameTypePlayer from '../components/GameTypePlayer';
import RepairProgression from './RepairProgression';
import GameProgressionDirector from './GameProgressionDirector';
import PresenceButton from './PresenceButton';

import '../resources/css/GamePlayer.scss';
import WinnerTable from '../components/WinnerTable';

const GAME_STATUS_CREATED = 0;
const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_FINISHED = 2;

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
const STATUS_REPAIR = 'repair';
const STATUS_DONE = 'done';

const GAME_KING = 1;
const GAME_ISRCC = 2;

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
    let view = <></>;
    let judgeProgression = <></>;


    function updateGameFromProgression(progression) {
            progression.forEach((user, uIndex)=>{
                user.forEach((zone, zIndex)=>{
                    if(user.data) {
                        game.players[uIndex].zones[zIndex] = zone.data;
                    }
                });
    
            });
    }

    React.useEffect(()=>{
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
    },[]);

    React.useEffect(()=>{
        Object.entries(gameProgressionRef.current).forEach((group, gIndex)=>{
            group[1].forEach((player, playerIndex)=>{
                player.forEach((zone, zoneIndex)=>{
                    if (zone.status === 'done' || zone.status === 'repair') {
                        game.players[playerIndex].zones[zoneIndex] = zone.data;
                    }
                });    
            });

            setGame(game);
        });
    },[gameProgressionRef.current]);

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
            const value = gameProgression[jidGroup][pid][zone];

            if((value.status === STATUS_WAITING && window.confirm(t('content.quieresempezarzona'))) || 
              (value.status === STATUS_DONE && window.confirm(t('content.quiereseditarpartida'))) || 
              (value.status === STATUS_PLAYING && window.confirm(t('content.seguroeditarpartidaenjuego')))) {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[jidGroup][pid][zone].status = STATUS_PLAYING;
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, jidGroup, zone, gameProgression[jidGroup][pid][zone]);
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
                group[1].forEach((player)=>{
                    player.forEach((zone)=>{
                        if(zone.status === STATUS_WAITING || 
                            zone.status === STATUS_REPAIR || 
                            zone.status === STATUS_PLAYING) {
        
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
        if (window.confirm(t('content.cerrarpartida')) && isGroupGameFinished()) {
            fb.getGameResult(game, (game)=>{
                game.gameStatus = 2;
                game = Utils.getOrderedGameResult(game);
                fb.updateGame(game);
                fb.removeGameProgression(game.gid);
                setState(GAME_STATUS_FINISHED);
                setGame(game);
            }, ()=>{});
        }
    }

    function onGameEnd(game) {
        if(!isIndividualGame()) {
            const pid = player.id;
            const newGameProgression = {...gameProgression};
    
            newGameProgression[jidGroup][pid][zone].status = STATUS_DONE;
            newGameProgression[jidGroup][pid][zone].data = player.zones[zone];
            !newGameProgression[jidGroup][pid][zone].data.judgedBy && (newGameProgression[jidGroup][pid][zone].data.judgedBy = []);
            newGameProgression[jidGroup][pid][zone].data.judgedBy.push(window.crawlear.user.uid);
            setGameProgression(newGameProgression);
    
            game.players[pid][zone] = newGameProgression[jidGroup][pid][zone].data;
            fb.setGameProgression(game.gid, pid, jidGroup, zone, newGameProgression[jidGroup][pid][zone]);
            setState(GAME_STATUS_CREATED); 
            setGame(game);
        } else {
            const newGame = Utils.calulateFinalGameResult(game)
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
            pid = player.id;

        newGameProgression[jidGroup][playerIndex][zoneIndex].status = STATUS_REPAIR;
        newGameProgression[jidGroup][playerIndex][zoneIndex].repairData = {
            setTime: new Date().getTime()
        };
        newGameProgression[jidGroup][playerIndex][zoneIndex].data = player.zones[zoneIndex];
        setGameProgression(newGameProgression);
        fb.setGameProgression(game.gid, pid, jidGroup, zoneIndex, newGameProgression[jidGroup][pid][zoneIndex]);
        setState(GAME_STATUS_CREATED);
    }

    function onRepairEnd(uid, zoneIndex, zone) {
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, jidGroup, zoneIndex, zone);
    }

    function onRepairTimeFiasco(uid, zoneIndex, zone) {
        const progressionData = zone.data;

        progressionData.fiascoControlTextValues[1] = 1;
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, jidGroup, zoneIndex, zone);
    }

    function onPresenceRequestStatusChange() {

    }

    if (game.gameType !== GAME_KING) {
        if (state === GAME_STATUS_CREATED) {
            const directorProgression = [];

            if (game.owner === window.crawlear.user.uid) {
                directorProgression.push(<div className="directorContainer rounded rounded3">
                        <div className="bold">{t('description.directordepartida')}</div>
                        <br />
                        <GameProgressionDirector game={game} gameProgression={gameProgression} />
                    </div>);
            }

            if (game.jids.find(elem=>elem===window.crawlear.user.uid)) {
                judgeProgression = <>
                    {t('description.jugadorseleccionado')}: {player !==-1 ? player.name : ""} <br />
                    {t('description.zonaseleccionada')}: {zone !==-1 ? zone+1 : ""}<br />
                    <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>
                    <PresenceButton fromUid={window.crawlear.user.uid} 
                        game={game} 
                        zone={zone}
                        playerName={player.name}
                        fromName={window.crawlear.user.displayName}
                        onPresenceRequestStatusChange={onPresenceRequestStatusChange} />
                </>;
            }

            view = <>
                {directorProgression}
                <div className="trackJudgeContainer rounded rounded3">
                    <div className="bold">{t('description.juezdepista')}</div>
                    <GameProgression onZoneClick={onZoneClick} 
                        game={game}
                        jidGroup={jidGroup}
                        players={game.players}
                        gameProgression={gameProgression} />
                    <p>
                        <ErrorBox message={error} />
                        {judgeProgression}
                    </p>
                </div>
                <div className="tendJudgeContainer rounded rounded3">
                    <div className="bold">{t('description.juezdecarpa')}</div>
                    <RepairProgression 
                        gameProgression={gameProgression}
                        game={game}
                        jidGroup={jidGroup}
                        onRepairEnd={onRepairEnd}
                        onRepairTimeFiasco={onRepairTimeFiasco}
                    />
                </div>
                <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
                {game.owner === window.crawlear.user.uid && isGroupGameFinished() ? <button className="closeButton importantNote" onClick={onClosePlayButtonClick}>{t('description.cerrarpartida')}</button> : <></>}
            </>;
        } else if (state === GAME_STATUS_PLAYING) {
            view = <GameTypePlayer 
                player={player.id} 
                zone={zone} 
                game={game} 
                onGameEnd={onGameEnd}
                onRepair={onRepair}
                />;
        } else if (state === GAME_STATUS_FINISHED) { 
            view = <div className="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        }
    } else {
        if (state === GAME_STATUS_CREATED || view === GAME_STATUS_PLAYING) { 
            view = <GameTypePlayer game={game} onGameEnd={onGameEnd} />;
        } else {
            view = <div class="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        }        
    }

    return view;
}

export default GamePlayer;