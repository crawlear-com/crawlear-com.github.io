import * as React from 'react';
import { useTranslation } from 'react-i18next';
import headLogo from '../resources/img/img00.png';

import '../resources/css/MainPageTextContent.css';

function MainPageTextContent() {
    const { t } = useTranslation();

    return <div className="aboutUsContent">
        <b>crawlear.com</b> {t('content.welcomeMessage')}

        <figure>
            <img className="contentImg" alt="crawlers in action" src={headLogo}></img>
            <figcaption><a href="https://www.instagram.com/p/CT7FX_CMag7/">img @takezorc</a></figcaption>
        </figure>

        <p>{t('content.instructions')}</p>

        </div>;
}

export default MainPageTextContent;

