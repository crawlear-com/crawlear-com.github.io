"use client"

import * as React from 'react'
import '../resources/css/Popup.scss'

interface PopupProps {
    children: React.JSX.Element
    onClose?: Function
}

function Popup({ children, onClose }: PopupProps) {
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

    return <>
            <div title='popup' ref={headerRef} className={`popup rounded rounded2 ${!isVisible ? 'closed' : ''}`}>
                <div title='closeButton' className='bold closeButton' onClick={onHeaderClick}>x</div>   
            { children }
        </div>
    </>
}

export default Popup