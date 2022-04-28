class Game {
    constructor(name, date, location, isPublic, gameType, players, judges, maxTime, maxPoints, gates, zones, gameStatus, uids, jids) {
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
                        time: 0,
                        judgedBy: [],
                        gateProgression: 0,
                        gatesWithBonification: 0,
                        gatesWithFail: 0,
                        gateProgressionData: new Array(game.gates[k]),
                        fiascoControlTextValues: new Array(5)
                    };

                    for (let j=0; j<game.gates[k]; j++) {
                        zone.gateProgressionData[j] = {
                            gatePoints: 0,
                            controlTextValues: new Array(6)
                        }

                        for(let l=0; l<zone.gateProgressionData[j].controlTextValues.length; l++) {
                            zone.gateProgressionData[j].controlTextValues[l] = 0;
                        }
        
                        for(let l=0; l<zone.gateProgressionData[j].controlTextValues.length; l++) {
                            zone.gateProgressionData[j].controlTextValues[l] = 0;
                        }
                        
                        for(let l=0; l<zone.fiascoControlTextValues.length; l++) {
                            zone.fiascoControlTextValues[l] = 0;
                        }
            
                        for(let l=0; l<zone.gateProgressionData[j].gatePoints.length; l++) {
                            game.gateProgressionData[j].gatePoints[l] = 0;
                        }
                    }
        
        
                    player.zones.push(zone);
                }
            }
        });
    }

    static redoPlayersIds(game) {
        game.players.forEach((player, index)=>{
            player.uid = index;
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
            (game.maxTime <= tickTime && game.maxTime > 0));
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
            if (gateProgresionData[i].gatePoints < 20) {
                bonification++;
            }
        }

        return bonification*-2;
    }

    static getGatesWithFail(playerZone) {
        return playerZone.gateProgressionData.filter(x => x.gatePoints >= 20).length;
    }

    static getGatesWithBonification(playerZone) {
        return playerZone.gateProgressionData.filter((x,i) => (x.gatePoints < 20 && i<playerZone.gateProgression)).length;
    }

    
}

export { Game, GameUtils };