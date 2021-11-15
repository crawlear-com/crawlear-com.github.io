import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from './ControlTextArray';
import ReactGA from 'react-ga';

const MODE_OFFICIAL = 1;

function KingGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players }) });
    const { t } = useTranslation();

    function changePointsOnScoreChange(points, player, control) {
        const players = [...state.players]
        const order = getPlayersOrder(state.order.findIndex(item => item.id===state.players[player].id), state.order);

        players[player].points += points;
        players[player].controlTextValues = [...players[player].controlTextValues];
        players[player].controlTextValues[control] += points;
                
        setState(previousInputs => ({ ...previousInputs,
            players: players,
            order: order
        }));
    }

    function gameEnd() {
        let winner = 0;

        for(let i=0; i<state.players.length;i++) {
            if (state.players[i].points < state.players[winner].points) {
                winner = i;
            }
        }
        onGameEnd(winner);
    }

    React.useEffect(() => {
        ReactGA.pageview('/kinggame/');
    },[]);

    let result = [];

    result.push(<div>{t('description.ordenruta')}:</div>);
    for(let i=0;i<state.players.length;i++) {
        result.push(<>
            <div>
                <div className="controlTextContainerQueue rounded bold">
                    {state.order[i].name}: {state.order[i].points} ptos
                </div>
            </div>
        </>);
    }

    result.push(<p>{t('description.puntos').toUpperCase()}:</p>);
    for(let i=0;i<state.players.length;i++) {
        result.push(<>
            <div className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{state.players[i].name}</div>
                    {t('description.total')}: { state.players[i].points}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        players: state.players, 
                        player: i, 
                        pointsMode: state.mode, 
                        onValueChange: (value, player, control)=> {changePointsOnScoreChange(value, player, control)}})}
                </div>
            </div>
        </>);
    }

    result.push(<button className="importantNote" onClick={gameEnd}>{t('description.fin')}</button>);

    return result;
}

function initControlTestValues({mode, players}) {
    const newState = {
        players: [...players],
        mode: mode,
        order: [...players]
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