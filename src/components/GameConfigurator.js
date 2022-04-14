import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Game, GameUtils } from '../model/Game';
import GameTypeController from './GameTypeController';
import PlayerController from './PlayerController';
import MaxTimeAndPointsPicker from './MaxTimeAndPointsPicker';
import ZonesPicker from './ZonesPicker';
import GateProgressionPicker from './GateProgressionPicker';
import Spinner from './Spinner';
import ErrorBox from './ErrorBox';
import Utils from '../Utils';

import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';

const STATE_LOCATION_UNKNOWN=0;
const STATE_LOCATION_LOCATED=1;
const STATE_LOCATION_LOCATING=2;
const KING_GAME = 1;

function GameConfigurator() {
    const [game, setGame] = React.useState(()=>{
        return new Game("",
        new Date().toLocaleDateString(),
        { latitude: 0, longitude: 0 },
        false, 2,
        [], [], 600000, 40, 10, 4, 0, [], []);
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [stateLocation, setStateLocation] = React.useState(STATE_LOCATION_UNKNOWN);
    const { t } = useTranslation();
    const extraConfigurationComponents = [];
    const fb = window.crawlear.fb;
    let locationElement;

    React.useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    function onGameTypeChange(selectedIndex) {
        const newGame = {...game};

        Analytics.event('menu', 'playModeChange', selectedIndex);
        newGame.gameType = selectedIndex;
        setGame(newGame);
    }

    function onJudgeNumerChange(judges) {
        const newGame = {...game};
        let action = 'addJudge';

        if (game.judges.length > judges.length) {
            action = 'removeJudge';
        }
        Analytics.event('menu', action, judges.length);
        newGame.judges = judges;
        setGame(newGame);
        setErrorMessage("");
    }

    function onPlayerNumerChange(players) {
        const newGame = {...game};
        let action = 'addPlayer';

        if (game.players.length > players.length) {
            action = 'removePlayer';
        }
        Analytics.event('menu', action, players.length);
        newGame.players = players;
        setGame(newGame);
        setErrorMessage("");
    }

    function onMaxPointsChange(points) {
        Analytics.event('menu', 'maxPointsSet', points);
        const newGame = {...game};

        newGame.points = points;
        setGame(newGame);
    }

    function onMaxTimeChange(time) {
        const newGame = {...game}

        newGame.maxTime = time;
        Analytics.event('menu', 'maxTimeSet', time);
        setGame(newGame);
    }

    function onZonesChange(zones) {
        const newGame = {...game};

        newGame.zones = zones;   
        Analytics.event('menu', 'zonesSet', zones);
        setGame(newGame);
    }

    function onGatesChange(gates) {
        const newGame = {...game}

        newGame.gates = gates;
        Analytics.event('menu', 'gateSet', gates);
        setGame(newGame);
    }

    function onNameChange(event) {
        const newGame = {...game},
            name = event.target.value;

        if (name) {
            newGame.name = name;
            setGame(newGame);
            setErrorMessage("");
        }
    }

    function onIsPublicChange(event) {
        const newGame = {...game};

        newGame.isPublic = event.target.value;
        setGame(newGame);
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

    function createGame() {
        window.scrollTo(0,0);
        if (!game.name || !game.name.length) {
            setErrorMessage(t('error.nonombre'));
        } else if ((game.gameType !== KING_GAME && game.name && game.players.length && game.judges.length) || 
            (game.gameType === KING_GAME && game.name && game.players.length)) {
                const newGame = {...game};
    
                if (game.gameType === KING_GAME) {
                    newGame.judges.push({...window.crawlear.user});
                }
                newGame.uids = Utils.getUidsFromUsers(newGame.players);
                newGame.jids = Utils.getUidsFromUsers(newGame.judges);
                GameUtils.init(newGame);
                fb.setGame(newGame, (game)=>{
                    newGame.gid = game.gid;
                    fb.createGameProgression(newGame);
                    setGame(newGame);
                }, ()=>{});
                navigate("/completegame");
        } else if (!game.judges.length && game.gameType !== 1) {
            setErrorMessage(t('error.nojueces'));
        } else if (!game.players.length) {
            setErrorMessage(t('error.nojugadores'));
        } else {
            if (!game.judges.length && game.gameType !== KING_GAME) {
                setErrorMessage(t('error.nojueces'));
            } else if (!game.players.length) {
                setErrorMessage(t('error.nojugadores'));
            }
        }
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
        locationElement = <div className="">{t('content.nogeolocation')}</div>;
    }

    if (game.gameType !== KING_GAME) {
        extraConfigurationComponents.push(<MaxTimeAndPointsPicker key={0}
            mode={game.pointsType} 
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange}
            maxTime={game.maxTime}
            maxPoints={game.maxPoints}
            showTimePicker={true} />);
        extraConfigurationComponents.push(<ZonesPicker key={1}
            game={game}
            value={game.zones}
            onZonesChange={onZonesChange}
            onGatesChange={onGatesChange}
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange} />);
        extraConfigurationComponents.push(<GateProgressionPicker key={2}
            value={10}
            onGatesChange={onGatesChange} />);
        extraConfigurationComponents.push(<PlayerController key={3}
                isForJudge={true}
                gameName={game.name}
                onPlayerNumerChange={onJudgeNumerChange} />);
    }

    return (<>
        <ErrorBox message={errorMessage} />
        <div className="newGameContainer rounded rounded1">
            <div className="newGame">
                <div className="headerText bold">{t('description.nuevaPartida')}</div>
                <div className="newGameRow">
                    <span className="">{t('description.nombre')}</span>: <input className="newGameNameInput" type="text" onChange={onNameChange}></input>
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.fecha')}</span>: {new Date().toLocaleDateString()}
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.esPublica')}</span>: <input type="checkbox" value="true" onChange={onIsPublicChange}></input>
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.localizacion')}</span>: 
                    {locationElement}
                </div>
            </div>
        </div>

        <GameTypeController 
            selectedGameType={game.gameType}
            selectedPointsType={game.pointsType}
            onGameTypeChange={(selectedIndex) => {
                onGameTypeChange(selectedIndex);
            }
        } />

        {extraConfigurationComponents}

        <PlayerController gameName={game.name} 
            isForJudge={false}
            onPlayerNumerChange={(players)=>{
                onPlayerNumerChange && onPlayerNumerChange(players);
            }
        }/>

        <p>
            <button className="importantNote" 
                onClick={() => {
                    createGame(t);
                }
            }>{t('description.crear')}</button>
            <button
                onClick={() => {
                    navigate("/completegame");
                }
            }>{t('description.atras')}</button>

        </p>

    </>);
}

export default GameConfigurator;