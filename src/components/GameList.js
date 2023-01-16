import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameListMenu from './GameListMenu';
import GameListItem from './GameListItem';
import { GameUtils } from '../model/Game.ts';

import '../resources/css/GameList.scss';

function GameList({games, gameProgressions, readOnly, onRemoveGame, onConfigureGame, title, onGamePlay}) {
    const { t } = useTranslation();
    const fb = window.crawlear.fb;
    let i=0,
        gameList = [];

    function removeGame(event) {
        const position = event.target.getAttribute("data-gameposition");
        
        if (window.confirm(t('content.seguroborrarjuego'))) {
            onRemoveGame && onRemoveGame(Number(position));
        }
    }

    function regenerateGame(event) {
        const position = event.target.getAttribute("data-gameposition");
        const newGame = {...games[position]};

        GameUtils.init(newGame, 
            GameUtils.getGameTypeControlTextValuesInit(newGame.gameType),
            GameUtils.getGameTypeFiascoControlTextValuesInit(newGame.gameType),
            true);
            onConfigureGame(position);
    }

    games && games.forEach((game) => {
        gameList.push(<>
            <GameListMenu gamePosition={i}
                onRegenerateClick={regenerateGame} 
                onRemoveClick={(event)=>{
                    removeGame(event);
                    onRemoveGame(event);
                }} />
            <GameListItem game={game} 
                onGamePlay={onGamePlay}
                gamePosition={i} 
                gameProgression={gameProgressions && gameProgressions[game.gid]} 
                readOnly={readOnly} /></>);
        i++;
      });

    if(!games || games.length === 0) {
        gameList.push(<div key={i} className="centerText smallText">{t('description.nopartidas')}</div>);
    }

    return <div className="gameList rounded rounded3">
            <div className="headerText bold">{title}</div>
            {gameList}
        </div>;
}

export default GameList;