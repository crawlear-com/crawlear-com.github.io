import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import MaxTimePicker from '../MaxTimePicker';
import Picker from '../Picker';
import Utils from '../../Utils';
import Analytics from '../../Analytics';

import '../../resources/css/games/TotalTimeGame.css'

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
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
    const { t } = useTranslation();
    
    React.useEffect(() => {
        Analytics.pageview('/totaltimegame/');
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

        if (!(state.maxPoints <= (state.players[state.currentPlayer].points + state.players[state.currentPlayer].handicap) && state.maxPoints > 0) && 
        !(state.maxTime <= tickTime && state.maxTime > 0)) {
            players[player].controlTextValues = [...players[player].controlTextValues];
            players[player].controlTextValues[control] += value;
            players[player].points += value;
        
            setState(previousInputs => ({ ...previousInputs,
                players: players
            }));
        } else {
            if (state.maxPoints) {
                players[player].points = Math.max(state.maxPoints, players[player].points);
            }
            if (state.maxTime) {
                players[player].time = Math.max(state.maxPoints, players[player].time);
            }

            if (state.maxTime || state.maxPoints) {
                setState(previousInputs => ({ ...previousInputs,
                    players: players
                }));
            }
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
            Analytics.event('play', 'timePlay', ''); 
    
        } else {
            state.state = STATE_PAUSE;
            Analytics.event('play', 'timePause', '');    
        }

        setState(previousInputs=>({
            ...previousInputs,
            state: state.state
        }));
    }

    function onMaxPointsChange(points) {
        Analytics.event('menu', 'maxPointsSet', points);
        setState(previousInputs=>({
            ...previousInputs,
            maxPoints: points
        }));
    }

    function onMaxTimeChange(time) {
        Analytics.event('menu', 'maxTimeSet', time);
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

        Analytics.event('play', 'reset', newState.players[state.currentPlayer].name);

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

        Analytics.event('play', 'endPlayer', newState.players[newState.currentPlayer].name);

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
            return <div>
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

                if ((state.maxPoints <= (state.players[state.currentPlayer].points+state.players[state.currentPlayer].handicap) && state.maxPoints > 0) || 
                    (state.maxTime <= tickTime && state.maxTime > 0)) {
                    Analytics.event('play', 'fiasco', state.players[state.currentPlayer].name); 
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
                    {`${t('description.handicap')} : ${currentPlayer.handicap}`}<br />
                    {t('description.puntos')}: { currentPlayer.points}<br />
                    ---<br />
                    <div className="inline bold">{t('description.total')} :</div> {currentPlayer.points + currentPlayer.handicap}
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

function initControlTestValues({maxPoints, maxTime, mode, players, step}) {
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
    const players = [...state.players];

    players.sort(function(a, b) {
        const bypoints = (a.points + a.handicap) - (b.points + b.handicap);

        if (bypoints === 0) {
            return a.time - b.time;
        }

        return bypoints;
      });

    return players[0].id;
}

export default TotalTimeGame;