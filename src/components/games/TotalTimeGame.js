import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import Utils from '../../Utils';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import TotalTimeGameScores from './TotalTimeGameScores';

import "rc-slider/assets/index.css";
import '../../resources/css/games/TotalTimeGame.scss'

function TotalTimeGame({game, onGameEnd}) {
    const { t } = useTranslation();
    const SliderWithTooltip = createSliderWithTooltip(Slider);
    const [state, setState] = React.useState(()=>{ 
        TotalTimeGameScores.texts = TotalTimeGameScores.texts.map(function(text) {
            return t(text);
        });        
         
        return initControlTestValues(game);
    });
    
    React.useEffect(() => {
        Analytics.pageview('/totaltimegame/');
    },[]);

    function onTimerChange(millis) {
        setState({
            ...state,
            forceAction: 'play',
            tickTime: millis
        });
    }

    function onChangeScore(value, control, player) {
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            playerZone = players[player].zones[game.currentZone];

        if (!isFiasco(state, player) || (playerZone.points + value <= game.maxPoints)) {
            playerZone.controlTextValues = [...playerZone.controlTextValues];
            playerZone.controlTextValues[control] += value;
            playerZone.points += value;
        }

        if (playerZone.points >= game.maxPoints) { 
            newState.forceAction = 'pause';
        }

/*        if ((((game.maxPoints > playerZone.points || game.maxPoints <= 0) && 
            (game.maxTime > state.tickTime || game.maxTime <= 0)) || (playerZone.points + value < game.maxPoints)) &&
            !playerZone.battery) {
                playerZone.controlTextValues = [...playerZone.controlTextValues];
                playerZone.controlTextValues[control] += value;
                playerZone.points += value;
        } else {
            newState.forceAction = 'pause';
        }
*/
        setState(newState);
    }

    function onBatteryDirectFiasco(player, value) {
        const newState = {...state},
            players = newState.game.players;

        players[player].zones[game.currentZone].battery = value;
        setState(newState);
    }

    function onReset() {
        let newState = {...state },
            currentPlayer = game.currentPlayer,
            playerZone = game.players[currentPlayer].zones[game.currentZone];

        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[currentPlayer].name);
        newState = initControlTestValues(newState.game);
        playerZone.time = 0;
        playerZone.points = 0;
        playerZone.battery = false;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            game = newState.game,
            players = game.players,
            currentPlayer = game.currentPlayer,
            playerZone = game.players[currentPlayer].zones[game.currentZone];
            
        window.scrollTo(0,0);

        if (isFiasco(state, currentPlayer)) {
                playerZone.time = (game.maxTime > 0 ? game.maxTime : state.tickTime);
                playerZone.points = (game.maxPoints > 0 ? game.maxPoints : playerZone.points);
        } else {
            playerZone.time = state.tickTime;
        }

        newState.forceAction = 'stop';

        Analytics.event('play', 'endPlayer', players[currentPlayer].name);
        if (currentPlayer+1 < game.players.length) {
            newState.millis = 0;
            newState.game.currentPlayer = currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            if (game.currentZone+1 < game.zones) {
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
        if(value === game.gates) {
            newState.forceAction = 'pause';
        }
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
                steps: TotalTimeGameScores.steps,
                maxValues: TotalTimeGameScores.maxValues,
                texts: TotalTimeGameScores.texts,
                onDirectFiasco: onBatteryDirectFiasco,
                onValueChange: onChangeScore,
                booleanValue: playerZone.battery
            });

        if (isFiasco(state, game.currentPlayer)) {
            fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
        }

        return <div className="gameContainer">
            <div className="playersList">
                <div className="playerListItem importantNote rounded">
                    <img src={player.avatar} alt="avatar"/>
                    {player.name}
                </div>
            </div>
            <div className="totalTimeContainer rounded rounded2">
                {t('description.zonas')}: {game.zones}<br />
                {t('points.puertaprogresion')}: {game.gates}<br />
                {t('description.tiempomaximo')}: {Utils.printTime(Utils.millisToTime(game.maxTime))} <br />
                {t('description.puntosmaximo')}: {game.maxPoints}<br />
            </div>
            <div className="rounded rounded2">
                
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
                />
                <TimerControl 
                    label={t('description.tiempo')}
                    onTimerChange={onTimerChange}
                    forceAction={state.forceAction}
                    maxTime={game.maxTime} />
            </div>
            <div className="controlTextContainer rounded rounded1">
                {fiasco}
                <div className="pointsText">{t('description.puntos')}: { playerZone.points}</div>
                {controlTextArray}
            </div>
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={()=>{
                onEndPlayer()
                }}>{t('description.finjugador')} ({player.name})</button><p />
        </div>
    }
}

function isFiasco(state, player) {
    const game = state.game;
    const playerZone = game.players[player].zones[game.currentZone];

    return ((game.maxPoints <= playerZone.points && game.maxPoints > 0) || 
        (game.maxTime <= state.tickTime && game.maxTime > 0) || playerZone.battery);
}

function initControlTestValues(game) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    newState.game.players.forEach((player)=>{
        player.zones = [];

        for (let k=0; k<game.zones;k++) {
            const zone = {
                battery: false,
                points: 0,
                time: 0,
                controlTextValues: new Array(22)
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