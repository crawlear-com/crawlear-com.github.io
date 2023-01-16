import * as React from 'react';

import '../resources/css/GameListMenuItem.scss';

function GameListMenuItem({gamePosition, onClickFunction, text}) {
    return <div data-gameposition={gamePosition} onClick={(event)=>{
            event.stopPropagation();
            onClickFunction(event)
        }} class="gameListMenuItem">
        {text}
    </div>;
}

export default GameListMenuItem;