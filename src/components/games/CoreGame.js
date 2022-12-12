import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { GameUtils, GAME_TYPE_GENERIC } from '../../model/Game.ts';
import Utils from '../../Utils';

import "rc-slider/assets/index.css";
import '../../resources/css/games/CoreGame.scss'
import '../../resources/css/rcSlider.scss'

function CoreGame({
            children,
            game,
            onGameEnd,
            onRepair,
            playerIndex, 
            zoneIndex,
            gameExtras}) {
    const { t } = useTranslation();
    const SliderWithTooltip = createSliderWithTooltip(Slider);
    const [state, setState] = React.useState(()=>{
        window.scrollTo(0,0);
        return initControlTestValues(game);
    });
    const childrenContent = [];
    
    if (children.length) {
        childrenContent.push(React.cloneElement(children[0], {
            onValueChange: onChangeScore
        }));

        if (children[2]) {
            childrenContent.push(React.cloneElement(children[1], {
                onValueChange: onFiascoChangeScore
            }));
            childrenContent.push(React.cloneElement(children[2]));
        } else {
            childrenContent.push(React.cloneElement(children[1]));
        }

        children[3] && childrenContent.push(React.cloneElement(children[3]));
    }

    React.useEffect(() => {
        const playerZone = state.game.players[playerIndex].zones[zoneIndex];
        setState({
            ...state,
            tickTime: playerZone.time,
            forceAction: 'play'
        });

        document.body.classList.add(GameUtils.getGameTypeBodyClassName(game.gameType));
    },[]);

    function onTimerChange(millis) {
        const newState = {...state};

        if (!millis) {
            const currentGame = newState.game,
                players = currentGame.players,
                playerZone = players[playerIndex].zones[zoneIndex];

            playerZone.simpathyPoints = 0;
            gameExtras.onTimerChange(playerZone);
        }
        playerZone.time = millis;

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

                if (playerZone.gateProgression<currentGame.gates[zoneIndex]) {
                    playerCurrentGate.gatePoints += value;
                }
                gameExtras.onChangeScore(playerZone);
                setState(newState);

                if (GameUtils.isFiasco(newState.game, playerIndex, zoneIndex)) {
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
            players = currentGame.players;
            
        window.scrollTo(0,0);
        gameExtras.onEndPlayer(currentGame, state.tickTime, playerIndex, zoneIndex);
        newState.forceAction = 'stop';
        setState(newState);

        Analytics.event('play', 'endPlayer', players[playerIndex].name);
        document.body.classList.remove(GameUtils.getGameTypeBodyClassName(game.gameType))
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
        gameExtras.onGateProgressionChange(currentZone);
        setState(newState);
    }

    function onGateProgressionButtonClick(event) {
        const isPlus = (event.target.id === 'gatesPlusButton'),
            zones = state.game.players[playerIndex].zones,
            currentZone = zones[zoneIndex],
            numGates = state.game.gates[zoneIndex];

        if (isPlus) {
            if (currentZone.gateProgression < numGates) {
                onGateProgressionChange(currentZone.gateProgression+1);
            }
        } else {
            if (currentZone.gateProgression > 0) {
                onGateProgressionChange(currentZone.gateProgression-1);
            }
        }
    }

    function onFiascoChangeScore(value, control) {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.fiascoControlTextValues = [...playerZone.fiascoControlTextValues];
        playerZone.fiascoControlTextValues[control] += value;
        playerZone.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
        gameExtras.onFiascoChangeScore();
        setState(newState);
    }

    function onPointBecauseLastMinute() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.simpathyPoints++;
        gameExtras.onPointBecauseLastMinute(playerZone);
        setState(newState);
    }

    function onTimeFiasco() {
        const newState = {...state};

        setState({
            ...newState,
            tickTime: game.maxTime + game.courtesyTime,
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

    let fiasco = <></>;
    const currentGame = state.game,
        maxTime = currentGame.maxTime,
        player = currentGame.players[playerIndex],
        playerZone = player.zones[zoneIndex];

    if (GameUtils.isFiasco(state.game, playerIndex, zoneIndex)) {
        Analytics.event('play', 'fiasco', player.name);
        fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
    }

    return (
    <div className="gameContainer">
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
            {game.courtesyTime>0 ? 
                    <div className="pointsText">{t('description.puntos')} {t('description.portiempo')}: { playerZone.simpathyPoints}</div> :
                    <></>}            
            <button className='repairButton importantNote' onClick={setRepairStatus}>{t('description.iniciarreparacion')}</button>

            <TimerControl
                courtesyTime={game.courtesyTime}
                startTime={playerZone.time}
                label={t('description.tiempo')}
                forceAction={state.forceAction}
                onTimerChange={onTimerChange}
                onTimeFiasco={onTimeFiasco}
                onPointBecauseLastMinute={onPointBecauseLastMinute}
                maxTime={maxTime} />
        </div>
        <div className="gateProgressionContainer controlTextContainer info rounded rounded2">
            {t('description.avancepuerta')}: {playerZone.gateProgression}
            <button id='gatesPlusButton' onClick={onGateProgressionButtonClick} className='buttonControlTextPlus'>+</button>
            <button id='gatesMinusButton' onClick={onGateProgressionButtonClick} className='buttonControlTextMinus'>-</button>
            <SliderWithTooltip
                    step={1}
                    min={0}
                    max={currentGame.gates[zoneIndex]}
                    dots={true}
                    vertical={game.gameType === GAME_TYPE_GENERIC}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    marks={gameExtras.generateSliderMarksFromGates(playerZone.gateProgressionData, playerZone.gateProgression)}
                    tipFormatter={(value)=>{
                        return playerZone.gateProgression < currentGame.gates[zoneIndex] ? 
                            String(value).concat('-').concat(playerZone.gateProgressionData[playerZone.gateProgression].gatePoints) : 
                            '-'; 
                    }}/>
        </div>
        
        <div className="controlTextContainer rounded rounded2">
            {childrenContent[2]}
            {playerZone.gateProgression < game.gates[zoneIndex] ? childrenContent[0] : <></>}
            {playerZone.gateProgression < game.gates[zoneIndex] ? childrenContent[1] : <></>}
        </div>

        {childrenContent[3]}

        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
        <button className="importantNote" onClick={()=>{
            onEndPlayer()
            }}>{t('description.finjugador')} ({player.name})</button><p />
    </div>);
}

function initControlTestValues(game, reset) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    GameUtils.init(newState.game, 
        GameUtils.getGameTypeControlTextValuesInit(game.gameType),
        GameUtils.getGameTypeFiascoControlTextValuesInit(game.gameType),
        reset);

    return newState;
}

export default CoreGame;