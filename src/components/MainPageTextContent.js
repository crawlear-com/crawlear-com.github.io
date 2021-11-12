import * as React from 'react';
import { useTranslation } from 'react-i18next';
import headLogo from '../resources/img/img00.png';

function MainPageTextContent() {
    const { t, i18n } = useTranslation();

    return <div className="aboutUsContent">
    <b>crawlear.com</b> {t('content.welcomeMessage')}
    <p>
        <figure>
            <img className="contentImg" alt="crawlers in action" src={headLogo}></img>
            <figcaption><a href="https://www.instagram.com/p/CT7FX_CMag7/">img @takezorc</a></figcaption>
        </figure>
    </p>
    <p>{t('content.instructions')}</p>

    </div>;
}

export default MainPageTextContent;

