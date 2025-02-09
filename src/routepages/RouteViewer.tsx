"use client"

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import Spinner from '../components/Spinner'
import { default as Rv } from '../modules/routesManagement/pages/RouteViewer'
import UseRouteViewer from './hooks/UseRouteViewer'
import NotLoggedLogo from '../components/NotLoggedLogo'
import GoogleAnalytics from '../analytics/GoogleAnalytics'

interface RouteViewerProps {
    rid: string
}

async function RouteViewer({ rid }: RouteViewerProps) {
    const [route] = await UseRouteViewer(rid)

    if (!route.rid) {
        return <>
            <NotLoggedLogo /><br /><Spinner></Spinner>
        </>
    } else {
        return <>
            <GoogleAnalytics page={`/routeviewer?gid=${rid}`} />
            <Helmet>
                <meta property="og:title" content={`Crawlear.com Route ${route.name}`} />
                <meta property="og:description" content={`Crawlear.com Route ${route.description}`} />
                <meta property="og:image" content="https://crawlear.com/static/routeShare.png" />
                <meta property="description" content={`Crawlear.com  Route ${route.description}`} />
            </Helmet>
            <NotLoggedLogo />
            <Rv route={route} />
        </>
    }
}

export default RouteViewer