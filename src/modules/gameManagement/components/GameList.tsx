import * as React from 'react'
import { useTranslation } from 'react-i18next'
import GameListMenu from './GameListMenu'
import GameListItem from './GameListItem'
import { Game, GameUtils } from '../../../games/Game'

import '../styles/GameList.scss';

interface GameListProps {
    games: Array<any>,
    readOnly: boolean,
    onRemoveGame?: Function,
    onConfigureGame?: Function,
    title: string,
    onGamePlay: React.MouseEventHandler<HTMLButtonElement>,
}

function GameList({games, readOnly, onRemoveGame, onConfigureGame, title, onGamePlay}: GameListProps) {
    const { t } = useTranslation();
    const fb = window.crawlear.fb;
    let i=0,
        gameList = [];

    function removeGame(event: React.MouseEvent<HTMLDivElement>) {
        const position = (event.target as HTMLDivElement).getAttribute("data-gameposition");
        
        if (window.confirm(t('content.seguroborrarjuego'))) {
            onRemoveGame && onRemoveGame(Number(position));
        }
    }

    function regenerateGame(event: React.MouseEvent<HTMLDivElement>) {
        const position = Number((event.target as HTMLDivElement).getAttribute("data-gameposition"))
        const newGame = {...games[position]};

        GameUtils.init(newGame, 
            GameUtils.getGameTypeControlTextValuesInit(newGame.gameType),
            GameUtils.getGameTypeFiascoControlTextValuesInit(newGame.gameType),
            true);
            onConfigureGame && onConfigureGame(position);                
    }

    games && games.forEach((game) => {
        gameList.push(<div key={i}>
            { onConfigureGame && onRemoveGame && <GameListMenu key={`menu${i}`} gamePosition={i}
                onRegenerateClick={regenerateGame} 
                onRemoveClick={(event: React.MouseEvent<HTMLDivElement>)=>{
                    removeGame(event);
                }} /> }
            <GameListItem key={`item${i}`} game={game} 
                onGamePlay={onGamePlay}
                gamePosition={i} 
                readOnly={readOnly} />
        </div>)
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