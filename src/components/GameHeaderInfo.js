import * as React from 'react';
import GoogleMapsUrl from './GoogleMapsUrl';
import Utils from '../Utils';
import { useTranslation } from 'react-i18next';
import { GAME_TYPE_AECAR, 
    GAME_TYPE_ISRCC, 
    GAME_TYPE_KING, 
    GAME_TYPE_LEVANTE, 
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from '../model/Game.ts';

import '../resources/css/GameHeaderInfo.scss'

function GameHeaderInfo({game}) {
    const { t } = useTranslation();

    function resolveGameType(gameType) {
        switch(gameType) {
            case GAME_TYPE_AECAR:
                return t('gametype.aecar');
            case GAME_TYPE_KING:
                return t('gametype.rey');
            case GAME_TYPE_ISRCC:
                return t('gametype.isrcc');
            case GAME_TYPE_LEVANTE:
                return t('gametype.levante124');
            case GAME_TYPE_COPAESPANA:
                return t('gametype.copaespana');
            case GAME_TYPE_MINICRAWLERPASSION:
                return t('gametype.minicrawlerpassion');
            case GAME_TYPE_GENERIC:
                return t('gametype.generic');
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