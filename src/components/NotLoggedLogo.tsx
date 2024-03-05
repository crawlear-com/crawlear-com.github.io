import * as React from 'react'
import logo from '../resources/img/logo3.webp'

function NotLoggedLogo() {
    const fb = window.crawlear && window.crawlear.fbBase

    if (!fb || !fb.isUserLogged()) {
        return <a href="https://crawlear.com" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a>
    } else {
        return <></>
    }
}

export default NotLoggedLogo