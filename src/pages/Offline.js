import * as React from 'react';
import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { OFFLINE_USER_UID } from '../games/Game';

import './styles/Offline.scss';

const body = window.document.body;
const STATE_CREATING = 0;
const STATE_PLAYING = 1;
const STATE_LANDING = 3;

const GameConfigurator = lazy(() => import('../modules/gameConfigurator/pages/GameConfigurator'))
const GamePlayer = lazy(() => import('../modules/gamePlayer/GamePlayer'))
const MainPageTextContent = lazy(() => import('./components/MainPageTextContent'))

function Offline() {
    const { t } = useTranslation(['main']);
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
        return <Suspense fallback={<div>Loading...</div>}>
            <GameConfigurator onGameCreated={onGameCreated}/>
        </Suspense>
    } else if(status === STATE_PLAYING) {
        return <Suspense fallback={<div>Loading...</div>}>
            <GamePlayer inGame={game} onBackButtonClick={goBackToMenuStatus} />
        </Suspense>
    } else {
        return <Suspense fallback={<div>Loading...</div>}>
            <MainPageTextContent />
            <div className="errorBoxContainer offlineContainer">{t('content.offlineMainText')}</div>
            <button onClick={onGameConfiguratorClick} className="importantNote">{t('description.crearoffline')}</button>
        </Suspense>;
    }
}

export const isOffline  = !navigator.onLine

export default Offline