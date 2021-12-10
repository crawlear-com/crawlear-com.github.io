import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MaxTimeAndPointsPicker from './MaxTimeAndPointsPicker';
import TotalTimeGame from './games/TotalTimeGame';
import KingGame from './games/KingGame';
import PointsGame from './games/PointsGame';
import Analytics from '../Analytics';

const GAME_TYPE_TIME = 0;
const GAME_TYPE_POINTS = 1;
const GAME_TYPE_KING = 2;
const STEP_MAXTIMESELECT = 0;
const STEP_PLAY = 1;
const MODE_OFFICIAL = 1;

function GameTypePlayer({onGameEnd, goToMenu, gameSelected, players, pointsTypeSelected}) {
    const { t } = useTranslation();
    const elementsToRender = [];
    const [state, setState] = React.useState({step: pointsTypeSelected === MODE_OFFICIAL ? STEP_MAXTIMESELECT : STEP_PLAY, maxPoints: 0, maxTime: 0});

    function onMaxPointsChange(points) {
        Analytics.event('menu', 'maxPointsSet', points);
        setState(previousInputs=>({
            ...previousInputs,
            maxPoints: points
        }));
    }

    function onMaxTimeChange(time) {
        Analytics.event('menu', 'maxTimeSet', time);
        setState(previousInputs=>({
            ...previousInputs,
            maxTime: time
        }));
    }
    
    function onCompleteGameMaxtimeSelected() {
        setState(previousInputs=>({
            ...previousInputs,
            step: STEP_PLAY
        }));
    }

    if(state.step === STEP_MAXTIMESELECT) {
        if (pointsTypeSelected === MODE_OFFICIAL) {
            elementsToRender.push(<MaxTimeAndPointsPicker mode={pointsTypeSelected} 
                        onCompleteGameMaxtimeSelected={onCompleteGameMaxtimeSelected}
                        onMaxPointsChange={onMaxPointsChange}
                        onMaxTimeChange={onMaxTimeChange}
                        maxTime={state.maxTime}
                        maxPoints={state.maxPoints}
                        showTimePicker={gameSelected === GAME_TYPE_TIME} />);
        }
    } else {
        if (gameSelected === GAME_TYPE_TIME) {
            elementsToRender.push(<TotalTimeGame 
                mode={pointsTypeSelected}
                maxTime={state.maxTime}
                maxPoints={state.maxPoints}
                onGameEnd={(winnerPlayer)=> {
                    onGameEnd(winnerPlayer)
                }}
                players={players}
            />);
        } else if (gameSelected === GAME_TYPE_KING) {
            elementsToRender.push(<KingGame 
                maxTime={state.maxTime}
                maxPoints={state.maxPoints}
                onGameEnd={(winnerPlayer)=> {
                    onGameEnd(winnerPlayer)
                }}
                players={players} 
                mode={pointsTypeSelected}
                />);
        } else if (gameSelected === GAME_TYPE_POINTS) {
            elementsToRender.push(<PointsGame 
                maxTime={state.maxTime}
                maxPoints={state.maxPoints}
                mode={pointsTypeSelected}
                onGameEnd={(winnerPlayer)=> {
                    onGameEnd(winnerPlayer)
                }}
                players={players}
            />);
        }
    }

    elementsToRender.push(<button onClick={() => { goToMenu() }}>{t('description.atras')}</button>);

    return elementsToRender;
}

export default GameTypePlayer;