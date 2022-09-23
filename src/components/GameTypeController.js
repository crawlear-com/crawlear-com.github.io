import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameTypeController.scss';

function GameTypeController({onGameTypeChange,  selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation();
    const labelsGameType = [t('gametype.aecar'), 
            t('gametype.rey'),
            t('gametype.isrcc'),
            t('gametype.levante124'),
            t('gametype.copaespana')],
        textsGameType = [<div>{t('gametype.modojuegoarcar')}</div>,
                <div>{t('gametype.modojuegorey')}</div>,
                <div>{t('gametype.modojuegoisrcc')}</div>,
                <div>{t('gametype.modojuegolevante124')}</div>,
                <div>{t('gametype.modojuegocopaespana')}</div>
            ];

    const [state, setState] = React.useState({
        gameType: selectedGameType
    });
    
    function onSelectGameTypeChange(event) {
        const selected = event.target.selectedIndex;

        onGameTypeChange && onGameTypeChange(selected);
        setState({
            gameType: selected
        });
    }

    return <>
        <div className="gameType rounded1 rounded">
            <label htmlFor="gameTypeSelect" className="headerText bold">{t('gametype.modojuego')}
                <select id="gameTypeSelect" defaultValue={3} onChange={onSelectGameTypeChange}>
                    <option value={0}>{labelsGameType[0]}</option>
                    <option value={1}>{labelsGameType[1]}</option>
                    <option value={2}>{labelsGameType[2]}</option>
                    <option value={3}>{labelsGameType[3]}</option>
                    <option value={4}>{labelsGameType[4]}</option>
                </select>
            </label>
            <div className="gameSelectText smallText">{textsGameType[state.gameType]}</div>
        </div>
    </>;
}

export default GameTypeController;