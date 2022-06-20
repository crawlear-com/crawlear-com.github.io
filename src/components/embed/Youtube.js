import * as React from 'react';
import '../../resources/css/embed/Youtube.scss';

function getVideoId(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return;
    }
}

function Youtube({ url }) {
    const videoId = getVideoId(url);

    if (videoId) {
        return <div className="youtube video-responsive">
                <iframe 
                src={`https://www.youtube.com/embed/${videoId}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0" allowFullScreen></iframe>
            </div>;
    } else {
        return <></>;
    }
}

export default Youtube;