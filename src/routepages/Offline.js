"use client"

import * as React from 'react';
import { lazy } from 'react'
import { useTranslation } from 'next-i18next'
import { OFFLINE_USER_UID } from '../games/Game'
import SuspenseComponent from '../SuspenseComponent';

import './styles/Offline.scss';

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
        const fbBase = window.crawlear.fbBase

        fbBase.getFullFirebase(()=>{})
        window.document.body.classList.add('offline');
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
        return <SuspenseComponent lazyComponent={<GameConfigurator onGameCreated={onGameCreated}/>} />
    } else if(status === STATE_PLAYING) {
        return <SuspenseComponent lazyComponent={<GamePlayer inGame={game} onBackButtonClick={goBackToMenuStatus} />} />
    } else {
        return <SuspenseComponent lazyComponent={<><MainPageTextContent />
            <div className="errorBoxContainer offlineContainer">{t('content.offlineMainText')}</div>
            <button onClick={onGameConfiguratorClick} className="importantNote">{t('description.crearoffline')}</button></>
        } />
    }
}

export const isOffline  = (typeof window !== 'undefined')? !navigator.onLine : false


export default Offline