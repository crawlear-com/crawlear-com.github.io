import * as React from 'react';
import TotalTimeGame from './games/TotalTimeGame';
import KingGame from './games/KingGame';
import IsrccGame from './games/IsrccGame';

const GAME_TYPE_TIME = 0;
const GAME_TYPE_KING = 1;

function GameTypePlayer({game, player, zone, onGameEnd}) {
    const elementsToRender = [];

    if (game.gameType === GAME_TYPE_TIME) {
        elementsToRender.push(<TotalTimeGame 
            key={0}
            game={game}
            playerIndex={player}
            zoneIndex={zone}
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
        />);
    } else if (game.gameType === GAME_TYPE_KING) {
        elementsToRender.push(<KingGame 
            key={0}
            game={game}
            playerIndex={player}
            zoneIndex={zone}
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
            />);
    } else {
        elementsToRender.push(<IsrccGame game={game} 
            key={0}
            playerIndex={player}
            zoneIndex={zone}
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
        />);
    }

    return elementsToRender;
}

export default GameTypePlayer;