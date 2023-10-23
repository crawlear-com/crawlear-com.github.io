import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GameUtils } from '../../../model/Game'
import { Game } from '../../../model/Game'
import PresenceButton from './PresenceButton'
import RepairProgression from './RepairProgression'
import GameProgressionDirector from '../../../components/GameProgressionDirector'
import GameProgression from '../../../components/GameProgression'
import ErrorBox from '../../../components/ErrorBox'
import GamePlayerUtils from '../GamePlayerUtils'
import UseGamePlayerMenu from '../hooks/UseGamePlayerMenu'

interface GamePlayerMenuProps {
    game: Game,
    jidGroup: number,
    zone: number,
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
    const directorProgression = [];
    const isCurrentUserIsOwner = GameUtils.isCurrentUserIsOwner(game.owner);
    const { t } = useTranslation();
    let judgeProgression;
    const [player, zone, error, gameProgression, onZoneClick, onBeginPlayClick] = UseGamePlayerMenu(onBeginGame)

    if (isCurrentUserIsOwner) {
        directorProgression.push(<div key="dP" className="directorContainer rounded rounded3">
                <div className="bold">{t('description.directordepartida')}</div>
                <br />
                <GameProgressionDirector game={game} gameProgression={gameProgression} />
            </div>);
    }

    if (game.jids.find(elem=>elem===window.crawlear.user.uid)) {
        let buton = <></>;

        if ((player && player.group === jidGroup) || isCurrentUserIsOwner) {
            buton = <button onClick={onBeginPlayClick} className="playButton importantNote">{t("description.empezar")}</button>;
        }
        judgeProgression = <>
            {t('description.jugadorseleccionado')}: { player ? player.name : "" } <br />
            {t('description.zonaseleccionada')}: { zone !== -1 ? zone + 1 : "" }<br />
            {buton}
            <PresenceButton game={game} 
                zone={zone}
                playerName={player && player.name}
                fromName={window.crawlear.user.displayName} />
        </>;
    }

    return <>
        {directorProgression}
        <ErrorBox message={error} />
        <div className="trackJudgeContainer rounded rounded3">
            <div className="bold">{t('description.juezdepista')}</div>
            <GameProgression onZoneClick={onZoneClick} 
                game={game}
                jidGroup={jidGroup} />
            <ErrorBox message={error} />
            {judgeProgression}
        </div>
        <div className="tendJudgeContainer rounded rounded3">
            <div className="bold">{t('description.juezdecarpa')}</div>
            <RepairProgression 
                gameProgression={gameProgression}
                game={game}
                onRepairEnd={GamePlayerUtils.onRepairEnd}
            />
        </div>
        <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button>
        { GameUtils.isCurrentUserIsOwner(game.owner) && 
          GamePlayerUtils.isGroupGameFinished(game, gameProgression, jidGroup) ? 
            <button className="closeButton importantNote" onClick={() => {
                onCloseButonClick(game)
            }}>{t('description.cerrarpartida')}</button> : 
            <></> }
    </>
}

export default GamePlayerMenu
