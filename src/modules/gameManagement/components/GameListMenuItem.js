import * as React from 'react';

import '../styles/GameListMenuItem.scss';

function GameListMenuItem({gamePosition, onClickFunction, text}) {
    return <div data-gameposition={gamePosition} onClick={(event)=>{
            event.stopPropagation();
            onClickFunction(event)
        }} className="gameListMenuItem">
        {text}
    </div>;
}

export default GameListMenuItem;