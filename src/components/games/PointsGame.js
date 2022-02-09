import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';
import Utils from '../../Utils';

const MODE_OFFICIAL = 1;

function PointsGame({game, onGameEnd}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues(game) });
    const { t } = useTranslation();

    React.useEffect(() => {
        Analytics.pageview('/pointsgame/');
    },[]);

    function onBatteryDirectFiasco(player, value) {
        const newState = {...state},
            players = newState.game.players;

        players[player].battery = value;
        setState(newState);
    }

    function onChangeScore(value, player, control) {
        const newState = {...state};

        const players = newState.game.players,
            points = state.game.players[player].points,
            handicap = state.game.players[player].handicap,
            finalValue = points + handicap + value;

        if (!players[player].battery && ((game.maxPoints > (points + handicap) || game.maxPoints <= 0) || 
            (finalValue < state.game.maxPoints))) {
                players[player].controlTextValues = [...players[player].controlTextValues];
                players[player].controlTextValues[control] += value;
                players[player].points += value;    
        }

        setState(newState);
    }

    function onEndPlayer() {
        const game = state.game,
            currentPlayer = state.currentPlayer,
            players = game.players;

        if ((game.maxPoints <= players[currentPlayer].points && game.maxPoints > 0) || players[currentPlayer].battery) {
                players[currentPlayer].points = (game.maxPoints > 0 ? game.maxPoints : players[currentPlayer].points);
        }

        Analytics.event('play', 'endPlayer', state.game.players[state.currentPlayer].name);

        if (state.currentPlayer+1 < state.game.players.length) {
            setState((state, props)=> {
                return {
                    ...initControlTestValues(state.game),
                    points: 0,
                    currentPlayer: state.currentPlayer+1
                };
            });
        } else {
            state.game.players = Utils.getWinnerByPointsAndTime(state.game.players);
            onGameEnd && onGameEnd(state.game);
        }
    }

    function onReset() {
        window.scrollTo(0,0);
        state.game.players[state.currentPlayer].points = 0;
        state.game.players[state.currentPlayer].battery = false;
        Analytics.event('play', 'reset', state.game.players[state.currentPlayer].name);
        setState((state, props)=> {
            return {
                ...initControlTestValues(state.game),
                currentPlayer: state.currentPlayer
            };
        });
    }

    if (state.game.players.length>0) {
        const currentPlayer = state.game.players[state.currentPlayer];
        let controlTextArray = [],
            maxTimeControl = <></>;

        controlTextArray = ControlTextArray({
            controlTextValues: state.game.players[state.currentPlayer].controlTextValues, 
            player: state.currentPlayer,
            onDirectFiasco: onBatteryDirectFiasco,
            booleanValue: state.game.players[state.currentPlayer].battery,
            onValueChange: onChangeScore
        });

        if (state.game.pointsType === MODE_OFFICIAL) {
            let fiasco,
                currentPlayer = state.currentPlayer,
                maxPoints = state.game.maxPoints,
                players = state.game.players;

            if ((maxPoints <= (players[currentPlayer].points + players[currentPlayer].handicap) && 
                maxPoints > 0) || players[currentPlayer].battery) {
                Analytics.event('play', 'fiasco', state.game.players[state.currentPlayer].name); 
                fiasco = <div className="rounded importantNote">FiASCO!</div>;
            }

            maxTimeControl = <div className="fiascoBox rounded rounded2 bold">
                {fiasco}
                {t('description.puntosmaximo')}: {state.game.maxPoints}
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
    } else {
        return <></>;
    }
} 

function initControlTestValues(game) {
    const newState = {
        currentPlayer: 0,
        points: 0,
        game: game
    };

    for(let i=0; i<newState.game.players.length;i++) {
        newState.game.players[i].controlTextValues = game.pointsType === MODE_OFFICIAL ? new Array(20) : new Array(7);

        for(let j=0; j<newState.game.players[i].controlTextValues.length; j++) {
            newState.game.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

export default PointsGame;