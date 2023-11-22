import * as React from 'react'
import { useTranslation } from 'react-i18next'

import '../resources/css/Popup.scss'

interface PopupProps {
    children: React.JSX.Element
    onClose?: Function
}

function Popup({ children, onClose }: PopupProps) {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = React.useState(false)
    const headerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setIsVisible(true)
    }, [children])

    function onHeaderClick(e:React.MouseEvent<HTMLDivElement>) {
        headerRef.current?.classList.toggle('closed')
        setIsVisible((oldValue) => {
            const value = !oldValue
            onClose && onClose(value)
            return value
        })
        
    }

    return <div ref={headerRef} className={`popup rounded rounded1 ${!isVisible ? 'closed' : ''}`} onClick={onHeaderClick}>
        <div className='closeButton'>{t('description.clickparacerrar')}</div>
        { children }
    </div>
}

export default Popup