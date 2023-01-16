import * as React from 'react';
import GameListMenuItem from './GameListMenuItem';
import { useTranslation } from 'react-i18next';

function GameListMenu({gamePosition, onRemoveClick, onRegenerateClick}) {
    const { t } = useTranslation();

    function openMenu(event) {
        const element = event.target.closest('.gameListItemMenu');

        element.classList.toggle('closed');
    }

    return <span  class="gameListItemMenu rounded closed">
        <div onClick={openMenu}>
            <div class="burguerMenuBar"></div>
            <div class="burguerMenuBar"></div>
            <div class="burguerMenuBar"></div>
        </div>

        <GameListMenuItem text={t('description.eliminarpartida')} 
            gamePosition={gamePosition}
            onClickFunction={onRemoveClick}/>
        <GameListMenuItem text={t('description.regenerarpartida')} 
            gamePosition={gamePosition}
            onClickFunction={onRegenerateClick} />
    </span>;
}

export default GameListMenu;