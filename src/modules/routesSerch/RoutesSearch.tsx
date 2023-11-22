import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Route, { Gpx } from '../routesManagement/Route'
import List from '../list/List'
import { itemTransform } from '../list/components/RouteListTransformer'
import { MapPointPicker } from 'react-gpxroutemap'
import Popup from '../../components/Popup'
import RouteViewer from '../routesManagement/pages/RouteViewer'

import './styles/RoutesSearch.scss'

interface RoutesSearchProps {
    onViewRoute: Function
}
function RoutesSearch({  }: RoutesSearchProps) {
    const fb = window.crawlear.fb
    const { t } = useTranslation()
    const [routes, setRoutes] = React.useState<Array<Route>>([])
    const [routeToShow, setRouteToShow] = React.useState<Route | null>(null)

    function onMapClick(latlon: any) {
        fb.routeSearchByLatLon(latlon, (routes: Array<any>) =>{
            setRoutes(routes)
        }, () => {})
    }

    function onViewRoute(index: number) {
        const route = routes[index]

        fb.getGpx(route.gpx.gid ? route.gpx.gid : route.gpx, (gpx: Gpx) => {
            route.gpx = gpx
            setRouteToShow(route)
        })
    }

    function clearRouteToShow() {
        setRouteToShow(null)
    }

    return <div className='rounded rounded3 routesSearchContainer'>

        <div className="headerText bold">{t('description.buscar')}</div>        
        <div className="searchText">{t('content.busquedaderuta')}</div>
        
        { routeToShow ?  <Popup onClose={clearRouteToShow}>
            <RouteViewer route={routeToShow}></RouteViewer>
          </Popup> : <></> }
        
        <MapPointPicker points={routes.map((route) => {
            return route.point
        })} onMapClick={onMapClick}></MapPointPicker>

        <List data={routes} 
            readOnly={true}
            transformer={itemTransform}
            title={t('description.resultado')} 
            onItemAction={onViewRoute} ></List>
    </div>
}

export default RoutesSearch