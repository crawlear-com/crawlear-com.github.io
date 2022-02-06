import * as React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../resources/img/logo5.png'
import '../resources/css/Menu.scss';
import pdf from '../resources/pdf/Reglamento Campeonato Nacional de Crawler 2022.pdf'

function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useTranslation();

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return <header className="App-header">
            <div className="rounded menuContainer open" onClick={onMenuClick}>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="burguerMenuBar"></div>
                <div className="linksContainer">
                    <ul>
                        <li><a href="/">{t("description.paginaprincipal")}</a></li>
                        <li><a href="/privacypolicy">{t("description.politicaprivacidad")}</a></li>
                        <li><a href="/aboutus">{t("description.aboutus")}</a></li>
                        <li>-</li>
                        <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR Crawler</a></li>
                        <li><a href={pdf}>Reglamento Campeonato Nacional de Crawler 2022</a></li>
                    </ul>
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
            <img src={logo} alt="web logo"></img>
        </header>;
    }

}

export default Menu;