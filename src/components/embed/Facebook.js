import * as React from 'react';
import useScript from '../../hooks/useScript';

//import Logo from './logoFacebook.svg';

import '../../resources/css/embed/Facebook.scss';

function Facebook({ url }) {

    React.useEffect(()=>{
        const scriptElement = document.getElementById('fb-root');

        if(!scriptElement) {
            const div = document.createElement(div);
            div.id = 'fb-root';
        } else {
            FB && FB.XFBML && FB.XFBML.parse();
        }
    }, []);

    useScript('https://connect.facebook.net/es_ES/sdk.js','fbjdk', ()=>{
        window.fbAsyncInit = function() {
            FB.init({
              appId            : '',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v14.0'
            });
          };
    });
    //https://www.facebook.com/20531316728/posts/10154009990506729/

    return <><div className="fb-post" data-show-text="true" data-href={url} data-width="350"></div></>;
}

export default Facebook;