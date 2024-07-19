import * as React from 'react'
import Utils from '../../../Utils'
import BluetoothButton from './BluetoothButton'
import TimerControl from './TimerControl'
import { useTranslation } from 'react-i18next'
import { GameContext } from '../../../context/GameContext'

interface TimerBoxProps {
  playerZone: any,
  forceAction: boolean,
  setRepairStatus: React.MouseEventHandler<HTMLButtonElement>, 
  onTimerChange: Function, 
  onTimeFiasco: Function, 
  onPointBecauseLastMinute: Function
}

function TimerBox({ playerZone, forceAction, setRepairStatus, onTimerChange, onTimeFiasco, onPointBecauseLastMinute  }: TimerBoxProps) {
  const { t } = useTranslation(['main'])
  const { game } = React.useContext(GameContext);

  return <div className="controlTextContainer rounded rounded2">
    {Utils.isIphone() ? <></> : <BluetoothButton /> }
    {game.courtesyTime>0 ? 
        <div className="pointsText">{t('description.puntos')} {t('description.portiempo')}: { playerZone.simpathyPoints}</div> :
        <></>}            
    <button className='repairButton importantNote' onClick={setRepairStatus}>{t('description.iniciarreparacion')}</button>

    <TimerControl
      courtesyTime={game.courtesyTime}
      startTime={playerZone.time}
      label={t('description.tiempo')}
      forceAction={forceAction}
      onTimerChange={onTimerChange}
      onTimeFiasco={onTimeFiasco}
      onPointBecauseLastMinute={onPointBecauseLastMinute}
      maxTime={game.maxTime} />
  </div>
}

export default TimerBox