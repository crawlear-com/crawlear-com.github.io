import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';

const MODE_OFFICIAL = 1;
const MAX_POINTS = 10000000;

function PointsGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players }) });
    const { t } = useTranslation();

    function changePointsOnScoreChange(value, player, control) {
        players[player].controlTextValues = [...players[player].controlTextValues];
        players[player].controlTextValues[control] += value;
        players[player].points += value;
    
        setState(previousInputs => ({ ...previousInputs,
            players: players
        }));
    }

    function onEndPlayer() {
        Analytics.event('play', 'endPlayer', state.players[state.currentPlayer].name);

        if (state.currentPlayer+1 < state.players.length) {
            setState((state, props)=> {
                return {
                    ...initControlTestValues(state),
                    points: 0,
                    currentPlayer: state.currentPlayer+1
                };
            });
        } else {
            onGameEnd && onGameEnd(getWinner(state));
        }
    }

    function onReset() {
        window.scrollTo(0,0);
        state.players[state.currentPlayer].points = 0;
        Analytics.event('play', 'reset', state.players[state.currentPlayer].name);
        setState((state, props)=> {
            return {
                ...initControlTestValues(state),
                players: [...state.players],
                currentPlayer: state.currentPlayer
            };
        });
    }

    React.useEffect(() => {
        Analytics.pageview('/pointsgame/');
    },[]);

    if (state.players.length>0) {
        const currentPlayer = state.players[state.currentPlayer];
        let controlTextArray = [];

        controlTextArray = ControlTextArray({
            players: state.players, 
            player: state.currentPlayer, 
            pointsMode: state.state, 
            onValueChange: (value, player, control)=> {changePointsOnScoreChange(value, player, control)}});

        return <div className="gameContainer">

            <div className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{currentPlayer.name}</div>
                    {`${t('description.total')} ${t('description.puntos')}`}: { currentPlayer.points}
                </div>
            </div>

            <div className="controlTextContainer rounded rounded1">
                {controlTextArray}
            </div>
            <button onClick={onReset}>{t('description.reset')}</button>
            <button className="importantNote" onClick={onEndPlayer}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
        </div>
    }
}

function initControlTestValues({mode, players}) {
    const newState = {
        currentPlayer: 0,
        players: [...players],
        mode: mode,
        points: 0
    };

    for(let i=0; i<newState.players.length;i++) {
        newState.players[i].controlTextValues = mode === MODE_OFFICIAL ? new Array(10) : new Array(7);

        for(let j=0; j<newState.players[i].controlTextValues.length; j++) {
            newState.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

function getWinner(state) {
    let winner = -1, minPoints=MAX_POINTS;

    for (let i=0;i<state.players.length;i++) {
        if (state.players[i].points < minPoints) {
            minPoints = state.players[i].points;
            winner = i;
        }
    }

    return winner;
}

export default PointsGame;