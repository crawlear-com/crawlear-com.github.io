import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import IsrccGameScores from './IsrccGameScores';
import ControlTextArray from '../ControlTextArray';
import FiascoControl from '../FiascoControl.js';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { GameUtils } from '../../model/Game';

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
            playerZone = players[playerIndex].zones[zoneIndex],
            playerCurrentGate = playerZone.gateProgressionData[playerZone.gateProgression];

        const pointsFiasco = ()=>{return currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0};
        const timeFiasco = ()=>{return currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0};

        if ((!pointsFiasco() && !timeFiasco()) || 
           (playerZone.points + value <= currentGame.maxPoints && 
            playerCurrentGate.fiascoControlTextValues.filter(x => x > 0).length === 0)) {

                playerCurrentGate.controlTextValues = [...playerCurrentGate.controlTextValues];
                playerCurrentGate.controlTextValues[control] += value;
                playerZone.points += value;

                if (playerZone.gateProgression<currentGame.gates[zoneIndex] && playerCurrentGate.gatePoints+value >=0) {
                    playerCurrentGate.gatePoints += value;
                }

                setState(newState);

                if (playerCurrentGate.fiascoControlTextValues.filter(x => x > 0).length >= 1 ||
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
        let newState = {...state };

        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[playerIndex].name);
        newState = initControlTestValues(newState.game, true);

        newState.forceAction = 'stop';
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function getZoneTotalBonification(gateProgresionData, gateProgresion) {
        let bonification = 0;

        for (let i=0; i<gateProgresion; i++) {
            if (gateProgresionData[i].gatePoints < 20) {
                bonification++;
            }
        }

        return bonification*-2;
    }

    function getGatesWithFail(playerZone) {
        return playerZone.gateProgressionData.filter(x => x.gatePoints >= 20).length;
    }

    function getGatesWithBonification(playerZone) {
        return playerZone.gateProgressionData.filter((x,i) => (x.gatePoints < 20 && i<playerZone.gateProgression)).length;
    }

    function onEndPlayer() {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players,
            playerZone = currentGame.players[playerIndex].zones[zoneIndex],
            gateProgressionPoints = getZoneTotalBonification(playerZone.gateProgressionData, playerZone.gateProgression);

            playerZone.gatesWithFail = getGatesWithFail(playerZone);
            playerZone.gatesWithBonification = getGatesWithBonification(playerZone);

            window.scrollTo(0,0);
        if ((currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0) || 
            (currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0) || isFiasco(newState, playerIndex, zoneIndex)) {
                playerZone.time = (currentGame.maxTime > 0 ? currentGame.maxTime : state.tickTime);
                playerZone.points = gateProgressionPoints + (currentGame.maxPoints > 0 ? currentGame.maxPoints : playerZone.points);
        } else {
            playerZone.time = state.tickTime;
            playerZone.points += gateProgressionPoints;
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

        currentZone.gateProgression = value;
        if (value === newState.game.gates[zoneIndex]) {
            newState.forceAction = 'pause';
        }
        setState(newState);
    }

    function onFiascoChangeScore(value, control) {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex],
            playerCurrentGate = playerZone.gateProgressionData[playerZone.gateProgression];

        playerCurrentGate.fiascoControlTextValues = [...playerCurrentGate.fiascoControlTextValues];
        playerCurrentGate.fiascoControlTextValues[control] += value;

        control === 0 && (playerZone.points += value);
        playerCurrentGate.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
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

    function generateSliderMarksFromGates(gateData, gateProgression) {
        const result = {};

    for (let i=0; i<gateData.length; i++) {
            let classname = 'gatePoints ',
                content;

            if (i<gateProgression) {
                if (gateData[i].gatePoints < 20) {
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
                {content}<br />
                {gateData[i].gatePoints}
            </div>;

        }

        return result;
    }

    let fiasco = <></>;
    const currentGame = state.game,
        maxTime = currentGame.maxTime,
        player = currentGame.players[playerIndex],
        playerZone = player.zones[zoneIndex],
        controlTextArray = playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
            <ControlTextArray
                controlTextValues={playerZone.gateProgressionData[playerZone.gateProgression].controlTextValues}
                steps={IsrccGameScores.steps}
                maxValues={IsrccGameScores.maxValues}
                texts={IsrccGameScores.texts}
                player={playerIndex}
                onValueChange={onChangeScore}
            /> : <></>,
        fiascoControlTextArray = playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
            <FiascoControl values={playerZone.gateProgressionData[playerZone.gateProgression].fiascoControlTextValues} onChangeScore={onFiascoChangeScore}
            /> : <>{t('content.pulsafinjugador')}</>;

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
            
            <SliderWithTooltip
                    step={1}
                    min={0}
                    max={currentGame.gates[zoneIndex]}
                    dots={true}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    marks={generateSliderMarksFromGates(playerZone.gateProgressionData, playerZone.gateProgression)}
                    tipFormatter={(value)=>{
                        return playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
                            String(value).concat('-').concat(playerZone.gateProgressionData[playerZone.gateProgression].gatePoints) : 
                            '-'; 
                    }}
                />
        </div>
        
        <div className="controlTextContainer rounded rounded2">
            {controlTextArray}
            {fiascoControlTextArray}
        </div>

        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
        <button className="importantNote" onClick={()=>{
            onEndPlayer()
            }}>{t('description.finjugador')} ({player.name})</button><p />
    </div>
}

function isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) {
    const playerZone = game.players[playerIndex].zones[zoneIndex];
    let fiasco = false, gate = 0;

    while(!fiasco && gate<game.gates[zoneIndex]) {
        const gateData = playerZone.gateProgressionData[gate];
        let control = 0;

        while (!fiasco && control<gateData.fiascoControlTextValues.length) {
            if (gateData.fiascoControlTextValues[control]>0) {
                fiasco = true;
            } else {
                control++;
            }
        }

        gate++;
    }

    return fiasco;
}

function isFiasco(state, playerIndex, zoneIndex) {
    const currentGame = state.game,
        playerZone = currentGame.players[playerIndex].zones[zoneIndex];

    return (isFiascoFromFiascoControlTextValues(currentGame, playerIndex, zoneIndex) ||
        (currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0) ||
        (currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0));
}

function initControlTestValues(game, reset) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    GameUtils.init(newState.game, reset);

    return newState;
}

export default IsrccGame;