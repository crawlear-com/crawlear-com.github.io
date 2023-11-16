import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'
import GoogleMapsUrl from '../../social/components/embed/GoogleMapsUrl'
import Sharers from '../../social/components/embed/Sharers'
import { GpxRouteMap } from 'react-gpxroutemap'

import 'react-gpxroutemap/dist/public/img/marker-icon.png'
import 'react-gpxroutemap/dist/public/img/marker-shadow.png'
import '../styles/RouteViewer.scss'

interface RouteViewerProps {
    route: Route,
    onBackClick?: React.MouseEventHandler<HTMLButtonElement>,
    onEditClick?: React.MouseEventHandler<HTMLDivElement>
}

function RouteViewer({ route, onBackClick, onEditClick }: RouteViewerProps) {
    const { t } = useTranslation()
    const isOwner = window.crawlear && window.crawlear.user && route.uids.find((element) => element === window.crawlear.user.uid)

    if (isOwner || route.isPublic) {
        return <div className="routesManagement rounded rounded2">
            <div className="routesSection rounded rounded1">
                { isOwner && onEditClick ? <div className="editButton" onClick={onEditClick}>[ {t("description.editar")} ]</div> : <></> }
                <div className="value name">{route.name} </div>
                <div className="value ispublic">{route.isPublic ? t("description.publico") : ''} </div>
            </div>
            <GpxRouteMap gpx={route.gpx.data}></GpxRouteMap>
            <Sharers url={`routeViewer?rid=${route.rid}`} text={t("content.shareruta")} headerText=''></Sharers>
            <div className="routesSection">
                <label>{t("description.descripcion")}</label><div className="value description">{route.description} </div>
            </div>
            <div className="routesSection">
                <label>{t("description.escala")}</label><div className="value">{route.scale} </div>
            </div>
            <div className="routesSection">
                <label>{t("description.dificultad")}</label><div className="value">{route.dificulty} </div>
            </div>
            <div className="routesSection">
                <label>{t("description.puntoencuentro")}</label><GoogleMapsUrl url={route.locationMapUrl} ></GoogleMapsUrl>
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