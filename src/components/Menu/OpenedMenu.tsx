import * as React from 'react'
import LightModeSwitcher from './LightModeSwitcher';
import MenuSocialProfile from './MenuSocialProfile';
import MenuLinkList from './MenuLinkList';

interface OpenedMenuProps {
    OnClickMenu: React.MouseEventHandler<HTMLDivElement>
}

function OpenedMenu({ OnClickMenu }: OpenedMenuProps) {
    return <div data-testid="menuContainer" className="rounded menuContainer open" onClick={OnClickMenu}>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="linksContainer" className="linksContainer">
                <MenuSocialProfile />
                <MenuLinkList />
                <LightModeSwitcher onClick={OnClickMenu}></LightModeSwitcher>
            </div>
        </div>
}

export default OpenedMenu