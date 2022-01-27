import * as React from 'react';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';
import GameController from '../GameController.js';
import GameList from '../GameList.js';
import UserProfile from '../UserProfile.js';
import Spinner from '../Spinner.js';
import ErrorBox from '../ErrorBox.js';
import Utils from '../../Utils.js';
import GameRequests from '../GameRequests.js';

import '../../resources/css/GameManagement.scss';
import Game from '../../model/Game.js';
import { useNavigate } from 'react-router-dom';

const STATE_LOCATION_UNKNOWN=0;
const STATE_LOCATION_LOCATED=1;
const STATE_LOCATION_LOCATING=2;

const GAME_STATUS_FINISHED = 2;

const STATE_NEWGAME_NOTLOGGED = -1;
const STATE_NEWGAME_MENU = 0;
const STATE_NEWGAME_PLAYING = 1;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [stateLocation, setStateLocation] = React.useState(STATE_LOCATION_UNKNOWN);
    const [games, setGames] = React.useState([]);
    const [state, setState] = React.useState(STATE_NEWGAME_MENU);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [game, setGame] = React.useState(new Game("",
        new Date().toLocaleDateString(),
        false,
        { latitude: 0, longitude: 0 },
        [], 0, 0, 0, [], 0, 0));
    let locationElement;

    if (!window.crawlear.user || !window.crawlear.user.uid) {
        navigate("/");
        setState(STATE_NEWGAME_NOTLOGGED);
    }

    React.useEffect(() => {
        Analytics.pageview('/completegame/');
        refreshGames();
    },[]);

    function refreshGames() {
        firebase.getGamesFromUser(window.crawlear.user.uid, (result)=> {
            setGames(result);
        });
    }

    function onRemoveGame(gamePosition) {
        const game = games[gamePosition];
        const newGames = [...games];

        newGames.splice(gamePosition,1);
        window.crawlear.fb.removeUidFromGame(game, window.crawlear.user.uid);
        setGames(newGames);
    }

    function createGameObjectWithCurrentStatus() {
        return new Game(game.name, 
            game.date, 
            game.isPublic, 
            game.location, 
            game.players, 
            game.gameStatus, 
            game.gameType, 
            game.pointsType, 
            game.uids,
            game.maxTime,
            game.maxTime);
    }

    function getLocation(event) {
        event.preventDefault();
    
        if(navigator.geolocation) {
            setStateLocation(STATE_LOCATION_LOCATING);
            navigator.geolocation.getCurrentPosition((position) => {
                const newGame = createGameObjectWithCurrentStatus();
    
                setStateLocation(STATE_LOCATION_LOCATED);
                newGame.location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                setGame(newGame);
            });
        } 
    }

    function onBeginButtonClick(event) {
        if (game.name) {
            window.scrollTo(0,0);
            setState(STATE_NEWGAME_PLAYING);
        } else {
            setErrorMessage(t('error.nonombre'));
        }
    }

    function goBackToMenuStatus() {
        setState(STATE_NEWGAME_MENU);
        setStateLocation(STATE_LOCATION_UNKNOWN);
        if (game.gameStatus === GAME_STATUS_FINISHED) {
            refreshGames();
        }
        setGame(new Game("",
            new Date().toLocaleDateString(),
            false,
            { latitude: 0, longitude: 0 },
            [], 0, 0, 0, [], 0, 0));
    }

    if(navigator.geolocation) {
        if (stateLocation === STATE_LOCATION_UNKNOWN) {
            locationElement = <a className="bold" href="https://crawlear.com" onClick={getLocation}>{t('description.obtener')}</a>;
        } else if (stateLocation === STATE_LOCATION_LOCATING) {
            locationElement = <Spinner />;
        } else if (stateLocation === STATE_LOCATION_LOCATED) {
            locationElement = <>
                <span>({`${game.location.latitude},${game.location.longitude}`})</span>
                <a href={Utils.getMapsURL(game.location.latitude, game.location.longitude)} rel='noreferrer' target="_blank">{t('description.vergooglemaps')}</a>
            </>
        }
    } else {
        <div className="">{t('content.nogeolocation')}</div>
    }

    if(state === STATE_NEWGAME_NOTLOGGED) {
        return <></>;
    } else {
        return <>
        {state === STATE_NEWGAME_MENU ? 
        <>
            <UserProfile user={window.crawlear.user} onLogout={onLogout} />
            <GameRequests uid={window.crawlear.user.uid} />
            <GameList games={games} onRemoveGame={onRemoveGame}/>

            <ErrorBox message={errorMessage} />
            <div className="newGameContainer rounded rounded1">
                <div className="newGame">
                    <div className="headerText bold">{t('description.nuevaPartida')}</div>
                    <div className="newGameRow">
                        <span className="">{t('description.nombre')}</span>: <input className="newGameNameInput" type="text" onChange={(element)=>{
                            const newGame = createGameObjectWithCurrentStatus();

                            newGame.name = element.target.value;
                            setGame(newGame);
                            setErrorMessage("");
                        }}></input>
                    </div>
                    <div className="newGameRow">
                        <span className="">{t('description.fecha')}</span>: {new Date().toLocaleDateString()}
                    </div>
                    <div className="newGameRow">
                        <span className="">{t('description.esPublica')}</span>: <input type="checkbox" value="true" onChange={(element)=>{
                            const newGame = createGameObjectWithCurrentStatus();

                            newGame.isPublic = element.target.value;
                            setGame(newGame);
                        }}></input>
                    </div>
                    <div className="newGameRow">
                        <span className="">{t('description.localizacion')}</span>: 
                        {locationElement}
                    </div>
                </div>
            </div>
            <p>
                <button className="importantNote" onClick={onBeginButtonClick}>{t('description.nuevaPartida')}</button>
            </p>
        </> : state === STATE_NEWGAME_PLAYING ? 
            <>
                <GameController game={game} onGameEnd={(game)=>{
                    setGame(game);
                }}/>
                <button className="backButton" onClick={goBackToMenuStatus}>{t('description.atras')}</button>
            </> : <></>}
    </>;
    }
}

export default GameManagement;