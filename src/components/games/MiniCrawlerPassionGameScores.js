import * as React from 'react';
import Analytics from '../../Analytics';
import { gameExtras } from './Levante124GameScores';
import AecarPoints from './AecarPoints';
import ControlTextArray from '../ControlTextArray';

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

function getGameContent(t, player, zone, points) {
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

gameExtras.doPageView = ()=> {
    Analytics.pageview('/minicrawlerpassion/');
}

export { MiniCrawlerPassionGameScores, getGameContent, gameExtras };