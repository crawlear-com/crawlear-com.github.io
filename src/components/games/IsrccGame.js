import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import IsrccGameScores from './IsrccGameScores';
import ControlTextArray from '../ControlTextArray';
import RepairTimer from '../RepairTimer';
import FiascoControl from '../FiascoControl.js';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import "rc-slider/assets/index.css";
import '../../resources/css/games/TotalTimeGame.scss'
import '../../resources/css/games/Isrcc.scss'
import iconGates from '../../resources/img/iconGates.png';
import iconGatesKo from '../../resources/img/iconGatesKo.png';
import iconGatesOk from '../../resources/img/iconGatesOk.png';

function IsrccGame({game, onGameEnd, playerIndex, zoneIndex}) {
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
            tickTime: millis,
            forceAction: 'play'
        });
    }

    function onRepairTimerChange(millis) {
        setState({
            ...state,
            tickTime: millis,
            forceAction: 'pause'
        });
    }

    function onChangeScore(value, control) {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players,
            playerZone = players[playerIndex].zones[zoneIndex];
        const pointsFiasco = ()=>{return currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0};
        const timeFiasco = ()=>{return currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0};

        if ((!pointsFiasco() && !timeFiasco()) || 
           (playerZone.points + value <= currentGame.maxPoints && playerZone.fiascoControlTextValues.filter(x => x > 0).length === 0)) {
            playerZone.controlTextValues = [...playerZone.controlTextValues];
            playerZone.controlTextValues[control] += value;
            playerZone.points += value;

            if (playerZone.gateProgression<currentGame.gates && playerZone.gatePoints[playerZone.gateProgression]+value >=0) {
                playerZone.gatePoints[playerZone.gateProgression] += value;
            }
            setState(newState);

            if (playerZone.fiascoControlTextValues.filter(x => x > 0).length >= 1 ||
            (currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0) ||
            (currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0)) { 
                setState({
                    ...state,
                    forceAction: 'pause'
                });
            }
        }
    }

    function onReset() {
        let newState = {...state },
            playerZone = newState.game.players[playerIndex].zones[zoneIndex];

        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[playerIndex].name);
        newState = initControlTestValues(newState.game);
        playerZone.time = 0;
        playerZone.points = 0;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players,
            playerZone = currentGame.players[playerIndex].zones[zoneIndex],
            gateProgressionValue = (playerZone.gateProgression - playerZone.gatePoints.filter(x=>x>=20).length) * -2;
            
        window.scrollTo(0,0);
        if ((currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0) || 
            (currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0) || isFiasco(newState, playerIndex, zoneIndex)) {
                playerZone.time = (currentGame.maxTime > 0 ? currentGame.maxTime : state.tickTime);
                playerZone.points = gateProgressionValue + (currentGame.maxPoints > 0 ? currentGame.maxPoints : playerZone.points);
        } else {
            playerZone.time = state.tickTime;
            playerZone.points += gateProgressionValue;
        }
        newState.forceAction = 'stop';

        Analytics.event('play', 'endPlayer', players[playerIndex].name);
        /*if (currentPlayer+1 < game.players.length) {
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
        }*/
        onGameEnd(game);
    }

    function onGateProgressionChange(value) {
        const newState = {...state},
            zones = newState.game.players[playerIndex].zones,
            currentZone = zones[zoneIndex];

        if (Math.abs(value - currentZone.gateProgression) > 1) return;
        if (value < currentZone.gateProgression) {
            for(let i=value;i<newState.game.gates;i++) {
                currentZone.gatePoints[i]=0;
            }
        }
        currentZone.gateProgression = value;
        currentZone.gatesWithFail = currentZone.gatePoints ? currentZone.gatePoints.filter(x => x >= 20).length : 0;
        currentZone.gatesWithBonification = currentZone.gatePoints ? currentZone.gatePoints.filter((x,i) => (x < 20 && i<currentZone.gateProgression)).length : 0;
        if (value === newState.game.gates) {
            newState.forceAction = 'pause';
        }
        setState(newState);
    }

    function onRepairTimeFiasco() {
        const newState = {...state},
            zones = newState.game.players[playerIndex].zones;

        zones[zoneIndex].fiascoControlTextValues[1] = 1;
        newState.forceAction = 'pause';
        setState(newState);
    }

    function onFiascoChangeScore(value, control) {
        const newState = {...state},
            currentGame = newState.game,
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.fiascoControlTextValues = [...playerZone.fiascoControlTextValues];
        playerZone.fiascoControlTextValues[control] += value;

        control === 0 && (playerZone.points += value);
        playerZone.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
        setState(newState);
    }

    //if (state.game.players.length>0) {
    let fiasco = <></>;
    const currentGame = state.game,
        maxTime = currentGame.maxTime,
        player = currentGame.players[playerIndex],
        playerZone = player.zones[zoneIndex],
        controlTextArray = ControlTextArray({
            controlTextValues: playerZone.controlTextValues,
            steps: IsrccGameScores.steps,
            maxValues: IsrccGameScores.maxValues,
            texts: IsrccGameScores.texts,
            player: playerIndex,
            onValueChange: onChangeScore
        });

    if (isFiasco(state, playerIndex, zoneIndex)) {
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
        <div className="controlTextContainer info rounded rounded2">
            {t('description.zona')}: {zoneIndex + 1} / {t('description.avancepuerta')}: {playerZone.gateProgression}<br/>
            puertas+ {playerZone.gatesWithBonification}<br/>
            puertas- {playerZone.gatesWithFail}<br />
            {t('description.bonificacion')}: {playerZone.gatesWithBonification * -2}<br />
            
            <SliderWithTooltip
                    step={1}
                    min={0}
                    max={currentGame.gates}
                    dots={true}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    marks={['-'].concat(playerZone.gatePoints)}
                    tipFormatter={(value)=>{ return value; }}
                />
        </div>


        <div className="controlTextContainer rounded rounded2">
            {fiasco}
            <div className="pointsText">{t('description.puntos')}: { playerZone.points}</div>
            <TimerControl
                label={t('description.tiempo')}
                forceAction={state.forceAction}
                onTimerChange={onTimerChange}
                maxTime={maxTime} />
            <RepairTimer onRepairTimerChange={onRepairTimerChange}
                onTimeFiasco={onRepairTimeFiasco} />
        </div>
        
        <div className="controlTextContainer rounded rounded2">
            {controlTextArray}
            <FiascoControl values={playerZone.fiascoControlTextValues} 
                onChangeScore={onFiascoChangeScore} />
        </div>

        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
        <button className="importantNote" onClick={()=>{
            onEndPlayer()
            }}>{t('description.finjugador')} ({player.name})</button><p />
    </div>
}

function isFiasco(state, playerIndex, zoneIndex) {
    const currentGame = state.game,
        playerZone = currentGame.players[playerIndex].zones[zoneIndex];

    return (playerZone.fiascoControlTextValues.filter(x => x > 0).length >= 1 ||
        (currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0) ||
        (currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0));
}

function initControlTestValues(game) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    newState.game.players.forEach((player)=>{
        if (!player.zones || player.zones.length===0) {
            player.zones = [];

            for (let k=0; k<game.zones;k++) {
                const zone = {
                    points: 0,
                    time: 0,
                    gateProgression: 0,
                    gatesWithBonification: 0,
                    gatesWithFail: 0,
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
        }
    });

    return newState;
}

export default IsrccGame;