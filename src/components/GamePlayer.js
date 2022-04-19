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

function GamePlayer({game, onBackButtonClick}) {
    const fb = window.crawlear.fb;
    const [state, setState] = React.useState(GAME_STATUS_CREATED);
    const [error,setError] = React.useState("");
    const [player, setPlayer] = React.useState(-1);
    const [zone, setZone] = React.useState(-1);
    const [gameProgression, setGameProgression] = React.useState({});
    const gameProgressionRef = React.useRef({});
    const { t } = useTranslation();
    let view;

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

            if(value.status === STATUS_WAITING) {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[pid][zone].status = STATUS_PLAYING;
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, zone, gameProgression[pid][zone]);
            } else {
                setError(t('error.juegoencurso'));
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

    function checkGameIsFinished() {
        if(isGameFinished()) {
            fb.getGameResult(Utils.calulateFinalGameResult(game), (game)=>{
                game.gameStatus = 2;
                fb.updateGame(game);
                fb.removeGameProgression(game.gid);
                setState(GAME_STATUS_FINISHED);
            }, ()=>{});
        } else {
            setState(GAME_STATUS_CREATED);
        }
    }

    function onGameEnd() {
        if(!isIndividualGame()) {
            const pid = player.id;
            const newGameProgression = {...gameProgression};
    
            newGameProgression[pid][zone].status = STATUS_DONE;
            newGameProgression[pid][zone].data = player.zones[zone];
            setGameProgression(newGameProgression);
    
            fb.setGameResultForPlayerZone(game, pid, zone);
            fb.setGameProgression(game.gid, pid, zone, newGameProgression[pid][zone]);
        }

        checkGameIsFinished();
    }

    function onRepair(playerIndex, zoneIndex) {
        const newGameProgression = {...gameProgression},
            pid = game.players[playerIndex].id;

        newGameProgression[playerIndex][zoneIndex].status = STATUS_REPAIR;
        newGameProgression[playerIndex][zoneIndex].repairData = {
            setTime: new Date().getTime()
        };
        newGameProgression[playerIndex][zoneIndex].data = player.zones[zone];
        setGameProgression(newGameProgression);
        fb.setGameProgression(game.gid, pid, zone, newGameProgression[pid][zone]);
        setState(GAME_STATUS_CREATED);
    }

    if (game.gameType !== GAME_KING) {
        if (state === GAME_STATUS_CREATED) {
            view = <>
                <div className="trackJudgeContainer rounded rounded3">
                        <div className="bold">{t('description.juezdepista')}</div>
                        <GameProgression onZoneClick={onZoneClick} 
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
                    <RepairProgression gameProgression={gameProgression}
                        onTimeFiasco={checkGameIsFinished}
                        game={game}
                    />
                </div>
                <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
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
            view = <div class="gameList"><WinnerTable game={game} />
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