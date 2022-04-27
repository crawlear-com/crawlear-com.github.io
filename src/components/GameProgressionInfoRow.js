import { t } from 'i18next';
import * as React from 'react';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import IsrccGameScores from './games/IsrccGameScores';
import { GameUtils } from '../model/Game';
import Utils from '../Utils';

function GameProgressionInfoRow({gameProgression, gameTypeTexts}) {
    if (gameProgression.data) {
        const points = gameProgression.data.points,
        time = gameProgression.data.time,
        gateFails = gameProgression.data.gatesWithFail,
        gateProgression = gameProgression.data.gateProgression,
        bonitification = gameProgression.data.gatesWithBonification;

        return <>
            <ul>
                <li>{t('description.puntos')}: <span className="bold">{points}</span></li>
                <li>{t('description.tiempo')}: <span className="bold">{Utils.printTime(Utils.millisToTime(time))}</span></li>
                {gateProgression ? <li>{t('description.avancepuerta')}: <span className="bold">{gateProgression}</span></li> : <></>}
                {gateFails && bonitification ? <>
                    <li>{t('description.fallospuerta')}: <span className="bold">{gateFails}</span></li>
                    <li>{t('description.bonificacion')}: <span className="bold">{bonitification}</span></li></>
                :<></>}
                
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