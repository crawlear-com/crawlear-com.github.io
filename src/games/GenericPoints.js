import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GameContext } from '../context/GameContext';

function GenericPoints({player, zone}) {
    const { t } = useTranslation(['main']);
    const { game } = React.useContext(GameContext);

    if(!game || !game.players.length) return <></>;
    const playerZone = game.players[player].zones[zone];


    return <div className="pointsText">
        {t('description.puntos')}: {playerZone.points}
    </div>;
}

export default GenericPoints;