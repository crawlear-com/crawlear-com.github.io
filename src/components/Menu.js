import * as React from 'react';
import '../resources/css/Menu.css';

import pdf from '../resources/1 24 REGLAMENTO CRAWLER DEPORTIVO Y TECNICO 2021 V1 BORRADOR 19-1-2021.pdf'

function Menu() {
    const [isOpen, setIsOpen] = React.useState(false);

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return <div className="rounded menuContainer open" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="linksContainer">
                <ul>
                    <li><a href="/">Main page</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                    <li><a href="/aboutus">About us</a></li>
                    <li>-</li>
                    <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR Crawler</a></li>
                    <li><a href={pdf}>1/24 Reglamento Deportivo oficial 2021</a></li>
                </ul>
            </div>
        </div>
    } else {
        return <div className="rounded menuContainer closed" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
        </div>;
    }

}

export default Menu;