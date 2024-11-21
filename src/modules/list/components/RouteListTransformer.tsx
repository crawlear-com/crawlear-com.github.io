import * as React from 'react'
import Route from '../../routesManagement/Route'
import { itemProps } from './ListItem'

function routeListTransformer(routes: Array<Route>) {
    const routesUi: Array<itemProps> = []

    routes.forEach((route: Route) => {
        routesUi.push(itemTransform(route))
    })
}

function itemKey(route: Route) {
    return route.rid
}

function itemTransform(route: Route): itemProps {
    return {
        title: route.name,
        content: <div className='routeListItem rounded rounded1'><span>{ route.description }</span></div>
    }
}

export { routeListTransformer, itemTransform, itemKey }