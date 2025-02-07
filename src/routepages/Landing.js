import * as React from 'react'
import { lazy } from 'react'
import SuspenseComponent from '../SuspenseComponent'

import GoogleAnalytics from '../analytics/GoogleAnalytics'
import MainPageTextContent from './components/MainPageTextContent'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'

import image from './styles/img/btn_google_signin_light_pressed_web.webp'
import Levante124Logo from './styles/img/Levante124Logo.webp'
import ZonaclubrcLogo from './styles/img/zonaclubrcLogo.webp'
import MiniCrawlerPassionLogo from './styles/img/mcpLogo.webp'
import RouteSearchImage from './styles/img/routeSearch.webp'

import './styles/Landing.scss';
import UseLanding from './hooks/UseLanding'

const Offline = lazy(() => import('./Offline'))
const RoutesSearch = lazy(() => import('../modules/routesSerch/RoutesSearch'))

function Landing({onLogin}) {
    const { t } = useTranslation(['landing'])
    const [clickOnGoogleSignIn, onRouteMapClick, routeClicked] = UseLanding(onLogin)

    if (!navigator.onLine) {
        return <SuspenseComponent lazyComponent={<Offline />} />
    } else {
        return <div className='landing'>
        <GoogleAnalytics page="/landing/" />
        <MainPageTextContent />
        { routeClicked ?
            <SuspenseComponent lazyComponent={<RoutesSearch></RoutesSearch>} /> :
            <>
                <img width={375} height={267} className="routeSerarchImage" src={RouteSearchImage} onClick={onRouteMapClick} loading="lazy" alt='route search to click' /> 
                <div className='routeSerarchImageText'>{t('content.clickImagen')}</div>
            </>
        }
        <div className="loginAndContent aboutUsContent">
            <p><b>{t('content.landingMainText')}</b>:</p>
            <img width={191} height={46} className="crawlerImageSignIn" loading="lazy" src={image} alt="t2 crawler" onClick={clickOnGoogleSignIn} />
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' width={100} height={100} loading="lazy" src={Levante124Logo} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" alt="Club ZonaRc website" rel="noreferrer" target='_blank'><img width={100} height={100} loading="lazy" className='collaborateLogo' src={ZonaclubrcLogo} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' width={100} height={106} loading="lazy" src={MiniCrawlerPassionLogo} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer />
        </div>
    }
}

export default Landing;