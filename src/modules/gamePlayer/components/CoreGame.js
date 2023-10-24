import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';
import Analytics from '../../../Analytics';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { GameUtils, GAME_TYPE_GENERIC } from '../../../model/Game';
import Utils from '../../../Utils';
import BluetoothButton from './BluetoothButton.js';

import "rc-slider/assets/index.css";
import '../styles/CoreGame.scss'
import '../styles/rcSlider.scss'

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
    const childrenContent = [];
    const [state, onTimerChange, onChangeScore, onReset, onEndPlayer, onGateProgressionChange, 
        onGateProgressionButtonClick, onFiascoChangeScore, onPointBecauseLastMinute, onTimeFiasco, setRepairStatus] = UseCoreGame(game,
            onGameEnd, onRepair, playerIndex, zoneIndex, gameExtras)
    
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
            {Utils.isIphone() ? <></> : <BluetoothButton /> }
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


export default CoreGame;