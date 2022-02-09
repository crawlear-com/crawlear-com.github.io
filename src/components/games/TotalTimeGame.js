import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TimerControl from '../TimerControl';
import ControlTextArray from '../ControlTextArray';
import Utils from '../../Utils';
import Analytics from '../../Analytics';

import '../../resources/css/games/TotalTimeGame.scss'

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const MODE_OFFICIAL = 1;

let tickTime = 0;
let timer = null;

function TotalTimeGame({game, onGameEnd}) {
    const { t } = useTranslation();
    const [state, setState] = React.useState(()=>{ 
        tickTime = 0;
        return initControlTestValues(game)
    });
    
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
        const newState = {...state},
            game = newState.game,
            players = newState.game.players,
            points = players[player].points,
            handicap = players[player].handicap;

        if ((((game.maxPoints > (points + handicap) || game.maxPoints <= 0) && 
            (game.maxTime > tickTime || game.maxTime <= 0)) || (points + handicap + value < game.maxPoints)) &&
            !players[player].battery) {
                players[player].controlTextValues = [...players[player].controlTextValues];
                players[player].controlTextValues[control] += value;
                players[player].points += value;
        }

        setState(newState);
    }

    function onBatteryDirectFiasco(player, value) {
        const newState = {...state},
            players = newState.game.players;

        players[player].battery = value;
        setState(newState);
    }

    function timerCount(state) {
        const game = state.game;

        if ((game.maxPoints > game.players[state.currentPlayer].points || game.maxPoints <= 0) && 
            (game.maxTime > tickTime || game.maxTime <= 0) && 
            (!game.players[state.currentPlayer].battery)) {
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
        let newState = {...state };

        tickTime = 0;
        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[state.currentPlayer].name);
        newState = initControlTestValues(newState.game);
        newState.game.players[state.currentPlayer].time = 0;
        newState.game.players[state.currentPlayer].points = 0;
        newState.game.players[state.currentPlayer].battery = false;
        newState.currentPlayer = state.currentPlayer;
        newState.state = STATE_PAUSE;
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            game = newState.game,
            players = game.players;
            
        window.scrollTo(0,0);
        newState.state = STATE_PAUSE;

        if ((game.maxPoints <= players[newState.currentPlayer].points && game.maxPoints > 0) || 
            (game.maxTime <= tickTime && game.maxTime > 0) || players[newState.currentPlayer].battery) {
            players[newState.currentPlayer].time = (game.maxTime > 0 ? game.maxTime : tickTime);
            players[newState.currentPlayer].points = (game.maxPoints > 0 ? game.maxPoints : newState.players[newState.currentPlayer].points);
        } else {
            players[newState.currentPlayer].time = tickTime;
        }

        Analytics.event('play', 'endPlayer', players[newState.currentPlayer].name);

        if (newState.currentPlayer+1 < game.players.length) {
            tickTime = 0;
            newState.millis = 0;
            newState.currentPlayer = newState.currentPlayer+1;
            setState(previousInputs => ({ 
                ...previousInputs,
                ...newState}));
        } else {
            if (onGameEnd) {
                game.players = Utils.getWinnerByPointsAndTime(game.players);
                onGameEnd && onGameEnd(game);
            }
        }
    }

    if (state.game.players.length>0) {
        let fiasco = <></>;
        const currentPlayer = state.game.players[state.currentPlayer],
            controlTextArray = ControlTextArray({
                controlTextValues: state.game.players[state.currentPlayer].controlTextValues,
                player: state.currentPlayer,
                onDirectFiasco: onBatteryDirectFiasco,
                onValueChange: onChangeScore,
                booleanValue: state.game.players[state.currentPlayer].battery
            });

        if (state.game.pointsType === MODE_OFFICIAL) {
            const game = state.game, maxPoints = game.maxPoints, maxTime = game.maxTime,
                currentPlayer = state.currentPlayer, players = game.players;

            if ((maxPoints <= (players[currentPlayer].points+players[currentPlayer].handicap) && maxPoints > 0) || 
                (maxTime <= tickTime && maxTime > 0) ||
                players[currentPlayer].battery) {
                Analytics.event('play', 'fiasco', players[currentPlayer].name); 
                fiasco = <div className="fiascoBox rounded importantNote">FiASCO!</div>;
            }
        }

        return <div className="gameContainer">
            <div className="playersList">
                <div className="playerListItem importantNote rounded">
                    <img src={currentPlayer.avatar} alt="avatar"/>
                    {currentPlayer.name}
                </div>
            </div>
            <div className="totalTimeContainer rounded rounded2">
                {`${t('description.handicap')} : ${currentPlayer.handicap}`}<br />
                {t('description.puntos')}: { currentPlayer.points}<br />
                ---<br />
                <div className="inline bold">{t('description.total')} :</div> {currentPlayer.points + currentPlayer.handicap}<br />
                {t('description.tiempomaximo')}: {Utils.printTime(Utils.millisToTime(state.game.maxTime))} <br />
                {t('description.puntosmaximo')}: {state.game.maxPoints}
            </div>
            <TimerControl 
                state={state.state}
                time={state.millis} 
                onPlayPauseChange={changePlayPauseTimeControl}
            />
            {fiasco}
            <div className="controlTextContainer rounded rounded1">
                {controlTextArray}
            </div>
            <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
            <button className="importantNote" onClick={()=>{
                onEndPlayer()
                }}>{t('description.finjugador')} ({currentPlayer.name})</button><p />
        </div>
    }
}

function initControlTestValues(game) {
    const newState = {
        millis: 0,
        timeStart: 0,
        currentPlayer: 0,
        game: game,
        state: STATE_PAUSE
    }

    for(let i=0; i<newState.game.players.length;i++) {
        newState.game.players[i].controlTextValues = game.pointsType === MODE_OFFICIAL ? new Array(20) : new Array(7);

        for(let j=0; j<newState.game.players[i].controlTextValues.length; j++) {
            newState.game.players[i].controlTextValues[j] = 0;
        }
    }

    return newState;
}

export default TotalTimeGame;