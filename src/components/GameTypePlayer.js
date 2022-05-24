import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from './games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from './games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from './games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras } from './games/RegionalZonaRcGameScores';
import { gameExtras as kingExtras } from './games/KingGameScores';
import KingGame from './games/KingGame';
import CoreGame from './games/CoreGame';
import { GameContext } from './games/GameContext';

const GAME_TYPE_AECAR = 0;
const GAME_TYPE_KING = 1;
const GAME_TYPE_ISRCC = 2;
const GAME_TYPE_LEVANTE = 3;
const GAME_TYPE_COPAESPANA = 4;

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
    } else if (game.gameType === GAME_TYPE_COPAESPANA) {
        childrenContent = getRegionalZonaRcGameContent(t, player, zone, game.players[player].zones[zone].points);
        gameExtras = regionalZonaRcExtras;
    } else if (game.gameType === GAME_TYPE_KING) {
        gameExtras = kingExtras;
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
            key={0}
            game={game} 
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
            onRepair={onRepair}
        />);
    }

    return (
        <GameContext.Provider value={{ game: game }}>
            {elementsToRender}
        </GameContext.Provider>);
    
}

export default GameTypePlayer;