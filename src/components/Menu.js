import * as React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import '../resources/css/Menu.css';

function Menu(props) {
    const [isOpen, setIsOpen, onLinkClicked] = React.useState(false);

    function onMenuClick() {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        return <div className="menuContainer open" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="linksContainer">
                <a href="">About us</a>
            </div>
        </div>
    } else {
        return <div className="menuContainer closed" onClick={onMenuClick}>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
        </div>;
    }

}

export default Menu;