import * as React from 'react'
import { Game } from '../../games/Game';
import { GAME_TYPE_KING } from '../../games/Game';
import GameTypePlayer from './components/GameTypePlayer';
import { GameProgressionContext } from '../../context/GameProgressionContext';
import { gameExtras } from '../../games/KingGameScores';
import { GameProgressionData } from '../../games/GameInterfaces';
import GamePlayerMenu from './components/GamePlayerMenu';

interface GamePlayerBeginGameProps {
    game: Game,
    onBeginGame: Function,
    onGameEnd: Function,
    gameProgression: GameProgressionData,
    setGameProgression: Function,
    onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>,
    onClosePlayButtonClick: Function,
    jidGroup: number
}

function GamePlayerBeginGame({ game, onBeginGame, onGameEnd, onBackButtonClick, onClosePlayButtonClick,
        jidGroup, gameProgression, setGameProgression }: GamePlayerBeginGameProps) {
    let view = <></>

    if (game.gameType === GAME_TYPE_KING) {
        view = <GameTypePlayer
        game={game}
        onGameEnd={onGameEnd}
        gameExtras={gameExtras} />;
    } else {
        view = <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
                <GamePlayerMenu game={game} jidGroup={jidGroup} onBeginGame={onBeginGame}
                    onBackButtonClick={onBackButtonClick} onCloseButonClick={onClosePlayButtonClick} />
            </GameProgressionContext.Provider>
    }

    return view
}

export default GamePlayerBeginGame