import * as React from 'react';
import '../../styles/embed/Youtube.scss';

function getVideoId(url) {
    var regExp = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/;
    var match = url.match(regExp);
    
    if (match && match[3].length === 11) {
        return match[3]
    } else {
        return;
    }
}

function Youtube({ url }) {
    let videoId = getVideoId(url)

    if (videoId) {
        return <div className="youtube video-responsive">
                <iframe src={`https://www.youtube.com/embed/${videoId}`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0" allowFullScreen></iframe>
            </div>
    } else {
        return <></>
    }
}

export default Youtube;