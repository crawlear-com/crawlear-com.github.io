import * as React from 'react'
import { Game } from "../../../games/Game"
import { isCurrentUserIsOwner } from '../../../games/GameUtils'
import PresenceButton from './PresenceButton';
import { Player } from '../../../games/GameInterfaces';

interface JudgeActionsProps {
  game: Game,
  player: Player,
  zone: number,
  jidGroup: number,
  onBeginPlayClick: React.MouseEventHandler<HTMLButtonElement>,
  t: Function
}

function JudgeActions({ game, player, zone, jidGroup, onBeginPlayClick, t }: JudgeActionsProps) {
  if (game.jids.find(elem=>elem===window.crawlear.user.uid)) {
    let button = <></>;

    if ((player && player.group === jidGroup) || isCurrentUserIsOwner(game.owner)) {
        button = <button onClick={onBeginPlayClick} className="playButton importantNote">{t("description.empezar")}</button>;
    }
    return <>
        {t('description.jugadorseleccionado')}: { player ? player.name : "" } <br />
        {t('description.zonaseleccionada')}: { zone !== -1 ? zone + 1 : "" }<br />
        {button}
        <PresenceButton game={game}
            zone={zone}
            playerName={player && player.name}
            fromName={window.crawlear.user.displayName} />
    </>;
  }

  return <></>
}

export default JudgeActions