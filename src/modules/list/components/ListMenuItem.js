import * as React from 'react';

import '../styles/ListMenuItem.scss'

function ListMenuItem({itemKey, onClickFunction, text}) {
    return <div data-key={itemKey} onClick={(event)=>{
            event.stopPropagation();
            onClickFunction(event)
        }} className="itemListMenuItem">
        {text}
    </div>;
}

export default ListMenuItem;