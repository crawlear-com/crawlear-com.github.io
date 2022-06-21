import { t } from 'i18next';
import * as React from 'react';

function TwitterSharer({ url }) {
    const shareText = 'Hey! This is my crawlear.com pilot profile';
    
    React.useEffect(()=>{
        window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) {
            twttr && twttr.widgets && twttr.widgets.load();
            return t;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
        }(document, "script", "twitter-wjs"));
    }, []);

    return <a className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURI(shareText)}`}
            data-size="large">Tweet</a>;
}

export default TwitterSharer;