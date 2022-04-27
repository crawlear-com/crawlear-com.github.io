import { t } from 'i18next';
import * as React from 'react';
import Utils from '../Utils';
import GameHeaderInfo from './GameHeaderInfo';
import GameProgressionInfoRow from './GameProgressionInfoRow';
import IsrccGameScores from './games/IsrccGameScores';
import TotalTimeGameScores from './games/TotalTimeGameScores';

const ISRCC_GAME = 2;

function GameProgressionInfo({game, gameProgression}) {
    const playersDone = [];
    let i=0, gameTypeTexts = Utils.tokenToTexts(TotalTimeGameScores.texts);

    if(game && game.gameType === 2) {
        gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
    }

    game && playersDone.push(<GameHeaderInfo key="header" game={game}/>);
    game && game.players.forEach((player)=>{
        let zones=[], j=0;

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

                zones.push(<div key={j} className="gameProgressionInfoItem">
                        <div className="bold">{t('description.zona')} {j+1}</div>
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