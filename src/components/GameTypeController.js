import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameTypeController.scss';

function GameTypeController({onGameTypeChange, onPointsTypeChange, selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation();
    const labelsGameType = [t('gametype.tiempo'), 
            t('gametype.puntos'),
            t('gametype.rey')],
        textsGameType = [<div>{t('gametype.modojuegotiempo')}</div>,
                <div>{t('gametype.modojuegopuntos')}</div>,
                <div>{t('gametype.modojuegorey')}</div>
            ];

        const labelsPointsType = [t('gametype.simple'), t('gametype.completa')],
      textsPointsType = [<div>{t('gametype.descripcionPuntosSimple')}</div>,
            <div>{t('gametype.descripcionPuntosCompleta')}</div>
            ];

    const [state, setState] = React.useState({
        gameType: selectedGameType,
        pointsType: selectedPointsType
    });
    
    function onSelectGameTypeChange(event) {
        const selected = event.target.selectedIndex;

        onGameTypeChange && onGameTypeChange(selected);
        setState({
            gameType: selected,
            pointsType: state.pointsType
        });
    }

    function onSelectPointsTypeChange(event) {
        const selected = event.target.selectedIndex;

        onPointsTypeChange && onPointsTypeChange(selected);
        setState({
            gameType: state.gameType,
            pointsType: selected
        });
    }

    return <>
        <div className="gameType rounded1 rounded">
            <div className="headerText bold">{t('gametype.modojuego')}:</div>
            <select defaultValue={state.gameType} onChange={onSelectGameTypeChange}>
                <option value="0">{labelsGameType[0]}</option>
                <option value="1">{labelsGameType[1]}</option>
                <option value="2">{labelsGameType[2]}</option>
            </select>
            <div className="gameSelectText">{textsGameType[state.gameType]}</div>
        </div>

        <div className="gameType rounded1 rounded">
            <div className="headerText bold">{t('gametype.tipopuntuacion')}:</div>
            <select defaultValue={state.pointsType} onChange={onSelectPointsTypeChange}>
                <option value="0">{labelsPointsType[0]}</option>
                <option value="1">{labelsPointsType[1]}</option>
            </select>
            <div className="gameSelectText">{textsPointsType[state.pointsType]}</div>
        </div>
    </>;
}

export default GameTypeController;