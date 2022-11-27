import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GameContext } from '../context/GameContext';
import { GameUtils } from '../../model/Game.ts';

function IsrccPoints({player, zone}) {
    const { t } = useTranslation();
    const { game } = React.useContext(GameContext);

    if(!game || !game.players.length) return <></>;
    const playerZone = game.players[player].zones[zone];
    const currentBonification = GameUtils.getZoneTotalBonification(playerZone.gateProgressionData, playerZone.gateProgression);

    return <>
        <div className="pointsText">{t('description.bonificacion')}: { currentBonification}</div>
        <div className="pointsText">{t('description.puntos')}: { playerZone.points }</div>
    </>;
}

export default IsrccPoints;