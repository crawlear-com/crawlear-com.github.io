import * as React from 'react'

import Analytics from '../../../Analytics'
import { Navigate } from 'react-router-dom'
import RouteViewer from './RouteViewer'
import RoutesConfigurator from '../components/RoutesConfigurator'
import RoutesManagementMenu from '../components/RoutesManagementMenu'
import Route from '../Route'

const STATE_MENU = 0
const STATE_CREATE = 1
const STATE_VIEW = 2

interface RoutesManagementProps {
    onLogin: Function
}

function RoutesManagement({ onLogin }: RoutesManagementProps) {
    const fb = window.crawlear.fb
    const [state, setState] = React.useState<number>(STATE_MENU)
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'','',[''],'',0,0))

    React.useEffect(() => {
        Analytics.pageview('/routesManagement/');
        fb.checkIfLogged(()=>{onLogin(false)});
    },[]);

    function onViewRoute(route: Route) {
        setRoute(route)
        setState(STATE_VIEW)
    }

    function onCreateRoute(newRoute: Route) {
        if (newRoute) {
            setRoute(newRoute)
        } else {
            setRoute(new Route('','',true,'','',[window.crawlear.user.uid],'',0,0))
        }
        
        setState(STATE_CREATE)
    }

    function onBackClick(event: React.MouseEvent<HTMLButtonElement>): void {
        setState(STATE_MENU)
    }

    function onEditClick(event: React.MouseEvent<HTMLDivElement>): void {
        setState(STATE_CREATE)
    }

    return <>
            {state === STATE_MENU ? 
                <RoutesManagementMenu onCreateRoute={onCreateRoute} onViewRoute={onViewRoute}></RoutesManagementMenu> : 
            (state === STATE_CREATE ? <RoutesConfigurator inRoute={route} onRouteCreated={onBackClick} onBackClick={onBackClick}></RoutesConfigurator> : 
                <RouteViewer route={route} onBackClick={onBackClick} onEditClick={onEditClick}></RouteViewer>
            )}
        </>
}

export default RoutesManagement