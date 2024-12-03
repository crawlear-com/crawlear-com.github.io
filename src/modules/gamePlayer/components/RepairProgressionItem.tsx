import * as React from 'react'
import RepairTimer from './RepairTimer'
import { useTranslation } from 'react-i18next'
import { GameProgressionZone } from '../../../games/GameInterfaces'

interface RepairProgressionItemProps {
    setTime: string,
    gid: string,
    playerId: number,
    playerAvatar: string,
    group: number,
    zoneIndex: number,
    zone: GameProgressionZone,
    onRepairEnd: Function
}

function RepairProgressionItem({ setTime, gid, playerId, group, zoneIndex, zone, onRepairEnd, playerAvatar }: RepairProgressionItemProps) {
    const { t } = useTranslation(['main'])
    const date = new Date(setTime).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit'
    })

    function prepareOnRepairEnd(gid: string, playerId: number, group: number, zoneIndex: number, zone: GameProgressionZone) {
        if (window.confirm(t('content.finalizarreparacion'))) {
            onRepairEnd && onRepairEnd(gid, playerId, group, zoneIndex, zone);
        }
    }

    return <div key={playerId} className='repairProgressionItem rounded rounded2'>
        <div className='repairProgressionItemHead'>
            <img src={playerAvatar} alt="player avatar" />
            <span className='repairProgressionItemZone'>{t('description.zona')}: {zoneIndex+1}</span>
            <span className="gameProgressionItemHour">
                {t('description.enreparaciondesde')} {date}
            </span>
        </div>
        <RepairTimer onTimeFiasco={() => {}} onRepairTimerChange={() => {}} />
        <button onClick={()=>{
            prepareOnRepairEnd(gid, playerId, group, zoneIndex, zone);
        }} className="importantNote">{t('description.fin')}</button>
    </div>

}

export default RepairProgressionItem
