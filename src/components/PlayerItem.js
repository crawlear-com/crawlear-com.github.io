import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/PlayerItem.scss';

function PlayerItem({player, i, onRemovePlayer, onClickPlayer}) {
    const { t } = useTranslation();
    const contasinerRef = React.useRef();

    function removePlayer(event) {
        event.stopPropagation();
        onRemovePlayer && onRemovePlayer(event);
    }

    function onClickPlayerItem() {
        onClickPlayer && onClickPlayer(player.id);
    }

    return <li ref={contasinerRef} key={i} onClick={onClickPlayerItem} className="closed importantNote rounded playerListItem" value={player.name}>
        <div className="playerBox">
            <img referrerPolicy="no-referrer" src={player.avatar} alt="avatar"/>
            <div className="textOverflow">{player.name}</div>
            <button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>
        </div>
    </li>;
}

export default PlayerItem;