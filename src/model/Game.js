import { gameExtras as AecarGameExtras, AecarGameScores } from '../components/games/AecarGameScores';
import { gameExtras as IsrccGameExtras, IsrccGameScores } from '../components/games/IsrccGameScores';
import { gameExtras as RegionalZonaRcGameExtras, RegionalZonaRcGameScores } from '../components/games/RegionalZonaRcGameScores';
import { gameExtras as Levante124GameExtras, Levante124GameScores } from '../components/games/Levante124GameScores';
import { gameExtras as KingGameExtras, KingGameScores } from '../components/games/KingGameScores';

export const GAME_TYPE_AECAR = 0;
export const GAME_TYPE_KING = 1;
export const GAME_TYPE_ISRCC = 2;
export const GAME_TYPE_LEVANTE = 3;
export const GAME_TYPE_COPAESPANA = 4;

class Game {
    constructor(name, date, location, isPublic, gameType, players, judges, maxTime, maxPoints, gates, zones, gameStatus, uids, jids, owner) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.isPublic = isPublic;
        this.gameType = gameType;
        this.players = players || [];
        this.judges = judges || [];
        this.maxTime = maxTime;
        this.maxPoints = maxPoints;
        this.gates = gates;
        this.uids = uids || [];
        this.jids = jids || [];
        this.zones = zones;
        this.gameStatus = gameStatus;
        this.owner = owner;

        if (maxTime === 0) {
            this.courtesyTime = 0;
        } else {
            let courtesyTime;
    
            switch (gameType) {
                case 0:
                    courtesyTime = AecarGameScores.courtesyTime;
                    break;
                case 1:
                    courtesyTime = KingGameScores.courtesyTime;
                    break;
                case 2:
                    courtesyTime = IsrccGameScores.courtesyTime;
                    break;
                case 3:
                    courtesyTime = Levante124GameScores.courtesyTime;
                    break;    
                case 4:
                    courtesyTime = RegionalZonaRcGameScores.courtesyTime;
                    break;
                default: 
                    courtesyTime = 0;
            }
            this.courtesyTime = courtesyTime;
        }
    }
}

class GameUtils {
    static init(game, controlTextValuesInit, fiascoControlTextValuesInit, forceInitZones) {
        game.players.forEach((player)=>{
            if (!player.zones || player.zones.length===0 || forceInitZones) {
                player.zones = [];
        
                for (let k=0; k<game.zones;k++) {
                    const zone = {
                        points: 0,
                        totalPoints: 0,
                        simpathyPoints: 0,
                        time: 0,
                        judgedBy: [],
                        gateProgression: 0,
                        gatesWithBonification: 0,
                        gatesWithFail: 0,
                        handicap: 0,
                        gateProgressionData: new Array(game.gates[k]),
                        fiascoControlTextValues: fiascoControlTextValuesInit()
                    };

                    for (let j=0; j<game.gates[k]; j++) {
                        zone.gateProgressionData[j] = {
                            gatePoints: 0,
                            controlTextValues: controlTextValuesInit()
                        }
                    }

                    player.zones.push(zone);
                }
            }
        });
    }

    static getGameTypeBodyClassName(gameType) {
        let classname;
    
        switch (gameType) {
            case 0:
                classname = 'aecar';
                break;
            case 1:
                classname = 'king';
                break;
            case 2:
                classname = 'irscc';
                break;
            case 3:
                classname = 'levante';
                break;    
            case 4:
                classname = 'regionalzonarc';
                break;
            default: 
                classname = '';
        }
    
        return classname;
    }

    static getGameTypeControlTextValuesInit(gameType) {
        let initFunct;
    
        switch (gameType) {
            case 0:
                initFunct = AecarGameExtras.controlTextValuesInit;
                break;
            case 1:
                initFunct = KingGameExtras.controlTextValuesInit;
                break;
            case 2:
                initFunct = IsrccGameExtras.controlTextValuesInit;
                break;
            case 3:
                initFunct = Levante124GameExtras.controlTextValuesInit;
                break;    
            case 4:
                initFunct = RegionalZonaRcGameScores.controlTextValuesInit;
                break;
            default: 
                initFunct = IsrccGameExtras.controlTextValuesInit;
        }
    
        return initFunct;
    }
    
    static getGameTypeFiascoControlTextValuesInit(gameType) {
        let initFunct;
    
        switch (gameType) {
            case 0:
                initFunct = AecarGameExtras.fiascoControlTextValuesInit;
                break;
            case 1:
                initFunct = KingGameExtras.fiascoControlTextValuesInit;
                break;
            case 2:
                initFunct = IsrccGameExtras.fiascoControlTextValuesInit;
                break;
            case 3:
                initFunct = Levante124GameExtras.fiascoControlTextValuesInit;
                break;
            case 4:
                initFunct = RegionalZonaRcGameExtras.fiascoControlTextValuesInit;
                break;
            default: 
                initFunct = IsrccGameExtras.fiascoControlTextValuesInit;
        }
    
        return initFunct;
    }

    static redoPlayersIds(game) {
        game.players.forEach((player, index)=>{
            player.id = index;
        });

    }

    static sumControlTextValues(gateProgresionData) {
        const controlTextValues = new Array(gateProgresionData[0].controlTextValues.length).fill(0);
    
        gateProgresionData.forEach((data)=>{
            data.controlTextValues.forEach((control, index)=>{
                controlTextValues[index] += control;
            })
        })
    
        return controlTextValues;
    }

    static isFiasco(game, playerIndex, zoneIndex) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
    
        return (this.isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) ||
            (this.isPointsFiasco(game, playerZone)) ||
            (this.isTimeFiasco(game, playerZone)));
    }

    static isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
        let fiasco = false, 
            gate = 0;
    
        while(!fiasco && gate<game.gates[zoneIndex]) {
            let control = 0;
    
            while (!fiasco && control<playerZone.fiascoControlTextValues.length) {
                if (playerZone.fiascoControlTextValues[control]>0) {
                    fiasco = true;
                } else {
                    control++;
                }
            }
            gate++;
        }

        return fiasco;
    }

    static isPointsFiasco(game, playerZone) {
        return (game.maxPoints <= playerZone.points && game.maxPoints > 0);
    }

    static isTimeFiasco(game, playerZone) {
        return ((game.maxTime + game.courtesyTime) <= playerZone.time && game.maxTime > 0);
    }

    static isNonPresentedFiasco(game, playerIndex, zoneIndex) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
        let fiasco = false, gate = 0;
    
        while(!fiasco && gate<game.gates[zoneIndex]) {
            if (playerZone.fiascoControlTextValues[0]>0) {
                fiasco = true;
            } else {
                gate++;
            } 
        }
    
        return fiasco;
    }


    static  getZoneTotalBonification(gateProgresionData, gateProgresion) {
        let bonification = 0;

        for (let i=0; i<gateProgresion; i++) {
            if (gateProgresionData[i].gatePoints < 20 && gateProgresionData[i].controlTextValues[2]<1) {
                bonification++;
            }
        }

        return bonification*-2;
    }

    static isCurrentUserIsOwner(owners) {
        return owners && owners.find((elem)=>{
            return elem === window.crawlear.user.uid;
        });
    }

    static getMaxGroupNumber(game) {
        let maxGroup = 0;

        game.players.forEach((player)=>{
            if(maxGroup < player.group) {
                maxGroup = player.group;
            }
        });

        return maxGroup;
    }
}

export { Game, GameUtils };