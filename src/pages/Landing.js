import * as React from 'react'
import { lazy } from 'react'
import SuspenseComponent from '../SuspenseComponent'

import MainPageTextContent from './components/MainPageTextContent'
import Analytics from '../Analytics'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import RoutesSearch from '../modules/routesSerch/RoutesSearch'

import image from './styles/img/btn_google_signin_light_pressed_web.webp'
import Levante124Logo from './styles/img/Levante124Logo.webp'
import ZonaclubrcLogo from './styles/img/zonaclubrcLogo.webp'
import MiniCrawlerPassionLogo from './styles/img/mcpLogo.webp'

import './styles/Landing.scss';

const Offline = lazy(() => import('./Offline'))

function Landing({onLogin}) {
    const { t } = useTranslation(['landing'])
    const firebase = window.crawlear.fb
    
    function signInCallback() {
        onLogin && onLogin(true)
    }

    React.useEffect(() => {
        Analytics.pageview('/landing/')
    },[]);

    if (!navigator.onLine) {
        return <SuspenseComponent lazyComponent={<Offline />} />
    } else {
        return <div className='landing'>
        <MainPageTextContent />

        <RoutesSearch></RoutesSearch>

        <div className="loginAndContent aboutUsContent">
            <p><b>{t('content.landingMainText')}</b>:</p>
            <img width={191} height={46} className="crawlerImageSignIn" src={image} alt="t2 crawler" onClick={()=> {
                firebase.signInWithGoogle(signInCallback);
            }} />
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' width={100} height={100} src={Levante124Logo} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" alt="Club ZonaRc website" rel="noreferrer" target='_blank'><img width={100} height={100} className='collaborateLogo' src={ZonaclubrcLogo} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' width={100} height={106} src={MiniCrawlerPassionLogo} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer />
        </div>
    }
}

export default Landing;