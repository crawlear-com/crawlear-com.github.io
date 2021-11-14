import * as React from 'react';
import Analytics from '../Analytics';
import { useTranslation } from 'react-i18next';
import img01 from '../resources/img/img01.png';
import img02 from '../resources/img/img02.png';
import img03 from '../resources/img/img03.png';

import '../resources/css/AboutUs.css';

function AboutUs({onLinkClicked}) {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        Analytics.pageview('/aboutus/');
    },[]);

    return <div className="aboutUsContent">
        <b>crawlear.com</b> {t('content.aboutus')}
        <img src={img01} alt="crawler en accion" />
        <p>{t('content.aboutus1')}</p>
        <img src={img02} alt="crawler en accion2" />
        <p>{t('content.aboutus2')}</p>
        <p><a onClick={onLinkClicked} href="#void">{'>'} Volver</a></p>
    </div>;
}

export default AboutUs;