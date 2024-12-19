import * as React from 'react'

interface GoogleMapsRouteUrlProps {
    url: string
}

function getMidFromUrl(url: string) {
    const regexp = /.*mid=(.*)&/,
        matches = url.match(regexp)

    return matches ? matches[1] : ''
}

function GoogleMapsRouteUrl({ url }: GoogleMapsRouteUrlProps) {
    const mid = getMidFromUrl(url)

    return <iframe title='googleMapsRouteUrl' className="mapRoute" src={`https://www.google.com/maps/d/embed?mid=${mid}`}></iframe>

}

export default GoogleMapsRouteUrl