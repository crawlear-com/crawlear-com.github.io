import * as React from 'react';
import GameProgressionInfo from '../../../components/GameProgressionInfo';
import { GameUtils } from '../../../model/Game';
import WinnerTable from '../../../components/WinnerTable';

import '../styles/GameListItem.scss';

function GameListItem({game, gamePosition, onGamePlay, readOnly}) {
    const [gameProgression, setGameProgression] = React.useState(null);
    const firebase = window.crawlear.fb;
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
        if(!element.classList.contains('closed') && !gameProgression) {
            firebase.getGameProgressionOnce(game.gid, (uid, progression)=>{
                setGameProgression({...progression});
            }, ()=>{ });
        }
    }

    return <div key={gamePosition} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{director}{game.name} - {game.date}</span>
                {info}
            </div>;
}

export default GameListItem;