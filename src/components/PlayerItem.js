import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/PlayerItem.scss';

const MAX_GROUPS = 10;

function PlayerItem({player, i, onRemovePlayer, onClickPlayer, onGroupChange, editMode}) {
    const { t } = useTranslation();
    const editControls = [];

    function removePlayer(event) {
        event.stopPropagation();
        onRemovePlayer && onRemovePlayer(event);
    }

    function onClickPlayerItem() {
        onClickPlayer && onClickPlayer(player.id);
    }

    function onGroupSelectChange(event) {
        const group = event.target.selectedIndex;

        onGroupChange && onGroupChange(player.id, group);
    }

    if (editMode) {
        const options = [];

        for (let i=0; i<MAX_GROUPS;i++) {
            options.push(<option value={i}>{t('description.grupo')} {i+1}</option>);
        }

        editControls.push(<button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>);
        editControls.push(<div><span>Grupo:</span>
            <select value={player.group} onChange={onGroupSelectChange}>
                {options}
            </select></div>);
    }

    return <li key={i} onClick={onClickPlayerItem} className="closed importantNote rounded playerListItem" value={player.name}>
        <div className="playerBox">
            <img referrerPolicy="no-referrer" src={player.avatar} alt="avatar"/>
            <div className="textOverflow">{player.name}</div>
           {editControls}
        </div>
    </li>;
}

export default PlayerItem;