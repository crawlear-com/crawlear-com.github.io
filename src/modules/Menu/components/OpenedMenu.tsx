import * as React from 'react'
import LightModeSwitcher from './LightModeSwitcher';
import SocialProfile from './SocialProfile';
import LinkList from './LinkList';

import '../styles/OpenedMenu.scss'

interface OpenedMenuProps {
    OnClickMenu: React.MouseEventHandler<HTMLDivElement>
}

function OpenedMenu({ OnClickMenu }: OpenedMenuProps) {
    return <div data-testid="menuContainer" className="rounded menuContainer open" onClick={OnClickMenu}>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>

            <div data-testid="linksContainer" className="linksContainer">
                <SocialProfile />
                <LinkList />
                <LightModeSwitcher onClick={OnClickMenu}></LightModeSwitcher>
            </div>
        </div>
}

export default OpenedMenu