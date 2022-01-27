import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameList.scss';
import WinnerTable from './WinnerTable';

function GameList({games, onRemoveGame}) {
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

    games && games.forEach((doc)=>{
        gameList.push(<div key={i} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{doc.name} - {doc.date}</span>
                <button data-position={i} className="removeButton" onClick={removeGame}>-</button>

                <WinnerTable game={doc} />
            </div>);
        i++;
    })

    if(!games || games.length === 0) {
        gameList.push(<div className="centerText smallText">{t('description.nopartidas')}</div>);
    }

    return <div className="gameList rounded rounded3">
            <div className="headerText bold">{t('description.partidasprevias')}</div>
            {gameList}
        </div>;
}

export default GameList;