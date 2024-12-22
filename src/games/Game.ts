import { AecarGameScores } from './AecarGameScores';
import { IsrccGameScores } from './IsrccGameScores';
import { RegionalZonaRcGameScores } from './RegionalZonaRcGameScores';
import { Levante124GameScores } from './Levante124GameScores';
import { KingGameScores } from './KingGameScores';
import { MiniCrawlerPassionGameScores } from './MiniCrawlerPassionGameScores';
import { GenericGameScores } from './GenericGameScores';
import { Location, Player, Judge } from './GameInterfaces';

export const GAME_TYPE_AECAR = 0;
export const GAME_TYPE_KING = 1;
export const GAME_TYPE_ISRCC = 2;
export const GAME_TYPE_LEVANTE = 3;
export const GAME_TYPE_COPAESPANA = 4;
export const GAME_TYPE_MINICRAWLERPASSION = 5;
export const GAME_TYPE_GENERIC = 6;

export const OFFLINE_USER_UID = 'offlineUid';

export enum GameType {
    GAME_TYPE_AECAR,
    GAME_TYPE_KING,
    GAME_TYPE_ISRCC,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC
}

class Game {
    gid: string;
    name: string;
    date: string;
    location: Location;
    isPublic: boolean;
    gameType: GameType;
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
        date: string,
        location: Location,
        isPublic: boolean,
        gameType: GameType,
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
        this.gid = '';

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
                case GAME_TYPE_GENERIC:
                    courtesyTime = GenericGameScores.courtesyTime;
                    break;
                default:
                    courtesyTime = 0;
            }
            this.courtesyTime = courtesyTime;
        }
    }

    setGameId(gid: string) {
        this.gid = gid
    }
}

export const OfflinePlayer = {
    avatar: "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=J1",
    battery: false,
    group: 0,
    id: 0,
    name: "J1",
    points: 0,
    time: 0,
    uid: OFFLINE_USER_UID,
    zones: [{
        fiascoControlTextValues: [0],
        gateProgression: 0,
        gateProgressionData: [{
            controlTextValues: [0, 0, 0, 0, 0, 0],
            gatePoints: 0
        }],
        gatesWithBonification: 0,
        gatesWithFail: 0,
        handicap: 0,
        judgedBy: [],
        points: 0,
        simpathyPoints: 0,
        time: 0,
        totalPoints: 0
    }]
};

export { Game };