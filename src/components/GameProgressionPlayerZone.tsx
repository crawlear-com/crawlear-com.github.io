import * as React from 'react'
import { Zone } from "../games/GameInterfaces";
import { Player } from "../games/GameInterfaces";
import { status } from "./hooks/UseGameProgression";
import { useTranslation } from 'react-i18next';

interface GameProgressionPlayerZoneProps {
    zoneIndex: number,
    zones: Array<Zone>,
    selectedPlayer: number,
    selectedZone: number,
    player: Player,
    gameProgression: Array<any>,
    prepareOnClick: Function,
    resolveGameStatus: Function
}

function GameProgressionPlayerZone({ zoneIndex, zones, selectedPlayer, selectedZone, player, gameProgression, prepareOnClick, resolveGameStatus }: GameProgressionPlayerZoneProps) {
    const { t } = useTranslation(['main'])

    return zones.map((zone, zIndex) => {
        let className = player.id===selectedPlayer && zoneIndex===selectedZone ? 'colorGrey rounded' : 'rounded';

        if(gameProgression && gameProgression[player.group] && gameProgression[player.group][player.id]) {
            const currentStatus = gameProgression[player.group][player.id][zoneIndex].status
            const currentData = gameProgression[player.group][player.id][zoneIndex].data

            if (currentStatus === status.playing) {
                className += " colorOrange";
            } else if (currentStatus === status.repair) {
                className += " colorRed";
            } else if (currentStatus === status.done) {
                className += " colorGreen";
            } else if (currentStatus === status.waiting && currentData) {
                className += " colorClearGrey";
            }

            return (
            <span data-zone={ zoneIndex } key={`zone${player.name}${zoneIndex}${zIndex}`}
                onClick={ (event) => { prepareOnClick(event, player, zone); }} className={ className }>
                {t('description.zona')} {zoneIndex+1}
                <br />
                <div>{t('description.estado')}:</div>
                <div>{resolveGameStatus(t, currentStatus, currentData)}</div>
            </span>);
        } else {
            return <span key={`zone${player.name}${zoneIndex}${zIndex}`}></span>
        }
    })

}

export default GameProgressionPlayerZone