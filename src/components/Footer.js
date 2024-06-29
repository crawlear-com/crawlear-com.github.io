import * as React from 'react'
import { useTranslation } from '../app/i18n'
import youtubeLogo from '../modules/social/styles/embed/img/youtubelogo.svg'
import instagramLogo from '../modules/social/styles/embed/img/instagramlogo.svg'
import facebookLogo from  '../resources/img/facebooklogo.svg'

async function Footer({ lng }) {
    const { t } = await useTranslation(lng, 'landing')

    return <div data-testid="Footer" className="Footer">
        [©<a href="https://crawlear.com">crawlear.com</a> 2024 - <a href="https://crawlear.com/aboutus">{t('description.aboutus')}</a> - <a href="https://crawlear.com/privacypolicy">{t('description.politicaprivacidad')}</a>]

    <p>
        <a href="https://www.youtube.com/channel/UCNwhl3Mflf-hpTSI1Xo8dSg" rel="noreferrer" target="_blank"><img width={35} height={35} loading="lazy" className='youtubeLogo' src={youtubeLogo.src} alt="youtube logo" /></a>
        <a href="https://www.instagram.com/crawlearcom/" target="_blank" rel="noreferrer"><img width={35} height={35} loading="lazy" className='instagramLogo' src={instagramLogo.src} alt="instagram logo" /></a>
        <a href="https://www.facebook.com/Crawlearcom-106005795418134" target="_blank" rel="noreferrer"><img width={35} height={35} loading="lazy" className='facebookLogo' src={facebookLogo.src} alt="facebook logo" /></a>
    </p>

    </div>
}

export default Footer