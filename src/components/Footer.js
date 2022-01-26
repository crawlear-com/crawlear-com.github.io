import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function Footer() {
    const { t } = useTranslation();

    return <div className="Footer">
        [©<a href="https://crawlear.com">crawlear.com</a> 2022
        {Utils.isUserLogged() ? <>]</> : <>
            - <a href="https://crawlear.com/aboutus">{t('description.aboutus')}</a> - <a href="https://crawlear.com/privacypolicy">{t('description.politicaprivacidad')}</a>]</>}
    </div>;
}

export default Footer;