import * as React from 'react';
import GameMenu from './GameMenu';
import WinnerTable from './WinnerTable';
import GameTypePlayer from './GameTypePlayer';
import Analytics from '../Analytics';

import '../resources/css/GameController.css';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

const GAME_TYPE_TIME = 0;
const GAME_MODE_SIMPLE = 0;

function GameController(props) {
    const alertBoxRef = React.useRef();
    const elementsToRender = [];

    const [state, setState] = React.useState({
        players: [], 
        orderedPlayers: [],
        gameStatus: GAME_STATUS_MENU,
        gameSelected: GAME_TYPE_TIME,
        pointsTypeSelected: GAME_MODE_SIMPLE
    });

    function onPointsTypeChange(selectedIndex) {
        Analytics.event('menu', 'pointsModeChange',selectedIndex);
        setState({
            players: state.players, 
            orderedPlayers: state.orderedPlayers,
            gameStatus: state.gameStatus,
            gameSelected: state.gameSelected,
            pointsTypeSelected: selectedIndex
        });
    }
    
    function onGameTypeChange(selectedIndex) {
        Analytics.event('menu', 'playModeChange', selectedIndex);
        setState({
            players: state.players, 
            orderedPlayers: state.orderedPlayers,
            gameStatus: state.gameStatus,
            gameSelected: selectedIndex,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function onGameEnd(orderedPlayers) {
        window.scrollTo(0,0);
        Analytics.event('menu','winner',orderedPlayers[0].name);
        setState({
            players: state.players, 
            orderedPlayers: orderedPlayers,
            gameStatus: GAME_STATUS_FINISH,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function onPlayerNumerChange(players, alertBoxRef) {
        let action = 'addPlayer';

        cleanAlertBox(alertBoxRef);
        if (state.players.length > players.length) {
            action = 'removePlayer';
        }
        Analytics.event('menu', action, players.length);

        setState({
            players: players, 
            orderedPlayers: state.orderedPlayers,
            gameStatus: state.gameStatus,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function beginGame(alertBoxRef, t) {
        window.scrollTo(0,0);
        if (state.players.length>0) {
            const newState = {...state};
    
            Analytics.event('menu', 'beginGame', state.players.length);
            setState({
                players: newState.players,
                orderedPlayers: newState.orderedPlayers, 
                gameStatus: GAME_STATUS_PLAY,
                gameSelected: newState.gameSelected,
                pointsTypeSelected: newState.pointsTypeSelected
            });
        } else {
            Analytics.event('menu', 'beginGame', 0);
            showAlertBox(t('error.nojugadores'), alertBoxRef);
        }
    }

    function goToMenu() {
        window.scrollTo(0,0);
        setState({
            players: state.players, 
            orderedPlayers: state.orderedPlayers,
            gameStatus: GAME_STATUS_MENU,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }

    React.useEffect(() => {
        if(state.gameStatus === GAME_STATUS_MENU) {
            Analytics.pageview('/menu/');
        }
    },[state.gameStatus]);

    elementsToRender.push(<div ref={alertBoxRef} className="hideAlert alertBox"></div>);

    switch(state.gameStatus) {
        case GAME_STATUS_MENU:
            elementsToRender.push(<GameMenu onPlayerNumerChange={onPlayerNumerChange}  
                onGameTypeChange={onGameTypeChange}
                onPointsTypeChange={onPointsTypeChange}
                beginGame={beginGame}
                alertBoxRef={alertBoxRef}
                gameSelected={state.gameSelected}
                pointsTypeSelected={state.pointsTypeSelected}
            />);
                break;
        case GAME_STATUS_PLAY:
            elementsToRender.push(<GameTypePlayer 
                goToMenu={goToMenu}
                onGameEnd={onGameEnd} 
                gameSelected={state.gameSelected}
                players={state.players} 
                pointsTypeSelected={state.pointsTypeSelected} />);
            break;
        default:
            elementsToRender.push(<WinnerTable 
                mode={state.pointsTypeSelected}
                players={state.players}
                orderedPlayers={state.orderedPlayers}
                goToMenu={goToMenu} />);
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