import * as React from 'react'
import { Navigate } from 'react-router-dom'
import RouteViewer from './RouteViewer'
import RoutesConfigurator from '../components/RoutesConfigurator'
import RoutesManagementMenu from '../components/RoutesManagementMenu'
import UseRoutesManagement, { STATE_CREATE, STATE_MENU} from '../hooks/UseRoutesManagement'

function RoutesManagement() {
    const fbBase = window.crawlear.fbBase
    const [state, route, onViewRoute, onCreateRoute, onBackClick, onEditClick] = UseRoutesManagement()
    
    if (!fbBase.isUserLogged()) {
        return <Navigate state={{ from: "/route" }} to={{ pathname: "/" }} />
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