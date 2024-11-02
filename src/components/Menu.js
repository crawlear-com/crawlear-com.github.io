import * as React from 'react';
import UseMenu from './hooks/UseMenu';
import { useTranslation } from 'react-i18next';
import useShowHide from '../hooks/useShowHide';

import logo from '../resources/img/logo5.png'
import '../resources/css/Menu.scss';

const HEADER_HEIGHT = 56
const HEADER_HIDECLASS = 'menuHide'

function Menu() {
    const { t } = useTranslation(['main']);
    const [isOpen, onMenuClick, switchLightMode, browseTo] = UseMenu()
    const menuLogo = <a href="/"><img src={logo} alt="web logo"></img></a>
    const  [showClassName] = useShowHide(HEADER_HIDECLASS, HEADER_HEIGHT)

    if (isOpen) {
        return <header className="App-header">
            <div className="rounded menuContainer open" onClick={onMenuClick}>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div data-testid="linksContainer" className="linksContainer">
                    <ul>
                        <li><div onClick={()=>{browseTo("/social")}}>{t("description.perfilsocial")}</div></li>
                        <li><div onClick={()=>{browseTo("/game")}}>{t("description.herramientajuego")}</div></li>
                        <li><div onClick={()=>{browseTo("/route")}}>{t("description.herramientaruta")}</div></li>
                        <li>-</li>
                        <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR</a></li>
                        <li><a href="https://www.clubzonarc.es/">Club ZonaRc</a></li>
                        <li><a href="https://isrcc.eu/">ISRCC</a></li>
                        <li>-</li>
                        <li><div onClick={()=>{browseTo("/privacypolicy")}}>{t("description.politicaprivacidad")}</div></li>
                        <li><div onClick={()=>{browseTo("/aboutus")}}>{t("description.aboutus")}</div></li>
                    </ul>
                    <div className="lightModeSwitch" onClick={switchLightMode}>{t("description.lightdarktheme")}</div>
                </div>
            </div>
            { menuLogo }
        </header>;
    } else {
        return <header className={`App-header ${showClassName}`}>
            <div data-testid="menuContainer" className="rounded menuContainer closed" onClick={onMenuClick}>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
                <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            </div>
            { menuLogo }
        </header>;
    }

}

export default Menu;