import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import AecarPoints from './AecarPoints';
import Analytics from '../../Analytics';

const KingGameScores = {
    steps: [5, 3, 2, 5, 5, 3],
    maxValues: [0, 0, 0, 0, 0, 0],
    texts: ['points.vuelco',
        'points.tocar',
        'points.puerta',
        'points.saltoobstaculo',
        'points.reparacion',
        'points.winch'
    ],
    fiascoTexts: ['points.noterminado', 'points.bateria'],
    fiascoSteps: [1, 1],
    fiascoMaxValues: [1, 1]
};

function getGameContent(t, player, zone, points) {
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
        return new Array(6).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(2).fill(0);
    },
    onTimerChange: () => {},
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        const playerZone = game.players[player].zones[zone];

        if (GameUtils.isFiasco(game, tickTime, player, zone)) {
            playerZone.time = (game.maxTime > 0 ? (game.maxTime + game.courtesyTime) : tickTime);
            playerZone.totalPoints = game.maxPoints;
        } else {
            playerZone.time = tickTime;
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