import * as React from 'react';

import '../styles/ListMenuItem.scss'

function ListMenuItem({itemPosition, onClickFunction, text}) {
    return <div data-itemposition={itemPosition} onClick={(event)=>{
            event.stopPropagation();
            onClickFunction(event)
        }} className="itemListMenuItem">
        {text}
    </div>;
}

export default ListMenuItem;