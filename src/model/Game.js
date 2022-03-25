
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
    static init(game) {
        game.players.forEach((player)=>{
            player.zones = [];
    
            for (let k=0; k<game.zones;k++) {
                const zone = {
                    points: 0,
                    time: 0,
                    gateProgression: 0,
                    gatesWithBonification: 0,
                    gatesWithFail: 0,
                    controlTextValues: new Array(6),
                    fiascoControlTextValues: new Array(5),
                    gatePoints: new Array(game.gates)
                };
    
                for(let j=0; j<zone.controlTextValues.length; j++) {
                    zone.controlTextValues[j] = 0;
                }
                
                for(let j=0; j<zone.fiascoControlTextValues.length; j++) {
                    zone.fiascoControlTextValues[j] = 0;
                }
    
                for(let j=0; j<zone.gatePoints.length; j++) {
                    zone.gatePoints[j] = 0;
                }
    
                player.zones.push(zone);
            }
        });
    }
}

export { Game, GameUtils };