import * as React from 'react'
import { Zone } from '../games/GameInterfaces';
import Utils from '../Utils';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import { GameUtils } from '../games/Game';
import { getGameTexts, getFiascoGameTexts } from '../modules/gamePlayer/GamePlayerUtils';
import { useTranslation } from 'react-i18next';

interface GameResultTableZonePointsRowProps {
    gameType: number,
    playerName: string,
    zone: Zone,
    numZone: number
}

function GameResultTableZonePointsRow({ zone, numZone, playerName, gameType }: GameResultTableZonePointsRowProps) {
    const { t } = useTranslation(['main'])

    return (<tr key={`${playerName}${numZone}`} className="closed">
        <td colSpan={7}>
            {zone.handicap!==0 ? <div className='controlTextValues'>{t('description.bonificacionaccesorios')}: {zone.handicap}</div> : <></>}
            <ControlTextArrayVisualization
                controlTextValues={GameUtils.sumControlTextValues(zone.gateProgressionData)}
                texts={getGameTexts(gameType, t)} />

            {zone.fiascoControlTextValues && zone.fiascoControlTextValues.filter(x => x > 0).length ?
                <>
                    <div className="left bold">{t('points.fiascos')}:</div>
                    <ControlTextArrayVisualization
                        controlTextValues={zone.fiascoControlTextValues}
                        texts={Utils.tokenToTexts(t,getFiascoGameTexts(gameType, t))} />
                </> :
                <></>}
        </td>
    </tr>)
}

export default GameResultTableZonePointsRow