import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { GameContext } from '../../../context/GameContext'
import Utils from '../../../Utils'
import { GameUtils } from '../../../games/Game'
import Analytics from '../../../Analytics'

interface PlayerHeaderBoxProps {
  zoneIndex: number,
  playerIndex: number
}

function PlayerHeaderBox({ zoneIndex, playerIndex }: PlayerHeaderBoxProps) {
  let fiasco = <></>
  const { t } = useTranslation(['main'])
  const { game } = React.useContext(GameContext)
  const player = game.players[playerIndex],
    playerZone = player.zones[zoneIndex]


  if (GameUtils.isFiasco(game, playerIndex, zoneIndex)) {
    Analytics.event('play', 'fiasco', player.name);
    fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
  }

  return  <>
    <div className="playersList">
      <div className="playerListItem importantNote rounded">
          <img src={player.avatar} alt="avatar"/>
          {player.name}
      </div>
      </div>
      <div className="controlTextContainer rounded rounded2">
          <div className="smallText">{t('description.zona')}: {zoneIndex + 1}</div>
          <div className="smallText">{t('description.puertas')}: {game.gates[zoneIndex]}</div>
          <div className="smallText">max {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(game.maxTime))}</div>
          <div className="smallText">max {t('description.puntos')}: {game.maxPoints}</div>
          <div className="bold pointsText">{t('description.total')}: { playerZone.totalPoints}</div>
          {fiasco}
    </div>
  </>
}

export default PlayerHeaderBox