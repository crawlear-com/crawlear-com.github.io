import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game.ts';
import AecarPoints from './AecarPoints';
import Analytics from '../../Analytics';

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
    fiascoMaxValues: [1, 1],
    courtesyTime: 120000000, //indefinido
    maxPoints: 40,
    maxTime: 600000
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

        childrenContent.push(<ControlTextArray
            key="ctP"
            controlTextValuesString='controlTextValues'
            textToken={'description.penalizaciones'}
            player={player}
            zone={zone}
            steps={AecarGameScores.steps}
            maxValues={AecarGameScores.maxValues}
            texts={AecarGameScores.texts}
            isClosed={false} />);
    
        childrenContent.push(<ControlTextArray
                key="ctF"
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
            key="gp"
            player={player}
            zone={zone} />);    

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(23).fill(0);
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

        playerZone.time = tickTime;
    },
    onGameEnd: (game)=> {
        game.players.forEach((player, playerIndex)=>{
            player.zones.forEach((zone, zoneIndex)=>{
                if (GameUtils.isFiasco(game, playerIndex, zoneIndex)) {
                    const playerZone = game.players[playerIndex].zones[zoneIndex];

                    playerZone.time = (game.maxTime > 0 ? game.maxTime : playerZone.time);
                    playerZone.points = (game.maxPoints > 0 ? game.maxPoints : playerZone.maxPoints);
                    getGatesPointExtras(playerZone);
                }
            });
        });
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
        Analytics.pageview('/aecar/');
    }
};

export { AecarGameScores, getGameContent, gameExtras };