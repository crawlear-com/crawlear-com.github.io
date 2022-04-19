import * as React from 'react';
import Utils from '../Utils';
import GameHeaderInfo from './GameHeaderInfo';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import IsrccGameScores from './games/IsrccGameScores';
import TotalTimeGameScores from './games/TotalTimeGameScores';
import { useTranslation } from 'react-i18next';

import fiascoIcon from '../resources/img/iconFiasco.png';
import winnerIcon from '../resources/img/iconWinner.png';
import batteryIcon from '../resources/img/iconBattery.png';
import openIcon from '../resources/img/arrowDown.png';


function GameResultTable({game, isDraw}) {
    const { t } = useTranslation(),
        players = [];
    let gameTypeTexts = Utils.tokenToTexts(TotalTimeGameScores.texts),
        j=0, i=0;

    if(game.gameType === 2) {
        gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
    }

    function onClickZone(event) {
        let element = event.target;

        element = (element.tagName === 'IMG' ? element.parentElement : element);

        const zoneTr = element.parentElement.nextElementSibling;
        zoneTr.classList.toggle("closed");
    }

    players.push(<tr key="gameType">
        <td></td>
        <td className="">{t("description.nombre")}</td>
        <td>pts</td>
        <td>t</td>
        <td>g</td>
        <td>gf</td>
        <td>b</td>
    </tr>);
    
    game.players.forEach((player)=>{
        i=0;
        players.push(<tr key={i+j}>
                {isDraw ? <td></td> : <td className="bold gameListPosition">{j===0?<img src={winnerIcon} alt="winner" />:j+1}</td>}
                {game.gameType === 1 ? 
                    <td className="bold gameListPlayerName gameListPoints bold textOverflow">{player.name}</td> :
                    <td className="bold gameListPlayerName gameListPoints bold withTime textOverflow">{player.name}</td> }
                <td className="bold gameListPoints">{player.totalPoints}</td>
                {game.gameType !== 1 ? <td className="bold gameListPoints gameListTime">
                    {player.totalTime ? Utils.printTime(Utils.millisToTime(player.totalTime)) : <>00:00:000</>}
                </td> : <></>}
                <td className="gameListPoints">.</td>
                <td className="gameListPoints">.</td>
                <td className="gameListPoints">.</td>
            </tr>);
        
        player.zones.forEach((zone)=>{
            let icon;

            if (zone.fiascoControlTextValues) {
                if (zone.fiascoControlTextValues[4]) {
                    icon = <img src={batteryIcon} alt="battery" />;
                } else if ((game.maxTime && zone.time === game.maxTime) || 
                    (game.maxPoints && zone.points === game.maxPoints) || 
                    (zone.fiascoControlTextValues.filter(x=>x>0).length > 0)){
                    icon = <img src={fiascoIcon} alt="fiasco" />;
                } else {
                    icon = <></>;
                }

            } else {
                if (zone.battery) {
                    icon = <img src={batteryIcon} alt="fiasco" />;
                } else if ((game.maxTime && zone.time === game.maxTime) || (game.maxPoints && zone.points === game.maxPoints)){
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
                    <td className="gameListPoints">{zone.points}</td>
                    {game.gameType !== 1 ? <td className="gameListTime">{Utils.printTime(Utils.millisToTime(zone.time))}</td> : <></>}
                    <td className="gameListPoints">{zone.gateProgression}</td>
                    <td className="gameListPoints">{zone.gatesWithFail ? zone.gatesWithFail : "0"}
                    </td>
                    <td className="gameListPoints">{zone.gatesWithBonification ? zone.gatesWithBonification * -2 : '0'}
                    </td>
                </tr>
                <tr key={i+j+2} className="closed">
                    <td colSpan={7}>
                        <ControlTextArrayVisualization 
                            controlTextValues={zone.controlTextValues} 
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

    return <div className="gameList rounded rounded2">
            <GameHeaderInfo game={game} />
            <div className="gameParticipants">
                <div className="resultTitle">{t('description.resultado')}:</div>
                <table>
                    <tbody>
                        {players}
                    </tbody>
                </table>
            </div>
    </div>;
}

export default GameResultTable;