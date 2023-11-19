import * as React from 'react'
import Route from '../../modules/routesManagement/Route'
import Analytics from '../../Analytics'

function UseRouteViewer(rid: string) {
    const firebase = window.crawlear.fb
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid || ''
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'',{ data: ''},{lat:0,lon:0},{lat:0,lon:0},[uid],'',0,0))

    React.useEffect(() => {
        Analytics.pageview(`/routeviewer?gid=${rid}`);
        firebase.getRoute(rid, (newRoute: Route) => {
            setRoute(newRoute)
        })
    }, [])

    return [route]
}

export default UseRouteViewer