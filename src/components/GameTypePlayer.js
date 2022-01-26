import * as React from 'react';
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

function GameTypePlayer({game, onGameEnd}) {
    const elementsToRender = [];
    const [state, setState] = React.useState({step: game.pointsType === MODE_OFFICIAL ? STEP_MAXTIMESELECT : STEP_PLAY, game: game});

    function onMaxPointsChange(points) {
        const newGame = {...state.game}
        
        newGame.maxPoints = points;
        Analytics.event('menu', 'maxPointsSet', points);
        setState(previousInputs=>({
            ...previousInputs,
            game: newGame
        }));
    }

    function onMaxTimeChange(time) {
        const newGame = {...state.game}

        newGame.maxTime = time;
        Analytics.event('menu', 'maxTimeSet', time);
        setState(previousInputs=>({
            ...previousInputs,
            game: newGame
        }));
    }
    
    function onCompleteGameMaxtimeSelected() {
        setState(previousInputs=>({
            ...previousInputs,
            step: STEP_PLAY
        }));
    }

    if(state.step === STEP_MAXTIMESELECT) {
        if (state.game.pointsType === MODE_OFFICIAL) {
            elementsToRender.push(<MaxTimeAndPointsPicker key={0} mode={state.game.pointsType} 
                        onCompleteGameMaxtimeSelected={onCompleteGameMaxtimeSelected}
                        onMaxPointsChange={onMaxPointsChange}
                        onMaxTimeChange={onMaxTimeChange}
                        maxTime={state.game.maxTime}
                        maxPoints={state.game.maxPoints}
                        showTimePicker={state.game.gameType === GAME_TYPE_TIME} />);
        }
    } else {
        if (state.game.gameType === GAME_TYPE_TIME) {
            elementsToRender.push(<TotalTimeGame 
                key={0}
                game={state.game}
                onGameEnd={(game)=> {
                    onGameEnd(game)
                }}
            />);
        } else if (state.game.gameType === GAME_TYPE_KING) {
            elementsToRender.push(<KingGame 
                key={0}
                game={state.game}
                onGameEnd={(game)=> {
                    onGameEnd(game)
                }}
                />);
        } else if (state.game.gameType === GAME_TYPE_POINTS) {
            elementsToRender.push(<PointsGame 
                key={0}
                game={state.game}
                onGameEnd={(game)=> {
                    onGameEnd(game)
                }}
            />);
        }
    }

    return elementsToRender;
}

export default GameTypePlayer;