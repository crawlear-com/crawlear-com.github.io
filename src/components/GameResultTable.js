import * as React from 'react';
import Utils from '../Utils';
import GoogleMapsUrl from './GoogleMapsUrl';
import { useTranslation } from 'react-i18next';

function GameResultTable({game, isDraw}) {
    const { t } = useTranslation();
    const players = [];
    let j=1;

    function resolvePointsType(pointsType) {
        switch(pointsType) {
            case 0:
                return t('gametype.simple');
            case 1:
                return t('gametype.completa');
            default:
                return t('gametype.simple');
        }
    }

    function resolveGameType(gameType) {
        switch(gameType) {
            case 0:
                return t('gametype.tiempo');
            case 1:
                return t('gametype.puntos');
            case 2:
                return t('gametype.rey');
            default:
                return t('gametype.tiempo');
        }
    }

    game.players.forEach((player)=>{
        players.push(<div key={j}>
            {isDraw ? <></> : <span className="bold gameListPosition">{j}</span>}
            {game.gameType !== 0 ? 
                <span className="bold gameListPlayerName textOverflow">{player.name}</span> :
                <span className="bold gameListPlayerName withTime textOverflow">{player.name}</span> }
            <span className="bold gameListPoints">{player.points}</span>
            {game.gameType === 0 ? <span className="bold gameListTime">{Utils.printTime(Utils.millisToTime(player.time))}</span> : <></>}
        </div>);
        j++;
    })

    return <div className="gameList rounded rounded2">
            <div className="gameGameType">{t('gametype.modojuego')}: <span className="bold">{resolveGameType(game.gameType)}</span></div>
            <div className="gamePointsType">{t('gametype.tipopuntuacion')}: <span className="bold">{resolvePointsType(game.pointsType)}</span></div> 
            <div className="gameIsPublic"><span className="bold">{game.isPublic ? t('description.esPublica') : ""}</span></div>
            {game.location.latitude && game.location.longitude ? 
                <div className="gameLocation">{t('description.localizacion')}: <span className="bold">({game.location.latitude},{game.location.longitude}) <GoogleMapsUrl latitude={game.location.latitude} longitude={game.location.longitude} /></span></div> :
                <></>}
            <div className="gameParticipants">
                <div className="resultTitle">{t('description.resultado')}:</div>
                {players}
            </div>
    </div>;
}

export default GameResultTable;