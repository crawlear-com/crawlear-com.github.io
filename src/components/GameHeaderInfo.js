import * as React from 'react';
import GoogleMapsUrl from './GoogleMapsUrl';
import Utils from '../Utils';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameHeaderInfo.scss'

function GameHeaderInfo({game}) {
    const { t } = useTranslation();

    function resolveGameType(gameType) {
        switch(gameType) {
            case 0:
                return t('gametype.aecar');
            case 1:
                return t('gametype.rey');
            case 2:
                return t('gametype.isrcc');
            case 3:
                return t('gametype.levante124');
            default:
                return t('gametype.isrcc');
        }
    }

    return <div className="gameHeaderInfo rounded rounded2"><div className="gameGameType">{t('gametype.modojuego')}: <span className="bold">{resolveGameType(game.gameType)}</span></div>
        <div className="gamePointsType">{t('description.zonas')}: <span className="bold">{game.zones}</span></div> 
        <div className="gameIsPublic"><span className="bold">{game.isPublic ? t('description.esPublica') : ""}</span></div>
        {game.location.latitude && game.location.longitude ? 
            <div className="gameLocation">
                {t('description.localizacion')}: <span className="bold">({game.location.latitude},{game.location.longitude})</span>
                <GoogleMapsUrl latitude={game.location.latitude} longitude={game.location.longitude} /></div> :
            <></>}
        <div className="gamePointsType">{game.maxPoints>0 ? `${t('description.puntosmaximo')}: ${game.maxPoints}` : ''}</div>
        <div className="gamePointsType">{game.maxTime>0 ? `${t('description.tiempomaximo')}: ${Utils.printTime(Utils.millisToTime(game.maxTime))}` : ''}</div>
    </div>;
}

export default GameHeaderInfo;