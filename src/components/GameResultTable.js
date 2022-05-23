import * as React from 'react';
import Utils from '../Utils';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import { IsrccGameScores } from './games/IsrccGameScores';
import { AecarGameScores } from './games/AecarGameScores';
import { CopaEspanaGameScores } from './games/CopaEspanaGameScores';
import { useTranslation } from 'react-i18next';
import { GameUtils } from '../model/Game';

import fiascoIcon from '../resources/img/iconFiasco.png';
import winnerIcon from '../resources/img/iconWinner.png';
import batteryIcon from '../resources/img/iconBattery.png';
import openIcon from '../resources/img/arrowDown.png';


function GameResultTable({game, isDraw}) {
    const { t } = useTranslation(),
        players = [];
    let gameTypeTexts = Utils.tokenToTexts(AecarGameScores.texts),
        j=0, i=0;

    if(game.gameType === 2) {
        gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
    }

    if(game.gameType === 4) {
        gameTypeTexts = Utils.tokenToTexts(CopaEspanaGameScores.texts);   
    }

    function onClickZone(event) {
        let element = event.target;

        element = (element.tagName === 'IMG' ? element.parentElement : element);

        const zoneTr = element.parentElement.nextElementSibling;
        zoneTr.classList.toggle("closed");
    }

    players.push(<tr key={`${game.id}`}>
        <td></td>
        <td className="">{t("description.nombre")}</td>
        <td>{t("description.puntos")}</td>
        <td>{t("description.puertas")}</td>
        <td>{t("description.bonificacion")}</td>
        <td>{t("description.puntos")} {t("description.portiempo")}</td>
        <td>{t("description.tiempo")}</td>
    </tr>);
    
    game.players.forEach((player)=>{
        i=0;
        players.push(<tr key={i+j}>
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
                } else if ((game.maxTime && zone.time === (game.gameType===2 ? (game.maxTime + game.courtesyTime) : game.maxTime)) || 
                    (game.maxPoints && zone.totalPoints === game.maxPoints) || 
                    (zone.fiascoControlTextValues.filter(x=>x>0).length > 0)){
                    icon = <img src={fiascoIcon} alt="fiasco" />;
                } else {
                    icon = <></>;
                }

            } else {
                if (zone.battery) {
                    icon = <img src={batteryIcon} alt="fiasco" />;
                } else if ((game.maxTime && zone.time === (game.gameType===2 ? (game.maxTime + game.courtesyTime) : game.maxTime)) || 
                           (game.maxPoints && zone.totalPoints === game.maxPoints)){
                    icon = <img src={fiascoIcon} alt="battery" />;
                } else {
                    icon = <></>;
                }
            }

            players.push(<>
                <tr key={i+j+1}>
                    <td>{icon}</td>
                    <td onClick={onClickZone}>{`${t('description.zona')} ${i+1}`}
                        <img className="iconArrowDown" src={openIcon} alt="click open" /></td>
                    <td className="gameListPoints">{zone.totalPoints}</td>
                    <td className="gameListPoints">{zone.gateProgression}</td>
                    <td className="gameListPoints">{zone.gatesWithBonification ? zone.gatesWithBonification * -2 : '0'}
                    </td>
                    <td className="gameListPoints">{zone.simpathyPoints ? zone.simpathyPoints : "0"}
                    </td>
                    {game.gameType !== 1 ? <td className="gameListTime">{Utils.printTime(Utils.millisToTime(zone.time))}</td> : <></>}
                </tr>
                <tr key={i+j+2} className="closed">
                    <td colSpan={7}>
                        <ControlTextArrayVisualization 
                            controlTextValues={game.gameType!==1 && zone.gateProgressionData ? GameUtils.sumControlTextValues(zone.gateProgressionData) : zone.controlTextValues} 
                            texts={gameTypeTexts} />

                        {zone.fiascoControlTextValues && zone.fiascoControlTextValues.filter(x => x > 0).length>0 ? 
                            <>
                                <div className="left bold">{t('points.fiascos')}:</div>
                                <ControlTextArrayVisualization 
                                    controlTextValues={zone.fiascoControlTextValues} 
                                    texts={Utils.tokenToTexts(IsrccGameScores.fiascoTexts)} /> 
                            </> : 
                            <></>}
                    </td>
                </tr>
            </>);
            
            i++;
        });
        j++;
    })

    return <div className="gameParticipants">
                <div className="resultTitle">{t('description.resultado')}:</div>
                <table>
                    <tbody>
                        {players}
                    </tbody>
                </table>
            </div>;
}

export default GameResultTable;