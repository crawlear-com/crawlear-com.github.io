import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import AecarPoints from './AecarPoints';
import Analytics from '../../Analytics';

const CopaEspanaGameScores = {
    steps: [10, 10, 10, 10, 5, 5, 5, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 4],
    maxValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    texts: ['points.empujarcocheacompañar',
    'points.reparacion30mins',
    'points.conectarentiempoajuste',
    'points.nococheparquecerrado',
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

    fiascoTexts: ['points.bateria',
        'points.reparacion'],
    fiascoSteps: [1,1],
    fiascoMaxValues: [1,1]
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
        controlTextValuesString='controlTextValues'
        player={player}
        zone={zone}
        steps={CopaEspanaGameScores.steps}
        maxValues={CopaEspanaGameScores.maxValues}
        texts={CopaEspanaGameScores.texts}
        isClosed={false} />);

    childrenContent.push(<ControlTextArray
        textToken={'points.fiascos'}
        controlTextValuesString='fiascoControlTextValues'
        steps={CopaEspanaGameScores.fiascoSteps}
        maxValues={CopaEspanaGameScores.fiascoMaxValues}
        texts={CopaEspanaGameScores.fiascoTexts}
        player={player}
        zone={zone}
        isClosed={true}
    />);

    childrenContent.push(<AecarPoints 
        player={player}
        zone={zone} />);    

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(25).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(2).fill(0);
    },
    onTimerChange: (playerZone) => {
        getGatesPointExtras(playerZone);

    },
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        const playerZone = game.players[player].zones[zone];

        if (GameUtils.isFiasco(game, tickTime, player, zone)) {
            playerZone.time = (game.maxTime > 0 ? (game.maxTime + game.courtesyTime) : tickTime);
        } else {
            playerZone.time = tickTime;
        }
    },
    onGateProgressionChange: (playerZone)=>{
        getGatesPointExtras(playerZone);
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
                classname += 'colorGreen';
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

export { CopaEspanaGameScores, getGameContent, gameExtras };