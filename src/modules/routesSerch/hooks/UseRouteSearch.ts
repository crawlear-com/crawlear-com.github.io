import * as React from 'react'
import Route, { Gpx } from '../../routesManagement/Route'

function UseRouteSearch(): Array<any> {
    const fb = window.crawlear.fb
    const [routes, setRoutes] = React.useState<Array<Route>>([])
    const [routeToShow, setRouteToShow] = React.useState<Route | null>(null)

    function onMapClick(latlon: any) {
        fb.routeSearchByLatLon(latlon, (routes: Array<any>) =>{
            setRoutes(routes)
        }, () => {})
    }

    function onViewRoute(index: number) {
        const route = routes[index]

        fb.getGpx(route.gpx.gid ? route.gpx.gid : route.gpx, (gpx: Gpx) => {
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