import * as React from 'react'
import { Zone } from '../../games/GameInterfaces';
import ControlTextArrayVisualization from '../ControlTextArrayVisulization';
import { sumControlTextValues } from '../../games/GameUtils';
import { getGameTexts, getFiascoGameTexts } from '../../modules/gamePlayer/GamePlayerUtils';
import { useTranslation } from 'react-i18next';

interface GameResultTableZonePointsRowProps {
    gameType: number,
    zone: Zone
}

function GameResultTableZonePointsRow({ zone, gameType }: GameResultTableZonePointsRowProps) {
    const { t } = useTranslation(['main'])

    return (<tr className="closed">
        <td colSpan={7}>
            { zone.handicap!==0 ? <div className='controlTextValues'>{t('description.bonificacionaccesorios')}: {zone.handicap}</div> : <></> }
            <ControlTextArrayVisualization
                controlTextValues={sumControlTextValues(zone.gateProgressionData)}
                texts={getGameTexts(gameType, t)} />

            {zone.fiascoControlTextValues && zone.fiascoControlTextValues.filter(x => x > 0).length ?
                <>
                    <div className="left bold">{t('points.fiascos')}:</div>
                    <ControlTextArrayVisualization
                        controlTextValues={zone.fiascoControlTextValues}
                        texts={getFiascoGameTexts(gameType, t)} />
                </> :
                <></>}
        </td>
    </tr>)
}

export default GameResultTableZonePointsRow