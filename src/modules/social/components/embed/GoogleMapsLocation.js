import { t } from 'i18next';
import * as React from 'react';

function GoogleMapsLocation({ location }) {
    const style1 = ".mapouter{position:relative;text-align:right;}";
    const style2 = ".gmap_canvas {overflow:hidden;background:none!important;}";


    return <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <style>{style1}</style>
                    <style>{style2}</style>
                </div>
            </div>
}

export default GoogleMapsLocation