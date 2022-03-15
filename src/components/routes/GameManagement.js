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
import { Navigate } from 'react-router-dom';

const STATE_LOCATION_UNKNOWN=0;
const STATE_LOCATION_LOCATED=1;
const STATE_LOCATION_LOCATING=2;

const GAME_STATUS_FINISHED = 2;

const STATE_NEWGAME_MENU = 0;
const STATE_NEWGAME_PLAYING = 1;

function GameManagement({onLogout}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const [stateLocation, setStateLocation] = React.useState(STATE_LOCATION_UNKNOWN);
    const [games, setGames] = React.useState([]);
    const [state, setState] = React.useState(STATE_NEWGAME_MENU);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [game, setGame] = React.useState(new Game("",
        new Date().toLocaleDateString(),
        false,
        { latitude: 0, longitude: 0 },
        [], 0, 0, 1, [], 40, 600000, 1, 10));
    let locationElement;

    React.useEffect(() => {
            Analytics.pageview('/completegame/');
            firebase.isUserLogged() && refreshGames();    
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

    function getLocation(event) {
        event.preventDefault();
    
        if(navigator.geolocation) {
            setStateLocation(STATE_LOCATION_LOCATING);
            navigator.geolocation.getCurrentPosition((position) => {
                const newGame = {...game};
    
                setStateLocation(STATE_LOCATION_LOCATED);
                newGame.location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                setGame(newGame);
            }, ()=>{
                setStateLocation(STATE_LOCATION_UNKNOWN);
                setErrorMessage(t('error.nogeolocation'));
            });
        } else {
            setStateLocation(STATE_LOCATION_UNKNOWN);
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
            [], 0, 0, 1, [], 40, 600000, 1, 10));
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

    if (!firebase.isUserLogged()) {
        return <Navigate to={{ pathname: "/", state: { from: "/completegame" } }} />
    }

    return <>
            {state === STATE_NEWGAME_MENU ? 
                <>
                    <UserProfile user={window.crawlear.user} onLogout={onLogout} />
                    <GameRequests user={window.crawlear.user} />
                    <GameList games={games} onRemoveGame={onRemoveGame}/>

                    <ErrorBox message={errorMessage} />
                    <div className="newGameContainer rounded rounded1">
                        <div className="newGame">
                            <div className="headerText bold">{t('description.nuevaPartida')}</div>
                            <div className="newGameRow">
                                <span className="">{t('description.nombre')}</span>: <input className="newGameNameInput" type="text" onChange={(element)=>{
                                    const newGame = {...game};

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
                                    const newGame = {...game};

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
                </> : 
                
                state === STATE_NEWGAME_PLAYING ? 
                    <>
                        <GameController game={game} onGameEnd={(game)=>{
                            setGame(game);
                        }}/>
                        <button className="backButton" onClick={goBackToMenuStatus}>{t('description.atras')}</button>
                    </> : 
            <></>}
        </>;
}

export default GameManagement;