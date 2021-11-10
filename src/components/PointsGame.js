import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlText from './ControlText';
import ReactGA from 'react-ga';

const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;
const MAX_POINTS = 10000000;

function PointsGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players }) });
    const { t, i18n } = useTranslation();

    function changePointsOnScoreChange(value, pos) {
        const newState = {...state};
        const controlTextValues = [...state.controlTextValues];

        controlTextValues[pos] += value;
        newState.players[state.currentPlayer].points += value;

        setState(previousInputs => ({ ...previousInputs,
            controlTextValues: controlTextValues,
        }));
    }

    function onEndPlayer() {
        window.scrollTo(0,0);
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
        setState((state, props)=> {
            return {
                ...initControlTestValues(state),
                players: [...state.players],
                currentPlayer: state.currentPlayer
            };
        });
    }

    React.useEffect(() => {
        ReactGA.pageview('/pointsgame/');
    },[]);

    if (state.players.length>0) {
        const currentPlayer = state.players[state.currentPlayer];
        let controlTextArray = [];
        
        if (mode === MODE_OFFICIAL) {
            controlTextArray.push(<ControlText value={state.controlTextValues[0]} onValueChange={(value)=> {changePointsOnScoreChange(value, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[1]} onValueChange={(value)=> {changePointsOnScoreChange(value, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[2]} onValueChange={(value)=> {changePointsOnScoreChange(value, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[3]} onValueChange={(value)=> {changePointsOnScoreChange(value, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[4]} onValueChange={(value)=> {changePointsOnScoreChange(value, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[5]} onValueChange={(value)=> {changePointsOnScoreChange(value, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[6]} onValueChange={(value)=> {changePointsOnScoreChange(value, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[7]} onValueChange={(value)=> {changePointsOnScoreChange(value, 7)}} initialValue={0} text={t('points.distancia')} step={1} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[8]} onValueChange={(value)=> {changePointsOnScoreChange(value, 8)}} initialValue={0} text={t('points.anclajeindebido')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[9]} onValueChange={(value)=> {changePointsOnScoreChange(value, 9)}} initialValue={0} text={t('points.juez')} step={1} />);
        } else {
            controlTextArray.push(<ControlText value={state.controlTextValues[0]} onValueChange={(value)=> {changePointsOnScoreChange(value, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[1]} onValueChange={(value)=> {changePointsOnScoreChange(value, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[2]} onValueChange={(value)=> {changePointsOnScoreChange(value, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[3]} onValueChange={(value)=> {changePointsOnScoreChange(value, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[4]} onValueChange={(value)=> {changePointsOnScoreChange(value, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[5]} onValueChange={(value)=> {changePointsOnScoreChange(value, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[6]} onValueChange={(value)=> {changePointsOnScoreChange(value, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
        }

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
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={onEndPlayer}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
        </div>
    }
}

function initControlTestValues({mode, players}) {
    const newState = {
        currentPlayer: 0,
        players: [...players],
        mode: mode,
        points: 0,
        controlTextValues: mode === MODE_SIMPLE ? new Array(10) : new Array(7)
    };

    for(let i=0; i<10; i++){
        newState.controlTextValues[i] = 0;
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