import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import Utils from '../../Utils';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import "rc-slider/assets/index.css";
import '../../resources/css/games/TotalTimeGame.scss'

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const MODE_OFFICIAL = 1;

let tickTime = 0;
let timer = null;

function TotalTimeGame({game, onGameEnd}) {
    const { t } = useTranslation();
    const SliderWithTooltip = createSliderWithTooltip(Slider);
    const [state, setState] = React.useState(()=>{ 
        tickTime = 0;
        return initControlTestValues(game)
    });
    
    React.useEffect(() => {
        Analytics.pageview('/totaltimegame/');
    },[]);

    React.useEffect(()=> {
        const newState = {
            ...state,
            timeStart: Date.now()
        };

        if (state.state === STATE_PLAY) {
            timer && clearInterval(timer);
            newState.millis = tickTime;
            timer = setInterval(() => {timerCount(newState)}, 10);
            setState(previousInputs => ({ ...previousInputs,...newState}));
        } else {
            const finalTime = tickTime + (Date.now() - newState.timeStart);
            newState.millis = finalTime;
            tickTime = finalTime;
            timer && clearInterval(timer);
            timer = null;
            setState(previousInputs => ({ ...previousInputs,...newState}));
        }
    }, [state.state]);

    function onChangeScore(value, player, control) {
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            playerZone = players[player].zones[game.currentZone],
            points = players[player].points;

        if ((((game.maxPoints > points || game.maxPoints <= 0) && 
            (game.maxTime > tickTime || game.maxTime <= 0)) || (points + value < game.maxPoints)) &&
            !playerZone.battery) {
                playerZone.controlTextValues = [...playerZone.controlTextValues];
                playerZone.controlTextValues[control] += value;
                playerZone.points += value;
        }

        setState(newState);
    }

    function onBatteryDirectFiasco(player, value) {
        const newState = {...state},
            players = newState.game.players;

        players[player].zones[game.currentZone].battery = value;
        setState(newState);
    }

    function timerCount(state) {
        const game = state.game,
            playerZone = game.players[game.currentPlayer].zones[game.currentZone];

        if ((game.maxPoints > playerZone.points || game.maxPoints <= 0) && 
            (game.maxTime > tickTime || game.maxTime <= 0) && 
            (!playerZone.battery)) {
            tickTime += 10;  
            setState(previousInputs => ({ ...previousInputs,
                millis: tickTime
            }));
        }
    };
    
    function changePlayPauseTimeControl() {
        if(state.state === STATE_PAUSE) {
            state.state = STATE_PLAY;
            Analytics.event('play', 'timePlay', ''); 
    
        } else {
            state.state = STATE_PAUSE;
            Analytics.event('play', 'timePause', '');    
        }

        setState(previousInputs=>({
            ...previousInputs,
            state: state.state
        }));
    }

    function onReset() {
        let newState = {...state },
            currentPlayer = game.currentPlayer,
            playerZone = game.players[currentPlayer].zones[game.currentZone];

        tickTime = 0;
        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[currentPlayer].name);
        newState = initControlTestValues(newState.game);
        playerZone.time = 0;
        playerZone.points = 0;
        playerZone.battery = false;
        newState.state = STATE_PAUSE;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            game = newState.game,
            players = game.players,
            currentPlayer = game.currentPlayer,
            playerZone = game.players[currentPlayer].zones[game.currentZone];
            
        window.scrollTo(0,0);
        newState.state = STATE_PAUSE;

        if ((game.maxPoints <= playerZone.points && game.maxPoints > 0) || 
            (game.maxTime <= tickTime && game.maxTime > 0) || playerZone.battery) {
                playerZone.time = (game.maxTime > 0 ? game.maxTime : tickTime);
                playerZone.points = (game.maxPoints > 0 ? game.maxPoints : playerZone.points);
        } else {
            playerZone.time = tickTime;
        }

        Analytics.event('play', 'endPlayer', players[currentPlayer].name);
        if (currentPlayer+1 < game.players.length) {
            tickTime = 0;
            newState.millis = 0;
            newState.game.currentPlayer = currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            if (game.currentZone+1 < game.zones) {
                tickTime = 0;
                newState.millis = 0;
                game.currentPlayer = 0;
                game.currentZone++;
                setState(previousInputs => ({ 
                    ...previousInputs,
                    ...newState}));
            } else if (onGameEnd) {
                onGameEnd && onGameEnd(Utils.calulateFinalGameResult(game));
            }
        }
    }

    function onGateProgressionChange(value) {
        const newState = {...state},
            zones = newState.game.players[newState.game.currentPlayer].zones;

        zones[newState.game.currentZone].gateProgression = value;
        setState(newState);
    }

    if (state.game.players.length>0) {
        let fiasco = <></>;
        const game = state.game,
            player = game.players[game.currentPlayer],
            playerZone = player.zones[game.currentZone],
            controlTextArray = ControlTextArray({
                controlTextValues: playerZone.controlTextValues,
                player: game.currentPlayer,
                onDirectFiasco: onBatteryDirectFiasco,
                onValueChange: onChangeScore,
                booleanValue: playerZone.battery
            });

        if (game.pointsType === MODE_OFFICIAL) {
            const maxPoints = game.maxPoints, 
                maxTime = game.maxTime;

            if ((maxPoints <= playerZone.points && maxPoints > 0) || 
                (maxTime <= tickTime && maxTime > 0) ||
                playerZone.battery) {
                Analytics.event('play', 'fiasco', player.name); 
                fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
            }
        }

        return <div className="gameContainer">
            <div className="playersList">
                <div className="playerListItem importantNote rounded">
                    <img src={player.avatar} alt="avatar"/>
                    {player.name}
                </div>
            </div>
            <div className="totalTimeContainer rounded rounded2">
            {game.pointsType === MODE_OFFICIAL ? <>{t('description.zonas')}: {game.zones}<br />
                {t('points.puertaprogresion')}: {game.gates}<br /></> : <></>}
                {t('description.tiempomaximo')}: {Utils.printTime(Utils.millisToTime(game.maxTime))} <br />
                {t('description.puntosmaximo')}: {game.maxPoints}<br />
            </div>
            <div className="gatainer rounded rounded2">
                {game.pointsType === MODE_OFFICIAL ? <>
                {t('description.zona')}: {game.currentZone + 1}<br />
                {t('description.avancepuerta')}: {playerZone.gateProgression}<br />
                <SliderWithTooltip
                    step={1}
                    min={0}
                    max={game.gates}
                    dots={true}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    tipFormatter={(value)=>{ return value; }}
                /></> : <></>}
                <TimerControl 
                    state={state.state}
                    time={state.millis} 
                    onPlayPauseChange={changePlayPauseTimeControl} />
            </div>
            {fiasco}
            <div className="controlTextContainer rounded rounded1">
                {t('description.puntos')}: { playerZone.points}<br />
                {controlTextArray}
            </div>
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={()=>{
                onEndPlayer()
                }}>{t('description.finjugador')} ({player.name})</button><p />
        </div>
    }
}

function initControlTestValues(game) {
    const newState = {
        millis: 0,
        timeStart: 0,
        game: game,
        state: STATE_PAUSE
    }

    newState.game.players.forEach((player)=>{
        player.zones = [];

        for (let k=0; k<game.zones;k++) {
            const zone = {
                battery: false,
                points: 0,
                time: 0,
                controlTextValues: game.pointsType === MODE_OFFICIAL ? new Array(20) : new Array(7)
            };

            for(let j=0; j<zone.controlTextValues.length; j++) {
                zone.controlTextValues[j] = 0;
            }

            player.zones.push(zone);
        }
    });

    return newState;
}

export default TotalTimeGame;