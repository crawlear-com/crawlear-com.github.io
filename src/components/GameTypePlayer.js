import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TotalTimeGame from './TotalTimeGame';
import KingGame from './KingGame';
import PointsGame from './PointsGame';

const GAME_TYPE_TIME = 0;
const GAME_TYPE_POINTS = 1;
const GAME_TYPE_KING = 2;

function GameTypePlayer({onGameEnd, goToMenu, gameSelected, players, pointsTypeSelected}) {
    const { t, i18n } = useTranslation();
    const elementsToRender = [];

    if (gameSelected === GAME_TYPE_TIME) {
        elementsToRender.push(<TotalTimeGame 
            mode={pointsTypeSelected}
            onGameEnd={(winnerPlayer)=> {
                onGameEnd(winnerPlayer)
            }}
            players={players}
        />);
    } else if (gameSelected === GAME_TYPE_KING) {
        elementsToRender.push(<KingGame 
            onGameEnd={(winnerPlayer)=> {
                onGameEnd(winnerPlayer)
            }}
            players={players} 
            mode={pointsTypeSelected}
            />);
    } else if (gameSelected === GAME_TYPE_POINTS) {
        elementsToRender.push(<PointsGame 
            mode={pointsTypeSelected}
            onGameEnd={(winnerPlayer)=> {
                onGameEnd(winnerPlayer)
            }}
            players={players}
        />);
    }

    elementsToRender.push(<button onClick={() => { goToMenu() }}>{t('description.atras')}</button>);

    return elementsToRender;
}

export default GameTypePlayer;