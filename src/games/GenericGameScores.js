import * as React from 'react';
import ControlTextArray from "../components/ControlTextArray";
import { GameUtils } from './Game';
import GenericPoints from './GenericPoints';
import Analytics from '../Analytics';

const GenericGameScores = {
    steps: [1, 2, 3, 4, 5, -5],
    maxValues: [0, 0, 0, 0, 0, 0],
    texts: ['points.masuno',
        'points.masdos',
        'points.mastres',
        'points.mascuatro',
        'points.mascinco',
        'points.bonificacion'
    ],
    fiascoTexts: ['points.fiasco'],
    fiascoSteps: [1],
    fiascoMaxValues: [1],
    courtesyTime: 120000000, //indefinido
    maxPoints: 40,
    maxTime: 600000
};

function getGameContent(player, zone) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
        key="ctP"
        controlTextValuesString='controlTextValues'
        textToken={'description.penalizaciones'}
        player={player}
        zone={zone}
        steps={GenericGameScores.steps}
        maxValues={GenericGameScores.maxValues}
        texts={GenericGameScores.texts}
        isClosed={false} />);

    childrenContent.push(<ControlTextArray
        key="ctF"
        textToken={'points.fiascos'}
        controlTextValuesString='fiascoControlTextValues'
        steps={GenericGameScores.fiascoSteps}
        maxValues={GenericGameScores.fiascoMaxValues}
        texts={GenericGameScores.fiascoTexts}
        player={player}
        zone={zone}
        isClosed={true}
            />);

        childrenContent.push(<GenericPoints 
            key="gP"
            player={player}
            zone={zone} />);    

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.gatesWithFail = getGatesWithFail(playerZone);
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints + (playerZone.gatesWithFail*3);
}

function getGatesWithFail(playerZone) {
    return playerZone.gateProgressionData.length - playerZone.gateProgression;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(GenericGameScores.steps.length).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(GenericGameScores.fiascoSteps.length).fill(0);
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

export { GenericGameScores, getGameContent, gameExtras };