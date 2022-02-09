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

    React.useEffect(() => {
        Analytics.pageview('/kinggame/');
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
        newState.order = getPlayersOrder(newState.order.findIndex(item => item.id===players[player].id), newState.order);
        setState(newState);
    }

    function gameEnd() {
        state.game.players = Utils.getWinnerByPointsAndTime(state.game.players);
        state.game.players = Utils.getNotmalizedMaxValues(state.game.players, 
            state.game.maxPoints, state.game.maxTime);
        onGameEnd && onGameEnd(state.game);
    }

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
        let fiasco,
            player = state.game.players[i],
            maxPoints = state.game.maxPoints;

        if (state.game.pointsType === MODE_OFFICIAL) {
            if ((maxPoints <= (player.points + player.handicap) &&  maxPoints > 0) || player.battery) {
                    Analytics.event('play', 'fiasco', state.game.players[i].name); 
                    fiasco = <div className="fiascoBox rounded rounded2 bold">FiASCO!</div>;
            }            
        }

        result.push(<div key={state.game.players.length+i+2} className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{player.name}</div>
                    {`${t('description.handicap')} : ${player.handicap}`}<br />
                    {t('description.total')}: { player.points + player.handicap}
                    {fiasco}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        controlTextValues: player.controlTextValues, 
                        player: i,
                        onDirectFiasco: onBatteryDirectFiasco,
                        booleanValue: player.battery,
                        onValueChange: onChangeScore
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
        newState.game.players[i].controlTextValues = game.pointsType === MODE_OFFICIAL ? new Array(20) : new Array(7);

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