import * as React from 'react'
import Route, { GeoPoint } from '../Route'
import { useTranslation } from 'react-i18next'
import { isYoutubeUrl } from '../../../Utils'

const LAT_DIVISOR = 36
const LON_DIVISOR = 72

function UseRoutesConfigurator(inRoute: Route, onRouteCreated: Function): Array<any> {
    const { t } = useTranslation(['main'])
    const [route, setRoute] = React.useState<Route>(inRoute)
    const [error, setError] = React.useState<string>('')
    const fb = window.crawlear.fb

    function onCreateRoute() {
        window.scrollTo(0,0)

        if (!validateFormState()) {
            setError(t('error.nodatosrequired'))
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
            route.quadrant,
            route.uids,
            route.scale,
            value,
            route.likes,
            route.youtubeVideo,
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
            route.quadrant,
            route.uids,
            route.scale,
            route.dificulty,
            route.likes,
            route.youtubeVideo,
            route.rid)

        newRoute[parameter as keyof typeof Route] = value
        setRoute(newRoute)
    }

    function onFileResolved(fileContent: string, routePoint: GeoPoint) {
        const quadrant: GeoPoint = {
            lat: Math.trunc(routePoint.lat / LAT_DIVISOR),
            lon: Math.trunc(routePoint.lon / LON_DIVISOR)
        }
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
                quadrant,
                previousRoute.uids,
                previousRoute.scale,
                previousRoute.dificulty,
                previousRoute.likes,
                previousRoute.youtubeVideo,
                previousRoute.rid)
            return newRoute
        })
    }

    function validateFormState() {
        return (route.name.length > 0) && (route.description.length > 0) &&
            (route.scale.length > 0) && (route.locationMapUrl.length > 0) &&
            (route.gpx.data.length > 0) && (route.youtubeVideo ? isYoutubeUrl(route.youtubeVideo) : true)
    }

    return [route, error, onCreateRoute, onDificultyChange, onInputChange, onFileResolved, validateFormState]
}

export default UseRoutesConfigurator