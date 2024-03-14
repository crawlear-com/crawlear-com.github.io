import { useTranslation } from 'react-i18next'
import * as React from 'react';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import Utils from '../Utils';
import { AecarGameScores } from '../games/AecarGameScores';
import { RegionalZonaRcGameScores } from '../games/RegionalZonaRcGameScores';
import { Levante124GameScores } from '../games/Levante124GameScores';
import { IsrccGameScores } from '../games/IsrccGameScores';
import { MiniCrawlerPassionGameScores } from '../games/MiniCrawlerPassionGameScores';
import { GenericGameScores } from '../games/GenericGameScores';
import { GAME_TYPE_ISRCC, 
    GAME_TYPE_LEVANTE, 
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION, 
    GAME_TYPE_GENERIC,
    GameUtils } from '../games/Game';


function GameProgressionInfoRow({gameType, gameProgression}) {
    const { t } = useTranslation(['main']);

    if (gameProgression.data) {
        const points = gameProgression.data.points,
            totalPoints = gameProgression.data.totalPoints,
            time = gameProgression.data.time,
            gateFails = gameProgression.data.gatesWithFail,
            gateProgression = gameProgression.data.gateProgression,
            simpathyPoints = gameProgression.data.simpathyPoints,
            handicap = gameProgression.data.handicap,
            bonitification = gameProgression.data.gatesWithBonification;
        let gameTypeTexts = Utils.tokenToTexts(AecarGameScores.texts),
            fiascoGameTypeTexts = Utils.tokenToTexts(AecarGameScores.fiascoTexts);


        if(gameType === GAME_TYPE_ISRCC) {
            gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);
            fiascoGameTypeTexts = Utils.tokenToTexts(IsrccGameScores.fiascoTexts);
        }
        
        if(gameType === GAME_TYPE_LEVANTE) {
            gameTypeTexts = Utils.tokenToTexts(Levante124GameScores.texts);   
            fiascoGameTypeTexts = Utils.tokenToTexts(Levante124GameScores.fiascoTexts);
        }

        if(gameType ===GAME_TYPE_COPAESPANA) {
            gameTypeTexts = Utils.tokenToTexts(RegionalZonaRcGameScores.texts);   
            fiascoGameTypeTexts = Utils.tokenToTexts(RegionalZonaRcGameScores.fiascoTexts);
        }

        if(gameType ===GAME_TYPE_MINICRAWLERPASSION) {
            gameTypeTexts = Utils.tokenToTexts(MiniCrawlerPassionGameScores.texts);   
            fiascoGameTypeTexts = Utils.tokenToTexts(MiniCrawlerPassionGameScores.fiascoTexts);
        }

        if(gameType ===GAME_TYPE_GENERIC) {
            gameTypeTexts = Utils.tokenToTexts(GenericGameScores.texts);   
            fiascoGameTypeTexts = Utils.tokenToTexts(GenericGameScores.fiascoTexts);
        }   
        
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
                {typeof(handicap) !== undefined ? 
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