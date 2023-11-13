import * as React from 'react'
import Route, { RoutePoint } from '../Route'
import ErrorBox from '../../../components/ErrorBox'
import UseRoutesConfigurator from '../hooks/UseRoutesConfigurator'
import { GpxRouteMap } from 'react-gpxroutemap'
import { useTranslation } from 'react-i18next'

interface RoutesConfiguratorProps {
    inRoute: Route,
    onRouteCreated: Function,
    onBackClick: React.MouseEventHandler<HTMLButtonElement>
}

function RoutesConfigurator({ inRoute, onRouteCreated, onBackClick }: RoutesConfiguratorProps) {
    const [route, error, onCreateRoute, onDificultyChange, onInputChange, onFileResolved] = UseRoutesConfigurator(inRoute, onRouteCreated)
    const { t } = useTranslation()
    
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
            <label>{t('description.mapaderuta')}
                <GpxRouteMap gpx={route.gpx} onFileResolved={onFileResolved} ></GpxRouteMap>
            </label><br />

            <button className='importantNote' onClick={onCreateRoute}>{route.rid ? t('description.modificar') : t('description.crear')}</button>
            <button onClick={onBackClick}>{ t('description.atras')}</button>
        </div>
    </>
}

export default RoutesConfigurator