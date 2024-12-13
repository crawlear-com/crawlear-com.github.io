import { useTranslation } from 'react-i18next'
import * as React from 'react';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import Utils from '../Utils';
import { getAllGameTexts } from '../modules/gamePlayer/GamePlayerUtils';
import { GameUtils } from '../games/Game';


function GameProgressionInfoRow({gameType, gameProgression}) {
    const { t } = useTranslation(['main'])

    if (gameProgression.data) {
        const { points, totalPoints, time, gateFails, gateProgression,
            simpathyPoints, handicap, bonitification } = gameProgression.data;
        let [gameTypeTexts, fiascoGameTypeTexts] = getAllGameTexts(gameType, t)

        return <>
            <ul>
                <li>{t('description.puntos')}: <span className="bold">{points}</span></li>
                {gateProgression ? <li>{t('description.avancepuerta')}: <span className="bold">{gateProgression}</span></li> : <></>}
                {typeof(gateFails) !== 'undefined' && typeof(bonitification) !== 'undefined' ? <>
                    <li>{t('description.fallospuerta')}: <span className="bold">{gateFails}</span></li>
                    <li>{t('description.bonificacion')}: <span className="bold">{bonitification*-2}</span></li></>
                :<></>}
                {typeof(simpathyPoints) !== 'undefined' ?
                    <li>{t('description.portiempo')}: <span className="bold">{simpathyPoints}</span></li>
                :<></>}
                {typeof(handicap) !== 'undefined'?
                    <li>{t('description.handicap')}: <span className="bold">{handicap}</span></li>
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
                    texts={fiascoGameTypeTexts} />
            </> :
            <></>}
        </>;
    }

    return <></>;
}

export default GameProgressionInfoRow;