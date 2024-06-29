'use client'

import * as React from 'react'
import RouteViewer from './RouteViewer'
import RoutesConfigurator from '../components/RoutesConfigurator'
import UseRoutesManagement, { STATE_CREATE, STATE_MENU} from '../hooks/UseRoutesManagement'
import dynamic from 'next/dynamic'

const DynamicRoutesManagementMenu = dynamic(() => import('../components/RoutesManagementMenu'), {
    loading: () => <p>Loading Routes Management...</p>,
    ssr: false
  })


function RoutesManagement() {
    const [state, route, onViewRoute, onCreateRoute, onBackClick, onEditClick] = UseRoutesManagement()
    
    return <>
            {state === STATE_MENU ? 
                <DynamicRoutesManagementMenu onCreateRoute={onCreateRoute} onViewRoute={onViewRoute}></DynamicRoutesManagementMenu> : 
            (state === STATE_CREATE ? <RoutesConfigurator inRoute={route} onRouteCreated={onBackClick} onBackClick={onBackClick}></RoutesConfigurator> : 
                <RouteViewer route={route} onBackClick={onBackClick} onEditClick={onEditClick}></RouteViewer>
            )}
        </>
}

export default RoutesManagement