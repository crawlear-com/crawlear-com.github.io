import * as React from 'react'
import Route from '../../modules/routesManagement/Route'
import Analytics from '../../Analytics'

function UseRouteViewer(rid: string) {
    const firebase = window.crawlear.fb
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'','',[window.crawlear.user.uid],'',0,0))

    React.useEffect(() => {
        Analytics.pageview(`/routeviewer?gid=${rid}`);
        firebase.getRoute(rid, (newRoute: Route) => {
            setRoute(newRoute)
        })
    }, [])

    return [route]
}

export default UseRouteViewer