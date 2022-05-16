import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import Utils from '../../Utils';
import Analytics from '../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import AecarGameScores from './AecarGameScores';

import "rc-slider/assets/index.css";
import '../../resources/css/games/AecarGame.scss'
import '../../resources/css/rcSlider.scss'

function AecarGame({game, 
    onGameEnd, 
    onRepair,
    playerIndex, 
    zoneIndex}) {
    const { t } = useTranslation();
    const SliderWithTooltip = createSliderWithTooltip(Slider);
    const [state, setState] = React.useState(()=>{ 
        AecarGameScores.texts = AecarGameScores.texts.map(function(text) {
            return t(text);
        });
        AecarGameScores.fiascoTexts = AecarGameScores.fiascoTexts.map(function(text) {
            return t(text);
        });
         
        return initControlTestValues(game);
    });
    
    React.useEffect(() => {
        Analytics.pageview('/aecar/');
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
            playerZone = players[player].zones[zoneIndex];

        if (!isFiasco(state, player, zoneIndex) || (playerZone.points + value <= game.maxPoints)) {
            playerZone.controlTextValues = [...playerZone.controlTextValues];
            playerZone.controlTextValues[control] += value;
            playerZone.points += value;
        }

        if (playerZone.points >= game.maxPoints) { 
            newState.forceAction = 'pause';
        }
        //GameUtils.getGatesPointExtras(playerZone);
        setState(newState);
    }

    function onReset() {
        let newState = {...state },
            playerZone = game.players[playerIndex].zones[zoneIndex];

        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[playerIndex].name);
        newState = initControlTestValues(newState.game, true);
        playerZone.time = 0;
        playerZone.points = 0;
        playerZone.battery = false;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            game = newState.game,
            players = game.players,
            playerZone = game.players[playerIndex].zones[zoneIndex];
            
        window.scrollTo(0,0);

        if (isFiasco(state, playerIndex, zoneIndex)) {
                playerZone.time = (game.maxTime > 0 ? game.maxTime : state.tickTime);
                playerZone.totalPoints = (game.maxPoints > 0 ? game.maxPoints : playerZone.points);
        } else {
            playerZone.time = state.tickTime;
            playerZone.totalPoints = playerZone.points;
        }

        newState.forceAction = 'stop';
        setState(newState);

        Analytics.event('play', 'endPlayer', players[playerIndex].name);
        onGameEnd(game);
    }

    function onGateProgressionChange(value) {
        const newState = {...state},
            zones = newState.game.players[playerIndex].zones;

        zones[zoneIndex].gateProgression = value;
        if(value === game.gates[zoneIndex]) {
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
        playerZone.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
        setState(newState);
    }


    function onTimeFiasco() {

    }

    function onPointBecauseLastMinute() {

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

    if (state.game.players.length>0) {
        let fiasco = <></>;
        const game = state.game,
            player = game.players[playerIndex],
            playerZone = player.zones[zoneIndex],

            controlTextArray = ControlTextArray({
                controlTextValues: playerZone.controlTextValues,
                player: playerIndex,
                steps: AecarGameScores.steps,
                maxValues: AecarGameScores.maxValues,
                texts: AecarGameScores.texts,
                onValueChange: onChangeScore,
                isClosed: false
            }),
            fiascoControlTextArray = playerZone.gateProgression < game.gates[zoneIndex] ? 
                <ControlTextArray
                    textToken={'points.fiascos'}
                    controlTextValues={playerZone.fiascoControlTextValues}
                    steps={AecarGameScores.fiascoSteps}
                    maxValues={AecarGameScores.fiascoMaxValues}
                    texts={AecarGameScores.fiascoTexts}
                    player={playerIndex}
                    isClosed={true}
                    onValueChange={onFiascoChangeScore}
                />: <>{t('content.pulsafinjugador')}</>;

        if (isFiasco(state, playerIndex, zoneIndex)) {
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
                {t('points.puertaprogresion')}: {game.gates[zoneIndex]}<br />
                {t('description.tiempomaximo')}: {Utils.printTime(Utils.millisToTime(game.maxTime))} <br />
                {t('description.puntosmaximo')}: {game.maxPoints}<br />
            </div>
            <div className="rounded rounded2">                                
                <TimerControl 
                    courtesyTime={0}
                    startTime={playerZone.time}
                    onTimeFiasco={onTimeFiasco}
                    onPointBecauseLastMinute={onPointBecauseLastMinute}
                    label={t('description.tiempo')}
                    onTimerChange={onTimerChange}
                    forceAction={state.forceAction}
                    maxTime={game.maxTime} />
                <button className='repairButton importantNote' onClick={setRepairStatus}>{t('description.iniciarreparacion')}</button>
            </div>
            <div className="controlTextContainer rounded rounded1">
                {t('description.zona')}: {zoneIndex + 1}<br />
                {t('description.avancepuerta')}: {playerZone.gateProgression}<br />
                <SliderWithTooltip
                    step={1}
                    min={0}
                    max={game.gates[zoneIndex]}
                    dots={true}
                    value={playerZone.gateProgression}
                    onChange={onGateProgressionChange}
                    tipFormatter={(value)=>{ return value; }}
                />

                {fiasco}
                <div className="pointsText">{t('description.puntos')}: { playerZone.points}</div>
                {controlTextArray}
                {fiascoControlTextArray}
            </div>
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={()=>{
                onEndPlayer()
                }}>{t('description.finjugador')} ({player.name})</button><p />
        </div>
    }
}

function isFiasco(state, player, zone) {
    const game = state.game;
    const playerZone = game.players[player].zones[zone];

    return ((game.maxPoints <= playerZone.points && game.maxPoints > 0) || 
        (game.maxTime <= state.tickTime && game.maxTime > 0) || playerZone.battery);
}

function initControlTestValues(game, reset) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    //GameUtils.init(newState.game, reset);
    newState.game.players.forEach((player)=>{
        if (!player.zones || player.zones.length===0 || reset) {
            player.zones = [];

            for (let k=0; k<game.zones;k++) {
                const zone = {
                    points: 0,
                    time: 0,
                    judgedBy: [],
                    controlTextValues: new Array(23).fill(0),
                    fiascoControlTextValues: new Array(2).fill(0)
                };
                player.zones.push(zone);
            }
        }
    });

    return newState;
}

export default AecarGame;