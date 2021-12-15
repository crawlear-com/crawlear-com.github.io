import * as React from 'react';
import { useTranslation } from 'react-i18next';
import headLogo from '../resources/img/img00.png';
import YoutubeEmbed from './YoutubeEmbed';

import '../resources/css/MainPageTextContent.scss';

function MainPageTextContent() {
    const { t } = useTranslation();

    return <div className="aboutUsContent">
        <b>crawlear.com</b> {t('content.welcomeMessage')}
        <figure>
            <img className="contentImg" alt="crawlers in action" src={headLogo}></img>
            <figcaption><a href="https://www.instagram.com/p/CT7FX_CMag7/">img @takezorc</a></figcaption>
        </figure>

        <p><div className="inline bold">{t('description.instrucciones')}</div>: {t('content.instrucciones')}</p>

        <p>{t('content.instrucciones1')}</p>

        <YoutubeEmbed embedId="vXCjXkd5P4w" />
        
        </div>;
}

export default MainPageTextContent;

