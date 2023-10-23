import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/GameTypeController.scss';

function GameTypeController({onGameTypeChange,  selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation();
    const labelsGameType = [t('gametype.aecar'), 
            t('gametype.rey'),
            t('gametype.isrcc'),
            t('gametype.levante124'),
            t('gametype.copaespana'),
            t('gametype.minicrawlerpassion'),
            t('gametype.generic')],
        textsGameType = [<div>{t('gametype.modojuegoarcar')}</div>,
                <div>{t('gametype.modojuegorey')}</div>,
                <div>{t('gametype.modojuegoisrcc')}</div>,
                <div>{t('gametype.modojuegolevante124')}</div>,
                <div>{t('gametype.modojuegocopaespana')}</div>,
                <div>{t('gametype.modojuegominicrawlerpassion')}</div>,
                <div>{t('gametype.modojuegogeneric')}</div>
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

    const optionElements = [];

    labelsGameType.forEach((element, position)=>{
        optionElements.push(<option key={position} value={position}>{labelsGameType[position]}</option>);
    });

    return <>
        <div className="gameType rounded1 rounded">
            <label htmlFor="gameTypeSelect" className="headerText bold">{t('gametype.modojuego')}
                <select id="gameTypeSelect" defaultValue={selectedGameType} onChange={onSelectGameTypeChange}>
                    {optionElements}
                </select>
            </label>
            <div className="gameSelectText smallText">{textsGameType[state.gameType]}</div>
        </div>
    </>;
}

export default GameTypeController;