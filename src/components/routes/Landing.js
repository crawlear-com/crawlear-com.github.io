import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageTextContent from '../MainPageTextContent.js';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';

import image from '../../resources/img/btn_google_signin_light_pressed_web.png';
import Levante124Logo from '../../resources/img/Levante124Logo.jpeg';
import ZonaclubrcLogo from '../../resources/img/zonaclubrcLogo.png';

import '../../resources/css/Landing.scss';

function Landing({onLoggin}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const firebase = window.crawlear.fb;
    
    function signInCallback() {
        onLoggin();
        navigate("/completegame");
    }

    React.useEffect(() => {
        firebase.checkIfLogged(onLoggin);
        Analytics.pageview('/landing/');
    },[]);
//<p>{t('content.licenseText')}</p>
    return <>
        <MainPageTextContent />

        <div className="aboutUsContent">
            <p>{t('content.landingMainText')}:</p>
            <img className="crawlerImageSignIn" src={image} alt="t2 crawler" onClick={()=> {
                    firebase.signInWithGoogle(signInCallback);
                }} />
            <p>
                <div>{t('content.colaboraciones')}</div>
                <img className='collaborateLogo' src={Levante124Logo} alt="Levante 1/24 Logo" />
                <img className='collaborateLogo' src={ZonaclubrcLogo} alt="CopaEspana Logo" />
            </p>
        </div>
        </>
}

export default Landing;