import * as React from 'react';
import GameProgressionInfo from './GameProgressionInfo';
import { GameUtils } from '../model/Game.ts';
import WinnerTable from './WinnerTable';

import '../resources/css/GameListItem.scss';

function GameListItem({game, gamePosition, gameProgression, onGamePlay, readOnly}) {
    let info, 
    director = <></>;

    if(game.gameStatus === 0 || game.gameStatus === 1) {
        if(gameProgression) {
            info = <GameProgressionInfo
                game={game}
                gameProgression={gameProgression} 
            />
        }

        if ((game.jids.find(element=>window.crawlear.user.uid===element) || GameUtils.isCurrentUserIsOwner(game.owner)) && !readOnly) {
            info = <><button className="importantNote playGameButton" data-gameposition={gamePosition} onClick={onGamePlay}></button>{info}</>;
        }
    } else {
        info =<WinnerTable game={game} />;
    }

    if(GameUtils.isCurrentUserIsOwner(game.owner)) {
        director = "(D) "
    }

    function openCloseGame(event) {
        const element = event.target.parentElement;

        element.classList.toggle('closed');
    }

    return <div key={gamePosition} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{director}{game.name} - {game.date}</span>
                {info}
            </div>;
}

//<button data-position={gamePosition} className="removeButton" onClick={removeGame}>-</button>

export default GameListItem;