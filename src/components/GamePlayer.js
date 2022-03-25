import { t } from 'i18next';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';
import Utils from '../Utils';
import ErrorBox from '../components/ErrorBox';
import PlayerItem from '../components/PlayerItem';
import GameTypePlayer from '../components/GameTypePlayer';

import '../resources/css/GamePlayer.scss';
import WinnerTable from '../components/WinnerTable';

const GAME_STATUS_CREATED = 0;
const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_FINISHED = 2;

function GamePlayer({game}) {
    const fb = window.crawlear.fb;
    const [state, setState] = React.useState(GAME_STATUS_CREATED);
    const [error,setError] = React.useState("");
    const [player, setPlayer] = React.useState(-1);
    const [zone, setZone] = React.useState(-1);
    const [gameProgression, setGameProgression] = React.useState({});
    const gameProgressionRef = React.useRef({});
    const { t } = useTranslation();
    let i=0,
        view,
        players = [],
        playersDone = [],
        zones = [];

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

    function onClickZone(event) {
        const element = event.target;
        setZone(Number(element.getAttribute("data-zone")));
        setError("");
    }

    function onClickPlayer(player) {
        setPlayer(player);
        setError("");
    }

    function onBeginGame() {
        if(player===-1 || zone === -1) {
            setError("Selecciona una zona y un jugador");
        } else {
            const pid = game.players[player].uid || game.players[player].name;
            const value = gameProgression[pid][zone];

            if(value === 'waiting') {
                setError("");
                setState(GAME_STATUS_PLAYING);
                gameProgression[pid][zone] = 'playing';
                setGameProgression(gameProgression);
                fb.setGameProgression(game.gid, pid, zone, 'playing');
            } else {
                setError("this game is PLAYING!!!");
            }
        }
    }

    function isGameNotFinished() {
        let result = false;

        Object.entries(gameProgression).forEach((player)=>{ 
            player[1].forEach((zone)=>{
                if(zone === 'waiting' || zone === 'playing') {
                    result = true;
                }
            })
        })

        return result;
    }

    function onGameEnd() {
        const pid = game.players[player].uid || game.players[player].name;

        gameProgression[pid][zone] = 'done';
        setGameProgression(gameProgression);

        fb.setGameResultForPlayerZone(game, player, zone);
        fb.setGameProgression(game.gid, pid, zone, game.players[player].zones[zone]);

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

    if(!game.jids.find((elem)=>{
            return elem === window.crawlear.user.uid;
        })) {

        return (<></>);
    }

    for(let i=0;i<game.zones;i++) {
        zones.push(<div data-zone={i} className="zoneItem rounded rounded2" onClick={onClickZone}>{t("description.zona")} {i+1}</div>);
    }

    game.players.forEach((player)=>{
        let zones=[], 
            j=0,
            className = 'rounded importantNote';

        players.push(<PlayerItem onClickPlayer={onClickPlayer} key={i} player={player} />);
        player.zones.forEach((zone)=>{
            if(gameProgression && gameProgression[player.uid || player.name]) {
                if (gameProgression[player.uid || player.name][j] !== "waiting") {
                    if (gameProgression[player.uid || player.name][j] === "playing") {
                        className += " colorGreen";
                    } else {
                        className += " colorGrey";
                    }
                    zones.push(<span className={className}>{j+1}</span>);
                }
            }
            j++;
        });
        playersDone.push(<div className='gameProgressionItem'>
            <span className='rounded rounded2' key={i+j}>{player.name}:</span>{zones}
        </div>);
        i++;
    })

    if (state === GAME_STATUS_CREATED) {
        view = <>
        <p>
            Progreso de partida:<br />
            {playersDone}
        </p>
        Selecciona un piloto y una zona para continuar.
        <p>
            <ErrorBox message={error} />
            Selected player: {player !==-1 ? game.players[player].name : ""} <br />
            Selected zone: {zone !==-1 ? zone+1 : ""}<br />
        </p>

        <p>
            {players}
            {zones}
        </p>
        <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>
        </>;
    } else if (state === GAME_STATUS_PLAYING) {
        view = <GameTypePlayer player={player} zone={zone} game={game} onGameEnd={onGameEnd} />;
    } else if (state === GAME_STATUS_FINISHED) { 
        view = <WinnerTable game={game} />
    }

    return view;
}

export default GamePlayer;
