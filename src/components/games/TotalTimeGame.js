import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import Utils from '../../Utils';
import Analytics from '../../Analytics';

import '../../resources/css/games/TotalTimeGame.css'

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const MODE_OFFICIAL = 1;

let tickTime = 0;
let timer = null;

function TotalTimeGame({mode, onGameEnd, players, maxPoints, maxTime}) {
    const [state, setState] = React.useState(()=>{ 
        tickTime = 0;
        return initControlTestValues({ maxPoints: maxPoints, maxTime: maxTime, mode, players }) 
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
        const players = [...state.players],
        points = state.players[state.currentPlayer].points,
        handicap = state.players[state.currentPlayer].handicap;

        if ((!(state.maxPoints <= (points + handicap) && state.maxPoints > 0) && 
            !(state.maxTime <= tickTime && state.maxTime > 0)) || (points + handicap + value < state.maxPoints)) {
                players[player].controlTextValues = [...players[player].controlTextValues];
                players[player].controlTextValues[control] += value;
                players[player].points += value;
        } else {
            if (state.maxPoints) {
                players[player].points = Math.max(state.maxPoints, players[player].points);
            }
            if (state.maxTime) {
                players[player].time = Math.max(state.maxPoints, players[player].time);
            }
        }

        setState(previousInputs => ({ ...previousInputs,
            players: players
        }));
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
            onGameEnd && onGameEnd(Utils.getWinnerByPointsAndTime(state.players));
        }
    }

    if (state.players.length>0) {
        const currentPlayer = state.players[state.currentPlayer];
        let controlTextArray = [],
            maxTimeControl = <></>;

        controlTextArray = ControlTextArray({
            players: state.players,
            player: state.currentPlayer,
            pointsMode: state.mode,
            onValueChange: (value, player, control)=> {
                onChangeScore(value, player, control)
            }});

        if (state.mode === MODE_OFFICIAL) {
            let fiasco;

            if ((state.maxPoints <= (state.players[state.currentPlayer].points+state.players[state.currentPlayer].handicap) && state.maxPoints > 0) || 
                (state.maxTime <= tickTime && state.maxTime > 0)) {
                Analytics.event('play', 'fiasco', state.players[state.currentPlayer].name); 
                fiasco = <div className="rounded importantNote">FiASCO!</div>;
            }

            maxTimeControl = <div className="fiascoBox bold">
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
            <div className="totalTimeContainer rounded rounded2">
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

function initControlTestValues({maxPoints, maxTime, mode, players}) {
    const newState = {
        millis: 0,
        timeStart: 0,
        players: [...players],
        currentPlayer: 0,
        mode: mode,
        maxTime: maxTime,
        maxPoints: maxPoints,
        state: STATE_PAUSE
    }

    for(let i=0; i<newState.players.length;i++) {
        newState.players[i].controlTextValues = mode === MODE_OFFICIAL ? new Array(11) : new Array(7);

        for(let j=0; j<newState.players[i].controlTextValues.length; j++) {
            newState.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

export default TotalTimeGame;