import * as React from 'react';
import UseScript from '../../hooks/UseScript';

import '../../styles/embed/Facebook.scss';

function Facebook({ url }) {

    React.useEffect(()=>{
        const scriptElement = document.getElementById('fb-root');

        if(!scriptElement) {
            const div = document.createElement("DIV");
            div.id = 'fb-root';
        } else {
            window.FB && window.FB.XFBML && window.FB.XFBML.parse();
        }
    }, []);

    UseScript('https://connect.facebook.net/es_ES/sdk.js','fbjdk', ()=>{
        window.fbAsyncInit = function() {
            window.FB.init({
              appId            : '',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v14.0'
            });
          };
    });
    //https://www.facebook.com/20531316728/posts/10154009990506729/

    return <><div data-testid="fb-post" className="fb-post" data-show-text="true" data-href={url} data-width="350"></div></>;
}

export default Facebook;