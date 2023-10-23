import { Game, GAME_TYPE_AECAR, 
    GAME_TYPE_ISRCC, 
    GAME_TYPE_KING, 
    GAME_TYPE_LEVANTE, 
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from "../../model/Game";
import { GameProgressionZone, Player, GameProgressionData } from "../../model/GameInterfaces";
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from '../../components/games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from '../../components/games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from '../../components/games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras } from '../../components/games/RegionalZonaRcGameScores';
import { getGameContent as getMiniCrawlerPassionGameContent, gameExtras as miniCrawlerPassionExtras } from '../../components/games/MiniCrawlerPassionGameScores';
import { getGameContent as getGenericGameContent, gameExtras as genericExtras } from '../../components/games/GenericGameScores';
import { gameExtras as kingExtras } from '../../components/games/KingGameScores';

const GamePlayerUtils = {
    isIndividualGame: (game: Game) => {
        return game.gameType === GAME_TYPE_KING;
    },

    isGroupGameFinished: (game: Game, gameProgression: Array<any>, jidGroup: number) => {
        let result = true;
        
        if (GamePlayerUtils.isIndividualGame(game)) return true;

        Object.entries(gameProgression).forEach((group)=>{
            if (Number(group[0]) === jidGroup) {
                Object.entries(group[1]).forEach((player: Array<any>)=>{
                    Object.entries(player[1]).forEach((zone: Array<any>)=>{
                        if(zone[1].status === STATUS_WAITING || 
                            zone[1].status === STATUS_REPAIR || 
                            zone[1].status === STATUS_PLAYING) {
        
                            result = false;
                        }
                    })
                })
            }
        })
        
        return result;
    },

    onRepairEnd(gid: number, playerId: number, group: number, zoneIndex: number, zone: GameProgressionZone) {
        const fb = window.crawlear?.fb

        zone.status = STATUS_WAITING
        delete zone.repairData
        fb.setGameProgression(gid, playerId, group, zoneIndex, zone)
    },

    updateGameFromProgression: (progression: Array<any>, game: Game): any => {
        const newGame = { ...game };

        Object.entries(progression).forEach((user: Array<any>)=>{
            Object.entries(user[1]).forEach((zone: Array<any>)=>{
                if(zone[1].data) {
                    newGame.players[user[0]].zones[zone[0]] = zone[1].data;
                }
            })
        })

        return newGame
    },

    getGroupFromJid: (game: Game, jid: string): number => {
        const judge = game.judges.find(element => element.uid === jid);

        return (judge ? judge.group : 0);
    },

    getGameExtrasAndContent: (t: Function, game: Game, player: Player, zone: number) => {
        let gameExtras,
            method,
            childrenContent

    if (game.gameType === GAME_TYPE_AECAR) {
        zone !== -1 && (method = getAecarGameContent);
        gameExtras = aecarExtras;
    } else if (game.gameType === GAME_TYPE_ISRCC) {
        zone !== -1 && (method = getIsrccGameContent);
        gameExtras = isrccExtras;
    } else if (game.gameType === GAME_TYPE_LEVANTE) {
        zone !== -1 && (method = getLevanteGameContent);
        gameExtras = levante124Extras;
    } else if (game.gameType === GAME_TYPE_COPAESPANA) {
        zone !== -1 && (method = getRegionalZonaRcGameContent);
        gameExtras = regionalZonaRcExtras;
    } else if (game.gameType === GAME_TYPE_KING) {
        gameExtras = kingExtras;
    } else if (game.gameType === GAME_TYPE_MINICRAWLERPASSION) {
        zone !== -1 && (method = getMiniCrawlerPassionGameContent);
        gameExtras = miniCrawlerPassionExtras;
    } else if (game.gameType === GAME_TYPE_GENERIC) {
        zone !== -1 && (method = getGenericGameContent);
        gameExtras = genericExtras;
    }

    method && (childrenContent = method(t, player.id, zone, game.players[player.id].zones[zone].points))

    return { gameExtras, childrenContent }
    }
}

export const STATUS_WAITING = 'waiting';
export const STATUS_PLAYING = 'playing';
export const STATUS_REPAIR = 'repair';
export const STATUS_DONE = 'done';
export default GamePlayerUtils