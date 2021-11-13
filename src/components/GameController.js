import * as React from 'react';
import PlayerController from './PlayerController';
import GameTypeController from './GameTypeController';
import TotalTimeGame from './TotalTimeGame';
import KingGame from './KingGame';
import PointsGame from './PointsGame';
import Utils from '../Utils';
import MainPageTextContent from './MainPageTextContent';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

const GAME_TYPE_TIME = 0;
const GAME_TYPE_POINTS = 1;
const GAME_TYPE_KING = 2;

const GAME_MODE_SIMPLE = 0;
const GAME_MODE_COMPLETE = 1;

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

    React.useEffect(() => {
        if(state.gameStatus === GAME_STATUS_MENU) {
            ReactGA.pageview('/menu/');
        }
    },[state.gameStatus]);

    elementsToRender.push(<div ref={alertBoxRef} className="hideAlert alertBox"></div>);

    switch(state.gameStatus) {
        case GAME_STATUS_MENU:
            elementsToRender.push(<MainPageTextContent />);
            elementsToRender.push(<PlayerController onPlayerNumerChange={(players)=>{
                onPlayerNumerChange(players,state, setState, alertBoxRef)}
                }/>);
            elementsToRender.push(<GameTypeController 
                selectedGameType={state.gameSelected}
                selectedPointsType={state.pointsTypeSelected}
                onGameTypeChange={(selectedIndex) => {
                    onGameTypeChange(selectedIndex, setState, state);
                    }} 
                onPointsTypeChange={(selectedIndex) => {
                    onPointsTypeChange(selectedIndex, setState, state);
                }}/>);
            elementsToRender.push(<p>
                    <button className="importantNote" onClick={() => {
                        beginGame(state, setState, alertBoxRef, t)
                        }}>{t('description.empezar')}</button>
                </p>);
                break;
        case GAME_STATUS_PLAY:
            if (state.gameSelected === GAME_TYPE_TIME) {
                elementsToRender.push(<TotalTimeGame 
                    mode={state.pointsTypeSelected}
                    onGameEnd={(winnerPlayer)=> {
                        onGameEnd(winnerPlayer, state, setState)
                    }}
                    players={state.players}
                />);
            } else if (state.gameSelected === GAME_TYPE_KING) {
                elementsToRender.push(<KingGame 
                    onGameEnd={(winnerPlayer)=> {
                        onGameEnd(winnerPlayer, state, setState)
                    }}
                    players={state.players} 
                    mode={state.pointsTypeSelected}
                    />);
            } else if (state.gameSelected === GAME_TYPE_POINTS) {
                elementsToRender.push(<PointsGame 
                    mode={state.pointsTypeSelected}
                    onGameEnd={(winnerPlayer)=> {
                        onGameEnd(winnerPlayer, state, setState)
                    }}
                    players={state.players}
                />);
            }
            elementsToRender.push(<button onClick={() => {
                goToMenu(state, setState)
            }}>{t('description.atras')}</button>);
            break;
        default:
            elementsToRender.push(<div className="winnerBox importantNote rounded">
                {t('description.ganador')}: {state.players[state.winner].name} <br />
                {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(state.players[state.winner].time))} <br />
                {t('description.puntos')}: {state.players[state.winner].points} 
            </div>);
            elementsToRender.push(<div className="pointsTable rounded rounded1">
                {state.players.map((player, i) => { 
                    return <div className="winnerBox rounded" key={i} value={player.name}>
                            <div className="headerPlayer rounded2 bold">
                                {player.name}
                            </div>
                            {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(player.time))}<br />
                            {t('description.puntos')}: {player.points}
                        </div>
                })}
            </div>);
            elementsToRender.push(<button onClick={() => {
                goToMenu(state, setState)
            }}>{t('description.atras')}</button>);
    }

    return elementsToRender;
}

function cleanAlertBox(alertBoxRef) {
    alertBoxRef.current.classList.add('hideAlert');;
    alertBoxRef.current.innerHTML = '';
}

function onPointsTypeChange(selectedIndex, setState, state) {
    setState({
        players: state.players, 
        winner: state.winner,
        gameStatus: state.gameStatus,
        gameSelected: state.gameSelected,
        pointsTypeSelected: selectedIndex
    });
}

function onGameTypeChange(selectedIndex, setState, state) {
    setState({
        players: state.players, 
        winner: state.winner,
        gameStatus: state.gameStatus,
        gameSelected: selectedIndex,
        pointsTypeSelected: state.pointsTypeSelected
    });
}

function onGameEnd(winnerPlayer, state, setState) {
    window.scrollTo(0,0);
    setState({
        players: state.players, 
        winner: winnerPlayer,
        gameStatus: GAME_STATUS_FINISH,
        gameSelected: state.gameSelected,
        pointsTypeSelected: state.pointsTypeSelected
    });
}

function onPlayerNumerChange(players,state, setState, alertBoxRef) {
    cleanAlertBox(alertBoxRef);
    setState({
        players: players, 
        winner: state.winner,
        gameStatus: state.gameStatus,
        gameSelected: state.gameSelected,
        pointsTypeSelected: state.pointsTypeSelected
    });
}

function beginGame(state, setState, alertBoxRef, t) {
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

function goToMenu(state, setState) {
    window.scrollTo(0,0);
    setState({
        players: state.players, 
        winner: state.winner,
        gameStatus: GAME_STATUS_MENU,
        gameSelected: state.gameSelected,
        pointsTypeSelected: state.pointsTypeSelected
    });
}

function showAlertBox(message, alertBoxRef) {
    alertBoxRef.current.classList.remove('hideAlert');;
    alertBoxRef.current.innerHTML = message;
}

export default GameController;