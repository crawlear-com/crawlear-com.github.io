"use client"

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Analytics from '../Analytics';
import { useUserSession } from 'src/app/actions/hooks/use-user-session';
import clientTranslationsInit from 'src/resources/language/i18n';

import logo from '../resources/img/logo5.png'
import '../resources/css/Menu.scss';

const LIGHTMODE_CLASS = 'lightMode';

clientTranslationsInit()

function Menu({ session }: { session: string | null }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useTranslation(['landing']);
    const [lightMode, setLightMode] = React.useState(false);
    const userSessionId = useUserSession(session);

    function onMenuClick() {
        setIsOpen(!isOpen)
    }

    function switchLightMode(event) {
        event.preventDefault()
        event.stopPropagation()

        if (lightMode) {
            setLightMode(false)
            document.body.classList.remove(LIGHTMODE_CLASS)
        } else {
            setLightMode(true)
            document.body.classList.add(LIGHTMODE_CLASS)
        }
    }

    function clickEvent(path) {
        Analytics.event('navigation','menu', path)
    }

    if (!userSessionId) {
        return <></>
    } else if (isOpen && userSessionId) {
        return <header className="App-header">
            <div data-testid="menuContainer" className="rounded menuContainer open" onClick={onMenuClick}>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div data-testid="linksContainer" className="linksContainer">
                    <ul>
                        <li><Link href="/social" onClick={()=>{clickEvent("/social")}}>{t("description.perfilsocial")}</Link></li>
                        <li><Link href="/game" onClick={()=>{clickEvent("/game")}}>{t("description.herramientajuego")}</Link></li>
                        <li><Link href="/route" onClick={()=>{clickEvent("/route")}}>{t("description.herramientaruta")}</Link></li>
                        <li>-</li>
                        <li><Link href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR</Link></li>
                        <li><Link href="https://www.clubzonarc.es/">Club ZonaRc</Link></li>
                        <li><Link href="https://isrcc.eu/">ISRCC</Link></li>
                        <li>-</li>
                        <li><Link href="/privacypolicy" onClick={()=>{clickEvent("/privacypolicy")}}>{t("description.politicaprivacidad")}</Link></li>
                        <li><Link href="/aboutus" onClick={()=>{clickEvent("/aboutus")}}>{t("description.aboutus")}</Link></li>
                    </ul>
                    <div className="lightModeSwitch" onClick={switchLightMode}>Modo claro / oscuro</div>
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
            <a href="/"><img src={logo.src} alt="web logo"></img></a>
        </header>;
    }

}

export default Menu;