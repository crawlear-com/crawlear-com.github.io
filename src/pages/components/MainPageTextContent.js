import * as React from 'react';
import logo5 from '../../resources/img/logo3.webp';
import { useTranslation } from '../../app/i18n'
import '../styles/MainPageTextContent.scss';

async function MainPageTextContent({ lng }) {
    const { t } = await useTranslation(lng, 'landing')

    return <div className="aboutUsContent">
        <figure className="logoImg">
            <img width={234} height={168} alt="crawlear logo" src={logo5}></img>
        </figure>

        <p>
            <b>crawlear.com</b> {t('content.welcomeMessage')} <br /><br />
            {t('content.welcomeMessage2')}
        </p>
        </div>;
}

export default MainPageTextContent;

