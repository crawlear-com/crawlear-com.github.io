import * as React from 'react';
import { useTranslation } from 'react-i18next';
import KingGame from './games/KingGame';
import CoreGame from './games/CoreGame';
import { GameContext } from './context/GameContext';

const GAME_TYPE_KING = 1;

function GameTypePlayer({game, 
    player, 
    zone, 
    onGameEnd, 
    onRepair,
    gameExtras,
    children
}) {
    const { t } = useTranslation();
    const [gameState, setGameState] = React.useState(game);
    const elementsToRender = [];
    
    React.useEffect(()=>{
        gameExtras.doPageView();
    },[]);

    if (gameState.gameType !== GAME_TYPE_KING) {
        elementsToRender.push(<CoreGame 
            game={gameState}
            onGameEnd={(game)=>{onGameEnd(game)}}
            onRepair={onRepair}
            playerIndex={player}
            gameExtras={gameExtras}
            zoneIndex={zone}>
                {children}
        </CoreGame>);
    } else {
        elementsToRender.push(<KingGame
            key={0}
            game={gameState} 
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
            onRepair={onRepair}
        />);
    }

    return (
        <GameContext.Provider value={{ game: gameState, setGame: setGameState }}>
            {elementsToRender}
        </GameContext.Provider>);
    
}

export default GameTypePlayer;