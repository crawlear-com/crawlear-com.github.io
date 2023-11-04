import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Route from '../Route'
import ErrorBox from '../../../components/ErrorBox'

interface RoutesConfiguratorProps {
    inRoute: Route,
    onRouteCreated: Function,
    onBackClick: React.MouseEventHandler<HTMLButtonElement>
}

function RoutesConfigurator({ inRoute, onRouteCreated, onBackClick }: RoutesConfiguratorProps) {
    const { t } = useTranslation()
    const [route, setRoute] = React.useState(inRoute)
    const [error, setError] = React.useState('')
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
        } else if (route.routeMapUrl.length <= 0) {
            setError(t('error.noruta'))
        } else {
            setError('')
            fb.setRoute(route, (route: Route) => {}, () => {})
            onRouteCreated()
        }
    }

    function onDificultyChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.selectedIndex
        const newRoute = new Route(route.name, 
            route.description,
            route.isPublic,
            route.locationMapUrl,
            route.routeMapUrl,
            route.uids,
            route.scale,
            value,
            route.likes,
            route.rid)
        setRoute(newRoute)
    }

    function onInputChange(parameter: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const value = 'checked' in event.target ? event.target.checked : event.target.value
        const newRoute = new Route(route.name, 
            route.description,
            route.isPublic,
            route.locationMapUrl,
            route.routeMapUrl,
            route.uids,
            route.scale,
            route.dificulty,
            route.likes,
            route.rid)

        newRoute[parameter as keyof typeof Route] = value
        setRoute(newRoute)
    }
    
    return <>
        <div className='headerText bold sectionTitle'>{t('description.seccionderutas')}</div>
        <div className="routesManagement rounded rounded2">
            <ErrorBox message={error}></ErrorBox>
            <label>{t('description.nombre')} <input name='name' value={route.name} onChange={(value) => {
                onInputChange('name', value)
            }}></input></label><br />
            <label>{t('description.descripcion')} <textarea name='description' value={route.description} onChange={(value) => {
                onInputChange('description', value)
            }}></textarea></label><br />
            <label>{t('description.publico')} <input type="checkbox" defaultChecked={route.isPublic} name='isPublic' onChange={(value) => {
                onInputChange('isPublic', value)
            }}></input></label><br />
            <label>{t('description.escala')} <input name='scale' value={route.scale} onChange={(value) => {
                onInputChange('scale', value)
            }}></input></label><br />

            <label>{t('description.dificultad')} <select onChange={onDificultyChange} value={route.dificulty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </label><br />

            <label>{t('description.puntoencuentro')}<input name='locationMapUrl' value={route.locationMapUrl} onChange={(value) => {
                onInputChange('locationMapUrl', value)
            }}></input></label><br />
            <label>{t('description.mapaderuta')} <input name='routeMapUrl' value={route.routeMapUrl} onChange={(value) => {
                onInputChange('routeMapUrl', value)
            }}></input></label><br />
            <button className='importantNote' onClick={onCreateRoute}>{route.rid ? t('description.modificar') : t('description.crear')}</button>
            <button onClick={onBackClick}>{ t('description.atras')}</button>
        </div>
    </>
}

export default RoutesConfigurator