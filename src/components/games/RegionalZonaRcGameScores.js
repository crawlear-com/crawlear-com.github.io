import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import RegionalZonaRcPoints from './RegionalZonaRcPoints';
import RegionalZonaRcModificator from './RegionalZonaRcModificator';
import Analytics from '../../Analytics';

import '../../resources/css/games/RegionalZonaRcGameScores.scss';

const RegionalZonaRcGameScores = {
    steps: [-5, 10, 10, 10, 10, 5, 5, 5, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 4],
    maxValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    texts: ['points.puertabonificada',
    'points.reparacion30mins',
    'points.conectarentiempoajuste',
    'points.nococheparquecerrado',

    'points.empujarcocheacompañar',
    'points.acaompañarcoche',
    'points.saltarsepuerta',
    'points.reparacionherramientasinsitu',
    'points.manipulacionvehiculocarpa',
    'points.saltarzona',
    'points.tocarcocheiniciovuelco',
    'points.vuelcoasistidotoque',
    'points.vuelcoasistido',
    'points.caidapuente',
    'points.recolocarpuente',
    'points.utilizacionextrawinch',
    'points.vuelcotoquepuertapiloto',
    'points.terminarzonasinobjeto',
    'points.tocarcoche',
    'points.tocarpuerta',
    'points.vuelconoasistido',
    'points.interferiraccionjuez',
    'points.moverwinch',
    'points.tiemposentrenamiento',
    'points.unaruedaejetrasero',
    'points.tocarpuertaunarueda'],

    fiascoTexts: ['points.noempezado',
        'points.bateria',
        'points.reparacion'],
    fiascoSteps: [1,1,1],
    fiascoMaxValues: [1,1,1]
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
        controlTextValuesString='controlTextValues'
        player={player}
        zone={zone}
        steps={RegionalZonaRcGameScores.steps}
        maxValues={RegionalZonaRcGameScores.maxValues}
        texts={RegionalZonaRcGameScores.texts}
        isClosed={false} />);

    childrenContent.push(<ControlTextArray
        textToken={'points.fiascos'}
        controlTextValuesString='fiascoControlTextValues'
        steps={RegionalZonaRcGameScores.fiascoSteps}
        maxValues={RegionalZonaRcGameScores.fiascoMaxValues}
        texts={RegionalZonaRcGameScores.fiascoTexts}
        player={player}
        zone={zone}
        isClosed={true}
    />);

    childrenContent.push(<RegionalZonaRcPoints 
        player={player}
        zone={zone} />);    

    childrenContent.push(<RegionalZonaRcModificator 
        player={player}
        zone={zone} />);    

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints + playerZone.handicap;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(26).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(3).fill(0);
    },
    onTimerChange: (playerZone) => {
        getGatesPointExtras(playerZone);

    },
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        const playerZone = game.players[player].zones[zone];

        if (GameUtils.isTimeFiasco(game, tickTime) || GameUtils.isFiascoFromFiascoControlTextValues(game, player, zone)) {
            playerZone.totalPoints += 25;
        }
        playerZone.time = tickTime;
    },
    onGateProgressionChange: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onHandicapChange: (playerZone)=>{
        getGatesPointExtras(playerZone)
    },
    onFiascoChangeScore: () => { },
    onPointBecauseLastMinute: (playerZone) => {
        getGatesPointExtras(playerZone);
    },
    generateSliderMarksFromGates: (gateData, gateProgression) => {
        const result = {};

        for (let i = 0; i < gateData.length; i++) {
            let classname = 'gatePoints ',
                content;

            if (i < gateProgression) {
                if(gateData[i].controlTextValues[0] < 0) {
                    classname += 'colorGreen';
                } else {
                    classname += 'colorClearGrey';
                }
                content = '-';
            } else {
                classname += 'colorGrey';
                content = '-';
            }

            result[i] = <div className={classname}>
                {content}<br />
                {gateData[i].gatePoints}
            </div>;
        }

        return result;
    },
    doPageView: ()=> {
        Analytics.pageview('/copaespana/');
    }
};

export { RegionalZonaRcGameScores, getGameContent, gameExtras };