import * as React from 'react';
import { useTranslation } from 'react-i18next';

function PresenceButton({game, playerName, fromName, zone}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const content = [],
        gid = game.gid,
        requestsItems = [],
        [requests, setRequests] = React.useState({});

    function onRequestPreStatusChange(data, key) {
        if (data.status === 'pending') {
            const newRequests = {...requests};

            newRequests[key] = data;
            setRequests(newRequests);
        } else if (data.status === 'accepted') { 
            const newRequests = {...requests};

            delete newRequests[key];
            setRequests(newRequests);
        }
        
    }

    function createDirectorPresenceRequest() {
        if (window.confirm(t('content.quieresenviarpeticiondepresencia'))) {
            firebase.setDirectorPresenceRequest(gid, zone, playerName, fromName, onRequestPreStatusChange);
        }
    }

    if(gid && playerName && fromName && zone>=0 && game.owner !== window.crawlear.user.uid && Object.entries(requests).length===0) {
        content.push(<button onClick={createDirectorPresenceRequest}>{t('description.reclamarpresencia')}</button>);
    }

    Object.keys(requests).forEach((request, index)=>{
        requestsItems.push(<div>{requests[request].status}</div>);
    });

    return <div className="presenceButtonContainer">
        {content}
        {requestsItems}
    </div>;
}

export default PresenceButton;