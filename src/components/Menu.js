import * as React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../resources/img/logo5.png'
import '../resources/css/Menu.scss';
import pdfAECAR from '../resources/pdf/Reglamento Campeonato Nacional de Crawler 2022.pdf'
import pdfISRCC from '../resources/pdf/Reglamento ISRCC.pdf'

const LIGHTMODE_CLASS = 'lightMode';

function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useTranslation();
    const [lightMode, setLightMode] = React.useState(false);
    const userIsLoged = (window.crawlear && window.crawlear.fb && window.crawlear.fb.isUserLogged());

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    function switchLightMode(event) {
        event.preventDefault();
        event.stopPropagation();

        if (lightMode) {
            setLightMode(false);
            document.body.classList.remove(LIGHTMODE_CLASS);
        } else {
            setLightMode(true);
            document.body.classList.add(LIGHTMODE_CLASS);
        }
    }

    if (isOpen) {
        return <header className="App-header">
            <div className="rounded menuContainer open" onClick={onMenuClick}>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="linksContainer">
                    <ul>
                        {userIsLoged ? <li><a href="/completegame">{t("description.herramientajuego")}</a></li> : <></>}
                        {userIsLoged ? <li><a href={`/profile?uid=${window.crawlear.user.uid}`}>{t("description.perfilsocial")}</a></li> : <></>}
                        {userIsLoged ? <li>-</li> : <></>}
                        <li><a href="/">{t("description.paginaprincipal")}</a></li>
                        <li><a href="/privacypolicy">{t("description.politicaprivacidad")}</a></li>
                        <li><a href="/aboutus">{t("description.aboutus")}</a></li>
                        <li>-</li>
                        <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR Crawler</a></li>
                        <li><a href={pdfAECAR}>Reglamento Campeonato Nacional de Crawler 2022</a></li>
                        <li><a href="https://isrcc.eu/">ISRCC International Scale Rock Crawler Championship</a></li>
                        <li><a href={pdfISRCC}>Reglamento ISRCC 2022</a></li>
                    </ul>
                    <a className="lightModeSwitch" href="#clear" onClick={switchLightMode}>Modo claro / oscuro</a>
                </div>
            </div>
        </header>;
    } else {
        return <header className="App-header">
            <div className="rounded menuContainer closed" onClick={onMenuClick}>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
            </div>
            <a href="/"><img src={logo} alt="web logo"></img></a>
        </header>;
    }

}

export default Menu;