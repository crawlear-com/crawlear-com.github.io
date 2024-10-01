import * as React from 'react';
import Logo from '../../styles/embed/img/whatsappLogo.svg';
import Analytics from '../../../../Analytics';

import '../../styles/embed/WhatsappSharer.scss';

function WhatsappSharer({ url, text }) {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURI(text)} ${encodeURIComponent(url)}`;

    function onLinkClick() {
        Analytics.event('share','whatsapp', shareUrl);
    }

    return <a rel="noreferrer" onClick={onLinkClick} href={shareUrl} target="_blank" data-action="share/whatsapp/share">
        <img className="whatsappLogo" src = {Logo} alt="whatsapp logo" />
    </a>;
}

export default WhatsappSharer;

