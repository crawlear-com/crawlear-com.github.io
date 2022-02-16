import * as React from 'react';
import Utils from '../Utils';
import GoogleMapsUrl from './GoogleMapsUrl';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import { useTranslation } from 'react-i18next';

import fiascoIcon from '../resources/img/iconFiasco.png';
import winnerIcon from '../resources/img/iconWinner.png';
import batteryIcon from '../resources/img/iconBattery.png';
import openIcon from '../resources/img/arrowDown.png';


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
                return t('gametype.rey');
            default:
                return t('gametype.tiempo');
        }
    }

    function onClickZone(event) {
        let element = event.target;

        element = (element.tagName === 'IMG' ? element.parentElement : element);

        const zoneTr = element.parentElement.nextElementSibling;
        zoneTr.classList.toggle("closed");
    }

    players.push(<tr>
        <td></td>
        <td className="">{t("description.nombre")}</td>
        <td>pts</td>
        <td>{t("gametype.tiempo")}</td>
        <td>pg</td>
    </tr>);
    game.players.forEach((player)=>{
        i=0;
        players.push(<tr key={i+j}>
                {isDraw ? <td></td> : <td className="bold gameListPosition">{j===0?<img src={winnerIcon} alt="winner" />:j+1}</td>}
                {game.gameType !== 0 ? 
                    <td className="bold gameListPlayerName gameListPoints bold textOverflow">{player.name}</td> :
                    <td className="bold gameListPlayerName gameListPoints bold withTime textOverflow">{player.name}</td> }
                <td className="bold gameListPoints">{player.totalPoints}</td>
                {game.gameType === 0 ? <td className="bold gameListPoints gameListTime">{Utils.printTime(Utils.millisToTime(player.totalTime))}</td> : <></>}
                <td className="gameListPoints">.</td>
            </tr>);

        player.zones.forEach((zone)=>{
            let icon;

            if (zone.battery) {
                icon = <img src={batteryIcon} alt="fiasco" />;
            } else if ((game.maxTime && zone.time === game.maxTime) || (game.maxPoints && zone.points === game.maxPoints)){
                icon = <img src={fiascoIcon} alt="battery" />;
            } else {
                icon = <></>;
            }

            players.push(<>
            <tr key={i+j+1}>
                <td>{icon}</td>
                <td onClick={onClickZone}>{`${t('description.zona')} ${i+1}`}
                    <img className="iconArrowDown" src={openIcon} alt="click open" /></td>
                <td className="gameListPoints">{zone.points}</td>
                {game.gameType === 0 ? <td className="gameListTime">{Utils.printTime(Utils.millisToTime(zone.time))}</td> : <></>}
                <td className="gameListPoints">{zone.gateProgression}</td>
            </tr>
            <tr className="closed">
                <td colSpan={5}>
                    <div><ControlTextArrayVisualization controlTextValues={zone.controlTextValues} /></div>
                </td>
            </tr></>);
            
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
                <div className="gameLocation">
                    {t('description.localizacion')}: <span className="bold">({game.location.latitude},{game.location.longitude})</span>
                    <GoogleMapsUrl latitude={game.location.latitude} longitude={game.location.longitude} /></div> :
                <></>}
            <div className="gamePointsType">{game.maxPoints>0 ? `${t('description.puntosmaximo')}: ${game.maxPoints}` : ''}</div>
            <div className="gamePointsType">{game.maxTime>0 ? `${t('description.tiempomaximo')}: ${Utils.printTime(Utils.millisToTime(game.maxTime))}` : ''}</div>
            <div className="gameParticipants">
                <div className="resultTitle">{t('description.resultado')}:</div>
                <table>
                    <tbody>{players}</tbody>
                </table>
            </div>
    </div>;
}

export default GameResultTable;