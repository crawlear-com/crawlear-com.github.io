import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/PlayerItem.scss';

function PlayerItem({player, i, 
    onRemovePlayer, 
    onClickPlayer, 
    onGroupChange, 
    maxGroups, 
    editMode, 
    isForJudge,
    onGameDirectorChange}) {
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

    function onGameDirectorCheckboxChange(event) {
        onGameDirectorChange && onGameDirectorChange(player.id, event.target.checked);
    }

    if (editMode) {
        const options = [];

        for (let i=0; i<maxGroups;i++) {
            options.push(<option value={i}>{t('description.grupo')} {i+1}</option>);
        }

        editControls.push(<button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>);
        editControls.push(<div>
            <select value={player.group} onChange={onGroupSelectChange}>
                {options}
            </select></div>);
        if (isForJudge) {
            editControls.push(<>
                <input type="checkbox" onChange={onGameDirectorCheckboxChange}></input>
                <span className='PlayerItemGameDirector'>{t('description.directordepartida')}</span>
            </>);    
        }
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