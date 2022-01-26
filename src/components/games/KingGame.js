import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';
import Utils from '../../Utils';

import '../../resources/css/games/KingGame.scss';

const MODE_OFFICIAL = 1;

function KingGame({game, onGameEnd}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues(game) });
    const { t } = useTranslation();

    function changePointsOnScoreChange(value, player, control) {
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            points = players[player].points,
            handicap = players[player].handicap;

        if (!(game.maxPoints <= (points + handicap) && game.maxPoints > 0) || (points + handicap + value < game.maxPoints)) {
            players[player].points += value;
            players[player].controlTextValues = [...players[player].controlTextValues];
            players[player].controlTextValues[control] += value;
        }  else if (game.maxPoints) {
            players[player].points = Math.max(game.maxPoints, players[player].points);
        }

        newState.order = getPlayersOrder(newState.order.findIndex(item => item.id===players[player].id), newState.order);
        setState(newState);
    }

    function gameEnd() {
        state.game.players = Utils.getWinnerByPointsAndTime(state.game.players);
        onGameEnd && onGameEnd(state.game);
    }

    React.useEffect(() => {
        Analytics.pageview('/kinggame/');
    },[]);

    let result = [];

    result.push(<div key={0}>{t('description.ordenruta')}:</div>);
    for(let i=0;i<state.game.players.length;i++) {
        result.push(<div key={i+1}>
                <div className="controlTextContainerQueue rounded bold">
                    {state.order[i].name}: {state.order[i].points + state.order[i].handicap} ptos
                </div>
            </div>);
    }

    result.push(<p key={state.game.players.length+1}>{t('description.puntos').toUpperCase()}:</p>);
    state.pointsType === MODE_OFFICIAL && result.push(<p>{`${t('description.puntosmaximo')}: ${state.game.maxPoints}`.toLowerCase()}</p>);

    for(let i=0;i<state.game.players.length;i++) {
        let fiasco;

        if (state.game.pointsType === MODE_OFFICIAL) {
            if (state.game.maxPoints <= (state.game.players[i].points+state.game.players[i].handicap) && state.game.maxPoints > 0) {
                Analytics.event('play', 'fiasco', state.game.players[i].name); 
                fiasco = <div className="fiascoBox rounded rounded2 bold">FiASCO!</div>;
            }            
        }

        result.push(<div key={state.game.players.length+i+2} className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{state.game.players[i].name}</div>
                    {`${t('description.handicap')} : ${state.game.players[i].handicap}`}<br />
                    {t('description.total')}: { state.game.players[i].points + state.game.players[i].handicap}
                    {fiasco}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        controlTextValues: state.game.players[i].controlTextValues, 
                        player: i, 
                        pointsMode: state.game.pointsType, 
                        onValueChange: changePointsOnScoreChange
                    })}
                </div>
            </div>);
    }

    result.push(<button key={state.game.players.length*2+2} className="importantNote" onClick={gameEnd}>{t('description.fin')}</button>);

    return <div key={state.game.players.length*2+3} className="gameContainer">
        {result}
    </div>;
}

function initControlTestValues(game) {
    const newState = {
        game: game,
        order: [...game.players]
    }

    for(let i=0; i<newState.game.players.length;i++) {
        newState.game.players[i].controlTextValues = game.pointsType === MODE_OFFICIAL ? new Array(11) : new Array(7);

        for(let j=0; j<newState.game.players[i].controlTextValues.length; j++) {
            newState.game.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

function getPlayersOrder(index, array) {
    const newArray = [...array];

    newArray.push(newArray.splice(index, 1)[0]);

    return newArray;
}

export default KingGame;