import * as React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;

    return <div className="Footer">
        [©<a href="https://crawlear.com">crawlear.com</a> 2022
        {firebase.isUserLogged() ? <>]</> : <>
            - <a href="https://crawlear.com/aboutus">{t('description.aboutus')}</a> - <a href="https://crawlear.com/privacypolicy">{t('description.politicaprivacidad')}</a>]</>}
    </div>;
}

export default Footer;