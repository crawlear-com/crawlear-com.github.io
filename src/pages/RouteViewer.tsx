import * as React from 'react'
import Spinner from '../components/Spinner'
import { default as Rv } from '../modules/routesManagement/pages/RouteViewer'
import UseRouteViewer from './hooks/UseRouteViewer'
import NotLoggedLogo from '../components/NotLoggedLogo'

interface RouteViewerProps {
    rid: string
}

function RouteViewer({ rid }: RouteViewerProps) {
    const [route] = UseRouteViewer(rid)

    if (!route) {
        return <>
            <NotLoggedLogo /><br /><Spinner></Spinner>
        </>
    } else {
        return <>
            <NotLoggedLogo /><Rv route={route} />
        </>
    }
}

export default RouteViewer