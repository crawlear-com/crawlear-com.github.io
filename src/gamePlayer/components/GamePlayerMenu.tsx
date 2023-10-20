import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GameUtils } from '../../model/Game'
import { Game } from '../../model/Game'
import { Player, GameProgressionZone } from '../../model/GameInterfaces'
import PresenceButton from '../../components/PresenceButton'
import RepairProgression from '../../components/RepairProgression'
import GameProgressionDirector from '../../components/GameProgressionDirector'
import { GameProgressionContext } from '../../components/context/GameProgressionContext'
import GameProgression from '../../components/GameProgression'
import ErrorBox from '../../components/ErrorBox'
import GamePlayerUtils from '../GamePlayerUtils'
import { STATUS_DONE, STATUS_PLAYING, STATUS_WAITING, STATUS_REPAIR } from '../GamePlayerUtils'

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
    const [player, setPlayer] = React.useState<Player | null>(null);
    const [zone, setZone] = React.useState<number>(-1);
    const [error,setError] = React.useState<string>("");
    const [ gameProgression ] = React.useContext(GameProgressionContext);
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

    function onBeginPlayClick(): void {
        if (player && zone !== -1) {
            const pid: number = player.id
            const group: number = player.group
            const value: GameProgressionZone = gameProgression[group][pid][zone]
    
            if((value.status === STATUS_WAITING && window.confirm(t('content.quieresempezarzona'))) || 
                (value.status === STATUS_DONE && window.confirm(t('content.quiereseditarpartida'))) || 
                (value.status === STATUS_PLAYING && window.confirm(t('content.seguroeditarpartidaenjuego')))) {
                setError("");
                onBeginGame(player, zone)
            } else if (value.status === STATUS_PLAYING) {
                setError(t('error.juegoencurso'));
            } else if (value.status === STATUS_REPAIR) { 
                setError(t('error.reparacionencurso'));
            }
        }
    } 

    function onZoneClick(player: Player, zone: number) {
        setZone(zone);
        setPlayer(player);
        setError("");
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
