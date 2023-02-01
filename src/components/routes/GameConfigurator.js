import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_TYPE_AECAR,
    GAME_TYPE_ISRCC,
    GAME_TYPE_KING,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC,
    OFFLINE_USER_UID,
    OfflinePlayer,
    Game, GameUtils } from '../../model/Game.ts';
import GameTypeController from '../GameTypeController';
import PlayerController from '../PlayerController';
import MaxTimeAndPointsPicker from '../MaxTimeAndPointsPicker';
import ZonesPicker from '../ZonesPicker';
import GroupsPicker from '../GroupsPicker';
import GateProgressionPicker from '../GateProgressionPicker';
import Spinner from '../Spinner';
import ErrorBox from '../ErrorBox';
import Utils from '../../Utils';
import { UserStatusContext } from '../context/UserStatusContext';
import { AecarGameScores } from '../games/AecarGameScores';
import { IsrccGameScores } from '../games/IsrccGameScores';
import { Levante124GameScores } from '../games/Levante124GameScores';
import { RegionalZonaRcGameScores } from '../games/RegionalZonaRcGameScores';
import { KingGameScores } from '../games/KingGameScores';
import { MiniCrawlerPassionGameScores } from '../games/MiniCrawlerPassionGameScores';
import { GenericGameScores } from '../games/GenericGameScores';

import { useTranslation } from 'react-i18next';
import Analytics from '../../Analytics';

import '../../resources/css/GameConfigurator.scss';

const STATE_LOCATION_UNKNOWN=0;
const STATE_LOCATION_LOCATED=1;
const STATE_LOCATION_LOCATING=2;

function GameConfigurator({preconfiguredGame, onGameCreated}) {
    const [game, setGame] = React.useState(()=>{
        const newGame = preconfiguredGame || new Game("",
            new Date().toLocaleDateString(),
            { latitude: 0, longitude: 0 },
            false, GAME_TYPE_LEVANTE,
            [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], []);

        newGame.date = new Date().toLocaleDateString();
        return newGame;
    });
    const isOffline = true; //!navigator.onLine;
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [stateLocation, setStateLocation] = React.useState(STATE_LOCATION_UNKNOWN);
    const [groups, setGroups] = React.useState(1);
    const { t } = useTranslation();
    const extraConfigurationComponents = [];
    const { isUserLoged } = React.useContext(UserStatusContext);
    const fb = window.crawlear.fb;
    let locationElement;

    React.useEffect(()=>{
        window.scrollTo(0,0);
        if (isOffline) {
            onJudgeNumerChange([OfflinePlayer]);
        }
    }, []);

    function onGameTypeChange(selectedIndex) {
        const newGame = {...game};
        let maxTime = 0, maxPoints = 0;

        Analytics.event('menu', 'playModeChange', selectedIndex);
        newGame.gameType = selectedIndex;

        switch (newGame.gameType) {
            case GAME_TYPE_AECAR:
                maxPoints = AecarGameScores.maxPoints;
                maxTime = AecarGameScores.maxTime;
                break;
            case GAME_TYPE_KING:
                maxPoints = KingGameScores.maxPoints;
                maxTime = KingGameScores.maxTime;
                break;
            case GAME_TYPE_ISRCC:
                maxPoints = IsrccGameScores.maxPoints;
                maxTime = IsrccGameScores.maxTime;
                break;
            case GAME_TYPE_LEVANTE:
                maxPoints = Levante124GameScores.maxPoints;
                maxTime = Levante124GameScores.maxTime;
                break;    
            case GAME_TYPE_COPAESPANA:
                maxPoints = RegionalZonaRcGameScores.maxPoints;
                maxTime = RegionalZonaRcGameScores.maxTime;
                break;
            case GAME_TYPE_MINICRAWLERPASSION:
                maxPoints = MiniCrawlerPassionGameScores.maxPoints;
                maxTime = MiniCrawlerPassionGameScores.maxTime;
                break;
            case GAME_TYPE_GENERIC:
                maxPoints = GenericGameScores.maxPoints;
                maxTime = GenericGameScores.maxTime;
                break;
            default: 
                maxPoints = 0;
                maxTime = 0;
        }

        newGame.maxPoints = maxPoints;
        newGame.maxTime = maxTime;

        setGame(newGame);
    }

    function onJudgeNumerChange(judges) {
        const newGame = {...game};
        let action = 'addJudge';

        if (game.judges.length > judges.length) {
            action = 'removeJudge';
        }
        Analytics.event('menu', action, judges.length);
        newGame.judges = [...judges];
        if(isOffline && !newGame.owner.length) {
            newGame.owner.push(OFFLINE_USER_UID);
        }

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
        newGame.players = [...players];
        setGame(newGame);
        setErrorMessage("");
    }

    function onMaxPointsChange(points) {
        Analytics.event('menu', 'maxPointsSet', points);
        const newGame = {...game};

        newGame.maxPoints = points;
        setGame(newGame);
    }

    function onMaxTimeChange(time) {
        const newGame = {...game};

        newGame.maxTime = time;
        Analytics.event('menu', 'maxTimeSet', time);
        setGame(newGame);
    }

    function onZonesChange(zones) {
        const newGame = {...game};

        if(game.zones < zones) {
            newGame.gates.push(10);
        } else {
            newGame.gates.pop();
        }
        newGame.zones = zones;
        Analytics.event('menu', 'zonesSet', zones);
        setGame(newGame);
    }

    function onGatesChange(gates, i) {
        const newGame = {...game}

        newGame.gates[i] = gates;
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

    function onGroupsChange(result) {
        setGroups(result);
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

    function areAllGroupsFilled() {
        const groupsCounter = new Array(groups).fill(0);

        for (let i=0; i<game.players.length; i++) {
            groupsCounter[game.players[i].group]++;
        }

        return (typeof(groupsCounter.find((elem)=>{
            return elem === 0;
        })) === 'undefined')
    }

    function onGameDirectorChange(jid, value) {
        const jUid = game.judges[jid].uid;
        const newGame = {...game};

        if (value && !newGame.owner.find((elem)=>{return elem === jUid})) {
            newGame.owner.push(jUid);
            setGame(newGame);
        } else if(!value && newGame.owner.find((elem)=>{return elem === jUid})) {
            const indexOf = newGame.owner.indexOf(jUid);
            newGame.owner.splice(indexOf, 1);
            setGame(newGame);
        }
    }

    function createGame() {
        const allGroupsFilled = areAllGroupsFilled();
        window.scrollTo(0,0);

        if (!game.name || !game.name.length) {
            setErrorMessage(t('error.nonombre'));
        } else if ((game.gameType !== GAME_TYPE_KING && allGroupsFilled && game.name && game.players.length && game.judges.length && game.owner.length) || 
            (game.gameType === GAME_TYPE_KING && game.name && game.players.length)) {
                const newGame = {...game};
    
                if (game.gameType === GAME_TYPE_KING) {
                    newGame.judges.push({...window.crawlear.user});
                    newGame.zones = 1;
                    newGame.gates = new Array(1).fill(1);
                }
                newGame.uids = Utils.getUidsFromUsers(newGame.players);
                newGame.jids = Utils.getUidsFromUsers(newGame.judges);
                GameUtils.redoPlayersIds(game);
                GameUtils.init(newGame, 
                    GameUtils.getGameTypeControlTextValuesInit(newGame.gameType),
                    GameUtils.getGameTypeFiascoControlTextValuesInit(newGame.gameType),
                    true);
                if (isOffline && onGameCreated) {
                    onGameCreated(newGame);
                } else {                    
                    fb.setGame(newGame, (game)=>{
                        newGame.gid = game.gid;
                        fb.createGameProgression(newGame);
                        setGame(newGame);
                        window.location.href.indexOf('completegame')<0 ? navigate("/completegame") : window.location.reload();
                    }, ()=>{});
                }
        } else if (!allGroupsFilled) {
            setErrorMessage(t('error.rellenargrupos'));
        } else if (!game.judges.length && game.gameType !== 1) {
            setErrorMessage(t('error.nojueces'));
        } else if (!game.players.length) {
            setErrorMessage(t('error.nojugadores'));
        } else if (!game.owner.length) {
            setErrorMessage(t('error.nodirectordepartida'));
        } else {
            if (!game.judges.length && game.gameType !== GAME_TYPE_KING) {
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

    extraConfigurationComponents.push(<MaxTimeAndPointsPicker key={0}
        mode={game.pointsType} 
        onMaxPointsChange={onMaxPointsChange}
        onMaxTimeChange={onMaxTimeChange}
        time={game.maxTime}
        points={game.maxPoints}
        showTimePicker={true} />);

    if (game.gameType !== GAME_TYPE_KING) {
        extraConfigurationComponents.push(<ZonesPicker key={1}
            game={game}
            value={game.zones}
            onZonesChange={onZonesChange}
            onGatesChange={onGatesChange}
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange} />);
        extraConfigurationComponents.push(<GateProgressionPicker key={2}
            zones={game.zones}
            value={10}
            onGatesChange={onGatesChange} />);
        extraConfigurationComponents.push(<GroupsPicker key={3} 
            onGroupsChange={onGroupsChange} 
            value={1}
            minValue={1}
            maxValue={10}
            />)
        if (!isOffline) {
            extraConfigurationComponents.push(<PlayerController key={4}
                isForJudge={true}
                maxGroups={groups}
                inPlayers={game.judges}
                gameName={game.name}
                onGameDirectorChange={onGameDirectorChange}
                onPlayerNumerChange={onJudgeNumerChange} />);
        }
    }

    if (isUserLoged || isOffline) {
        return (<>
            <ErrorBox message={errorMessage} />
            <div className="newGameContainer rounded rounded1">
                <div className="newGame">
                    <div className="headerText bold">{t('description.nuevaPartida')}</div>
                    <div className="newGameRow">
                        <span className="">{t('description.nombre')}</span>: <input value={game.name} className="newGameNameInput" type="text" onChange={onNameChange}></input>
                    </div>
                    <div className="newGameRow">
                        <span className="">{t('description.fecha')}</span>: {game.date}
                    </div>
                    <div className="newGameRow">
                        <span className="">{t('description.esPublica')}</span>: <input type="checkbox" checked={game.isPublic} onChange={onIsPublicChange}></input>
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
                inPlayers={game.players}
                maxGroups={groups}
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
                        window.location.reload();
                    }
                }>{t('description.atras')}</button>
            </p>
        </>);
    } else {
        return <>Not logged! go to <a href='https://crawlear.com'>crawlear.com</a></>
    }


}


export default GameConfigurator;