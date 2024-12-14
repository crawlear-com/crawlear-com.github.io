import * as React from 'react'
import { isOffline } from '../../../pages/Offline'
import { Game } from '../../../games/Game'
import { isIndividualGame, isGroupGameFinished, updateGameFromProgression } from '../GamePlayerUtils'
import { useTranslation } from 'react-i18next'
import { GameUtils } from '../../../games/Game'
import { Player } from '../../../games/GameInterfaces'
import { STATUS_PLAYING, STATUS_DONE, STATUS_REPAIR } from '../GamePlayerUtils'
import Utils from '../../../Utils'

function UseGamePlayer(inGame: Game, gameExtras: any) {
    const [state, setState] = React.useState(GAME_STATUS_CREATED)
    const [gameProgressionLoaded, setGameProgressionLoaded] = React.useState(false)
    const [game, setGame] = React.useState(inGame)
    const [gameProgression, setGameProgression] = React.useState<Array<any>>([])
    const gameProgressionRef = React.useRef([]);
    const [zone, setZone] = React.useState(-1);
    const fb = window.crawlear.fb
    const { t } = useTranslation(['main']);
    const [player, setPlayer] = React.useState<Player>({
        name: '',
        avatar: '',
        group: 0,
        id: 0,
        zones: [],
        uid: ''
    });

    React.useEffect(()=>{
        const getGameProgressionCallback = (group: number, progression: Array<any>)=>{
            const res: any = {};

            res[group] = progression;
            setGame(updateGameFromProgression(progression, game))
            gameProgressionRef.current = {...gameProgressionRef.current, ...res};
            setGameProgression({...gameProgressionRef.current, ...res});
        }

        if (!gameProgressionLoaded) {
            if (!isOffline) {
                window.crawlear.fb.getGameProgression(game.gid, ()=>{}, ()=>{},
                    getGameProgressionCallback, getGameProgressionCallback);
            } else {
                setGameProgression(GameUtils.createGameProgression(game.zones, game.players.length));
            }
            setGameProgressionLoaded(true)
        }
    },[game, gameProgressionLoaded]);

    function onBeginGame(player: Player, zone: number) {
        const pid = player.id;
        const group = player.group;

        setState(GAME_STATUS_PLAYING);
        setPlayer(player)
        setZone(zone)
        gameProgression[group][pid][zone].status = STATUS_PLAYING;
        setGameProgression(gameProgression);
        fb.setGameProgression(game.gid, pid, group, zone, gameProgression[group][pid][zone]);
    }

    function onClosePlayButtonClick(game: Game, jidGroup: number) {
        if (isGroupGameFinished(game, gameProgression, jidGroup) && window.confirm(t('content.cerrarpartida')) && !isOffline) {
            fb.getGameResult(game, (game: Game)=>{
                let newGame: any = {...game};

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

    function onGameEnd(updatedGame: Game) {
        if(!isIndividualGame(game)) {
            const pid = player.id
            const group = player.group
            const newGameProgression = {...gameProgression}
            const newGame: any = {...game}

            newGameProgression[group][pid][zone].status = STATUS_DONE
            newGameProgression[group][pid][zone].data = updatedGame.players[pid].zones[zone]
            !newGameProgression[group][pid][zone].data.judgedBy && (newGameProgression[group][pid][zone].data.judgedBy = [])
            newGameProgression[group][pid][zone].data.judgedBy.push(window.crawlear.user.uid)
            setGameProgression(newGameProgression)

            newGame.players[pid].zones[zone] = newGameProgression[group][pid][zone].data
            fb.setGameProgression(newGame.gid, pid, group, zone, newGameProgression[group][pid][zone])
            setState(GAME_STATUS_CREATED)
            setGame(newGame)
        } else {
            gameExtras.onGameEnd(game)
            const newGame =  Utils.getOrderedGameResult(game)
            newGame.gameStatus = 2
            fb.updateGame(newGame)
            fb.removeGameProgression(newGame.gid)
            fb.removeDirectorPresenceRequest(newGame.gid)
            setState(GAME_STATUS_FINISHED)
            setGame(newGame)
        }
    }

    function onRepair(playerIndex: number, zoneIndex: number) {
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

    return [state, game, gameProgression, setGameProgression, player, zone,
        onBeginGame, onClosePlayButtonClick, onGameEnd, onRepair]
}

export const GAME_STATUS_CREATED = 0
export const GAME_STATUS_PLAYING = 1
export const GAME_STATUS_FINISHED = 2

export default UseGamePlayer
