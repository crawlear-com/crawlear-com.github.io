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

    static sumControlTextValues(gateProgresionData) {
        const controlTextValues = new Array(gateProgresionData[0].controlTextValues.length).fill(0);
    
        gateProgresionData.forEach((data)=>{
            data.controlTextValues.forEach((control, index)=>{
                controlTextValues[index] += control;
            })
        })
    
        return controlTextValues;
    }
}

export { Game, GameUtils };