import * as React from 'react'
import KingGame from './KingGame'
import CoreGame from './CoreGame'
import { GameContext } from '../../../context/GameContext'
import { Game } from '../../../games/Game'
import { Player, Zone } from '../../../games/GameInterfaces'

const GAME_TYPE_KING = 1

interface GameTypePlayerProps {
    game: Game,
    player?: Player,
    zone?: Zone,
    onGameEnd: Function,
    onRepair?: Function,
    children?: React.JSX.Element
}

function GameTypePlayer({game, player, zone, onGameEnd, onRepair, children }: GameTypePlayerProps) {
    const [gameState, setGameState] = React.useState(game)
    const elementsToRender = []
    const gameContextValues = { game: gameState, setGame: setGameState }

    if (gameState.gameType !== GAME_TYPE_KING) {
        elementsToRender.push(<CoreGame key={1} onGameEnd={(game: Game)=>{onGameEnd(game)}} onRepair={onRepair}
            playerIndex={player} zoneIndex={zone}>
                {children}
        </CoreGame>)
    } else {
        elementsToRender.push(<KingGame key={0} onGameEnd={(game: Game)=> {
                onGameEnd(game)
            }}  />)
    }

    return (
        <GameContext.Provider value={gameContextValues}>
            {elementsToRender}
        </GameContext.Provider>)
}

export default GameTypePlayer;