import * as React from 'react';
import Utils from '../Utils';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import { IsrccGameScores } from '../games/IsrccGameScores';
import { AecarGameScores } from '../games/AecarGameScores';
import { RegionalZonaRcGameScores } from '../games/RegionalZonaRcGameScores';
import { Levante124GameScores } from '../games/Levante124GameScores';
import { MiniCrawlerPassionGameScores } from '../games/MiniCrawlerPassionGameScores';
import { GenericGameScores } from '../games/GenericGameScores';
import { useTranslation } from 'react-i18next';
import { GAME_TYPE_ISRCC,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC,
    GameUtils } from '../games/Game';

import fiascoIcon from '../resources/img/iconFiasco.png';
import winnerIcon from '../resources/img/iconWinner.png';
import batteryIcon from '../resources/img/iconBattery.png';
import openIcon from '../resources/img/arrowDown.png';


function GameResultTable({game, isDraw}) {
    const { t } = useTranslation(['main']),
        players = [];
    let gameTypeTexts = Utils.tokenToTexts(AecarGameScores.texts),
        j=0, i=0;

    switch(game.gameType) {
        case GAME_TYPE_ISRCC:
            gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);
            break;
        case GAME_TYPE_LEVANTE:
            gameTypeTexts = Utils.tokenToTexts(Levante124GameScores.texts);
            break;
        case GAME_TYPE_COPAESPANA:
            gameTypeTexts = Utils.tokenToTexts(RegionalZonaRcGameScores.texts);
            break;
        case GAME_TYPE_MINICRAWLERPASSION:
            gameTypeTexts = Utils.tokenToTexts(MiniCrawlerPassionGameScores.texts);
                break;
        case GAME_TYPE_GENERIC:
            gameTypeTexts = Utils.tokenToTexts(GenericGameScores.texts);
                break;        
        default:
            gameTypeTexts = Utils.tokenToTexts(AecarGameScores.texts);
            break;
    }

    function onClickZone(event) {
        let element = event.target;

        element = (element.tagName === 'IMG' ? element.parentElement : element);

        const zoneTr = element.parentElement.nextElementSibling;
        zoneTr.classList.toggle("closed");
    }

    players.push(<tr key={`game${new Date().getMilliseconds()}`}>
        <td></td>
        <td className=""></td>
        <td>{t("description.puntos")}</td>
        <td>{t("description.puertas")}</td>
        <td>{t("description.bonificacion")}</td>
        <td>{t("description.puntos")} {t("description.portiempo")}</td>
        <td></td>
    </tr>);
    
    game.players.forEach((player)=>{
        players.push(<tr key={`header${i+j}`}>
                {isDraw ? <td></td> : <td className="bold gameListPosition">{j===0?<img src={winnerIcon} alt="winner" />:j+1}</td>}
                {game.gameType === 1 ? 
                    <td className="bold gameListPlayerName gameListPoints bold textOverflow">{player.name}</td> :
                    <td className="bold gameListPlayerName gameListPoints bold withTime textOverflow">{player.name}</td> }
                <td className="bold gameListPoints">{player.totalPoints}</td>
                <td className="gameListPoints">.</td>
                <td className="gameListPoints">.</td>
                <td className="gameListPoints">.</td>
                {game.gameType !== 1 ? <td className="bold gameListPoints gameListTime">
                    {player.totalTime ? Utils.printTime(Utils.millisToTime(player.totalTime)) : <>00:00:000</>}
                </td> : <></>}
            </tr>);

        player.zones.forEach((zone)=>{
            let icon;

            if (zone.fiascoControlTextValues) {
                if (zone.fiascoControlTextValues[4]) {
                    icon = <img src={batteryIcon} alt="battery" />;
                } else if ((game.maxTime && zone.time === (game.maxTime + game.courtesyTime)) || 
                    (game.maxPoints && zone.totalPoints === game.maxPoints) || 
                    (zone.fiascoControlTextValues.filter(x=>x>0).length > 0)){
                    icon = <img src={fiascoIcon} alt="fiasco" />;
                } else {
                    icon = <></>;
                }

            } else {
                if (zone.battery) {
                    icon = <img src={batteryIcon} alt="fiasco" />;
                } else if ((game.maxTime && zone.time === (game.maxTime + game.courtesyTime)) || 
                           (game.maxPoints && zone.totalPoints === game.maxPoints)){
                    icon = <img src={fiascoIcon} alt="battery" />;
                } else {
                    icon = <></>;
                }
            }

            players.push(
                <tr key={`row0${i+j+1}`}>
                    <td>{icon}</td>
                    <td onClick={onClickZone}>{`${t('description.zona')} ${i % player.zones.length +1}`}
                        <img className="iconArrowDown" src={openIcon} alt="click open" /></td>
                    <td className="gameListPoints">{zone.totalPoints}</td>
                    <td className="gameListPoints">{zone.gateProgression}</td>
                    <td className="gameListPoints">{zone.gatesWithBonification ? zone.gatesWithBonification * -2 : '0'}
                    </td>
                    <td className="gameListPoints">{zone.simpathyPoints ? zone.simpathyPoints : "0"}
                    </td>
                    {game.gameType !== 1 ? <td className="gameListTime">{Utils.printTime(Utils.millisToTime(zone.time))}</td> : <></>}
                </tr>);
            players.push(<tr key={`row1${i+j+2}`} className="closed">
                    <td colSpan={7}>
                        {zone.handicap!==0 ? <div className='controlTextValues'>{t('description.bonificacionaccesorios')}: {zone.handicap}</div> : <></>}
                        <ControlTextArrayVisualization 
                            controlTextValues={GameUtils.sumControlTextValues(zone.gateProgressionData)} 
                            texts={gameTypeTexts} />

                        {zone.fiascoControlTextValues && zone.fiascoControlTextValues.filter(x => x > 0).length ? 
                            <>
                                <div className="left bold">{t('points.fiascos')}:</div>
                                <ControlTextArrayVisualization 
                                    controlTextValues={zone.fiascoControlTextValues} 
                                    texts={Utils.tokenToTexts(IsrccGameScores.fiascoTexts)} /> 
                            </> : 
                            <></>}
                    </td>
                </tr>);
            i++;
        });
        j++;
    })

    return <div className="gameParticipants">
        <table>
            <tbody>
                {players}
            </tbody>
        </table>
    </div>;
}

export default GameResultTable;