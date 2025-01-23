import * as React from 'react'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import { useTranslation } from 'react-i18next'
import { GAME_TYPE_GENERIC } from '../../../games/Game'
import { GameContext } from '../../../context/GameContext'

import "rc-slider/assets/index.css"
import '../styles/rcSlider.scss'

interface GateProgressionBoxProps {
  playerIndex: number,
  zoneIndex: number,
  onGateProgressionChange: any
}

function GateProgressionBox({ playerIndex, zoneIndex, onGateProgressionChange }: GateProgressionBoxProps) {
  const { t } = useTranslation(['main']);
  const { game, gameExtras } = React.useContext(GameContext);
  const SliderWithTooltip = createSliderWithTooltip(Slider);

  function onGateProgressionButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
      const target: EventTarget = event.target

      const isPlus = ((target as HTMLButtonElement).id === 'gatesPlusButton'),
          zones = game.players[playerIndex].zones,
          currentZone = zones[zoneIndex],
          numGates = game.gates[zoneIndex];

      if (isPlus) {
          if (currentZone.gateProgression < numGates) {
              onGateProgressionChange(currentZone.gateProgression+1);
          }
      } else {
          if (currentZone.gateProgression > 0) {
              onGateProgressionChange(currentZone.gateProgression-1);
          }
      }
  }
  const player = game.players[playerIndex],
    playerZone = player.zones[zoneIndex];

  return <div className="gateProgressionContainer controlTextContainer info rounded rounded2">
    {t('description.avancepuerta')}: {playerZone.gateProgression}
    <button id='gatesPlusButton' onClick={onGateProgressionButtonClick} className='buttonControlTextPlus'>+</button>
    <button id='gatesMinusButton' onClick={onGateProgressionButtonClick} className='buttonControlTextMinus'>-</button>
    <SliderWithTooltip
            step={1}
            min={0}
            max={game.gates[zoneIndex]}
            dots={true}
            value={playerZone.gateProgression}
            onChange={onGateProgressionChange}
            marks={gameExtras.generateSliderMarksFromGates(playerZone.gateProgressionData, playerZone.gateProgression)}
            tipFormatter={(value)=>{
                return playerZone.gateProgression < game.gates[zoneIndex] ?
                    String(value).concat('-').concat(playerZone.gateProgressionData[playerZone.gateProgression].gatePoints) :
                    '-';
            }}/>
  </div>

}

export default GateProgressionBox