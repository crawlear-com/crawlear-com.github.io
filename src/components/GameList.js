import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameProgressionInfo from './GameProgressionInfo';
import '../resources/css/GameList.scss';
import WinnerTable from './WinnerTable';

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
        let info;

        if(game.gameStatus === 0 || game.gameStatus === 1) {
            if(gameProgressions && gameProgressions[game.gid]) {
                info = <GameProgressionInfo
                    game={game}
                    gameProgression={gameProgressions[game.gid]} 
                />
            }

            if (game.jids.find(element=>window.crawlear.user.uid===element && !readOnly)) {
                info = <><button className="importantNote playGameButton" data-gameposition={i} onClick={onGamePlay}></button>{info}</>;
            }
        } else {
            info = <WinnerTable game={game} />;
        }

        gameList.push(<div key={i} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{game.name} - {game.date}</span>
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