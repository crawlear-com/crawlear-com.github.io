import * as React from 'react'
import { Zone } from '../games/GameInterfaces';
import Utils from '../Utils';
import { useTranslation } from 'react-i18next';

import openIcon from '../resources/img/arrowdown.png';

interface GameResultTablePointsRowProps {
    icon: string,
    playerName: string,
    zone: Zone,
    numZone: number,
    gameType: number,
    zonesLength: number
}
function onClickZone(event: React.MouseEvent<HTMLTableDataCellElement>) {
    let element: HTMLElement | null = (event.target as HTMLElement);

    element = (element.tagName === 'IMG' ? element.parentElement : element);

    const zoneTr = element?.parentElement?.nextElementSibling;
    zoneTr?.classList.toggle("closed");
}

function GameResultTablePointsRow({ icon, playerName, numZone, zone, gameType }: GameResultTablePointsRowProps) {
    const { t } = useTranslation(['main'])

    return (<tr key={`${playerName}Zone${numZone}`}>
        <td>{icon}</td>
        <td onClick={onClickZone}>{`${t('description.zona')} ${numZone}`}
            <img className="iconArrowDown" src={ openIcon } alt="click open" /></td>
        <td className="gameListPoints">{ zone.totalPoints }</td>
        <td className="gameListPoints">{ zone.gateProgression }</td>
        <td className="gameListPoints">{ zone.gatesWithBonification ? zone.gatesWithBonification * -2 : '0' }
        </td>
        <td className="gameListPoints">{zone.simpathyPoints ? zone.simpathyPoints : "0"}
        </td>
        { gameType !== 1 ? <td className="gameListTime">{ Utils.printTime(Utils.millisToTime(zone.time)) }</td> : <></> }
    </tr>)
}

export default GameResultTablePointsRow