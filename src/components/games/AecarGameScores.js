import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import AecarPoints from './AecarPoints';

const AecarGameScores = {
    steps: [5, 3, 2, 5, 5, 3, -1, 3, 1, 5, 1, 2, 3, 1, 5, 5, 3, 3, 5, 5, 5, 3, 3],
    maxValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
    texts: ['points.vuelco',
        'points.tocar',
        'points.puerta',
        'points.saltoobstaculo',
        'points.reparacion',
        'points.winch',
        'points.puertaprogresion',
        'points.equipaje',
        'points.distancia',
        'points.anclajeindebido',
        'points.juez',
        'points.saltopelota',
        'points.recolocacionbateria',
        'points.puertamarchaatras',

        'points.nocomunicarcambio',
        'points.conductaincivica',
        'points.perdidacarnet',
        'points.modificarpista',
        'points.perdidadorsal',
        'points.modificarcoche',
        'points.sacarcoche',
        'points.nodorsal',
        'points.incumplimientotecnico'
    ],
    fiascoTexts: ['points.noterminado', 'points.bateria'],
    fiascoSteps: [1, 1],
    fiascoMaxValues: [1, 1]
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

        childrenContent.push(<ControlTextArray
            controlTextValuesString='controlTextValues'
            player={player}
            zone={zone}
            steps={AecarGameScores.steps}
            maxValues={AecarGameScores.maxValues}
            texts={AecarGameScores.texts}
            isClosed={false} />);
    
        childrenContent.push(<ControlTextArray
                textToken={'points.fiascos'}
                controlTextValuesString='fiascoControlTextValues'
                steps={AecarGameScores.fiascoSteps}
                maxValues={AecarGameScores.fiascoMaxValues}
                texts={AecarGameScores.fiascoTexts}
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
    onTimerChange: (playerZone) => {
        getGatesPointExtras(playerZone);

    },
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        const playerZone = game.players[player].zones[zone];

        if (GameUtils.isFiasco(game, tickTime, player, zone)) {
            playerZone.time = (game.maxTime > 0 ? (game.maxTime + 60000) : tickTime);
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
    }
};

export { AecarGameScores, getGameContent, gameExtras };