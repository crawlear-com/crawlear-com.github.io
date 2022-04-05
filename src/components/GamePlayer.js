import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';
import Utils from '../Utils';
import ErrorBox from '../components/ErrorBox';
import GameProgression from './GameProgression';
import GameTypePlayer from '../components/GameTypePlayer';

import '../resources/css/GamePlayer.scss';
import WinnerTable from '../components/WinnerTable';

const GAME_STATUS_CREATED = 0;
const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_FINISHED = 2;

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
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
            setError('content.seleccionapilotoyzona');
        } else {
            const pid = player.id;
            const value = gameProgression[pid][zone];

            if(value === STATUS_WAITING) {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[pid][zone] = STATUS_PLAYING;
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, zone, STATUS_PLAYING);
            } else {
                setError(t('error.juegoencurso'));
            }
        }
    }

    function isGameNotFinished() {
        let result = false;

        Object.entries(gameProgression).forEach((player)=>{ 
            player[1].forEach((zone)=>{
                if(zone === STATUS_WAITING || zone === STATUS_PLAYING) {
                    result = true;
                }
            })
        })

        return result;
    }

    function onGameEnd() {
        if (player === -1 && zone === -1) {
            game = Utils.calulateFinalGameResult(game)
            game.gameStatus = 2;
            fb.updateGame(game);
            fb.removeGameProgression(game.gid);
            setState(GAME_STATUS_FINISHED);
        } else {
            const pid = player.id;

            gameProgression[pid][zone] = STATUS_DONE;
            setGameProgression(gameProgression);
    
            fb.setGameResultForPlayerZone(game, pid, zone);
            fb.setGameProgression(game.gid, pid, zone, player.zones[zone]);
    
            if(isGameNotFinished()) {
                setState(GAME_STATUS_CREATED);
            } else {
                fb.getGameResult(Utils.calulateFinalGameResult(game), (game)=>{
                    game.gameStatus = 2;
                    fb.updateGame(game);
                    fb.removeGameProgression(game.gid);
                    setState(GAME_STATUS_FINISHED);
                }, ()=>{});
            }
        }
    }

    if (game.gameType !== GAME_KING) {
        if (state === GAME_STATUS_CREATED) {
            view = <>
            <p>
                <GameProgression onZoneClick={onZoneClick} 
                    players={game.players}
                    gameProgression={gameProgression} />
            </p>
            <p>
                <ErrorBox message={error} />
                {t('description.jugadorseleccionado')}: {player !==-1 ? player.name : ""} <br />
                {t('description.zonaseleccionada')}: {zone !==-1 ? zone+1 : ""}<br />
            </p>
            <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
            </>;
        } else if (state === GAME_STATUS_PLAYING) {
            view = <GameTypePlayer player={player.id} zone={zone} game={game} onGameEnd={onGameEnd} />;
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