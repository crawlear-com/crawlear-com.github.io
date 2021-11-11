import * as React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import '../resources/css/Menu.css';
import ReactGA from 'react-ga';

function Menu(props) {
    const [isOpen, setIsOpen, onLinkClicked] = React.useState(false);

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    React.useEffect(() => {
        ReactGA.pageview('/menu/');
    },[]);

    if (isOpen) {
        return <div className="rounded menuContainer open" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="linksContainer">
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="/privacy.html">Privacy Policy</a></li>
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