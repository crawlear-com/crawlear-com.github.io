import * as React from 'react'
import { useTranslation } from 'react-i18next'

const LIGHTMODE_CLASS = 'lightMode'

interface LightModeSwitcherProps {
    onClick: Function
}

function LightModeSwitcher({ onClick }: LightModeSwitcherProps) {
    const { t } = useTranslation(['main']);
    const [lightMode, setLightMode] = React.useState(false)

    function switchLightMode(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        event.stopPropagation();

        if (lightMode) {
            setLightMode(false);
            document.body.classList.remove(LIGHTMODE_CLASS);
        } else {
            setLightMode(true);
            document.body.classList.add(LIGHTMODE_CLASS);
        }
        onClick()
    }

    return <div className="lightModeSwitch" onClick={switchLightMode}>{t("description.lightdarktheme")}</div>
}

export default LightModeSwitcher