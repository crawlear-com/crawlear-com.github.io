import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import logo from '../resources/img/logo5.png'
import '../resources/css/Menu.scss';
import Analytics from '../Analytics';

const LIGHTMODE_CLASS = 'lightMode';

function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useTranslation();
    const [lightMode, setLightMode] = React.useState(false);
    const navigate = useNavigate();

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

    function browseTo(path) {
        Analytics.event('navigation','menu', path);
        navigate(path)
    }

    if (isOpen) {
        return <header className="App-header">
            <div className="rounded menuContainer open" onClick={onMenuClick}>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="linksContainer">
                    <ul>
                        <li><div onClick={()=>{browseTo("/completegame")}}>{t("description.herramientajuego")}</div></li>
                        <li><div onClick={()=>{browseTo("/social")}}>{t("description.perfilsocial")}</div></li>
                        <li><div onClick={()=>{browseTo("/follows")}}>{t("description.murodefollows")}</div></li>
                        <li>-</li>
                        <li><div onClick={()=>{browseTo("/privacypolicy")}}>{t("description.politicaprivacidad")}</div></li>
                        <li><div onClick={()=>{browseTo("/aboutus")}}>{t("description.aboutus")}</div></li>
                        <li>-</li>
                        <li><div href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR Crawler</div></li>
                        <li><div href="https://isrcc.eu/">ISRCC International Scale Rock Crawler Championship</div></li>
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
            <a href="/"><img src={logo} alt="web logo"></img></a>
        </header>;
    }

}

export default Menu;