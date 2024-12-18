import * as React from 'react'
import GameTypePicker from './GameTypePicker'
import MaxTimeAndPointsPicker from './MaxTimeAndPointsPicker'
import ZonesPicker from './ZonesPicker'
import type { Game } from '../../../games/Game'
import { GAME_TYPE_KING } from '../../../games/Game'
import GateProgressionPicker from './GateProgressionPicker'
import GroupsPicker from './GroupsPicker'
import PlayerController from './PlayerController'
import { isOffline } from '../../../pages/Offline'

interface GameConfiguratorGameTypePickersProps {
    game: Game,
    onGameTypeChange: Function,
    onZonesChange: Function,
    onGatesChange: Function,
    onMaxPointsChange: Function,
    onMaxTimeChange: Function,
    onGroupsChange: Function,
    onGameDirectorChange: Function,
    onJudgeNumerChange: Function,
    groups: number
}

function GameConfiguratorGameTypePickers({ game, onGameTypeChange, onZonesChange, onJudgeNumerChange, groups,
    onGatesChange, onMaxPointsChange, onMaxTimeChange, onGroupsChange, onGameDirectorChange }: GameConfiguratorGameTypePickersProps) {
    const extraConfigurationComponents: Array<React.JSX.Element> = []

    if (game.gameType !== GAME_TYPE_KING) {
        extraConfigurationComponents.push(<ZonesPicker key={1}
            value={game.zones}
            onZonesChange={onZonesChange} />);
        extraConfigurationComponents.push(<GateProgressionPicker key={2}
            zones={game.zones}
            value={10}
            onGatesChange={onGatesChange} />);
        extraConfigurationComponents.push(<GroupsPicker key={3}
            onGroupsChange={onGroupsChange}
            value={1}
            minValue={1}
            maxValue={10} />)
        if (!isOffline) {
            extraConfigurationComponents.push(<PlayerController key={4}
                isForJudge={true}
                maxGroups={groups}
                inPlayers={game.judges}
                gameName={game.name}
                onGameDirectorChange={onGameDirectorChange}
                onPlayerNumerChange={onJudgeNumerChange} />);
        }
    }
    return (<><GameTypePicker selectedGameType={game.gameType}
        onGameTypeChange={(selectedIndex: number) => { onGameTypeChange(selectedIndex) }} />
        <MaxTimeAndPointsPicker key={0}
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange}
            time={game.maxTime}
            points={game.maxPoints}
            showTimePicker={true} />
        { extraConfigurationComponents }
        </>)
}

export default GameConfiguratorGameTypePickers