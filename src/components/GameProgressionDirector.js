import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameProgressionDirector.scss';

function GameProgressionDirector({game, gameProgression}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const requestsRef = React.useRef();
    const [requests, setRequests] = React.useState({});
    const res = [];
    
    res.push(<div key={'zC'} className=''>{t('content.zonascompletadas')}</div>);

    function onPresenceRequestAdded(key, value) {
        if (value.status === 'pending') {
            const newRequest = {};

            newRequest[key] = value;
            requestsRef.current = {...requestsRef.current, ...newRequest};
            setRequests(requestsRef.current);
        }
    }

    function onPresenceRequestChanged(key, value) {
        if (value.status === 'pending') {
            const newRequest = {};

            newRequest[key] = value;
            requestsRef.current = {...requestsRef.current, ...newRequest};
            setRequests(requestsRef.current);
        }
    }

    function presenceRequestAccept(requestKey) {
        if (window.confirm(t('content.aceptarpresencia'))) {
            const newRequests = {...requestsRef.current};

            delete newRequests[requestKey];
            setRequests(newRequests);
            requestsRef.current = newRequests;
            firebase.acceptDirectorPresenceRequest(game.gid, requestKey);    
        }
    }

    React.useEffect(()=>{
        firebase.getDirectorPresenceRequest(game.gid, onPresenceRequestAdded, onPresenceRequestChanged);
    }, []);

    for(let i=0; i<game.zones; i++) {
        let groupDone = [];

        Object.entries(gameProgression).forEach((group, gIndex)=>{
            let playersIngroupDone = 0;

            Object.entries(group[1]).forEach((player, pIndex)=>{
                if (player[1] && player[1][i] && player[1][i].status === 'done' && player[1][i].data) {
                    playersIngroupDone++;
                }    
            });

            if (playersIngroupDone === Object.entries(group[1]).length) {
                groupDone.push(<span key={`dG${i}`} className='directorGroup'>{t('description.grupo')} {gIndex +1}</span>);
            }
        });

        res.push(<div key={`dZ${i}`} className='directorZone horizontalScrolling'>
            {t('description.zona')} {i+1}: {groupDone}

        </div>);
    }

    res.push(<p key={'pdp'} className='bold'>{t('description.peticionesdepresencia')}:</p>);
    if (!requestsRef.current) {
        res.push(<p key={'npsp'} className=''>{t('description.nopeticionespresencia')}</p>);
    }

    requestsRef.current && Object.keys(requestsRef.current).forEach((request, i)=>{
        const element = requestsRef.current[request];

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

    return <>[res]</>;
}

export default GameProgressionDirector;