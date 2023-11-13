class Route {
    [index: string]: any
    rid?: string
    name: string
    description: string
    isPublic: boolean
    locationMapUrl: string
    gpx: string
    point: RoutePoint
    uids: Array<string>
    scale: string
    dificulty: number
    likes: number

    constructor(name: string, description: string, isPublic: boolean, locationMapUrl: string, 
        gpx: string, point: RoutePoint, uids: Array<string>, scale: string, dificulty: number, likes: number, rid?: string) {

        this.name = name
        this.description = description
        this.isPublic = isPublic
        this.locationMapUrl = locationMapUrl
        this.gpx = gpx
        this.point = point
        this.uids = uids
        this.scale = scale
        this.dificulty = dificulty
        this.likes = likes
        if (rid) {
            this.rid = rid
        }
    }

    setRid(rid: string) {
        this.rid = rid
    }

    transformIntoData() {
        return {...this}
    }
}

export interface RoutePoint {
    lat: number,
    lon: number
}

export default Route