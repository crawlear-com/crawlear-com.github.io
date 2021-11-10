import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlText from './ControlText';
import TimerControl from './TimerControl';
import Utils from '../Utils';

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';

const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;
let tickTime = 0;
let timer = null;

function TotalTimeGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(initControlTestValues({ mode, players }));
    const { t, i18n } = useTranslation();

    React.useEffect(()=> {
        const newState = {
            ...state,
            timeStart: Date.now()
        };

        if (state.state === STATE_PLAY) {
            timer && clearInterval(timer);
            newState.millis = tickTime;
            timer = setInterval(() => {timerCount(newState)}, 10);
            setState(previousInputs => ({ ...previousInputs,...newState}));
        } else {
            const finalTime = tickTime + (Date.now() - newState.timeStart);
            newState.millis = finalTime;
            tickTime = finalTime;
            timer && clearInterval(timer);
            timer = null;
            setState(previousInputs => ({ ...previousInputs,...newState}));
        }
    }, [state.state]);

    function changeTimeOnScoreChange(value, pos) {
        let newState = {...state};
    
        newState.controlTextValues[pos] += value;
        newState.players[state.currentPlayer].points += value;
        newState.timeModifier = value * 1000 + state.timeModifier;
    
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }
    
    function timerCount(state) {
        tickTime += 10;
        setState(previousInputs => ({ ...previousInputs,millis: tickTime}));
    };
    
    function changePlayPauseTimeControl() {
        if(state.state === STATE_PAUSE) {
            state.state = STATE_PLAY;
        } else {
            state.state = STATE_PAUSE;
        }

        setState(previousInputs=>({
            ...previousInputs,
            state: state.state
        }));
    }

    function onReset() {
        let newState = {
            ...state, 
        };
        window.scrollTo(0,0);

        tickTime = 0;
        newState = initControlTestValues(newState);
        newState.players[state.currentPlayer].time = 0;
        newState.players[state.currentPlayer].points = 0;  
        newState.currentPlayer = state.currentPlayer;
        newState.state = STATE_PAUSE;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = initControlTestValues(state);;
            
        window.scrollTo(0,0);
        newState.state = STATE_PAUSE;
        newState.players[state.currentPlayer].time = tickTime + state.timeModifier;
    
        if (state.currentPlayer+1 < state.players.length) {
            tickTime = 0;
            newState.millis = 0;
            newState.timeModifier = 0;
            newState.currentPlayer = state.currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            onGameEnd && onGameEnd(getWinner(state));
        }
    }

    if (state.players.length>0) {
        const time = Utils.secondsToTime(state.millis + state.timeModifier),
            currentPlayer = state.players[state.currentPlayer];
        //let controlTextArray = Utils.getControlTextArray(state.mode, state.controlTextValues, (value)=> {changeTimeOnScoreChange(value, 0)}z, t);
        let controlTextArray = [];
        
        if (state.mode === MODE_OFFICIAL) {
            controlTextArray.push(<ControlText value={state.controlTextValues[0]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[1]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[2]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[3]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[4]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[5]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[6]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[7]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 7)}} initialValue={0} text={t('points.distancia')} step={1} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[8]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 8)}} initialValue={0} text={t('points.anclajeindebido')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[9]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 9)}} initialValue={0} text={t('points.juez')} step={1} />);
        } else {
            controlTextArray.push(<ControlText value={state.controlTextValues[0]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[1]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[2]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[3]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[4]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[5]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={state.controlTextValues[6]} onValueChange={(value)=> {changeTimeOnScoreChange(value, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
        }

        return <div className="gameContainer">
            <div className="playersList">
                <div className="playerListItem importantNote rounded">
                    <img src={currentPlayer.avatar} alt="avatar"/>
                    {currentPlayer.name}
                </div>
            </div>

            <div className="totalTimeContainer rounded">
                {t('description.total')}: <div className="totalValue">{Utils.printTime(time)}</div>
            </div>
            <TimerControl 
                state={state.state}
                time={state.millis} 
                onPlayPauseChange={changePlayPauseTimeControl}
            />
            <div className="controlTextContainer rounded rounded1">
                {controlTextArray}
            </div>
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={()=>{
                onEndPlayer(state, setState, onGameEnd)
                }}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
        </div>
    }
}

function initControlTestValues(props) {
    const state = {
        millis: 0,
        timeModifier: 0,
        timeStart: 0,
        players: props.players,
        currentPlayer: 0,
        mode: props.mode,
        state: STATE_PAUSE,
        controlTextValues: props.mode === MODE_OFFICIAL ? [10] : [7]
    }

    for(let i=0; i<10; i++){
        state.controlTextValues[i] = 0;
    }

    return state;
}

function getWinner(state) {
    let winner = -1, minTime=5*60*3600;

    for (let i=0;i<state.players.length;i++) {
        if (state.players[i].time < minTime) {
            minTime = state.players[i].time;
            winner = i;
        }
    }

    return winner;
}

export default TotalTimeGame;