import * as React from 'react';

import '../../styles/embed/TwitterSharer.scss';

function TwitterSharer({ url, text }) {
    React.useEffect(()=>{
        window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) {
            window.twttr && window.twttr.widgets && window.twttr.widgets.load();
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
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURI(text)}`}
            data-size="large">Tweet</a>;
}

export default TwitterSharer;