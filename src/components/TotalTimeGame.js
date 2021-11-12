import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';
import ControlTextArray from './ControlTextArray';
import Utils from '../Utils';
import ReactGA from 'react-ga';

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';

const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;
let tickTime = 0;
let timer = null;

function TotalTimeGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ return initControlTestValues({ mode, players }) });
    const { t, i18n } = useTranslation();
    
    React.useEffect(() => {
        ReactGA.pageview('/totaltimegame/');
    },[]);

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

    function changeTimeOnScoreChange(value, player, control) {
        const timeModifier = value * 1000 + state.timeModifier,
            players = [...state.players];
    
        players[player].controlTextValues = [...players[player].controlTextValues];
        players[player].controlTextValues[control] += value;
        players[player].points += value;
    
        setState(previousInputs => ({ ...previousInputs,
            players: players,
            timeModifier: timeModifier
        }));
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
        let controlTextArray = [];

        controlTextArray = ControlTextArray({
            players: state.players,
            player: state.currentPlayer,
            pointsMode: state.mode,
            onValueChange: (value, player, control)=> {
                changeTimeOnScoreChange(value, player, control)
            }});

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

function initControlTestValues({mode, players}) {
    const newState = {
        millis: 0,
        timeModifier: 0,
        timeStart: 0,
        players: [...players],
        currentPlayer: 0,
        mode: mode,
        state: STATE_PAUSE
    }

    for(let i=0; i<newState.players.length;i++) {
        newState.players[i].controlTextValues = mode === MODE_OFFICIAL ? new Array(10) : new Array(7);

        for(let j=0; j<newState.players[i].controlTextValues.length; j++) {
            newState.players[i].controlTextValues[j] = 0;
        }
    }


    return newState;
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