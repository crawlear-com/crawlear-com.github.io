import { t } from 'i18next';
import * as React from 'react';
import Logo from '../../resources/img/telegramLogo.png';
import '../../resources/css/embed/TelegramSharer.scss';

function TelegramSharer({ url }) {
    return <a href={`https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURI(t('content.shareText'))}`} target="_blank" data-action="share/whatsapp/share">
        <img className="telegramLogo" src={Logo} alt="whatsapp logo" />
    </a>;
}

export default TelegramSharer;