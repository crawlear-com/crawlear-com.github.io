
class Game {
    constructor(name, date, isPublic, location, players, gameStatus, gameType, pointsType, uids, maxPoints, maxTime, zones, gates) {
        this.name = name;
        this.date = date;
        this.isPublic = isPublic;
        this.location = location;
        this.players = players || [];
        this.gameStatus = gameStatus;
        this.gameType = gameType;
        this.pointsType = pointsType;
        this.uids = uids || [];
        this.maxPoints = maxPoints;
        this.maxTime = maxTime;
        this.zones = zones || 1;
        this.gates = gates || 1;
        this.currentPlayer = 0;
        this.currentZone = 0;
    }

    setGid(gid) {
        this.gid = gid;
    }

    setPlayers(players) {
        this.players = players; 
    }
}

export default Game;