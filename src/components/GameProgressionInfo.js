import { t } from 'i18next';
import * as React from 'react';
import Utils from '../Utils';
import GameHeaderInfo from './GameHeaderInfo';

function GameProgressionInfo({game, gameProgression}) {
    const playersDone = [];
    let i=0;

    playersDone.push(<GameHeaderInfo game={game}/>);
    game.players.forEach((player)=>{
        let zones=[], j=0;

        player.zones.forEach(()=>{
            if(gameProgression && 
                    gameProgression[player.id] && 
                    gameProgression[player.id][j] &&
                    gameProgression[player.id][j].controlTextValues) {
                const points = gameProgression[player.id][j].points,
                    time = gameProgression[player.id][j].time,
                    gateFails = gameProgression[player.id][j].gatesWithFail,
                    bonitification = gameProgression[player.id][j].gatesWithBonification;

                zones.push(<div className="gameProgressionInfoItem">
                        <div className="bold">{t('description.zona')} {j+1}</div>
                        <ul>
                            <li>{t('description.puntos')}: <span className="bold">{points}</span></li>
                            <li>{t('description.tiempo')}: <span className="bold">{Utils.printTime(Utils.millisToTime(time))}</span></li>
                            {game.gameType === 2 ? <>
                                <li>{t('description.fallospuerta')}: <span className="bold">{gateFails}</span></li>
                                <li>{t('description.bonificacion')}: <span className="bold">{bonitification}</span></li></>
                            :<></>}
                        </ul>
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