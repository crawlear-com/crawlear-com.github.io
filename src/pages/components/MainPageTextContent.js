import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo5 from '../../resources/img/logo3.webp';

import '../styles/MainPageTextContent.scss';

function MainPageTextContent() {
    const { t } = useTranslation(['landing']);

    return <div className="aboutUsContent">
        <figure className="logoImg">
            <img width={351} height={252} alt="crawlear logo" src={logo5}></img>
        </figure>

        <p>
            <b>crawlear.com</b> {t('content.welcomeMessage')} <br /><br />
            {t('content.welcomeMessage2')}
        </p>
        </div>;
}

export default MainPageTextContent;

