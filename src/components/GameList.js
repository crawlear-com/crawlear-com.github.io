import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameProgressionInfo from './GameProgressionInfo';
import WinnerTable from './WinnerTable';
import { GameUtils } from '../model/Game.ts';

import '../resources/css/GameList.scss';

function GameList({games, gameProgressions, readOnly, onRemoveGame, title, onGamePlay}) {
    const { t } = useTranslation();
    let i=0,
        gameList = [];

    function openCloseGame(event) {
        const element = event.target.parentElement;

        element.classList.toggle('closed');
    }

    function removeGame(event) {
        const position = event.target.getAttribute("data-position");
        
        if (window.confirm(t('content.seguroborrarjuego'))) {
            onRemoveGame && onRemoveGame(Number(position));
        }
    }

    games && games.forEach((game) => {
        let info, 
            director = <></>;

        if(game.gameStatus === 0 || game.gameStatus === 1) {
            if(gameProgressions && gameProgressions[game.gid]) {
                info = <GameProgressionInfo
                    game={game}
                    gameProgression={gameProgressions[game.gid]} 
                />
            }

            if ((game.jids.find(element=>window.crawlear.user.uid===element) || GameUtils.isCurrentUserIsOwner(game.owner)) && !readOnly) {
                info = <><button className="importantNote playGameButton" data-gameposition={i} onClick={onGamePlay}></button>{info}</>;
            }
        } else {
            info =<WinnerTable game={game} />;
        }

        if(GameUtils.isCurrentUserIsOwner(game.owner)) {
            director = "(D) "
        }

        gameList.push(<div key={i} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{director}{game.name} - {game.date}</span>
                <button data-position={i} className="removeButton" onClick={removeGame}>-</button>
                {info}
            </div>);
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