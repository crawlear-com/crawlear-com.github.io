import * as React from 'react';
import ControlTextArray from "../ControlTextArray";
import { GameUtils } from '../../model/Game';
import AecarPoints from './AecarPoints';
import Analytics from '../../Analytics';

const Levante124GameScores = {
    steps: [1, 3, 5, 5, 5, 10],
    maxValues: [0, 0, 0, 0],
    texts: ['points.puerta',
        'points.tocarcochenoavanzar',
        'points.tocarcochepuerta',
        'points.vuelco',
        'points.saltopelota',
        'points.reparacion'
    ],
    fiascoTexts: ['points.bateria',
    'points.reparacion'],
    fiascoSteps: [1,1],
    fiascoMaxValues: [1,1]
};

function getGameContent(t, player, zone, points) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
        controlTextValuesString='controlTextValues'
        textToken={'description.penalizaciones'}
        player={player}
        zone={zone}
        steps={Levante124GameScores.steps}
        maxValues={Levante124GameScores.maxValues}
        texts={Levante124GameScores.texts}
        isClosed={false} />);

    childrenContent.push(<ControlTextArray
        textToken={'points.fiascos'}
        controlTextValuesString='fiascoControlTextValues'
        steps={Levante124GameScores.fiascoSteps}
        maxValues={Levante124GameScores.fiascoMaxValues}
        texts={Levante124GameScores.fiascoTexts}
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
        Analytics.pageview('/levante124/');
    }
};

export { Levante124GameScores, getGameContent, gameExtras };