import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameTypeController.scss';

function GameTypeController({onGameTypeChange,  selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation();
    const labelsGameType = [t('gametype.aecar'), 
            t('gametype.rey'),t('gametype.isrcc')],
        textsGameType = [<div>{t('gametype.modojuegoarcar')}</div>,
                <div>{t('gametype.modojuegorey')}</div>,
                <div>{t('gametype.modojuegoisrcc')}</div>
            ];

    const [state, setState] = React.useState({
        gameType: selectedGameType,
        pointsType: (selectedGameType === 0 || selectedGameType === 2 ? 1 : selectedPointsType)
    });
    
    function onSelectGameTypeChange(event) {
        const selected = event.target.selectedIndex,
            pointsType = (selected === 0 || selected === 2 ? 1 : state.pointsType);

        onGameTypeChange && onGameTypeChange(selected);
        setState({
            gameType: selected,
            pointsType: pointsType
        });
    }

    return <>
        <div className="gameType rounded1 rounded">
            <label htmlFor="gameTypeSelect" className="headerText bold">{t('gametype.modojuego')}
            <select id="gameTypeSelect" onChange={onSelectGameTypeChange}>
                <option value={0}>{labelsGameType[0]}</option>
                <option value={1}>{labelsGameType[1]}</option>
                <option value={2}>{labelsGameType[2]}</option>
            </select></label>
            <div className="gameSelectText smallText">{textsGameType[state.gameType]}</div>
        </div>
    </>;
}

export default GameTypeController;