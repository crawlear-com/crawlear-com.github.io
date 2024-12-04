import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CompletedZonesByGroup from './CompletedZonesByGroup';
import useGameProgressionDirector from '../hooks/useGameProgressionDirector';
import { GameUtils } from '../../../games/Game';

import '../styles/GameProgressionDirector.scss';

function GameProgressionDirector({game, gameProgression}) {
    const { t } = useTranslation(['main']);
    const [requests, presenceRequestAccept] = useGameProgressionDirector(game.gid, t)
    const isCurrentUserIsOwner = GameUtils.isCurrentUserIsOwner(game.owner);
    const res = [];

    if (!isCurrentUserIsOwner) return <></>

    res.push(<div key={'zC'} className=''>{t('content.zonascompletadas')}</div>);
    res.push(<CompletedZonesByGroup key={game.name} gameProgression={gameProgression} numZones={game.zones} />)
    res.push(<p key={'pdp'} className='bold'>{t('description.peticionesdepresencia')}:</p>);

    if (!requests) {
        res.push(<p key={'npsp'} className=''>{t('description.nopeticionespresencia')}</p>);
    }

    requests && Array.from(requests.keys()).forEach((request, i)=>{
        const element = requests.get(request);

        res.push(<div key={`dR${i}`} className='directorRequestContainer blink'>
        <div>
            <div>{t('description.de')} {element.fromName}</div>
            <div>{t('description.zona')}: {element.zone+1}</div>
            <div>{t('description.jugador')}: {element.playerName}</div>
            <div>{t('description.estado')}: {element.status}</div>
        </div>
        <div>
            <button onClick={()=>{
                presenceRequestAccept(request);
            }}>{t('description.aceptar')}</button>
        </div></div>);
    });

    return <div key="dP" className="directorContainer rounded rounded3">
        <div className="bold">{t('description.directordepartida')}</div>
        <br />
        <>{ [res] }</>
        </div>
}

export default GameProgressionDirector;