import * as React from 'react';

import Logo from '../../styles/embed/img/telegramLogo.png';
import '../../styles/sharers/TelegramSharer.scss';

function TelegramSharer({ url, text }) {
    const shareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURI(text)}`;

    function onLinkClick() {
        //Analytics.event('share','telegram', shareUrl);
    }

    return <a onClick={onLinkClick} rel="noreferrer" href={shareUrl} target="_blank" data-action="share/whatsapp/share">
        <img className="telegramLogo" src={Logo} alt="whatsapp logo" />
    </a>;
}

export default TelegramSharer;