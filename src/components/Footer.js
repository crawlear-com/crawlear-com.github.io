import * as React from 'react'
import { useTranslation } from 'react-i18next'
import youtubeLogo from '../modules/social/styles/embed/img/youtubelogo.svg'
import instagramLogo from '../modules/social/styles/embed/img/instagramlogo.svg'
import facebookLogo from  '../resources/img/facebooklogo.svg'

function Footer() {
    const { t } = useTranslation(['main']);
    const firebase = window.crawlear.fbBase;

    return <div className="Footer">
        [©<a href="https://crawlear.com">crawlear.com</a> 2024
        {firebase.isUserLogged() ? <>]</> : <>
            - <a href="https://crawlear.com/aboutus">{t('description.aboutus')}</a> - <a href="https://crawlear.com/privacypolicy">{t('description.politicaprivacidad')}</a>]</>}

    <p>
        <a href="https://www.youtube.com/channel/UCNwhl3Mflf-hpTSI1Xo8dSg" target="_blank"><img width={35} height={35} className='youtubeLogo' src={youtubeLogo} alt="youtube logo" /></a>
        <a href="https://www.instagram.com/crawlearcom/" target="_blank"><img width={35} height={35} className='instagramLogo' src={instagramLogo} alt="instagram logo" /></a>
        <a href="https://www.facebook.com/Crawlearcom-106005795418134" target="_blank"><img width={35} height={35} className='facebookLogo' src={facebookLogo} alt="facebook logo" /></a>
    </p>

    </div>;
}

export default Footer;