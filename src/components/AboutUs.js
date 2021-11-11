import * as React from 'react';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';

import '../resources/css/AboutUs.css';

function AboutUs({onLinkClicked}) {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        ReactGA.pageview('/aboutus/');
    },[]);

    return <div className="aboutUsContent">
        <b>crawlear.com</b> {t('content.aboutus')}
        <p><a onClick={onLinkClicked} href="#void">{'>'} Volver</a></p>
    </div>;
}

export default AboutUs;