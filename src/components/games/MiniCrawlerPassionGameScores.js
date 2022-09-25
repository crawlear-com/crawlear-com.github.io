import Analytics from '../../Analytics';
import { Levante124GameScores as MiniCrawlerPassionGameScores,
    getGameContent, gameExtras } from './Levante124GameScores';

MiniCrawlerPassionGameScores.texts = ['points.puerta',
'points.tocarcoche',
'points.saltoobstaculo',
'points.vuelco',
'points.saltopelota',
'points.reparacion'
];

MiniCrawlerPassionGameScores.maxPoints = 80;
MiniCrawlerPassionGameScores.maxTime = 480000;

gameExtras.doPageView = ()=> {
    Analytics.pageview('/minicrawlerpassion/');
}

export { MiniCrawlerPassionGameScores, getGameContent, gameExtras };