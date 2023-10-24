import * as React from 'react';
import Analytics from '../../Analytics';
import AecarPoints from './AecarPoints';
import ControlTextArray from '../ControlTextArray';
import { GameUtils } from '../../model/Game.ts';

const MiniCrawlerPassionGameScores = {
    steps: [1, 3, 5, 5, 5, 5, 10],
    maxValues: [0, 0, 0, 0, 0, 0, 0],
    texts: ['points.puerta',
        'points.tocarcoche',
        'points.saltoobstaculo',
        'points.vuelco',
        'points.saltopelota',
        'points.winch',
        'points.reparacion'
    ],
    fiascoTexts: ['points.bateria',
        'points.reparacion'],
    fiascoSteps: [1,1],
    fiascoMaxValues: [1,1],
    courtesyTime: 0,
    maxPoints: 80,
    maxTime: 480000
};

function getGameContent(player, zone) {
    const childrenContent = [];

    childrenContent.push(<ControlTextArray
        key="ctP"
        controlTextValuesString='controlTextValues'
        textToken={'description.penalizaciones'}
        player={player}
        zone={zone}
        steps={MiniCrawlerPassionGameScores.steps}
        maxValues={MiniCrawlerPassionGameScores.maxValues}
        texts={MiniCrawlerPassionGameScores.texts}
        isClosed={false} />);

    childrenContent.push(<ControlTextArray
        key="ctF"
        textToken={'points.fiascos'}
        controlTextValuesString='fiascoControlTextValues'
        steps={MiniCrawlerPassionGameScores.fiascoSteps}
        maxValues={MiniCrawlerPassionGameScores.fiascoMaxValues}
        texts={MiniCrawlerPassionGameScores.fiascoTexts}
        player={player}
        zone={zone}
        isClosed={true}
    />);

    childrenContent.push(<AecarPoints 
            key="aP"
            player={player}
            zone={zone} />);

    return childrenContent;
}

function getGatesPointExtras(playerZone) {
    playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints;
}

const gameExtras = {
    controlTextValuesInit: () => {
        return new Array(MiniCrawlerPassionGameScores.steps.length).fill(0);
    },
    fiascoControlTextValuesInit: () => {
      return new Array(MiniCrawlerPassionGameScores.fiascoSteps.length).fill(0);
    },
    onTimerChange: (playerZone) => {
        getGatesPointExtras(playerZone);

    },
    onChangeScore: (playerZone)=>{
        getGatesPointExtras(playerZone);
    },
    onEndPlayer: (game, tickTime, player, zone) => {
        game.players[player].zones[zone].time = tickTime;
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
        Analytics.pageview('/minicrawlerpassion/');
    }
};

export { MiniCrawlerPassionGameScores, getGameContent, gameExtras };