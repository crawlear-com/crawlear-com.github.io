import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/PlayerItem.scss';

function PlayerItem({player, i,
    onRemovePlayer,
    onClickPlayer,
    onGroupChange,
    maxGroups,
    editMode,
    isForJudge,
    onGameDirectorChange}) {
    const { t } = useTranslation(['main']);
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

    function onGameDirectorCheckboxChange(event) {
        onGameDirectorChange && onGameDirectorChange(player.id, event.target.checked);
    }

    if (editMode) {
        const options = [];

        for (let i=0; i<maxGroups;i++) {
            options.push(<option key={`group${player.name}${i}`} value={i}>{t('description.grupo')} {i+1}</option>);
        }

        editControls.push(<button key={`remove${player.name}${i}`} className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>);
        editControls.push(<div key={`groupSelection${player.name}${i}`}>
            <select value={player.group} onChange={onGroupSelectChange}>
                {options}
            </select></div>);
        if (isForJudge) {
            editControls.push(<div key={`gameDirectorCheck{player.name}${i}`}>
                <input type="checkbox" onChange={onGameDirectorCheckboxChange}></input>
                <span className='PlayerItemGameDirector'>{t('description.directordepartida')}</span>
            </div>);
        }
    }

    return <li key={player.name} onClick={onClickPlayerItem} className="closed importantNote rounded playerListItem" value={player.name}>
        <div className="playerBox">
            <img referrerPolicy="no-referrer" src={player.avatar} alt="avatar"/>
            <div className="textOverflow">{player.name}</div>
           {editControls}
        </div>
    </li>;
}

export default PlayerItem;