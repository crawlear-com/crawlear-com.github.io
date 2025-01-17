import * as React from 'react';
import OpenedMenu from './OpenedMenu';
import ClosedMenu from './ClosedMenu';
import useShowHide from '../../hooks/useShowHide'
import MenuLogo from './MenuLogo';

import '../../resources/css/Menu.scss';

const HEADER_HEIGHT = 56
const HEADER_HIDECLASS = 'menuHide'

interface MenuProps {
    isOpen?: boolean
}

function Menu({ isOpen }: MenuProps) {
    const  [showClassName] = useShowHide(HEADER_HIDECLASS, HEADER_HEIGHT)
    const [isOpenState, setIsOpen] = React.useState(isOpen || false);

    function onMenuClick() {
        setIsOpen(!isOpenState);
    }

    if (isOpenState) {
        return <header className='App-header'>
            <OpenedMenu OnClickMenu={onMenuClick}></OpenedMenu>
            <MenuLogo />
        </header>
    } else {
        return <header className={`App-header ${showClassName}`}>
            <ClosedMenu OnClickMenu={onMenuClick}></ClosedMenu>
            <MenuLogo />
        </header>
    }

}

export default Menu;