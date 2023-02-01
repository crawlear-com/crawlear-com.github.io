import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageTextContent from '../MainPageTextContent.js';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';
import Offline from './Offline.js';
import Footer from '../Footer.js';

import image from '../../resources/img/btn_google_signin_light_pressed_web.png';
import Levante124Logo from '../../resources/img/Levante124Logo.jpeg';
import ZonaclubrcLogo from '../../resources/img/zonaclubrcLogo.png';
import MiniCrawlerPassionLogo from '../../resources/img/mcpLogo.png';

import '../../resources/css/Landing.scss';

function Landing({onLogin}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const firebase = window.crawlear.fb;
    const isOffline = !navigator.onLine;
    
    function signInCallback() {
        onLogin(true);
        navigate("/completegame");
    }

    React.useEffect(() => {
        firebase.checkIfLogged(onLogin);
        Analytics.pageview('/landing/');
    },[]);

    if (isOffline) {
        return <>
            <Offline />
        </>;
    } else {
        return <>
        <MainPageTextContent />

        <div className="loginAndContent aboutUsContent">
            <p>{t('content.landingMainText')}:</p>
            <img className="crawlerImageSignIn" src={image} alt="t2 crawler" onClick={()=> {
                firebase.signInWithGoogle(signInCallback);
            }} />
            <p>{t('content.licenseText')}</p>
            <p>
                {t('content.colaboraciones')}<br />
                <img className='collaborateLogo' src={Levante124Logo} alt="Levante 1/24 Logo" />
                <a href="https://www.clubzonarc.es/" alt="Club ZonaRc website" rel="noreferrer" target='_blank'><img className='collaborateLogo' src={ZonaclubrcLogo} alt="ZonaRc Logo" /></a>
                <img className='collaborateLogo' src={MiniCrawlerPassionLogo} alt="Mini Crawler Passion Logo"/>
            </p>
        </div>

        <Footer />
        </>
    }
}

export default Landing;