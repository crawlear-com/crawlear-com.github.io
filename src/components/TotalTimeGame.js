import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from './TimerControl';
import ControlTextArray from './ControlTextArray';
import MaxTimePicker from './MaxTimePicker';
import Picker from './Picker';
import Utils from '../Utils';
import ReactGA from 'react-ga';

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;
const STEP_MAXTIMESELECT = 0;
const STEP_PLAY = 1;

let tickTime = 0;
let timer = null;

function TotalTimeGame({mode, onGameEnd, players}) {
    const [state, setState] = React.useState(()=>{ 
        tickTime = 0;
        return initControlTestValues({ maxPoints: 0, maxTime: 0, mode, players, step: STEP_MAXTIMESELECT }) 
    });
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

    function onChangeScore(value, player, control) {
        const players = [...state.players];

        if (!(state.maxPoints <= state.players[state.currentPlayer].points && state.maxPoints > 0) && 
        !(state.maxTime <= tickTime && state.maxTime > 0)) {
            players[player].controlTextValues = [...players[player].controlTextValues];
            players[player].controlTextValues[control] += value;
            players[player].points += value;
        
            setState(previousInputs => ({ ...previousInputs,
                players: players
            }));
        }
    }

    function timerCount(state) {
        if (!(state.maxPoints <= state.players[state.currentPlayer].points && state.maxPoints > 0) && 
        !(state.maxTime <= tickTime && state.maxTime > 0)) {
            tickTime += 10;  
            setState(previousInputs => ({ ...previousInputs,
                millis: tickTime
            }));
        }
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

    function onMaxPointsChange(points) {
        setState(previousInputs=>({
            ...previousInputs,
            maxPoints: points
        }));
    }

    function onMaxTimeChange(time) {
        setState(previousInputs=>({
            ...previousInputs,
            maxTime: time
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
        const newState = initControlTestValues(state);
            
        window.scrollTo(0,0);
        newState.state = STATE_PAUSE;

        if ((state.maxPoints <= state.players[state.currentPlayer].points && state.maxPoints > 0) || 
            (state.maxTime <= tickTime && state.maxTime > 0)) {
            newState.players[state.currentPlayer].time = (state.maxTime > 0 ? state.maxTime : tickTime);
            newState.players[state.currentPlayer].points = (state.maxPoints > 0 ? state.maxPoints : newState.players[state.currentPlayer].points);
        } else {
            newState.players[state.currentPlayer].time = tickTime;
        }

        if (state.currentPlayer+1 < state.players.length) {
            tickTime = 0;
            newState.millis = 0;
            newState.currentPlayer = state.currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            onGameEnd && onGameEnd(getWinner(state));
        }
    }

    function onCompleteGameMaxtimeSelected() {
        setState(previousInputs => ({ 
            ...previousInputs,
            step: STEP_PLAY}));

    }

    if (state.players.length>0) {
        const currentPlayer = state.players[state.currentPlayer];
        let controlTextArray = [],
            maxTimeControl,
            maxTimePicker = state.mode === MODE_OFFICIAL ? 
                <MaxTimePicker onMaxTimeChange={onMaxTimeChange}
                    hours={0}
                    minutes={0}
                    seconds={0} /> : <></>;

        controlTextArray = ControlTextArray({
            players: state.players,
            player: state.currentPlayer,
            pointsMode: state.mode,
            onValueChange: (value, player, control)=> {
                onChangeScore(value, player, control)
            }});

        if (state.mode === MODE_OFFICIAL && state.step === STEP_MAXTIMESELECT) {
            return <div className="maxTimeSelectorForGame">
                    <p>{t('content.maxTimeText1')}</p>
                    {maxTimePicker}
                    <p>{t('content.maxTimeText2')}</p>
                    <div className="pickerContainer timerContainer rounded rounded2">
                        <Picker minValue={0} maxValue={40} callback={(result) => {onMaxPointsChange(result)}} initialValue={0} />
                    </div>
                    <button onClick={onCompleteGameMaxtimeSelected} className="rounded rounded2 importantNote">{t('description.continuar')}</button>
                </div>;
        } else {
            if (state.mode === MODE_OFFICIAL) {
                let fiasco;

                if ((state.maxPoints <= state.players[state.currentPlayer].points && state.maxPoints > 0) || 
                    (state.maxTime <= tickTime && state.maxTime > 0)) {
                    fiasco = <div className="rounded importantNote">FiASCO!</div>;
                }

                maxTimeControl = <div className="fiascoBox rounded rounded2 bold">
                    {fiasco}
                    {t('description.tiempomaximo')}: {Utils.printTime(Utils.millisToTime(state.maxTime))} <br />
                    {t('description.puntosmaximo')}: {state.maxPoints}
                </div>
            }
            return <div className="gameContainer">
                <div className="playersList">
                    <div className="playerListItem importantNote rounded">
                        <img src={currentPlayer.avatar} alt="avatar"/>
                        {currentPlayer.name}
                    </div>
                </div>
                {maxTimeControl}
                <div className="totalTimeContainer rounded">
                    {t('description.puntos')}: { currentPlayer.points}
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
                    onEndPlayer(onGameEnd)
                    }}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
            </div>
        }
    }
}

function initControlTestValues({zones, maxPoints, maxTime, mode, players, step}) {
    const newState = {
        millis: 0,
        timeStart: 0,
        players: [...players],
        currentPlayer: 0,
        mode: mode,
        maxTime: maxTime,
        maxPoints: maxPoints,
        state: STATE_PAUSE,
        step: step
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