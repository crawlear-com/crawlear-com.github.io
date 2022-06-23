import { t } from 'i18next';
import * as React from 'react';
import Logo from '../../resources/img/whatsappLogo.svg';
import '../../resources/css/embed/WhatsappSharer.scss'

function WhatsappSharer({ url }) {
    return <a href={`https://api.whatsapp.com/send?text=${encodeURI(t('content.shareText'))} ${encodeURIComponent(url)}`} target="_blank" data-action="share/whatsapp/share">
        <img className="whatsappLogo" src = {Logo} alt="whatsapp logo" />
    </a>;
}

export default WhatsappSharer;
