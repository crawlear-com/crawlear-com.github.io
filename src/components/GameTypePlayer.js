import * as React from 'react';
import { useTranslation } from 'react-i18next';
import MaxTimeAndPointsPicker from './MaxTimeAndPointsPicker';
import TotalTimeGame from './games/TotalTimeGame';
import KingGame from './games/KingGame';
import PointsGame from './games/PointsGame';
import ZonesPicker from './ZonesPicker';
import GateProgressionPicker from './GateProgressionPicker';
import Analytics from '../Analytics';

const GAME_TYPE_TIME = 0;
const GAME_TYPE_POINTS = 1;
const GAME_TYPE_KING = 2;
const STEP_CONFIG = 0;
const STEP_PLAY = 1;
const MODE_OFFICIAL = 1;

function GameTypePlayer({game, onGameEnd}) {
    const [state, setState] = React.useState({step: game.pointsType === MODE_OFFICIAL ? STEP_CONFIG : STEP_PLAY, game: game});
    const elementsToRender = [];
    const { t } = useTranslation();

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

    function onZonesChange(zones) {
        const newGame = {...state.game}

        newGame.zones = zones;
        Analytics.event('menu', 'zonesSet', zones);
        setState(previousInputs=>({
            ...previousInputs,
            game: newGame
        }));
    }

    function onGatesChange(gates) {
        const newGame = {...state.game}

        newGame.gates = gates;
        Analytics.event('menu', 'gateSet', gates);
        setState(previousInputs=>({
            ...previousInputs,
            game: newGame
        }));
    }

    if(state.step === STEP_CONFIG) {
        if (state.game.pointsType === MODE_OFFICIAL) {
            elementsToRender.push(<MaxTimeAndPointsPicker key={0} mode={state.game.pointsType} 
                        onMaxPointsChange={onMaxPointsChange}
                        onMaxTimeChange={onMaxTimeChange}
                        onZonesChange={onZonesChange}
                        maxTime={state.game.maxTime}
                        maxPoints={state.game.maxPoints}
                        showTimePicker={state.game.gameType === GAME_TYPE_TIME} />);
            if (state.game.gameType === GAME_TYPE_TIME) {
                elementsToRender.push(<ZonesPicker key={1} onZonesChange={onZonesChange} />);
                elementsToRender.push(<GateProgressionPicker key={2} onGatesChange={onGatesChange} />);
            }
            elementsToRender.push(<button key={3} onClick={onCompleteGameMaxtimeSelected} className="rounded rounded2 importantNote">{t('description.continuar')}</button>);
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