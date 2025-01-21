import * as React from 'react'
import { useTranslation } from 'react-i18next'

export const LIGHTMODE_CLASS = 'lightMode'

interface LightModeSwitcherProps {
    onClick: Function
}

function LightModeSwitcher({ onClick }: LightModeSwitcherProps) {
    const { t } = useTranslation(['main']);

    function switchLightMode(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        event.stopPropagation();

        document.body.classList.toggle(LIGHTMODE_CLASS);
        onClick()
    }

    return <div className="lightModeSwitch" onClick={switchLightMode}>{t("description.lightdarktheme")}</div>
}

export default LightModeSwitcher