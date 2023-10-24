import { Game, GAME_TYPE_AECAR, 
    GAME_TYPE_ISRCC, 
    GAME_TYPE_KING, 
    GAME_TYPE_LEVANTE, 
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from "../../games/Game";
import { GameProgressionZone } from "../../games/GameInterfaces";
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras} from '../../games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras } from '../../games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras } from '../../games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras } from '../../games/RegionalZonaRcGameScores';
import { getGameContent as getMiniCrawlerPassionGameContent, gameExtras as miniCrawlerPassionExtras } from '../../games/MiniCrawlerPassionGameScores';
import { getGameContent as getGenericGameContent, gameExtras as genericExtras } from '../../games/GenericGameScores';
import { gameExtras as kingExtras } from '../../games/KingGameScores';

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

    getGameExtras: (gameType: number) => {
        let gameExtras

        if (gameType === GAME_TYPE_AECAR) {
            gameExtras = aecarExtras;
        } else if (gameType === GAME_TYPE_ISRCC) {
            gameExtras = isrccExtras;
        } else if (gameType === GAME_TYPE_LEVANTE) {
            gameExtras = levante124Extras;
        } else if (gameType === GAME_TYPE_COPAESPANA) {
            gameExtras = regionalZonaRcExtras;
        } else if (gameType === GAME_TYPE_KING) {
            gameExtras = kingExtras;
        } else if (gameType === GAME_TYPE_MINICRAWLERPASSION) {
            gameExtras = miniCrawlerPassionExtras;
        } else if (gameType === GAME_TYPE_GENERIC) {
            gameExtras = genericExtras;
        }

        return gameExtras
    },

    getGameContent: (gameType: number, playerId: number, zone: number) => {
        let method,
            childrenContent

        if (gameType === GAME_TYPE_AECAR) {
            method = getAecarGameContent
        } else if (gameType === GAME_TYPE_ISRCC) {
            method = getIsrccGameContent
        } else if (gameType === GAME_TYPE_LEVANTE) {
            method = getLevanteGameContent
        } else if (gameType === GAME_TYPE_COPAESPANA) {
            method = getRegionalZonaRcGameContent
        } else if (gameType === GAME_TYPE_KING) {
        } else if (gameType === GAME_TYPE_MINICRAWLERPASSION) {
            method = getMiniCrawlerPassionGameContent
        } else if (gameType === GAME_TYPE_GENERIC) {
            method = getGenericGameContent
        }

        method && (childrenContent = method(playerId, zone))

        return childrenContent
    }
}

export const STATUS_WAITING = 'waiting';
export const STATUS_PLAYING = 'playing';
export const STATUS_REPAIR = 'repair';
export const STATUS_DONE = 'done';
export default GamePlayerUtils