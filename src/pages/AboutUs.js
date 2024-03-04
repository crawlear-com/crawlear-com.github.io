import * as React from 'react';
import Analytics from '../Analytics.js';
import { useTranslation } from 'react-i18next';
import img01 from './styles/img/img01.png';
import img02 from './styles/img/img02.png';
import img03 from './styles/img/img03.png';

import './styles/AboutUs.scss';

function AboutUs() {
    const { t } = useTranslation(['main']);

    React.useEffect(() => {
        Analytics.pageview('/aboutus/');
    },[]);

    return <div className="aboutUsContent">
        <b>crawlear.com</b> {t('content.aboutus')}
        <img src={img01} alt="crawler en accion" />
        <p>{t('content.aboutus1')}</p>
        <img src={img02} alt="crawler en accion2" />
        <p>{t('content.aboutus2')}</p>
        <img src={img03} alt="crawler en accion3" />
        <p><a href="/">{'>'} Volver</a></p>
    </div>;
}

export default AboutUs;