import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameConfigurator from '../modules/gameConfigurator/pages/GameConfigurator';
import GamePlayer from '../modules/gamePlayer/GamePlayer';
import { OFFLINE_USER_UID } from '../games/Game';
import MainPageTextContent from './components/MainPageTextContent';

import './styles/Offline.scss';

const body = window.document.body;
const STATE_CREATING = 0;
const STATE_PLAYING = 1;
const STATE_LANDING = 3;

function Offline() {
    const { t } = useTranslation();
    const [status, setStatus] = React.useState(STATE_LANDING);
    const [game, setGame] = React.useState(null);

    React.useEffect(()=>{
        body.classList.add('offline');
        window.crawlear = window.crawlear || {};
        window.crawlear.user = {
            uid: OFFLINE_USER_UID
        };
    },[]);

    function onGameConfiguratorClick() {
        setStatus(STATE_CREATING);
    }

    function goBackToMenuStatus() {
        setStatus(STATE_LANDING);
    }

    function onGameCreated(game) {
        setGame(game);
        setStatus(STATE_PLAYING);
    }

    if(status === STATE_CREATING) {
        return <GameConfigurator onGameCreated={onGameCreated}/>
    } else if(status === STATE_PLAYING) {
        return <GamePlayer inGame={game} onBackButtonClick={goBackToMenuStatus} />
    } else {
        return <>
            <MainPageTextContent />
            <div className="errorBoxContainer offlineContainer">{t('content.offlineMainText')}</div>
            <button onClick={onGameConfiguratorClick} className="importantNote">{t('description.crearoffline')}</button>
        </>;
    }
}

export const isOffline  = !navigator.onLine

export default Offline