import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlText from './ControlText';

const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;

function KingGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players }) });
    const { t, i18n } = useTranslation();

    function getControlTextArrayPerGame(i) {
        let controlTextArray = [];
    
        if (state.mode === MODE_OFFICIAL) {
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[0]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[1]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[2]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[3]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[4]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[5]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[6]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[7]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 7)}} initialValue={0} text={t('points.distancia')} step={1} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[8]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 8)}} initialValue={0} text={t('points.anclajeindebido')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[9]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 9)}} initialValue={0} text={t('points.juez')} step={1} />);
        } else {
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[0]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[1]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[2]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[3]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[4]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[5]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.players[i].controlTextValues[6]} onValueChange={(value)=> {changePointsOnScoreChange(value, i, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
        }
    
        return controlTextArray;
    }

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
                    {getControlTextArrayPerGame(i)}
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