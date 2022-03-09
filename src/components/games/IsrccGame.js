import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import IsrccGameScores from './IsrccGameScores';
import ControlTextArray from '../ControlTextArray';
import RepairTimer from '../RepairTimer';
import FiascoControl from '../FiascoControl.js';
import Utils from '../../Utils';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import "rc-slider/assets/index.css";
import '../../resources/css/games/TotalTimeGame.scss'

function IsrccGame({game, onGameEnd}) {
    const { t } = useTranslation();
    const SliderWithTooltip = createSliderWithTooltip(Slider);
    const [state, setState] = React.useState(()=>{
        window.scrollTo(0,0);
        IsrccGameScores.texts = IsrccGameScores.texts.map(function(text) {
            return t(text);
        });
        return initControlTestValues(game);
    });
    
    React.useEffect(() => {
        Analytics.pageview('/isrcc/');
    },[]);

    function onTimerChange(millis) {
        setState({
            ...state,
            tickTime: millis
        });
    }

    function onChangeScore(value, control) {
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            playerZone = players[game.currentPlayer].zones[game.currentZone];
        const pointsFiasco = ()=>{return game.maxPoints <= playerZone.points && game.maxPoints > 0};
        const timeFiasco = ()=>{return game.maxTime <= state.tickTime && game.maxTime > 0};

        if ((!pointsFiasco() && !timeFiasco()) || 
           (playerZone.points + value <= game.maxPoints && playerZone.fiascoControlTextValues.filter(x => x > 0).length === 0)) {
            playerZone.controlTextValues = [...playerZone.controlTextValues];
            playerZone.controlTextValues[control] += value;
            playerZone.points += value;

            if (playerZone.gateProgression<game.gates && playerZone.gatePoints[playerZone.gateProgression]+value >=0) {
                playerZone.gatePoints[playerZone.gateProgression] += value;
            }
            setState(newState);
        }
        
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
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            game = newState.game,
            players = game.players,
            currentPlayer = game.currentPlayer,
            playerZone = game.players[currentPlayer].zones[game.currentZone],
            gateProgressionValue = (playerZone.gateProgression - playerZone.gatePoints.filter(x=>x>=20).length) * -2,
            isFiasco = playerZone.fiascoControlTextValues.filter(x => x > 0).length>0;
            
        window.scrollTo(0,0);
        if ((game.maxPoints <= playerZone.points && game.maxPoints > 0) || 
            (game.maxTime <= state.tickTime && game.maxTime > 0) || isFiasco) {
                playerZone.time = (game.maxTime > 0 ? game.maxTime : state.tickTime);
                playerZone.points = gateProgressionValue + (game.maxPoints > 0 ? game.maxPoints : playerZone.points);
        } else {
            playerZone.time = state.tickTime;
            playerZone.points += gateProgressionValue;
        }

        newState.forceStop = true;

        Analytics.event('play', 'endPlayer', players[currentPlayer].name);
        if (currentPlayer+1 < game.players.length) {
            newState.game.currentPlayer = currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            if (game.currentZone+1 < game.zones) {
                game.currentPlayer = 0;
                game.currentZone++;
                setState(previousInputs => ({ 
                    ...previousInputs,
                    ...newState}));
            } else if (onGameEnd) {
                onGameEnd(Utils.calulateFinalGameResult(game));
            }
        }
    }

    function onGateProgressionChange(value) {
        const newState = {...state},
            zones = newState.game.players[newState.game.currentPlayer].zones;

        if (Math.abs(value - zones[newState.game.currentZone].gateProgression) > 1) return;
        if (value < zones[newState.game.currentZone].gateProgression) {
            for(let i=value;i<game.gates;i++) {
                zones[newState.game.currentZone].gatePoints[i]=0;
            }
        }
        zones[newState.game.currentZone].gateProgression = value;
        setState(newState);
    }

    function onRepairTimeFiasco() {
        const newState = {...state},
            zones = newState.game.players[newState.game.currentPlayer].zones;

        zones[newState.game.currentZone].fiascoControlTextValues[1] = 1;
        setState(newState);
    }

    function onFiascoChangeScore(value, control) {
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            playerZone = players[game.currentPlayer].zones[game.currentZone];

        playerZone.fiascoControlTextValues = [...playerZone.fiascoControlTextValues];
        playerZone.fiascoControlTextValues[control] += value;

        control === 0 && (playerZone.points += value);
        setState(newState);
    }

    if (state.game.players.length>0) {
        let fiasco = <></>;
        const game = state.game,
            maxTime = game.maxTime,
            player = game.players[game.currentPlayer],
            playerZone = player.zones[game.currentZone],
            controlTextArray = ControlTextArray({
                controlTextValues: playerZone.controlTextValues,
                steps: IsrccGameScores.steps,
                maxValues: IsrccGameScores.maxValues,
                texts: IsrccGameScores.texts,
                onValueChange: onChangeScore
            });

        if (playerZone.fiascoControlTextValues.filter(x => x > 0).length >= 1 ||
            (game.maxPoints <= playerZone.points && game.maxPoints > 0) ||
            (game.maxTime <= state.tickTime && game.maxTime > 0)) {
            Analytics.event('play', 'fiasco', player.name);
            fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
        }

        return <div className="gameContainer">
            <div className="playersList">
                <div className="playerListItem importantNote rounded">
                    <img src={player.avatar} alt="avatar"/>
                    {player.name}
                </div>
            </div>
            <div className="controlTextContainer rounded rounded2">
                {t('description.zona')}: {game.currentZone + 1}<br />
                {t('description.avancepuerta')}: {playerZone.gateProgression}<br />
                {t('points.puertaprogresion')}: {(playerZone.gateProgression - playerZone.gatePoints.filter(x=>x>=20).length) * -2}<br />
                
                <SliderWithTooltip
                        step={1}
                        min={0}
                        max={game.gates}
                        dots={true}
                        value={playerZone.gateProgression}
                        onChange={onGateProgressionChange}
                        marks={['-'].concat(playerZone.gatePoints)}
                        tipFormatter={(value)=>{ return value; }}
                    />
            </div>

            {fiasco}

            <div className="controlTextContainer rounded rounded2">
                <TimerControl 
                    onTimerChange={onTimerChange}
                    maxTime={maxTime} />
            </div>
            
            <div className="controlTextContainer rounded rounded1">
                {t('description.puntos')}: { playerZone.points}<br />
                {controlTextArray}
            </div>

            <div className="controlTextContainer rounded rounded2">
                <FiascoControl values={playerZone.fiascoControlTextValues} 
                    onChangeScore={onFiascoChangeScore} />
            </div>

            <div className="controlTextContainer rounded rounded2">
                <RepairTimer onTimeFiasco={onRepairTimeFiasco} />
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
        tickTime: 0,
        game: game
    }

    newState.game.players.forEach((player)=>{
        player.zones = [];

        for (let k=0; k<game.zones;k++) {
            const zone = {
                points: 0,
                time: 0,
                gateProgression: 0,
                controlTextValues: new Array(6),
                fiascoControlTextValues: new Array(5),
                gatePoints: new Array(game.gates)
            };

            for(let j=0; j<zone.controlTextValues.length; j++) {
                zone.controlTextValues[j] = 0;
            }
            
            for(let j=0; j<zone.fiascoControlTextValues.length; j++) {
                zone.fiascoControlTextValues[j] = 0;
            }

            for(let j=0; j<zone.gatePoints.length; j++) {
                zone.gatePoints[j] = 0;
            }

            player.zones.push(zone);
        }
    });

    return newState;
}

export default IsrccGame;