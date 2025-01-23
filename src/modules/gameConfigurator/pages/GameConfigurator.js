import * as React from 'react'
import GameTypePicker from '../components/GameTypePicker'
import PlayerController from '../components/PlayerController'
import ErrorBox from '../../../components/ErrorBox'
import { useTranslation } from 'react-i18next'
import UseGameConfigurator from '../hooks/UseGameConfigurator'
import GameConfiguratorGameTypePickers from '../components/GameConfiguratorGameTypePickers'
import GameConfiguratorGameInfo from '../components/GameConfiguratorGameInfo'
import Analytics from '../../../Analytics'
import { isGameDataComplete } from '../../../games/GameUtils'

import '../styles/GameConfigurator.scss'

function GameConfigurator({preconfiguredGame, onGameCreated}) {
    const { t } = useTranslation(['main'])

    React.useEffect(() => {
        Analytics.pageview(`/gameconfigurator`)
    }, [])

    const [game, errorMessage, groups, onGameTypeChange, onLocationResolved,
        onJudgeNumerChange, onPlayerNumerChange, onMaxPointsChange,
        onMaxTimeChange, onZonesChange, onGatesChange, onNameChange,
        onGroupsChange, onIsPublicChange, onGameDirectorChange,
        onRandomizePlayersOrder, createGame] = UseGameConfigurator({ preconfiguredGame, onGameCreated })

    return (<>
        <ErrorBox message={errorMessage} />
        <GameConfiguratorGameInfo game={game} onIsPublicChange={onIsPublicChange} onLocationResolved={onLocationResolved} onNameChange={onNameChange} />
        <GameConfiguratorGameTypePickers onGameDirectorChange={onGameDirectorChange} onGameTypeChange={onGameTypeChange} onGatesChange={onGatesChange}
            onGroupsChange={onGroupsChange} onJudgeNumerChange={onJudgeNumerChange} onMaxPointsChange={onMaxPointsChange} onMaxTimeChange={onMaxTimeChange}
            onZonesChange={onZonesChange} groups={groups} game={game} />
        <PlayerController gameName={game.name}
            isForJudge={false}
            inPlayers={game.players}
            maxGroups={groups}
            onPlayerNumerChange={(players)=>{ onPlayerNumerChange && onPlayerNumerChange(players) }}/>
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