import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GameUtils } from '../../model/Game'
import { Game } from '../../model/Game'
import PresenceButton from '../../components/PresenceButton'
import GameProgressionDirector from '../../components/GameProgressionDirector'
import { GameProgressionData } from '../../model/GameInterfaces'
import { Player } from '../../model/GameInterfaces'
import { GameProgressionContext } from '../../components/context/GameProgressionContext'
import GameProgression from '../../components/GameProgression'
import ErrorBox from '../../components/ErrorBox'
import GamePlayerUtils from '../GamePlayerUtils'

interface GamePlayerMenuProps {
    game: Game,
    gameProgression: GameProgressionData,
    player: Player | number,
    jidGroup: number,
    zone: number,
    onBeginGame: React.MouseEventHandler<HTMLButtonElement>
}

function GamePlayerMenu({ game, 
    gameProgression, 
    player, 
    jidGroup,
    zone,
    onBeginGame }: GamePlayerMenuProps) {
    const directorProgression = [];
    const isCurrentUserIsOwner = GameUtils.isCurrentUserIsOwner(game.owner);
    const { t } = useTranslation();
    let judgeProgression;

    if (isCurrentUserIsOwner) {
        directorProgression.push(<div key="dP" className="directorContainer rounded rounded3">
                <div className="bold">{t('description.directordepartida')}</div>
                <br />
                <GameProgressionDirector game={game} gameProgression={gameProgression} />
            </div>);
    }

    if (game.jids.find(elem=>elem===window.crawlear.user.uid)) {
        let buton = <></>;

        if (player.group === jidGroup || isCurrentUserIsOwner) {
            buton = <button onClick={onBeginGame} className="playButton importantNote">{t("description.empezar")}</button>;
        }
        judgeProgression = <>
            {t('description.jugadorseleccionado')}: {player !==-1 ? player.name : ""} <br />
            {t('description.zonaseleccionada')}: {zone !==-1 ? zone+1 : ""}<br />
            {buton}
            <PresenceButton fromUid={window.crawlear.user.uid} 
                game={game} 
                zone={zone}
                playerName={player.name}
                fromName={window.crawlear.user.displayName} />
        </>;
    }


    

    return <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
        
        {directorProgression}
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
            <button className="closeButton importantNote" onClick={onClosePlayButtonClick}>{t('description.cerrarpartida')}</button> : 
            <></> }
    </GameProgressionContext.Provider>
}

export default GamePlayerMenu
