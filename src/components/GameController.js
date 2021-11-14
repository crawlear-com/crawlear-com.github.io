import * as React from 'react';
import GameMenu from './GameMenu';
import WinnerTable from './WinnerTable';
import GameTypePlayer from './GameTypePlayer';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

const GAME_TYPE_TIME = 0;
const GAME_MODE_SIMPLE = 0;

function GameController(props) {
    const alertBoxRef = React.useRef();
    const elementsToRender = [];

    const { t, i18n } = useTranslation();
    const [state, setState] = React.useState({
        players: [], 
        winner: 0,
        gameStatus: GAME_STATUS_MENU,
        gameSelected: GAME_TYPE_TIME,
        pointsTypeSelected: GAME_MODE_SIMPLE
    });

    function onPointsTypeChange(selectedIndex) {
        setState({
            players: state.players, 
            winner: state.winner,
            gameStatus: state.gameStatus,
            gameSelected: state.gameSelected,
            pointsTypeSelected: selectedIndex
        });
    }
    
    function onGameTypeChange(selectedIndex) {
        setState({
            players: state.players, 
            winner: state.winner,
            gameStatus: state.gameStatus,
            gameSelected: selectedIndex,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function onGameEnd(winnerPlayer) {
        window.scrollTo(0,0);
        setState({
            players: state.players, 
            winner: winnerPlayer,
            gameStatus: GAME_STATUS_FINISH,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function onPlayerNumerChange(players, alertBoxRef) {
        cleanAlertBox(alertBoxRef);
        setState({
            players: players, 
            winner: state.winner,
            gameStatus: state.gameStatus,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }
    
    function beginGame(alertBoxRef, t) {
        window.scrollTo(0,0);
        if (state.players.length>0) {
            const newState = {...state};
    
            setState({
                players: newState.players,
                winner: newState.winner, 
                gameStatus: GAME_STATUS_PLAY,
                gameSelected: newState.gameSelected,
                pointsTypeSelected: newState.pointsTypeSelected
            });
        } else {
            showAlertBox(t('error.nojugadores'), alertBoxRef);
        }
    }

    function goToMenu() {
        window.scrollTo(0,0);
        setState({
            players: state.players, 
            winner: state.winner,
            gameStatus: GAME_STATUS_MENU,
            gameSelected: state.gameSelected,
            pointsTypeSelected: state.pointsTypeSelected
        });
    }

    React.useEffect(() => {
        if(state.gameStatus === GAME_STATUS_MENU) {
            ReactGA.pageview('/menu/');
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
                players={state.players}
                winner={state.winner}
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