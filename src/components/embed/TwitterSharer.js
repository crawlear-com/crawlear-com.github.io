import { t } from 'i18next';
import * as React from 'react';

import '../../resources/css/embed/TwitterSharer.scss';

function TwitterSharer({ url }) {
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
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURI(t('content.shareText'))}`}
            data-size="large">Tweet</a>;
}

export default TwitterSharer;