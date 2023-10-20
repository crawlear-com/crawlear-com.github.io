import { Game, GAME_TYPE_KING } from "../model/Game";
import { GameProgressionData, GameProgressionZone } from "../model/GameInterfaces";

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
    }
}

export const STATUS_WAITING = 'waiting';
export const STATUS_PLAYING = 'playing';
export const STATUS_REPAIR = 'repair';
export const STATUS_DONE = 'done';
export default GamePlayerUtils