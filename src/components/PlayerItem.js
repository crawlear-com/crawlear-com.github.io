import * as React from 'react';
import Picker from './Picker';
import { useTranslation } from 'react-i18next';

import '../resources/css/PlayerItem.scss';

function PlayerItem({player, i, onRemovePlayer, onHandicapChange}) {
    const { t } = useTranslation();
    const contasinerRef = React.useRef();

    function playerOnClick(event) {
        contasinerRef.current.classList.toggle('closed');
    }

    function onPickerValueChange(value) {
        onHandicapChange && onHandicapChange(value, i);
    }

    function avoidDefault(event) {
        event.stopPropagation();
    }

    function removePlayer(event) {
        event.stopPropagation();
        onRemovePlayer && onRemovePlayer(event);
    }

    return <li ref={contasinerRef} key={i} className="closed importantNote rounded playerListItem" value={player.name}>
        <div className="playerBox" onClick={playerOnClick}>
            <img src={player.avatar} alt="avatar"/>
            {player.name} ({player.handicap})
            <button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>
        </div>
        <div onClick={avoidDefault} className="pickerContainer timerContainer rounded rounded2 handicapBox">
            <div className="handicapLabel">{t('description.handicap')}</div>
            <Picker value={player.handicap}initialValue={player.handicap} callback={onPickerValueChange} minValue={-40} maxValue={40} />
        </div>
    </li>;
}

export default PlayerItem;