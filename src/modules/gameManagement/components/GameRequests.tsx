import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useGameRequests from '../hooks/useGameRequests';

import '../styles/gameRequests.scss';
import iconLike from '../styles/img/iconLike.png';
import iconDislike from '../styles/img/iconDislike.png';

interface GameRequestsProps {
    user: User
}

function GameRequests({ user }: GameRequestsProps) {
    const { t } = useTranslation(['main']);
    const fb = window.crawlear.fb;
    let requestsList: Array<React.JSX.Element> = [];
    const [gameRequests] = useGameRequests(user.uid, t)

    if(gameRequests) {
        Array.from(gameRequests.keys()).forEach((key)=>{
            requestsList.push(<div key={key} className="gameRequestsItem smallText">
                <span className="gameRequestsFrom">{t('description.peticionde')}: <span className="bold">{gameRequests.get(key)?.fromName}</span></span>
                <div className="gameRequestGameName">{t('description.parajuego')}: <span className="bold">{gameRequests.get(key)?.gameName}</span></div>
                <span className="acceptButton" onClick={()=>{
                    fb.acceptGameRequest(user.uid, key)
                }}><img src={iconLike} alt="like icon"></img></span>
                <span className="rejectButton" onClick={()=>{
                    fb.rejectGameRequest(user.uid, key)
                }}><img src={iconDislike} alt="dislike icon"></img></span>
            </div>);
        });
    }

    if(requestsList.length>0) {
        return <div className="gameRequestsContainer rounded rounded1">
                    <div className="headerText bold">{t('description.peticionesdejuego')}</div>
                        { requestsList }
                </div>;
    } else {
        return <></>;
    }
}

export default GameRequests;