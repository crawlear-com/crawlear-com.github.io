import * as React from 'react';
import Picker from './Picker';
import { useTranslation } from 'react-i18next';

import '../resources/css/PlayerItem.scss';

function PlayerItem({player, i, onRemovePlayer}) {
    const { t } = useTranslation();
    const contasinerRef = React.useRef();

    function removePlayer(event) {
        event.stopPropagation();
        onRemovePlayer && onRemovePlayer(event);
    }

    return <li ref={contasinerRef} key={i} className="closed importantNote rounded playerListItem" value={player.name}>
        <div className="playerBox">
            <img referrerPolicy="no-referrer" src={player.avatar} alt="avatar"/>
            <div className="textOverflow">{player.name}</div>
            <button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>
        </div>
    </li>;
}

export default PlayerItem;