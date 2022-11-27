import { gameExtras as AecarGameExtras, AecarGameScores } from '../components/games/AecarGameScores';
import { gameExtras as IsrccGameExtras, IsrccGameScores } from '../components/games/IsrccGameScores';
import { gameExtras as RegionalZonaRcGameExtras, RegionalZonaRcGameScores } from '../components/games/RegionalZonaRcGameScores';
import { gameExtras as Levante124GameExtras, Levante124GameScores } from '../components/games/Levante124GameScores';
import { gameExtras as KingGameExtras, KingGameScores } from '../components/games/KingGameScores';
import { gameExtras as MiniCrawlerPassionGameExtras, MiniCrawlerPassionGameScores } from '../components/games/MiniCrawlerPassionGameScores';
import { Location, Player, Judge, GateProgressionData, GameProgressionData, Zone } from './GameInterfaces';

export const GAME_TYPE_AECAR = 0;
export const GAME_TYPE_KING = 1;
export const GAME_TYPE_ISRCC = 2;
export const GAME_TYPE_LEVANTE = 3;
export const GAME_TYPE_COPAESPANA = 4;
export const GAME_TYPE_MINICRAWLERPASSION = 5;

class Game {
    name: string;
    date: Date;
    location: Location;
    isPublic: boolean;
    gameType: number;
    players: Array<Player>;
    judges: Array<Judge>;
    maxTime: number;
    maxPoints: number;
    gates: Array<number>;
    uids: Array<string>;
    jids: Array<string>;
    zones: number;
    gameStatus: number;
    owner: Array<string>;
    courtesyTime: number;
    
    constructor(name:string, 
        date: Date, 
        location: Location, 
        isPublic: boolean, 
        gameType: number,
        players: Array<Player>,
        judges: Array<Judge>,
        maxTime: number, 
        maxPoints: number,
        gates: Array<number>,
        zones: number,
        gameStatus: number, 
        uids: Array<string>,
        jids: Array<string>,
        owner: Array<string>) {

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
                case GAME_TYPE_AECAR:
                    courtesyTime = AecarGameScores.courtesyTime;
                    break;
                case GAME_TYPE_KING:
                    courtesyTime = KingGameScores.courtesyTime;
                    break;
                case GAME_TYPE_ISRCC:
                    courtesyTime = IsrccGameScores.courtesyTime;
                    break;
                case GAME_TYPE_LEVANTE:
                    courtesyTime = Levante124GameScores.courtesyTime;
                    break;    
                case GAME_TYPE_COPAESPANA:
                    courtesyTime = RegionalZonaRcGameScores.courtesyTime;
                    break;
                case GAME_TYPE_MINICRAWLERPASSION:
                    courtesyTime = MiniCrawlerPassionGameScores.courtesyTime;
                    break;
                default: 
                    courtesyTime = 0;
            }
            this.courtesyTime = courtesyTime;
        }
    }
}

class GameUtils {
    static init(game: Game, 
        controlTextValuesInit: Function, 
        fiascoControlTextValuesInit: Function,
        forceInitZones: boolean) {
        game.players.forEach((player)=>{
            if (!player.zones || player.zones.length===0 || forceInitZones) {
                player.zones = [];
        
                for (let k=0; k<game.zones;k++) {
                    const zone: Zone = {
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

    static getGameTypeBodyClassName(gameType: number) {
        let classname;
    
        switch (gameType) {
            case GAME_TYPE_AECAR:
                classname = 'aecar';
                break;
            case GAME_TYPE_KING:
                classname = 'king';
                break;
            case GAME_TYPE_ISRCC:
                classname = 'irscc';
                break;
            case GAME_TYPE_LEVANTE:
                classname = 'levante';
                break;    
            case GAME_TYPE_COPAESPANA:
                classname = 'regionalzonarc';
                break;
            case GAME_TYPE_MINICRAWLERPASSION:
                classname = 'minicrawlerpassion';
                break;
    
            default: 
                classname = '';
        }
    
        return classname;
    }

    static getGameTypeControlTextValuesInit(gameType: number) {
        let initFunct;
    
        switch (gameType) {
            case GAME_TYPE_AECAR:
                initFunct = AecarGameExtras.controlTextValuesInit;
                break;
            case GAME_TYPE_KING:
                initFunct = KingGameExtras.controlTextValuesInit;
                break;
            case GAME_TYPE_ISRCC:
                initFunct = IsrccGameExtras.controlTextValuesInit;
                break;
            case GAME_TYPE_LEVANTE:
                initFunct = Levante124GameExtras.controlTextValuesInit;
                break;    
            case GAME_TYPE_COPAESPANA:
                initFunct = RegionalZonaRcGameExtras.controlTextValuesInit;
                break;
            case GAME_TYPE_MINICRAWLERPASSION:
                initFunct = MiniCrawlerPassionGameExtras.controlTextValuesInit;
                break;
    
            default: 
                initFunct = IsrccGameExtras.controlTextValuesInit;
        }
    
        return initFunct;
    }
    
    static getGameTypeFiascoControlTextValuesInit(gameType: number) {
        let initFunct;
    
        switch (gameType) {
            case GAME_TYPE_AECAR:
                initFunct = AecarGameExtras.fiascoControlTextValuesInit;
                break;
            case GAME_TYPE_KING:
                initFunct = KingGameExtras.fiascoControlTextValuesInit;
                break;
            case GAME_TYPE_ISRCC:
                initFunct = IsrccGameExtras.fiascoControlTextValuesInit;
                break;
            case GAME_TYPE_LEVANTE:
                initFunct = Levante124GameExtras.fiascoControlTextValuesInit;
                break;
            case GAME_TYPE_COPAESPANA:
                initFunct = RegionalZonaRcGameExtras.fiascoControlTextValuesInit;
                break;
            case GAME_TYPE_MINICRAWLERPASSION:
                initFunct = MiniCrawlerPassionGameExtras.fiascoControlTextValuesInit;
                break;
            default: 
                initFunct = IsrccGameExtras.fiascoControlTextValuesInit;
        }
    
        return initFunct;
    }

    static redoPlayersIds(game: Game) {
        game.players.forEach((player, index)=>{
            player.id = index;
        });

    }

    static sumControlTextValues(gateProgresionData:Array<GateProgressionData>) {
        const arrayLength = gateProgresionData.length ? gateProgresionData[0].controlTextValues.length : 0;
        const controlTextValues = new Array(arrayLength).fill(0);
    
        gateProgresionData.forEach((data)=>{
            data.controlTextValues.forEach((control, index)=>{
                controlTextValues[index] += control;
            })
        })
    
        return controlTextValues;
    }

    static isFiasco(game: Game, playerIndex: number, zoneIndex: number) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
    
        return (this.isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) ||
            (this.isPointsFiasco(game, playerZone)) ||
            (this.isTimeFiasco(game, playerZone)));
    }

    static isFiascoFromFiascoControlTextValues(game: Game, playerIndex: number, zoneIndex: number) {
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

    static isPointsFiasco(game: Game, playerZone: Zone) {
        return (game.maxPoints <= playerZone.points && game.maxPoints > 0);
    }

    static isTimeFiasco(game: Game, playerZone: Zone) {
        return ((game.maxTime + game.courtesyTime) <= playerZone.time && game.maxTime > 0);
    }

    static isNonPresentedFiasco(game: Game, playerIndex: number, zoneIndex: number) {
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


    static  getZoneTotalBonification(gateProgresionData:Array<GateProgressionData>, gateProgresion:number) {
        let bonification = 0;

        for (let i=0; i<gateProgresion; i++) {
            if (gateProgresionData[i].gatePoints < 20 && gateProgresionData[i].controlTextValues[2]<1) {
                bonification++;
            }
        }

        return bonification*-2;
    }

    static isCurrentUserIsOwner(owners:Array<string>) {
        return owners && owners.find((elem)=>{
            return elem === window.crawlear.user.uid;
        });
    }

    static getMaxGroupNumber(game: Game) {
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