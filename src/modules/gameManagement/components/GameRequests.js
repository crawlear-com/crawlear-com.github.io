import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/gameRequests.scss';
import iconLike from '../styles/img/iconLike.png';
import iconDislike from '../styles/img/iconDislike.png';

function GameRequests({user}) {
    const { t } = useTranslation();
    const [gameRequests, setGameRequests] = React.useState({});
    const fb = window.crawlear.fb;
    const gameRequestsRef = React.useRef({});
    let requestsList = [];

    function getUserGameRequestsOk(result) {
        setGameRequests(result);
    }

    function onRequestAdded(element) {
        gameRequestsRef.current = {...gameRequestsRef.current, ...element};
        setGameRequests({...gameRequestsRef.current});
    }

    function onRequestRemoved(key) {
        delete gameRequestsRef.current[key];
        setGameRequests({...gameRequestsRef.current});
    }

    React.useEffect(()=>{
        user.uid && fb.getUserGameRequests(user.uid, 
            getUserGameRequestsOk, 
            ()=>{},
            onRequestAdded,
            onRequestRemoved)
    },[])

    gameRequests && Object.keys(gameRequests).forEach((key)=>{
        requestsList.push(<div className="gameRequestsItem smallText">
            <span className="gameRequestsFrom">{t('description.peticionde')}: <span className="bold">{gameRequests[key].fromName}</span></span>
            <div className="gameRequestGameName">{t('description.parajuego')}: <span className="bold">{gameRequests[key].gameName}</span></div>

            <span className="acceptButton" onClick={()=>{
                fb.acceptGameRequest(user.uid, key)
            }}><img src={iconLike} alt="like icon"></img></span>
            <span className="rejectButton" onClick={()=>{
                fb.rejectGameRequest(user.uid, key)
            }}><img src={iconDislike} alt="dislike icon"></img></span>
        </div>);
    });

    if(requestsList.length>0) {
        return <div className="gameRequestsContainer rounded rounded1">
                    <div className="headerText bold">{t('description.peticionesdejuego')}</div>
                        {requestsList}
                </div>;
    } else {
        return <></>;
    }
}

export default GameRequests;