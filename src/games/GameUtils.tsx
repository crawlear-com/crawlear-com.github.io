import { Game, GAME_TYPE_AECAR, GAME_TYPE_COPAESPANA, GAME_TYPE_GENERIC, GAME_TYPE_ISRCC, GAME_TYPE_KING,
    GAME_TYPE_LEVANTE, GAME_TYPE_MINICRAWLERPASSION } from "./Game";
import { gameExtras as AecarGameExtras } from "./AecarGameScores";
import { gameExtras as KingGameExtras } from "./KingGameScores";
import { gameExtras as IsrccGameExtras } from "./IsrccGameScores";
import { gameExtras as RegionalZonaRcGameExtras } from "./RegionalZonaRcGameScores";
import { gameExtras as MiniCrawlerPassionGameExtras } from "./MiniCrawlerPassionGameScores";
import { gameExtras as Levante124GameExtras } from "./Levante124GameScores";
import { gameExtras as GenericGameExtras } from "./GenericGameScores";
import { GateProgressionData } from "./GameInterfaces";
import { Zone } from "./GameInterfaces";
import { GameType } from "./Game";

export function init(game: Game,
    controlTextValuesInit: Function,
    fiascoControlTextValuesInit: Function,
    forceInitZones: boolean) {

    game.gameStatus = 0;
    game.players.forEach((player)=>{
        player.time = 0;
        player.points = 0;
        player.totalGateProgression = 0;
        player.totalPoints = 0;
        player.totalTime = 0;

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
                    battery: false,
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

export function createGameProgression(zones: number, players: number) {
    const gameProgressionData = new Array(1);

    gameProgressionData[0] = new Array(players);

    for (let i=0; i<players; i++) {
        gameProgressionData[0][i] = new Array(zones);
        for (let j=0; j<zones; j++) {
            gameProgressionData[0][i][j] = {status: 'waiting'};
        }
    }

    return gameProgressionData;
}

export function getGameResult(game: Game, gameProgression: Array<number>) {
    Object.entries(gameProgression).forEach((player, playerPos)=>{
        Object.entries(player[1]).forEach((zone, zonePos)=>{
            zone[1].data && (game.players[playerPos].zones[zonePos] = zone[1].data);
        });
    });

    return game;
}

export function getGameTypeBodyClassName(gameType: GameType) {
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
        case GAME_TYPE_GENERIC:
            classname = 'generic';
            break;

        default:
            classname = '';
    }

    return classname;
}

export function getGameTypeControlTextValuesInit(gameType: GameType) {
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
        case GAME_TYPE_GENERIC:
            initFunct = GenericGameExtras.controlTextValuesInit;
            break;
        default:
            initFunct = IsrccGameExtras.controlTextValuesInit;
    }

    return initFunct;
}

export function getGameTypeFiascoControlTextValuesInit(gameType: GameType) {
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
        case GAME_TYPE_GENERIC:
            initFunct = GenericGameExtras.fiascoControlTextValuesInit;
            break;
        default:
            initFunct = IsrccGameExtras.fiascoControlTextValuesInit;
    }

    return initFunct;
}

export function resolveGameTypeName(gameType: number) {
    switch(gameType) {
        case GAME_TYPE_AECAR:
            return 'gametype.aecar'
        case GAME_TYPE_KING:
            return 'gametype.rey'
        case GAME_TYPE_ISRCC:
            return 'gametype.isrcc'
        case GAME_TYPE_LEVANTE:
            return 'gametype.levante124'
        case GAME_TYPE_COPAESPANA:
            return 'gametype.copaespana'
        case GAME_TYPE_MINICRAWLERPASSION:
            return 'gametype.minicrawlerpassion'
        case GAME_TYPE_GENERIC:
            return 'gametype.generic'
        default:
            return 'gametype.isrcc'
    }
}

export function redoPlayersIds(game: Game) {
    game.players.forEach((player, index)=>{
        player.id = index;
    });

}

export function sumControlTextValues(gateProgresionData:Array<GateProgressionData>) {
    const arrayLength = gateProgresionData.length ? gateProgresionData[0].controlTextValues.length : 0;
    const controlTextValues = new Array(arrayLength).fill(0);

    gateProgresionData.forEach((data)=>{
        data.controlTextValues.forEach((control, index)=>{
            controlTextValues[index] += control;
        })
    })

    return controlTextValues;
}

export function isFiasco(game: Game, playerIndex: number, zoneIndex: number) {
    const playerZone = game.players[playerIndex].zones[zoneIndex];

    return (isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) ||
        (isPointsFiasco(game, playerZone)) ||
        (isTimeFiasco(game, playerZone)));
}

export function isFiascoFromFiascoControlTextValues(game: Game, playerIndex: number, zoneIndex: number) {
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

export function isPointsFiasco(game: Game, playerZone: Zone) {
    return (game.maxPoints <= playerZone.points && game.maxPoints > 0);
}

export function isTimeFiasco(game: Game, playerZone: Zone) {
    return ((game.maxTime + game.courtesyTime) <= playerZone.time && game.maxTime > 0);
}

export function isNonPresentedFiasco(game: Game, playerIndex: number, zoneIndex: number) {
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


export function getZoneTotalBonification(gateProgresionData:Array<GateProgressionData>, gateProgresion:number) {
    let bonification = 0;

    for (let i=0; i<gateProgresion; i++) {
        if (gateProgresionData[i].gatePoints < 20 && gateProgresionData[i].controlTextValues[2]<1) {
            bonification++;
        }
    }

    return bonification*-2;
}

export function isCurrentUserIsOwner(owners:Array<string>) {
    return owners && owners.find((elem)=>{
        return window.crawlear && window.crawlear.user && (elem === window.crawlear.user.uid)
    });
}

export function getMaxGroupNumber(game: Game) {
    let maxGroup = 0;

    game.players.forEach((player)=>{
        if(maxGroup < player.group) {
            maxGroup = player.group;
        }
    });

    return maxGroup;
}
