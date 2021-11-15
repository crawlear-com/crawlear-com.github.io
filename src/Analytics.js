import ReactGA from 'react-ga';


function isLocalhost() {
    return document.location.href.indexOf('localhost') >= 0;
}

class Analytics {
    static init(code) {
        if (!isLocalhost()) {
            ReactGA.initialize(code);
        }
    }

    static pageview(path) {
        if (!isLocalhost()) {
            ReactGA.pageview(path);
        }
    }
}

export default Analytics;