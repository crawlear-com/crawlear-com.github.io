import * as React from 'react';
import GameMenu from './GameMenu';
import WinnerTable from './WinnerTable';
import GameTypePlayer from './GameTypePlayer';
import Menu from './Menu';
import Analytics from '../Analytics';

import '../resources/css/GameController.scss';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

function GameController({game, onGameEnd}) {
    const alertBoxRef = React.useRef();
    const elementsToRender = [];
    const firebase = window.crawlear.fb;
    const [state, setState] = React.useState(game);

    function onPointsTypeChange(selectedIndex) {
        const newState = {...state};

        Analytics.event('menu', 'pointsModeChange',selectedIndex);
        newState.pointsType = selectedIndex;
        setState(newState);
    }
    
    function onGameTypeChange(selectedIndex) {
        const newState = {...state};
        
        Analytics.event('menu', 'playModeChange', selectedIndex);
        newState.gameType = selectedIndex;
        setState(newState);
    }
    
    function onGameEndFromGamePlayer(game) {
        const newGame = {...game};

        window.scrollTo(0,0);
        Analytics.event('menu','winner',newGame.players[0].name);
        newGame.gameStatus = GAME_STATUS_FINISH;        
        setState(newGame);
        onGameEnd && onGameEnd(newGame);
    }
    
    function setUidsFromPlayers(players) {
        const uids = [];

        players.forEach((player)=>{
            if (player.uid) {
                uids.push(player.uid);
            } 
        });

        return uids;
    }

    function onPlayerNumerChange(players) {
        const newGame = {...state};
        let action = 'addPlayer';

        cleanAlertBox(alertBoxRef);
        if (state.players.length > players.length) {
            action = 'removePlayer';
        }
        Analytics.event('menu', action, players.length);
        newGame.players = players;
        setState(newGame);
    }
    
    function onBeginGame(t) {
        window.scrollTo(0,0);
        if (state.players.length>0) {
            const newGame = {...state};
    
            Analytics.event('menu', 'beginGame', newGame.players.length);
            newGame.uids = setUidsFromPlayers(newGame.players);
            newGame.gameStatus = GAME_STATUS_PLAY;
            setState(newGame);
        } else {
            Analytics.event('menu', 'beginGame', 0);
            showAlertBox(t('error.nojugadores'), alertBoxRef);
        }
    }


    React.useEffect(() => {
        if(state.gameStatus === GAME_STATUS_MENU) {
            Analytics.pageview('/menu/');
        } else if (state.gameStatus === GAME_STATUS_FINISH) {
            firebase.setGame(state,()=>{},()=>{});
        }
    },[state.gameStatus]);

    if (!firebase.isUserLogged()) {
        elementsToRender.push(<Menu key={1} />);
    }
    elementsToRender.push(<div key={2} ref={alertBoxRef} className="hideAlert alertBox"></div>);

    switch(state.gameStatus) {
        case GAME_STATUS_MENU:
            elementsToRender.push(<GameMenu key={3} onPlayerNumerChange={onPlayerNumerChange}  
                onGameTypeChange={onGameTypeChange}
                onPointsTypeChange={onPointsTypeChange}
                beginGame={onBeginGame}
                game={state}
            />);
                break;
        case GAME_STATUS_PLAY:
            elementsToRender.push(<GameTypePlayer key={3} 
                onGameEnd={onGameEndFromGamePlayer}
                game={state} />);
            break;
        default:
            elementsToRender.push(<WinnerTable key={3}
                game={state} />);
    }

    return elementsToRender;
}

function cleanAlertBox(alertBoxRef) {
    alertBoxRef.current.classList.add('hideAlert');;
    alertBoxRef.current.innerHTML = '';
}

function showAlertBox(message, alertBoxRef) {
    alertBoxRef.current.classList.remove('hideAlert');;
    alertBoxRef.current.innerHTML = message;
}

export default GameController;