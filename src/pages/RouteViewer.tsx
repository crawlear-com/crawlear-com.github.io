import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/Spinner'
import { default as Rv } from '../modules/routesManagement/components/RouteViewer'
import UseRouteViewer from './hooks/UseRouteViewer'

interface RouteViewerProps {
    rid: string
}

function RouteViewer({ rid }: RouteViewerProps) {
    const { t } = useTranslation()
    const [route] = UseRouteViewer(rid)

    if (!route) {
        return <Spinner></Spinner>
    } else {
        return <Rv route={route} />
    }
}

export default RouteViewer