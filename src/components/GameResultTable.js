import * as React from 'react';
import Utils from '../Utils';
import GoogleMapsUrl from './GoogleMapsUrl';
import { useTranslation } from 'react-i18next';

function GameResultTable({game, isDraw}) {
    const { t } = useTranslation();
    const players = [];
    let j=0, i=0;

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

    players.push(<tr><td></td>
        <td className="">{t("description.nombre")}</td>
        <td>pts</td>
        <td>{t("gametype.tiempo")}</td>
        <td>pg</td>
    </tr>);
    game.players.forEach((player)=>{
        i=0;
        players.push(<tr key={j}>
                {isDraw ? <></> : <td className="bold gameListPosition">{j+1}</td>}
                {game.gameType !== 0 ? 
                    <td className="bold gameListPlayerName gameListPoints bold textOverflow">{player.name}</td> :
                    <td className="bold gameListPlayerName gameListPoints bold withTime textOverflow">{player.name}</td> }
                <td className="bold gameListPoints">{player.totalPoints}</td>
                {game.gameType === 0 ? <td className="bold gameListPoints gameListTime">{Utils.printTime(Utils.millisToTime(player.totalTime))}</td> : <></>}
                <td className="gameListPoints">.</td>
            </tr>);

        player.zones.forEach((zone)=>{
            players.push(<tr key={j+i+1}>
                <td>.</td>
                <td>{`${t('description.zona')} ${i+1}`}</td>
                <td className="gameListPoints">{zone.points}</td>
                {game.gameType === 0 ? <td className="gameListTime">{Utils.printTime(Utils.millisToTime(zone.time))}</td> : <></>}
                <td className="gameListPoints">{zone.gateProgression}</td>
            </tr>);
            i++;
        });
        j++;
    })

    return <div className="gameList rounded rounded2">
            <div className="gameGameType">{t('gametype.modojuego')}: <span className="bold">{resolveGameType(game.gameType)}</span></div>
            <div className="gamePointsType">{t('gametype.tipopuntuacion')}: <span className="bold">{resolvePointsType(game.pointsType)}</span></div> 
            <div className="gamePointsType">{t('description.zonas')}: <span className="bold">{game.zones}</span></div> 
            <div className="gamePointsType">{t('points.puertaprogresion')}: <span className="bold">{game.gates}</span></div> 
            <div className="gameIsPublic"><span className="bold">{game.isPublic ? t('description.esPublica') : ""}</span></div>
            {game.location.latitude && game.location.longitude ? 
                <div className="gameLocation">{t('description.localizacion')}: <span className="bold">({game.location.latitude},{game.location.longitude}) <GoogleMapsUrl latitude={game.location.latitude} longitude={game.location.longitude} /></span></div> :
                <></>}
            <div className="gameParticipants">
                <div className="resultTitle">{t('description.resultado')}:</div>
                <table>{players}</table>
            </div>
    </div>;
}

export default GameResultTable;