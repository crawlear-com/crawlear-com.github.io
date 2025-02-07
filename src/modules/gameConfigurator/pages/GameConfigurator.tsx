import * as React from 'react'
import PlayerController from '../components/PlayerController'
import ErrorBox from '../../../components/ErrorBox'
import { useTranslation } from 'react-i18next'
import UseGameConfigurator from '../hooks/UseGameConfigurator'
import GameConfiguratorGameTypePickers from '../components/GameConfiguratorGameTypePickers'
import GameConfiguratorGameInfo from '../components/GameConfiguratorGameInfo'
import GoogleAnalytics from '../../../analytics/GoogleAnalytics'
import { isGameDataComplete } from '../../../games/GameUtils'
import type { Game } from '../../../games/Game'
import type { Player } from '../../../games/GameInterfaces'

import '../styles/GameConfigurator.scss'

interface GameConfiguratorProps {
    preconfiguredGame?: Game,
    onGameCreated?: Function
}

function GameConfigurator({ preconfiguredGame, onGameCreated }: GameConfiguratorProps) {
    const { t } = useTranslation(['main'])

    const [game, errorMessage, groups, onGameTypeChange, onLocationResolved,
        onJudgeNumerChange, onPlayerNumerChange, onMaxPointsChange,
        onMaxTimeChange, onZonesChange, onGatesChange, onNameChange,
        onGroupsChange, onIsPublicChange, onGameDirectorChange,
        onRandomizePlayersOrder, createGame] = UseGameConfigurator(preconfiguredGame, onGameCreated)

    return (<>
        <GoogleAnalytics page="/gameConfigurator" />
        <ErrorBox message={errorMessage} />
        <GameConfiguratorGameInfo game={game} onIsPublicChange={onIsPublicChange} onLocationResolved={onLocationResolved} onNameChange={onNameChange} />
        <GameConfiguratorGameTypePickers onGameDirectorChange={onGameDirectorChange} onGameTypeChange={onGameTypeChange} onGatesChange={onGatesChange}
            onGroupsChange={onGroupsChange} onJudgeNumerChange={onJudgeNumerChange} onMaxPointsChange={onMaxPointsChange} onMaxTimeChange={onMaxTimeChange}
            onZonesChange={onZonesChange} groups={groups} game={game} />
        <PlayerController gameName={game.name}
            isForJudge={false}
            inPlayers={game.players}
            maxGroups={groups}
            onGameDirectorChange={onGameDirectorChange}
            onPlayerNumerChange={(players: Array<Player>)=>{ onPlayerNumerChange && onPlayerNumerChange(players) }}/>
        <input type="checkbox" onChange={onRandomizePlayersOrder}></input>{t('description.ordenRamdomJugadores')}
        <p>
            <button className="importantNote"
                disabled={ isGameDataComplete(game) }
                onClick={() => { createGame(groups, game) }}>{t('description.crearjuego')}</button>
            <button onClick={() => { window.location.reload(); }}>{t('description.atras')}</button>
        </p>
    </>)
}


export default GameConfigurator;