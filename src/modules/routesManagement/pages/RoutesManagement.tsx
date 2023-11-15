import * as React from 'react'

import Analytics from '../../../Analytics'
import { Navigate } from 'react-router-dom'
import RouteViewer from './RouteViewer'
import RoutesConfigurator from '../components/RoutesConfigurator'
import RoutesManagementMenu from '../components/RoutesManagementMenu'
import UseRoutesManagement, { STATE_CREATE, STATE_MENU} from '../hooks/UseRoutesManagement'


interface RoutesManagementProps {
    onLogin: Function
}

function RoutesManagement({ onLogin }: RoutesManagementProps) {
    const fb = window.crawlear.fb
    const [state, route, onViewRoute, onCreateRoute, onBackClick, onEditClick] = UseRoutesManagement(onLogin)

    if (!fb.isUserLogged()) {
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