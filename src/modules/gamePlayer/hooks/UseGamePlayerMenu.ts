import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Player } from '../../../games/GameInterfaces'
import { GameProgressionContext } from '../../../context/GameProgressionContext'
import { STATUS_DONE, STATUS_PLAYING, STATUS_WAITING, STATUS_REPAIR } from '../GamePlayerUtils'
import { GameProgressionZone } from '../../../games/GameInterfaces'

function UseGamePlayerMenu(onBeginGame: Function) {
  const [player, setPlayer] = React.useState<Player | null>(null)
  const [zone, setZone] = React.useState<number>(-1)
  const [error,setError] = React.useState<string>("")
  const [ gameProgression ] = React.useContext(GameProgressionContext)
  const { t } = useTranslation();

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

  return [player,
          zone,
          error,
          gameProgression,
          onZoneClick,
          onBeginPlayClick]
}

export default UseGamePlayerMenu