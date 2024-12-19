import * as React from 'react';

interface GoogleMapsLocationUrlProps {
    url: string
}

function getPbFromUrl(url: string): string {
    const regexp = /.*pb=(.*)"/,
    matches = url.match(regexp)

    return matches ? matches[1] : ''
}

function GoogleMapsLocationUrl({ url }: GoogleMapsLocationUrlProps) {
    const style1 = ".mapouter{position:relative;text-align:right;}";
    const style2 = ".gmap_canvas {overflow:hidden;background:none!important;}";
    const pb = getPbFromUrl(url)

    return <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title='googleMapLocationUrl' src={`https://www.google.com/maps/embed?pb=${pb}`}></iframe>
                    <style>{style1}</style>
                    <style>{style2}</style>
                </div>
            </div>
}

export default GoogleMapsLocationUrl