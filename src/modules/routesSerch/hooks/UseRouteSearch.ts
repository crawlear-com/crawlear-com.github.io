import * as React from 'react'
import Route, { Gpx } from '../../routesManagement/Route'

function UseRouteSearch(): Array<any> {
    const fbBase = window.crawlear.fbBase
    const [routes, setRoutes] = React.useState<Array<Route>>([])
    const [routeToShow, setRouteToShow] = React.useState<Route | null>(null)

    function onMapClick(latlon: any, mapBounds: any) {
        const latLength = Math.abs(mapBounds._northEast.lat - mapBounds._southWest.lat) / 2
        const lonLength = Math.abs(mapBounds._northEast.lng - mapBounds._southWest.lng) / 4

        //Analytics.event('route','search',`${latlon.lat},${latlon.lng}`);
        fbBase.routeSearchByLatLon(latlon, { lat: latLength, lon: lonLength }, (routes: Array<any>) => {
            setRoutes(routes)
        }, () => { })
    }

    function onViewRoute(index: number) {
        const route = routes[index]

        //Analytics.event('route','view',`${route.rid}`);
        fbBase.getGpx(route.gpx.gid ? route.gpx.gid : route.gpx, (gpx: Gpx) => {
            route.gpx = gpx
            setRouteToShow(route)
        })
    }

    function clearRouteToShow() {
        setRouteToShow(null)
    }

    return [routes, routeToShow, onMapClick, onViewRoute, clearRouteToShow]
}

export default UseRouteSearch