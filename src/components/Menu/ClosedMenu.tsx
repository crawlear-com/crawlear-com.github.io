import * as React from 'react'

interface ClosedMenuProps {
    OnClickMenu: React.MouseEventHandler<HTMLDivElement>
}

function ClosedMenu({ OnClickMenu }: ClosedMenuProps ) {
    return <div data-testid="menuContainer" className="rounded menuContainer closed" onClick={OnClickMenu}>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
            <div data-testid="burguerMenuBar" className="burguerMenuBar"></div>
        </div>
}

export default ClosedMenu