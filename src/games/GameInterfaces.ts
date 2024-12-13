interface Location {
    latitude: number;
    longitude: number;
}

interface Player {
    avatar: string,
    battery?: boolean,
    group: number,
    id: number,
    name: string,
    points?: number,
    time?: number,
    totalGateProgression?: number,
    totalPoints?: number,
    totalTime?: number,
    uid: string,
    zones: Array<Zone>
}

interface Judge {
    avatar: string,
    battery?: boolean,
    group: number,
    id: number,
    name: string,
    points?: number,
    time?: number,
    uid: string
}

interface GateProgressionData {
    controlTextValues: Array<number>,
    gatePoints: number
}

interface GameProgressionData {
    fiascoControlTextValues: Array<number>,
    gateProgression: number,
    gateProgressionData: Array<GateProgressionData>,
    gatesWithBonification: number,
    gatesWithFail: number,
    judgedBy: Array<string>
    points: number,
    simpathyPoints: number,
    time: number,
    totalPoints: number
}

interface Zone {
    points: number,
    totalPoints: number,
    simpathyPoints: number,
    time: number,
    judgedBy: Array<string>,
    gateProgression: number,
    gatesWithBonification: number,
    gatesWithFail: number,
    handicap: number,
    battery: boolean,
    gateProgressionData: Array<GateProgressionData>,
    fiascoControlTextValues: Array<number>
}

interface GameProgressionZone {
    status: string,
    data: GameProgressionData,
    repairData: any
}

export { Location, Player, Judge, GateProgressionData, GameProgressionData, GameProgressionZone, Zone };