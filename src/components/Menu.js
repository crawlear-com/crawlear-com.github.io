import * as React from 'react';
import '../resources/css/Menu.css';
import Analytics from '../Analytics';

import pdf from '../resources/1 24 REGLAMENTO CRAWLER DEPORTIVO Y TECNICO 2021 V1 BORRADOR 19-1-2021.pdf'

function Menu({onLinkClicked}) {
    const [isOpen, setIsOpen] = React.useState(false);

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    function clickAction(event) {
        onLinkClicked(event.target.dataset.link);
    }

    React.useEffect(() => {
        Analytics.pageview('/menu/');
    },[]);

    if (isOpen) {
        return <div className="rounded menuContainer open" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="linksContainer">
                <ul>
                    <li><a href="#void" data-link="aboutus" onClick={clickAction}>About us</a></li>
                    <li><a href="/privacy.html">Privacy Policy</a></li>
                    <li>-</li>
                    <li><a href="https://www.aecar.org/modalidades.php?tipo=crawler">AECAR Crawler</a></li>
                    <li><a href={pdf} data-link="aboutus" onClick={clickAction}>1/24 Reglamento Deportivo oficial 2021</a></li>
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