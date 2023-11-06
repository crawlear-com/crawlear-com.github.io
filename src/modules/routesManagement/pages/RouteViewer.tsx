import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'
import GoogleMapsRouteUrl from '../../social/components/embed/GoogleMapsRouteUrl'
import GoogleMapsUrl from '../../social/components/embed/GoogleMapsUrl'
import Sharers from '../../social/components/embed/Sharers'

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
            </div>
            <div className="routesSection">
                <label>{t("description.descripcion")}</label><div className="value description">{route.description} </div>
            </div>
            <div className="routesSection">
                <label>{route.isPublic ? t("description.publico") : t("description.nopublico")}</label>
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
            <div className="routesSection">
                <label>{t("description.mapaderuta")}</label><GoogleMapsRouteUrl url={route.routeMapUrl}></GoogleMapsRouteUrl>
            </div>

            <Sharers url={`routeViewer?rid=${route.rid}`} text={t("content.shareruta")} headerText={t("description.compartir")}></Sharers>
            { onBackClick ? <button onClick={onBackClick}>{t("description.atras")}</button> : <></> }
        </div>
    } else {
        return <>{t('description.nopublico')}</>
    }
}

export default RouteViewer