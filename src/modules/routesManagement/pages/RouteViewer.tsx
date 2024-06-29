"use client"

import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'
import GoogleMapsUrl from '../../social/components/embed/GoogleMapsUrl'
import Sharers from '../../social/components/embed/Sharers'
import RouteLove from '../components/RouteLove'
import Youtube from '../../social/components/embed/Youtube'
import Analytics from '../../../Analytics'
import dynamic from 'next/dynamic'

import 'react-gpxroutemap/dist/public/img/marker-icon.png'
import 'react-gpxroutemap/dist/public/img/marker-shadow.png'
import '../styles/RouteViewer.scss'

interface RouteViewerProps {
    route: Route,
    onBackClick?: React.MouseEventHandler<HTMLButtonElement>,
    onEditClick?: React.MouseEventHandler<HTMLDivElement>
}

type GpxRouteMapProps = {
    gpx: string
}

const DynamicGpxRouteMap = dynamic<GpxRouteMapProps>(() => import('../../../app/libs/GpxRouteMap'), {
    loading: () => <p>Loading Route Map...</p>,
    ssr: false
  })

function RouteViewer({ route, onBackClick, onEditClick }: RouteViewerProps) {
    const { t } = useTranslation('main')
    const isLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid
    const isOwner = route.uids.find((element) => window.crawlear && window.crawlear.user && element === window.crawlear.user.uid)

    React.useEffect(() => {
        Analytics.pageview(`/routeviewer/${route.rid}`)
    }, [])

    if (isOwner || (route.isPublic)) {
        return <div className="routesManagement rounded rounded2">
            <div className="routesSection rounded rounded1">
                { !isOwner && isLogged ? <RouteLove rid={route.rid || '' }></RouteLove> : <></> }
                { isOwner && onEditClick ? <div className="editButton" onClick={onEditClick}>[ {t("description.editar")} ]</div> : <></> }
                <div className="value name">{route.name} </div>
                <div className="value ispublic">{route.isPublic ? t("description.publico") : ''} </div>
            </div>
            <DynamicGpxRouteMap gpx={route.gpx.data}></DynamicGpxRouteMap>
            { route.youtubeVideo ? 
                <div className="routesSection">
                    <div className="value"><Youtube url={route.youtubeVideo}></Youtube></div>
            </div> : <></> }
            <Sharers url={`routeViewer?rid=${route.rid}`} text={t("content.shareruta")} headerText=''></Sharers>
            <div className="routesSection">
                <div className="value description">{route.description} </div>
            </div>
            <div className="routesSection">
                <div className="bold">{t("description.escala")}</div><div className="value">{route.scale} </div>
            </div>
            <div className="routesSection">
                <div className="bold">{t("description.dificultad")}</div><div className="value">{route.dificulty} </div>
            </div>
            <div className="routesSection">
                <div className="bold">{t("description.puntoencuentro")}</div><GoogleMapsUrl url={route.locationMapUrl} ></GoogleMapsUrl>
            </div>

            <div className="routesSection backButton">
                { onBackClick ? <button onClick={onBackClick}>{t("description.atras")}</button> : <></> }
            </div>
        </div>
    } else {
        return <>{t('description.nopublico')}</>
    }
}

export default RouteViewer