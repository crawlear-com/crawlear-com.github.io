import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from '../components/games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from '../components/games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from '../components/games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras } from '../components/games/RegionalZonaRcGameScores';
import { getGameContent as getMiniCrawlerPassionGameContent, gameExtras as miniCrawlerPassionExtras } from '../components/games/MiniCrawlerPassionGameScores';
import { getGameContent as getGenericGameContent, gameExtras as genericExtras } from '../components/games/GenericGameScores';
import { gameExtras as kingExtras } from '../components/games/KingGameScores';
import Utils from '../Utils';
import GamePlayerUtils, { STATUS_REPAIR, STATUS_PLAYING, STATUS_DONE } from './GamePlayerUtils';
import GamePlayerMenu from './components/GamePlayerMenu';
import GameTypePlayer from '../components/GameTypePlayer';
import { GameProgressionContext } from '../components/context/GameProgressionContext';
import WinnerTable from '../components/WinnerTable';
import { isOffline } from '../components/routes/Offline';
import { GAME_TYPE_AECAR, 
         GAME_TYPE_ISRCC, 
         GAME_TYPE_KING, 
         GAME_TYPE_LEVANTE, 
         GAME_TYPE_COPAESPANA,
         GAME_TYPE_MINICRAWLERPASSION,
         GAME_TYPE_GENERIC,
        GameUtils } from '../model/Game';

import '../resources/css/GamePlayer.scss';

const GAME_STATUS_CREATED = 0;
const GAME_STATUS_PLAYING = 1;
const GAME_STATUS_FINISHED = 2;

function GamePlayer({inGame, onBackButtonClick}) {
    const fb = window.crawlear.fb;
    const [state, setState] = React.useState(GAME_STATUS_CREATED);
    const [game, setGame] = React.useState(inGame);
    const [jidGroup, setJidGroup] = React.useState(()=>{
        return Utils.getGroupFromJid(game, window.crawlear.user.uid);
    });
    const [gameProgression, setGameProgression] = React.useState({});
    const gameProgressionRef = React.useRef({});
    const [player, setPlayer] = React.useState({});
    const [zone, setZone] = React.useState(-1);
    const { t } = useTranslation();
    let view = <></>,
        judgeProgression = <></>,
        childrenContent = <></>,
        gameExtras,
        method;

    
    if (game.gameType === GAME_TYPE_AECAR) {
        player!==-1 && zone !== -1 && (method = getAecarGameContent);
        gameExtras = aecarExtras;
    } else if (game.gameType === GAME_TYPE_ISRCC) {
        player!==-1 && zone !== -1 && (method = getIsrccGameContent);
        gameExtras = isrccExtras;
    } else if (game.gameType === GAME_TYPE_LEVANTE) {
        player!==-1 && zone !== -1 && (method = getLevanteGameContent);
        gameExtras = levante124Extras;
    } else if (game.gameType === GAME_TYPE_COPAESPANA) {
        player!==-1 && zone !== -1 && (method = getRegionalZonaRcGameContent);
        gameExtras = regionalZonaRcExtras;
    } else if (game.gameType === GAME_TYPE_KING) {
        gameExtras = kingExtras;
    } else if (game.gameType === GAME_TYPE_MINICRAWLERPASSION) {
        player!==-1 && zone !== -1 && (method = getMiniCrawlerPassionGameContent);
        gameExtras = miniCrawlerPassionExtras;
    } else if (game.gameType === GAME_TYPE_GENERIC) {
        player!==-1 && zone !== -1 && (method = getGenericGameContent);
        gameExtras = genericExtras;
    }

    method && (childrenContent = method(t, player.id, zone, game.players[player.id].zones[zone].points));

    function updateGameFromProgression(progression) {
        const newGame = {...game};

        Object.entries(progression).forEach((user, uIndex)=>{
            Object.entries(user[1]).forEach((zone, zIndex)=>{
                if(zone[1].data) {
                    newGame.players[user[0]].zones[zone[0]] = zone[1].data;
                }
            });
        });

        setGame(newGame);
    }

    React.useEffect(()=>{
        if (!isOffline) {
            fb.getGameProgression(game.gid, ()=>{}, ()=>{}, (group, progression)=>{
                const res = {};

                res[group] = progression;
                updateGameFromProgression(progression);
                gameProgressionRef.current = {...gameProgressionRef.current, ...res};
                setGameProgression({...gameProgressionRef.current, ...res});
            }, (group, progression)=>{
                const res = {};

                res[group] = progression;
                updateGameFromProgression(progression);
                gameProgressionRef.current = {...gameProgressionRef.current, ...res};
                setGameProgression({...gameProgressionRef.current, ...res});
            });
        } else {
            setGameProgression(GameUtils.createGameProgression(game.zones, game.players.length));
        }
    },[]);

    function onBeginGame(player, zone) {
        const pid = player.id;
        const group = player.group;

        setState(GAME_STATUS_PLAYING);
        setPlayer(player)
        setZone(zone)
        gameProgression[group][pid][zone].status = STATUS_PLAYING;
        setGameProgression(gameProgression);
        fb.setGameProgression(game.gid, pid, group, zone, gameProgression[group][pid][zone]);
    }

    function onClosePlayButtonClick(game) {
        if (GamePlayerUtils.isGroupGameFinished(game, gameProgression, jidGroup) && window.confirm(t('content.cerrarpartida')) && !isOffline) {
            fb.getGameResult(game, (game)=>{
                let newGame = {...game};

                newGame.gameStatus = 2;
                gameExtras.onGameEnd(newGame);
                newGame = Utils.getOrderedGameResult(newGame);
                fb.updateGame(newGame);
                fb.removeGameProgression(newGame.gid);
                setGame(newGame);
                setState(GAME_STATUS_FINISHED);
            }, ()=>{});
        } else if (isOffline) {
            const newGame = Utils.getOrderedGameResult(game);

            setGame(GameUtils.getGameResult(newGame, gameProgression));
            setState(GAME_STATUS_FINISHED);
        }
    }

    function onGameEnd(updatedGame) {
        if(!GamePlayerUtils.isIndividualGame(game)) {
            const pid = player.id;
            const group = player.group;
            const newGameProgression = {...gameProgression};
            const newGame = {...game};
    
            newGameProgression[group][pid][zone].status = STATUS_DONE;
            newGameProgression[group][pid][zone].data = updatedGame.players[pid].zones[zone];
            !newGameProgression[group][pid][zone].data.judgedBy && (newGameProgression[group][pid][zone].data.judgedBy = []);
            newGameProgression[group][pid][zone].data.judgedBy.push(window.crawlear.user.uid);
            setGameProgression(newGameProgression);
    
            newGame.players[pid].zones[zone] = newGameProgression[group][pid][zone].data;
            fb.setGameProgression(newGame.gid, pid, group, zone, newGameProgression[group][pid][zone]);
            setState(GAME_STATUS_CREATED); 
            setGame(newGame);
        } else {
            gameExtras.onGameEnd(game);
            const newGame =  Utils.getOrderedGameResult(game);
            newGame.gameStatus = 2;
            fb.updateGame(newGame);
            fb.removeGameProgression(newGame.gid);
            fb.removeDirectorPresenceRequest(newGame.gid);
            setState(GAME_STATUS_FINISHED);
            setGame(newGame);
        }
    }

    function onRepair(playerIndex, zoneIndex) {
        const newGameProgression = {...gameProgression},
            player = game.players[playerIndex],
            group = player.group,
            pid = player.id;

        newGameProgression[group][playerIndex][zoneIndex].status = STATUS_REPAIR;
        newGameProgression[group][playerIndex][zoneIndex].repairData = {
            setTime: new Date().getTime()
        };
        newGameProgression[group][playerIndex][zoneIndex].data = player.zones[zoneIndex];
        setGameProgression(newGameProgression);
        fb.setGameProgression(game.gid, pid, group, zoneIndex, newGameProgression[group][pid][zoneIndex]);
        setState(GAME_STATUS_CREATED);
    }

    if (game.gameType !== GAME_TYPE_KING) {



        if (state === GAME_STATUS_CREATED) {
            view = <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
                <GamePlayerMenu game={game} gameProgression={gameProgression}
                    jidGroup={jidGroup} onBeginGame={onBeginGame} onBackButtonClick={onBackButtonClick}
                    onCloseButonClick={onClosePlayButtonClick}></GamePlayerMenu>
            </GameProgressionContext.Provider>

        } else if (state === GAME_STATUS_PLAYING) {
            view = <GameTypePlayer 
                player={player.id}
                zone={zone} 
                game={game}
                gameExtras={gameExtras}
                onGameEnd={onGameEnd}
                onRepair={onRepair}>
                    {childrenContent}
                </GameTypePlayer>;
        } else if (state === GAME_STATUS_FINISHED) { 
            view = <div className="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        }





    } else {
        if (state === GAME_STATUS_CREATED || state === GAME_STATUS_PLAYING) { 
            view = <GameTypePlayer 
                game={game} 
                onGameEnd={onGameEnd}
                gameExtras={gameExtras} />;
        } else {
            view = <div className="gameList"><WinnerTable game={game} />
            <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
        }        
    }

    return view;
}

export default GamePlayer;