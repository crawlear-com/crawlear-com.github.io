import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import IsrccGameScores from './IsrccGameScores';
import ControlTextArray from '../ControlTextArray';
import FiascoControl from '../FiascoControl.js';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { GameUtils } from '../../model/Game';
import Utils from '../../Utils';

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
        const playerZone = state.game.players[playerIndex].zones[zoneIndex];

        Analytics.pageview('/isrcc/');
        setState({
            ...state,
            tickTime: playerZone.time,
            forceAction: 'play'
        });
    },[]);

    function onTimerChange(millis) {
        const newState = {...state};

        if (!millis) {
            const currentGame = newState.game,
                players = currentGame.players,
                playerZone = players[playerIndex].zones[zoneIndex];

            playerZone.simpathyPoints = 0;
            GameUtils.getGatesPointExtras(playerZone);
        }

        setState({
            ...newState,
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
            playerZone.fiascoControlTextValues.filter(x => x > 0).length === 0)) {
                playerCurrentGate.controlTextValues = [...playerCurrentGate.controlTextValues];
                playerCurrentGate.controlTextValues[control] += value;
                playerZone.points += value;

                if (playerZone.gateProgression<currentGame.gates[zoneIndex] && playerCurrentGate.gatePoints+value >=0) {
                    playerCurrentGate.gatePoints += value;
                }

                GameUtils.getGatesPointExtras(playerZone);
                setState(newState);

                if (GameUtils.isFiasco(newState.game, state.tickTime, playerIndex, zoneIndex)) {
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

    function onEndPlayer() {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players,
            playerZone = currentGame.players[playerIndex].zones[zoneIndex];
            
        window.scrollTo(0,0);
        if (GameUtils.isFiasco(newState.game, state.tickTime, playerIndex, zoneIndex)) {
            playerZone.time = (currentGame.maxTime > 0 ? (currentGame.maxTime + 60000) : state.tickTime);
            if(GameUtils.isNonPresentedFiasco(currentGame, playerIndex, zoneIndex)) {
                playerZone.totalPoints = 50;
            } else {
                playerZone.totalPoints = (currentGame.maxPoints > 0 ? currentGame.maxPoints : playerZone.totalPoints);
            }
        } else {
            playerZone.time = state.tickTime;
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
        GameUtils.getGatesPointExtras(currentZone);
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

    function onPointBecauseLastMinute() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.simpathyPoints++;
        GameUtils.getGatesPointExtras(playerZone);
        setState(newState);
    }

    function onTimeFiasco() {
        const newState = {...state};

        setState({
            ...newState,
            tickTime: game.maxTime + 60000,
            forceAction: 'pause'
        });
    }

    function setRepairStatus() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.time = state.tickTime;
        newState.forceAction = 'stop';
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
        currentBonification = GameUtils.getZoneTotalBonification(playerZone.gateProgressionData, playerZone.gateProgression),
        controlTextArray = playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
            <ControlTextArray
                controlTextValues={playerZone.gateProgressionData[playerZone.gateProgression].controlTextValues}
                steps={IsrccGameScores.steps}
                maxValues={IsrccGameScores.maxValues}
                texts={IsrccGameScores.texts}
                player={playerIndex}
                isClosed={false}
                onValueChange={onChangeScore}
            /> : <></>,
        fiascoControlTextArray = playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
            <FiascoControl values={playerZone.fiascoControlTextValues} onChangeScore={onFiascoChangeScore}
            /> : <>{t('content.pulsafinjugador')}</>;

    if (GameUtils.isFiasco(state.game, state.tickTime, playerIndex, zoneIndex)) {
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
            <div className="smallText">{t('description.zona')}: {zoneIndex + 1}</div>
            <div className="smallText">{t('description.puertas')}: {currentGame.gates[zoneIndex]}</div>
            <div className="smallText">max {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(game.maxTime))}</div>
            <div className="smallText">max {t('description.puntos')}: {game.maxPoints}</div>
            <div className="bold pointsText">{t('description.total')}: { playerZone.totalPoints}</div>
            {fiasco}
        </div>
        <div className="controlTextContainer rounded rounded2">
            <TimerControl
                startTime={playerZone.time}
                label={t('description.tiempo')}
                forceAction={state.forceAction}
                onTimerChange={onTimerChange}
                onTimeFiasco={onTimeFiasco}
                onPointBecauseLastMinute={onPointBecauseLastMinute}
                maxTime={maxTime} />
                <div className="pointsText">{t('description.puntos')} {t('description.portiempo')}: { playerZone.simpathyPoints}</div>
            <button className='repairButton importantNote' onClick={setRepairStatus}>{t('description.iniciarreparacion')}</button>
        </div>
        <div className="controlTextContainer info rounded rounded2">
            <div className="pointsText">{t('description.bonificacion')}: { currentBonification}</div>

            <div className="pointsText">{t('description.puntos')}: { playerZone.points}</div>
            
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
            {controlTextArray}
        </div>
        
        <div className="controlTextContainer rounded rounded2">
            {fiascoControlTextArray}
        </div>

        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
        <button className="importantNote" onClick={()=>{
            onEndPlayer()
            }}>{t('description.finjugador')} ({player.name})</button><p />
    </div>
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