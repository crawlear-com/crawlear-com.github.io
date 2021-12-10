import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';

const MODE_OFFICIAL = 1;

function PointsGame({mode, onGameEnd, players, maxTime, maxPoints}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players, maxTime, maxPoints }) });
    const { t } = useTranslation();

    function changePointsOnScoreChange(value, player, control) {
        const players = [...state.players],
            points = state.players[state.currentPlayer].points,
            handicap = state.players[state.currentPlayer].handicap;

        if (!(state.maxPoints <= (points + handicap) && state.maxPoints > 0) || (points + handicap + value < state.maxPoints)) {
            players[player].controlTextValues = [...players[player].controlTextValues];
            players[player].controlTextValues[control] += value;
            players[player].points += value;    
        } else if (state.maxPoints) {
            players[player].points = Math.max(state.maxPoints, players[player].points);
        }

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
        let controlTextArray = [],
            maxTimeControl = <></>;

        controlTextArray = ControlTextArray({
            players: state.players, 
            player: state.currentPlayer, 
            pointsMode: state.mode, 
            onValueChange: (value, player, control)=> {changePointsOnScoreChange(value, player, control)}});

        if (state.mode === MODE_OFFICIAL) {
            let fiasco;

            if (state.maxPoints <= (state.players[state.currentPlayer].points+state.players[state.currentPlayer].handicap) && state.maxPoints > 0) {
                Analytics.event('play', 'fiasco', state.players[state.currentPlayer].name); 
                fiasco = <div className="rounded importantNote">FiASCO!</div>;
            }

            maxTimeControl = <div className="fiascoBox rounded rounded2 bold">
                {fiasco}
                {t('description.puntosmaximo')}: {state.maxPoints}
            </div>
        }

        return <div className="gameContainer">
            <div className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{currentPlayer.name}</div>
                    {`${t('description.handicap')} : ${currentPlayer.handicap}`}<br />
                    {`${t('description.total')} ${t('description.puntos')}`}: {currentPlayer.points + currentPlayer.handicap}
                </div>
            </div>

            {maxTimeControl}

            <div className="controlTextContainer rounded rounded1">
                {controlTextArray}
            </div>
            <button onClick={onReset}>{t('description.reset')}</button>
            <button className="importantNote" onClick={onEndPlayer}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
        </div>;
    }
}

function initControlTestValues({mode, players, maxTime, maxPoints}) {
    const newState = {
        currentPlayer: 0,
        players: [...players],
        mode: mode,
        points: 0,
        maxTime: maxTime,
        maxPoints: maxPoints
    };

    for(let i=0; i<newState.players.length;i++) {
        newState.players[i].controlTextValues = mode === MODE_OFFICIAL ? new Array(11) : new Array(7);

        for(let j=0; j<newState.players[i].controlTextValues.length; j++) {
            newState.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

function getWinner(state) {
    const players = [...state.players];

    players.sort(function(a, b) {
        const bypoints = (a.points + a.handicap) - (b.points + b.handicap);

        if (bypoints === 0) {
            return a.id - b.id;
        }

        return bypoints;
      });

    return players[0].id;
}

export default PointsGame;