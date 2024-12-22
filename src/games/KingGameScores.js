import * as React from 'react';
import ControlTextArray from "../components/ControlTextArray";
import { isFiasco, isFiascoFromFiascoControlTextValues, isTimeFiasco } from './GameUtils';
import AecarPoints from './AecarPoints';
import Analytics from '../Analytics';

const KingGameScores = {
    steps: [5, 3, 5, 5, 3],
    maxValues: [0, 0, 0, 0, 0],
    texts: ['points.vuelco',
        'points.tocar',
        'points.saltoobstaculo',
        'points.reparacion',
        'points.winch'
    ],
    fiascoTexts: ['points.noterminado', 'points.bateria'],
    fiascoSteps: [1, 1],
    fiascoMaxValues: [1, 1],
    courtesyTime: 0,
    maxPoints: 50,
    maxTime: 600000
};

function getGameContent(player, zone) {
    const childrenContent = [];

        childrenContent.push(<ControlTextArray
            controlTextValuesString='controlTextValues'
            textToken={'description.penalizaciones'}
            player={player}
            zone={zone}
            steps={KingGameScores.steps}
            maxValues={KingGameScores.maxValues}
            texts={KingGameScores.texts}
            isClosed={false} />);

        childrenContent.push(<ControlTextArray
                textToken={'points.fiascos'}
                controlTextValuesString='fiascoControlTextValues'
                steps={KingGameScores.fiascoSteps}
                maxValues={KingGameScores.fiascoMaxValues}
                texts={KingGameScores.fiascoTexts}
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
        return new Array(KingGameScores.steps.length).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(KingGameScores.fiascoSteps.length).fill(0);
    },
    onTimerChange: () => {},
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onGameEnd: (game)=> {
        game.players.forEach((player, playerIndex)=>{
            player.zones.forEach((zone, zoneIndex)=>{
                if (isFiasco(game, playerIndex, zoneIndex)) {
                    const playerZone = game.players[playerIndex].zones[zoneIndex];

                    playerZone.time = (game.maxTime > 0 ? (game.maxTime + game.courtesyTime) : playerZone.time);
                    if (isTimeFiasco(game, playerZone) || isFiascoFromFiascoControlTextValues(game, player, zone)) {
                        playerZone.totalPoints += 25;
                    }
                    getGatesPointExtras(playerZone);
                }
            });
        });
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        const playerZone = game.players[player].zones[zone];

        playerZone.time = tickTime;
        if (isFiasco(game, player, zone)) {
            playerZone.time = (game.maxTime > 0 ? game.maxTime : tickTime);
            playerZone.totalPoints = game.maxPoints;
        }
    },
    onGateProgressionChange: ()=>{},
    onFiascoChangeScore: () => {},
    onPointBecauseLastMinute: () => {},
    generateSliderMarksFromGates: () => {},
    doPageView: ()=> {
        Analytics.pageview('/king/');
    }
};

export { KingGameScores, getGameContent, gameExtras };