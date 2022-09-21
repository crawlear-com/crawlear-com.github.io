import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import IsrccPoints from './IsrccPoints';
import Analytics from '../../Analytics';

const IsrccGameScores = {
    steps: [5,10,10,1,5,3],
    maxValues: [0,0,0,0,0,0],
    texts: ['points.vuelco',
        'points.tocar',
        'points.puerta',
        'points.retroceso',
        'points.direcciondelcurso',
        'points.limite'],
    fiascoTexts: ['points.noempezado',
    'points.reparacion',
    'points.fueraespecificacion',
    'points.usodispositivo',
    'points.bateria'],
    fiascoSteps: [50,1,1,1,1],
    fiascoMaxValues: [1,1,1,1,1],
    courtesyTime: 0,
    maxPoints: 40,
    maxTime: 600000
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
            controlTextValuesString='controlTextValues'
            textToken={'description.penalizaciones'}
            steps={IsrccGameScores.steps}
            maxValues={IsrccGameScores.maxValues}
            texts={IsrccGameScores.texts}
            player={player}
            zone={zone}
            isClosed={false}
        />);

    childrenContent.push(<ControlTextArray
            textToken={'points.fiascos'}
            controlTextValuesString='fiascoControlTextValues'
            steps={IsrccGameScores.fiascoSteps}
            maxValues={IsrccGameScores.fiascoMaxValues}
            texts={IsrccGameScores.fiascoTexts}
            player={player}
            zone={zone}
            isClosed={true}
        />);

    childrenContent.push(<IsrccPoints player={player} zone={zone} />);

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.gatesWithFail = getGatesWithFail(playerZone);
    playerZone.gatesWithBonification = getGatesWithBonification(playerZone);
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints + (playerZone.gatesWithBonification * -2);
}

function getGatesWithFail(playerZone) {
    return playerZone.gateProgressionData.filter((x, i) => {
        return (x.gatePoints >= 20 && i<playerZone.gateProgression && x.controlTextValues[2]>0)
    }).length;
}

function getGatesWithBonification(playerZone) {
    return playerZone.gateProgressionData.filter((x,i) => {
        return (x.gatePoints < 20 && i<playerZone.gateProgression && x.controlTextValues[2]<1)
    }).length;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(6).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(5).fill(0);
    },
    onTimerChange: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onGameEnd: (game)=> {
        game.players.forEach((player, playerIndex)=>{
            player.zones.forEach((zone, zoneIndex)=>{
                if (GameUtils.isFiasco(game, playerIndex, zoneIndex)) {
                    const playerZone = game.players[playerIndex].zones[zoneIndex];

                    playerZone.time = (game.maxTime > 0 ? game.maxTime : playerZone.time);
                    if(GameUtils.isNonPresentedFiasco(game, player, zone)) {
                        playerZone.points = 50;
                    } else {
                        playerZone.points = (game.maxPoints > 0 ? game.maxPoints : playerZone.totalPoints);
                    }
        
                    getGatesPointExtras(playerZone);
                }
            });
        });
    },
    onEndPlayer: (game, tickTime, player, zone)=>{
        const playerZone = game.players[player].zones[zone];

        playerZone.time = tickTime;
    },
    onGateProgressionChange: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onFiascoChangeScore: (playerZone, control, value)=>{
        control === 0 && (playerZone.points += value);
    },
    onPointBecauseLastMinute: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    generateSliderMarksFromGates: (gateData, gateProgression)=>{
        const result = {};

        for (let i=0; i<gateData.length; i++) {
            let classname = 'gatePoints ',
                content;

            if (i<gateProgression) {
                if (gateData[i].gatePoints < 20 && gateData[i].controlTextValues[2]<1) {
                    classname += 'colorGreen';
                    content = '-2';
                } else {
                    classname += 'colorRed';
                    content = '0';
                }
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
        Analytics.pageview('/isrcc/');
    }
};

export { IsrccGameScores, getGameContent, gameExtras };