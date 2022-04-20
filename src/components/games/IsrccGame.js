import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import IsrccGameScores from './IsrccGameScores';
import ControlTextArray from '../ControlTextArray';
import FiascoControl from '../FiascoControl.js';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import "rc-slider/assets/index.css";
import '../../resources/css/games/TotalTimeGame.scss'
import '../../resources/css/games/Isrcc.scss'
import '../../resources/css/rcSlider.scss'

function IsrccGame({game, 
    onGameEnd,
    onRepair,
    playerIndex, 
    zoneIndex}) {
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

            if (playerZone.gateProgression<currentGame.gates[zoneIndex] && playerZone.gatePoints[playerZone.gateProgression]+value >=0) {
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
        setState(newState);

        Analytics.event('play', 'endPlayer', players[playerIndex].name);
        onGameEnd(newState.game);
    }

    function onGateProgressionChange(value) {
        const newState = {...state},
            zones = newState.game.players[playerIndex].zones,
            currentZone = zones[zoneIndex];

        if (Math.abs(value - currentZone.gateProgression) > 1) return;

        if (value < currentZone.gateProgression) {
            for(let i=value;i<newState.game.gates[zoneIndex];i++) {
                currentZone.gatePoints[i]=0;
            }
        }
        currentZone.gateProgression = value;
        currentZone.gatesWithFail = currentZone.gatePoints ? currentZone.gatePoints.filter(x => x >= 20).length : 0;
        currentZone.gatesWithBonification = currentZone.gatePoints ? currentZone.gatePoints.filter((x,i) => (x < 20 && i<currentZone.gateProgression)).length : 0;
        if (value === newState.game.gates[zoneIndex]) {
            newState.forceAction = 'pause';
        }
        setState(newState);
    }

    function onFiascoChangeScore(value, control) {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.fiascoControlTextValues = [...playerZone.fiascoControlTextValues];
        playerZone.fiascoControlTextValues[control] += value;

        control === 0 && (playerZone.points += value);
        playerZone.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
        setState(newState);
    }

    function setRepairStatus() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.time = state.tickTime;
        setState(newState);

        onRepair && onRepair(playerIndex, zoneIndex);
    }

    function generateSliderMarksFromGates(gatePoints, gateProgression) {
        const result = {};

    for (let i=0; i<gatePoints.length; i++) {
            let classname = 'gatePoints ',
                content;

            if (i<gateProgression) {
                if (gatePoints[i] < 20) {
                    classname += 'colorGreen';
                    content = '-2';
                } else {
                    classname += 'colorRed';
                    content = '0';
                }
            } else {
                classname += 'colorGrey';
                content = '-';
            }

            result[i] = <div className={classname}>
                {content}
            </div>;

        }

        return result;
    }

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
        <div className="controlTextContainer rounded rounded2">
            {fiasco}
            <TimerControl
                startTime={playerZone.time}
                label={t('description.tiempo')}
                forceAction={state.forceAction}
                onTimerChange={onTimerChange}
                maxTime={maxTime} />
            <button className='repairButton importantNote' onClick={setRepairStatus}>{t('description.iniciarreparacion')}</button>
            <div className="pointsText">{t('description.puntos')}: { playerZone.points}</div>
        </div>
        <div className="controlTextContainer info rounded rounded2">
            {t('description.zona')}: {zoneIndex + 1}<br/>
            {t('description.puertas')}: {currentGame.gates[zoneIndex]}<br/>
            {t('description.bonificacion')}: {playerZone.gatesWithBonification * -2}<br />
            
            <SliderWithTooltip
                    step={1}
                    min={0}
                    max={currentGame.gates[zoneIndex]}
                    dots={true}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    marks={generateSliderMarksFromGates(playerZone.gatePoints, playerZone.gateProgression)}
                    tipFormatter={(value)=>{
                        return String(value).concat('-').concat(playerZone.gatePoints[playerZone.gateProgression]); 
                    }}
                />
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
                    gatePoints: new Array(game.gates[k])
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