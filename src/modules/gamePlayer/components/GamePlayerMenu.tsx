import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { isCurrentUserIsOwner } from '../../../games/GameUtils'
import { Game } from '../../../games/Game'
import RepairProgression from './RepairProgression'
import GameProgressionDirector from './GameProgressionDirector'
import GameProgression from '../../../components/GameProgression'
import ErrorBox from '../../../components/ErrorBox'
import { isGroupGameFinished, onRepairEnd } from '../GamePlayerUtils'
import UseGamePlayerMenu from '../hooks/UseGamePlayerMenu'
import JudgeActions from './JudgeActions'

interface GamePlayerMenuProps {
    game: Game,
    jidGroup: number,
    onBeginGame: Function,
    onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>,
    onCloseButonClick: Function
}

function GamePlayerMenu({ game,
    jidGroup,
    onBeginGame,
    onBackButtonClick,
    onCloseButonClick
}: GamePlayerMenuProps) {
    const { t } = useTranslation(['main']);
    const [player, zone, error, gameProgression, onZoneClick, onBeginPlayClick] = UseGamePlayerMenu(onBeginGame)

    return <>
        <GameProgressionDirector game={game} gameProgression={gameProgression} />
        <ErrorBox message={error} />
        <div className="trackJudgeContainer rounded rounded3">
            <div className="bold">{t('description.juezdepista')}</div>
            <GameProgression onZoneClick={onZoneClick}
                game={game}
                jidGroup={jidGroup} />
            <ErrorBox message={error} />
            <JudgeActions t={t} game ={game} player={player} zone={zone} jidGroup={jidGroup} onBeginPlayClick={onBeginPlayClick} />
        </div>
        <div className="tendJudgeContainer rounded rounded3">
            <div className="bold">{t('description.juezdecarpa')}</div>
            <RepairProgression
                gameProgression={gameProgression}
                gid={game.gid}
                players={game.players}
                onRepairEnd={onRepairEnd}
            />
        </div>
        <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
        { isCurrentUserIsOwner(game.owner) &&
          isGroupGameFinished(game, gameProgression, jidGroup) ?
            <button className="closeButton importantNote" onClick={() => {
                onCloseButonClick(game)
            }}>{t('description.cerrarpartida')}</button> :
            <></> }
    </>
}

export default GamePlayerMenu
