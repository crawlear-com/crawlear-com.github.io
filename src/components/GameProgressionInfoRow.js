import { t } from 'i18next';
import * as React from 'react';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import IsrccGameScores from './games/IsrccGameScores';
import { GameUtils } from '../model/Game';
import Utils from '../Utils';

function GameProgressionInfoRow({gameProgression, gameTypeTexts}) {
    if (gameProgression.data) {
        const points = gameProgression.data.points,
            totalPoints = gameProgression.data.totalPoints,
            time = gameProgression.data.time,
            gateFails = gameProgression.data.gatesWithFail,
            gateProgression = gameProgression.data.gateProgression,
            simpathyPoints = gameProgression.data.simpathyPoints,
            bonitification = gameProgression.data.gatesWithBonification;

        return <>
            <ul>
                <li>{t('description.puntos')}: <span className="bold">{points}</span></li>
                {gateProgression ? <li>{t('description.avancepuerta')}: <span className="bold">{gateProgression}</span></li> : <></>}
                {typeof(gateFails) !== undefined && typeof(bonitification) !== undefined ? <>
                    <li>{t('description.fallospuerta')}: <span className="bold">{gateFails}</span></li>
                    <li>{t('description.bonificacion')}: <span className="bold">{bonitification*-2}</span></li></>
                :<></>}
                {typeof(simpathyPoints) !== undefined ? 
                    <li>{t('description.portiempo')}: <span className="bold">{simpathyPoints}</span></li> 
                :<></>}
                <li>{t('description.total')}: <span className="bold">{totalPoints}</span></li>
                <li>{t('description.tiempo')}: <span className="bold">{Utils.printTime(Utils.millisToTime(time))}</span></li>
            </ul>

            <ControlTextArrayVisualization
                controlTextValues={gameProgression.data.gateProgressionData ? 
                    GameUtils.sumControlTextValues(gameProgression.data.gateProgressionData)
                    : gameProgression.data.controlTextValues} 
                texts={gameTypeTexts} />

            {gameProgression.data.fiascoControlTextValues && gameProgression.data.fiascoControlTextValues.filter(x => x > 0).length>0 ? 
            <>
                <div className="fiascosText left bold">{t('points.fiascos')}:</div>
                <ControlTextArrayVisualization 
                    controlTextValues={gameProgression.data.fiascoControlTextValues} 
                    texts={Utils.tokenToTexts(IsrccGameScores.fiascoTexts)} /> 
            </> : 
            <></>}
        </>;
    }

    return <></>;
}

export default GameProgressionInfoRow;