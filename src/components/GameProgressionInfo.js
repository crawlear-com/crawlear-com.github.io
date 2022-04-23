import { t } from 'i18next';
import * as React from 'react';
import Utils from '../Utils';
import GameHeaderInfo from './GameHeaderInfo';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import IsrccGameScores from './games/IsrccGameScores';
import TotalTimeGameScores from './games/TotalTimeGameScores';

import { GameUtils } from '../model/Game';

const ISRCC_GAME = 2;

function GameProgressionInfo({game, gameProgression}) {
    const playersDone = [];
    let i=0, gameTypeTexts = Utils.tokenToTexts(TotalTimeGameScores.texts);

    if(game.gameType === 2) {
        gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
    }

    playersDone.push(<GameHeaderInfo key="header" game={game}/>);
    game.players.forEach((player)=>{
        let zones=[], j=0;

        player.zones.forEach((zone, index)=>{
            if(gameProgression && 
                    gameProgression[player.id] && 
                    gameProgression[player.id][j] &&
                    gameProgression[player.id][j].data) {

                let controlTextValues = [];
                const currentGameProgression = gameProgression[player.id][j],
                    points = currentGameProgression.data.points,
                    time = currentGameProgression.data.time,
                    gateFails = currentGameProgression.data.gatesWithFail,
                    bonitification = currentGameProgression.data.gatesWithBonification;

                if (currentGameProgression.status==="done") { 
                    controlTextValues.push(<>
                        <ControlTextArrayVisualization key={`zone${index}`}
                            controlTextValues={GameUtils.sumControlTextValues(currentGameProgression.data.gateProgressionData)} 
                            texts={gameTypeTexts} />

                        {currentGameProgression.data.fiascoControlTextValues && currentGameProgression.data.fiascoControlTextValues.filter(x => x > 0).length>0 ? 
                        <>
                            <div className="fiascosText left bold" key={`zoneDiv${index}`}>{t('points.fiascos')}:</div>
                            <ControlTextArrayVisualization key={`zoneFiasco${index}`} 
                                controlTextValues={currentGameProgression.data.fiascoControlTextValues} 
                                texts={Utils.tokenToTexts(IsrccGameScores.fiascoTexts)} /> 
                        </> : 
                        <></>}
                    </>);
                } else if (currentGameProgression.status==="repair") {  
                    controlTextValues.push(t('points.reparacion').toUpperCase());
                }


                zones.push(<div key={j} className="gameProgressionInfoItem">
                        <div className="bold">{t('description.zona')} {j+1}</div>
                        <ul>
                            <li>{t('description.puntos')}: <span className="bold">{points}</span></li>
                            <li>{t('description.tiempo')}: <span className="bold">{Utils.printTime(Utils.millisToTime(time))}</span></li>
                            {game.gameType === ISRCC_GAME ? <>
                                <li>{t('description.fallospuerta')}: <span className="bold">{gateFails}</span></li>
                                <li>{t('description.bonificacion')}: <span className="bold">{bonitification}</span></li></>
                            :<></>}
                        </ul>
                        {controlTextValues}
                    </div>);
                    
            }
            j++;
        });

        if (zones.length>0) {
            playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded2'>
                <img src={player.avatar} alt="player avatar" />
                <div>{zones}</div>
            </div>);
        }
        i++;
    });

    return playersDone;
}

export default GameProgressionInfo;