import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo5 from '../resources/img/logo3.png';

import '../resources/css/MainPageTextContent.scss';

function MainPageTextContent() {
    const { t } = useTranslation();

    return <div className="aboutUsContent">
        <figure className="logoImg">
            <img alt="crawlear logo" src={logo5}></img>
            
        </figure>

        <b>crawlear.com</b> {t('content.welcomeMessage')}

        </div>;
}

export default MainPageTextContent;

