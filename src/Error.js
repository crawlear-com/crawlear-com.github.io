import Analytics from './Analytics';

window.onerror = (errorMessage, url, lin, col, errorObject)=> {
    console.error(errorMessage);

    Analytics.event('error', 'js', `${errorMessage} ${errorObject.stack} ${url}`)
}