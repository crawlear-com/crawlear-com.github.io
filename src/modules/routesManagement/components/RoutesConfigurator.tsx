import * as React from 'react'
import Route from '../Route'
import ErrorBox from '../../../components/ErrorBox'
import UseRoutesConfigurator from '../hooks/UseRoutesConfigurator'
import { useTranslation } from 'react-i18next'
import { GpxRouteMap } from 'react-gpxroutemap'
import Utils from '../../../Utils'


import '../styles/RoutesConfigurator.scss'

interface RoutesConfiguratorProps {
    inRoute: Route,
    onRouteCreated: Function,
    onBackClick: React.MouseEventHandler<HTMLButtonElement>
}

function RoutesConfigurator({ inRoute, onRouteCreated, onBackClick }: RoutesConfiguratorProps) {
    const [route, error, onCreateRoute, onDificultyChange, onInputChange, onFileResolved, validateFormVata] = UseRoutesConfigurator(inRoute, onRouteCreated)
    const { t } = useTranslation(['main'])

    return <>
        <div className='headerText bold sectionTitle'>{t('description.seccionderutas')}</div>
        <div className="routesManagement routesManagementCreation rounded rounded2">
            <div className="routeMap center">
                <label htmlFor='gpxData' className="formRequiredValue">{t('description.mapaderuta')}</label>
                { !route.gpx.data && <div className='formError'>{ t('error.noruta')} </div>}
                <input minLength={1} id="gpxData" type="hidden" value={route.gpx.data} />
                <GpxRouteMap gpx={route.gpx.data} onFileResolved={onFileResolved} onRouteRecorded={onFileResolved}></GpxRouteMap>
            </div>

            <div className="routeName center">
                <label htmlFor='routeName' className="formRequiredValue">{t('description.nombrederuta')}</label>
                { !route.name && <div className='formError'>{ t('error.nonombre')} </div>}
                <input minLength={1} id="routeName" name='name' value={route.name} onChange={(value) => {
                    onInputChange('name', value)
                }}></input>
            </div>

            <div className="routeDescription center">
                <label htmlFor="routeDescription" className="formRequiredValue">{t('description.descripcion')}</label>
                { !route.description && <div className='formError'>{ t('error.nodescripcion')} </div>}
                <textarea minLength={1} id="routeDescription" name='description' value={route.description} onChange={(value) => {
                    onInputChange('description', value)
                }}></textarea>
            </div>

            <div className="routeIsPublic center">
                <label htmlFor='routeIsPublic'>{t('description.publico')}</label>
                <input id="routeIsPublic" type="checkbox" defaultChecked={route.isPublic} name='isPublic' onChange={(value) => {
                    onInputChange('isPublic', value)
                }}></input>
            </div>

            <div className="routeScale center">
                <label htmlFor='routeScale' className="formRequiredValue">{t('description.escala')}</label>
                { !route.scale && <div className='formError'>{ t('error.noescala')} </div>}
                <input minLength={1} id="routeScale" name='scale' value={route.scale} onChange={(value) => {
                    onInputChange('scale', value)
                }}></input>
            </div>

            <div className="routeDifficulty center">
                <label htmlFor='routeDifficult'>{t('description.dificultad')}</label>
                <select id="routeDifficult" onChange={onDificultyChange} value={route.dificulty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>

            <div className="youtubeVideo center">
                <label  htmlFor='youtubeVideo'>{t('description.video')}</label>
                { route.youtubeVideo && !Utils.isYoutubeUrl(route.youtubeVideo) && <div className='formError'>{ t('error.invalidyoutube')} </div>}
                <input id="youtubeVideo" name='youtubeVideo' value={route.youtubeVideo} onChange={(value) => {
                    onInputChange('youtubeVideo', value)
                }}></input>
            </div>

            <div className="routePoint center">
                <label htmlFor='routeLocation' className="formRequiredValue">{t('description.puntoencuentro')}</label>
                { !route.locationMapUrl && <div className='formError'>{ t('error.nolocalizacion')} </div>}
                { route.locationMapUrl && !Utils.isGoogleMapsUrl(route.locationMapUrl) && <div className='formError'>{ t('error.invalidmaps')} </div>}
                <input minLength={1} id="routeLocation" name='locationMapUrl' value={route.locationMapUrl} onChange={(value) => {
                onInputChange('locationMapUrl', value)
            }}></input></div>

            <ErrorBox message={error}></ErrorBox>
            <div className="endButtons">
                <button className='importantNote' onClick={onCreateRoute} disabled={!validateFormVata()}>
                    {route.rid ? t('description.modificar') : t('description.crear')}
                </button>
                <button onClick={onBackClick}>{ t('description.atras')}</button>
            </div>
        </div>
    </>
}

export default RoutesConfigurator