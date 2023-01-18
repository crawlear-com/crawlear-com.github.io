import * as React from 'react';
import GameListMenuItem from './GameListMenuItem';
import { useTranslation } from 'react-i18next';

function GameListMenu({gamePosition, onRemoveClick, onRegenerateClick}) {
    const { t } = useTranslation();
    const containerRef = React.useRef(null);

    function toggleMenu() {
        containerRef.current.classList.toggle('closed');
    }

    return <span ref={containerRef} class="gameListItemMenu rounded closed">
        <div onClick={toggleMenu} >
            <div class="burguerMenuBar"></div>
            <div class="burguerMenuBar"></div>
            <div class="burguerMenuBar"></div>
        </div>            

        <GameListMenuItem text={t('description.eliminarpartida')} 
            gamePosition={gamePosition}
            onClickFunction={(event)=>{
                toggleMenu();
                onRemoveClick(event);
            }}/>
        <GameListMenuItem text={t('description.regenerarpartida')} 
            gamePosition={gamePosition}
            onClickFunction={onRegenerateClick} />
    </span>;
}

export default GameListMenu;