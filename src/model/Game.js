const GAME_TYPE_AECAR = 0;
const GAME_TYPE_KING = 1;
const GAME_TYPE_ISRCC = 2;

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
    }
}

class GameUtils {
    static init(game, forceInitZones) {
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
                        gateProgressionData: new Array(game.gates[k]),
                        fiascoControlTextValues: new Array(5).fill(0)
                    };

                    if (game.gameType === GAME_TYPE_AECAR) {
                        zone.controlTextValues = new Array(23).fill(0);
                        zone.fiascoControlTextValues = new Array(2).fill(0);
                        zone.gateProgressionData = [];
                    } else if (game.gameType === GAME_TYPE_KING || 
                              game.gameType === GAME_TYPE_ISRCC) {
                        for (let j=0; j<game.gates[k]; j++) {
                            zone.gateProgressionData[j] = {
                                gatePoints: 0,
                                controlTextValues: new Array(6).fill(0)
                            }
                        }
                    }

                    player.zones.push(zone);
                }
            }
        });
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

    static isFiasco(game, tickTime, playerIndex, zoneIndex) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
    
        return (this.isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) ||
            (game.maxPoints <= playerZone.points && game.maxPoints > 0) ||
            ((game.gameType===2 ? (game.maxTime + 60000) : game.maxTime) <= tickTime && 
                game.maxTime > 0));
    }

    static isFiascoFromFiascoControlTextValues(game, playerIndex, zoneIndex) {
        const playerZone = game.players[playerIndex].zones[zoneIndex];
        let fiasco = false, gate = 0;
    
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

    static getGatesWithFail(playerZone) {
        return playerZone.gateProgressionData.filter((x, i) => {
            return (x.gatePoints >= 20 && i<playerZone.gateProgression && x.controlTextValues[2]>0)
        }).length;
    }

    static getGatesWithBonification(playerZone) {
        return playerZone.gateProgressionData.filter((x,i) => {
            return (x.gatePoints < 20 && i<playerZone.gateProgression && x.controlTextValues[2]<1)
        }).length;
    }

    static getGatesPointExtras(playerZone) {
        playerZone.gatesWithFail = this.getGatesWithFail(playerZone);
        playerZone.gatesWithBonification = this.getGatesWithBonification(playerZone);
        playerZone.totalPoints = playerZone.points + playerZone.simpathyPoints + (playerZone.gatesWithBonification * -2);
    }

    static isCurrentUserIsOwner(owners) {
        return owners && owners.find((elem)=>{
            return elem === window.crawlear.user.uid;
        });
    }
}

export { Game, GameUtils };