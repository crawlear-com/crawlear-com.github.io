import * as React from 'react'
import Spinner from '../../../components/Spinner'
import Utils from '../../../Utils';
import { useTranslation } from 'react-i18next';

const STATE_LOCATION_UNKNOWN=0
const STATE_LOCATION_LOCATED=1
const STATE_LOCATION_LOCATING=2

interface LocationResolverProps {
    onLocationResolved: Function
}

export interface Location {
    latitude: number,
    longitude: number
}

function LocationResolver({ onLocationResolved }: LocationResolverProps) {
    const [stateLocation, setStateLocation] = React.useState(STATE_LOCATION_UNKNOWN)
    const [location, setLocation] = React.useState<Location>({ latitude: 0, longitude: 0 })
    const { t } = useTranslation();
    let locationElement;

    function getLocation(event: React.BaseSyntheticEvent<MouseEvent,
        EventTarget & HTMLAnchorElement,
        EventTarget>) {
        event.preventDefault();
    
        if(navigator.geolocation) {
            setStateLocation(STATE_LOCATION_LOCATING);
            navigator.geolocation.getCurrentPosition((position) => {
                const newLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                onLocationResolved(newLocation)
                setStateLocation(STATE_LOCATION_LOCATED);
                setLocation(newLocation)
            }, ()=>{
                onLocationResolved({})
                setStateLocation(STATE_LOCATION_UNKNOWN);
            });
        } else {
            setStateLocation(STATE_LOCATION_UNKNOWN);
        }
    }

    if(navigator.geolocation) {
        if (stateLocation === STATE_LOCATION_UNKNOWN) {
            locationElement = <a className="bold" href="https://crawlear.com" onClick={getLocation}>{t('description.obtener')}</a>;
        } else if (stateLocation === STATE_LOCATION_LOCATING) {
            locationElement = <Spinner />;
        } else if (stateLocation === STATE_LOCATION_LOCATED) {
            locationElement = <>
                <span>({`${location.latitude},${location.longitude}`})</span>
                <a href={Utils.getMapsURL(location.latitude, location.longitude)} rel='noreferrer' target="_blank">{t('description.vergooglemaps')}</a>
            </>
        }
    } else {
        locationElement = <div className="">{t('content.nogeolocation')}</div>;
    }

    return locationElement
}

export default LocationResolver
