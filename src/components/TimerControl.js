import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';
import Utils from '../Utils';

import '../resources/css/TimerControl.scss';

const STATE_PLAY = 'play';
const STATE_PAUSE = 'pause';
const STATE_STOP = 'stop';

function TimerControl ({
    forceStop,
    onTimerChange, 
    maxTime, 
    onTimeFiasco}) {
    const { t } = useTranslation();
    const tickTime = React.useRef(0);
    const [state, setState] = React.useState(()=>{ 
        tickTime.current = 0;
        
        return { 
            millis: 0,
            timer: null,
            maxTime: maxTime,
            state: STATE_PAUSE
        };
    });
    const timeValue = Utils.millisToTime(state.millis);

    if (forceStop && state.state === STATE_PLAY) {
        onPlayPauseChange();
    }

    React.useEffect(()=> {
        const newState = {
            ...state,
            timeStart: Date.now()
        };

        if (newState.state === STATE_PLAY) {
            newState.timer && clearInterval(newState.timer);
            newState.millis = tickTime.current;
            newState.timer = setInterval(() => {timerCount(newState)}, 10);
            setState(previousInputs => ({ ...previousInputs,...newState}));
        } else if (newState.state === STATE_PAUSE){
            const finalTime = tickTime.current + (Date.now() - newState.timeStart);
            
            newState.millis = finalTime;
            tickTime.current = finalTime;
            newState.timer && clearInterval(state.timer);
            newState.timer = null;
            setState(previousInputs => ({ ...previousInputs,...newState}));
        } else {
            newState.millis = 0;
            tickTime.current = 0;
            newState.timer && clearInterval(state.timer);
            newState.timer = null;
            setState(previousInputs => ({ ...previousInputs,...newState}));

        }
    }, [state.state]);

    function timerCount(state) {
        if (tickTime.current < state.maxTime) {
                tickTime.current += 10;
                onTimerChange && onTimerChange(tickTime.current);
                setState(previousInputs => ({ ...previousInputs,
                    millis: tickTime.current
            }));
        } else {
            onPlayPauseChange();
            onTimeFiasco && onTimeFiasco();
        }
    };

    function onReset() {
        tickTime.current = 0;
        state.timer && clearInterval(state.timer);
        setState({ 
            maxTime: state.maxTime,
            millis: 0,
            timer: null,
            state: STATE_STOP
        });
        onTimerChange && onTimerChange(tickTime.current);
    }
    
    function onPlayPauseChange() {
        if(state.state === STATE_PAUSE || state.state === STATE_STOP) {
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

    return <div className="timerContainer"> {t('description.tiempo')}:
        <div className="timer">{`${String(timeValue.h).padStart(2, '0')}:${String(timeValue.m).padStart(2, '0')}:${String(timeValue.s).padStart(2, '0')}:${String(timeValue.mm).padStart(3, '0')}`}</div>
        <button className="timerPlayButton importantNote" onClick={onPlayPauseChange}>play/pause</button>
        <button onClick={onReset} className="resetButton">{t('description.reset')}</button>
    </div>;
}

export default TimerControl;
