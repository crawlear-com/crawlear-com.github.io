import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Player, Judge } from '../../../games/GameInterfaces';

import '../styles/PlayerItem.scss';

interface PlayerItemProps {
    player: Player | Judge,
    i: number,
    onRemovePlayer: Function,
    onClickPlayer?: Function,
    onGroupChange: Function,
    maxGroups: number,
    editMode: boolean,
    isForJudge: boolean,
    onGameDirectorChange: Function
}

function PlayerItem({player, i,
    onRemovePlayer,
    onClickPlayer,
    onGroupChange,
    maxGroups,
    editMode,
    isForJudge,
    onGameDirectorChange}: PlayerItemProps) {
    const { t } = useTranslation(['main']);
    const editControls = [];

    function removePlayer(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.stopPropagation();
        onRemovePlayer && onRemovePlayer(event);
    }

    function onClickPlayerItem() {
        onClickPlayer && onClickPlayer(player.id);
    }

    function onGroupSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const group = (event.target as HTMLSelectElement).selectedIndex;

        onGroupChange && onGroupChange(player.id, group);
    }

    function onGameDirectorCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        onGameDirectorChange && onGameDirectorChange(player.id, (event.target as HTMLInputElement).checked);
    }

    if (editMode) {
        const options = [];

        for (let i=0; i<maxGroups;i++) {
            options.push(<option key={`group${player.name}${i}`} value={i}>{t('description.grupo')} {i+1}</option>);
        }

        editControls.push(<button key={`remove${player.name}${i}`} className="buttonControlTextMinus" id={i.toString()} onClick={removePlayer}>-</button>);
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