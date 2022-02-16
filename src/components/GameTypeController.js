import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/GameTypeController.scss';

function GameTypeController({onGameTypeChange, onPointsTypeChange, selectedGameType=0, selectedPointsType=0}) {
    const { t } = useTranslation();
    const labelsGameType = [`${t('gametype.puntos')}/${t('gametype.tiempo')}`, 
            t('gametype.rey')],
        textsGameType = [<div>{t('gametype.modojuegotiempo')}</div>,
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
            <label htmlFor="gameTypeSelect" className="headerText bold">{t('gametype.modojuego')}
            <select id="gameTypeSelect" defaultValue={0} onChange={onSelectGameTypeChange}>
                <option value={0}>{labelsGameType[0]}</option>
                <option value={1}>{labelsGameType[1]}</option>
            </select></label>
            <div className="gameSelectText smallText">{textsGameType[state.gameType]}</div>
        </div>

        <div className="gameType rounded1 rounded">
            <label htmlFor="pointsTypeSelect" className="headerText bold">{t('gametype.tipopuntuacion')}
            <select id="pointsTypeSelect" defaultValue={0} onChange={onSelectPointsTypeChange}>
                <option value={0}>{labelsPointsType[0]}</option>
                {state.gameType===0?<option value={1}>{labelsPointsType[1]}</option>:<></>}
            </select></label>
            <div className="gameSelectText smallText">{textsPointsType[state.pointsType]}</div>
        </div>
    </>;
}

export default GameTypeController;