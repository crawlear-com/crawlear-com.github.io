import { t } from 'i18next';
import * as React from 'react';
import useScript from '../../hooks/useScript';

function FacebookSharer({ url }) {
    
    React.useEffect(()=>{
        const scriptElement = document.getElementById('fb-root');

        if(!scriptElement) {
            const div = document.createElement(div);
            div.id = 'fb-root';
        } else {
            FB && FB.XFBML && FB.XFBML.parse();
        }
    }, []);


    useScript('https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0', 'fb-root-script');

    return <div className="fb-share-button" data-href={url} data-layout="button" data-size="small">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">{t('description.compartir')}</a>
    </div>;
}

export default FacebookSharer;