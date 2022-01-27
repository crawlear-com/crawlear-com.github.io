import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageTextContent from '../MainPageTextContent.js';
import Analytics from '../../Analytics.js';
import { useTranslation } from 'react-i18next';

import image from '../../resources/img/btn_google_signin_light_pressed_web.png';
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
        Analytics.pageview('/landing/');
    },[]);

    return <>
        <MainPageTextContent />

        <div className="aboutUsContent">
            <p>{t('content.landingMainText')}:</p>
            <img className="crawlerImageSignIn" src={image} alt="t2 crawler" onClick={()=> {
                    firebase.signInWithGoogle(signInCallback);
                }} />
            <p>{t('content.landingSecondText')}:</p>
            <p className="googleSignInButton">
                <button className="importantNote" onClick={() => {
                    navigate("/simplegame");
                    }}>{t('gametype.partidarapida')}</button>
            </p>
        </div>
        </>
}

export default Landing;