"use client"

import * as React from 'react';
import UseScript from '../../hooks/UseScript';

import '../../styles/embed/FacebookSharer.scss';

function FacebookSharer({ url, text }) {
    
    React.useEffect(()=>{
        const scriptElement = document.getElementById('fb-root');

        if(!scriptElement) {
            const div = document.createElement('div');
            div.id = 'fb-root';
        } else {
            window.FB && window.FB.XFBML && window.FB.XFBML.parse();
        }
    }, []);


    UseScript('https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0', 'fb-root-script');

    return <div className="fb-share-button" data-href={url} data-layout="button" data-size="small">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">{text}</a>
    </div>;
}

export default FacebookSharer;