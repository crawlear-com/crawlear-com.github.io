import * as React from 'react'
import KingGame from './KingGame'
import CoreGame from './CoreGame'
import { GameContext } from '../../../context/GameContext'

const GAME_TYPE_KING = 1

function GameTypePlayer({game,
    player,
    zone,
    onGameEnd,
    onRepair,
    gameExtras,
    children
}) {
    const [gameState, setGameState] = React.useState(game)
    const elementsToRender = []

    React.useEffect(()=>{
        gameExtras.doPageView()
    },[gameExtras])

    if (gameState.gameType !== GAME_TYPE_KING) {
        elementsToRender.push(<CoreGame
            key={1}
            onGameEnd={(game)=>{onGameEnd(game)}}
            onRepair={onRepair}
            playerIndex={player}
            zoneIndex={zone}>
                {children}
        </CoreGame>)
    } else {
        elementsToRender.push(<KingGame
            key={0}
            onGameEnd={(game)=> {
                onGameEnd(game)
            }}
            onRepair={onRepair} />)
    }

    return (
        <GameContext.Provider value={{
            game: gameState,
            setGame: setGameState,
            gameExtras: gameExtras }}>
            {elementsToRender}
        </GameContext.Provider>)
}

export default GameTypePlayer;