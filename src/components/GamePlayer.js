import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';
import Utils from '../Utils';
import ErrorBox from '../components/ErrorBox';
import GameProgression from './GameProgression';
import GameTypePlayer from '../components/GameTypePlayer';
import RepairProgression from './RepairProgression';

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

function GamePlayer({game, onBackButtonClick}) {
    const fb = window.crawlear.fb;
    const [state, setState] = React.useState(GAME_STATUS_CREATED);
    const [error,setError] = React.useState("");
    const [player, setPlayer] = React.useState(-1);
    const [zone, setZone] = React.useState(-1);
    const [gameProgression, setGameProgression] = React.useState({});
    const gameProgressionRef = React.useRef({});
    const { t } = useTranslation();
    let view = <></>;

    React.useEffect(()=>{
        fb.getGameProgression(game.gid, ()=>{}, ()=>{}, (uid, progression)=>{
            const res = {};

            res[uid] = progression;
            gameProgressionRef.current = {...gameProgressionRef.current, ...res};
            setGameProgression({...gameProgressionRef.current, ...res});
        }, (uid, progression)=>{
            const res = {};

            res[uid] = progression;
            gameProgressionRef.current = {...gameProgressionRef.current, ...res};
            setGameProgression({...gameProgressionRef.current, ...res});
        });
    },[]);

    React.useEffect(()=>{
        Object.entries(gameProgressionRef.current).forEach((player, playerIndex)=>{
            
            player[1].forEach((zone, zoneIndex)=>{
                if (zone.status === 'done' || zone.status === 'repair') {
                    game.players[playerIndex].zones[zoneIndex] = zone.data;
                }
            });
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
            const value = gameProgression[pid][zone];

            if((value.status === STATUS_WAITING && window.confirm(t('content.quieresempezarzona'))) || 
              (value.status === STATUS_DONE && window.confirm(t('content.quiereseditarpartida'))) || 
              (value.status === STATUS_PLAYING && window.confirm(t('content.seguroeditarpartidaenjuego')))) {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[pid][zone].status = STATUS_PLAYING;
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, zone, gameProgression[pid][zone]);
            } else if (value.status === STATUS_PLAYING) {
                setError(t('error.juegoencurso'));
            } else if (value.status === STATUS_REPAIR) { 
                setError(t('error.reparacionencurso'));
            }
        }
    }

    function isGameFinished() {
        let result = true;
        
        if (isIndividualGame()) return true;

        Object.entries(gameProgression).forEach((player)=>{ 
            player[1].forEach((zone)=>{
                if(zone.status === STATUS_WAITING || zone.status === STATUS_REPAIR || zone.status === STATUS_PLAYING) {
                    result = false;
                }
            })
        })

        return result;
    }

    function isIndividualGame() {
        return game.gameType === 1;
    }

    function onClosePlayButtonClick() {
        if (window.confirm(t('content.cerrarpartida')) && isGameFinished()) {
            fb.getGameResult(game, (game)=>{
                game.gameStatus = 2;
                game = Utils.getOrderedGameResult(game);
                fb.updateGame(game);
                fb.removeGameProgression(game.gid);
                setState(GAME_STATUS_FINISHED);    
            }, ()=>{});
        }
    }

    function onGameEnd() {
        if(!isIndividualGame()) {
            const pid = player.id;
            const newGameProgression = {...gameProgression};
    
            newGameProgression[pid][zone].status = STATUS_DONE;
            newGameProgression[pid][zone].data = player.zones[zone];
            !newGameProgression[pid][zone].data.judgedBy && (newGameProgression[pid][zone].data.judgedBy = []);
            newGameProgression[pid][zone].data.judgedBy.push(window.crawlear.user.uid);
            setGameProgression(newGameProgression);
    
            fb.setGameResultForPlayerZone(game, pid, zone);
            fb.setGameProgression(game.gid, pid, zone, newGameProgression[pid][zone]);
            setState(GAME_STATUS_CREATED); 
        } else {
            game = Utils.calulateFinalGameResult(game)
            game.gameStatus = 2;
            fb.updateGame(game);
            fb.removeGameProgression(game.gid);
            setState(GAME_STATUS_FINISHED);
        }
    }

    function onRepair(playerIndex, zoneIndex) {
        const newGameProgression = {...gameProgression},
            player = game.players[playerIndex],
            pid = player.id;

        newGameProgression[playerIndex][zoneIndex].status = STATUS_REPAIR;
        newGameProgression[playerIndex][zoneIndex].repairData = {
            setTime: new Date().getTime()
        };
        newGameProgression[playerIndex][zoneIndex].data = player.zones[zoneIndex];
        setGameProgression(newGameProgression);
        fb.setGameProgression(game.gid, pid, zoneIndex, newGameProgression[pid][zoneIndex]);
        fb.setGameResultForPlayerZone(game, pid, zoneIndex);
        setState(GAME_STATUS_CREATED);
    }

    function onRepairEnd(uid, zoneIndex, zone) {
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, zoneIndex, zone);
        fb.setGameResultForPlayerZone(game, uid, zoneIndex);
    }

    function onRepairTimeFiasco(uid, zoneIndex, zone) {
        const progressionData = zone.data;

        progressionData.fiascoControlTextValues[1] = 1;
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, zoneIndex, zone);
        fb.setGameResultForPlayerZone(game, uid, zoneIndex);
    }

    if (game.gameType !== GAME_KING) {
        if (state === GAME_STATUS_CREATED) {
            view = <>
                <div className="trackJudgeContainer rounded rounded3">
                        <div className="bold">{t('description.juezdepista')}</div>
                        <GameProgression onZoneClick={onZoneClick} 
                            game={game}
                            players={game.players}
                            gameProgression={gameProgression} />
                    <p>
                        <ErrorBox message={error} />
                        {t('description.jugadorseleccionado')}: {player !==-1 ? player.name : ""} <br />
                        {t('description.zonaseleccionada')}: {zone !==-1 ? zone+1 : ""}<br />
                    </p>
                    <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>
                </div>
                <div className="tendJudgeContainer rounded rounded3">
                    <div className="bold">{t('description.juezdecarpa')}</div>
                    <RepairProgression 
                        gameProgression={gameProgression}
                        game={game}
                        onRepairEnd={onRepairEnd}
                        onRepairTimeFiasco={onRepairTimeFiasco}
                    />
                </div>
                <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
                {isGameFinished() ? <button className="closeButton importantNote" onClick={onClosePlayButtonClick}>{t('description.cerrarpartida')}</button> : <></>}
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