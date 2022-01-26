import * as React from 'react';
import GameMenu from './GameMenu';
import WinnerTable from './WinnerTable';
import GameTypePlayer from './GameTypePlayer';
import Menu from './Menu';
import Game from '../model/Game';
import Analytics from '../Analytics';

import '../resources/css/GameController.scss';
import Utils from '../Utils';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

function GameController({game, onGameEnd}) {
    const alertBoxRef = React.useRef();
    const elementsToRender = [];
    const firebase = window.crawlear.fb;
    const [state, setState] = React.useState(game || new Game("", new Date().toLocaleDateString(), false, [], GAME_STATUS_MENU, 0, 0, [], 0, 0));

    function createGameObjectWithCurrentStatus() {
        return new Game(state.name, 
            state.date, 
            state.isPublic, 
            state.location, 
            state.players, 
            state.gameStatus, 
            state.gameType, 
            state.pointsType, 
            state.uids,
            state.maxTime,
            state.maxPoints);
    }

    function onPointsTypeChange(selectedIndex) {
        const newGame = createGameObjectWithCurrentStatus();

        Analytics.event('menu', 'pointsModeChange',selectedIndex);
        newGame.pointsType = selectedIndex;
        setState(newGame);
    }
    
    function onGameTypeChange(selectedIndex) {
        const newGame = createGameObjectWithCurrentStatus();
        
        Analytics.event('menu', 'playModeChange', selectedIndex);
        newGame.gameType = selectedIndex;
        setState(newGame);
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
        const newGame = createGameObjectWithCurrentStatus();
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
            const newGame = createGameObjectWithCurrentStatus();
    
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

    if (!Utils.isUserLogged()) {
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