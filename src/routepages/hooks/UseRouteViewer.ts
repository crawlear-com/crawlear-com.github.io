import * as React from 'react'
import Route from '../../modules/routesManagement/Route'

async function UseRouteViewer(rid: string) {
    const fbBase = window.crawlear.fbBase
    const uid = (window.crawlear && window.crawlear.user && window.crawlear.user.uid) || ''
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'',{ data: ''},{lat:0,lon:0},{lat:0,lon:0},[uid],'',0,0))

    await fbBase.getRoute(rid, true, (newRoute: Route) => {
        setRoute(newRoute)
    })

    return [route]
}

export default UseRouteViewer