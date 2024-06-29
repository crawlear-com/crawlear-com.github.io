import * as React from 'react'
import { useTranslation } from '../app/i18n'
import dynamic from 'next/dynamic'
import MainPageTextContent from './components/MainPageTextContent'
import Footer from '../components/Footer'
import LoginButton from './components/LoginButton'

import Levante124Logo from './styles/img/Levante124Logo.webp'
import ZonaclubrcLogo from './styles/img/zonaclubrcLogo.webp'
import MiniCrawlerPassionLogo from './styles/img/mcpLogo.webp'

import './styles/Landing.scss';

const DynamicRoutesSearch = dynamic(() => import('../modules/routesSerch/RoutesSearch'), {
    loading: () => <p>Loading RouteSearch...</p>,
    ssr: false
  })
  
async function Landing({ lng }) {
    const { t } = await useTranslation(lng, 'landing')

    return <div className='landing'>
        <MainPageTextContent lng={lng}/>
        <DynamicRoutesSearch lng={lng}></DynamicRoutesSearch>
        <div className="loginAndContent aboutUsContent">
            <p><b>{t('content.landingMainText')}</b>:</p>
            <LoginButton />
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' width={100} height={100} loading="lazy" src={Levante124Logo.src} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" alt="Club ZonaRc website" rel="noreferrer" target='_blank'><img width={100} height={100} loading="lazy" className='collaborateLogo' src={ZonaclubrcLogo.src} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' width={100} height={106} loading="lazy" src={MiniCrawlerPassionLogo.src} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer></Footer>
        </div>

}

export default Landing