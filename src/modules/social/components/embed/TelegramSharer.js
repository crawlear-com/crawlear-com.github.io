import * as React from 'react';
import Analytics from '../../../../Analytics';

import Logo from '../../styles/embed/img/telegramLogo.png';
import '../../styles/embed/TelegramSharer.scss';

function TelegramSharer({ url, text }) {
    const shareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURI(text)}`;

    function onLinkClick() {
        Analytics.event('share','telegram', shareUrl);
    }

    return <a onClick={onLinkClick} href={shareUrl} target="_blank" rel="noreferrer">
        <img className="telegramLogo" src={Logo.src} alt="Telegram logo" />
    </a>;
}

export default TelegramSharer;