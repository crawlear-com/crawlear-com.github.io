import * as React from 'react'
import { useTranslation } from 'react-i18next'
import List from '../list/List'
import { itemTransform } from '../list/components/RouteListTransformer'
import { MapPointPicker } from 'react-gpxroutemap'
import Route from '../routesManagement/Route'
import Popup from '../../components/Popup'
import RouteViewer from '../routesManagement/pages/RouteViewer'
import UseRouteSearch from './hooks/UseRouteSearch'

import './styles/RoutesSearch.scss'

function RoutesSearch() {
    const { t } = useTranslation()
    const [routes, routeToShow, onMapClick, onViewRoute, clearRouteToShow] = UseRouteSearch()

    return <div className='rounded rounded3 routesSearchContainer'>

        <div className="headerText bold">{t('description.buscar')}</div>        
        <div className="searchText">{t('content.busquedaderuta')}</div>
        
        { routeToShow ?  <Popup onClose={clearRouteToShow}>
            <RouteViewer route={routeToShow}></RouteViewer>
          </Popup> : <></> }
        
        <MapPointPicker points={routes.map((route: Route) => {
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