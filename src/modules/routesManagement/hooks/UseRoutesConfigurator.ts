import * as React from 'react'
import Route, { RoutePoint } from '../Route'
import { useTranslation } from 'react-i18next'

function UseRoutesConfigurator(inRoute: Route, onRouteCreated: Function): Array<any> {
    const { t } = useTranslation()
    const [route, setRoute] = React.useState<Route>(inRoute)
    const [error, setError] = React.useState<string>('')
    const fb = window.crawlear.fb

    function onCreateRoute() {
        if (route.name.length <= 0) {
            setError(t('error.nonombre'))
        } else if (route.description.length <= 0) {
            setError(t('error.nodescripcion'))
        } else if (route.scale.length <= 0) {
            setError(t('error.noescala'))
        } else if (route.locationMapUrl.length <= 0) {
            setError(t('error.nolocation'))
        } else if (route.gpx.data.length <= 0) {
            setError(t('error.noruta'))
        } else {
            setError('')
            fb.setRoute(route, (route: Route) => {}, () => {})
            onRouteCreated()
        }
    }

    function onDificultyChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.selectedIndex + 1
        const newRoute = new Route(route.name, 
            route.description,
            route.isPublic,
            route.locationMapUrl,
            route.gpx,
            route.point,
            route.uids,
            route.scale,
            value,
            route.likes,
            route.rid)
        setRoute(newRoute)
    }

    function onInputChange(parameter: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value
        const newRoute = new Route(route.name, 
            route.description,
            route.isPublic,
            route.locationMapUrl,
            route.gpx,
            route.point,
            route.uids,
            route.scale,
            route.dificulty,
            route.likes,
            route.rid)

        newRoute[parameter as keyof typeof Route] = value
        setRoute(newRoute)
    }

    function onFileResolved(fileContent: string, routePoint: RoutePoint) {
        setRoute((previousRoute) => {
            const newRoute = new Route(previousRoute.name, 
                previousRoute.description,
                previousRoute.isPublic,
                previousRoute.locationMapUrl,
                {
                    gid: previousRoute.gpx.gid,
                    data: fileContent ? fileContent : '' 
                },
                routePoint ? routePoint : { lat: 0, lon: 0 },
                previousRoute.uids,
                previousRoute.scale,
                previousRoute.dificulty,
                previousRoute.likes,
                previousRoute.rid)
            return newRoute
        })
    }

    return [route, error, onCreateRoute, onDificultyChange, onInputChange, onFileResolved]
}

export default UseRoutesConfigurator