import * as React from 'react'
import Spinner from '../components/Spinner'
import { default as Rv } from '../modules/routesManagement/pages/RouteViewer'
import UseRouteViewer from './hooks/UseRouteViewer'
import NotLoggedLogo from '../components/NotLoggedLogo'

interface RouteViewerProps {
    rid: string
    onLogin: Function
}

function RouteViewer({ rid, onLogin }: RouteViewerProps) {
    const [route] = UseRouteViewer(rid)
    const fb = window.crawlear.fb

    React.useEffect(() => {
        fb.checkIfLogged(()=>{onLogin(false)})
    },[])

    if (!route.rid) {
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