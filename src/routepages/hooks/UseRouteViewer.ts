"use client"

import * as React from 'react'
import Route from '../../modules/routesManagement/Route'
import Analytics from '../../Analytics'

function UseRouteViewer(rid: string): Array<Route> {
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'',{ data: ''},{lat:0,lon:0},{lat:0,lon:0},['uid'],'',0,0))

    React.useEffect(() => {
        const fbBase = window.crawlear.fbBase

        Analytics.pageview(`/routeviewer?gid=${rid}`);
        fbBase.getRoute(rid, true, (newRoute: Route) => {
            setRoute(newRoute)
        })
    }, [])

    return [route]
}

export default UseRouteViewer