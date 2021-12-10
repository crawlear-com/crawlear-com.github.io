import * as React from 'react';
import Analytics from '../../Analytics';

import '../../resources/css/PrivacyPolicy.css';

function PrivacyPolicy() {
    
    React.useEffect(() => {
        Analytics.pageview('/privacypolicy/');
    },[]);

    return <div className="privacyPolicy">
        <b>Privacy Policy</b>:
        <ul>
            <li>Advertising providers (google) use cookies to display relevant ads based on a user's previous visits to their website or other websites.</li>
            <li>The use of advertising cookies allows providers (google) and their partners to display advertisements based on the visits made by users to their websites or to other websites on the Internet.</li>
            <li>Los usuarios pueden inhabilitar la publicidad personalizada. Para ello, deberán acceder a Preferencias de anuncios.Users can disable personalized advertising. To do this, they will need to access Ads Preferences.</li>
        </ul>
        Cookies from other providers or advertising networks can also be used to publish advertisements on the site:
        <ul>
            <li>Advertisements from other providers and ad networks are displayed.</li>
            <li>You can visit the providers' websites to disable the use of cookies for personalized advertising (in case the provider or the ad network offers this option).</li>
            <li>You can also access www.aboutads.info to disable the use of cookies for personalized advertising by other providers.</li>
        </ul>
        <a href="/">> Back</a>
    </div>;
}

export default PrivacyPolicy;

