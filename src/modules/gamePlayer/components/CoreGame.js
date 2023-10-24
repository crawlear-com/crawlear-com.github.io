import * as React from 'react'
import { useTranslation } from 'react-i18next'
import UseCoreGame from '../hooks/UseCoreGame'
import PlayerHeaderBox from './PlayerHeaderBox'
import TimerBox from './TimerBox'
import GateProgressionBox from './GateProgressionBox'

import '../styles/CoreGame.scss'

function CoreGame({
            children,
            onGameEnd,
            onRepair,
            playerIndex, 
            zoneIndex
    }) {
    const { t } = useTranslation();
    const childrenContent = [];
    const [state, onTimerChange, onChangeScore, onReset, onEndPlayer, onGateProgressionChange, 
        onFiascoChangeScore, onPointBecauseLastMinute, 
        onTimeFiasco, setRepairStatus] = UseCoreGame(onGameEnd, onRepair, playerIndex, 
            zoneIndex)
    
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

    const currentGame = state.game,
        player = currentGame.players[playerIndex],
        playerZone = player.zones[zoneIndex];

    return (
    <div className="gameContainer">
        <PlayerHeaderBox playerIndex={playerIndex}
            zoneIndex={zoneIndex} />

        <TimerBox playerZone={playerZone} 
            forceAction={state.forceAction} 
            setRepairStatus={setRepairStatus}
            onTimerChange={onTimerChange}
            onTimeFiasco={onTimeFiasco}
            onPointBecauseLastMinute={onPointBecauseLastMinute} />

        <GateProgressionBox playerIndex={playerIndex}
            zoneIndex={zoneIndex}
            onGateProgressionChange={onGateProgressionChange} />
        
        <div className="controlTextContainer rounded rounded2">
            {childrenContent[2]}
            {playerZone.gateProgression < currentGame.gates[zoneIndex] ? childrenContent[0] : <></>}
            {playerZone.gateProgression < currentGame.gates[zoneIndex] ? childrenContent[1] : <></>}
        </div>

        {childrenContent[3]}

        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
        <button className="importantNote" onClick={()=>{
            onEndPlayer()
            }}>{t('description.finjugador')} ({player.name})</button><p />
    </div>);
}


export default CoreGame;