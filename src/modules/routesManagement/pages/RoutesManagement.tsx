import * as React from 'react'
import RouteViewer from './RouteViewer'
import RoutesConfigurator from '../components/RoutesConfigurator'
import RoutesManagementMenu from '../components/RoutesManagementMenu'
import UseRoutesManagement, { STATE_CREATE, STATE_MENU} from '../hooks/UseRoutesManagement'

function RoutesManagement() {
    const [state, route, onViewRoute, onCreateRoute, onBackClick, onEditClick] = UseRoutesManagement()

    return <>
            {state === STATE_MENU ?
                <RoutesManagementMenu onCreateRoute={onCreateRoute} onViewRoute={onViewRoute}></RoutesManagementMenu> :
            (state === STATE_CREATE ? <RoutesConfigurator inRoute={route} onRouteCreated={onBackClick} onBackClick={onBackClick}></RoutesConfigurator> :
                <RouteViewer route={route} onBackClick={onBackClick} onEditClick={onEditClick}></RouteViewer>
            )}
        </>
}

export default RoutesManagement