import * as React from 'react';
import UseScript from '../../hooks/UseScript';
import Utils from '../../../../Utils';
import '../../styles/embed/Tiktok.scss';

function Tiktok({ url }) {
    const millis  = new Date().getMilliseconds();
    UseScript(`https://www.tiktok.com/embed.js?t=${millis}`,`tiktok-embed-loader${millis}`);

    return <blockquote className="tiktok-embed" cite={url} data-video-id={Utils.getTiktokVideoId(url)} 
        style={{maxWidth: "605px", minWidth: "325px"}}>
            <section> 
            </section>
        </blockquote>;
}

export default Tiktok;