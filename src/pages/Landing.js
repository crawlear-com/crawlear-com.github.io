import * as React from 'react'
import { lazy } from 'react'
import { useTranslation } from '../app/i18n'
import SuspenseComponent from '../SuspenseComponent'
import MainPageTextContent from './components/MainPageTextContent'
import Footer from '../components/Footer'

import image from './styles/img/btn_google_signin_light_pressed_web.webp'
import Levante124Logo from './styles/img/Levante124Logo.webp'
import ZonaclubrcLogo from './styles/img/zonaclubrcLogo.webp'
import MiniCrawlerPassionLogo from './styles/img/mcpLogo.webp'

import './styles/Landing.scss';

const RoutesSearch = lazy(() => import('../modules/routesSerch/RoutesSearch'))

async function Landing({ onLogin, lng }) {
    const { t } = await useTranslation(lng, 'landing')
    
    return <div className='landing'>
        <MainPageTextContent />
        <SuspenseComponent lazyComponent={<RoutesSearch></RoutesSearch>} />
        <div className="loginAndContent aboutUsContent">
            <p><b>{t('content.landingMainText')}</b>:</p>
            
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' width={100} height={100} loading="lazy" src={Levante124Logo} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" alt="Club ZonaRc website" rel="noreferrer" target='_blank'><img width={100} height={100} loading="lazy" className='collaborateLogo' src={ZonaclubrcLogo} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' width={100} height={106} loading="lazy" src={MiniCrawlerPassionLogo} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer></Footer>
        </div>

}

export default Landing