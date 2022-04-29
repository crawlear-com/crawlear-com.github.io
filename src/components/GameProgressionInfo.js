import { t } from 'i18next';
import * as React from 'react';
import Utils from '../Utils';
import GameHeaderInfo from './GameHeaderInfo';
import GameProgressionInfoRow from './GameProgressionInfoRow';
import IsrccGameScores from './games/IsrccGameScores';
import TotalTimeGameScores from './games/TotalTimeGameScores';
import fiascoIcon from '../resources/img/iconFiasco.png';
import { GameUtils } from '../model/Game';

function GameProgressionInfo({game, gameProgression}) {
    const playersDone = [];
    let i=0, gameTypeTexts = Utils.tokenToTexts(TotalTimeGameScores.texts);

    if (game) {
        if(game.gameType === 2) {
            gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
        }
    
        playersDone.push(<GameHeaderInfo key="header" game={game}/>);
        
        game.players.forEach((player)=>{
            let zones=[], j=0;
            let fiasco;
    
            player.zones.forEach((zone, index)=>{        
                if(gameProgression && 
                        gameProgression[player.id] && 
                        gameProgression[player.id][j] &&
                        gameProgression[player.id][j].data) {
    
                    let controlTextValues = [];
                    const currentGameProgression = gameProgression[player.id][j];
        
                    if (currentGameProgression.status==="done") { 
                        controlTextValues.push(<GameProgressionInfoRow gameProgression={currentGameProgression} gameTypeTexts={gameTypeTexts}/>);
                    } else if (currentGameProgression.status==="repair") {  
                        controlTextValues.push(t('points.reparacion').toUpperCase());
                    }
                    
                    if (GameUtils.isFiasco(game, currentGameProgression.data.time, player.id, index)) { 
                        fiasco = <img src={fiascoIcon} alt="fiasco" />;
                    }
    
                    zones.push(<div key={j} className="gameProgressionInfoItem">
                            <div className="bold">{t('description.zona')} {j+1} {fiasco}</div>
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
    }

    return playersDone;
}

export default GameProgressionInfo;