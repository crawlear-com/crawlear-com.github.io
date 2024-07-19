"use client"

import * as React from 'react'
import Analytics from '../Analytics'

import './styles/PrivacyPolicy.scss'

function PrivacyPolicy() {
    React.useEffect(() => {
        Analytics.pageview('/privacypolicy/')
    },[]);

    return <>
        <div className="privacyPolicy">
            <b>Privacy Policy</b>:
            <ul>
                <li>crawlear.com</li>
                <li>contact: crawlear.com@gmail.com</li>
            </ul>
            <ul>
                <li>The personal information stored and used by crawlear.com are just stored to get a full user experience, game progresion and scores.</li>
                <li>Information used from google profile account is the displayName and photoURL</li>
                <li>when a game is public, the location and other game information will be used to enrich the user experience</li>
            </ul>
            Advertising:
            <ul>
                <li>Advertising providers (google) use cookies to display relevant ads based on a user's previous visits to their website or other websites.</li>
                <li>The use of advertising cookies allows providers (google) and their partners to display advertisements based on the visits made by users to their websites or to other websites on the Internet.</li>
                <li>Users can disable personalized advertising. To do this, they will need to access Ads Preferences.</li>
            </ul>
            Cookies from other providers or advertising networks can also be used to publish advertisements on the site:
            <ul>
                <li>Advertisements from other providers and ad networks are displayed.</li>
                <li>You can visit the providers' websites to disable the use of cookies for personalized advertising (in case the provider or the ad network offers this option).</li>
                <li>You can also access www.aboutads.info to disable the use of cookies for personalized advertising by other providers.</li>
            </ul>


            <b>Politica de privacidad</b>:
            <ul>
                <li>crawlear.com</li>
                <li>contacto: Jose Angel Anguita en crawlear.com@gmail.com</li>
            </ul>
            <ul>
                <li>La información personal guardada y usada por crawlear.com es guardada simplemente para ofrecer una experiencia de usuario más completa.</li>

                <li>La información utilizada de la cuenta de google.com es tan sólo el displayName y photoURL</li>
                <li>Cuando un juego es público, la localización y otras propiedades del juego serán usadas para enriquecer la experiencia de usuario</li>
            </ul>
            Publicidad:
            <ul>
                <li>Los proveedores de publicidad (google) usa cookies para mostrar anuncios relevantes basado en las visitas previas a su página web u otras páginas web.</li>
                <li>El uso de las cookies de publicidad permnite a los proveedores (google) y sus partners para mostrar anuncios basados en las visitas realizadas a sus páginas web u otras páginas de Internet.</li>
                <li>Usuarios pueden deshabilitar la publicidad personalizada. Para hacerlo, es necesario acceder a las preferencias de publicidad.</li>
            </ul>
            Cookies de otros proveedores o redes de publicidad  pueden también ser usadas para publicar publicidad en el sitio web: 
            <ul>
                <li>Publicidad de otros proveedores o redes de publicidad se muestran.</li>
                <li>Puedes visitar las páginas web de dichos proveedores para deshabilitar el uso de cookies para la publicidad personalizada (en caso de que el proveedore de publicidad lo permita).</li>
                <li>Tambien puedes visistar www.aboutads.info para deshabilitar el uso de cookies para la personalización de publicidad por otros proveedores.</li>
            </ul>
        </div>
        <a href="/">&gt; Back</a>
    </>
}

export default PrivacyPolicy;

