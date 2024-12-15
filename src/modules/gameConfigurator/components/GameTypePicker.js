import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useGameTypePicker from '../hooks/useGameTypePicker'

import '../styles/GameTypeController.scss';

function GameTypePicker({onGameTypeChange,  selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation(['main'])
    const [gameType, optionElements, onSelectGameTypeChange] = useGameTypePicker(selectedGameType, onGameTypeChange)
    const textsGameType = [<div>{t('gametype.modojuegoarcar')}</div>,
        <div>{t('gametype.modojuegorey')}</div>,
        <div>{t('gametype.modojuegoisrcc')}</div>,
        <div>{t('gametype.modojuegolevante124')}</div>,
        <div>{t('gametype.modojuegocopaespana')}</div>,
        <div>{t('gametype.modojuegominicrawlerpassion')}</div>,
        <div>{t('gametype.modojuegogeneric')}</div>];

    return <>
        <div className="gameType rounded1 rounded">
            <label htmlFor="gameTypeSelect" className="headerText bold">{t('gametype.modojuego')}
                <select id="gameTypeSelect" defaultValue={selectedGameType} onChange={onSelectGameTypeChange}>
                    { optionElements }
                </select>
            </label>
            <div className="gameSelectText smallText">{textsGameType[gameType]}</div>
        </div>
    </>;
}

export default GameTypePicker;