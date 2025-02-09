import * as React from 'react'
import { lazy } from 'react'

import GoogleAnalytics from '../analytics/GoogleAnalytics'
import MainPageTextContent from './components/MainPageTextContent'
import { useTranslation } from '../app/i18n'
import Footer from '../components/Footer'
import LoginButton from './components/LoginButton'

import Levante124Logo from './styles/img/Levante124Logo.webp'
import ZonaclubrcLogo from './styles/img/zonaclubrcLogo.webp'
import MiniCrawlerPassionLogo from './styles/img/mcpLogo.webp'
import DynamicRutesSearch from '../modules/routesSerch/DynamicRutesSearch'

import './styles/Landing.scss';

const Offline = lazy(() => import('./Offline'))
const RoutesSearch = lazy(() => import('../modules/routesSerch/RoutesSearch'))

async function Landing({ lng }: { lng: string }): Promise<React.JSX.Element> {
    const { t } = await useTranslation(lng, 'landing')
//
//<SuspenseComponent lazyComponent={<Offline />} />

    return <div className='landing'>

        <GoogleAnalytics page="/landing/" />
        <MainPageTextContent />
        <DynamicRutesSearch lng={lng}></DynamicRutesSearch>
        <div className="loginAndContent aboutUsContent">
            <p><b>{t('content.landingMainText')}</b>:</p>
            <LoginButton />
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' width={100} height={100} loading="lazy" src={Levante124Logo} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" rel="noreferrer" target='_blank'><img width={100} height={100} loading="lazy" className='collaborateLogo' src={ZonaclubrcLogo} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' width={100} height={106} loading="lazy" src={MiniCrawlerPassionLogo} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer lng={lng} />
    </div>
}

export default Landing;