import * as React from 'react'
import { GpxRouteMap } from 'react-gpxroutemap'
import useGpxGeolocation from '../hooks/useGpxGeolocation'

function GPSRoute() {
    const [gpxData] = useGpxGeolocation()
    return gpxData.length ? <GpxRouteMap gpx={gpxData}></GpxRouteMap> : <></>
}

export default GPSRoute