import * as React from 'react'
import LightModeSwitcher from './LightModeSwitcher';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Analytics from '../../Analytics';
import MenuLogo from './MenuLogo';

interface OpenedMenuProps {
    OnClickMenu: React.MouseEventHandler<HTMLDivElement>
}

function OpenedMenu({ OnClickMenu }: OpenedMenuProps) {
    const navigate = useNavigate()
    const { t } = useTranslation(['main'])

    function browseTo(path: string) {
        Analytics.event('navigation','menu', path);
        navigate(path)
    }

    return <><div data-testid="menuContainer" className="rounded menuContainer open" onClick={OnClickMenu}>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="linksContainer" className="linksContainer">
                <ul>
                    <li onClick={()=>{browseTo("/social")}}>{t("description.perfilsocial")}</li>
                    <li onClick={()=>{browseTo("/game")}}>{t("description.herramientajuego")}</li>
                    <li onClick={()=>{browseTo("/route")}}>{t("description.herramientaruta")}</li>
                    <li>-</li>
                    <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR</a></li>
                    <li><a href="https://www.clubzonarc.es/">Club ZonaRc</a></li>
                    <li><a href="https://isrcc.eu/">ISRCC</a></li>
                    <li>-</li>
                    <li onClick={()=>{browseTo("/privacypolicy")}}>{t("description.politicaprivacidad")}</li>
                    <li onClick={()=>{browseTo("/aboutus")}}>{t("description.aboutus")}</li>
                </ul>
                <LightModeSwitcher onClick={OnClickMenu}></LightModeSwitcher>
            </div>
        </div>
        <MenuLogo />
        </>
}

export default OpenedMenu