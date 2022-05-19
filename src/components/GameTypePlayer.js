import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from './games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from './games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from './games/Levante124GameScores';
import KingGame from './games/KingGame';
import CoreGame from './games/CoreGame';

const GAME_TYPE_AECAR = 0;
const GAME_TYPE_KING = 1;
const GAME_TYPE_ISRCC = 2;
const GAME_TYPE_LEVANTE = 3;

function GameTypePlayer({game, player, zone, onGameEnd, onRepair}) {
    const { t } = useTranslation();
    const elementsToRender = [];
    let childrenContent,
        gameExtras;

    if (game.gameType === GAME_TYPE_AECAR) {
        childrenContent = getAecarGameContent(t, player, zone, game.players[player].zones[zone].points);
        gameExtras = aecarExtras;
    } else if (game.gameType === GAME_TYPE_ISRCC) {
        childrenContent = getIsrccGameContent(t, player, zone, game.players[player].zones[zone].points);
        gameExtras = isrccExtras;
    } else if (game.gameType === GAME_TYPE_LEVANTE) {
        childrenContent = getLevanteGameContent(t, player, zone, game.players[player].zones[zone].points);
        gameExtras = levante124Extras;
    }
    
    React.useEffect(()=>{
        gameExtras.doPageView();
    },[]);

    if (game.gameType !== GAME_TYPE_KING) {
        elementsToRender.push(<CoreGame 
            game={game}
            onGameEnd={(game)=>{onGameEnd(game)}}
            onRepair={onRepair}
            playerIndex={player}
            gameExtras={gameExtras}
            zoneIndex={zone}>
                {childrenContent}
        </CoreGame>);
    } else {
        elementsToRender.push(<KingGame
            game={game} 
            key={0}
            playerIndex={player}
            zoneIndex={zone}
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
            onRepair={onRepair}
        />);
    }

    return elementsToRender;
}

export default GameTypePlayer;