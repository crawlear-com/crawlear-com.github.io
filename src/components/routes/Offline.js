import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GameConfigurator from './GameConfigurator';
import GamePlayer from '../GamePlayer';

import '../../resources/css/Offline.scss';

const body = window.document.body;
const STATE_CREATING = 0;
const STATE_PLAYING = 1;
const STATE_LANDING = 3;

function Offline() {
    const [status, setStatus] = React.useState(STATE_LANDING);
    const [game, setGame] = React.useState(null);
    const { t } = useTranslation();
    const navigate = useNavigate();

    React.useEffect(()=>{
        body.classList.add('offline');
    },[]);

    function onGameConfiguratorClick() {
        navigate('/gameconfigurator');
    }

    function onGameCreated(game) {
        setGame(game);
        setStatus(STATE_PLAYING);
    }

    if(status === STATE_CREATING) {
        return <GameConfigurator onGameCreated={onGameCreated}/>
    } else if(status === STATE_PLAYING) {
        <GamePlayer inGame={game}
        onBackButtonClick={goBackToMenuStatus} />
    } else {
        return <>
            <div className="errorBoxContainer offlineContainer">{t('content.offlineMainText')}</div>
            <button onClick={onGameConfiguratorClick} className="importantNote"></button>
        </>;
    }

}

export default Offline;