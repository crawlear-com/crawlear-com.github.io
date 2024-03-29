import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { MapPointPicker } from 'react-gpxroutemap'
import Route from '../routesManagement/Route'
import Popup from '../../components/Popup'
import RouteViewer from '../routesManagement/pages/RouteViewer'
import UseRouteSearch from './hooks/UseRouteSearch'
import Analytics from '../../Analytics'

import './styles/RoutesSearch.scss'

function RoutesSearch() {
    const { t } = useTranslation(['main'])
    const [routes, routeToShow, onMapClick, onViewRoute, clearRouteToShow] = UseRouteSearch()

    return <div className='rounded rounded3 routesSearchContainer'>
        <div className="headerText bold">{t('description.buscar')}</div>        
        <div className="searchText">{t('content.busquedaderuta')}</div>
        
        { routeToShow ?  <Popup onClose={clearRouteToShow}>
            <RouteViewer route={routeToShow}></RouteViewer>
          </Popup> : <></> }
        
        <MapPointPicker points={routes.map((route: Route, index: number) => {
            const link = document.createElement('div')
            link.classList.add('routeAltDiv')
            link.innerText = route.name
            Analytics.event('route','click',`${route.rid}`);
            link.addEventListener('click',() => {
                onViewRoute(index)
            })
            return {
                point: route.point,
                content: link
            }
        })} onMapClick={onMapClick}></MapPointPicker>
    </div>
}
export default RoutesSearch