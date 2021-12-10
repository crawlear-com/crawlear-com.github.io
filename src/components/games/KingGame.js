import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';

import '../../resources/css/games/KingGame.css';

const MODE_OFFICIAL = 1;

function KingGame({mode, onGameEnd, players, maxTime, maxPoints}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players, maxTime, maxPoints }) });
    const { t } = useTranslation();

    function changePointsOnScoreChange(value, player, control) {
        const players = [...state.players],
            points = players[player].points,
            handicap = players[player].handicap,
            order = getPlayersOrder(state.order.findIndex(item => item.id===players[player].id), state.order);

        if (!(state.maxPoints <= (points + handicap) && state.maxPoints > 0) || (points + handicap + value < state.maxPoints)) {
            players[player].points += value;
            players[player].controlTextValues = [...players[player].controlTextValues];
            players[player].controlTextValues[control] += value;
        }                
        setState(previousInputs => ({ ...previousInputs,
            players: players,
            order: order
        }));
    }

    function gameEnd() {
        let winner = 0;

        for(let i=0; i<state.players.length;i++) {
            if (state.players[i].points + state.players[i].handicap < state.players[winner].points + state.players[winner].handicap) {
                winner = i;
            }
        }
        onGameEnd && onGameEnd(state.players[winner].id);
    }

    React.useEffect(() => {
        Analytics.pageview('/kinggame/');
    },[]);

    let result = [];

    result.push(<div>{t('description.ordenruta')}:</div>);
    for(let i=0;i<state.players.length;i++) {
        result.push(<>
            <div>
                <div className="controlTextContainerQueue rounded bold">
                    {state.order[i].name}: {state.order[i].points + state.order[i].handicap} ptos
                </div>
            </div>
        </>);
    }

    result.push(<p>{t('description.puntos').toUpperCase()}:</p>);
    for(let i=0;i<state.players.length;i++) {
        if (state.mode === MODE_OFFICIAL) {
            let fiasco;

            if (state.maxPoints <= (state.players[i].points+state.players[i].handicap) && state.maxPoints > 0) {
                Analytics.event('play', 'fiasco', state.players[i].name); 
                fiasco = <div className="rounded importantNote">FiASCO!</div>;
            }

            result.push(<div className="fiascoBox rounded rounded2 bold">
                {fiasco}
                {t('description.puntosmaximo')}: {state.maxPoints}
            </div>);
        }

        result.push(<>
            <div className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{state.players[i].name}</div>
                    {`${t('description.handicap')} : ${state.players[i].handicap}`}<br />
                    {t('description.total')}: { state.players[i].points + state.players[i].handicap}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        players: state.players, 
                        player: i, 
                        pointsMode: state.mode, 
                        onValueChange: (value, player, control) => {changePointsOnScoreChange(value, player, control)}})}
                </div>
            </div>
        </>);
    }

    result.push(<button className="importantNote" onClick={gameEnd}>{t('description.fin')}</button>);

    return result;
}

function initControlTestValues({mode, players, maxTime, maxPoints}) {
    const newState = {
        players: [...players],
        mode: mode,
        order: [...players],
        maxTime: maxTime,
        maxPoints: maxPoints
    }

    for(let i=0; i<newState.players.length;i++) {
        newState.players[i].controlTextValues = mode === MODE_OFFICIAL ? new Array(10) : new Array(7);

        for(let j=0; j<newState.players[i].controlTextValues.length; j++) {
            newState.players[i].controlTextValues[j] = 0;
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